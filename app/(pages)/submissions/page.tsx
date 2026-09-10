import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FileText, Upload, CheckCircle, Clock, Mail } from 'lucide-react'
import Editable from '@/components/editable/Editable'

export default function SubmissionsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <Editable id="submissions.title" as="span" label="Submissions title">Article</Editable>{' '}
              <span className="text-blue-600">
                <Editable id="submissions.title-accent" as="span" label="Submissions title (blue word)">Submissions</Editable>
              </span>
            </h1>
            <Editable id="submissions.intro" as="p" multiline label="Submissions introduction" className="text-xl text-gray-600">
              The NLUO Mediation Blogs accepts submissions from experts, working professionals, academicians and students.
              We welcome articles, case comments, legislative comments and book reviews in the field of mediation and ADR.
            </Editable>
          </div>

          {/* Submission Guidelines */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="submissions.submission-guidelines" as="span">Submission Guidelines</Editable></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4"><Editable id="submissions.formatting-guidelines" as="span">Formatting Guidelines</Editable></h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <Editable id="submissions.word-limit-1200-1500-words-excluding-footnotes" as="span">Word limit: 1200 – 1500 words (excluding footnotes)</Editable>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <Editable id="submissions.times-new-roman-size-12-1-5-line-spacing" as="span">Times New Roman, size 12, 1.5 line spacing</Editable>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <Editable id="submissions.oscola-4th-edition-citations-required" as="span">OSCOLA (4th Edition) citations required</Editable>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <Editable id="submissions.co-authorship-maximum-2-authors" as="span">Co-authorship: Maximum 2 authors</Editable>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <Editable id="submissions.plagiarism-limit-10-ugc-guidelines" as="span">Plagiarism limit: 10% (UGC guidelines)</Editable>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4"><Editable id="submissions.submission-themes" as="span">Submission Themes</Editable><Editable id="submissions.themes-note" as="span" label="Themes note">(Non-Exhaustive)</Editable></h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <Editable id="submissions.mediation-act-2023-and-related-legislations-anal" as="span">Mediation Act, 2023 and related legislations,Analysis</Editable>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <Editable id="submissions.online-dispute-resolution-odr" as="span">Online Dispute Resolution (ODR)</Editable>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <Editable id="submissions.cross-border-commercial-mediation" as="span">Cross-Border Commercial Mediation</Editable>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <Editable id="submissions.family-matrimonial-mediation" as="span">Family & Matrimonial Mediation</Editable>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    <Editable id="submissions.technology-ai-in-mediation" as="span">Technology & AI in Mediation</Editable>
                  </li>
                </ul>
              </div>
            </div>

            {/* Submission Process */}
            <div className="border-t pt-8 border-slate-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6"><Editable id="submissions.submission-process" as="span">Submission Process</Editable></h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2"><Editable id="submissions.1-submit" as="span">1. Submit</Editable></h4>
                  <p className="text-sm text-gray-600"><Editable id="submissions.send-your-article-via-email-with-all-required-do" as="span">Send your article via email with all required documents</Editable></p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2"><Editable id="submissions.2-review" as="span">2. Review</Editable></h4>
                  <p className="text-sm text-gray-600"><Editable id="submissions.editorial-board-reviews-for-quality-and-relevanc" as="span">Editorial board reviews for quality and relevance</Editable></p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2"><Editable id="submissions.3-edit" as="span">3. Edit</Editable></h4>
                  <p className="text-sm text-gray-600"><Editable id="submissions.professional-editing-and-formatting-for-publicat" as="span">Professional editing and formatting for publication</Editable></p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2"><Editable id="submissions.4-publish" as="span">4. Publish</Editable></h4>
                  <p className="text-sm text-gray-600"><Editable id="submissions.article-goes-live-on-nluo-mediation-blogs-with-a" as="span">Article goes live on NLUO Mediation Blogs with author attribution</Editable></p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <Editable id="submissions.cta.title" as="h2" label="Submissions CTA title" className="text-2xl font-bold text-gray-900 mb-4">Ready to Submit?</Editable>
              <Editable id="submissions.cta.body" as="p" multiline label="Submissions CTA body" className="text-gray-600 mb-6">
                Send your article submissions to our editorial team. We typically respond within 2-3 weeks.
              </Editable>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900"><Editable id="submissions.email-your-submission-to" as="span">Email your submission to:</Editable></p>
                  <a 
                    href="mailto:nmc@nluo.ac.in"
                    className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                  >
                    <Editable id="submissions.nmc-nluo-ac-in" as="span">nmc@nluo.ac.in</Editable>
                  </a>
                </div>
                <div className="text-sm text-gray-600">
                  <p><Editable id="submissions.please-include-article-submission-in-the-subject" as="span">Please include "Article Submission" in the subject line</Editable></p>
                  <p><Editable id="submissions.attach-your-article-as-a-word-document-docx-or-p" as="span">Attach your article as a Word document (.docx) or PDF</Editable></p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center"><Editable id="submissions.frequently-asked-questions" as="span">Frequently Asked Questions</Editable></h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-gray-900 mb-2"><Editable id="submissions.what-is-the-review-process" as="span">What is the review process?</Editable></h3>
                <p className="text-gray-600 text-justify"><Editable id="submissions.the-blogs-follows-a-structured-two-tier-blind-pe" as="span">The Blogs follows a structured two-tier blind peer-review system. Tier-1 review by Student Editors (4 working days), followed by Tier-2 review by Board of Editors. Total process: Approximately within 30 days.</Editable></p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-gray-900 mb-2"><Editable id="submissions.what-types-of-submissions-are-accepted" as="span">What types of submissions are accepted?</Editable></h3>
                <p className="text-gray-600 text-justify"><Editable id="submissions.we-accept-articles-case-comments-legislative-com" as="span">We accept Articles, Case Comments, Legislative Comments, and Book Reviews falling within the scope of Mediation and Alternative Dispute Resolution.</Editable></p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-gray-900 mb-2"><Editable id="submissions.what-is-the-plagiarism-policy" as="span">What is the plagiarism policy?</Editable></h3>
                <p className="text-gray-600 text-justify"><Editable id="submissions.we-maintain-strict-adherence-to-ugc-guidelines-w" as="span">We maintain strict adherence to UGC guidelines with a 10% similarity limit. All submissions undergo pre-screening using industry-standard plagiarism detection software.</Editable></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}