import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BookOpen, Target, Users, Award, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AboutTheBlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
                    <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">NLUO Mediation Chronicle</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A platform dedicated to advancing discourse, ideas, and reflections in the field of mediation and negotiation, 
              promoting accessible and practice-oriented discussions in Alternative Dispute Resolution.
            </p>
          </div>

          {/* Mission Section */}
                    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About the <span className="text-blue-600">Chronicle</span>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The NLUO Mediation Chronicle, an initiative of the Centre for Mediation and Negotiation (CMN) at the 
                  National Law University Odisha, is a platform dedicated to advancing discourse, ideas, and reflections 
                  in the field of mediation and negotiation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  It aims to promote accessible and practice-oriented discussions that contribute to the growth of 
                  mediation culture in India and beyond. The blog seeks to encourage contributions that explore 
                  contemporary developments in mediation and negotiation, evolving ADR mechanisms, and innovative 
                  dispute resolution practices.
                </p>
              </div>
              
              <div className="h-64 bg-linear-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Users className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">ADR Community</h3>
                  <p className="text-blue-100">Mediators & Practitioners</p>
                </div>
              </div>
            </div>
          </div>

          {/* What We Do */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              What <span className="text-blue-600">We Do</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">ADR Analysis</h3>
                <p className="text-gray-600 text-sm">
                  In-depth analysis of mediation developments, Mediation Act 2023, and emerging ADR practices.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Expert Commentary</h3>
                <p className="text-gray-600 text-sm">
                  Insights from leading mediators, academics, and ADR practitioners on contemporary issues.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Research Focus</h3>
                <p className="text-gray-600 text-sm">
                  Cutting-edge research on ODR, cross-border mediation, and technology in dispute resolution.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Quality Content</h3>
                <p className="text-gray-600 text-sm">
                  Peer-reviewed articles following structured two-tier review system for academic integrity.
                </p>
              </div>
            </div>
          </section>

          {/* Statistics */}
          <div className="bg-blue-50 rounded-lg p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Articles Published</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Expert Contributors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-gray-600">Monthly Readers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Events Organized</div>
              </div>
            </div>
          </div>

          {/* Our Commitment */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Commitment</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are committed to maintaining the highest standards of legal scholarship while ensuring 
                our content remains accessible and practical for legal professionals at all levels. Our 
                editorial board comprises distinguished practitioners and academics who ensure the quality 
                and relevance of our publications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Academic Excellence</h3>
                  <p className="text-gray-600 text-sm">
                    Rigorous peer review process ensuring scholarly standards and methodological soundness.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Practical Relevance</h3>
                  <p className="text-gray-600 text-sm">
                    Content that addresses real-world legal challenges faced by practitioners and businesses.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Open Access</h3>
                  <p className="text-gray-600 text-sm">
                    Free access to high-quality legal content, supporting the democratization of legal knowledge.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Become part of our growing community of legal professionals, academics, and students. 
              Subscribe to our newsletter, contribute your insights, or participate in our events.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/submissions"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Submit an Article
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href="/newsletters"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Subscribe to Newsletter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}