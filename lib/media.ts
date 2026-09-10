import 'server-only'
import { connectToDatabase } from '@/lib/mongodb'
import Media from '@/models/Media'
import { ALLOWED_IMAGE_TYPES, CONTENT_LIMITS } from '@/lib/contentKeys'

export interface StoredMedia {
  id: string
  url: string
  filename: string
  contentType: string
  size: number
}

export class MediaError extends Error {
  status: number
  constructor(message: string, status = 400) {
    super(message)
    this.name = 'MediaError'
    this.status = status
  }
}

export async function storeUpload(file: File, uploadedBy: string): Promise<StoredMedia> {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    throw new MediaError('Only JPG, PNG, WebP or GIF images can be uploaded.')
  }
  if (file.size === 0) throw new MediaError('That file is empty.')
  if (file.size > CONTENT_LIMITS.storedBytes) {
    throw new MediaError('That image is too large. Keep it under 4 MB.', 413)
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  if (!looksLikeImage(buffer, file.type)) {
    throw new MediaError('That file does not look like a real image.')
  }

  await connectToDatabase()
  const doc = await Media.create({
    filename: sanitizeFilename(file.name),
    contentType: file.type,
    size: buffer.length,
    data: buffer,
    uploadedBy,
  })

  return {
    id: String(doc._id),
    url: `/api/media/${String(doc._id)}`,
    filename: doc.filename,
    contentType: doc.contentType,
    size: doc.size,
  }
}

export async function getMedia(id: string) {
  if (!/^[0-9a-fA-F]{24}$/.test(id)) return null
  await connectToDatabase()
  const doc = await Media.findById(id).lean()
  if (!doc) return null

  const data = toBuffer(doc.data)
  if (!data) return null

  return {
    data,
    contentType: doc.contentType,
    updatedAt: new Date(doc.updatedAt ?? Date.now()),
  }
}

/**
 * A lean() read hands back a BSON Binary rather than a Node Buffer, and its
 * `length` is a method — passing that straight to a Response produces a broken
 * Content-Length. Normalise whatever shape the driver returns.
 */
function toBuffer(value: unknown): Buffer | null {
  if (!value) return null
  if (Buffer.isBuffer(value)) return value

  const binary = value as { buffer?: unknown; value?: () => unknown }
  if (binary.buffer && Buffer.isBuffer(binary.buffer)) return binary.buffer
  if (binary.buffer instanceof Uint8Array) return Buffer.from(binary.buffer)
  if (typeof binary.value === 'function') {
    const inner = binary.value()
    if (Buffer.isBuffer(inner)) return inner
    if (inner instanceof Uint8Array) return Buffer.from(inner)
  }
  if (value instanceof Uint8Array) return Buffer.from(value)
  return null
}

export async function listMedia(limit = 60) {
  await connectToDatabase()
  const rows = await Media.find({}).select('filename contentType size createdAt').sort({ createdAt: -1 }).limit(limit).lean()
  return rows.map((row) => ({
    id: String(row._id),
    url: `/api/media/${String(row._id)}`,
    filename: row.filename,
    contentType: row.contentType,
    size: row.size,
    createdAt: new Date(row.createdAt ?? Date.now()).toISOString(),
  }))
}

export async function deleteMedia(id: string) {
  if (!/^[0-9a-fA-F]{24}$/.test(id)) return false
  await connectToDatabase()
  const res = await Media.deleteOne({ _id: id })
  return res.deletedCount === 1
}

/** Magic-number check — a declared content type is not evidence of anything. */
function looksLikeImage(buffer: Buffer, declared: string) {
  if (buffer.length < 12) return false
  const hex = buffer.subarray(0, 12)

  const isJpeg = hex[0] === 0xff && hex[1] === 0xd8 && hex[2] === 0xff
  const isPng =
    hex[0] === 0x89 && hex[1] === 0x50 && hex[2] === 0x4e && hex[3] === 0x47
  const isGif = hex[0] === 0x47 && hex[1] === 0x49 && hex[2] === 0x46
  const isWebp =
    hex[0] === 0x52 && hex[1] === 0x49 && hex[2] === 0x46 && hex[3] === 0x46 &&
    hex[8] === 0x57 && hex[9] === 0x45 && hex[10] === 0x42 && hex[11] === 0x50

  switch (declared) {
    case 'image/jpeg':
      return isJpeg
    case 'image/png':
      return isPng
    case 'image/gif':
      return isGif
    case 'image/webp':
      return isWebp
    default:
      return false
  }
}

function sanitizeFilename(name: string) {
  return (name || 'upload')
    .replace(/[^\w.\- ]+/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 200) || 'upload'
}
