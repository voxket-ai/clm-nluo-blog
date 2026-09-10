import { NextResponse } from 'next/server'
import { getArticleBySlug } from '@/lib/articleService'

export const dynamic = 'force-dynamic'

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  try {
    const article = await getArticleBySlug(slug)
    if (!article) {
      return NextResponse.json({ ok: false, message: 'Article not found.' }, { status: 404 })
    }
    return NextResponse.json({ ok: true, article })
  } catch (error) {
    console.error('[articles/:slug:GET]', error)
    return NextResponse.json(
      { ok: false, message: 'Unable to load this article right now.' },
      { status: 500 }
    )
  }
}
