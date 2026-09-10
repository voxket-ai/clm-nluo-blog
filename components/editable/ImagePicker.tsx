'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ImagePlus, Library, Link2, Loader2, RotateCcw, Upload, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ALLOWED_IMAGE_TYPES, CONTENT_LIMITS } from '@/lib/contentKeys'

interface MediaItem {
  id: string
  url: string
  filename: string
  size: number
  createdAt: string
}

interface ImagePickerProps {
  open: boolean
  currentSrc: string
  currentAlt: string
  originalSrc: string
  label: string
  onClose: () => void
  onApply: (src: string, alt: string) => void
  onReset: () => void
}

const MAX_EDGE = 2000

/** Downscale big photos before upload; GIFs pass through so animation survives. */
async function prepare(file: File): Promise<File> {
  if (file.type === 'image/gif') return file
  if (file.size < 400 * 1024) return file

  const bitmap = await createImageBitmap(file).catch(() => null)
  if (!bitmap) return file

  const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height))
  if (scale === 1 && file.size <= CONTENT_LIMITS.storedBytes) return file

  const canvas = document.createElement('canvas')
  canvas.width = Math.round(bitmap.width * scale)
  canvas.height = Math.round(bitmap.height * scale)
  const ctx = canvas.getContext('2d')
  if (!ctx) return file
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
  bitmap.close?.()

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, 'image/jpeg', 0.85)
  )
  if (!blob || blob.size >= file.size) return file

  return new File([blob], file.name.replace(/\.\w+$/, '') + '.jpg', { type: 'image/jpeg' })
}

export default function ImagePicker({
  open,
  currentSrc,
  currentAlt,
  originalSrc,
  label,
  onClose,
  onApply,
  onReset,
}: ImagePickerProps) {
  const [tab, setTab] = useState<'upload' | 'library' | 'url'>('upload')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [dragging, setDragging] = useState(false)
  const [library, setLibrary] = useState<MediaItem[]>([])
  const [libraryLoaded, setLibraryLoaded] = useState(false)
  const [draftSrc, setDraftSrc] = useState(currentSrc)
  const [draftAlt, setDraftAlt] = useState(currentAlt)
  const [urlDraft, setUrlDraft] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return
    setDraftSrc(currentSrc)
    setDraftAlt(currentAlt)
    setError('')
    setUrlDraft(/^https?:\/\//i.test(currentSrc) ? currentSrc : '')
  }, [open, currentSrc, currentAlt])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && !busy && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, busy, onClose])

  const loadLibrary = useCallback(async () => {
    if (libraryLoaded) return
    try {
      const res = await fetch('/api/admin/media')
      const data = await res.json()
      if (data.ok) setLibrary(data.media)
      setLibraryLoaded(true)
    } catch {
      setError('Could not load the image library.')
    }
  }, [libraryLoaded])

  useEffect(() => {
    if (open && tab === 'library') void loadLibrary()
  }, [open, tab, loadLibrary])

  const upload = async (file?: File | null) => {
    if (!file) return
    setError('')

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      setError('Choose a JPG, PNG, WebP or GIF image.')
      return
    }
    if (file.size > CONTENT_LIMITS.uploadBytes) {
      setError('That image is too large. Please pick one under 8 MB.')
      return
    }

    setBusy(true)
    try {
      const prepared = await prepare(file)
      const body = new FormData()
      body.append('file', prepared)

      const res = await fetch('/api/admin/media', { method: 'POST', body })
      if (res.status === 401) {
        setError('Your session expired. Sign in again to upload.')
        return
      }
      const data = await res.json()
      if (!res.ok || !data.ok) {
        setError(data.message || 'The upload failed.')
        return
      }

      setDraftSrc(data.media.url)
      setLibrary((prev) => [data.media, ...prev])
    } catch {
      setError('Network error during upload. Please try again.')
    } finally {
      setBusy(false)
      if (inputRef.current) inputRef.current.value = ''
    }
  }

  if (!open) return null

  const changed = draftSrc !== currentSrc || draftAlt !== currentAlt
  const isCustom = currentSrc !== originalSrc

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => !busy && onClose()} />

      <div className="relative flex max-h-[88vh] w-full max-w-2xl animate-fade-in-up flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
        <header className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5">
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-slate-900">Replace image</h2>
            <p className="mt-0.5 truncate text-sm text-slate-500">{label}</p>
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

        <div className="flex gap-1 border-b border-slate-200 px-6 pt-3">
          {([
            { key: 'upload', label: 'Upload', icon: Upload },
            { key: 'library', label: 'Library', icon: Library },
            { key: 'url', label: 'Link', icon: Link2 },
          ] as const).map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={cn(
                'flex items-center gap-1.5 rounded-t-lg border-b-2 px-4 py-2.5 text-sm font-semibold transition-colors',
                tab === t.key
                  ? 'border-blue-600 text-blue-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              )}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {tab === 'upload' && (
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault()
                setDragging(true)
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault()
                setDragging(false)
                void upload(e.dataTransfer.files?.[0])
              }}
              className={cn(
                'flex h-48 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed transition-all',
                dragging ? 'border-blue-500 bg-blue-50' : 'border-slate-300 bg-slate-50/60 hover:border-blue-400 hover:bg-blue-50/40'
              )}
            >
              {busy ? (
                <>
                  <Loader2 className="h-7 w-7 animate-spin text-blue-600" />
                  <span className="text-sm font-medium text-slate-600">Uploading…</span>
                </>
              ) : (
                <>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-blue-600 text-white shadow-sm">
                    <ImagePlus className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-700">Drop an image or click to choose</span>
                  <span className="text-xs text-slate-500">JPG, PNG, WebP or GIF · large photos are resized</span>
                </>
              )}
            </button>
          )}

          {tab === 'library' && (
            <div>
              {!libraryLoaded ? (
                <div className="flex h-40 items-center justify-center gap-2 text-sm text-slate-400">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading library…
                </div>
              ) : library.length === 0 ? (
                <p className="py-12 text-center text-sm text-slate-500">
                  Nothing uploaded yet. Use the Upload tab to add your first image.
                </p>
              ) : (
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {library.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setDraftSrc(item.url)}
                      title={item.filename}
                      className={cn(
                        'group relative aspect-square overflow-hidden rounded-xl border-2 transition-all',
                        draftSrc === item.url
                          ? 'border-blue-600 ring-4 ring-blue-100'
                          : 'border-slate-200 hover:border-blue-300'
                      )}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.url} alt={item.filename} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === 'url' && (
            <div className="flex gap-2">
              <input
                value={urlDraft}
                onChange={(e) => setUrlDraft(e.target.value)}
                placeholder="https://example.com/photo.jpg"
                className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
              <button
                type="button"
                onClick={() => {
                  const trimmed = urlDraft.trim()
                  if (!/^https?:\/\//i.test(trimmed)) {
                    setError('Enter a full image URL starting with https://')
                    return
                  }
                  setError('')
                  setDraftSrc(trimmed)
                }}
                className="rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
              >
                Use
              </button>
            </div>
          )}

          {/* Preview + alt text */}
          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">Preview</p>
            <div className="mb-4 overflow-hidden rounded-xl bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={draftSrc}
                alt={draftAlt || 'Preview'}
                className="h-40 w-full object-contain"
                onError={() => setError('That image could not be loaded. Check the link and try again.')}
              />
            </div>
            <label htmlFor="edit-alt" className="mb-1.5 block text-sm font-semibold text-slate-800">
              Description <span className="font-normal text-slate-400">(read aloud by screen readers)</span>
            </label>
            <input
              id="edit-alt"
              value={draftAlt}
              onChange={(e) => setDraftAlt(e.target.value)}
              maxLength={CONTENT_LIMITS.altMax}
              placeholder="Describe what the image shows"
              className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {error && (
            <p className="mt-3 rounded-xl bg-red-50 px-3.5 py-2.5 text-sm font-medium text-red-700">{error}</p>
          )}
        </div>

        <footer className="flex flex-wrap items-center gap-3 border-t border-slate-200 bg-slate-50/70 px-6 py-4">
          {isCustom && (
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition-colors hover:text-red-600"
            >
              <RotateCcw className="h-4 w-4" />
              Reset to original
            </button>
          )}
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={!changed || busy}
              onClick={() => onApply(draftSrc, draftAlt)}
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Use this image
            </button>
          </div>
        </footer>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={ALLOWED_IMAGE_TYPES.join(',')}
        hidden
        onChange={(e) => void upload(e.target.files?.[0])}
      />
    </div>
  )
}
