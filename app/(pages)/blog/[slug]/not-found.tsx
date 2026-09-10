import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowRight, FileQuestion } from 'lucide-react'

export default function ArticleNotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      <main className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="max-w-lg rounded-3xl border border-slate-200 bg-white px-8 py-14 text-center shadow-sm">
          <span className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-blue-600 text-white shadow-sm">
            <FileQuestion className="h-7 w-7" />
          </span>
          <h1 className="mb-3 text-3xl font-bold text-gray-900">We couldn&apos;t find that article</h1>
          <p className="text-slate-500">
            It may have been removed, or the link may be incorrect. Browse everything we have published instead.
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            Browse all articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
