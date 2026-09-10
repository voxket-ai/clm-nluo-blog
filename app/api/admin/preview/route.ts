import { NextResponse } from 'next/server'
import { renderArticleHtml } from '@/lib/markdown'

export const dynamic = 'force-dynamic'

/**
 * Renders draft markdown through the exact same pipeline the published page
 * uses, so what an author previews is what a reader gets.
 */
export async function POST(request: Request) {
  try {
    const { content } = await request.json()
    if (typeof content !== 'string') {
      return NextResponse.json({ ok: false, html: '' }, { status: 400 })
    }
    return NextResponse.json({ ok: true, html: renderArticleHtml(content.slice(0, 200_000)) })
  } catch {
    return NextResponse.json({ ok: false, html: '' }, { status: 400 })
  }
}
