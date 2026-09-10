import { NextResponse } from 'next/server'
import { deleteMedia, listMedia, MediaError, storeUpload } from '@/lib/media'
import { adminName } from '@/lib/adminSession'
import { CONTENT_LIMITS } from '@/lib/contentKeys'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    return NextResponse.json({ ok: true, media: await listMedia() })
  } catch (error) {
    console.error('[admin/media:GET]', error)
    return NextResponse.json({ ok: false, message: 'Unable to load the image library.' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid upload.' }, { status: 400 })
  }

  const file = formData.get('file')
  if (!(file instanceof File)) {
    return NextResponse.json({ ok: false, message: 'No file was received.' }, { status: 400 })
  }
  if (file.size > CONTENT_LIMITS.uploadBytes) {
    return NextResponse.json({ ok: false, message: 'That image is too large.' }, { status: 413 })
  }

  try {
    const media = await storeUpload(file, await adminName())
    return NextResponse.json({ ok: true, media }, { status: 201 })
  } catch (error) {
    if (error instanceof MediaError) {
      return NextResponse.json({ ok: false, message: error.message }, { status: error.status })
    }
    console.error('[admin/media:POST]', error)
    return NextResponse.json({ ok: false, message: 'The upload failed.' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  const id = new URL(request.url).searchParams.get('id') || ''
  try {
    const removed = await deleteMedia(id)
    if (!removed) return NextResponse.json({ ok: false, message: 'Not found.' }, { status: 404 })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[admin/media:DELETE]', error)
    return NextResponse.json({ ok: false, message: 'Could not delete that image.' }, { status: 500 })
  }
}
