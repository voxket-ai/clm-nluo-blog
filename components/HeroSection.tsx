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
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-linear-to-tr from-slate-300/15 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-linear-to-r from-indigo-300/10 to-blue-400/10 rounded-full blur-2xl animate-bounce delay-500"></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-linear-to-r from-sky-200/20 to-blue-300/25 rounded-full blur-xl animate-float delay-200"></div>
        <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-linear-to-r from-indigo-200/20 to-slate-300/20 rounded-full blur-lg animate-float delay-700"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-20 w-16 h-16 bg-linear-to-br from-blue-300/30 to-transparent border border-blue-200/40 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-16 w-12 h-12 bg-linear-to-tr from-slate-200/30 to-blue-200/40 transform rotate-12 animate-pulse delay-1500"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-indigo-500 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-sky-400 rounded-full animate-bounce delay-900"></div>
        <div className="absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-1200"></div>
        <div className="absolute top-1/4 left-3/4 w-0.5 h-0.5 bg-blue-300 rounded-full animate-bounce delay-400"></div>
        <div className="absolute bottom-1/2 left-16 w-1 h-1 bg-slate-500 rounded-full animate-bounce delay-800"></div>
      </div>

      {/* Animated lines/paths */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-200/40 to-transparent animate-shimmer"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200/30 to-transparent animate-shimmer delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="relative">
              {/* Decorative elements around title */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-blue-200/60 rounded-full animate-ping delay-500"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-linear-to-r from-slate-300/40 to-blue-300/50 rounded-full animate-pulse delay-1000"></div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up relative z-10">
                Welcome to{' '}
                <span className="relative inline-block">
                  <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-slate-700 bg-clip-text text-transparent animate-pulse">
                    NLUO Mediation Chronicle
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-blue-300/60 via-indigo-300/60 to-slate-300/60 rounded-full transform scale-x-0 animate-expand-line delay-1500"></div>
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed animate-fade-in-up delay-300">
                A platform dedicated to advancing discourse, ideas, and reflections in the field of mediation and negotiation. 
                Promoting accessible and practice-oriented discussions in Alternative Dispute Resolution.
              </p>
            </div>

            {/* Enhanced Newsletter Signup */}
            <div className="relative bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
              {/* Animated background layers */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-50/50 via-slate-50/30 to-indigo-50/50 rounded-lg transition-all duration-500 group-hover:from-blue-100/60 group-hover:to-indigo-100/60"></div>
              <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-linear-to-r from-blue-200/20 via-slate-200/15 to-indigo-200/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating accent elements */}
              <div className="absolute top-2 right-2 w-3 h-3 bg-blue-300/40 rounded-full animate-pulse delay-500"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-slate-300/40 rounded-full animate-bounce delay-700"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="relative mr-2">
                    <Mail className="h-5 w-5 text-blue-600 animate-bounce" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
                  </div>
                  Stay Updated with Our Newsletter
                </h3>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:shadow-lg"
                      required
                    />
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-blue-300/0 via-blue-400/80 to-blue-300/0 transform scale-x-0 transition-transform duration-300 focus-within:scale-x-100"></div>
                  </div>
                  <button
                    type="submit"
                    className="relative px-6 py-3 bg-linear-to-r from-blue-600 via-indigo-600 to-slate-600 text-white rounded-md hover:from-blue-700 hover:via-indigo-700 hover:to-slate-700 transition-all duration-300 flex items-center justify-center font-medium transform hover:scale-105 hover:shadow-lg overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative">Subscribe</span>
                    <ArrowRight className="ml-2 h-4 w-4 relative transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </div>

            {/* (Stats removed per request) */}
          </div>

          {/* Right Column - Enhanced Featured Content */}
          <div className="space-y-6 animate-fade-in-up delay-700">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group relative">
              {/* Enhanced header with animated elements */}
              <div className="h-48 bg-linear-to-r from-blue-400 via-indigo-500 to-slate-500 relative overflow-hidden">
                {/* Multiple animated layers */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/15 to-transparent animate-shimmer"></div>
                <div className="absolute inset-0 bg-linear-to-br from-blue-300/20 via-transparent to-slate-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black/25 to-transparent"></div>
                
                {/* Floating geometric elements */}
                <div className="absolute top-4 right-4 w-4 h-4 border-2 border-white/40 rounded-full animate-spin-slow"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-white/30 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white/20 rotate-45 animate-pulse delay-500"></div>
              </div>
              
              <div className="p-6 relative">
                {/* Background accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-400/60 via-indigo-400/60 to-slate-400/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>
                
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="relative">
                    Featured Article
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  </span>
                  <span className="mx-2 text-slate-400">•</span>
                  <span>5 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  The Mediation Act 2023: Transforming Dispute Resolution
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Explore how India's new Mediation Act is revolutionizing alternative dispute resolution mechanisms.
                </p>
                <button className="relative text-blue-600 hover:text-blue-700 font-medium flex items-center group-hover:translate-x-1 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">Read More</span>
                  <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </button>
              </div>
            </div>

            {/* Additional animated decorative element */}
            <div className="relative">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-linear-to-br from-blue-200/40 to-slate-200/40 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-2 border-indigo-200/50 rounded-full animate-bounce delay-1500"></div>
            </div>

            {/* (Quick tiles removed per request) */}
          </div>
        </div>
      </div>
    </div>
  )
}