import 'server-only'
import { connectToDatabase } from '@/lib/mongodb'
import Person from '@/models/Person'
import {
  PERSON_GROUPS,
  type PersonGroup,
  type PersonView,
} from '@/lib/personGroups'
import {
  SEED_ADVISORY_BOARD,
  SEED_BLOG_ADMIN,
  SEED_EDITORIAL_BOARD,
  SEED_FACULTY,
  SEED_GUEST_EDITOR,
  SEED_STUDENT_EDITORS,
} from '@/lib/personSeed'

/* eslint-disable @typescript-eslint/no-explicit-any */
function serialize(doc: any): PersonView {
  return {
    id: String(doc._id),
    name: doc.name ?? '',
    position: doc.position ?? '',
    organization: doc.organization ?? '',
    location: doc.location ?? '',
    bio: doc.bio ?? '',
    image: doc.image ?? '',
    linkedin: (doc.linkedin ?? '').trim(),
    email: doc.email ?? '',
    phone: doc.phone ?? '',
    tags: doc.tags ?? [],
    qualifications: doc.qualifications ?? [],
    experience: doc.experience ?? '',
    group: doc.group as PersonGroup,
    order: doc.order ?? 0,
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export interface PersonInput {
  name?: string
  position?: string
  organization?: string
  location?: string
  bio?: string
  image?: string
  linkedin?: string
  email?: string
  phone?: string
  tags?: string[]
  qualifications?: string[]
  experience?: string
  group?: string
}

export class PersonValidationError extends Error {
  fields: Record<string, string>
  constructor(fields: Record<string, string>) {
    super('Validation failed')
    this.name = 'PersonValidationError'
    this.fields = fields
  }
}

export function validatePerson(input: PersonInput) {
  const errors: Record<string, string> = {}
  const name = (input.name || '').trim()

  if (name.length < 2) errors.name = 'A name is required.'
  else if (name.length > 120) errors.name = 'That name is too long.'

  if (!input.group || !PERSON_GROUPS.includes(input.group as PersonGroup))
    errors.group = 'Unknown section.'

  const link = (input.linkedin || '').trim()
  if (link && !/^https?:\/\//i.test(link) && link !== '#')
    errors.linkedin = 'Use a full https:// link.'

  const email = (input.email || '').trim()
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = 'That email address is not valid.'

  const image = (input.image || '').trim()
  if (image && !/^(https?:\/\/|\/)/i.test(image) && !image.startsWith('data:image/'))
    errors.image = 'Photo must be an upload or an https link.'

  return errors
}

let seedPromise: Promise<void> | null = null

/* eslint-disable @typescript-eslint/no-explicit-any */
async function seedIfEmpty() {
  if ((await Person.estimatedDocumentCount()) > 0) return

  const rows: any[] = []
  const push = (p: any, group: PersonGroup, order: number) =>
    rows.push({
      name: p.name,
      position: p.position ?? '',
      organization: p.organization ?? '',
      location: p.location ?? '',
      bio: p.bio ?? '',
      // The placeholder path never resolved to a real file.
      image: (p.image ?? '').includes('/api/placeholder') ? '' : (p.image ?? ''),
      linkedin: (p.linkedin ?? '').trim(),
      email: p.email ?? '',
      phone: p.phone ?? '',
      tags: p.expertise ?? p.specialization ?? [],
      qualifications: p.qualifications ?? [],
      experience: p.experience ?? '',
      group,
      order,
      createdBy: 'seed',
    })

  SEED_EDITORIAL_BOARD.forEach((p, i) => push(p, 'editorial-board', 1000 - i))
  push(SEED_GUEST_EDITOR, 'guest-editor', 1000)
  SEED_STUDENT_EDITORS.forEach((p, i) => push(p, 'student-editor', 1000 - i))
  push(SEED_BLOG_ADMIN, 'blog-admin', 1000)
  SEED_ADVISORY_BOARD.forEach((p, i) => push(p, 'advisory-board', 1000 - i))
  SEED_FACULTY.forEach((p, i) => push(p, 'faculty', 1000 - i))

  try {
    await Person.insertMany(rows, { ordered: false })
  } catch (error) {
    if ((error as { code?: number }).code !== 11000) throw error
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

async function ensureSeeded() {
  await connectToDatabase()
  if (!seedPromise) {
    seedPromise = seedIfEmpty().catch((error) => {
      seedPromise = null // let the next request retry
      throw error
    })
  }
  await seedPromise
}

/** All people, grouped, in display order. */
export async function listPeople(): Promise<Record<PersonGroup, PersonView[]>> {
  await ensureSeeded()
  const docs = await Person.find({}).sort({ order: -1, createdAt: 1 }).lean()

  const out = Object.fromEntries(PERSON_GROUPS.map((g) => [g, [] as PersonView[]])) as Record<
    PersonGroup,
    PersonView[]
  >
  for (const doc of docs) {
    const person = serialize(doc)
    if (out[person.group]) out[person.group].push(person)
  }
  return out
}

export async function listGroup(group: PersonGroup): Promise<PersonView[]> {
  await ensureSeeded()
  const docs = await Person.find({ group }).sort({ order: -1, createdAt: 1 }).lean()
  return docs.map((doc) => serialize(doc))
}

function normalise(input: PersonInput) {
  const clean = (v: string | undefined, max: number) => (v || '').trim().slice(0, max)
  return {
    name: clean(input.name, 120),
    position: clean(input.position, 160),
    organization: clean(input.organization, 200),
    location: clean(input.location, 120),
    bio: clean(input.bio, 2000),
    image: (input.image || '').trim(),
    linkedin: clean(input.linkedin, 400),
    email: clean(input.email, 160).toLowerCase(),
    phone: clean(input.phone, 60),
    tags: (input.tags || []).map((t) => t.trim()).filter(Boolean).slice(0, 20),
    qualifications: (input.qualifications || []).map((t) => t.trim()).filter(Boolean).slice(0, 20),
    experience: clean(input.experience, 400),
  }
}

export async function createPerson(input: PersonInput, createdBy: string): Promise<PersonView> {
  const errors = validatePerson(input)
  if (Object.keys(errors).length) throw new PersonValidationError(errors)

  await ensureSeeded()
  const doc = await Person.create({
    ...normalise(input),
    group: input.group as PersonGroup,
    // New entries sort above everything already in their section.
    order: 2000,
    createdBy,
  })
  return serialize(doc.toObject())
}

export async function updatePerson(id: string, input: PersonInput): Promise<PersonView | null> {
  if (!/^[0-9a-fA-F]{24}$/.test(id)) return null

  const errors = validatePerson(input)
  if (Object.keys(errors).length) throw new PersonValidationError(errors)

  await ensureSeeded()
  const existing = await Person.findById(id)
  if (!existing) return null

  Object.assign(existing, normalise(input))
  existing.group = input.group as PersonGroup
  await existing.save()
  return serialize(existing.toObject())
}

export async function deletePerson(id: string) {
  if (!/^[0-9a-fA-F]{24}$/.test(id)) return false
  await connectToDatabase()
  const res = await Person.deleteOne({ _id: id })
  return res.deletedCount === 1
}
