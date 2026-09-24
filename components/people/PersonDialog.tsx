'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ImagePlus, Loader2, UserPlus, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import ImagePicker from '@/components/editable/ImagePicker'
import { GROUP_FIELDS, GROUP_LABELS, type PersonGroup, type PersonView } from '@/lib/personGroups'

interface Draft {
  name: string
  position: string
  organization: string
  location: string
  bio: string
  image: string
  linkedin: string
  email: string
  phone: string
  tags: string
  qualifications: string
  experience: string
}

const EMPTY: Draft = {
  name: '', position: '', organization: '', location: '', bio: '', image: '',
  linkedin: '', email: '', phone: '', tags: '', qualifications: '', experience: '',
}

function fromPerson(p: PersonView): Draft {
  return {
    name: p.name, position: p.position, organization: p.organization, location: p.location,
    bio: p.bio, image: p.image, linkedin: p.linkedin, email: p.email, phone: p.phone,
    tags: p.tags.join(', '), qualifications: p.qualifications.join(', '), experience: p.experience,
  }
}

export default function PersonDialog({
  open,
  group,
  person,
  onClose,
}: {
  open: boolean
  group: PersonGroup
  person?: PersonView | null
  onClose: () => void
}) {
  const router = useRouter()
  const [draft, setDraft] = useState<Draft>(EMPTY)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [message, setMessage] = useState('')
  const [saving, setSaving] = useState(false)
  const [imageOpen, setImageOpen] = useState(false)

  const shows = (field: string) => GROUP_FIELDS[group]?.includes(field)

  useEffect(() => {
    if (!open) return
    setDraft(person ? fromPerson(person) : EMPTY)
    setErrors({})
    setMessage('')
  }, [open, person])

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

  const set = <K extends keyof Draft>(key: K, value: Draft[K]) => {
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
      group,
      tags: draft.tags.split(',').map((t) => t.trim()).filter(Boolean),
      qualifications: draft.qualifications.split(',').map((t) => t.trim()).filter(Boolean),
    }

    try {
      const res = await fetch(person ? `/api/admin/people/${person.id}` : '/api/admin/people', {
        method: person ? 'PATCH' : 'POST',
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
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-white">
              <UserPlus className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {person ? 'Edit person' : 'Add person'}
              </h2>
              <p className="text-sm text-slate-500">{GROUP_LABELS[group]}</p>
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
          {/* Photo */}
          <div>
            <span className="mb-1.5 block text-sm font-semibold text-slate-800">Photo</span>
            <div className="flex items-center gap-4">
              <span className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-blue-100 bg-slate-100">
                {draft.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={draft.image} alt="" className="h-full w-full object-cover" />
                ) : (
                  <span className="grid h-full w-full place-items-center text-lg font-bold text-slate-400">
                    {draft.name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase()).join('') || '—'}
                  </span>
                )}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setImageOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600"
                >
                  <ImagePlus className="h-4 w-4" />
                  {draft.image ? 'Change' : 'Add photo'}
                </button>
                {draft.image && (
                  <button
                    type="button"
                    onClick={() => set('image', '')}
                    className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-500 transition-colors hover:text-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
            {errors.image && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.image}</p>}
          </div>

          <Field label="Full name" error={errors.name} required>
            <input value={draft.name} onChange={(e) => set('name', e.target.value)}
              placeholder="Prof. (Dr.) Jane Doe" className={input(errors.name)} autoFocus />
          </Field>

          {shows('position') && (
            <Field label="Position" error={errors.position}>
              <input value={draft.position} onChange={(e) => set('position', e.target.value)}
                placeholder="Professor of Law" className={input(errors.position)} />
            </Field>
          )}

          {shows('organization') && (
            <Field label="Organisation" error={errors.organization}>
              <input value={draft.organization} onChange={(e) => set('organization', e.target.value)}
                placeholder="National Law University Odisha" className={input(errors.organization)} />
            </Field>
          )}

          {shows('location') && (
            <Field label="Location" error={errors.location}>
              <input value={draft.location} onChange={(e) => set('location', e.target.value)}
                placeholder="Cuttack, India" className={input(errors.location)} />
            </Field>
          )}

          {shows('tags') && (
            <Field
              label={group === 'faculty' ? 'Specialisation' : 'Areas of expertise'}
              hint="Separate with commas."
              error={errors.tags}
            >
              <input value={draft.tags} onChange={(e) => set('tags', e.target.value)}
                placeholder="Mediation, Arbitration, Corporate Law" className={input(errors.tags)} />
            </Field>
          )}

          {shows('qualifications') && (
            <Field label="Qualifications" hint="Separate with commas." error={errors.qualifications}>
              <input value={draft.qualifications} onChange={(e) => set('qualifications', e.target.value)}
                placeholder="Ph.D., LL.M., Teaching since 1983" className={input(errors.qualifications)} />
            </Field>
          )}

          {shows('experience') && (
            <Field label="Experience" error={errors.experience}>
              <input value={draft.experience} onChange={(e) => set('experience', e.target.value)}
                placeholder="40+ years in legal academia" className={input(errors.experience)} />
            </Field>
          )}

          {shows('bio') && (
            <Field label="Biography" error={errors.bio}>
              <textarea value={draft.bio} onChange={(e) => set('bio', e.target.value)} rows={4}
                placeholder="A short professional biography." className={cn(input(errors.bio), 'resize-y leading-relaxed')} />
            </Field>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            {shows('email') && (
              <Field label="Email" error={errors.email}>
                <input type="email" value={draft.email} onChange={(e) => set('email', e.target.value)}
                  placeholder="name@nluo.ac.in" className={input(errors.email)} />
              </Field>
            )}
            {shows('phone') && (
              <Field label="Phone" error={errors.phone}>
                <input value={draft.phone} onChange={(e) => set('phone', e.target.value)}
                  placeholder="+91-671-2866850" className={input(errors.phone)} />
              </Field>
            )}
            {shows('linkedin') && (
              <Field label="LinkedIn" error={errors.linkedin} className="sm:col-span-2">
                <input value={draft.linkedin} onChange={(e) => set('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/in/…" className={input(errors.linkedin)} />
              </Field>
            )}
          </div>

          {message && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{message}</p>
          )}
        </div>

        <footer className="flex justify-end gap-3 border-t border-slate-200 bg-slate-50/70 px-6 py-4">
          <button type="button" onClick={onClose} disabled={saving}
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-200 disabled:opacity-50">
            Cancel
          </button>
          <button type="submit" disabled={saving}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-700 disabled:opacity-60">
            {saving && <Loader2 className="h-4 w-4 animate-spin" />}
            {person ? 'Save' : 'Add person'}
          </button>
        </footer>
      </form>

      <ImagePicker
        open={imageOpen}
        currentSrc={draft.image || '/persons/img1.jpeg'}
        currentAlt={draft.name}
        originalSrc=""
        label="Profile photo"
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
  label, error, hint, required, className, children,
}: {
  label: string
  error?: string
  hint?: string
  required?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={className}>
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
