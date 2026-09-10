import 'server-only'
import { connectToDatabase } from '@/lib/mongodb'
import Event from '@/models/Event'
import { SEED_DETAIL_PATHS, SEED_PAST, SEED_UPCOMING, type SeedEvent } from '@/lib/eventSeed'
import { slugify } from '@/lib/articles'

export interface EventView {
  id: string
  title: string
  slug: string
  subtitle: string
  description: string
  date: string
  time: string
  location: string
  category: string
  speakers: string[]
  attendees: string
  registrationLink: string
  image: string
  detailPath: string
  upcoming: boolean
  status: string
  order: number
  createdAt: string
}

export interface EventInput {
  title?: string
  subtitle?: string
  description?: string
  date?: string
  time?: string
  location?: string
  category?: string
  speakers?: string[]
  attendees?: string
  registrationLink?: string
  image?: string
  upcoming?: boolean
  status?: string
}

export const EVENT_LIMITS = {
  titleMin: 4,
  titleMax: 220,
  descriptionMin: 20,
  descriptionMax: 4000,
}

export function validateEvent(input: EventInput) {
  const errors: Record<string, string> = {}
  const title = (input.title || '').trim()
  const description = (input.description || '').trim()
  const date = (input.date || '').trim()

  if (title.length < EVENT_LIMITS.titleMin) errors.title = 'Give the event a title.'
  else if (title.length > EVENT_LIMITS.titleMax) errors.title = 'That title is too long.'

  if (description.length < EVENT_LIMITS.descriptionMin)
    errors.description = 'Add a short description (at least 20 characters).'
  else if (description.length > EVENT_LIMITS.descriptionMax)
    errors.description = 'That description is too long.'

  if (!date) errors.date = 'Add a date, even an approximate one like "TBA 2026".'

  if (input.registrationLink && !/^(https?:\/\/|\/|#)/i.test(input.registrationLink.trim()))
    errors.registrationLink = 'Use a full https:// link.'

  return errors
}

export class EventValidationError extends Error {
  fields: Record<string, string>
  constructor(fields: Record<string, string>) {
    super('Validation failed')
    this.name = 'EventValidationError'
    this.fields = fields
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function serialize(doc: any): EventView {
  return {
    id: String(doc._id),
    title: doc.title,
    slug: doc.slug,
    subtitle: doc.subtitle ?? '',
    description: doc.description ?? '',
    date: doc.date ?? '',
    time: doc.time ?? '',
    location: doc.location ?? '',
    category: doc.category || 'Event',
    speakers: doc.speakers ?? [],
    attendees: doc.attendees ?? '',
    registrationLink: doc.registrationLink ?? '',
    image: doc.image ?? '',
    detailPath: doc.detailPath ?? '',
    upcoming: Boolean(doc.upcoming),
    status: doc.status ?? '',
    order: doc.order ?? 0,
    createdAt: new Date(doc.createdAt ?? Date.now()).toISOString(),
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

let seedPromise: Promise<void> | null = null

/**
 * Populates an empty collection from the events that used to be hard-coded.
 * Guarded by a module-level promise and a unique slug index, so concurrent
 * requests during a cold start cannot produce duplicates.
 */
async function seedIfEmpty() {
  const count = await Event.estimatedDocumentCount()
  if (count > 0) return

  const toDoc = (seed: SeedEvent, upcoming: boolean, order: number) => ({
    title: seed.title,
    slug: slugify(seed.title) || `event-${seed.id}`,
    subtitle: seed.subtitle ?? '',
    description: seed.description,
    date: seed.date,
    time: seed.time ?? '',
    location: seed.location ?? '',
    category: seed.category || 'Event',
    speakers: seed.speakers ?? [],
    attendees: seed.attendees ?? '',
    registrationLink: seed.registrationLink ?? '',
    detailPath: SEED_DETAIL_PATHS[seed.title] ?? '',
    upcoming,
    status: seed.status ?? '',
    order,
    createdBy: 'seed',
  })

  const docs = [
    ...SEED_UPCOMING.map((e, i) => toDoc(e, true, 1000 - i)),
    ...SEED_PAST.map((e, i) => toDoc(e, false, 1000 - i)),
  ]

  try {
    await Event.insertMany(docs, { ordered: false })
  } catch (error) {
    // Duplicate-key errors just mean another request seeded first.
    const code = (error as { code?: number }).code
    if (code !== 11000) throw error
  }
}

async function ensureSeeded() {
  await connectToDatabase()
  if (!seedPromise) {
    seedPromise = seedIfEmpty().catch((error) => {
      seedPromise = null // allow a retry on the next request
      throw error
    })
  }
  await seedPromise
}

export async function listEvents(): Promise<{ upcoming: EventView[]; past: EventView[] }> {
  await ensureSeeded()
  const docs = await Event.find({}).sort({ order: -1, createdAt: -1 }).lean()
  const all = docs.map(serialize)
  return {
    upcoming: all.filter((e) => e.upcoming),
    past: all.filter((e) => !e.upcoming),
  }
}

export async function getEventBySlug(slug: string): Promise<EventView | null> {
  await ensureSeeded()
  const doc = await Event.findOne({ slug }).lean()
  return doc ? serialize(doc) : null
}

async function uniqueSlug(title: string, ignoreId?: string) {
  const base = slugify(title) || 'event'
  let candidate = base
  let n = 2
  while (await Event.exists({ slug: candidate, ...(ignoreId ? { _id: { $ne: ignoreId } } : {}) })) {
    candidate = `${base}-${n++}`
    if (n > 60) {
      candidate = `${base}-${Date.now().toString(36)}`
      break
    }
  }
  return candidate
}

function normalise(input: EventInput) {
  return {
    title: (input.title || '').trim(),
    subtitle: (input.subtitle || '').trim(),
    description: (input.description || '').trim(),
    date: (input.date || '').trim(),
    time: (input.time || '').trim(),
    location: (input.location || '').trim(),
    category: (input.category || 'Event').trim() || 'Event',
    speakers: (input.speakers || []).map((s) => s.trim()).filter(Boolean).slice(0, 25),
    attendees: (input.attendees || '').trim(),
    registrationLink: (input.registrationLink || '').trim(),
    image: (input.image || '').trim(),
    upcoming: Boolean(input.upcoming),
    status: (input.status || '').trim(),
  }
}

export async function createEvent(input: EventInput, createdBy: string): Promise<EventView> {
  const errors = validateEvent(input)
  if (Object.keys(errors).length) throw new EventValidationError(errors)

  await ensureSeeded()
  const data = normalise(input)
  const doc = await Event.create({
    ...data,
    slug: await uniqueSlug(data.title),
    // New events sort above everything already there.
    order: 2000,
    createdBy,
  })
  return serialize(doc.toObject())
}

export async function updateEvent(id: string, input: EventInput): Promise<EventView | null> {
  if (!/^[0-9a-fA-F]{24}$/.test(id)) return null

  const errors = validateEvent(input)
  if (Object.keys(errors).length) throw new EventValidationError(errors)

  await ensureSeeded()
  const existing = await Event.findById(id)
  if (!existing) return null

  const data = normalise(input)
  if (data.title !== existing.title) existing.slug = await uniqueSlug(data.title, id)

  Object.assign(existing, data)
  await existing.save()
  return serialize(existing.toObject())
}

export async function deleteEvent(id: string) {
  if (!/^[0-9a-fA-F]{24}$/.test(id)) return false
  await connectToDatabase()
  const res = await Event.deleteOne({ _id: id })
  return res.deletedCount === 1
}
