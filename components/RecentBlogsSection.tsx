'use client'

import { Clock, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// Sample blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Corporate Governance Reforms: A Comprehensive Analysis",
    excerpt: "Exploring the latest changes in corporate governance regulations and their implications for modern businesses in the evolving legal landscape.",
    author: "CLM NLUO",
    date: "Oct 25, 2025",
    readTime: "6 min read",
    category: "Corporate Law",
    imageUrl: "/api/placeholder/400/250",
    featured: true
  },
  {
    id: 2,
    title: "Securities Law Updates: Market Regulations and Compliance",
    excerpt: "Recent developments in securities law and their impact on market operations, investor protection, and regulatory compliance.",
    author: "CLM NLUO",
    date: "Oct 22, 2025",
    readTime: "4 min read",
    category: "Securities Law",
    imageUrl: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 3,
    title: "Merger & Acquisition Trends in 2025",
    excerpt: "An in-depth look at the current M&A landscape, emerging trends, and regulatory considerations for corporate transactions.",
    author: "CLM NLUO",
    date: "Oct 20, 2025",
    readTime: "5 min read",
    category: "M&A",
    imageUrl: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 4,
    title: "Insolvency Law: Recent Judicial Pronouncements",
    excerpt: "Analysis of recent court decisions in insolvency matters and their implications for corporate restructuring processes.",
    author: "CLM NLUO",
    date: "Oct 18, 2025",
    readTime: "7 min read",
    category: "Insolvency Law",
    imageUrl: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 5,
    title: "Banking Regulations: Digital Transformation Impact",
    excerpt: "How digital transformation is reshaping banking regulations and compliance requirements in the modern financial sector.",
    author: "CLM NLUO",
    date: "Oct 15, 2025",
    readTime: "5 min read",
    category: "Banking Law",
    imageUrl: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 6,
    title: "Environmental Law and Corporate Responsibility",
    excerpt: "The growing intersection of environmental regulations and corporate governance, including ESG compliance requirements.",
    author: "CLM NLUO",
    date: "Oct 12, 2025",
    readTime: "6 min read",
    category: "Environmental Law",
    imageUrl: "/api/placeholder/400/250",
    featured: false
  }
]

interface BlogCardProps {
  post: typeof blogPosts[0]
  featured?: boolean
}

function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article className={cn(
      "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group",
      featured && "md:col-span-2 lg:col-span-2"
    )}>
      <div className={cn(
        "aspect-video bg-gray-200 relative overflow-hidden",
        featured ? "h-64 md:h-80" : "h-48"
      )}>
        {/* Placeholder for image - you can replace with actual Image component */}
        <div className="w-full h-full bg-linear-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
          <span className="text-white text-lg font-medium">{post.category}</span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <User className="h-4 w-4 mr-1" />
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{post.readTime}</span>
        </div>
        
        <h3 className={cn(
          "font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200",
          featured ? "text-xl md:text-2xl" : "text-lg"
        )}>
          <Link href={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {post.excerpt}
        </p>
        
        <Link 
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
        >
          Read More
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}

export default function RecentBlogsSection() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent <span className="text-blue-600">Blogs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest insights on corporate law, regulatory updates, and industry analysis from leading legal experts.
          </p>
        </div>

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

        {/* View All Blogs Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            View All Blogs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}