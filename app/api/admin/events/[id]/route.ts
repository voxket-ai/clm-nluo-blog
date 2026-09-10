import { NextResponse } from 'next/server'
import { deleteEvent, EventValidationError, updateEvent } from '@/lib/events'

export const dynamic = 'force-dynamic'

type Params = { params: Promise<{ id: string }> }

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request body.' }, { status: 400 })
  }

  try {
    const event = await updateEvent(id, body)
    if (!event) return NextResponse.json({ ok: false, message: 'Event not found.' }, { status: 404 })
    return NextResponse.json({ ok: true, event })
  } catch (error) {
    if (error instanceof EventValidationError) {
      return NextResponse.json({ ok: false, fields: error.fields }, { status: 422 })
    }
    console.error('[admin/events/:id:PATCH]', error)
    return NextResponse.json({ ok: false, message: 'Could not save the event.' }, { status: 500 })
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params
  try {
    const removed = await deleteEvent(id)
    if (!removed) return NextResponse.json({ ok: false, message: 'Event not found.' }, { status: 404 })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[admin/events/:id:DELETE]', error)
    return NextResponse.json({ ok: false, message: 'Could not delete the event.' }, { status: 500 })
  }
}
