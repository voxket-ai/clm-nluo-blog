import 'server-only'
import { connectToDatabase } from '@/lib/mongodb'
import type { QueryFilter } from 'mongoose'
import Article, { type ArticleDoc } from '@/models/Article'
import {
  type Article as ArticleView,
  type ArticleCategory,
  type ArticleFormValues,
  type SubmissionType,
  LIMITS,
  countWords,
  estimateReadTime,
  slugify,
  validateArticle,
} from '@/lib/articles'

/** Mongoose `.lean()` output — shape varies with the projection used. */
type Lean = Record<string, unknown> & { [key: string]: any } // eslint-disable-line @typescript-eslint/no-explicit-any

/**
 * Author email addresses are collected for the editorial record, never for
 * display. They are omitted unless a caller explicitly asks for them, so they
 * cannot leak into a public page's HTML or the public JSON API.
 */
export function serializeArticle(doc: Lean, includeContact = false): ArticleView {
  const contact = (person: Lean | undefined) => (includeContact ? (person?.email ?? '') : '')

  return {
    id: String(doc._id),
    title: doc.title,
    slug: doc.slug,
    excerpt: doc.excerpt,
    content: doc.content ?? '',
    category: doc.category,
    submissionType: doc.submissionType ?? 'Article',
    tags: doc.tags ?? [],
    author: {
      name: doc.author?.name ?? '',
      email: contact(doc.author),
      affiliation: doc.author?.affiliation ?? '',
      linkedin: doc.author?.linkedin ?? '',
      bio: doc.author?.bio ?? '',
    },
    coAuthor: doc.coAuthor?.name
      ? {
          name: doc.coAuthor.name,
          email: contact(doc.coAuthor),
          affiliation: doc.coAuthor.affiliation ?? '',
          linkedin: doc.coAuthor.linkedin ?? '',
          bio: doc.coAuthor.bio ?? '',
        }
      : null,
    coverImage: doc.coverImage ?? '',
    coverImageAlt: doc.coverImageAlt ?? '',
    coverImageCredit: doc.coverImageCredit ?? '',
    readTime: doc.readTime ?? 5,
    wordCount: doc.wordCount ?? 0,
    featured: Boolean(doc.featured),
    trending: Boolean(doc.trending),
    views: doc.views ?? 0,
    publishedAt: new Date(doc.publishedAt ?? doc.createdAt ?? Date.now()).toISOString(),
    createdAt: new Date(doc.createdAt ?? Date.now()).toISOString(),
    updatedAt: new Date(doc.updatedAt ?? doc.createdAt ?? Date.now()).toISOString(),
  }
}

/** Everything except the full body — keeps listing payloads small. */
const LIST_PROJECTION =
  'title slug excerpt category submissionType tags author coAuthor coverImage coverImageAlt readTime wordCount featured trending views publishedAt createdAt updatedAt'

export interface ListOptions {
  page?: number
  limit?: number
  category?: string
  search?: string
  excludeSlug?: string
}

export interface ListResult {
  articles: ArticleView[]
  total: number
  page: number
  limit: number
  totalPages: number
  hasMore: boolean
}

export const EMPTY_LIST: ListResult = {
  articles: [],
  total: 0,
  page: 1,
  limit: 0,
  totalPages: 0,
  hasMore: false,
}

export async function listPublishedArticles(options: ListOptions = {}): Promise<ListResult> {
  const page = Math.max(1, options.page ?? 1)
  const limit = Math.min(48, Math.max(1, options.limit ?? 9))

  await connectToDatabase()

  const query: QueryFilter<ArticleDoc> = {}
  if (options.category && options.category !== 'All') query.category = options.category as ArticleCategory
  if (options.excludeSlug) query.slug = { $ne: options.excludeSlug }
  if (options.search?.trim()) {
    const rx = new RegExp(escapeRegExp(options.search.trim()), 'i')
    query.$or = [{ title: rx }, { excerpt: rx }, { tags: rx }, { 'author.name': rx }]
  }

  const [docs, total] = await Promise.all([
    Article.find(query)
      .select(LIST_PROJECTION)
      .sort({ featured: -1, publishedAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean(),
    Article.countDocuments(query),
  ])

  const totalPages = Math.ceil(total / limit) || 0

  return {
    articles: docs.map((doc) => serializeArticle(doc)),
    total,
    page,
    limit,
    totalPages,
    hasMore: page < totalPages,
  }
}

/**
 * `includeContact` is set only by the admin editor, which needs the stored
 * email addresses to prefill the byline fields.
 */
export async function getArticleBySlug(
  slug: string,
  { includeContact = false }: { includeContact?: boolean } = {}
): Promise<ArticleView | null> {
  await connectToDatabase()
  const doc = await Article.findOne({ slug }).lean()
  return doc ? serializeArticle(doc, includeContact) : null
}

export async function getRelatedArticles(article: ArticleView, limit = 3): Promise<ArticleView[]> {
  await connectToDatabase()
  const docs = await Article.find({
    slug: { $ne: article.slug },
    $or: [{ category: article.category as ArticleCategory }, { tags: { $in: article.tags } }],
  })
    .select(LIST_PROJECTION)
    .sort({ publishedAt: -1 })
    .limit(limit)
    .lean()

  if (docs.length >= limit) return docs.map((doc) => serializeArticle(doc))

  // Top up with the newest pieces so the rail is never half-empty.
  const seen = new Set([article.slug, ...docs.map((d: Lean) => d.slug)])
  const filler = await Article.find({ slug: { $nin: [...seen] } })
    .select(LIST_PROJECTION)
    .sort({ publishedAt: -1 })
    .limit(limit - docs.length)
    .lean()

  return [...docs, ...filler].map((doc) => serializeArticle(doc))
}

export async function getCategoryCounts(): Promise<{ category: string; count: number }[]> {
  await connectToDatabase()
  const rows = await Article.aggregate([
    { $group: { _id: '$category', count: { $sum: 1 } } },
    { $sort: { count: -1, _id: 1 } },
  ])
  return rows.map((r) => ({ category: r._id as string, count: r.count as number }))
}

export async function incrementViews(slug: string) {
  try {
    await connectToDatabase()
    await Article.updateOne({ slug }, { $inc: { views: 1 } })
  } catch {
    // A view counter is never worth failing a page render over.
  }
}

async function buildUniqueSlug(title: string, ignoreId?: string) {
  const base = slugify(title) || 'article'
  let candidate = base
  let suffix = 2
  // Slugs are unique-indexed; walk until we find a free one. When renaming an
  // existing article it must not collide with itself.
  while (
    await Article.exists({
      slug: candidate,
      ...(ignoreId ? { _id: { $ne: ignoreId } } : {}),
    })
  ) {
    candidate = `${base}-${suffix++}`
    if (suffix > 60) {
      candidate = `${base}-${Date.now().toString(36)}`
      break
    }
  }
  return candidate
}

/**
 * Cover images may be an upload, a data URL or an https link - never anything
 * that could execute. This check used to live in the public submission route;
 * it moved here so every write path shares it.
 */
export function validateCoverImage(value: string | undefined): string | null {
  const cover = (value || '').trim()
  if (!cover) return null

  if (cover.startsWith('data:')) {
    // base64 inflates by ~4/3, so compare against the encoded length
    if (cover.length > LIMITS.coverImageBytes * 1.4) {
      return 'Cover image is too large. Keep it under 3 MB.'
    }
    if (!/^data:image\/(jpeg|png|webp|gif);base64,/i.test(cover)) {
      return 'That cover image is not a supported image type.'
    }
    return null
  }

  if (!/^(https?:\/\/|\/)/i.test(cover)) {
    return 'Cover image must be an uploaded image or an https link.'
  }
  return null
}

export class ValidationError extends Error {
  fields: Record<string, string>
  constructor(fields: Record<string, string>) {
    super('Validation failed')
    this.name = 'ValidationError'
    this.fields = fields
  }
}

export async function createArticle(payload: Partial<ArticleFormValues>): Promise<ArticleView> {
  const errors = validateArticle(payload)
  const coverError = validateCoverImage(payload.coverImage)
  if (coverError) errors.coverImage = coverError
  if (Object.keys(errors).length) throw new ValidationError(errors)

  await connectToDatabase()

  const content = (payload.content || '').trim()
  const title = (payload.title || '').trim()
  const slug = await buildUniqueSlug(title)

  const coAuthorName = payload.coAuthor?.name?.trim()

  const created = new Article({
    title,
    slug,
    excerpt: (payload.excerpt || '').trim(),
    content,
    category: payload.category as ArticleCategory,
    submissionType: (payload.submissionType || 'Article') as SubmissionType,
    tags: (payload.tags || []).map((t) => t.trim()).filter(Boolean).slice(0, 6),
    author: {
      name: payload.author!.name.trim(),
      email: payload.author!.email.trim().toLowerCase(),
      affiliation: payload.author?.affiliation?.trim() || '',
      linkedin: payload.author?.linkedin?.trim() || '',
      bio: payload.author?.bio?.trim() || '',
    },
    coAuthor: coAuthorName
      ? {
          name: coAuthorName,
          email: (payload.coAuthor?.email || '').trim().toLowerCase(),
          affiliation: payload.coAuthor?.affiliation?.trim() || '',
          linkedin: payload.coAuthor?.linkedin?.trim() || '',
          bio: payload.coAuthor?.bio?.trim() || '',
        }
      : null,
    coverImage: payload.coverImage || '',
    coverImageAlt: payload.coverImageAlt?.trim() || title,
    coverImageCredit: payload.coverImageCredit?.trim() || '',
    readTime: estimateReadTime(content),
    wordCount: countWords(content),
    publishedAt: new Date(),
  })

  await created.save()

  return serializeArticle(created.toObject(), true)
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/* ------------------------------------------------------------------
   Admin operations
   Called only from routes behind the admin session check.
------------------------------------------------------------------ */

export async function getArticleById(id: string): Promise<ArticleView | null> {
  if (!isValidObjectId(id)) return null
  await connectToDatabase()
  const doc = await Article.findById(id).lean()
  return doc ? serializeArticle(doc, true) : null
}

export async function setArticleFlags(
  id: string,
  flags: { featured?: boolean; trending?: boolean }
): Promise<ArticleView | null> {
  if (!isValidObjectId(id)) return null
  await connectToDatabase()

  const update: Record<string, unknown> = {}
  if (typeof flags.featured === 'boolean') update.featured = flags.featured
  if (typeof flags.trending === 'boolean') update.trending = flags.trending
  if (!Object.keys(update).length) return getArticleById(id)

  const doc = await Article.findByIdAndUpdate(id, update, { new: true }).lean()
  return doc ? serializeArticle(doc) : null
}

export async function updateArticle(
  id: string,
  payload: Partial<ArticleFormValues>
): Promise<ArticleView | null> {
  if (!isValidObjectId(id)) return null

  const errors = validateArticle(payload)
  const coverError = validateCoverImage(payload.coverImage)
  if (coverError) errors.coverImage = coverError
  if (Object.keys(errors).length) throw new ValidationError(errors)

  await connectToDatabase()

  const existing = await Article.findById(id)
  if (!existing) return null

  const content = (payload.content || '').trim()
  const title = (payload.title || '').trim()

  // Retitling regenerates the slug only when the slug itself would really
  // change. Comparing against the stored slug directly matters: stripping a
  // trailing "-2023" first made every title ending in a year look renamed,
  // and buildUniqueSlug then counted the article as colliding with itself.
  if (title !== existing.title) {
    const desired = slugify(title)
    if (desired && desired !== existing.slug) {
      existing.slug = await buildUniqueSlug(title, id)
    }
  }

  const coAuthorName = payload.coAuthor?.name?.trim()

  existing.title = title
  existing.excerpt = (payload.excerpt || '').trim()
  existing.content = content
  existing.category = payload.category as ArticleCategory
  existing.submissionType = (payload.submissionType || 'Article') as SubmissionType
  existing.tags = (payload.tags || []).map((t) => t.trim()).filter(Boolean).slice(0, 6)
  existing.author = {
    name: payload.author!.name.trim(),
    email: payload.author!.email.trim().toLowerCase(),
    affiliation: payload.author?.affiliation?.trim() || '',
    linkedin: payload.author?.linkedin?.trim() || '',
    bio: payload.author?.bio?.trim() || '',
  }
  existing.coAuthor = coAuthorName
    ? {
        name: coAuthorName,
        email: (payload.coAuthor?.email || '').trim().toLowerCase(),
        affiliation: payload.coAuthor?.affiliation?.trim() || '',
        linkedin: payload.coAuthor?.linkedin?.trim() || '',
        bio: payload.coAuthor?.bio?.trim() || '',
      }
    : null
  existing.coverImage = payload.coverImage || ''
  existing.coverImageAlt = payload.coverImageAlt?.trim() || title
  existing.coverImageCredit = payload.coverImageCredit?.trim() || ''
  existing.readTime = estimateReadTime(content)
  existing.wordCount = countWords(content)

  await existing.save()
  return serializeArticle(existing.toObject(), true)
}

export async function deleteArticle(id: string): Promise<boolean> {
  if (!isValidObjectId(id)) return false
  await connectToDatabase()
  const result = await Article.deleteOne({ _id: id })
  return result.deletedCount === 1
}

function isValidObjectId(id: string) {
  return /^[0-9a-fA-F]{24}$/.test(id)
}
