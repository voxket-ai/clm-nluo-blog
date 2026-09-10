import { NextResponse } from 'next/server'
import {
  deleteArticle,
  getArticleById,
  setArticleFlags,
  updateArticle,
  ValidationError,
} from '@/lib/articleService'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params
  try {
    const article = await getArticleById(id)
    if (!article) return NextResponse.json({ ok: false, message: 'Not found.' }, { status: 404 })
    return NextResponse.json({ ok: true, article })
  } catch (error) {
    console.error('[admin/articles/:id:GET]', error)
    return NextResponse.json({ ok: false, message: 'Unable to load the article.' }, { status: 500 })
  }
}

/** A flag toggle or a full content revision, depending on the body. */
export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request body.' }, { status: 400 })
  }

  try {
    const isFlagOnly =
      (typeof body.featured === 'boolean' || typeof body.trending === 'boolean') && !body.title

    const article = isFlagOnly
      ? await setArticleFlags(id, {
          featured: body.featured as boolean | undefined,
          trending: body.trending as boolean | undefined,
        })
      : await updateArticle(id, body)

    if (!article) return NextResponse.json({ ok: false, message: 'Not found.' }, { status: 404 })
    return NextResponse.json({ ok: true, article })
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ ok: false, fields: error.fields }, { status: 422 })
    }
    console.error('[admin/articles/:id:PATCH]', error)
    return NextResponse.json({ ok: false, message: 'Could not save your changes.' }, { status: 500 })
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params
  try {
    const removed = await deleteArticle(id)
    if (!removed) return NextResponse.json({ ok: false, message: 'Not found.' }, { status: 404 })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[admin/articles/:id:DELETE]', error)
    return NextResponse.json({ ok: false, message: 'Could not delete the article.' }, { status: 500 })
  }
}
