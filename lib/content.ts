import 'server-only'
import { cache } from 'react'
import { connectToDatabase } from '@/lib/mongodb'
import SiteContent from '@/models/SiteContent'
import {
  CONTENT_LIMITS,
  hasStyle,
  isValidContentKey,
  isValidImageValue,
  sanitizeStyle,
  type ContentMap,
  type ContentType,
  type TextStyle,
} from '@/lib/contentKeys'

/**
 * Every editable slot on a page resolves against this one map, fetched once
 * per request. Without the cache() wrapper a page with fifty editable strings
 * would issue fifty queries.
 *
 * A database problem must never blank the site: on failure we return an empty
 * map, and every slot falls back to the default baked into the code.
 */
export const getContentMap = cache(async (): Promise<ContentMap> => {
  try {
    await connectToDatabase()
    const rows = await SiteContent.find({}).select('key type value alt style').lean()

    const map: ContentMap = {}
    for (const row of rows) {
      map[row.key] = {
        value: row.value,
        alt: row.alt || undefined,
        type: (row.type as ContentType) || 'text',
        style: sanitizeStyle(row.style),
      }
    }
    return map
  } catch (error) {
    console.error('[content:getContentMap]', error)
    return {}
  }
})

export interface ContentWrite {
  key: string
  type: ContentType
  value: string
  alt?: string
  page?: string
  style?: TextStyle
}

export interface WriteResult {
  saved: string[]
  removed: string[]
  rejected: { key: string; reason: string }[]
}

/**
 * Applies a batch of edits. An empty value means "reset to the default", which
 * deletes the row rather than storing a blank string.
 */
export async function saveContent(writes: ContentWrite[], updatedBy: string): Promise<WriteResult> {
  await connectToDatabase()

  const result: WriteResult = { saved: [], removed: [], rejected: [] }
  const operations: Parameters<typeof SiteContent.bulkWrite>[0] = []

  for (const write of writes) {
    if (!isValidContentKey(write.key)) {
      result.rejected.push({ key: String(write.key).slice(0, 60), reason: 'Invalid content key.' })
      continue
    }

    const type: ContentType = write.type === 'image' ? 'image' : 'text'
    const value = typeof write.value === 'string' ? write.value : ''
    const style = sanitizeStyle(write.style)

    // An empty value means "go back to the wording in the code" - but only
    // when there is no formatting to preserve, otherwise the styling would be
    // silently discarded along with it.
    if (value === '' && !hasStyle(style)) {
      operations.push({ deleteOne: { filter: { key: write.key } } })
      result.removed.push(write.key)
      continue
    }

    if (type === 'text' && value.length > CONTENT_LIMITS.textMax) {
      result.rejected.push({ key: write.key, reason: 'That text is too long.' })
      continue
    }
    if (type === 'image' && !isValidImageValue(value)) {
      result.rejected.push({ key: write.key, reason: 'Image must be an upload or an https link.' })
      continue
    }

    operations.push({
      updateOne: {
        filter: { key: write.key },
        update: {
          $set: {
            type,
            value,
            style: style ?? null,
            alt: (write.alt || '').slice(0, CONTENT_LIMITS.altMax),
            page: (write.page || '').slice(0, 160),
            updatedBy,
          },
        },
        upsert: true,
      },
    })
    result.saved.push(write.key)
  }

  if (operations.length) await SiteContent.bulkWrite(operations, { ordered: false })

  return result
}

export async function resetContent(keys: string[]) {
  const valid = keys.filter(isValidContentKey)
  if (!valid.length) return 0
  await connectToDatabase()
  const res = await SiteContent.deleteMany({ key: { $in: valid } })
  return res.deletedCount ?? 0
}

/** Powers the "customised content" list in the admin drawer. */
export async function listOverrides() {
  await connectToDatabase()
  const rows = await SiteContent.find({}).sort({ updatedAt: -1 }).lean()
  return rows.map((row) => ({
    key: row.key,
    type: row.type as ContentType,
    value: row.value,
    style: sanitizeStyle(row.style),
    page: row.page || '',
    updatedBy: row.updatedBy || 'admin',
    updatedAt: new Date(row.updatedAt ?? Date.now()).toISOString(),
  }))
}
