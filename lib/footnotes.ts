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
 * first appearance, so an author can name them anything.
 */

export interface Footnote {
  /** The author's label, e.g. "1" or "salem". */
  key: string
  /** Display number, assigned by order of first use. */
  number: number
  markdown: string
}

const DEFINITION = /^[ \t]*\[\^([^\]\s]+)\]:[ \t]*(.*)$/gm
const REFERENCE = /\[\^([^\]\s]+)\](?!:)/g

export interface FootnoteResult {
  /** Body markdown with definitions removed and markers replaced. */
  body: string
  footnotes: Footnote[]
}

/** Escapes text destined for an HTML attribute. */
function attr(value: string) {
  return value.replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 60)
}

export function extractFootnotes(markdown: string): FootnoteResult {
  const definitions = new Map<string, string>()

  // Pull the definitions out of the body first.
  const body = markdown.replace(DEFINITION, (_match, key: string, text: string) => {
    const existing = definitions.get(key)
    definitions.set(key, existing ? `${existing} ${text}`.trim() : text.trim())
    return '\u0000FOOTNOTE_DEF\u0000'
  })

  const ordered: Footnote[] = []
  const numbers = new Map<string, number>()

  const withMarkers = body.replace(REFERENCE, (match, key: string) => {
    if (!definitions.has(key)) return match // an undefined marker stays literal

    let number = numbers.get(key)
    if (!number) {
      number = ordered.length + 1
      numbers.set(key, number)
      ordered.push({ key, number, markdown: definitions.get(key) ?? '' })
    }

    const id = attr(key)
    return (
      `<sup class="footnote-ref" id="fnref-${id}">` +
      `<a href="#fn-${id}" aria-label="Go to reference ${number}">${number}</a>` +
      `</sup>`
    )
  })

  return {
    body: withMarkers.replace(/[ \t]*\u0000FOOTNOTE_DEF\u0000[ \t]*\n?/g, ''),
    footnotes: ordered,
  }
}

export function hasFootnotes(markdown: string) {
  return extractFootnotes(markdown).footnotes.length > 0
}
