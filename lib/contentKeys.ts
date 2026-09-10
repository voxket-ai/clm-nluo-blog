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

export type ContentType = 'text' | 'image'

export interface ContentOverride {
  value: string
  alt?: string
  type: ContentType
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
