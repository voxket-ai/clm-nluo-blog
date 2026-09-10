'use client'

import Link from 'next/link'
import Editable from '@/components/editable/Editable'
import { Linkedin, Instagram, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'NLUO Mediation Blogs', href: '/blog' },
    { name: 'Submissions', href: '/submissions' },
    { name: 'Events', href: '/events' }
  ],
  aboutUs: [
    { name: 'About the Blog', href: '/about-the-blog' },
    { name: 'Faculty Advisors', href: '/faculty-advisors' },
    { name: 'Advisory Board', href: '/advisory-board-ccl' },
    { name: 'Message from VC', href: '/message-from-the-vice-chancellor' }
  ],
}

const socialLinks = [

  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/nluo-cmn-57911a248/', color: 'hover:text-blue-700' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/nluo_cmn', color: 'hover:text-pink-600' },
]

export default function Footer() {

  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Brand column is wider than the link columns so the paragraph is not
            squeezed into a narrow ribbon of text. */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Editable
              id="footer.brand.title"
              as="h3"
              label="Footer brand title"
              className="text-lg font-semibold tracking-tight text-white"
            >
              NLUO Mediation Blogs
            </Editable>
            <Editable
              id="footer.brand.body"
              as="p"
              multiline
              label="Footer description"
              className="mt-3 max-w-md text-sm leading-relaxed text-slate-400"
            >
              A platform dedicated to advancing discourse, ideas, and reflections in the field of mediation and
              negotiation. An initiative of the Centre for Mediation and Negotiation at NLUO.
            </Editable>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href="mailto:cmn@nluo.ac.in"
                className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-blue-400" />
                <Editable id="cmp.footer.cmn-nluo-ac-in" as="span">cmn@nluo.ac.in</Editable>
              </a>
              <p className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                <span>
                  <Editable id="cmp.footer.national-law-university-odisha-sector-13-cda-cut" as="span">
                    National Law University Odisha, Sector-13, CDA, Cuttack, Odisha - 753014
                  </Editable>
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              <Editable id="cmp.footer.quick-links" as="span">Quick Links</Editable>
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              <Editable id="cmp.footer.about-us" as="span">About Us</Editable>
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.aboutUs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              <Editable id="cmp.footer.follow-us" as="span">Follow Us</Editable>
            </h4>
            <div className="mt-4 flex gap-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="grid h-9 w-9 place-items-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-slate-500 hover:text-white"
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            © 2025 by NLUO Centre for Mediation and Negotiation — National Law University Odisha. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
