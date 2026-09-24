import 'server-only'
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'
import { extractFootnotes } from '@/lib/footnotes'

marked.setOptions({ gfm: true, breaks: true })

/**
 * Author-supplied markdown -> safe HTML.
 * Everything not on the allow-list is stripped, so a submission can never
 * inject script, style or event handlers into a reader's page.
 */
export function renderArticleHtml(markdown: string) {
  const { body, footnotes } = extractFootnotes(markdown)

  let rawHtml = marked.parse(body, { async: false }) as string

  // Render the citations as a numbered list that each marker jumps to, with a
  // link back to the sentence that cited it.
  if (footnotes.length) {
    const items = footnotes
      .map((note) => {
        const id = note.key.replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 60)
        const text = (marked.parseInline(note.markdown, { async: false }) as string) || ''
        return (
          `<li id="fn-${id}">${text} ` +
          `<a href="#fnref-${id}" class="footnote-back" aria-label="Back to citation ${note.number}">&#8617;</a></li>`
        )
      })
      .join('')

    rawHtml += `<section class="footnotes"><h2 id="references">References</h2><ol>${items}</ol></section>`
  }

  return sanitizeHtml(rawHtml, {
    allowedTags: [
      'h2', 'h3', 'h4', 'p', 'blockquote', 'ul', 'ol', 'li', 'strong', 'em',
      'a', 'code', 'pre', 'hr', 'br', 'img', 'figure', 'figcaption', 'sup', 'sub',
      'table', 'thead', 'tbody', 'tr', 'th', 'td', 'del', 'section',
    ],
    allowedAttributes: {
      // target/rel are added by transformTags below; they must be allowed here
      // or sanitize-html strips them straight back off.
      a: ['href', 'title', 'target', 'rel', 'class', 'aria-label'],
      img: ['src', 'alt', 'title'],
      sup: ['id', 'class'],
      li: ['id'],
      section: ['class'],
      h2: ['id'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
    allowedSchemesByTag: { img: ['http', 'https', 'data'] },
    transformTags: {
      a: (tagName, attribs) => {
        // Footnote links point within the page; sending them to a new tab
        // would defeat the jump-to-reference behaviour.
        if ((attribs.href || '').startsWith('#')) return { tagName, attribs }
        return {
          tagName,
          attribs: { ...attribs, target: '_blank', rel: 'noopener noreferrer nofollow' },
        }
      },
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
