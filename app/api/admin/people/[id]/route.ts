import { NextResponse } from 'next/server'
import { deletePerson, PersonValidationError, updatePerson } from '@/lib/people'

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
    const person = await updatePerson(id, body)
    if (!person) return NextResponse.json({ ok: false, message: 'Not found.' }, { status: 404 })
    return NextResponse.json({ ok: true, person })
  } catch (error) {
    if (error instanceof PersonValidationError) {
      return NextResponse.json({ ok: false, fields: error.fields }, { status: 422 })
    }
    console.error('[admin/people/:id:PATCH]', error)
    return NextResponse.json({ ok: false, message: 'Could not save that person.' }, { status: 500 })
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params
  try {
    const removed = await deletePerson(id)
    if (!removed) return NextResponse.json({ ok: false, message: 'Not found.' }, { status: 404 })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[admin/people/:id:DELETE]', error)
    return NextResponse.json({ ok: false, message: 'Could not remove that person.' }, { status: 500 })
  }
}
