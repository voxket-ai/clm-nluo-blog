'use client'

import { useEffect } from 'react'
import { AlertTriangle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ConfirmDialogProps {
  open: boolean
  title: string
  body: string
  confirmLabel: string
  tone?: 'danger' | 'primary'
  busy?: boolean
  onConfirm: () => void
  onCancel: () => void
}

export default function ConfirmDialog({
  open,
  title,
  body,
  confirmLabel,
  tone = 'danger',
  busy,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  // Escape closes, and the page behind must not scroll while this is up.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && !busy && onCancel()
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open, busy, onCancel])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => !busy && onCancel()} />

      <div
        role="alertdialog"
        aria-modal="true"
        aria-label={title}
        className="relative w-full max-w-md animate-fade-in-up rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
      >
        <div className="flex gap-4">
          <span
            className={cn(
              'grid h-11 w-11 shrink-0 place-items-center rounded-full',
              tone === 'danger' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
            )}
          >
            <AlertTriangle className="h-5 w-5" />
          </span>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-slate-900">{title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{body}</p>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={busy}
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={busy}
            className={cn(
              'inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-110 disabled:opacity-60',
              tone === 'danger'
                ? 'bg-red-600 shadow-red-600/25'
                : 'bg-blue-600 shadow-blue-600/25'
            )}
          >
            {busy && <Loader2 className="h-4 w-4 animate-spin" />}
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
