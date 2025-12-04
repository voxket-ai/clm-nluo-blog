import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BookOpen, Target, Users, Award, ArrowRight, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function AboutTheBlogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">NLUO Mediation Chronicle</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A platform dedicated to advancing discourse, ideas, and reflections in the field of mediation and negotiation, 
              promoting accessible and practice-oriented discussions in Alternative Dispute Resolution.
            </p>
          </div>

          {/* About the Blog */}
          <div className="bg-linear-to-br from-blue-50/90 to-slate-100/80 rounded-lg shadow-lg p-8 mb-12 border border-blue-100/40">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              About the <span className="text-blue-600">Chronicle</span>
            </h2>
            <div className="prose max-w-none text-gray-600 leading-relaxed text-lg">
              <p className="mb-6">
                The NLUO Mediation Chronicle is a scholarly blog platform initiated by the Centre for Mediation and Negotiation (CMN) at the National Law University Odisha. It serves as a dynamic forum for advancing discourse, ideas, and reflections in the field of mediation and negotiation.
              </p>
              <p className="mb-6">
                Our blog aims to promote accessible and practice-oriented discussions that contribute to the growth of mediation culture in India and beyond. We encourage contributions that explore contemporary developments in mediation and negotiation, evolving ADR mechanisms, and innovative dispute resolution practices.
              </p>
            </div>
          </div>

          {/* Purpose and Objectives */}
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Purpose & <span className="text-blue-600">Objectives</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Our Purpose</h3>
                <p className="text-gray-600 leading-relaxed">
                  To create a vibrant intellectual platform that bridges the gap between academic research and practical application in mediation and negotiation. We strive to make cutting-edge ADR knowledge accessible to practitioners, scholars, students, and policymakers.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Key Objectives</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Promote scholarly discourse on mediation and negotiation practices</li>
                  <li>• Share Insights on Law of Mediation and its implementation</li>
                  <li>• Analyze contemporary ADR trends and emerging technologies</li>
                  <li>• Foster collaboration between academics and practitioners</li>
                  <li>• Provide practical guidance for mediation professionals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What We Cover */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                What We <span className="text-blue-600">Cover</span>
              </h2>
              
              <div className="prose max-w-none text-gray-600 leading-relaxed">
                <p className="text-lg mb-6">
                  The NLUO Mediation Chronicle covers a wide range of topics relevant to the evolving landscape of Alternative Dispute Resolution (ADR) in India and internationally.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Mediation Act 2023</h4>
                  <p className="text-gray-600 text-sm">Analysis and commentary on India's landmark mediation legislation</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Case Studies</h4>
                  <p className="text-gray-600 text-sm">Real-world mediation success stories and lessons learned</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Online Dispute Resolution</h4>
                  <p className="text-gray-600 text-sm">Technology's role in modern dispute resolution</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">International Perspectives</h4>
                  <p className="text-gray-600 text-sm">Global mediation practices and comparative studies</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Training & Education</h4>
                  <p className="text-gray-600 text-sm">Mediator training methodologies and best practices</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Policy Analysis</h4>
                  <p className="text-gray-600 text-sm">ADR policy developments and recommendations</p>
                </div>
              </div>
            </div>
          </section>


          {/* Editorial Process */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Editorial <span className="text-blue-600">Process</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Submission Review</h3>
                  <p className="text-blue-600 font-medium mb-2">Initial Assessment</p>
                  <p className="text-gray-600 text-sm">All submissions undergo thorough initial review for relevance, quality, and adherence to guidelines.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="h-16 w-16 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Peer Review</h3>
                  <p className="text-green-600 font-medium mb-2">Expert Evaluation</p>
                  <p className="text-gray-600 text-sm">Selected pieces undergo peer review by subject matter experts and experienced practitioners.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <Target className="h-16 w-16 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Publication</h3>
                  <p className="text-purple-600 font-medium mb-2">Final Stage</p>
                  <p className="text-gray-600 text-sm">Approved articles are edited, formatted, and published with proper attribution and academic integrity.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Get Involved */}
          <section className="mb-16">
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Get <span className="text-blue-600">Involved</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1">Submit Articles</h3>
                  <p className="text-gray-600 text-sm">Share your insights and research</p>
                </div>
                
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1">Join Editorial Team</h3>
                  <p className="text-gray-600 text-sm">Contribute as editor or reviewer</p>
                </div>
                
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1">Editorial Queries</h3>
                  <p className="text-gray-600 text-sm">cmn@nluo.ac.in</p>
                </div>
                
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1">Follow Guidelines</h3>
                  <p className="text-gray-600 text-sm">Review submission policies</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="/submissions" 
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  View Submission Guidelines
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  )
}