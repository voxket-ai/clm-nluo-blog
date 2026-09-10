import { NextResponse } from 'next/server'
import {
  ADMIN_COOKIE,
  SESSION_MAX_AGE,
  adminCredentials,
  createSessionToken,
  isAdminConfigured,
  safeEqual,
} from '@/lib/adminAuth'

export const dynamic = 'force-dynamic'

/**
 * Rate limiting for the single shared admin password.
 *
 * Two rules, deliberately arranged so the real administrator can never be
 * locked out:
 *
 *  - Correct credentials ALWAYS succeed. A hard global block would let anyone
 *    shut the owner out of their own site with a burst of wrong guesses.
 *  - Wrong credentials get slower. The delay grows with the number of recent
 *    failures across all callers, which is what actually makes online guessing
 *    impractical, and it cannot be sidestepped by forging X-Forwarded-For
 *    (a proxy appends to that header rather than replacing it, so the value is
 *    attacker-controlled and useless as the only key).
 */
const WINDOW_MS = 10 * 60 * 1000
const SOFT_FAILURES_BEFORE_DELAY = 5
const MAX_DELAY_MS = 4_000
const MAX_TRACKED_CLIENTS = 5_000

const attempts = new Map<string, { count: number; firstAt: number }>()
let globalFailures = { count: 0, firstAt: 0 }

function prune(now: number) {
  for (const [key, record] of attempts) {
    if (now - record.firstAt > WINDOW_MS) attempts.delete(key)
  }
  // Forged keys must not grow the map without bound.
  if (attempts.size > MAX_TRACKED_CLIENTS) attempts.clear()
}

function recordFailure(key: string, now: number) {
  const record = attempts.get(key)
  if (!record || now - record.firstAt > WINDOW_MS) attempts.set(key, { count: 1, firstAt: now })
  else record.count += 1

  if (now - globalFailures.firstAt > WINDOW_MS) globalFailures = { count: 1, firstAt: now }
  else globalFailures.count += 1
}

function clearFailures(key: string) {
  attempts.delete(key)
  globalFailures = { count: 0, firstAt: 0 }
}

/** Back-off applied only to a rejected attempt. */
function failureDelayMs(now: number) {
  if (now - globalFailures.firstAt > WINDOW_MS) return 0
  const over = globalFailures.count - SOFT_FAILURES_BEFORE_DELAY
  if (over <= 0) return 0
  return Math.min(MAX_DELAY_MS, over * 250)
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function POST(request: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { ok: false, message: 'Admin access is not configured. Set ADMIN_PASSWORD in .env.local.' },
      { status: 503 }
    )
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'

  const now = Date.now()
  prune(now)

  let body: { username?: string; password?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 })
  }

  const expected = adminCredentials()
  const [userOk, passOk] = await Promise.all([
    safeEqual(body.username?.trim() ?? '', expected.username),
    safeEqual(body.password ?? '', expected.password),
  ])

  // One message for both failures so the response never reveals which half was wrong.
  if (!userOk || !passOk) {
    recordFailure(ip, now)
    await sleep(failureDelayMs(now))
    return NextResponse.json({ ok: false, message: 'Incorrect username or password.' }, { status: 401 })
  }

  clearFailures(ip)

  const token = await createSessionToken(expected.username)
  const response = NextResponse.json({ ok: true, username: expected.username })
  response.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  })
  return response
}
