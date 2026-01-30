'use client'
import React, { useState, useEffect } from 'react'
import { Mail, ArrowRight, Play, Star, Users, Award, Sparkles, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function HeroSection() {
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const images = [
    '/events/event1.jpeg',
    '/events/event2.jpeg',
    '/events/event3.jpeg',
    '/events/event4.jpeg',
    '/events/event5.jpeg',
    '/events/event6.jpeg',
    '/events/event7.jpeg',
    '/events/event8.jpeg',
    '/events/event9.jpeg',
    '/events/event10.jpeg'
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      {/* Enhanced Animated Background with Parallax */}
      <div className="absolute inset-0">
        {/* Dynamic gradient orbs with parallax */}
        <div 
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-purple-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-purple-600/30 via-pink-500/20 to-orange-500/25 rounded-full blur-3xl animate-pulse"
          style={{
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/20 via-blue-500/15 to-cyan-500/20 rounded-full blur-2xl animate-pulse"
          style={{
            animationDelay: '0.5s',
            transform: `translate(calc(-50% + ${mousePosition.x * 0.01}px), calc(-50% + ${mousePosition.y * 0.01}px))`
          }}
        ></div>
        
        {/* Enhanced floating particles with varied sizes and speeds */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute bg-white rounded-full",
                i % 3 === 0 ? "animate-pulse" : "animate-bounce"
              )}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 1}px`,
                height: `${Math.random() * 6 + 1}px`,
                opacity: Math.random() * 0.5 + 0.1,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Diagonal animated stripes */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[size:60px_60px] animate-[slide_20s_linear_infinite]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Enhanced Content */}
          <div className={cn(
            "space-y-8 text-center lg:text-left transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {/* Enhanced Badge with glow */}
            <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold backdrop-blur-md shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 group">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              <span className="group-hover:scale-105 inline-block transition-transform">India's Leading Mediation Centre</span>
              <TrendingUp className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Enhanced Main Headline with text effects */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.1] tracking-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-300">Transform</span>
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-[gradient_6s_ease_infinite] bg-[length:200%_auto]">
                  Disputes
                </span>
                <span className="inline-block hover:scale-105 transition-transform duration-300">into Dialogue</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl backdrop-blur-sm">
                Join <span className="text-blue-400 font-semibold">NLUO Centre for Mediation and Negotiation</span> in revolutionizing 
                conflict resolution through education, practice, and innovation.
              </p>
            </div>

       

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/events">
                <button
                  type="button"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/70"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent)]"></div>
                  </div>
                  <span className="relative flex items-center justify-center">
                    Explore Programs
                    <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
              </Link>
              
              <Link href="/story">
                <button className="group flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Story
                </button>
              </Link>
            </div>

            {/* Enhanced Newsletter Signup */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 mt-8 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Stay Updated</h3>
                    <p className="text-xs text-gray-400">Get the latest insights & events</p>
                  </div>
                </div>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Image Carousel */}
          <div className={cn(
            "relative transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          )}>
            <div className="relative group">
              {/* Enhanced multi-layer glowing background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-[2rem] blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-[2rem] blur-xl opacity-50"></div>
              
              {/* Image container with enhanced styling */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/30 rounded-[2rem] overflow-hidden shadow-2xl group-hover:shadow-[0_0_80px_rgba(59,130,246,0.5)] transition-all duration-500 transform group-hover:scale-[1.02]">
                {/* Image carousel with zoom effect */}
                <div className="relative w-full h-80 lg:h-[500px] overflow-hidden">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Event ${index + 1}`}
                      className={cn(
                        "absolute inset-0 w-full h-full object-cover transition-all duration-1000",
                        index === currentImageIndex 
                          ? 'opacity-100 scale-105' 
                          : 'opacity-0 scale-100'
                      )}
                    />
                  ))}
                </div>
                
                {/* Enhanced gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
                
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-400/50 rounded-tl-[2rem]"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400/50 rounded-br-[2rem]"></div>
                
                {/* Enhanced content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-300 group-hover:translate-y-0">
                  <div className="flex items-center mb-3 opacity-90">
                    <div className="p-2 bg-blue-500/30 backdrop-blur-sm rounded-lg mr-2">
                      <Users className="w-5 h-5 text-blue-300" />
                    </div>
                    <span className="text-white text-sm font-semibold tracking-wide">Live Mediation Sessions</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                    India's first institutional Mediation Forum
                  </h3>
                  <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                    Transforming conflict resolution through innovative practices
                  </p>
                </div>

                {/* Enhanced image indicators */}
                

                {/* Slide counter */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-white text-sm font-semibold">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </div>
            </div>

      
          </div>
        </div>
      </div>

      {/* Enhanced bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5 shadow-lg">
          <div className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse shadow-lg"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(60px);
          }
        }
      `}</style>
    </section>
  )
}