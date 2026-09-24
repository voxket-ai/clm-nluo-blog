/**
 * Footnote / citation support for author-written markdown.
 *
 * Authors write a marker where the claim sits and the source at the foot:
 *
 *   Mediation settlements are enforceable.[^1]
 *
 *   [^1]: Salem Advocate Bar Assn. v Union of India, (2005) 6 SCC 344.
 *
 * The marker becomes a superscript link to a generated References list, and
 * each reference links back to where it was cited. Markers are numbered by
 * first appearance, so an author can label them anything.
 */

export interface Footnote {
  /** The author's label, e.g. "1" or "salem". */
  key: string
  /** Display number, assigned by order of first use. */
  number: number
  markdown: string
}

export interface FootnoteResult {
  /** Body markdown with cited definitions removed and markers replaced. */
  body: string
  footnotes: Footnote[]
}

/**
 * A definition line plus any indented continuation lines, so a citation can
 * run across several lines without leaving stray text in the body.
 */
const DEFINITION = /^[ \t]*\[\^([^\]\s]+)\]:[ \t]*([^\n]*(?:\n[ \t]+[^\n]*)*)/gm
const REFERENCE = /\[\^([^\]\s]+)\](?!:)/g

/** Fenced blocks and inline spans, so code is never mistaken for a citation. */
const CODE = /(```[\s\S]*?```|~~~[\s\S]*?~~~|`[^`\n]*`)/g
const PLACEHOLDER = '\u0000CODE'

function maskCode(markdown: string) {
  const blocks: string[] = []
  const masked = markdown.replace(CODE, (match) => {
    blocks.push(match)
    return `${PLACEHOLDER}${blocks.length - 1}\u0000`
  })
  return { masked, blocks }
}

function unmaskCode(markdown: string, blocks: string[]) {
  return markdown.replace(
    new RegExp(`${PLACEHOLDER}(\\d+)\\u0000`, 'g'),
    (_m, i: string) => blocks[Number(i)] ?? ''
  )
}

export function extractFootnotes(markdown: string): FootnoteResult {
  const { masked, blocks } = maskCode(markdown)

  // 1. Collect definitions without removing them yet: a definition nobody
  //    cites is left in place rather than silently deleted.
  const definitions = new Map<string, string>()
  for (const match of masked.matchAll(DEFINITION)) {
    const key = match[1]
    const text = (match[2] ?? '').replace(/\s*\n[ \t]+/g, ' ').trim()
    const existing = definitions.get(key)
    definitions.set(key, existing ? `${existing} ${text}`.trim() : text)
  }

  // 2. Replace the markers, numbering by first use.
  const ordered: Footnote[] = []
  const numbers = new Map<string, number>()

  const withMarkers = masked.replace(REFERENCE, (match, key: string) => {
    if (!definitions.has(key)) return match // an undefined marker stays literal

    let number = numbers.get(key)
    if (!number) {
      number = ordered.length + 1
      numbers.set(key, number)
      ordered.push({ key, number, markdown: definitions.get(key) ?? '' })
    }

    // Ids come from the assigned number, never the author's label: two labels
    // could otherwise sanitise to the same id and cross-link.
    return (
      `<sup class="footnote-ref" id="fnref-${number}">` +
      `<a href="#fn-${number}" aria-label="Go to reference ${number}">${number}</a>` +
      `</sup>`
    )
  })

  // 3. Remove only the definitions that were actually cited.
  const body = withMarkers.replace(DEFINITION, (match, key: string) =>
    numbers.has(key) ? '' : match
  )

  return {
    body: unmaskCode(body, blocks).replace(/\n{3,}/g, '\n\n'),
    footnotes: ordered,
  }
}

export function hasFootnotes(markdown: string) {
  return extractFootnotes(markdown).footnotes.length > 0
}
