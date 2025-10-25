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
    { name: 'CLM Blog', href: '/blog' },
    { name: 'Editorial Blog', href: '/editorial-blog' },
    { name: 'Submissions', href: '/submissions' },
    { name: 'Newsletter', href: '/newsletters' },
    { name: 'Events', href: '/events' }
  ],
  aboutUs: [
    { name: 'About the Blog', href: '/about-the-blog' },
    { name: 'Faculty Advisors', href: '/faculty-advisors' },
    { name: 'Advisory Board', href: '/advisory-board-ccl' },
    { name: 'Message from VC', href: '/message-from-the-vice-chancellor' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Disclaimer', href: '/disclaimer' }
  ]
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/clm-nluo', color: 'hover:text-blue-600' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/clm_nluo', color: 'hover:text-blue-400' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/clm-nluo', color: 'hover:text-blue-700' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/clm_nluo', color: 'hover:text-pink-600' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@clm-nluo', color: 'hover:text-red-600' }
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
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">CLM Blog</h3>
              <p className="text-gray-300 leading-relaxed">
                Your premier destination for corporate law insights, analysis, and commentary. 
                Connecting legal professionals with the latest developments in corporate legal matters.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-blue-400" />
                <a href="mailto:clm@nluo.ac.in" className="hover:text-blue-400 transition-colors">
                  clm@nluo.ac.in
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-blue-400" />
                <span>+91 (123) 456-7890</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-blue-400 mt-1 shrink-0" />
                <span>National Law University Odisha, Cuttack, Odisha, India</span>
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
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center font-medium"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>

            {/* Social Media Links */}
            <div className="mt-6">
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
              © 2025 by Centre for Corporate Law - National Law University Odisha. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}