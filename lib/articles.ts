/**
 * Shared article vocabulary + helpers.
 * Safe to import from client components — no database code lives here.
 */

export const ARTICLE_CATEGORIES = [
  'Mediation Law',
  'ODR',
  'Family Mediation',
  'Commercial Mediation',
  'Tech & Mediation',
  'Community Mediation',
  'Arbitration',
  'Negotiation',
  'Policy & Legislation',
  'Case Comment',
  'Book Review',
] as const

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number]

export const SUBMISSION_TYPES = [
  'Article',
  'Case Comment',
  'Legislative Comment',
  'Book Review',
] as const

export type SubmissionType = (typeof SUBMISSION_TYPES)[number]

/** Badge colour per category — mirrors the palette already used on the site. */
export const CATEGORY_COLORS: Record<string, string> = {
  'Mediation Law': 'bg-blue-500',
  ODR: 'bg-purple-500',
  'Family Mediation': 'bg-green-500',
  'Commercial Mediation': 'bg-orange-500',
  'Tech & Mediation': 'bg-pink-500',
  'Community Mediation': 'bg-teal-500',
  Arbitration: 'bg-indigo-500',
  Negotiation: 'bg-cyan-600',
  'Policy & Legislation': 'bg-amber-600',
  'Case Comment': 'bg-rose-500',
  'Book Review': 'bg-lime-600',
}

export function categoryColor(category: string) {
  return CATEGORY_COLORS[category] || 'bg-slate-500'
}

export interface AuthorPayload {
  name: string
  email: string
  affiliation?: string
  linkedin?: string
  bio?: string
}

/** Plain, JSON-serialisable article shape passed from server to client. */
export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  submissionType: string
  tags: string[]
  author: AuthorPayload
  coAuthor: AuthorPayload | null
  coverImage: string
  coverImageAlt: string
  coverImageCredit: string
  readTime: number
  wordCount: number
  featured: boolean
  trending: boolean
  views: number
  publishedAt: string
  createdAt: string
  updatedAt: string
}

export const WORDS_PER_MINUTE = 220

export function stripMarkdown(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function countWords(markdown: string) {
  const text = stripMarkdown(markdown)
  return text ? text.split(' ').length : 0
}

export function estimateReadTime(markdown: string) {
  return Math.max(1, Math.round(countWords(markdown) / WORDS_PER_MINUTE))
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
    .replace(/^-|-$/g, '')
}

/** "Oct 25, 2025" — the format the existing cards use. */
export function formatArticleDate(value: string | Date) {
  const date = typeof value === 'string' ? new Date(value) : value
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export function formatLongDate(value: string | Date) {
  const date = typeof value === 'string' ? new Date(value) : value
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const LIMITS = {
  titleMin: 10,
  titleMax: 200,
  excerptMin: 60,
  excerptMax: 400,
  contentMinWords: 300,
  contentMaxWords: 4000,
  tagsMax: 6,
  coverImageBytes: 3 * 1024 * 1024,
}

export interface ArticleFormValues {
  title: string
  category: string
  submissionType: string
  excerpt: string
  content: string
  tags: string[]
  author: AuthorPayload
  coAuthor: AuthorPayload | null
  coverImage: string
  coverImageAlt: string
  coverImageCredit: string
  declaration?: boolean
}

/**
 * One validator used by both the form and the API route so the rules can
 * never drift apart. Returns a map of field path -> message.
 */
export function validateArticle(values: Partial<ArticleFormValues>) {
  const errors: Record<string, string> = {}
  const title = (values.title || '').trim()
  const excerpt = (values.excerpt || '').trim()
  const content = values.content || ''
  const words = countWords(content)

  if (title.length < LIMITS.titleMin) errors.title = `Title needs at least ${LIMITS.titleMin} characters.`
  else if (title.length > LIMITS.titleMax) errors.title = `Title must stay under ${LIMITS.titleMax} characters.`

  if (!values.category || !ARTICLE_CATEGORIES.includes(values.category as ArticleCategory))
    errors.category = 'Choose a category.'

  if (values.submissionType && !SUBMISSION_TYPES.includes(values.submissionType as SubmissionType))
    errors.submissionType = 'Choose a valid submission type.'

  if (excerpt.length < LIMITS.excerptMin)
    errors.excerpt = `The abstract needs at least ${LIMITS.excerptMin} characters.`
  else if (excerpt.length > LIMITS.excerptMax)
    errors.excerpt = `Keep the abstract under ${LIMITS.excerptMax} characters.`

  if (words < LIMITS.contentMinWords)
    errors.content = `The body is ${words} words — at least ${LIMITS.contentMinWords} are required.`
  else if (words > LIMITS.contentMaxWords)
    errors.content = `The body is ${words} words — the ceiling is ${LIMITS.contentMaxWords}.`

  const authorName = (values.author?.name || '').trim()
  const authorEmail = (values.author?.email || '').trim()
  if (authorName.length < 2) errors['author.name'] = 'Author name is required.'
  if (!EMAIL_PATTERN.test(authorEmail)) errors['author.email'] = 'A valid email address is required.'

  if (values.coAuthor) {
    const coName = (values.coAuthor.name || '').trim()
    const coEmail = (values.coAuthor.email || '').trim()
    if (coName && !EMAIL_PATTERN.test(coEmail))
      errors['coAuthor.email'] = 'Co-author email is not valid.'
    if (!coName && coEmail) errors['coAuthor.name'] = 'Co-author name is required.'
  }

  if ((values.tags?.length || 0) > LIMITS.tagsMax)
    errors.tags = `A maximum of ${LIMITS.tagsMax} keywords is allowed.`

  return errors
}
