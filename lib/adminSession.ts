import 'server-only'
import { cookies } from 'next/headers'
import { ADMIN_COOKIE, verifySessionToken, type AdminSession } from '@/lib/adminAuth'

/**
 * Reads the signed session inside server components and route handlers.
 * Middleware has already rejected unauthenticated traffic by the time this
 * runs, so a null here means the cookie expired mid-request.
 */
export async function currentAdmin(): Promise<AdminSession | null> {
  const store = await cookies()
  return verifySessionToken(store.get(ADMIN_COOKIE)?.value)
}

export async function adminName() {
  return (await currentAdmin())?.username ?? 'admin'
}
