'use client'

import { Clock, User, ArrowRight, Star, Bookmark, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// Sample blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Recognition and Enforcement of Mediated Settlement Agreements in India",
    excerpt: "Exploring the legal framework for enforcing mediated settlements under the new Mediation Act 2023 and its implications for dispute resolution practice.",
    author: "NLUO CMN",
    date: "Oct 25, 2025",
    readTime: "6 min read",
    category: "Mediation Law",
    imageUrl: "/images/photo6.jpeg",
    featured: true,
    trending: true
  },
  {
    id: 2,
    title: "Emerging Trends in Online Dispute Resolution (ODR)",
    excerpt: "How digital platforms are transforming mediation and negotiation processes, making dispute resolution more accessible and efficient.",
    author: "NLUO CMN",
    date: "Oct 22, 2025",
    readTime: "4 min read",
    category: "ODR",
    imageUrl: "/images/photo7.jpeg",
    featured: false,
    trending: false
  },
  {
    id: 3,
    title: "Mediation in Family and Matrimonial Disputes",
    excerpt: "An analysis of how mediation is being successfully implemented in family courts across India for resolving matrimonial and custody disputes.",
    author: "NLUO CMN",
    date: "Oct 20, 2025",
    readTime: "5 min read",
    category: "Family Mediation",
    imageUrl: "/images/photo8.jpeg",
    featured: false,
    trending: false
  },
  {
    id: 4,
    title: "Cross-Border Commercial Mediation: International Best Practices",
    excerpt: "Comparative analysis of mediation practices across jurisdictions and their application in international commercial dispute resolution.",
    author: "NLUO CMN",
    date: "Oct 18, 2025",
    readTime: "7 min read",
    category: "Commercial Mediation",
    imageUrl: "/images/photo2.jpeg",
    featured: false,
    trending: true
  },
  {
    id: 5,
    title: "Technology-Driven Negotiation and AI in Mediation",
    excerpt: "Exploring how artificial intelligence and technology are reshaping negotiation strategies and mediation processes in the digital age.",
    author: "NLUO CMN",
    date: "Oct 15, 2025",
    readTime: "5 min read",
    category: "Tech & Mediation",
    imageUrl: "/images/photo3.jpeg",
    featured: false,
    trending: false
  },
  {
    id: 6,
    title: "Community-Based Mediation for Rural and Tribal Populations",
    excerpt: "How traditional mediation practices can be integrated with modern ADR mechanisms to serve rural and tribal communities effectively.",
    author: "NLUO CMN",
    date: "Oct 12, 2025",
    readTime: "6 min read",
    category: "Community Mediation",
    imageUrl: "/images/photo4.jpeg",
    featured: false,
    trending: false
  }
]

const categoryColors = {
  "Mediation Law": "bg-blue-500",
  "ODR": "bg-purple-500", 
  "Family Mediation": "bg-green-500",
  "Commercial Mediation": "bg-orange-500",
  "Tech & Mediation": "bg-pink-500",
  "Community Mediation": "bg-teal-500"
}

interface BlogCardProps {
  post: typeof blogPosts[0]
  featured?: boolean
}

function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article className={cn(
      "group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200",
      "transform hover:-translate-y-2 hover:scale-[1.02]",
      featured && "md:col-span-2 lg:col-span-2"
    )}>
      {/* Image Section */}
      <div className={cn(
        "relative overflow-hidden",
        featured ? "h-64 md:h-80" : "h-56"
      )}>
        {/* Background image */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-90"></div>
        
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/30 to-purple-900/30 group-hover:opacity-80 transition-opacity duration-500"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={cn(
            "px-3 py-1 rounded-full text-xs font-semibold text-white",
            categoryColors[post.category as keyof typeof categoryColors] || "bg-gray-500"
          )}>
            {post.category}
          </span>
          {post.featured && (
            <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-semibold flex items-center">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </span>
          )}
          {post.trending && (
            <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-semibold">
              Trending
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <Bookmark className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center text-sm text-white/80 mb-2">
            <User className="w-4 h-4 mr-2" />
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Clock className="w-4 h-4 mr-2 text-blue-500" />
          <span>{post.readTime}</span>
        </div>
        
        <h3 className={cn(
          "font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2",
          featured ? "text-xl md:text-2xl" : "text-lg"
        )}>
          <Link href={`/blog/${post.id}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <Link
            href={`/blog/${post.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group/link"
          >
            Read More
            <ArrowRight className="ml-1 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <div className="flex items-center text-gray-400">
            <span className="text-sm">5 min read</span>
          </div>
        </div>
      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
    </article>
  )
}

export default function RecentBlogsSection() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section className="py-20 bg-linear-to-br from-gray-50 via-white to-blue-50/30 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Latest Articles
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recent <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge research, expert analysis, and practical insights in mediation and alternative dispute resolution.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          {featuredPost && (
            <BlogCard post={featuredPost} featured={true} />
          )}
          
          {/* Regular Articles */}
          {regularPosts.slice(0, 4).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/blog"
              className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              <span className="relative flex items-center">
                View All Articles
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}