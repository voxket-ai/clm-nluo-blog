import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FileText, Upload, CheckCircle, Clock, Mail } from 'lucide-react'

export default function SubmissionsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Article <span className="text-blue-600">Submissions</span>
            </h1>
            <p className="text-xl text-gray-600">
              The NLUO Mediation Chronicle accepts submissions from experts, working professionals, academicians and students. 
              We welcome articles, case comments, legislative comments and book reviews in the field of mediation and ADR.
            </p>
          </div>

          {/* Submission Guidelines */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Submission Guidelines</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Formatting Guidelines</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    Word limit: 1200 – 1500 words (excluding footnotes)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    Times New Roman, size 12, 1.5 line spacing
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    OSCOLA (4th Edition) citations required
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    Co-authorship: Maximum 2 authors
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    Plagiarism limit: 10% (UGC guidelines)
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Submission Themes{"(Non-Exhaustive)"}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    Mediation Act, 2023 and related legislations,Analysis
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    Online Dispute Resolution (ODR)
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    Cross-Border Commercial Mediation
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    Family & Matrimonial Mediation
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    Technology & AI in Mediation
                  </li>
                </ul>
              </div>
            </div>

            {/* Submission Process */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Submission Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">1. Submit</h4>
                  <p className="text-sm text-gray-600">Send your article via email with all required documents</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">2. Review</h4>
                  <p className="text-sm text-gray-600">Editorial board reviews for quality and relevance</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">3. Edit</h4>
                  <p className="text-sm text-gray-600">Professional editing and formatting for publication</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">4. Publish</h4>
                  <p className="text-sm text-gray-600">Article goes live on NLUO Mediation Chronicle with author attribution</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Submit?</h2>
              <p className="text-gray-600 mb-6">
                Send your article submissions to our editorial team. We typically respond within 2-3 weeks.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Email your submission to:</p>
                  <a 
                    href="mailto:nmc@nluo.ac.in"
                    className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                  >
                    nmc@nluo.ac.in
                  </a>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Please include "Article Submission" in the subject line</p>
                  <p>Attach your article as a Word document (.docx) or PDF</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What is the review process?</h3>
                <p className="text-gray-600 text-justify">The Chronicle follows a structured two-tier blind peer-review system. Tier-1 review by Student Editors (4 working days), followed by Tier-2 review by Board of Editors. Total process: Approximately within 30 days.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What types of submissions are accepted?</h3>
                <p className="text-gray-600 text-justify">We accept Articles, Case Comments, Legislative Comments, and Book Reviews falling within the scope of Mediation and Alternative Dispute Resolution.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What is the plagiarism policy?</h3>
                <p className="text-gray-600 text-justify">We maintain strict adherence to UGC guidelines with a 10% similarity limit. All submissions undergo pre-screening using industry-standard plagiarism detection software.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}