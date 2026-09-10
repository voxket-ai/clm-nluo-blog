import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BookOpen, Target, Users, Award, ArrowRight, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import Editable from '@/components/editable/Editable'

export default function AboutTheBlogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <Editable id="about.title" as="span" label="About page title">About</Editable>{' '}
              <span className="text-blue-600">
                <Editable id="about.title-accent" as="span" label="About title (blue words)">NLUO Mediation Blogs</Editable>
              </span>
            </h1>
            <Editable id="about.intro" as="p" multiline label="About page introduction" className="text-xl text-gray-600 max-w-4xl mx-auto">
              A platform dedicated to advancing discourse, ideas, and reflections in the field of mediation and negotiation,
              promoting accessible and practice-oriented discussions in Alternative Dispute Resolution.
            </Editable>
          </div>

          {/* About the Blog */}
          <div className="bg-linear-to-br from-blue-50/90 to-slate-100/80 rounded-lg shadow-lg p-8 mb-12 border border-blue-100/40">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              <Editable id="about-the-blog.about-the" as="span">About the</Editable> <span className="text-blue-600"><Editable id="about-the-blog.blogs" as="span">Blogs</Editable></span>
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed text-justify">
              <p className="mb-6">
                <Editable id="about-the-blog.the-nluo-mediation-blogs-is-a-scholarly-blog-pla" as="span">The NLUO Mediation Blogs is a scholarly blog platform initiated by the Centre for Mediation and Negotiation (NLUO CMN) at the National Law University Odisha. It serves as a dynamic forum for advancing discourse, ideas, and reflections in the field of mediation and negotiation.</Editable>
              </p>
              <p className="mb-6">
                <Editable id="about-the-blog.our-blog-aims-to-promote-accessible-and-practice" as="span">Our blog aims to promote accessible and practice-oriented discussions that contribute to the growth of mediation culture in India and beyond. We encourage contributions that explore contemporary developments in mediation and negotiation, evolving ADR mechanisms, and innovative dispute resolution practices.</Editable>
              </p>
            </div>

          </div>

          {/* Purpose and Objectives */}
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Purpose & <span className="text-blue-600"><Editable id="about-the-blog.objectives" as="span">Objectives</Editable></span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4"><Editable id="about-the-blog.our-purpose" as="span">Our Purpose</Editable></h3>
                <p className="text-gray-600 leading-relaxed text-justify">
                  <Editable id="about-the-blog.to-create-a-vibrant-intellectual-platform-that-b" as="span">To create a vibrant intellectual platform that bridges the gap between academic research and practical application in mediation and negotiation. We strive to make cutting-edge ADR knowledge accessible to practitioners, scholars, students, and policymakers.</Editable>
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4"><Editable id="about-the-blog.key-objectives" as="span">Key Objectives</Editable></h3>
                <ul className="text-gray-600 space-y-2 text-sm text-justify">
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
                <Editable id="about-the-blog.what-we" as="span">What We</Editable> <span className="text-blue-600"><Editable id="about-the-blog.cover" as="span">Cover</Editable></span>
              </h2>
              
              <div className="prose max-w-none text-gray-600 leading-relaxed">
                <p className="text-lg mb-6">
                  <Editable id="about-the-blog.the-nluo-mediation-blogs-covers-a-wide-range-of" as="span">The NLUO Mediation Blogs covers a wide range of topics relevant to the evolving landscape of Alternative Dispute Resolution (ADR) in India and internationally.</Editable>
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2"><Editable id="about-the-blog.mediation-act-2023" as="span">Mediation Act 2023</Editable></h4>
                  <p className="text-gray-600 text-sm"><Editable id="about-the-blog.mediation-legislations" as="span">Mediation Legislations</Editable></p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2"><Editable id="about-the-blog.case-studies" as="span">Case Studies</Editable></h4>
                  <p className="text-gray-600 text-sm"><Editable id="about-the-blog.real-world-mediation-success-stories-and-lessons" as="span">Real-world mediation success stories and lessons learned</Editable></p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2"><Editable id="about-the-blog.online-dispute-resolution" as="span">Online Dispute Resolution</Editable></h4>
                  <p className="text-gray-600 text-sm"><Editable id="about-the-blog.technology-s-role-in-modern-dispute-resolution" as="span">Technology's role in modern dispute resolution</Editable></p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2"><Editable id="about-the-blog.international-perspectives" as="span">International Perspectives</Editable></h4>
                  <p className="text-gray-600 text-sm"><Editable id="about-the-blog.global-mediation-practices-and-comparative-studi" as="span">Global mediation practices and comparative studies</Editable></p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2"><Editable id="about-the-blog.training-education" as="span">Training & Education</Editable></h4>
                  <p className="text-gray-600 text-sm"><Editable id="about-the-blog.mediator-training-methodologies-and-best-practic" as="span">Mediator training methodologies and best practices</Editable></p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2"><Editable id="about-the-blog.policy-analysis" as="span">Policy Analysis</Editable></h4>
                  <p className="text-gray-600 text-sm"><Editable id="about-the-blog.adr-policy-developments-and-recommendations" as="span">ADR policy developments and recommendations</Editable></p>
                </div>
              </div>
            </div>
          </section>


          {/* Editorial Process */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                <Editable id="about-the-blog.editorial" as="span">Editorial</Editable> <span className="text-blue-600"><Editable id="about-the-blog.process" as="span">Process</Editable></span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2"><Editable id="about-the-blog.submission-review" as="span">Submission Review</Editable></h3>
                  <p className="text-blue-600 font-medium mb-2"><Editable id="about-the-blog.initial-assessment" as="span">Initial Assessment</Editable></p>
                  <p className="text-gray-600 text-sm"><Editable id="about-the-blog.all-submissions-undergo-thorough-initial-review" as="span">All submissions undergo thorough initial review for relevance, quality, and adherence to guidelines.</Editable></p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="h-16 w-16 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2"><Editable id="about-the-blog.peer-review" as="span">Peer Review</Editable></h3>
                  <p className="text-green-600 font-medium mb-2"><Editable id="about-the-blog.expert-evaluation" as="span">Expert Evaluation</Editable></p>
                  <p className="text-gray-600 text-sm"><Editable id="about-the-blog.selected-pieces-undergo-peer-review-by-subject-m" as="span">Selected pieces undergo peer review by subject matter experts and experienced practitioners.</Editable></p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <Target className="h-16 w-16 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2"><Editable id="about-the-blog.publication" as="span">Publication</Editable></h3>
                  <p className="text-purple-600 font-medium mb-2"><Editable id="about-the-blog.final-stage" as="span">Final Stage</Editable></p>
                  <p className="text-gray-600 text-sm"><Editable id="about-the-blog.approved-articles-are-edited-formatted-and-publi" as="span">Approved articles are edited, formatted, and published with proper attribution and academic integrity.</Editable></p>
                </div>
              </div>
            </div>
          </section>

          {/* Get Involved */}
          <section className="mb-16">
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                <Editable id="about-the-blog.get" as="span">Get</Editable> <span className="text-blue-600"><Editable id="about-the-blog.involved" as="span">Involved</Editable></span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1"><Editable id="about-the-blog.submit-articles" as="span">Submit Articles</Editable></h3>
                  <p className="text-gray-600 text-sm"><Editable id="about-the-blog.share-your-insights-and-research" as="span">Share your insights and research</Editable></p>
                </div>
                
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1"><Editable id="about-the-blog.join-editorial-team" as="span">Join Editorial Team</Editable></h3>
                  <p className="text-gray-600 text-sm"><Editable id="about-the-blog.contribute-as-editor-or-reviewer" as="span">Contribute as editor or reviewer</Editable></p>
                </div>
                
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1"><Editable id="about-the-blog.editorial-queries" as="span">Editorial Queries</Editable></h3>
                  <p className="text-gray-600 text-sm"><Editable id="about-the-blog.nmc-nluo-ac-in" as="span">nmc@nluo.ac.in</Editable></p>
                </div>
                
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1"><Editable id="about-the-blog.follow-guidelines" as="span">Follow Guidelines</Editable></h3>
                  <p className="text-gray-600 text-sm"><Editable id="about-the-blog.review-submission-policies" as="span">Review submission policies</Editable></p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="/submissions" 
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  <Editable id="about-the-blog.view-submission-guidelines" as="span">View Submission Guidelines</Editable>
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