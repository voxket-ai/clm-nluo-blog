'use client'

import { useState } from 'react'
import { Linkedin, Mail, MapPin, Pencil, Phone, Plus, Trash2, Award, BookOpen, GraduationCap, Building } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useEdit } from '@/components/editable/EditProvider'
import ConfirmDialog from '@/components/ui/ConfirmDialog'
import PersonDialog from '@/components/people/PersonDialog'
import { type PersonGroup, type PersonView } from '@/lib/personGroups'

type Variant = 'circle' | 'advisory' | 'faculty'

/**
 * Renders one group of people in that page's established card style and, for
 * a signed-in administrator, the controls to add, edit and remove them.
 */
export default function PeopleSection({
  group,
  people,
  variant,
  columns = 3,
  addLabel = 'Add person',
}: {
  group: PersonGroup
  people: PersonView[]
  variant: Variant
  columns?: 1 | 2 | 3
  addLabel?: string
}) {
  const edit = useEdit()
  const router = useRouter()
  const canManage = Boolean(edit?.isAdmin)

  const [dialogOpen, setDialogOpen] = useState(false)
  const [editing, setEditing] = useState<PersonView | null>(null)
  const [confirming, setConfirming] = useState<PersonView | null>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const remove = async (person: PersonView) => {
    setBusy(true)
    setError('')
    try {
      const res = await fetch(`/api/admin/people/${person.id}`, { method: 'DELETE' })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        setError(data.message || 'Could not remove that person.')
        return
      }
      setConfirming(null)
      router.refresh()
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const grid =
    columns === 1
      // space-y matters once a one-person section gains a second entry.
      ? 'max-w-md mx-auto space-y-8'
      : columns === 2
        ? 'grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto'
        : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'

  return (
    <>
      {error && (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      {people.length > 0 ? (
        <div className={grid}>
          {people.map((person) => (
            <div key={person.id} className="group relative">
              {canManage && (
                <div className="absolute right-3 top-3 z-20 flex gap-1.5 opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={() => {
                      setEditing(person)
                      setDialogOpen(true)
                    }}
                    aria-label={`Edit ${person.name}`}
                    title="Edit"
                    className="grid h-8 w-8 place-items-center rounded-lg bg-white/95 text-slate-600 shadow-md transition-colors hover:text-blue-600"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirming(person)}
                    aria-label={`Remove ${person.name}`}
                    title="Remove"
                    className="grid h-8 w-8 place-items-center rounded-lg bg-white/95 text-slate-600 shadow-md transition-colors hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              )}

              {variant === 'circle' && <CircleCard person={person} />}
              {variant === 'advisory' && <AdvisoryCard person={person} />}
              {variant === 'faculty' && <FacultyCard person={person} />}
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 px-8 py-12 text-center">
          <p className="text-slate-500">No one listed here yet.</p>
        </div>
      )}

      {canManage && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => {
              setEditing(null)
              setDialogOpen(true)
            }}
            className="group inline-flex items-center gap-2 rounded-xl border-2 border-dashed border-slate-300 px-6 py-3 text-sm font-semibold text-slate-600 transition-all hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-600"
          >
            <Plus className="h-4 w-4 transition-transform group-hover:rotate-90" />
            {addLabel}
          </button>
        </div>
      )}

      <PersonDialog
        open={dialogOpen}
        group={group}
        person={editing}
        onClose={() => {
          setDialogOpen(false)
          setEditing(null)
        }}
      />

      <ConfirmDialog
        open={confirming !== null}
        title="Remove this person?"
        body={`${confirming?.name ?? ''} will be removed from this section. This cannot be undone.`}
        confirmLabel="Remove"
        busy={busy}
        onCancel={() => setConfirming(null)}
        onConfirm={() => confirming && remove(confirming)}
      />
    </>
  )
}

function Avatar({ person, size }: { person: PersonView; size: string }) {
  const initials = person.name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase()).join('')
  return (
    <div className={cn('mx-auto overflow-hidden rounded-full border-2 border-blue-200', size)}>
      {person.image ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={person.image} alt={person.name} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-blue-600">
          <span className="text-xl font-bold text-white">{initials}</span>
        </div>
      )}
    </div>
  )
}

function LinkedInLink({ href }: { href: string }) {
  if (!href || href === '#') return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-600 transition-colors duration-200 hover:text-blue-700"
    >
      <Linkedin className="mr-1 h-4 w-4" />
      LinkedIn
    </a>
  )
}

function CircleCard({ person }: { person: PersonView }) {
  return (
    <div className="rounded-lg bg-white p-6 text-center shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="mb-4">
        <Avatar person={person} size="h-32 w-32" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-gray-900">{person.name}</h3>
      {person.position && <p className="mb-1 font-medium text-blue-600">{person.position}</p>}
      {person.organization && <p className="mb-4 text-sm text-gray-600">{person.organization}</p>}
      <LinkedInLink href={person.linkedin} />
    </div>
  )
}

function AdvisoryCard({ person }: { person: PersonView }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="mb-4 flex items-start gap-4">
          <div className="h-20 w-20 shrink-0">
            <Avatar person={person} size="h-20 w-20" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 text-lg font-bold text-gray-900">{person.name}</h3>
            {person.position && <p className="mb-1 text-sm font-medium text-blue-600">{person.position}</p>}
            {person.organization && (
              <div className="mb-2 flex items-center text-xs text-gray-600">
                <Building className="mr-1 h-3 w-3 shrink-0" />
                <span className="truncate">{person.organization}</span>
              </div>
            )}
            {person.location && (
              <div className="flex items-center text-xs text-gray-500">
                <MapPin className="mr-1 h-3 w-3 shrink-0" />
                <span>{person.location}</span>
              </div>
            )}
          </div>
        </div>

        {person.tags.length > 0 && (
          <div className="mb-4">
            <h4 className="mb-2 text-sm font-semibold text-gray-900">Areas of Expertise</h4>
            <div className="flex flex-wrap gap-1">
              {person.tags.map((area) => (
                <span key={area} className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}

        {person.bio && <p className="mb-4 text-sm leading-relaxed text-gray-600">{person.bio}</p>}
        <LinkedInLink href={person.linkedin} />
      </div>
    </div>
  )
}

function FacultyCard({ person }: { person: PersonView }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="p-8">
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-4">
            <Avatar person={person} size="h-32 w-32" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">{person.name}</h3>
          {person.position && <p className="mb-1 font-medium text-blue-600">{person.position}</p>}
          {person.organization && <p className="text-sm text-gray-600">{person.organization}</p>}
        </div>

        <div className="mb-6 space-y-4">
          {person.tags.length > 0 && (
            <div>
              <h4 className="mb-2 flex items-center font-semibold text-gray-900">
                <BookOpen className="mr-2 h-4 w-4 text-blue-500" />
                Specialization
              </h4>
              <div className="flex flex-wrap gap-2">
                {person.tags.map((spec) => (
                  <span key={spec} className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          )}

          {person.qualifications.length > 0 && (
            <div>
              <h4 className="mb-2 flex items-center font-semibold text-gray-900">
                <GraduationCap className="mr-2 h-4 w-4 text-green-500" />
                Qualifications
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                {person.qualifications.map((qual) => (
                  <li key={qual} className="flex items-center">
                    <span className="mr-2 h-2 w-2 rounded-full bg-green-400" />
                    {qual}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {person.experience && (
            <div>
              <h4 className="mb-2 flex items-center font-semibold text-gray-900">
                <Award className="mr-2 h-4 w-4 text-purple-500" />
                Experience
              </h4>
              <p className="text-sm text-gray-600">{person.experience}</p>
            </div>
          )}
        </div>

        {person.bio && (
          <div className="mb-4 border-t pt-4">
            <p className="text-sm leading-relaxed text-gray-600">{person.bio}</p>
          </div>
        )}

        <div className="flex flex-col space-y-2">
          {person.email && (
            <div className="flex items-center text-sm text-gray-600">
              <Mail className="mr-2 h-4 w-4 text-blue-500" />
              <a href={`mailto:${person.email}`} className="transition-colors hover:text-blue-600">
                {person.email}
              </a>
            </div>
          )}
          {person.phone && (
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="mr-2 h-4 w-4 text-green-500" />
              <span>{person.phone}</span>
            </div>
          )}
          {person.linkedin && person.linkedin !== '#' && (
            <div className="flex items-center text-sm text-gray-600">
              <Linkedin className="mr-2 h-4 w-4 text-blue-700" />
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-600">
                LinkedIn Profile
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
