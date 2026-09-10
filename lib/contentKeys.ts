/**
 * Shared rules for editable content slots. Imported by both the client editor
 * and the API so the two can never disagree about what is acceptable.
 */

/** e.g. "home.hero.title", "events.page.subtitle" */
export const CONTENT_KEY_PATTERN = /^[a-z0-9]+(?:[.-][a-z0-9]+)*$/

export const CONTENT_LIMITS = {
  keyMax: 160,
  textMax: 20000,
  altMax: 300,
  /** Upload ceiling before the browser downscales; the stored file is smaller. */
  uploadBytes: 8 * 1024 * 1024,
  /** Hard ceiling on what the API will accept after downscaling. */
  storedBytes: 4 * 1024 * 1024,
}

export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

/* ------------------------------------------------------------------
   Per-slot text formatting
   Stored alongside the text so an admin can restyle any piece of copy
   without touching code. Every field is optional; anything unset simply
   inherits the design already in the stylesheet.
------------------------------------------------------------------ */

export interface TextStyle {
  fontFamily?: string
  fontSize?: string
  fontWeight?: string
  fontStyle?: string
  textDecoration?: string
  color?: string
  textAlign?: string
  letterSpacing?: string
  lineHeight?: string
}

export const FONT_FAMILIES: { label: string; value: string }[] = [
  { label: 'Theme default', value: '' },
  { label: 'Sans (Inter)', value: 'var(--font-inter), system-ui, sans-serif' },
  { label: 'Serif (Newsreader)', value: 'var(--font-newsreader), Georgia, serif' },
  { label: 'Georgia', value: 'Georgia, "Times New Roman", serif' },
  { label: 'Monospace', value: 'ui-monospace, SFMono-Regular, Menlo, monospace' },
]

export const FONT_SIZES = [
  '', '12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px', '60px', '72px',
]

export const FONT_WEIGHTS: { label: string; value: string }[] = [
  { label: 'Default', value: '' },
  { label: 'Light', value: '300' },
  { label: 'Regular', value: '400' },
  { label: 'Medium', value: '500' },
  { label: 'Semibold', value: '600' },
  { label: 'Bold', value: '700' },
  { label: 'Black', value: '800' },
]

export const TEXT_ALIGNMENTS = ['', 'left', 'center', 'right', 'justify'] as const

/** Swatches offered in the colour picker, drawn from the site palette. */
export const TEXT_COLORS = [
  '#0f172a', '#334155', '#64748b', '#94a3b8',
  '#2563eb', '#1d4ed8', '#4f46e5', '#7c3aed',
  '#059669', '#d97706', '#dc2626', '#db2777',
  '#ffffff',
]

const HEX = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i
const LENGTH = /^-?\d+(\.\d+)?(px|rem|em|%)$/
const SAFE_FONT = /^[\w\s,"'()-]+$/

/**
 * Styles are written straight into a style attribute, so every value is
 * checked against a strict shape. Anything unrecognised is dropped rather
 * than rejected, so one bad field cannot lose the rest of an edit.
 */
export function sanitizeStyle(input: unknown): TextStyle | undefined {
  if (!input || typeof input !== 'object') return undefined
  const raw = input as Record<string, unknown>
  const out: TextStyle = {}

  const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '')

  if (SAFE_FONT.test(str(raw.fontFamily)) && str(raw.fontFamily).length <= 120)
    out.fontFamily = str(raw.fontFamily)
  if (LENGTH.test(str(raw.fontSize))) out.fontSize = str(raw.fontSize)
  if (/^[1-8]00$/.test(str(raw.fontWeight))) out.fontWeight = str(raw.fontWeight)
  if (['normal', 'italic'].includes(str(raw.fontStyle))) out.fontStyle = str(raw.fontStyle)
  if (['none', 'underline', 'line-through'].includes(str(raw.textDecoration)))
    out.textDecoration = str(raw.textDecoration)
  if (HEX.test(str(raw.color))) out.color = str(raw.color)
  if (['left', 'center', 'right', 'justify'].includes(str(raw.textAlign)))
    out.textAlign = str(raw.textAlign)
  if (LENGTH.test(str(raw.letterSpacing))) out.letterSpacing = str(raw.letterSpacing)
  if (/^\d+(\.\d+)?$/.test(str(raw.lineHeight))) out.lineHeight = str(raw.lineHeight)

  return Object.keys(out).length ? out : undefined
}

export function hasStyle(style: TextStyle | undefined) {
  return Boolean(style && Object.values(style).some((v) => v))
}

export type ContentType = 'text' | 'image'

export interface ContentOverride {
  value: string
  alt?: string
  type: ContentType
  style?: TextStyle
}

/** key -> override. Serialised into the client tree once per request. */
export type ContentMap = Record<string, ContentOverride>

export function isValidContentKey(key: unknown): key is string {
  return (
    typeof key === 'string' &&
    key.length > 0 &&
    key.length <= CONTENT_LIMITS.keyMax &&
    CONTENT_KEY_PATTERN.test(key)
  )
}

/**
 * An image slot accepts either an uploaded file (served from /api/media/...),
 * a path to a file already in /public, or an absolute https URL.
 */
export function isValidImageValue(value: string) {
  return (
    value.startsWith('/api/media/') ||
    value.startsWith('/') ||
    /^https?:\/\//i.test(value)
  )
}

/** Collapses the whitespace a contentEditable region tends to accumulate. */
export function normalizeText(value: string) {
  return value.replace(/ /g, ' ').replace(/[ \t]+\n/g, '\n').replace(/\s+$/g, '').trimStart()
}

/**
 * Builds a content key from parts, e.g. slotId('editorial', 'board', member.name, 'photo').
 *
 * Keys derived from a person's name stay stable when an admin edits the
 * displayed name, because the part comes from the value in the code, not from
 * the override.
 */
export function slotId(...parts: (string | number)[]) {
  return parts
    .map((part) =>
      String(part)
        .normalize('NFKD')
        .replace(/[̀-ͯ]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 40)
    )
    .filter(Boolean)
    .join('.')
}
