/**
 * Admin session handling.
 *
 * Uses Web Crypto only, so the exact same code runs in middleware (edge
 * runtime) and inside route handlers (node runtime).
 *
 * There is no admin table: credentials live in environment variables, which
 * suits a single editorial team and keeps password material out of the
 * database entirely.
 */

export const ADMIN_COOKIE = 'nluo_admin_session'
export const SESSION_MAX_AGE = 60 * 60 * 12 // 12 hours

export interface AdminSession {
  username: string
  issuedAt: number
  expiresAt: number
}

const encoder = new TextEncoder()

function base64UrlEncode(bytes: Uint8Array) {
  let binary = ''
  bytes.forEach((b) => (binary += String.fromCharCode(b)))
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function base64UrlDecode(value: string): Uint8Array<ArrayBuffer> {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(value.length / 4) * 4, '=')
  const binary = atob(padded)
  const bytes = new Uint8Array(new ArrayBuffer(binary.length))
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes
}

/**
 * Falls back to the password itself when no explicit secret is configured —
 * a side effect worth having: changing the password invalidates every
 * outstanding session.
 */
function sessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD
  if (!secret) throw new Error('ADMIN_PASSWORD is not configured.')
  return secret
}

async function hmacKey() {
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(sessionSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  )
}

export async function createSessionToken(username: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000)
  const session: AdminSession = { username, issuedAt: now, expiresAt: now + SESSION_MAX_AGE }
  const payload = base64UrlEncode(encoder.encode(JSON.stringify(session)))
  const signature = await crypto.subtle.sign('HMAC', await hmacKey(), encoder.encode(payload))
  return `${payload}.${base64UrlEncode(new Uint8Array(signature))}`
}

export async function verifySessionToken(token: string | undefined): Promise<AdminSession | null> {
  if (!token) return null

  const [payload, signature] = token.split('.')
  if (!payload || !signature) return null

  try {
    const valid = await crypto.subtle.verify(
      'HMAC',
      await hmacKey(),
      base64UrlDecode(signature),
      encoder.encode(payload)
    )
    if (!valid) return null

    const session = JSON.parse(new TextDecoder().decode(base64UrlDecode(payload))) as AdminSession
    if (!session.expiresAt || session.expiresAt * 1000 < Date.now()) return null
    return session
  } catch {
    return null
  }
}

/** Constant-time comparison so a wrong password leaks nothing through timing. */
export async function safeEqual(a: string, b: string) {
  const [hashA, hashB] = await Promise.all([
    crypto.subtle.digest('SHA-256', encoder.encode(a)),
    crypto.subtle.digest('SHA-256', encoder.encode(b)),
  ])
  const viewA = new Uint8Array(hashA)
  const viewB = new Uint8Array(hashB)
  let diff = 0
  for (let i = 0; i < viewA.length; i++) diff |= viewA[i] ^ viewB[i]
  return diff === 0
}

export function adminCredentials() {
  return {
    username: process.env.ADMIN_USERNAME || 'admin',
    password: process.env.ADMIN_PASSWORD || '',
  }
}

export function isAdminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD)
}
