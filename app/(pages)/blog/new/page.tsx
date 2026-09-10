import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ArticleForm from '@/components/editor/ArticleForm'
import { ArrowLeft } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'New article | NLUO Mediation Blogs',
  robots: { index: false, follow: false },
}

export default function NewArticlePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50/40">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to articles
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            New <span className="text-blue-600">article</span>
          </h1>
          <p className="mt-1.5 text-slate-500">Publishes to the blog as soon as you save.</p>
        </header>

        <ArticleForm />
      </main>

      <Footer />
    </div>
  )
}
