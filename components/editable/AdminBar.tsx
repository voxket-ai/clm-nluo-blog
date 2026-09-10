'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  AlertCircle,
  CalendarPlus,
  Check,
  ChevronUp,
  Eye,
  FilePlus2,
  Loader2,
  LogOut,
  Pencil,
  Plus,
  Save,
  Undo2,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEdit } from '@/components/editable/EditProvider'

export default function AdminBar({ username }: { username: string }) {
  const edit = useEdit()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [signingOut, setSigningOut] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close the overflow menu on an outside click or Escape.
  useEffect(() => {
    if (!menuOpen) return
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  // Cmd/Ctrl+S saves, Cmd/Ctrl+E toggles edit mode.
  useEffect(() => {
    if (!edit) return
    const onKey = (e: KeyboardEvent) => {
      if (!(e.metaKey || e.ctrlKey)) return
      const key = e.key.toLowerCase()
      if (key === 's' && edit.dirtyCount > 0) {
        e.preventDefault()
        void edit.save()
      } else if (key === 'e') {
        e.preventDefault()
        edit.setEditMode(!edit.editMode)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [edit])

  if (!edit?.isAdmin) return null

  const { editMode, setEditMode, dirtyCount, saving, save, discard, lastError, notice } = edit

  const signOut = async () => {
    if (dirtyCount > 0 && !window.confirm('You have unsaved changes. Sign out and lose them?')) return
    setSigningOut(true)
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      setEditMode(false)
      router.replace('/')
      router.refresh()
    } finally {
      setSigningOut(false)
    }
  }

  if (collapsed) {
    return (
      <button
        type="button"
        onClick={() => setCollapsed(false)}
        aria-label="Show admin toolbar"
        className="fixed bottom-5 right-5 z-[90] grid h-12 w-12 place-items-center rounded-full bg-slate-900 text-white shadow-2xl transition-transform hover:scale-105"
      >
        <Pencil className="h-5 w-5" />
        {dirtyCount > 0 && (
          <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-amber-500 px-1 text-[11px] font-bold text-white">
            {dirtyCount}
          </span>
        )}
      </button>
    )
  }

  return (
    <>
      {/* Toast */}
      {(notice || lastError) && (
        <div
          role="status"
          className={cn(
            'fixed bottom-24 left-1/2 z-[95] flex -translate-x-1/2 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium shadow-xl animate-fade-in-up',
            lastError ? 'bg-red-600 text-white' : 'bg-slate-900 text-white'
          )}
        >
          {lastError ? <AlertCircle className="h-4 w-4 shrink-0" /> : <Check className="h-4 w-4 shrink-0" />}
          <span className="max-w-xs">{lastError || notice}</span>
        </div>
      )}

      <div className="fixed inset-x-0 bottom-0 z-[90] flex justify-center px-3 pb-4 pointer-events-none">
        <div className="pointer-events-auto flex max-w-full flex-wrap items-center gap-2 rounded-2xl border border-slate-700/60 bg-slate-900/95 px-3 py-2.5 shadow-2xl backdrop-blur-md">
          {/* Mode switch */}
          <div className="flex rounded-xl bg-white/10 p-1">
            <button
              type="button"
              onClick={() => setEditMode(false)}
              className={cn(
                'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all',
                !editMode ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-300 hover:text-white'
              )}
            >
              <Eye className="h-3.5 w-3.5" />
              Preview
            </button>
            <button
              type="button"
              onClick={() => setEditMode(true)}
              className={cn(
                'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all',
                editMode
                  ? 'bg-linear-to-r from-blue-500 to-indigo-500 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              )}
            >
              <Pencil className="h-3.5 w-3.5" />
              Edit
            </button>
          </div>

          <span className="hidden h-6 w-px bg-white/15 sm:block" />

          {/* Status */}
          <span className="hidden text-xs text-slate-400 sm:block">
            {dirtyCount > 0 ? (
              <span className="font-semibold text-amber-300">
                {dirtyCount} unsaved change{dirtyCount === 1 ? '' : 's'}
              </span>
            ) : editMode ? (
              'Click any text or image to edit'
            ) : (
              `Signed in as ${username}`
            )}
          </span>

          <div className="flex items-center gap-2">
            {dirtyCount > 0 && (
              <>
                <button
                  type="button"
                  onClick={discard}
                  disabled={saving}
                  className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-50"
                >
                  <Undo2 className="h-3.5 w-3.5" />
                  Discard
                </button>
                <button
                  type="button"
                  onClick={() => void save()}
                  disabled={saving}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-emerald-900/30 transition-all hover:brightness-110 disabled:opacity-60"
                >
                  {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                  {saving ? 'Saving…' : 'Save'}
                </button>
              </>
            )}

            {/* Add menu */}
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/20"
              >
                <Plus className="h-3.5 w-3.5" />
                Add
                <ChevronUp className={cn('h-3.5 w-3.5 transition-transform', menuOpen && 'rotate-180')} />
              </button>

              {menuOpen && (
                <div
                  role="menu"
                  className="absolute bottom-full right-0 mb-2 w-60 animate-fade-in-up overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 py-1.5 shadow-2xl"
                >
                  <MenuLink href="/blog/new" icon={FilePlus2} onNavigate={() => setMenuOpen(false)}>
                    New article
                  </MenuLink>
                  <MenuLink href="/events?new=1" icon={CalendarPlus} onNavigate={() => setMenuOpen(false)}>
                    New event
                  </MenuLink>
                  <div className="my-1.5 h-px bg-white/10" />
                  <button
                    type="button"
                    role="menuitem"
                    onClick={signOut}
                    disabled={signingOut}
                    className="flex w-full items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-red-300 transition-colors hover:bg-red-500/10 disabled:opacity-50"
                  >
                    {signingOut ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogOut className="h-4 w-4" />}
                    Sign out
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setCollapsed(true)}
              aria-label="Hide toolbar"
              className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Keeps the toolbar from covering page content at the very bottom. */}
      {editMode && <div aria-hidden className="h-20" />}
    </>
  )
}

function MenuLink({
  href,
  icon: Icon,
  onNavigate,
  children,
}: {
  href: string
  icon: typeof Plus
  onNavigate: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      role="menuitem"
      onClick={onNavigate}
      className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
    >
      <Icon className="h-4 w-4" />
      {children}
    </Link>
  )
}
