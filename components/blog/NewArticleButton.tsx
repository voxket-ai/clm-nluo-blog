'use client'

import Link from 'next/link'
import { Plus } from 'lucide-react'
import { useEdit } from '@/components/editable/EditProvider'

/** "New article" call to action — only rendered for a signed-in administrator. */
export default function NewArticleButton({ label = 'New article' }: { label?: string }) {
  const edit = useEdit()
  if (!edit?.isAdmin) return null

  return (
    <Link
      href="/blog/new"
      className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-sm transition-all hover:scale-105 hover:brightness-110"
    >
      <Plus className="h-4 w-4 transition-transform group-hover:rotate-90" />
      {label}
    </Link>
  )
}
