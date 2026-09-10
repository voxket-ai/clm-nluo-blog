'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronDown, LogIn, LogOut, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Editable from '@/components/editable/Editable'
import EditableImage from '@/components/editable/EditableImage'
import { useEdit } from '@/components/editable/EditProvider'
import { slotId } from '@/lib/contentKeys'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Articles', href: '/blog' },
  { name: 'Editorial Board', href: '/editorial-blog' },
  { name: 'Submissions', href: '/submissions' },
  { name: 'Events', href: '/events' },
  {
    name: 'About',
    href: '/about-the-blog',
    submenu: [
      { name: 'About the Blogs', href: '/about-the-blog' },
      { name: 'About the Centre', href: '/faculty-advisors' },
      { name: 'Advisory Board', href: '/advisory-board-ccl' },
      { name: 'Message from VC', href: '/message-from-the-vice-chancellor' },
    ],
  },
]

export default function Navbar() {
  const edit = useEdit()
  const router = useRouter()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [signingOut, setSigningOut] = useState(false)
  const aboutRef = useRef<HTMLLIElement>(null)

  // Close the About menu on an outside click or Escape.
  useEffect(() => {
    if (!activeDropdown) return
    const onClick = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setActiveDropdown(null)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActiveDropdown(null)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [activeDropdown])

  const isActive = (item: (typeof navigationItems)[number]) => {
    if (item.href === '/') return pathname === '/'
    if (item.submenu) return item.submenu.some((s) => pathname.startsWith(s.href))
    return pathname === item.href || pathname.startsWith(`${item.href}/`)
  }

  const signOut = async () => {
    setSigningOut(true)
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      edit?.setEditMode(false)
      setMobileMenuOpen(false)
      router.refresh()
    } finally {
      setSigningOut(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between gap-6">
          {/* Wordmark */}
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <EditableImage
              id="site.logo"
              src="/logo.png"
              alt="NLUO"
              label="Site logo"
              className="h-11 w-11 rounded-full object-cover ring-1 ring-slate-200 transition-shadow duration-300 group-hover:ring-blue-200"
            />
            <span className="flex flex-col leading-none">
              <Editable
                id="cmp.navbar.nluo-mediation"
                as="span"
                label="Site name"
                className="text-[17px] font-semibold tracking-tight text-slate-900"
              >
                NLUO Mediation
              </Editable>
              <Editable
                id="cmp.navbar.blogs"
                as="span"
                label="Site name (second line)"
                className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-blue-600"
              >
                Blogs
              </Editable>
            </span>
          </Link>

          {/* Primary navigation */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigationItems.map((item) => {
                const active = isActive(item)
                return (
                  <li key={item.name} className="relative" ref={item.submenu ? aboutRef : undefined}>
                    {item.submenu ? (
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === item.name ? null : item.name)
                        }
                        aria-expanded={activeDropdown === item.name}
                        className={cn(
                          'flex items-center gap-1 rounded-lg px-3 py-2 text-[14px] font-medium transition-colors duration-200',
                          active || activeDropdown === item.name
                            ? 'text-blue-600'
                            : 'text-slate-600 hover:text-slate-900'
                        )}
                      >
                        <Editable id={slotId('nav', item.name)} as="span" label="Menu label">
                          {item.name}
                        </Editable>
                        <ChevronDown
                          className={cn(
                            'h-3.5 w-3.5 transition-transform duration-200',
                            activeDropdown === item.name && 'rotate-180'
                          )}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          'relative block rounded-lg px-3 py-2 text-[14px] font-medium transition-colors duration-200',
                          active ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                        )}
                      >
                        <Editable id={slotId('nav', item.name)} as="span" label="Menu label">
                          {item.name}
                        </Editable>
                        {active && (
                          <span className="absolute inset-x-3 -bottom-[3px] h-0.5 rounded-full bg-blue-600" />
                        )}
                      </Link>
                    )}

                    {item.submenu && activeDropdown === item.name && (
                      <div className="absolute right-0 mt-2 w-60 origin-top-right animate-fade-in-up overflow-hidden rounded-xl border border-slate-200 bg-white py-1.5 shadow-lg shadow-slate-900/5">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setActiveDropdown(null)}
                            className={cn(
                              'block px-4 py-2.5 text-sm transition-colors',
                              pathname.startsWith(subItem.href)
                                ? 'bg-blue-50/70 font-medium text-blue-700'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            )}
                          >
                            <Editable id={slotId('nav.sub', subItem.name)} as="span" label="Submenu label">
                              {subItem.name}
                            </Editable>
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Account */}
          <div className="hidden shrink-0 lg:block">
            {edit?.isAdmin ? (
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 py-1 pl-3 pr-1">
                <span className="text-[13px] font-medium text-slate-500">Signed in</span>
                <button
                  type="button"
                  onClick={signOut}
                  disabled={signingOut}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-medium text-slate-600 ring-1 ring-slate-200 transition-colors hover:text-red-600 hover:ring-red-200 disabled:opacity-50"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  {signingOut ? 'Signing out…' : 'Sign out'}
                </button>
              </div>
            ) : (
              <Link
                href="/admin/login"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-400 transition-colors hover:text-slate-700"
              >
                <LogIn className="h-3.5 w-3.5" />
                Administrator
              </Link>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="animate-fade-in-up border-t border-slate-200 bg-white lg:hidden">
          <div className="space-y-0.5 px-4 py-3">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      }
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-700 transition-colors hover:bg-slate-50"
                    >
                      <Editable id={slotId('nav', item.name)} as="span" label="Menu label">
                        {item.name}
                      </Editable>
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 text-slate-400 transition-transform',
                          activeDropdown === item.name && 'rotate-180'
                        )}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="ml-3 border-l border-slate-200 pl-3">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setActiveDropdown(null)
                            }}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:text-blue-600"
                          >
                            <Editable id={slotId('nav.sub', subItem.name)} as="span" label="Submenu label">
                              {subItem.name}
                            </Editable>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'block rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors',
                      isActive(item) ? 'text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                    )}
                  >
                    <Editable id={slotId('nav', item.name)} as="span" label="Menu label">
                      {item.name}
                    </Editable>
                  </Link>
                )}
              </div>
            ))}

            <div className="mt-2 border-t border-slate-200 pt-2">
              {edit?.isAdmin ? (
                <button
                  type="button"
                  onClick={signOut}
                  disabled={signingOut}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-[15px] font-medium text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50"
                >
                  <LogOut className="h-4 w-4" />
                  {signingOut ? 'Signing out…' : 'Sign out'}
                </button>
              ) : (
                <Link
                  href="/admin/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-500 transition-colors hover:bg-slate-50"
                >
                  <LogIn className="h-4 w-4" />
                  Administrator
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
