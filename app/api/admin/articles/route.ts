import { NextResponse } from 'next/server'
import { createArticle, ValidationError } from '@/lib/articleService'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request body.' }, { status: 400 })
  }

  try {
    const article = await createArticle(body)
    return NextResponse.json({ ok: true, article }, { status: 201 })
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ ok: false, fields: error.fields }, { status: 422 })
    }
    console.error('[admin/articles:POST]', error)
    const message =
      error instanceof Error && error.message.includes('MONGODB_URI')
        ? 'The database is not configured yet. Set MONGODB_URI in .env.local.'
        : 'Could not publish the article.'
    return NextResponse.json({ ok: false, message }, { status: 500 })
  }
}
