'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigationItems = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Articles',
    href: '/blog'
  },
  {
    name: 'Editorial Board',
    href: '/editorial-blog'
  },
  {
    name: 'Submissions',
    href: '/submissions'
  },
  {
    name: 'Events',
    href: '/events'
  },
  {
    name: 'About',
    href: '/about-the-blog',
    submenu: [
      { name: 'About the Chronicle', href: '/about-the-blog' },
      { name: 'About the Centre', href: '/faculty-advisors' },
      { name: 'Advisory Board', href: '/advisory-board-ccl' },
      { name: 'Message from VC', href: '/message-from-the-vice-chancellor' }
    ]
  }
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  return (
    <nav className="sticky top-0 bg-linear-to-r from-slate-100/95 to-blue-50/90 backdrop-blur-md shadow-xl border-b border-slate-200/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg group-hover:bg-blue-500/30 transition-all duration-300"></div>
                <Image
                  src="/logo.png"
                  alt="NLUO Logo"
                  width={56}
                  height={56}
                  className="rounded-full relative z-10 ring-2 ring-blue-100/50 group-hover:ring-blue-200/80 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-xl md:text-2xl font-black bg-linear-to-r from-blue-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent">
                  NLUO Mediation
                </div>
                <div className="text-sm md:text-base font-bold text-slate-600 tracking-wide">
                  Chronicle
                </div>
              </div>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden",
                          "text-slate-700 hover:text-blue-600 hover:bg-white/60 hover:shadow-lg hover:scale-105",
                          "border border-transparent hover:border-blue-100/50"
                        )}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <ChevronDown className={cn(
                          "ml-2 h-4 w-4 transition-all duration-300 relative z-10",
                          activeDropdown === item.name && "rotate-180"
                        )} />
                        <div className="absolute inset-0 bg-linear-to-r from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                      
                      {/* Enhanced Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <div className={cn(
                          "absolute mt-3 w-64 rounded-2xl shadow-2xl bg-white/95 backdrop-blur-md ring-1 ring-slate-200/50 border border-slate-100/50 animate-fade-in-up",
                          item.name === 'About' ? 'right-0' : 'left-0'
                        )}>
                          <div className="py-2">
                            {item.submenu.map((subItem, index) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="group flex items-center px-5 py-3 text-sm font-medium text-slate-700 hover:bg-linear-to-r hover:from-blue-50/80 hover:to-indigo-50/60 hover:text-blue-600 transition-all duration-300 border-l-2 border-transparent hover:border-blue-400 mx-2 rounded-lg"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors duration-300 mr-3"></div>
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="relative px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-white/60 hover:shadow-lg hover:scale-105 transition-all duration-300 border border-transparent hover:border-blue-100/50 overflow-hidden group"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute inset-0 bg-linear-to-r from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative inline-flex items-center justify-center p-3 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-white/60 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-blue-100/50 group"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              {mobileMenuOpen ? (
                <X className="h-6 w-6 relative z-10 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 relative z-10 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-fade-in-up">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-linear-to-b from-slate-100/98 to-blue-50/95 backdrop-blur-md border-t border-slate-200/50">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="group flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-white/60 hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-100/50"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown className={cn(
                        "h-5 w-5 transition-all duration-300 relative z-10",
                        activeDropdown === item.name && "rotate-180 text-blue-600"
                      )} />
                      <div className="absolute inset-0 bg-linear-to-r from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="mt-2 ml-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="group flex items-center px-4 py-3 rounded-lg text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-white/50 hover:shadow-sm transition-all duration-300 border-l-2 border-slate-200 hover:border-blue-400"
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setActiveDropdown(null)
                            }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-blue-500 transition-colors duration-300 mr-3"></div>
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="group relative block px-4 py-3 rounded-xl text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-white/60 hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-100/50 overflow-hidden"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-linear-to-r from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}