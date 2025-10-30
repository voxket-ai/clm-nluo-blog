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
    <div className="relative overflow-hidden bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 md:py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-linear-to-tr from-purple-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-linear-to-r from-indigo-300/10 to-blue-400/10 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-indigo-500 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                Welcome to{' '}
                <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  NLUO Mediation Chronicle
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                A platform dedicated to advancing discourse, ideas, and reflections in the field of mediation and negotiation. 
                Promoting accessible and practice-oriented discussions in Alternative Dispute Resolution.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="relative bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-linear-to-r from-blue-50/50 to-indigo-50/50 rounded-lg"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-blue-600 animate-bounce" />
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
                    className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center font-medium transform hover:scale-105"
                  >
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* (Stats removed per request) */}
          </div>

          {/* Right Column - Featured Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-linear-to-r from-blue-400 via-indigo-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black/20 to-transparent"></div>
              </div>
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

            {/* (Quick tiles removed per request) */}
          </div>
        </div>
      </div>
    </div>
  )
}