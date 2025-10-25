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
              Submit your legal research, analysis, and commentary for publication on CLM Blog. 
              We welcome contributions from legal professionals, scholars, and students.
            </p>
          </div>

          {/* Submission Guidelines */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Submission Guidelines</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Content Requirements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    Original, unpublished content only
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    Word count: 1,500 - 5,000 words
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    Proper legal citations required
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    Author bio and credentials
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                    High-resolution author photo
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Preferred Topics</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    Corporate Governance
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    Securities Law & Regulations
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    Mergers & Acquisitions
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    Insolvency & Bankruptcy Law
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
                    Banking & Financial Regulations
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
                  <p className="text-sm text-gray-600">Article goes live on CLM Blog with author attribution</p>
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
                    href="mailto:submissions@clm-nluo.ac.in"
                    className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                  >
                    submissions@clm-nluo.ac.in
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
                <h3 className="font-semibold text-gray-900 mb-2">How long does the review process take?</h3>
                <p className="text-gray-600">The editorial review process typically takes 2-3 weeks. Complex articles may require additional time for thorough evaluation.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Do you accept articles from students?</h3>
                <p className="text-gray-600">Yes, we welcome high-quality submissions from law students, particularly those pursuing advanced degrees or with significant research experience.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Is there a publication fee?</h3>
                <p className="text-gray-600">No, there are no charges for submitting or publishing articles on CLM Blog. We are committed to open access legal scholarship.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}