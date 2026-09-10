import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ArticleForm from '@/components/editor/ArticleForm'
import { getArticleBySlug } from '@/lib/articleService'
import { ArrowLeft } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Edit article | NLUO Mediation Blogs',
  robots: { index: false, follow: false },
}

export default async function EditArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let article = null
  try {
    article = await getArticleBySlug(slug, { includeContact: true })
  } catch (error) {
    console.error('[article:edit]', error)
  }
  if (!article) notFound()

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50/40">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href={`/blog/${article.slug}`}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to the article
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Edit <span className="text-blue-600">article</span>
          </h1>
          <p className="mt-1.5 text-slate-500">Changes go live the moment you save.</p>
        </header>

        <ArticleForm article={article} />
      </main>

      <Footer />
    </div>
  )
}
