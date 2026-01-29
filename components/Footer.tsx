'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Mail, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  MapPin,
  Phone
} from 'lucide-react'

const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'NLUO Mediation Chronicle', href: '/blog' },
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
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <footer className="bg-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">NLUO Mediation Chronicle</h3>
              <p className="text-gray-300 leading-relaxed">
                A platform dedicated to advancing discourse, ideas, and reflections in the field of mediation and negotiation. 
                An initiative of the Centre for Mediation and Negotiation at NLUO.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-blue-400" />
                <a href="mailto:cmn@nluo.ac.in" className="hover:text-blue-400 transition-colors">
                  cmn@nluo.ac.in
                </a>
              </div>
             
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-blue-400 mt-1 shrink-0" />
                <span>National Law University Odisha, Sector-13, CDA, Cuttack, Odisha - 753014</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6">About Us</h4>
            <ul className="space-y-3">
              {footerLinks.aboutUs.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 block cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
          

            {/* Social Media Links */}
            <div className="">
              <h5 className="text-sm font-semibold mb-3 text-gray-400">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.color} transition-colors duration-200`}
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 by NLUO Centre for Mediation and Negotiation - National Law University Odisha. All rights reserved.
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  )
}