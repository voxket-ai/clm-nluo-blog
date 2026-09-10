import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import ReadingProgress from '@/components/article/ReadingProgress'
import ShareBar from '@/components/article/ShareBar'
import ArticleAdminControls from '@/components/blog/ArticleAdminControls'
import { getArticleBySlug, getRelatedArticles, incrementViews } from '@/lib/articleService'
import { renderArticleHtml } from '@/lib/markdown'
import { categoryColor, formatLongDate, initials, type AuthorPayload } from '@/lib/articles'
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Linkedin, PenLine, Tag } from 'lucide-react'
import { cn } from '@/lib/utils'
import Editable from '@/components/editable/Editable'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const article = await getArticleBySlug(slug)
    if (!article) return { title: 'Article not found | NLUO Mediation Blogs' }

    const authors = [article.author.name, article.coAuthor?.name].filter(Boolean) as string[]
    return {
      title: `${article.title} | NLUO Mediation Blogs`,
      description: article.excerpt,
      keywords: article.tags.join(', '),
      authors: authors.map((name) => ({ name })),
      openGraph: {
        type: 'article',
        title: article.title,
        description: article.excerpt,
        publishedTime: article.publishedAt,
        images: article.coverImage?.startsWith('http') ? [article.coverImage] : undefined,
      },
    }
  } catch {
    return { title: 'Article | NLUO Mediation Blogs' }
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params

  let article = null
  try {
    article = await getArticleBySlug(slug)
  } catch (error) {
    console.error('[article:read]', error)
  }

  if (!article) notFound()

  const html = renderArticleHtml(article.content)
  const related = await getRelatedArticles(article, 3).catch(() => [])
  void incrementViews(slug)

  const authors = [article.author, article.coAuthor].filter(Boolean) as AuthorPayload[]

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <ReadingProgress />

      <main>
        {/* Hero */}
        <header className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute inset-0">
            <div className="absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
            <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-purple-500/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4" />
              <Editable id="blog.slug.all-articles" as="span">All articles</Editable>
            </Link>

            <div className="mb-5 flex flex-wrap items-center gap-2">
              <Link
                href={`/blog?category=${encodeURIComponent(article.category)}`}
                className={cn(
                  'rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-105',
                  categoryColor(article.category)
                )}
              >
                {article.category}
              </Link>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {article.submissionType}
              </span>
            </div>

            <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-[2.75rem] md:leading-[1.15]">
              {article.title}
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-slate-600">{article.excerpt}</p>

            <div className="flex flex-wrap items-center justify-between gap-y-5 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {authors.map((person) => (
                    <span
                      key={person.name}
                      className="grid h-11 w-11 place-items-center rounded-full bg-blue-600 text-sm font-bold text-white ring-2 ring-white"
                    >
                      {initials(person.name)}
                    </span>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {authors.map((a) => a.name).join(' & ')}
                  </p>
                  <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {formatLongDate(article.publishedAt)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime} min read
                    </span>
                    <span>{article.wordCount.toLocaleString()} words</span>
                  </div>
                </div>
              </div>

              <ShareBar title={article.title} slug={article.slug} />
            </div>
          </div>
        </header>

        {/* Admin controls */}
        <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6 lg:px-8">
          <ArticleAdminControls article={article} variant="bar" />
        </div>

        {/* Cover */}
        {article.coverImage && (
          <figure className="mx-auto -mt-0 max-w-5xl px-4 pt-10 sm:px-6 lg:px-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.coverImage}
              alt={article.coverImageAlt || article.title}
              className="h-[280px] w-full rounded-3xl object-cover shadow-xl md:h-[420px]"
            />
            {article.coverImageCredit && (
              <figcaption className="mt-3 text-center text-xs text-slate-400">
                {article.coverImageCredit}
              </figcaption>
            )}
          </figure>
        )}

        {/* Body */}
        <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="article-prose" dangerouslySetInnerHTML={{ __html: html }} />

          {article.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-8">
              <Tag className="h-4 w-4 text-slate-400" />
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?search=${encodeURIComponent(tag)}`}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}

          {/* Author box */}
          <div className="mt-10 space-y-4">
            {authors.map((person) => (
              <div
                key={person.name}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-start"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {initials(person.name)}
                </span>
                <div className="flex-1">
                  <p className="text-base font-bold text-gray-900">{person.name}</p>
                  {person.affiliation && (
                    <p className="mt-0.5 text-sm text-blue-600">{person.affiliation}</p>
                  )}
                  {person.bio && <p className="mt-2 text-sm leading-relaxed text-slate-600">{person.bio}</p>}
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                    >
                      <Linkedin className="h-4 w-4" />
                      <Editable id="blog.slug.linkedin" as="span">LinkedIn</Editable>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="border-t border-slate-200 bg-linear-to-br from-white to-blue-50/40 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    <Editable id="blog.slug.keep" as="span">Keep</Editable> <span className="text-blue-600"><Editable id="blog.slug.reading" as="span">reading</Editable></span>
                  </h2>
                  <p className="mt-2 text-slate-600"><Editable id="blog.slug.more-from-the-nluo-mediation-blogs" as="span">More from the NLUO Mediation Blogs.</Editable></p>
                </div>
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700"
                >
                  <Editable id="blog.slug.view-all" as="span">View all</Editable>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <ArticleCard key={item.id} article={item} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
