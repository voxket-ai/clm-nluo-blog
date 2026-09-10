'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Bold,
  Eye,
  Heading2,
  Heading3,
  Italic,
  Link2,
  List,
  ListOrdered,
  Minus,
  PenLine,
  Quote,
  Loader2,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { countWords, estimateReadTime } from '@/lib/articles'

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
  error?: string
  minWords: number
  maxWords: number
}

type Wrap = { before: string; after?: string; placeholder: string; block?: boolean }

const TOOLS: { id: string; label: string; icon: typeof Bold; wrap: Wrap }[] = [
  { id: 'h2', label: 'Heading', icon: Heading2, wrap: { before: '## ', placeholder: 'Section heading', block: true } },
  { id: 'h3', label: 'Sub-heading', icon: Heading3, wrap: { before: '### ', placeholder: 'Sub-heading', block: true } },
  { id: 'bold', label: 'Bold', icon: Bold, wrap: { before: '**', after: '**', placeholder: 'bold text' } },
  { id: 'italic', label: 'Italic', icon: Italic, wrap: { before: '_', after: '_', placeholder: 'italic text' } },
  { id: 'quote', label: 'Quotation', icon: Quote, wrap: { before: '> ', placeholder: 'Quoted passage', block: true } },
  { id: 'ul', label: 'Bulleted list', icon: List, wrap: { before: '- ', placeholder: 'List item', block: true } },
  { id: 'ol', label: 'Numbered list', icon: ListOrdered, wrap: { before: '1. ', placeholder: 'List item', block: true } },
  { id: 'link', label: 'Link / citation', icon: Link2, wrap: { before: '[', after: '](https://)', placeholder: 'link text' } },
  { id: 'hr', label: 'Divider', icon: Minus, wrap: { before: '\n---\n', placeholder: '', block: true } },
]

export default function MarkdownEditor({ value, onChange, error, minWords, maxWords }: MarkdownEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [mode, setMode] = useState<'write' | 'preview'>('write')
  const [previewHtml, setPreviewHtml] = useState('')
  const [previewLoading, setPreviewLoading] = useState(false)

  const words = countWords(value)
  const readTime = estimateReadTime(value)
  const progress = Math.min(100, Math.round((words / minWords) * 100))

  const applyTool = useCallback(
    (wrap: Wrap) => {
      const el = textareaRef.current
      if (!el) return

      const start = el.selectionStart
      const end = el.selectionEnd
      const selected = value.slice(start, end)
      const body = selected || wrap.placeholder

      let insert: string
      let caretStart: number
      let caretEnd: number

      if (wrap.block) {
        const lineStart = value.lastIndexOf('\n', start - 1) + 1
        const needsBreak = lineStart !== start
        const prefix = needsBreak ? '\n' : ''
        insert = `${prefix}${wrap.before}${body}`
        caretStart = start + prefix.length + wrap.before.length
        caretEnd = caretStart + body.length
      } else {
        insert = `${wrap.before}${body}${wrap.after ?? ''}`
        caretStart = start + wrap.before.length
        caretEnd = caretStart + body.length
      }

      const next = value.slice(0, start) + insert + value.slice(end)
      onChange(next)

      requestAnimationFrame(() => {
        el.focus()
        el.setSelectionRange(caretStart, caretEnd)
      })
    },
    [onChange, value]
  )

  // Preview is rendered by the server so it matches the published article exactly.
  useEffect(() => {
    if (mode !== 'preview') return
    if (!value.trim()) {
      setPreviewHtml('')
      return
    }

    let cancelled = false
    setPreviewLoading(true)
    const timer = setTimeout(async () => {
      try {
        const res = await fetch('/api/admin/preview', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: value }),
        })
        const data = await res.json()
        if (!cancelled) setPreviewHtml(data.html || '')
      } catch {
        if (!cancelled) setPreviewHtml('<p>Preview is unavailable right now.</p>')
      } finally {
        if (!cancelled) setPreviewLoading(false)
      }
    }, 400)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [mode, value])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!(event.metaKey || event.ctrlKey)) return
    const key = event.key.toLowerCase()
    const tool = key === 'b' ? TOOLS[2] : key === 'i' ? TOOLS[3] : key === 'k' ? TOOLS[7] : null
    if (tool) {
      event.preventDefault()
      applyTool(tool.wrap)
    }
  }

  return (
    <div
      className={cn(
        'rounded-2xl border bg-white shadow-sm overflow-hidden transition-colors',
        error ? 'border-red-300' : 'border-slate-200 focus-within:border-blue-400'
      )}
    >
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50/80 px-3 py-2">
        {TOOLS.map((tool) => (
          <button
            key={tool.id}
            type="button"
            title={tool.label}
            aria-label={tool.label}
            onClick={() => applyTool(tool.wrap)}
            disabled={mode === 'preview'}
            className="h-9 w-9 grid place-items-center rounded-lg text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-sm disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:shadow-none transition-all"
          >
            <tool.icon className="h-4 w-4" />
          </button>
        ))}

        <div className="ml-auto flex rounded-lg bg-slate-200/70 p-1">
          {(['write', 'preview'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setMode(tab)}
              className={cn(
                'flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold capitalize transition-all',
                mode === tab ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              )}
            >
              {tab === 'write' ? <PenLine className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      {mode === 'write' ? (
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck
          placeholder={
            'Write or paste your manuscript here.\n\n## Introduction\n\nMediation under the Mediation Act, 2023 …\n\n> Use "> " for quoted passages.\n\n1. Numbered points work too.\n\nAdd citations as links: [Salem Advocate Bar Assn. v Union of India](https://example.com)'
          }
          className="block h-[520px] w-full resize-y border-0 bg-white px-5 py-5 font-mono text-[15px] leading-7 text-slate-800 outline-none placeholder:text-slate-300"
        />
      ) : (
        <div className="h-[520px] overflow-y-auto px-6 py-6">
          {previewLoading && !previewHtml ? (
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Loader2 className="h-4 w-4 animate-spin" />
              Rendering preview…
            </div>
          ) : previewHtml ? (
            <div className="article-prose" dangerouslySetInnerHTML={{ __html: previewHtml }} />
          ) : (
            <p className="text-sm text-slate-400">Nothing to preview yet — switch to Write and start your piece.</p>
          )}
        </div>
      )}

      {/* Status bar */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-200 bg-slate-50/80 px-4 py-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-700">{words.toLocaleString()} words</span>
          <span className="text-slate-400">·</span>
          <span className="text-slate-500">{readTime} min read</span>
        </div>

        <div className="flex min-w-[140px] flex-1 items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
            <div
              className={cn(
                'h-full rounded-full transition-all duration-500',
                words > maxWords
                  ? 'bg-red-500'
                  : words >= minWords
                    ? 'bg-emerald-600'
                    : 'bg-linear-to-r from-blue-500 to-indigo-500'
              )}
              style={{ width: `${words > maxWords ? 100 : progress}%` }}
            />
          </div>
          <span
            className={cn(
              'font-medium',
              words > maxWords ? 'text-red-600' : words >= minWords ? 'text-emerald-600' : 'text-slate-500'
            )}
          >
            {words > maxWords
              ? `${(words - maxWords).toLocaleString()} over the limit`
              : words >= minWords
                ? 'Length looks good'
                : `${(minWords - words).toLocaleString()} to go`}
          </span>
        </div>

        <span className="hidden text-slate-400 sm:inline">Markdown supported · ⌘B ⌘I ⌘K</span>
      </div>

      {error && <p className="border-t border-red-100 bg-red-50 px-4 py-2 text-xs font-medium text-red-600">{error}</p>}
    </div>
  )
}
