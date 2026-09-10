import { Suspense } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import ArticleFilters from '@/components/ArticleFilters'
import NewArticleButton from '@/components/blog/NewArticleButton'
import Editable from '@/components/editable/Editable'
import { EMPTY_LIST, getCategoryCounts, listPublishedArticles } from '@/lib/articleService'
import { ArrowLeft, ArrowRight, DatabaseZap, PenLine, SearchX } from 'lucide-react'
import { cn } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Articles | NLUO Mediation Blogs',
  description:
    'In-depth analysis, expert commentary and the latest developments in mediation, negotiation and alternative dispute resolution.',
}

const PAGE_SIZE = 9

interface PageProps {
  searchParams: Promise<{ page?: string; category?: string; search?: string }>
}

export default async function BlogPage({ searchParams }: PageProps) {
  const params = await searchParams
  const page = Number(params.page) || 1
  const category = params.category
  const search = params.search

  let result = EMPTY_LIST
  let categories: { category: string; count: number }[] = []
  let dbError = false

  try {
    ;[result, categories] = await Promise.all([
      listPublishedArticles({ page, limit: PAGE_SIZE, category, search }),
      getCategoryCounts(),
    ])
  } catch (error) {
    console.error('[blog:list]', error)
    dbError = true
  }

  const totalPublished = categories.reduce((sum, c) => sum + c.count, 0)
  const isFiltered = Boolean(category || search)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              <Editable id="blog.page.title" as="span" label="Articles page title">NLUO Mediation</Editable>{' '}
              <span className="text-blue-600">
                <Editable id="blog.page.title-accent" as="span" label="Articles title (blue word)">Blogs</Editable>
              </span>
            </h1>
            <Editable id="blog.page.intro" as="p" multiline label="Articles page introduction" className="mx-auto max-w-3xl text-xl text-gray-600">
              Discover in-depth analysis, expert commentary, and the latest developments in Mediation and Negotiation
              under ADR from leading legal professionals and scholars.
            </Editable>
            <div className="mt-8">
              <NewArticleButton />
            </div>
          </div>

          {dbError ? (
            <EmptyState
              icon={DatabaseZap}
              title="Articles are temporarily unavailable"
              body="We could not reach the article database. Please refresh in a moment — if this persists, the MONGODB_URI environment variable may not be configured."
            />
          ) : (
            <>
              {totalPublished > 0 && (
                <Suspense fallback={<div className="mb-12 h-28" />}>
                  <ArticleFilters categories={categories} total={totalPublished} />
                </Suspense>
              )}

              {result.articles.length > 0 ? (
                <>
                  <p className="mb-6 text-sm text-slate-500">
                    Showing {result.articles.length} of {result.total}{' '}
                    {result.total === 1 ? 'article' : 'articles'}
                    {category ? ` in ${category}` : ''}
                    {search ? ` matching “${search}”` : ''}
                  </p>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {result.articles.map((article) => (
                      <ArticleCard key={article.id} article={article} />
                    ))}
                  </div>

                  <Pagination
                    page={result.page}
                    totalPages={result.totalPages}
                    category={category}
                    search={search}
                  />
                </>
              ) : isFiltered ? (
                <EmptyState
                  icon={SearchX}
                  title="Nothing matched that search"
                  body="Try a different keyword, or clear the filters to browse everything we have published."
                  action={{ href: '/blog', label: 'Clear filters' }}
                />
              ) : (
                <EmptyState
                  icon={PenLine}
                  title="No articles published yet"
                  body="Published pieces will appear here."
                >
                  <NewArticleButton label="Write the first article" />
                </EmptyState>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

function Pagination({
  page,
  totalPages,
  category,
  search,
}: {
  page: number
  totalPages: number
  category?: string
  search?: string
}) {
  if (totalPages <= 1) return null

  const href = (target: number) => {
    const params = new URLSearchParams()
    if (category) params.set('category', category)
    if (search) params.set('search', search)
    if (target > 1) params.set('page', String(target))
    const qs = params.toString()
    return qs ? `/blog?${qs}` : '/blog'
  }

  return (
    <nav className="mt-14 flex items-center justify-center gap-2" aria-label="Pagination">
      <PageLink href={href(page - 1)} disabled={page <= 1} label="Previous">
        <ArrowLeft className="h-4 w-4" />
      </PageLink>

      {Array.from({ length: totalPages }, (_, i) => i + 1)
        .filter((n) => n === 1 || n === totalPages || Math.abs(n - page) <= 1)
        .reduce<(number | 'gap')[]>((acc, n, i, arr) => {
          if (i > 0 && n - (arr[i - 1] as number) > 1) acc.push('gap')
          acc.push(n)
          return acc
        }, [])
        .map((entry, index) =>
          entry === 'gap' ? (
            <span key={`gap-${index}`} className="px-2 text-slate-400">
              …
            </span>
          ) : (
            <Link
              key={entry}
              href={href(entry)}
              className={cn(
                'grid h-10 min-w-10 place-items-center rounded-xl px-3 text-sm font-semibold transition-all',
                entry === page
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600'
              )}
            >
              {entry}
            </Link>
          )
        )}

      <PageLink href={href(page + 1)} disabled={page >= totalPages} label="Next">
        <ArrowRight className="h-4 w-4" />
      </PageLink>
    </nav>
  )
}

function PageLink({
  href,
  disabled,
  label,
  children,
}: {
  href: string
  disabled: boolean
  label: string
  children: React.ReactNode
}) {
  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className="grid h-10 w-10 place-items-center rounded-xl border border-slate-100 bg-slate-50 text-slate-300"
      >
        {children}
      </span>
    )
  }
  return (
    <Link
      href={href}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all hover:border-blue-300 hover:text-blue-600"
    >
      {children}
    </Link>
  )
}

function EmptyState({
  icon: Icon,
  title,
  body,
  action,
  children,
}: {
  icon: typeof PenLine
  title: string
  body: string
  action?: { href: string; label: string }
  children?: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white px-8 py-16 text-center shadow-sm">
      <span className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-blue-600 text-white shadow-sm">
        <Icon className="h-7 w-7" />
      </span>
      <h2 className="mb-2 text-2xl font-bold text-gray-900">{title}</h2>
      <p className="text-slate-500">{body}</p>
      {children}
      {action && (
        <Link
          href={action.href}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105"
        >
          {action.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}
