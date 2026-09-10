import { NextResponse } from 'next/server'
import { listOverrides, resetContent, saveContent, type ContentWrite } from '@/lib/content'
import { adminName } from '@/lib/adminSession'

export const dynamic = 'force-dynamic'

const MAX_BATCH = 200

export async function GET() {
  try {
    return NextResponse.json({ ok: true, overrides: await listOverrides() })
  } catch (error) {
    console.error('[admin/content:GET]', error)
    return NextResponse.json({ ok: false, message: 'Unable to load saved content.' }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  let body: { changes?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request body.' }, { status: 400 })
  }

  if (!Array.isArray(body.changes)) {
    return NextResponse.json({ ok: false, message: 'No changes were sent.' }, { status: 400 })
  }
  if (body.changes.length === 0) {
    return NextResponse.json({ ok: true, saved: [], removed: [], rejected: [] })
  }
  if (body.changes.length > MAX_BATCH) {
    return NextResponse.json(
      { ok: false, message: `Too many changes at once (limit ${MAX_BATCH}).` },
      { status: 413 }
    )
  }

  try {
    const result = await saveContent(body.changes as ContentWrite[], await adminName())
    return NextResponse.json({ ok: true, ...result })
  } catch (error) {
    console.error('[admin/content:PATCH]', error)
    return NextResponse.json({ ok: false, message: 'Your changes could not be saved.' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  let body: { keys?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request body.' }, { status: 400 })
  }

  const keys = Array.isArray(body.keys) ? body.keys.filter((k): k is string => typeof k === 'string') : []
  if (!keys.length) return NextResponse.json({ ok: false, message: 'Nothing to reset.' }, { status: 400 })

  try {
    return NextResponse.json({ ok: true, removed: await resetContent(keys) })
  } catch (error) {
    console.error('[admin/content:DELETE]', error)
    return NextResponse.json({ ok: false, message: 'Could not reset that content.' }, { status: 500 })
  }
}
