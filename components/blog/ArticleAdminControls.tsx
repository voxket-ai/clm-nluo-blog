'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Loader2, Pencil, Star, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import ConfirmDialog from '@/components/ui/ConfirmDialog'
import { useEdit } from '@/components/editable/EditProvider'
import type { Article } from '@/lib/articles'

/**
 * Edit / feature / delete controls attached to an article, shown only to a
 * signed-in administrator. `variant="card"` floats them over a listing card;
 * `variant="bar"` lays them out inline on the article page.
 */
export default function ArticleAdminControls({
  article,
  variant = 'card',
}: {
  article: Article
  variant?: 'card' | 'bar'
}) {
  const edit = useEdit()
  const router = useRouter()
  const [busy, setBusy] = useState<string | null>(null)
  const [confirming, setConfirming] = useState(false)
  const [error, setError] = useState('')

  if (!edit?.isAdmin) return null

  const toggleFeatured = async () => {
    setBusy('featured')
    setError('')
    try {
      const res = await fetch(`/api/admin/articles/${article.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ featured: !article.featured }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        setError(data.message || 'Could not update this article.')
        return
      }
      router.refresh()
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setBusy(null)
    }
  }

  const remove = async () => {
    setBusy('delete')
    try {
      const res = await fetch(`/api/admin/articles/${article.id}`, { method: 'DELETE' })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        setError(data.message || 'Could not delete this article.')
        setConfirming(false)
        return
      }
      setConfirming(false)
      if (variant === 'bar') router.push('/blog')
      router.refresh()
    } catch {
      setError('Network error. Please try again.')
      setConfirming(false)
    } finally {
      setBusy(null)
    }
  }

  const isBar = variant === 'bar'

  return (
    <>
      <div
        className={cn(
          isBar
            ? 'flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm'
            : 'absolute right-3 top-3 z-20 flex gap-1.5 opacity-0 transition-opacity duration-200 focus-within:opacity-100 group-hover:opacity-100'
        )}
      >
        {isBar && (
          <span className="mr-1 pl-1 text-xs font-bold uppercase tracking-wide text-slate-400">
            Admin
          </span>
        )}

        <Link
          href={`/blog/${article.slug}/edit`}
          aria-label={`Edit ${article.title}`}
          title="Edit article"
          className={cn(
            'inline-flex items-center gap-1.5 rounded-lg text-slate-600 transition-colors hover:text-blue-600',
            isBar ? 'px-3 py-2 text-sm font-semibold hover:bg-blue-50' : 'h-8 w-8 justify-center bg-white/95 shadow-md'
          )}
        >
          <Pencil className="h-4 w-4" />
          {isBar && 'Edit'}
        </Link>

        <button
          type="button"
          onClick={toggleFeatured}
          disabled={busy === 'featured'}
          aria-label={article.featured ? 'Remove from featured' : 'Feature on the homepage'}
          title={article.featured ? 'Featured — click to unfeature' : 'Feature on the homepage'}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-lg transition-colors disabled:opacity-50',
            article.featured ? 'text-amber-500' : 'text-slate-500 hover:text-amber-500',
            isBar ? 'px-3 py-2 text-sm font-semibold hover:bg-amber-50' : 'h-8 w-8 justify-center bg-white/95 shadow-md'
          )}
        >
          {busy === 'featured' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Star className={cn('h-4 w-4', article.featured && 'fill-current')} />
          )}
          {isBar && (article.featured ? 'Featured' : 'Feature')}
        </button>

        <button
          type="button"
          onClick={() => setConfirming(true)}
          disabled={busy === 'delete'}
          aria-label={`Delete ${article.title}`}
          title="Delete article"
          className={cn(
            'inline-flex items-center gap-1.5 rounded-lg text-slate-500 transition-colors hover:text-red-600 disabled:opacity-50',
            isBar ? 'px-3 py-2 text-sm font-semibold hover:bg-red-50' : 'h-8 w-8 justify-center bg-white/95 shadow-md'
          )}
        >
          {busy === 'delete' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
          {isBar && 'Delete'}
        </button>

        {error && isBar && <span className="text-xs font-medium text-red-600">{error}</span>}
      </div>

      <ConfirmDialog
        open={confirming}
        title="Delete this article?"
        body={`“${article.title}” will be permanently removed from the site. This cannot be undone.`}
        confirmLabel="Delete permanently"
        busy={busy === 'delete'}
        onCancel={() => setConfirming(false)}
        onConfirm={remove}
      />
    </>
  )
}
