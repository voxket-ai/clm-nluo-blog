import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Clock, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Sample blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Corporate Governance Reforms: A Comprehensive Analysis",
    excerpt: "Exploring the latest changes in corporate governance regulations and their implications for modern businesses in the evolving legal landscape.",
    author: "CMN NLUO",
    date: "Oct 25, 2025",
    readTime: "6 min read",
    category: "Corporate Law"
  },
  {
    id: 2,
    title: "Securities Law Updates: Market Regulations and Compliance",
    excerpt: "Recent developments in securities law and their impact on market operations, investor protection, and regulatory compliance.",
    author: "CMN NLUO",
    date: "Oct 22, 2025",
    readTime: "4 min read",
    category: "Securities Law"
  },
  {
    id: 3,
    title: "Merger & Acquisition Trends in 2025",
    excerpt: "An in-depth look at the current M&A landscape, emerging trends, and regulatory considerations for corporate transactions.",
    author: "CMN NLUO",
    date: "Oct 20, 2025",
    readTime: "5 min read",
    category: "M&A"
  },
  {
    id: 4,
    title: "Insolvency Law: Recent Judicial Pronouncements",
    excerpt: "Analysis of recent court decisions in insolvency matters and their implications for corporate restructuring processes.",
    author: "CMN NLUO",
    date: "Oct 18, 2025",
    readTime: "7 min read",
    category: "Insolvency Law"
  },
  {
    id: 5,
    title: "Banking Regulations: Digital Transformation Impact",
    excerpt: "How digital transformation is reshaping banking regulations and compliance requirements in the modern financial sector.",
    author: "CMN NLUO",
    date: "Oct 15, 2025",
    readTime: "5 min read",
    category: "Banking Law"
  },
  {
    id: 6,
    title: "Environmental Law and Corporate Responsibility",
    excerpt: "The growing intersection of environmental regulations and corporate governance, including ESG compliance requirements.",
    author: "CMN NLUO",
    date: "Oct 12, 2025",
    readTime: "6 min read",
    category: "Environmental Law"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              NLUO Mediation <span className="text-blue-600">Chronicle</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover in-depth analysis, expert commentary, and the latest developments in Mediation and Negotiation under ADR from leading legal professionals and scholars.
            </p>
          </div>
          <div className='flex w-full items-center justify-center'>

          <p>No Articles Available</p>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              Load More Articles
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}