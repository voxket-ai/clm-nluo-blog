'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { useEdit } from '@/components/editable/EditProvider'
import { normalizeText, type TextStyle } from '@/lib/contentKeys'
import FormatToolbar from '@/components/editable/FormatToolbar'

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'div' | 'li' | 'strong' | 'em' | 'label'

interface EditableProps {
  /** Stable slot id, e.g. "home.hero.title". */
  id: string
  /** The default wording. Must be a plain string — it is the fallback. */
  children: string
  as?: Tag
  className?: string
  /** Allows line breaks; Enter commits instead when false. */
  multiline?: boolean
  /** Shown in the editor chrome to say what this slot is. */
  label?: string
}

/**
 * A single piece of editable copy.
 *
 * The DOM is the source of truth while a node is focused: we only read it back
 * on blur. Because the rendered string does not change during typing, React
 * never reconciles the text node out from under the caret.
 */
export default function Editable({
  id,
  children,
  as = 'span',
  className,
  multiline = false,
  label,
}: EditableProps) {
  const edit = useEdit()
  const ref = useRef<HTMLElement>(null)
  const [focused, setFocused] = useState(false)
  const [formatting, setFormatting] = useState(false)
  const [node, setNode] = useState<HTMLElement | null>(null)
  const Tag = as as React.ElementType

  const original = children
  const value = edit ? edit.resolve(id, original) : original
  const active = Boolean(edit?.editMode)
  const isDirty = Boolean(edit?.pending[id])
  const style = edit?.resolveStyle(id)

  const commit = useCallback(() => {
    const node = ref.current
    if (!node || !edit) return

    const next = normalizeText(node.innerText ?? '')

    if (next.trim() === '') {
      // Blank means "put the original wording back" — never leave a hole.
      node.innerText = original
      edit.unstage(id)
      edit.setNotice('Emptied — original wording restored')
      return
    }

    if (next === value) return

    edit.stage({
      key: id,
      type: 'text',
      value: next,
      original,
      page: typeof window !== 'undefined' ? window.location.pathname : '',
    })
  }, [edit, id, original, value])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      if (ref.current) ref.current.innerText = value
      // Close the format bar here too: this handler runs first and blurs the
      // node, so the bar's own Escape listener cannot be relied on.
      setFormatting(false)
      ref.current?.blur()
      return
    }
    if (event.key === 'Enter' && !multiline) {
      event.preventDefault()
      ref.current?.blur()
    }
  }

  // Paste as plain text so styled clipboard content cannot enter the DOM.
  const handlePaste = (event: React.ClipboardEvent<HTMLElement>) => {
    event.preventDefault()
    const text = event.clipboardData.getData('text/plain')
    if (!text) return
    const cleaned = multiline ? text : text.replace(/\s*\n+\s*/g, ' ')
    document.execCommand('insertText', false, cleaned)
  }

  // If the resolved value changes while we are not editing (a save, a discard,
  // a server refresh), push it into the DOM so the node cannot drift.
  useEffect(() => {
    if (focused) return
    const node = ref.current
    if (node && node.innerText !== value) node.innerText = value
  }, [value, focused])

  if (!active) {
    return (
      <Tag className={className} style={style as React.CSSProperties | undefined}>
        {value}
      </Tag>
    )
  }

  return (
    <>
    <Tag
      ref={ref}
      style={style as React.CSSProperties | undefined}
      className={cn(
        className,
        'nluo-editable',
        isDirty && 'nluo-editable-dirty',
        focused && 'nluo-editable-focus'
      )}
      contentEditable
      suppressContentEditableWarning
      spellCheck
      role="textbox"
      tabIndex={0}
      aria-label={label || `Edit ${id}`}
      data-edit-id={id}
      data-edit-label={label || id}
      onFocus={() => {
        setFocused(true)
        setNode(ref.current)
        setFormatting(true)
      }}
      onBlur={() => {
        setFocused(false)
        commit()
      }}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
    >
      {value}
    </Tag>

    {formatting && (
      <FormatToolbar
        target={node}
        style={style}
        label={label || id}
        onChange={(patch: TextStyle) => edit?.restyle(id, patch, original)}
        onReset={() => {
          edit?.restyle(id, {
            fontFamily: '', fontSize: '', fontWeight: '', fontStyle: '',
            textDecoration: '', color: '', textAlign: '', letterSpacing: '', lineHeight: '',
          }, original)
        }}
        onClose={() => setFormatting(false)}
      />
    )}
    </>
  )
}
