import { Suspense } from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import LoginForm from '@/components/ui/LoginForm'
import { isAdminConfigured } from '@/lib/adminAuth'
import { ArrowLeft, KeyRound, TriangleAlert } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admin sign in | NLUO Mediation Blogs',
  robots: { index: false, follow: false },
}

export default function AdminLoginPage() {
  const configured = isAdminConfigured()

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-12">
      {/* Atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-40 right-1/3 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="relative w-full max-w-md">
        <div className="mb-8 text-center">
          <Image
            src="/logo.png"
            alt="NLUO"
            width={64}
            height={64}
            className="mx-auto mb-5 rounded-full ring-2 ring-white/10"
          />
          <h1 className="text-2xl font-bold text-white">Editorial Console</h1>
          <p className="mt-1.5 text-sm text-slate-400">NLUO Mediation Blogs</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl">
          {configured ? (
            <Suspense fallback={<div className="h-80" />}>
              <LoginForm />
            </Suspense>
          ) : (
            <div className="space-y-4 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-amber-500/15 text-amber-300">
                <TriangleAlert className="h-6 w-6" />
              </span>
              <h2 className="text-lg font-bold text-white">Admin access is not set up</h2>
              <p className="text-sm leading-relaxed text-slate-400">
                Add <code className="rounded bg-white/10 px-1.5 py-0.5 text-blue-300">ADMIN_USERNAME</code> and{' '}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-blue-300">ADMIN_PASSWORD</code> to your{' '}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-blue-300">.env.local</code>, then restart the
                server.
              </p>
              <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
                <KeyRound className="h-3.5 w-3.5" />
                See .env.example for the full list
              </p>
            </div>
          )}
        </div>

        <Link
          href="/"
          className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to the blog
        </Link>
      </div>
    </div>
  )
}
