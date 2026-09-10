import { NextResponse } from 'next/server'
import { createEvent, EventValidationError } from '@/lib/events'
import { adminName } from '@/lib/adminSession'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request body.' }, { status: 400 })
  }

  try {
    const event = await createEvent(body, await adminName())
    return NextResponse.json({ ok: true, event }, { status: 201 })
  } catch (error) {
    if (error instanceof EventValidationError) {
      return NextResponse.json({ ok: false, fields: error.fields }, { status: 422 })
    }
    console.error('[admin/events:POST]', error)
    return NextResponse.json({ ok: false, message: 'The event could not be created.' }, { status: 500 })
  }
}
