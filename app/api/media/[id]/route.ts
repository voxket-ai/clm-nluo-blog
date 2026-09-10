import { NextResponse } from 'next/server'
import { getMedia } from '@/lib/media'

/**
 * Public read endpoint for uploaded images. Immutable ids mean the bytes for a
 * given URL never change, so this can be cached hard.
 */
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  try {
    const media = await getMedia(id)
    if (!media) return new NextResponse('Not found', { status: 404 })

    return new NextResponse(new Uint8Array(media.data), {
      headers: {
        'Content-Type': media.contentType,
        'Content-Length': String(media.data.length),
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    console.error('[media:GET]', error)
    return new NextResponse('Unable to load image', { status: 500 })
  }
}
