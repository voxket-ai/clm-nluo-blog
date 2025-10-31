'use client'

import { Clock, User, ArrowRight } from 'lucide-react'
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
    featured: true
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
    featured: false
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
    featured: false
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
    featured: false
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
    featured: false
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
      "bg-linear-to-br from-slate-100/90 to-blue-50/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group border border-slate-200/40",
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
        
     
      </div>
    </article>
  )
}

export default function RecentBlogsSection() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section className="py-16 bg-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent <span className="text-blue-600">Articles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the latest insights on mediation, negotiation, and alternative dispute resolution from experts, practitioners, and scholars.
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