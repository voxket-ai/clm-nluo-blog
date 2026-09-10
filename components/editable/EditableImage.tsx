'use client'

import { useState } from 'react'
import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEdit } from '@/components/editable/EditProvider'
import ImagePicker from '@/components/editable/ImagePicker'

interface EditableImageProps {
  /** Stable slot id, e.g. "home.hero.photo". */
  id: string
  /** Default image path shipped with the code. */
  src: string
  alt: string
  className?: string
  label?: string
  /** Rendered instead of <img> when the source fails to load. */
  fallback?: React.ReactNode
}

export default function EditableImage({
  id,
  src,
  alt,
  className,
  label,
  fallback,
}: EditableImageProps) {
  const edit = useEdit()
  const [pickerOpen, setPickerOpen] = useState(false)
  const [broken, setBroken] = useState(false)

  const currentSrc = edit ? edit.resolve(id, src) : src
  const currentAlt = edit ? edit.resolveAlt(id, alt) : alt
  const active = Boolean(edit?.editMode)
  const isDirty = Boolean(edit?.pending[id])

  const image = broken && fallback ? (
    <>{fallback}</>
  ) : (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      key={currentSrc}
      src={currentSrc}
      alt={currentAlt}
      className={className}
      onError={() => setBroken(true)}
    />
  )

  if (!active) return image

  return (
    <>
      <span className={cn('nluo-editable-image', isDirty && 'nluo-editable-dirty')}>
        {image}
        <button
          type="button"
          onClick={() => setPickerOpen(true)}
          aria-label={`Replace image: ${label || id}`}
          className="nluo-editable-image-button"
        >
          <ImageIcon className="h-4 w-4" />
          Replace
        </button>
      </span>

      <ImagePicker
        open={pickerOpen}
        currentSrc={currentSrc}
        currentAlt={currentAlt}
        originalSrc={src}
        label={label || id}
        onClose={() => setPickerOpen(false)}
        onApply={(nextSrc, nextAlt) => {
          setBroken(false)
          edit?.stage({
            key: id,
            type: 'image',
            value: nextSrc,
            alt: nextAlt,
            original: src,
            page: typeof window !== 'undefined' ? window.location.pathname : '',
          })
          setPickerOpen(false)
        }}
        onReset={() => {
          setBroken(false)
          edit?.unstage(id)
          edit?.stage({
            key: id,
            type: 'image',
            value: src,
            alt,
            original: src,
            page: typeof window !== 'undefined' ? window.location.pathname : '',
          })
          setPickerOpen(false)
          edit?.setNotice('Image reset to the original')
        }}
      />
    </>
  )
}
