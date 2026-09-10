import 'server-only'
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

marked.setOptions({ gfm: true, breaks: true })

/**
 * Author-supplied markdown -> safe HTML.
 * Everything not on the allow-list is stripped, so a submission can never
 * inject script, style or event handlers into a reader's page.
 */
export function renderArticleHtml(markdown: string) {
  const rawHtml = marked.parse(markdown, { async: false }) as string

  return sanitizeHtml(rawHtml, {
    allowedTags: [
      'h2', 'h3', 'h4', 'p', 'blockquote', 'ul', 'ol', 'li', 'strong', 'em',
      'a', 'code', 'pre', 'hr', 'br', 'img', 'figure', 'figcaption', 'sup', 'sub',
      'table', 'thead', 'tbody', 'tr', 'th', 'td', 'del',
    ],
    allowedAttributes: {
      // target/rel are added by transformTags below; they must be allowed here
      // or sanitize-html strips them straight back off.
      a: ['href', 'title', 'target', 'rel'],
      img: ['src', 'alt', 'title'],
      sup: ['id'],
      li: ['id'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
    allowedSchemesByTag: { img: ['http', 'https', 'data'] },
    transformTags: {
      a: (tagName, attribs) => ({
        tagName,
        attribs: { ...attribs, target: '_blank', rel: 'noopener noreferrer nofollow' },
      }),
      // The article title is the only h1 on the page.
      h1: 'h2',
    },
  })
}

/** First N characters of plain text — used when an author leaves the abstract thin. */
export function plainTextPreview(markdown: string, length = 220) {
  const text = sanitizeHtml(marked.parse(markdown, { async: false }) as string, {
    allowedTags: [],
    allowedAttributes: {},
  })
    .replace(/\s+/g, ' ')
    .trim()
  return text.length > length ? `${text.slice(0, length).trimEnd()}…` : text
}
