'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Palette,
  RotateCcw,
  Type,
  Underline,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  TEXT_COLORS,
  type TextStyle,
} from '@/lib/contentKeys'

interface FormatToolbarProps {
  /** The element being formatted; the bar anchors itself above it. */
  target: HTMLElement | null
  style: TextStyle | undefined
  label: string
  onChange: (patch: TextStyle) => void
  onReset: () => void
  onClose: () => void
}

/**
 * Floating formatting bar for a single editable slot.
 *
 * It is deliberately slot-level rather than selection-level: an admin styles
 * "this heading", not "these three words", which keeps what is stored simple
 * and reversible.
 */
export default function FormatToolbar({
  target,
  style,
  label,
  onChange,
  onReset,
  onClose,
}: FormatToolbarProps) {
  const barRef = useRef<HTMLDivElement>(null)
  const [colorOpen, setColorOpen] = useState(false)

  // Keep the bar pinned above the slot through scroll and resize.
  // Written straight to the node rather than held in state: this runs on every
  // scroll frame, and a re-render per frame would be wasteful.
  useLayoutEffect(() => {
    const bar = barRef.current
    if (!target || !bar) return

    const place = () => {
      const r = target.getBoundingClientRect()
      const gap = 10
      // Flip below when there is no room above.
      const top = r.top - bar.offsetHeight - gap < 8 ? r.bottom + gap : r.top - bar.offsetHeight - gap
      const left = Math.min(Math.max(8, r.left), window.innerWidth - bar.offsetWidth - 8)
      bar.style.top = `${top}px`
      bar.style.left = `${left}px`
      bar.style.visibility = 'visible'
    }

    place()
    window.addEventListener('scroll', place, true)
    window.addEventListener('resize', place)
    return () => {
      window.removeEventListener('scroll', place, true)
      window.removeEventListener('resize', place)
    }
  }, [target])

  useEffect(() => {
    if (!target) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [target, onClose])

  // Clicking away closes, but clicks inside the bar or the slot must not.
  useEffect(() => {
    if (!target) return
    const onDown = (e: MouseEvent) => {
      const n = e.target as Node
      if (barRef.current?.contains(n)) return
      if (target.contains(n)) return
      onClose()
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [target, onClose])

  if (!target) return null

  const s = style ?? {}
  const toggle = (key: keyof TextStyle, on: string, off = '') =>
    onChange({ [key]: s[key] === on ? off : on } as TextStyle)

  return (
    <div
      ref={barRef}
      role="toolbar"
      aria-label={`Formatting for ${label}`}
      style={{ top: 0, left: 0, visibility: 'hidden' }}
      className="fixed z-[95] flex flex-wrap items-center gap-1 rounded-xl border border-slate-200 bg-white px-2 py-1.5 shadow-xl shadow-slate-900/10"
      // No preventDefault here: it would stop native <select> dropdowns from
      // opening at all. Formatting applies to the whole slot, so there is no
      // caret or selection that needs preserving.
    >
      {/* Font family */}
      <select
        aria-label="Font"
        value={s.fontFamily ?? ''}
        onChange={(e) => onChange({ fontFamily: e.target.value })}
        className="h-8 max-w-[132px] rounded-lg border border-slate-200 bg-white px-2 text-xs text-slate-700 outline-none hover:border-slate-300 focus:border-blue-500"
      >
        {FONT_FAMILIES.map((f) => (
          <option key={f.label} value={f.value}>
            {f.label}
          </option>
        ))}
      </select>

      {/* Size */}
      <select
        aria-label="Font size"
        value={s.fontSize ?? ''}
        onChange={(e) => onChange({ fontSize: e.target.value })}
        className="h-8 w-[74px] rounded-lg border border-slate-200 bg-white px-2 text-xs text-slate-700 outline-none hover:border-slate-300 focus:border-blue-500"
      >
        {FONT_SIZES.map((size) => (
          <option key={size || 'auto'} value={size}>
            {size || 'Size'}
          </option>
        ))}
      </select>

      {/* Weight */}
      <select
        aria-label="Font weight"
        value={s.fontWeight ?? ''}
        onChange={(e) => onChange({ fontWeight: e.target.value })}
        className="h-8 w-[92px] rounded-lg border border-slate-200 bg-white px-2 text-xs text-slate-700 outline-none hover:border-slate-300 focus:border-blue-500"
      >
        {FONT_WEIGHTS.map((w) => (
          <option key={w.label} value={w.value}>
            {w.label}
          </option>
        ))}
      </select>

      <Divider />

      <IconToggle label="Bold" active={s.fontWeight === '700'} onClick={() => toggle('fontWeight', '700')}>
        <Bold className="h-4 w-4" />
      </IconToggle>
      <IconToggle label="Italic" active={s.fontStyle === 'italic'} onClick={() => toggle('fontStyle', 'italic', 'normal')}>
        <Italic className="h-4 w-4" />
      </IconToggle>
      <IconToggle
        label="Underline"
        active={s.textDecoration === 'underline'}
        onClick={() => toggle('textDecoration', 'underline', 'none')}
      >
        <Underline className="h-4 w-4" />
      </IconToggle>

      <Divider />

      {([
        ['left', AlignLeft],
        ['center', AlignCenter],
        ['right', AlignRight],
        ['justify', AlignJustify],
      ] as const).map(([value, Icon]) => (
        <IconToggle
          key={value}
          label={`Align ${value}`}
          active={s.textAlign === value}
          onClick={() => toggle('textAlign', value)}
        >
          <Icon className="h-4 w-4" />
        </IconToggle>
      ))}

      <Divider />

      {/* Colour */}
      <div className="relative">
        <button
          type="button"
          aria-label="Text colour"
          title="Text colour"
          onClick={() => setColorOpen((v) => !v)}
          className={cn(
            'flex h-8 items-center gap-1 rounded-lg px-2 text-slate-600 transition-colors hover:bg-slate-100',
            colorOpen && 'bg-slate-100'
          )}
        >
          <Palette className="h-4 w-4" />
          <span
            className="h-3.5 w-3.5 rounded-full ring-1 ring-slate-300"
            style={{ background: s.color || 'transparent' }}
          />
        </button>

        {colorOpen && (
          <div className="absolute left-0 top-10 w-[184px] rounded-xl border border-slate-200 bg-white p-2.5 shadow-xl">
            <div className="grid grid-cols-7 gap-1.5">
              {TEXT_COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-label={`Colour ${c}`}
                  onClick={() => {
                    onChange({ color: c })
                    setColorOpen(false)
                  }}
                  style={{ background: c }}
                  className={cn(
                    'h-5 w-5 rounded-full ring-1 transition-transform hover:scale-110',
                    s.color === c ? 'ring-2 ring-blue-500' : 'ring-slate-300'
                  )}
                />
              ))}
            </div>
            <div className="mt-2 flex items-center gap-2 border-t border-slate-100 pt-2">
              <input
                type="color"
                aria-label="Custom colour"
                value={s.color || '#334155'}
                onChange={(e) => onChange({ color: e.target.value })}
                className="h-7 w-9 cursor-pointer rounded border border-slate-200 bg-white"
              />
              <button
                type="button"
                onClick={() => {
                  onChange({ color: '' })
                  setColorOpen(false)
                }}
                className="text-xs font-medium text-slate-500 hover:text-slate-800"
              >
                Use theme colour
              </button>
            </div>
          </div>
        )}
      </div>

      <Divider />

      <button
        type="button"
        onClick={onReset}
        title="Clear formatting"
        aria-label="Clear formatting"
        className="flex h-8 items-center gap-1.5 rounded-lg px-2 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        Clear
      </button>

      <span className="ml-1 hidden max-w-[120px] truncate border-l border-slate-200 pl-2 text-[11px] text-slate-400 xl:inline">
        <Type className="mr-1 inline h-3 w-3" />
        {label}
      </span>
    </div>
  )
}

function Divider() {
  return <span className="mx-0.5 h-5 w-px bg-slate-200" />
}

function IconToggle({
  label,
  active,
  onClick,
  children,
}: {
  label: string
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        'grid h-8 w-8 place-items-center rounded-lg transition-colors',
        active ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
      )}
    >
      {children}
    </button>
  )
}
