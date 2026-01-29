
'use client'
import React, { useState, useEffect } from 'react'
import { Mail, ArrowRight, Play, Star, Users, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Large gradient orbs */}
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-bounce delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className={cn(
            "space-y-8 text-center lg:text-left transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2" />
              India's Leading Mediation Centre
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Transform
                <span className="block bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Disputes
                </span>
                into Dialogue
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Join NLUO Centre for Mediation and Negotiation in revolutionizing 
                conflict resolution through education, practice, and innovation.
              </p>
            </div>

        

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <span className="relative flex items-center">
                  Explore Programs
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <Play className="mr-2 w-5 h-5" />
                Watch Story
              </button>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mt-8">
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
              </div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className={cn(
            "relative transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {/* Main Image Card */}
            <div className="relative group">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl transform group-hover:scale-110 transition-transform duration-500"></div>
              
              {/* Image container */}
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/photo1.jpeg"
                  alt="NLUO Mediation Centre"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="text-white text-sm">Live Mediation Sessions</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    India's first institional Mediation Forum
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Transforming conflict resolution through innovative practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}