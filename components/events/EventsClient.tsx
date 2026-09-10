'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Calendar,
  Clock,
  ExternalLink,
  MapPin,
  Pencil,
  Plus,
  Trash2,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEdit } from '@/components/editable/EditProvider'
import Editable from '@/components/editable/Editable'
import EventDialog from '@/components/events/EventDialog'
import ConfirmDialog from '@/components/ui/ConfirmDialog'
import type { EventView } from '@/lib/events'

const CATEGORY_STYLES: Record<string, string> = {
  Conclave: 'bg-purple-100 text-purple-800',
  Conference: 'bg-purple-100 text-purple-800',
  Course: 'bg-blue-100 text-blue-800',
  Workshop: 'bg-blue-100 text-blue-800',
  Outreach: 'bg-green-100 text-green-800',
  Competition: 'bg-orange-100 text-orange-800',
  Inauguration: 'bg-amber-100 text-amber-800',
  Seminar: 'bg-teal-100 text-teal-800',
}

export default function EventsClient({
  upcoming,
  past,
}: {
  upcoming: EventView[]
  past: EventView[]
}) {
  const edit = useEdit()
  const router = useRouter()
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editing, setEditing] = useState<EventView | null>(null)
  const [confirming, setConfirming] = useState<EventView | null>(null)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState('')

  const canManage = Boolean(edit?.isAdmin)

  // The admin toolbar links here with ?new=1 to open the composer directly.
  // Read from location rather than useSearchParams: that hook forces this
  // component under a Suspense boundary, which hydrates after the edit-mode
  // state has already flipped and produces an attribute mismatch.
  useEffect(() => {
    if (!canManage) return
    if (new URLSearchParams(window.location.search).get('new') === '1') {
      setEditing(null)
      setDialogOpen(true)
      router.replace('/events', { scroll: false })
    }
  }, [canManage, router])

  const remove = async (event: EventView) => {
    setDeleting(true)
    setError('')
    try {
      const res = await fetch(`/api/admin/events/${event.id}`, { method: 'DELETE' })
      if (res.status === 401) {
        setError('Your session expired. Please sign in again.')
        return
      }
      const data = await res.json()
      if (!res.ok || !data.ok) {
        setError(data.message || 'Could not delete that event.')
        return
      }
      setConfirming(null)
      router.refresh()
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setDeleting(false)
    }
  }

  const openNew = () => {
    setEditing(null)
    setDialogOpen(true)
  }

  return (
    <>
      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      {/* Upcoming */}
      <section className="mb-16">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-3xl font-bold text-gray-900">
            <Editable id="events.upcoming.title" as="span" label="Upcoming heading">Upcoming</Editable>{' '}
            <span className="text-blue-600">
              <Editable id="events.upcoming.title-accent" as="span" label="Upcoming heading (blue)">Events</Editable>
            </span>
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">
              {upcoming.length} {upcoming.length === 1 ? 'event' : 'events'} <Editable id="cmp.events.eventsclient.scheduled" as="span">scheduled</Editable>
            </span>
            {canManage && <AddButton onClick={openNew} />}
          </div>
        </div>

        {upcoming.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                canManage={canManage}
                onEdit={() => {
                  setEditing(event)
                  setDialogOpen(true)
                }}
                onDelete={() => setConfirming(event)}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            label="No upcoming events right now."
            canManage={canManage}
            onAdd={openNew}
          />
        )}
      </section>

      {/* Past */}
      <section>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-3xl font-bold text-gray-900">
            <Editable id="events.past.title" as="span" label="Past heading">Past</Editable>{' '}
            <span className="text-blue-600">
              <Editable id="events.past.title-accent" as="span" label="Past heading (blue)">Events</Editable>
            </span>
          </h2>
          <span className="text-sm text-gray-500">
            {past.length} {past.length === 1 ? 'event' : 'events'} <Editable id="cmp.events.eventsclient.completed" as="span">completed</Editable>
          </span>
        </div>

        {past.length > 0 ? (
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {past.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isPast
                canManage={canManage}
                onEdit={() => {
                  setEditing(event)
                  setDialogOpen(true)
                }}
                onDelete={() => setConfirming(event)}
              />
            ))}
          </div>
        ) : (
          <EmptyState label="No past events recorded yet." canManage={false} onAdd={() => {}} />
        )}
      </section>

      <EventDialog
        open={dialogOpen}
        event={editing}
        onClose={() => {
          setDialogOpen(false)
          setEditing(null)
        }}
      />

      <ConfirmDialog
        open={confirming !== null}
        title="Delete this event?"
        body={`“${confirming?.title ?? ''}” will be permanently removed from the Events page. This cannot be undone.`}
        confirmLabel="Delete event"
        busy={deleting}
        onCancel={() => setConfirming(null)}
        onConfirm={() => confirming && remove(confirming)}
      />
    </>
  )
}

function AddButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:scale-105 hover:brightness-110"
    >
      <Plus className="h-4 w-4 transition-transform group-hover:rotate-90" />
      <Editable id="cmp.events.eventsclient.add-event" as="span">Add event</Editable>
    </button>
  )
}

function EmptyState({
  label,
  canManage,
  onAdd,
}: {
  label: string
  canManage: boolean
  onAdd: () => void
}) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 px-8 py-14 text-center">
      <p className="text-slate-500">{label}</p>
      {canManage && (
        <button
          type="button"
          onClick={onAdd}
          className="mt-5 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600"
        >
          <Plus className="h-4 w-4" />
          <Editable id="cmp.events.eventsclient.add-the-first-one" as="span">Add the first one</Editable>
        </button>
      )}
    </div>
  )
}

function EventCard({
  event,
  isPast = false,
  canManage,
  onEdit,
  onDelete,
}: {
  event: EventView
  isPast?: boolean
  canManage: boolean
  onEdit: () => void
  onDelete: () => void
}) {
  const detailUrl = event.detailPath || ''
  const hasDetail = Boolean(detailUrl)

  return (
    <div className="group relative overflow-hidden rounded-lg border border-slate-200/40 bg-linear-to-br from-slate-100/95 to-indigo-50/90 shadow-md backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="h-2 bg-linear-to-r from-blue-500 to-indigo-600" />

      {canManage && (
        <div className="absolute right-3 top-5 z-10 flex gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-within:opacity-100">
          <button
            type="button"
            onClick={onEdit}
            aria-label={`Edit ${event.title}`}
            title="Edit event"
            className="grid h-8 w-8 place-items-center rounded-lg bg-white/95 text-slate-600 shadow-md transition-colors hover:text-blue-600"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onDelete}
            aria-label={`Delete ${event.title}`}
            title="Delete event"
            className="grid h-8 w-8 place-items-center rounded-lg bg-white/95 text-slate-600 shadow-md transition-colors hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      )}

      {event.image && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={event.image} alt={event.title} className="h-44 w-full object-cover" />
      )}

      <div className="p-6">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span
            className={cn(
              'rounded-full px-2 py-1 text-xs font-medium',
              isPast ? 'bg-gray-100 text-gray-600' : CATEGORY_STYLES[event.category] || 'bg-green-100 text-green-800'
            )}
          >
            {event.category || 'Event'}
          </span>
          {!isPast && event.status && (
            <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">
              {event.status}
            </span>
          )}
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-900">{event.title}</h3>
        {event.subtitle && <p className="mb-3 font-medium text-blue-600">{event.subtitle}</p>}

        <div className="mb-4 space-y-2">
          <Detail icon={Calendar}>{event.date}</Detail>
          {event.time && <Detail icon={Clock}>{event.time}</Detail>}
          {event.location && <Detail icon={MapPin}>{event.location}</Detail>}
          {(event.attendees || event.speakers.length > 0) && (
            <Detail icon={Users}>
              {isPast
                ? event.attendees || `${event.speakers.length} speakers`
                : event.speakers.length > 0
                  ? `${event.speakers.length} speaker${event.speakers.length === 1 ? '' : 's'}`
                  : event.attendees}
            </Detail>
          )}
        </div>

        <p className="mb-4 leading-relaxed text-gray-600">{event.description}</p>

        {!isPast && event.speakers.length > 0 && (
          <div className="mb-4">
            <p className="mb-2 text-sm font-medium text-gray-900"><Editable id="cmp.events.eventsclient.featured-speakers" as="span">Featured Speakers:</Editable></p>
            <div className="flex flex-wrap gap-1">
              {event.speakers.map((speaker) => (
                <span key={speaker} className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">
                  {speaker}
                </span>
              ))}
            </div>
          </div>
        )}

        {(!isPast && event.registrationLink) || hasDetail ? (
          <div className="flex gap-3">
            {!isPast && event.registrationLink && (
              <a
                href={event.registrationLink}
                target={/^https?:/i.test(event.registrationLink) ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
              >
                <Editable id="cmp.events.eventsclient.register-now" as="span">Register Now</Editable>
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            )}
            {hasDetail && (
              <Link
                href={detailUrl}
                className="rounded-md border border-blue-600 px-4 py-2 font-medium text-blue-600 transition-colors hover:bg-blue-50"
              >
                <Editable id="cmp.events.eventsclient.learn-more" as="span">Learn More</Editable>
              </Link>
            )}
          </div>
        ) : null}
      </div>
    </div>
  )
}

function Detail({ icon: Icon, children }: { icon: typeof Calendar; children: React.ReactNode }) {
  return (
    <div className="flex items-center text-sm text-gray-600">
      <Icon className="mr-2 h-4 w-4 shrink-0 text-blue-500" />
      <span>{children}</span>
    </div>
  )
}
