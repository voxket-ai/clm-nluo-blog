'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TagInputProps {
  tags: string[]
  onChange: (tags: string[]) => void
  max: number
  error?: string
}

export default function TagInput({ tags, onChange, max, error }: TagInputProps) {
  const [draft, setDraft] = useState('')

  const commit = (raw: string) => {
    const value = raw.trim().replace(/^#/, '').slice(0, 32)
    if (!value) return
    if (tags.length >= max) return
    if (tags.some((t) => t.toLowerCase() === value.toLowerCase())) {
      setDraft('')
      return
    }
    onChange([...tags, value])
    setDraft('')
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault()
      commit(draft)
    } else if (event.key === 'Backspace' && !draft && tags.length) {
      onChange(tags.slice(0, -1))
    }
  }

  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <label htmlFor="tags" className="text-sm font-semibold text-slate-800">
          Keywords
        </label>
        <span className="text-xs tabular-nums text-slate-400">
          {tags.length}/{max}
        </span>
      </div>

      <div
        className={cn(
          'flex flex-wrap items-center gap-2 rounded-xl border bg-white px-3 py-2.5 shadow-sm transition-all',
          error
            ? 'border-red-300 focus-within:ring-4 focus-within:ring-red-100'
            : 'border-slate-200 hover:border-slate-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100'
        )}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-2.5 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-100"
          >
            {tag}
            <button
              type="button"
              onClick={() => onChange(tags.filter((t) => t !== tag))}
              aria-label={`Remove ${tag}`}
              className="text-blue-400 transition-colors hover:text-blue-700"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </span>
        ))}

        <input
          id="tags"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => commit(draft)}
          disabled={tags.length >= max}
          placeholder={tags.length >= max ? 'Keyword limit reached' : 'Type a keyword and press Enter'}
          className="min-w-[180px] flex-1 border-0 bg-transparent py-1 text-[15px] text-slate-900 outline-none placeholder:text-slate-300 disabled:cursor-not-allowed"
        />
      </div>

      {error ? (
        <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>
      ) : (
        <p className="mt-1.5 text-xs text-slate-500">
          Helps readers find the piece — e.g. Mediation Act 2023, Settlement Agreement, ODR.
        </p>
      )}
    </div>
  )
}
