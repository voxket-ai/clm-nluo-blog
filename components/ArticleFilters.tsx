'use client'

import { useEffect, useState, useTransition } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Loader2, Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ArticleFiltersProps {
  categories: { category: string; count: number }[]
  total: number
}

export default function ArticleFilters({ categories, total }: ArticleFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [pending, startTransition] = useTransition()

  const activeCategory = searchParams.get('category') || 'All'
  const activeSearch = searchParams.get('search') || ''
  const [query, setQuery] = useState(activeSearch)

  useEffect(() => setQuery(activeSearch), [activeSearch])

  const push = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString())
    Object.entries(updates).forEach(([key, value]) => {
      if (!value || value === 'All') params.delete(key)
      else params.set(key, value)
    })
    params.delete('page')
    startTransition(() => router.push(`${pathname}?${params.toString()}`, { scroll: false }))
  }

  // Debounced search — typing filters without a submit button.
  useEffect(() => {
    if (query === activeSearch) return
    const timer = setTimeout(() => push({ search: query || null }), 450)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return (
    <div className="mb-12 space-y-5">
      <div className="relative mx-auto max-w-xl">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, keyword or author…"
          className="w-full rounded-full border border-slate-200 bg-white py-3.5 pl-12 pr-12 text-[15px] shadow-sm outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
        {pending ? (
          <Loader2 className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-blue-500" />
        ) : query ? (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <FilterChip
          label="All"
          count={total}
          active={activeCategory === 'All'}
          onClick={() => push({ category: null })}
        />
        {categories.map(({ category, count }) => (
          <FilterChip
            key={category}
            label={category}
            count={count}
            active={activeCategory === category}
            onClick={() => push({ category })}
          />
        ))}
      </div>
    </div>
  )
}

function FilterChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string
  count: number
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200',
        active
          ? 'border-transparent bg-blue-600 text-white shadow-md shadow-blue-500/20'
          : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600 hover:shadow-sm'
      )}
    >
      {label}
      <span className={cn('ml-1.5 text-xs', active ? 'text-blue-100' : 'text-slate-400')}>{count}</span>
    </button>
  )
}
