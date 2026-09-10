'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CalendarPlus, ImagePlus, Loader2, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import ImagePicker from '@/components/editable/ImagePicker'
import { EVENT_CATEGORIES } from '@/lib/eventOptions'
import type { EventView } from '@/lib/events'

export interface EventDraft {
  title: string
  subtitle: string
  description: string
  date: string
  time: string
  location: string
  category: string
  speakers: string
  attendees: string
  registrationLink: string
  image: string
  upcoming: boolean
  status: string
}

const EMPTY: EventDraft = {
  title: '', subtitle: '', description: '', date: '', time: '', location: '',
  category: 'Workshop', speakers: '', attendees: '', registrationLink: '',
  image: '', upcoming: true, status: '',
}

function fromEvent(event: EventView): EventDraft {
  return {
    title: event.title,
    subtitle: event.subtitle,
    description: event.description,
    date: event.date,
    time: event.time,
    location: event.location,
    category: event.category,
    speakers: event.speakers.join(', '),
    attendees: event.attendees,
    registrationLink: event.registrationLink,
    image: event.image,
    upcoming: event.upcoming,
    status: event.status,
  }
}

export default function EventDialog({
  open,
  event,
  onClose,
}: {
  open: boolean
  event?: EventView | null
  onClose: () => void
}) {
  const router = useRouter()
  const [draft, setDraft] = useState<EventDraft>(EMPTY)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [message, setMessage] = useState('')
  const [saving, setSaving] = useState(false)
  const [imageOpen, setImageOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    setDraft(event ? fromEvent(event) : EMPTY)
    setErrors({})
    setMessage('')
  }, [open, event])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !saving && !imageOpen) onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, saving, imageOpen, onClose])

  const set = <K extends keyof EventDraft>(key: K, value: EventDraft[K]) => {
    setDraft((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => {
      if (!prev[key as string]) return prev
      const next = { ...prev }
      delete next[key as string]
      return next
    })
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMessage('')

    const payload = {
      ...draft,
      speakers: draft.speakers.split(',').map((s) => s.trim()).filter(Boolean),
    }

    try {
      const res = await fetch(event ? `/api/admin/events/${event.id}` : '/api/admin/events', {
        method: event ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.status === 401) {
        setMessage('Your session expired. Please sign in again.')
        return
      }

      const data = await res.json()
      if (!res.ok || !data.ok) {
        if (data.fields) setErrors(data.fields)
        setMessage(data.message || 'Please check the highlighted fields.')
        return
      }

      onClose()
      router.refresh()
    } catch {
      setMessage('Network error. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => !saving && onClose()} />

      <form
        onSubmit={submit}
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl animate-fade-in-up"
      >
        <header className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-white shadow-sm">
              <CalendarPlus className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-900">{event ? 'Edit event' : 'Add an event'}</h2>
              <p className="text-sm text-slate-500">Appears on the Events page immediately.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
          <Field label="Title" error={errors.title} required>
            <input
              value={draft.title}
              onChange={(e) => set('title', e.target.value)}
              placeholder="3rd GAJE-NLUO Mediation and Negotiation Conclave"
              className={input(errors.title)}
              autoFocus
            />
          </Field>

          <Field label="Subtitle" error={errors.subtitle}>
            <input
              value={draft.subtitle}
              onChange={(e) => set('subtitle', e.target.value)}
              placeholder="International Conclave"
              className={input(errors.subtitle)}
            />
          </Field>

          <Field label="Description" error={errors.description} required>
            <textarea
              value={draft.description}
              onChange={(e) => set('description', e.target.value)}
              rows={4}
              placeholder="What happens at this event and who it is for."
              className={cn(input(errors.description), 'resize-y leading-relaxed')}
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Date" error={errors.date} required hint="Free text — a range is fine.">
              <input
                value={draft.date}
                onChange={(e) => set('date', e.target.value)}
                placeholder="29th January – 2nd February, 2026"
                className={input(errors.date)}
              />
            </Field>
            <Field label="Duration" error={errors.time}>
              <input
                value={draft.time}
                onChange={(e) => set('time', e.target.value)}
                placeholder="5 Days Program"
                className={input(errors.time)}
              />
            </Field>
            <Field label="Location" error={errors.location}>
              <input
                value={draft.location}
                onChange={(e) => set('location', e.target.value)}
                placeholder="NLUO Campus & Virtual"
                className={input(errors.location)}
              />
            </Field>
            <Field label="Category" error={errors.category}>
              <input
                list="event-categories"
                value={draft.category}
                onChange={(e) => set('category', e.target.value)}
                className={input(errors.category)}
              />
              <datalist id="event-categories">
                {EVENT_CATEGORIES.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </Field>
          </div>

          <Field label="Speakers" hint="Separate names with commas." error={errors.speakers}>
            <input
              value={draft.speakers}
              onChange={(e) => set('speakers', e.target.value)}
              placeholder="Prof. Ved Kumari, Charlie Irvine"
              className={input(errors.speakers)}
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Attendance" error={errors.attendees}>
              <input
                value={draft.attendees}
                onChange={(e) => set('attendees', e.target.value)}
                placeholder="200+ participants"
                className={input(errors.attendees)}
              />
            </Field>
            <Field label="Registration link" error={errors.registrationLink}>
              <input
                value={draft.registrationLink}
                onChange={(e) => set('registrationLink', e.target.value)}
                placeholder="https://…"
                className={input(errors.registrationLink)}
              />
            </Field>
          </div>

          <div>
            <span className="mb-1.5 block text-sm font-semibold text-slate-800">Cover image</span>
            {draft.image ? (
              <div className="relative overflow-hidden rounded-xl border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={draft.image} alt="" className="h-40 w-full object-cover" />
                <div className="absolute right-2 top-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setImageOpen(true)}
                    className="rounded-lg bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow"
                  >
                    Change
                  </button>
                  <button
                    type="button"
                    onClick={() => set('image', '')}
                    className="rounded-lg bg-white/95 px-3 py-1.5 text-xs font-semibold text-red-600 shadow"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setImageOpen(true)}
                className="flex h-28 w-full flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-slate-300 text-slate-500 transition-colors hover:border-blue-400 hover:bg-blue-50/40 hover:text-blue-600"
              >
                <ImagePlus className="h-5 w-5" />
                <span className="text-sm font-medium">Add a cover image (optional)</span>
              </button>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <span className="mb-1.5 block text-sm font-semibold text-slate-800">Section</span>
              <div className="flex rounded-xl bg-slate-100 p-1">
                {[
                  { key: true, label: 'Upcoming' },
                  { key: false, label: 'Past' },
                ].map((option) => (
                  <button
                    key={String(option.key)}
                    type="button"
                    onClick={() => set('upcoming', option.key)}
                    className={cn(
                      'flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition-all',
                      draft.upcoming === option.key
                        ? 'bg-white text-blue-700 shadow-sm'
                        : 'text-slate-500 hover:text-slate-800'
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            {draft.upcoming && (
              <Field label="Status badge" error={errors.status} hint='e.g. "Coming Soon"'>
                <input
                  value={draft.status}
                  onChange={(e) => set('status', e.target.value)}
                  placeholder="Coming Soon"
                  className={input(errors.status)}
                />
              </Field>
            )}
          </div>

          {message && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{message}</p>
          )}
        </div>

        <footer className="flex justify-end gap-3 border-t border-slate-200 bg-slate-50/70 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            disabled={saving}
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-200 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 disabled:opacity-60"
          >
            {saving && <Loader2 className="h-4 w-4 animate-spin" />}
            {event ? 'Save event' : 'Add event'}
          </button>
        </footer>
      </form>

      <ImagePicker
        open={imageOpen}
        currentSrc={draft.image || '/events/event1.jpeg'}
        currentAlt={draft.title}
        originalSrc=""
        label="Event cover image"
        onClose={() => setImageOpen(false)}
        onApply={(src) => {
          set('image', src)
          setImageOpen(false)
        }}
        onReset={() => {
          set('image', '')
          setImageOpen(false)
        }}
      />
    </div>
  )
}

function input(error?: string) {
  return cn(
    'w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-300',
    error
      ? 'border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100'
      : 'border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
  )
}

function Field({
  label,
  error,
  hint,
  required,
  children,
}: {
  label: string
  error?: string
  hint?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <span className="mb-1.5 block text-sm font-semibold text-slate-800">
        {label}
        {required && <span className="ml-0.5 text-blue-600">*</span>}
      </span>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-slate-500">{hint}</p>
      ) : null}
    </div>
  )
}
