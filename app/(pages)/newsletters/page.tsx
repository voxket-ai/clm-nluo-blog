import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, Download, Eye, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Sample newsletter data
const newsletters = [
  {
    id: 1,
    title: "#Insights - October 2025",
    subtitle: "Corporate Governance Reforms & Securities Law Updates",
    description: "This month's edition covers the latest corporate governance reforms, recent SEBI regulations, and landmark judgments in corporate law.",
    publishDate: "October 1, 2025",
    downloadUrl: "#",
    previewUrl: "#",
    topics: ["Corporate Governance", "Securities Law", "SEBI Regulations", "Case Law Analysis"]
  },
  {
    id: 2,
    title: "#Insights - September 2025",
    subtitle: "M&A Landscape & Insolvency Law Developments",
    description: "Comprehensive analysis of the current merger and acquisition trends, along with recent developments in insolvency and bankruptcy law.",
    publishDate: "September 1, 2025",
    downloadUrl: "#",
    previewUrl: "#",
    topics: ["Mergers & Acquisitions", "Insolvency Law", "Market Trends", "Regulatory Updates"]
  },
  {
    id: 3,
    title: "#Insights - August 2025",
    subtitle: "Banking Regulations & Fintech Compliance",
    description: "Exploring the evolving banking regulatory landscape and compliance requirements for fintech companies in India.",
    publishDate: "August 1, 2025",
    downloadUrl: "#",
    previewUrl: "#",
    topics: ["Banking Law", "Fintech Regulations", "Compliance", "Digital Banking"]
  },
  {
    id: 4,
    title: "#Insights - July 2025",
    subtitle: "ESG Compliance & Environmental Law",
    description: "Focus on Environmental, Social, and Governance (ESG) compliance requirements and their impact on corporate decision-making.",
    publishDate: "July 1, 2025",
    downloadUrl: "#",
    previewUrl: "#",
    topics: ["ESG Compliance", "Environmental Law", "Corporate Responsibility", "Sustainability"]
  },
  {
    id: 5,
    title: "#Insights - June 2025",
    subtitle: "Competition Law & Market Regulation",
    description: "Analysis of recent Competition Commission decisions and their implications for market players and regulatory compliance.",
    publishDate: "June 1, 2025",
    downloadUrl: "#",
    previewUrl: "#",
    topics: ["Competition Law", "Market Regulation", "CCI Decisions", "Antitrust"]
  },
  {
    id: 6,
    title: "#Insights - May 2025",
    subtitle: "Cross-border Transactions & FEMA Updates",
    description: "Comprehensive coverage of cross-border transaction regulations and recent updates to Foreign Exchange Management Act provisions.",
    publishDate: "May 1, 2025",
    downloadUrl: "#",
    previewUrl: "#",
    topics: ["FEMA", "Cross-border Transactions", "Foreign Investment", "Regulatory Compliance"]
  }
]

export default function NewslettersPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              CLM <span className="text-blue-600">#Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Our monthly newsletter provides comprehensive insights into the latest developments in corporate law, 
              regulatory updates, and critical analysis of emerging legal trends.
            </p>
            
            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay Updated</h3>
                <p className="text-gray-600 mb-4 text-sm">Subscribe to receive #Insights directly in your inbox</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About <span className="text-blue-600">#Insights</span>
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  CLM has endeavoured to release a monthly newsletter on corporate law titled '#Insights', 
                  to create an effective platform to foster discussion and discourse on the latest updates 
                  in the corporate world.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  This covers major updates of critical subject matters like Insolvency Law, Securities Law, 
                  Company Law etc. Through '#Insights' we try to delve deeper into each development, analyzing 
                  the reasons and consequences of such developments, thus providing comprehensive understanding 
                  of a particular issue to our readers.
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Monthly Publication</span>
                  </div>
                  <div className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    <span>Free Download</span>
                  </div>
                </div>
              </div>
              
              <div className="h-64 bg-linear-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Mail className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">#Insights Newsletter</h3>
                  <p className="text-blue-100">Corporate Law Analysis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Archive */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Newsletter <span className="text-blue-600">Archive</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsletters.map((newsletter) => (
                <div key={newsletter.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="h-32 bg-linear-to-r from-blue-500 to-indigo-600 flex items-center justify-center relative">
                    <div className="text-center text-white">
                      <h3 className="text-lg font-bold">{newsletter.title}</h3>
                    </div>
                    <div className="absolute top-3 right-3 bg-white bg-opacity-20 rounded-full px-2 py-1 text-xs text-white">
                      PDF
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{newsletter.publishDate}</span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {newsletter.subtitle}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {newsletter.description}
                    </p>
                    
                    {/* Topics */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {newsletter.topics.slice(0, 2).map((topic, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {topic}
                          </span>
                        ))}
                        {newsletter.topics.length > 2 && (
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            +{newsletter.topics.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link
                        href={newsletter.previewUrl}
                        className="flex items-center justify-center flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </Link>
                      <Link
                        href={newsletter.downloadUrl}
                        className="flex items-center justify-center flex-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Load More Issues
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}