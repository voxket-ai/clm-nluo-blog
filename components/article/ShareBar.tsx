'use client'

import { useState } from 'react'
import { Check, Link2, Linkedin, Share2, Twitter } from 'lucide-react'

interface ShareBarProps {
  title: string
  slug: string
}

export default function ShareBar({ title, slug }: ShareBarProps) {
  const [copied, setCopied] = useState(false)

  const url = () => (typeof window === 'undefined' ? '' : `${window.location.origin}/blog/${slug}`)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked — the share links below still work */
    }
  }

  const open = (template: (u: string) => string) => {
    window.open(template(encodeURIComponent(url())), '_blank', 'noopener,noreferrer,width=640,height=560')
  }

  return (
    <div className="flex items-center gap-2">
      <span className="mr-1 hidden items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:flex">
        <Share2 className="h-3.5 w-3.5" />
        Share
      </span>

      <button
        type="button"
        onClick={() => open((u) => `https://twitter.com/intent/tweet?url=${u}&text=${encodeURIComponent(title)}`)}
        aria-label="Share on X"
        className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-slate-900 hover:text-slate-900 hover:shadow-sm"
      >
        <Twitter className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => open((u) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}`)}
        aria-label="Share on LinkedIn"
        className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-blue-600 hover:text-blue-700 hover:shadow-sm"
      >
        <Linkedin className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={copy}
        aria-label="Copy link"
        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-500 transition-all hover:border-blue-400 hover:text-blue-600 hover:shadow-sm"
      >
        {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Link2 className="h-4 w-4" />}
        {copied ? 'Copied' : 'Copy link'}
      </button>
    </div>
  )
}
