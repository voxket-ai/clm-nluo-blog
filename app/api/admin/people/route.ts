import { NextResponse } from 'next/server'
import { createPerson, PersonValidationError } from '@/lib/people'
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
    const person = await createPerson(body, await adminName())
    return NextResponse.json({ ok: true, person }, { status: 201 })
  } catch (error) {
    if (error instanceof PersonValidationError) {
      return NextResponse.json({ ok: false, fields: error.fields }, { status: 422 })
    }
    console.error('[admin/people:POST]', error)
    return NextResponse.json({ ok: false, message: 'Could not add that person.' }, { status: 500 })
  }
}
