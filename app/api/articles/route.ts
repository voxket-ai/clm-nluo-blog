import { NextResponse } from 'next/server'
import { listPublishedArticles } from '@/lib/articleService'

export const dynamic = 'force-dynamic'

/** Public read-only listing. Articles are created from the admin UI only. */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  try {
    const result = await listPublishedArticles({
      page: Number(searchParams.get('page')) || 1,
      limit: Number(searchParams.get('limit')) || 9,
      category: searchParams.get('category') || undefined,
      search: searchParams.get('search') || undefined,
    })
    return NextResponse.json({ ok: true, ...result })
  } catch (error) {
    console.error('[articles:GET]', error)
    return NextResponse.json(
      { ok: false, message: 'Unable to load articles right now.' },
      { status: 500 }
    )
  }
}
