'use client'

import { useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <div className="relative bg-linear-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to{' '}
                <span className="text-blue-600">NLUO Mediation Chronicle</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                A platform dedicated to advancing discourse, ideas, and reflections in the field of mediation and negotiation. 
                Promoting accessible and practice-oriented discussions in Alternative Dispute Resolution.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-600" />
                Stay Updated with Our Newsletter
              </h3>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center font-medium"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-600 mt-1">Articles Published</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">5K+</div>
                <div className="text-sm text-gray-600 mt-1">ADR Practitioners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600 mt-1">Expert Mediators</div>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-linear-to-r from-blue-400 to-indigo-500"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>Featured Article</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  The Mediation Act 2023: Transforming Dispute Resolution
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore how India's new Mediation Act is revolutionizing alternative dispute resolution mechanisms.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
                <h4 className="font-semibold text-gray-900 mb-2">CMN Events</h4>
                <p className="text-sm text-gray-600">Join our mediation workshops and training programs</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
                <h4 className="font-semibold text-gray-900 mb-2">Expert Insights</h4>
                <p className="text-sm text-gray-600">Read analysis from leading mediation practitioners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}