'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useRouter } from 'next/navigation'
import type { ContentMap, ContentType } from '@/lib/contentKeys'

export interface PendingChange {
  key: string
  type: ContentType
  value: string
  alt?: string
  page?: string
  /** Default from the code, so the editor can offer "reset to original". */
  original: string
}

interface EditContextValue {
  isAdmin: boolean
  editMode: boolean
  setEditMode: (on: boolean) => void
  /** Current value for a slot: pending edit > saved override > code default. */
  resolve: (key: string, fallback: string) => string
  resolveAlt: (key: string, fallback: string) => string
  stage: (change: PendingChange) => void
  unstage: (key: string) => void
  pending: Record<string, PendingChange>
  dirtyCount: number
  saving: boolean
  save: () => Promise<void>
  discard: () => void
  lastError: string
  notice: string
  setNotice: (message: string) => void
}

const EditContext = createContext<EditContextValue | null>(null)

const PENDING_STORAGE_KEY = 'nluo-pending-edits-v1'
const MODE_STORAGE_KEY = 'nluo-edit-mode-v1'

export function useEdit() {
  const ctx = useContext(EditContext)
  // Editable components render on public pages too, where there is no provider.
  return ctx
}

export default function EditProvider({
  isAdmin,
  content,
  children,
}: {
  isAdmin: boolean
  content: ContentMap
  children: React.ReactNode
}) {
  const router = useRouter()
  const [editMode, setEditModeState] = useState(false)
  const [pending, setPending] = useState<Record<string, PendingChange>>({})
  const [saving, setSaving] = useState(false)
  const [lastError, setLastError] = useState('')
  const [notice, setNoticeState] = useState('')
  const noticeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* ---------- restore edit mode + unsaved edits across navigation ---------- */
  useEffect(() => {
    if (!isAdmin) return
    try {
      setEditModeState(sessionStorage.getItem(MODE_STORAGE_KEY) === '1')
      const saved = sessionStorage.getItem(PENDING_STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved) as Record<string, PendingChange>
        if (parsed && typeof parsed === 'object') setPending(parsed)
      }
    } catch {
      // Private browsing or a corrupt entry — editing still works in memory.
    }
  }, [isAdmin])

  useEffect(() => {
    if (!isAdmin) return
    try {
      const count = Object.keys(pending).length
      if (count) sessionStorage.setItem(PENDING_STORAGE_KEY, JSON.stringify(pending))
      else sessionStorage.removeItem(PENDING_STORAGE_KEY)
    } catch {
      /* ignore */
    }
  }, [pending, isAdmin])

  const setEditMode = useCallback((on: boolean) => {
    setEditModeState(on)
    try {
      sessionStorage.setItem(MODE_STORAGE_KEY, on ? '1' : '0')
    } catch {
      /* ignore */
    }
  }, [])

  const setNotice = useCallback((message: string) => {
    setNoticeState(message)
    if (noticeTimer.current) clearTimeout(noticeTimer.current)
    if (message) noticeTimer.current = setTimeout(() => setNoticeState(''), 3200)
  }, [])

  useEffect(() => () => {
    if (noticeTimer.current) clearTimeout(noticeTimer.current)
  }, [])

  /* ---------- warn before losing unsaved edits ---------- */
  const dirtyCount = Object.keys(pending).length
  useEffect(() => {
    if (!dirtyCount) return
    const handler = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue = ''
    }
    window.addEventListener('beforeunload', handler)
    return () => window.removeEventListener('beforeunload', handler)
  }, [dirtyCount])

  /* ---------- value resolution ---------- */
  const resolve = useCallback(
    (key: string, fallback: string) => {
      const staged = pending[key]
      if (staged) return staged.value === '' ? fallback : staged.value
      const saved = content[key]
      if (saved && saved.value !== '') return saved.value
      return fallback
    },
    [pending, content]
  )

  const resolveAlt = useCallback(
    (key: string, fallback: string) => {
      const staged = pending[key]
      if (staged && typeof staged.alt === 'string' && staged.alt !== '') return staged.alt
      const saved = content[key]
      if (saved?.alt) return saved.alt
      return fallback
    },
    [pending, content]
  )

  const stage = useCallback((change: PendingChange) => {
    setLastError('')
    setPending((prev) => {
      // Editing back to the original is not a change — drop it from the batch.
      const isSameAsOriginal = change.value === change.original && !change.alt
      const next = { ...prev }
      if (isSameAsOriginal && !(change.key in (prev ?? {}))) return prev
      next[change.key] = change
      return next
    })
  }, [])

  const unstage = useCallback((key: string) => {
    setPending((prev) => {
      if (!(key in prev)) return prev
      const next = { ...prev }
      delete next[key]
      return next
    })
  }, [])

  const discard = useCallback(() => {
    setPending({})
    setLastError('')
    try {
      sessionStorage.removeItem(PENDING_STORAGE_KEY)
    } catch {
      /* ignore */
    }
    // Re-render from the server so every edited node returns to its saved value.
    router.refresh()
    setNotice('Changes discarded')
  }, [router, setNotice])

  const save = useCallback(async () => {
    const changes = Object.values(pending)
    if (!changes.length || saving) return

    setSaving(true)
    setLastError('')

    try {
      const response = await fetch('/api/admin/content', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          changes: changes.map((c) => ({
            key: c.key,
            type: c.type,
            // An emptied slot means "go back to the wording in the code".
            value: c.value === c.original ? '' : c.value,
            alt: c.alt,
            page: c.page,
          })),
        }),
      })

      if (response.status === 401) {
        setLastError('Your session expired. Sign in again — your edits are kept.')
        return
      }

      const data = await response.json()
      if (!response.ok || !data.ok) {
        setLastError(data.message || 'Your changes could not be saved.')
        return
      }

      if (Array.isArray(data.rejected) && data.rejected.length) {
        setLastError(`${data.rejected.length} change(s) were rejected: ${data.rejected[0].reason}`)
        // Keep only the rejected ones staged so nothing is silently lost.
        const rejectedKeys = new Set(data.rejected.map((r: { key: string }) => r.key))
        setPending((prev) =>
          Object.fromEntries(Object.entries(prev).filter(([key]) => rejectedKeys.has(key)))
        )
      } else {
        setPending({})
        try {
          sessionStorage.removeItem(PENDING_STORAGE_KEY)
        } catch {
          /* ignore */
        }
        setNotice(`Saved ${changes.length} change${changes.length === 1 ? '' : 's'}`)
      }

      router.refresh()
    } catch {
      setLastError('Network error — your edits are still here. Try saving again.')
    } finally {
      setSaving(false)
    }
  }, [pending, saving, router, setNotice])

  const value = useMemo<EditContextValue>(
    () => ({
      isAdmin,
      editMode: isAdmin && editMode,
      setEditMode,
      resolve,
      resolveAlt,
      stage,
      unstage,
      pending,
      dirtyCount,
      saving,
      save,
      discard,
      lastError,
      notice,
      setNotice,
    }),
    [
      isAdmin, editMode, setEditMode, resolve, resolveAlt, stage, unstage,
      pending, dirtyCount, saving, save, discard, lastError, notice, setNotice,
    ]
  )

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>
}
