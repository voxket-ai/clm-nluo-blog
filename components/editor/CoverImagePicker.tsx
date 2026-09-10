'use client'

import { useRef, useState } from 'react'
import { ImagePlus, Link2, Loader2, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LIMITS } from '@/lib/articles'

interface CoverImagePickerProps {
  value: string
  onChange: (dataUrl: string) => void
  error?: string
}

const MAX_EDGE = 1800

/** Downscale + re-encode in the browser so a 6 MB phone photo becomes a sane payload. */
function compress(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(new Error('Could not read that file.'))
    reader.onload = () => {
      const image = new Image()
      image.onerror = () => reject(new Error('That file is not a readable image.'))
      image.onload = () => {
        const scale = Math.min(1, MAX_EDGE / Math.max(image.width, image.height))
        const canvas = document.createElement('canvas')
        canvas.width = Math.round(image.width * scale)
        canvas.height = Math.round(image.height * scale)
        const ctx = canvas.getContext('2d')
        if (!ctx) return reject(new Error('Image processing is unavailable in this browser.'))
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
        resolve(canvas.toDataURL('image/jpeg', 0.82))
      }
      image.src = reader.result as string
    }
    reader.readAsDataURL(file)
  })
}

export default function CoverImagePicker({ value, onChange, error }: CoverImagePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [mode, setMode] = useState<'upload' | 'link'>('upload')
  const [busy, setBusy] = useState(false)
  const [localError, setLocalError] = useState('')
  const [dragging, setDragging] = useState(false)
  const [urlDraft, setUrlDraft] = useState(value.startsWith('http') ? value : '')

  const handleFile = async (file?: File | null) => {
    if (!file) return
    setLocalError('')

    if (!file.type.startsWith('image/')) {
      setLocalError('Please choose an image file (JPG, PNG or WebP).')
      return
    }
    if (file.size > LIMITS.coverImageBytes * 3) {
      setLocalError('That image is very large. Please pick one under 9 MB.')
      return
    }

    setBusy(true)
    try {
      onChange(await compress(file))
    } catch (err) {
      setLocalError(err instanceof Error ? err.message : 'Could not process that image.')
    } finally {
      setBusy(false)
    }
  }

  const shownError = error || localError

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-800">Cover image</span>
        <div className="flex rounded-lg bg-slate-100 p-0.5">
          {(['upload', 'link'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setMode(tab)}
              className={cn(
                'rounded-md px-3 py-1 text-xs font-semibold capitalize transition-all',
                mode === tab ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {value ? (
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Cover preview" className="h-52 w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <button
            type="button"
            onClick={() => {
              onChange('')
              setUrlDraft('')
              if (inputRef.current) inputRef.current.value = ''
            }}
            className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-semibold text-red-600 shadow-md backdrop-blur transition-transform hover:scale-105"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Remove
          </button>
        </div>
      ) : mode === 'upload' ? (
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
            void handleFile(e.dataTransfer.files?.[0])
          }}
          className={cn(
            'flex h-52 w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed bg-slate-50/60 text-center transition-all',
            dragging
              ? 'border-blue-500 bg-blue-50/80'
              : shownError
                ? 'border-red-300'
                : 'border-slate-300 hover:border-blue-400 hover:bg-blue-50/40'
          )}
        >
          {busy ? (
            <>
              <Loader2 className="h-7 w-7 animate-spin text-blue-500" />
              <span className="text-sm font-medium text-slate-600">Optimising image…</span>
            </>
          ) : (
            <>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-blue-600 text-white shadow-sm">
                <ImagePlus className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-slate-700">Drop an image or click to upload</span>
              <span className="text-xs text-slate-500">JPG, PNG or WebP · resized automatically · optional</span>
            </>
          )}
        </button>
      ) : (
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Link2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={urlDraft}
              onChange={(e) => setUrlDraft(e.target.value)}
              placeholder="https://example.com/photo.jpg"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-[15px] shadow-sm outline-none transition-all placeholder:text-slate-300 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>
          <button
            type="button"
            onClick={() => {
              const trimmed = urlDraft.trim()
              if (!/^https?:\/\//i.test(trimmed)) {
                setLocalError('Enter a full image URL beginning with https://')
                return
              }
              setLocalError('')
              onChange(trimmed)
            }}
            className="rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
          >
            Use
          </button>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => void handleFile(e.target.files?.[0])}
      />

      {shownError && <p className="mt-1.5 text-xs font-medium text-red-600">{shownError}</p>}
    </div>
  )
}
