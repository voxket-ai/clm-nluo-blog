import { NextResponse, type NextRequest } from 'next/server'
import { ADMIN_COOKIE, verifySessionToken } from '@/lib/adminAuth'

/**
 * Single choke point for everything an administrator can reach: the admin API
 * and the two article editor routes. None of the handlers check the session
 * themselves, so this must stay in place.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Login and logout must stay reachable while signed out.
  if (pathname === '/api/admin/login' || pathname === '/api/admin/logout') {
    return NextResponse.next()
  }

  const session = await verifySessionToken(request.cookies.get(ADMIN_COOKIE)?.value)

  if (pathname === '/admin/login') {
    // Already signed in? Go straight back to the site.
    return session ? NextResponse.redirect(new URL('/', request.url)) : NextResponse.next()
  }

  if (session) return NextResponse.next()

  if (pathname.startsWith('/api/admin')) {
    return NextResponse.json(
      { ok: false, message: 'Your session has expired. Please sign in again.' },
      { status: 401 }
    )
  }

  const loginUrl = new URL('/admin/login', request.url)
  loginUrl.searchParams.set('next', pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/api/admin/:path*', '/admin/login', '/blog/new', '/blog/:slug/edit'],
}
