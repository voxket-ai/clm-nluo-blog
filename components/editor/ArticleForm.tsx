'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  AlertCircle,
  ArrowLeft,
  BookOpenCheck,
  CheckCircle2,
  FileText,
  Loader2,
  Save,
  Sparkles,
  Trash2,
  UserPlus,
  Users,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import ArticleCard from '@/components/ArticleCard'
import ConfirmDialog from '@/components/ui/ConfirmDialog'
import MarkdownEditor from '@/components/editor/MarkdownEditor'
import TagInput from '@/components/editor/TagInput'
import CoverImagePicker from '@/components/editor/CoverImagePicker'
import { ChoiceGroup, SelectField, TextArea, TextField } from '@/components/editor/Fields'
import {
  ARTICLE_CATEGORIES,
  LIMITS,
  SUBMISSION_TYPES,
  type Article,
  type ArticleFormValues,
  countWords,
  estimateReadTime,
  validateArticle,
} from '@/lib/articles'

const DRAFT_KEY = 'nluo-article-draft-v2'

const emptyAuthor = { name: '', email: '', affiliation: '', linkedin: '', bio: '' }

const initialValues: ArticleFormValues = {
  title: '',
  category: '',
  submissionType: 'Article',
  excerpt: '',
  content: '',
  tags: [],
  author: { ...emptyAuthor },
  coAuthor: null,
  coverImage: '',
  coverImageAlt: '',
  coverImageCredit: '',
}

function valuesFromArticle(article: Article): ArticleFormValues {
  return {
    title: article.title,
    category: article.category,
    submissionType: article.submissionType,
    excerpt: article.excerpt,
    content: article.content,
    tags: article.tags,
    author: { ...emptyAuthor, ...article.author },
    coAuthor: article.coAuthor ? { ...emptyAuthor, ...article.coAuthor } : null,
    coverImage: article.coverImage,
    coverImageAlt: article.coverImageAlt,
    coverImageCredit: article.coverImageCredit,
  }
}

/**
 * The one article editor, used for both writing a new piece and revising an
 * existing one. Admin-only: it is reached from routes the middleware guards.
 */
export default function ArticleForm({ article }: { article?: Article }) {
  const router = useRouter()
  const isEditing = Boolean(article)

  const [values, setValues] = useState<ArticleFormValues>(
    article ? valuesFromArticle(article) : initialValues
  )
  const [submitting, setSubmitting] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [showErrors, setShowErrors] = useState(false)
  const [serverFields, setServerFields] = useState<Record<string, string>>({})
  const [message, setMessage] = useState('')
  const [draftRestored, setDraftRestored] = useState(false)
  // Filled in after mount: reading the clock during render would make the
  // server and client markup disagree.
  const [nowIso, setNowIso] = useState('')
  const topRef = useRef<HTMLDivElement>(null)

  useEffect(() => setNowIso(new Date().toISOString()), [])

  /* ---------- draft safety net (new articles only) ---------- */
  useEffect(() => {
    if (isEditing) return
    try {
      const saved = localStorage.getItem(DRAFT_KEY)
      if (!saved) return
      const parsed = JSON.parse(saved) as ArticleFormValues
      if (parsed?.title || parsed?.content) {
        setValues({ ...initialValues, ...parsed })
        setDraftRestored(true)
      }
    } catch {
      /* a corrupt draft must never block the editor */
    }
  }, [isEditing])

  useEffect(() => {
    if (isEditing) return
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(DRAFT_KEY, JSON.stringify(values))
      } catch {
        /* storage blocked - editing still works in memory */
      }
    }, 700)
    return () => clearTimeout(timer)
  }, [values, isEditing])

  /* ---------- validation ---------- */
  const errors = useMemo(() => validateArticle(values), [values])
  const allErrors = useMemo(() => ({ ...errors, ...serverFields }), [errors, serverFields])
  const errorFor = (field: string) => (showErrors ? allErrors[field] : serverFields[field])

  const set = <K extends keyof ArticleFormValues>(key: K, value: ArticleFormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }))
    setServerFields((prev) => {
      if (!prev[key as string]) return prev
      const next = { ...prev }
      delete next[key as string]
      return next
    })
  }

  const setAuthor = (which: 'author' | 'coAuthor', key: string, value: string) =>
    setValues((prev) => ({ ...prev, [which]: { ...(prev[which] ?? emptyAuthor), [key]: value } }))

  /* ---------- save ---------- */
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setMessage('')
    setShowErrors(true)

    if (Object.keys(errors).length) {
      setMessage('Please fix the highlighted fields.')
      topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch(
        isEditing ? `/api/admin/articles/${article!.id}` : '/api/admin/articles',
        {
          method: isEditing ? 'PATCH' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        }
      )

      if (response.status === 401) {
        setMessage('Your session expired. Sign in again — your work is still here.')
        return
      }

      const data = await response.json()
      if (!response.ok || !data.ok) {
        if (data.fields) setServerFields(data.fields)
        setMessage(data.message || 'Please review the highlighted fields.')
        topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      if (!isEditing) {
        try {
          localStorage.removeItem(DRAFT_KEY)
        } catch {
          /* ignore */
        }
      }

      router.push(`/blog/${data.article.slug}`)
      router.refresh()
    } catch {
      setMessage('Network error. Your work is still here — try saving again.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!article) return
    setDeleting(true)
    try {
      const res = await fetch(`/api/admin/articles/${article.id}`, { method: 'DELETE' })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        setMessage(data.message || 'Could not delete this article.')
        setConfirmDelete(false)
        return
      }
      router.push('/blog')
      router.refresh()
    } catch {
      setMessage('Network error. Please try again.')
      setConfirmDelete(false)
    } finally {
      setDeleting(false)
    }
  }

  /* ---------- live card preview ---------- */
  const previewArticle: Article = {
    id: article?.id ?? 'preview',
    title: values.title || 'Your article title will appear here',
    slug: article?.slug ?? '#',
    excerpt:
      values.excerpt ||
      'Your summary shows up here — it is what readers see on the Articles page and on the homepage.',
    content: values.content,
    category: values.category || 'Mediation Law',
    submissionType: values.submissionType,
    tags: values.tags,
    author: { ...values.author, name: values.author.name || 'Author name' },
    coAuthor: values.coAuthor?.name ? values.coAuthor : null,
    coverImage: values.coverImage,
    coverImageAlt: values.coverImageAlt,
    coverImageCredit: values.coverImageCredit,
    readTime: estimateReadTime(values.content),
    wordCount: countWords(values.content),
    featured: article?.featured ?? false,
    trending: article?.trending ?? false,
    views: article?.views ?? 0,
    publishedAt: article?.publishedAt ?? nowIso,
    createdAt: article?.createdAt ?? nowIso,
    updatedAt: article?.updatedAt ?? nowIso,
  }

  const checklist = [
    { label: 'Title and category', done: !errors.title && !errors.category },
    { label: 'Summary written', done: !errors.excerpt },
    { label: `Body of ${LIMITS.contentMinWords}+ words`, done: !errors.content },
    { label: 'Author named', done: !errors['author.name'] && !errors['author.email'] },
  ]
  const ready = checklist.every((c) => c.done)

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
      <div ref={topRef} className="min-w-0 scroll-mt-24 space-y-6">
        {draftRestored && (
          <div className="flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 text-sm text-blue-800">
            <BookOpenCheck className="mt-0.5 h-4 w-4 shrink-0" />
            <p className="flex-1">We restored an unfinished draft from this browser.</p>
            <button
              type="button"
              onClick={() => {
                setValues(initialValues)
                setDraftRestored(false)
                try {
                  localStorage.removeItem(DRAFT_KEY)
                } catch {
                  /* ignore */
                }
              }}
              className="font-semibold text-blue-600 underline-offset-2 hover:underline"
            >
              Start fresh
            </button>
            <button type="button" onClick={() => setDraftRestored(false)} aria-label="Dismiss">
              <X className="h-4 w-4 text-blue-400 hover:text-blue-700" />
            </button>
          </div>
        )}

        {/* --- The piece --- */}
        <Section icon={FileText} title="The piece" hint="What readers see on the Articles page.">
          <TextField
            label="Title"
            name="title"
            required
            value={values.title}
            onChange={(v) => set('title', v)}
            maxLength={LIMITS.titleMax}
            placeholder="Enforcing Mediated Settlement Agreements after the Mediation Act, 2023"
            error={errorFor('title')}
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <SelectField
              label="Category"
              name="category"
              required
              value={values.category}
              onChange={(v) => set('category', v)}
              options={ARTICLE_CATEGORIES}
              placeholder="Select a theme"
              error={errorFor('category')}
            />
            <ChoiceGroup
              label="Type"
              name="submissionType"
              value={values.submissionType}
              onChange={(v) => set('submissionType', v)}
              options={SUBMISSION_TYPES}
              error={errorFor('submissionType')}
            />
          </div>

          <TextArea
            label="Summary"
            name="excerpt"
            required
            rows={3}
            value={values.excerpt}
            onChange={(v) => set('excerpt', v)}
            maxLength={LIMITS.excerptMax}
            placeholder="Two or three sentences on the argument and why it matters."
            error={errorFor('excerpt')}
            hint={`${LIMITS.excerptMin}–${LIMITS.excerptMax} characters. This is the teaser on every listing.`}
          />

          <TagInput
            tags={values.tags}
            onChange={(tags) => set('tags', tags)}
            max={LIMITS.tagsMax}
            error={errorFor('tags')}
          />
        </Section>

        {/* --- Body --- */}
        <Section icon={BookOpenCheck} title="Article body" hint="Write here or paste from Word.">
          <MarkdownEditor
            value={values.content}
            onChange={(v) => set('content', v)}
            error={errorFor('content')}
            minWords={LIMITS.contentMinWords}
            maxWords={LIMITS.contentMaxWords}
          />
        </Section>

        {/* --- Byline --- */}
        <Section icon={Users} title="Byline" hint="Who gets credit for this piece.">
          <div className="grid gap-5 sm:grid-cols-2">
            <TextField
              label="Author name"
              name="author.name"
              required
              value={values.author.name}
              onChange={(v) => setAuthor('author', 'name', v)}
              maxLength={90}
              placeholder="Ananya Mishra"
              error={errorFor('author.name')}
            />
            <TextField
              label="Email"
              name="author.email"
              type="email"
              required
              value={values.author.email}
              onChange={(v) => setAuthor('author', 'email', v)}
              placeholder="author@university.edu"
              error={errorFor('author.email')}
              hint="Never shown publicly."
            />
            <TextField
              label="Affiliation"
              name="author.affiliation"
              value={values.author.affiliation ?? ''}
              onChange={(v) => setAuthor('author', 'affiliation', v)}
              maxLength={140}
              placeholder="IV year, B.A. LL.B. (Hons.), NLUO"
            />
            <TextField
              label="LinkedIn"
              name="author.linkedin"
              value={values.author.linkedin ?? ''}
              onChange={(v) => setAuthor('author', 'linkedin', v)}
              placeholder="https://linkedin.com/in/…"
            />
          </div>

          <TextArea
            label="Short bio"
            name="author.bio"
            rows={2}
            value={values.author.bio ?? ''}
            onChange={(v) => setAuthor('author', 'bio', v)}
            maxLength={400}
            placeholder="A line or two about their work in mediation and ADR."
            hint="Appears in the author box at the foot of the article."
          />

          {values.coAuthor ? (
            <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-5">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="flex items-center gap-2 text-sm font-bold text-slate-800">
                  <UserPlus className="h-4 w-4 text-blue-600" />
                  Co-author
                </h4>
                <button
                  type="button"
                  onClick={() => set('coAuthor', null)}
                  className="text-xs font-semibold text-slate-500 transition-colors hover:text-red-600"
                >
                  Remove
                </button>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  label="Name"
                  name="coAuthor.name"
                  value={values.coAuthor.name}
                  onChange={(v) => setAuthor('coAuthor', 'name', v)}
                  maxLength={90}
                  error={errorFor('coAuthor.name')}
                />
                <TextField
                  label="Email"
                  name="coAuthor.email"
                  type="email"
                  value={values.coAuthor.email}
                  onChange={(v) => setAuthor('coAuthor', 'email', v)}
                  error={errorFor('coAuthor.email')}
                />
                <TextField
                  label="Affiliation"
                  name="coAuthor.affiliation"
                  className="sm:col-span-2"
                  value={values.coAuthor.affiliation ?? ''}
                  onChange={(v) => setAuthor('coAuthor', 'affiliation', v)}
                  maxLength={140}
                />
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => set('coAuthor', { ...emptyAuthor })}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-300 py-3.5 text-sm font-semibold text-slate-600 transition-all hover:border-blue-400 hover:bg-blue-50/40 hover:text-blue-600"
            >
              <UserPlus className="h-4 w-4" />
              Add a co-author
            </button>
          )}
        </Section>

        {/* --- Cover --- */}
        <Section icon={Sparkles} title="Cover image" hint="Optional — without one we draw a gradient card.">
          <CoverImagePicker
            value={values.coverImage}
            onChange={(v) => set('coverImage', v)}
            error={errorFor('coverImage')}
          />

          {values.coverImage && (
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                label="Image description"
                name="coverImageAlt"
                value={values.coverImageAlt}
                onChange={(v) => set('coverImageAlt', v)}
                maxLength={160}
                placeholder="Two people shaking hands across a table"
                hint="Read aloud by screen readers."
              />
              <TextField
                label="Image credit"
                name="coverImageCredit"
                value={values.coverImageCredit}
                onChange={(v) => set('coverImageCredit', v)}
                maxLength={160}
                placeholder="Photo: Unsplash / Jane Doe"
              />
            </div>
          )}
        </Section>

        {message && (
          <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            {message}
          </div>
        )}

        {/* --- Actions --- */}
        <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6">
          {isEditing && (
            <button
              type="button"
              onClick={() => setConfirmDelete(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 transition-colors hover:bg-red-600 hover:text-white"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </button>
          )}

          <Link
            href={isEditing ? `/blog/${article!.slug}` : '/blog'}
            className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="ml-auto inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {isEditing ? 'Saving…' : 'Publishing…'}
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                {isEditing ? 'Save changes' : 'Publish article'}
              </>
            )}
          </button>
        </div>
      </div>

      {/* --- Sidebar --- */}
      <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
        <div>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
            <Sparkles className="h-4 w-4 text-blue-500" />
            Live preview
          </h3>
          <div className="pointer-events-none select-none">
            <ArticleCard article={previewArticle} />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            How this piece appears on the Articles page and the homepage.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-3 text-sm font-bold text-slate-800">
            {ready ? 'Ready to publish' : 'Before publishing'}
          </h3>
          <ul className="space-y-2.5">
            {checklist.map((item) => (
              <li key={item.label} className="flex items-center gap-2.5 text-sm">
                <span
                  className={cn(
                    'grid h-5 w-5 shrink-0 place-items-center rounded-full transition-colors',
                    item.done ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-300'
                  )}
                >
                  {item.done ? (
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  )}
                </span>
                <span className={item.done ? 'text-slate-700' : 'text-slate-500'}>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <ConfirmDialog
        open={confirmDelete}
        title="Delete this article?"
        body={`“${article?.title ?? ''}” will be permanently removed from the site. This cannot be undone.`}
        confirmLabel="Delete permanently"
        busy={deleting}
        onCancel={() => setConfirmDelete(false)}
        onConfirm={handleDelete}
      />
    </form>
  )
}

function Section({
  icon: Icon,
  title,
  hint,
  children,
}: {
  icon: typeof FileText
  title: string
  hint: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-7">
      <div className="mb-5 flex items-start gap-3.5 border-b border-slate-100 pb-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-sm">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="mt-0.5 text-sm text-slate-500">{hint}</p>
        </div>
      </div>
      <div className="space-y-5">{children}</div>
    </section>
  )
}
