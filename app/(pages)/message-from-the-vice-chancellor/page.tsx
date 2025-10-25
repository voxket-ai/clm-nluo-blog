import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Quote, GraduationCap, Target, Users, Award, BookOpen } from 'lucide-react'

export default function MessageFromVCPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Message from the <span className="text-blue-600">Vice-Chancellor</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A personal message from Prof. Dr. Srikrishna Deva Rao, Vice-Chancellor of 
              National Law University Odisha, on the vision and mission of the Centre for Corporate Law.
            </p>
          </div>

          {/* Vice Chancellor Profile */}
          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full bg-linear-to-r from-blue-400 to-indigo-500 flex items-center justify-center mb-4">
                  <span className="text-white text-4xl font-bold">SDR</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Prof. Dr. Srikrishna Deva Rao</h2>
                <p className="text-blue-600 font-medium mb-2">Vice-Chancellor</p>
                <p className="text-gray-600">National Law University Odisha</p>
              </div>
              
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-blue-500" />
                      Academic Excellence
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ph.D. in Constitutional Law</li>
                      <li>• LL.M. in Public Law</li>
                      <li>• B.A. LL.B. (Hons.) Gold Medalist</li>
                      <li>• 25+ years in legal academia</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-green-500" />
                      Key Contributions
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Legal Education Reform</li>
                      <li>• Constitutional Law Research</li>
                      <li>• Policy Advisory Roles</li>
                      <li>• Academic Leadership</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex items-start mb-6">
              <Quote className="h-8 w-8 text-blue-500 mr-4 mt-1 shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">A Message of Vision and Purpose</h2>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Dear Colleagues, Students, and Friends of Legal Academia,
              </p>
              
              <p>
                It gives me immense pleasure to welcome you to the Centre for Corporate Law at National Law University Odisha. 
                As we embark on this journey of academic excellence and scholarly pursuit, I am reminded of the profound 
                responsibility we bear in shaping the future of corporate law education and practice in India.
              </p>
              
              <p>
                The establishment of CLM Blog represents more than just an academic initiative; it embodies our commitment 
                to bridging the gap between theoretical knowledge and practical application. In today's rapidly evolving 
                corporate landscape, where legal frameworks must adapt to technological innovations, global market dynamics, 
                and changing societal expectations, the need for rigorous, accessible, and timely legal scholarship has never been greater.
              </p>
              
              <p>
                Our Centre for Corporate Law was conceived with a clear vision: to become a premier institution for corporate 
                law research, education, and policy advocacy. We recognize that corporate law is not merely a collection of 
                rules and regulations, but a dynamic field that shapes economic growth, protects stakeholder interests, and 
                ensures sustainable business practices.
              </p>
              
              <p>
                Through CLM Blog, we aim to create a vibrant intellectual community where practitioners, academics, students, 
                and policymakers can engage in meaningful dialogue about the most pressing issues in corporate law. Our 
                distinguished advisory board, comprising leading experts from India and abroad, ensures that our content 
                maintains the highest standards of academic rigor while remaining relevant to contemporary legal practice.
              </p>
              
              <p>
                I am particularly proud of our commitment to open access scholarship. In an era where knowledge should be 
                democratized, we believe that high-quality legal research should be freely available to all who seek to 
                understand and contribute to the field of corporate law. This philosophy aligns with our university's broader 
                mission of serving society through education and research.
              </p>
              
              <p>
                As we move forward, I encourage all members of our community – whether you are a seasoned practitioner, 
                an emerging scholar, or a curious student – to actively participate in this intellectual endeavor. Submit 
                your research, engage with our content, attend our events, and help us build a repository of knowledge 
                that will benefit generations of legal professionals.
              </p>
              
              <p>
                The challenges facing corporate law today – from governance reforms and regulatory compliance to ESG 
                considerations and technological disruption – require collaborative solutions. Through CLM Blog, we hope 
                to foster the kind of interdisciplinary dialogue and innovative thinking that will drive meaningful progress 
                in our field.
              </p>
              
              <p>
                I extend my heartfelt gratitude to our faculty, advisory board members, contributing authors, and readers 
                who make this initiative possible. Together, we are not just documenting the evolution of corporate law; 
                we are actively participating in shaping its future.
              </p>
              
              <p>
                With warm regards and best wishes for your academic and professional pursuits,
              </p>
              
              <div className="mt-8 border-t pt-6">
                <p className="font-semibold text-gray-900">Prof. Dr. Srikrishna Deva Rao</p>
                <p className="text-blue-600">Vice-Chancellor</p>
                <p className="text-gray-600">National Law University Odisha</p>
              </div>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To establish CLM as a leading center for corporate law scholarship that influences policy, 
                shapes practice, and educates the next generation of legal professionals with the knowledge 
                and skills needed to navigate an increasingly complex corporate environment.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To advance corporate law through rigorous research, innovative teaching, and meaningful 
                engagement with practitioners and policymakers, while maintaining our commitment to 
                accessibility, excellence, and social responsibility.
              </p>
            </div>
          </div>

          {/* Key Initiatives */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Key <span className="text-blue-600">Initiatives</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Scholarly Publications</h3>
                <p className="text-gray-600 text-sm">
                  Regular publication of high-quality research articles, case commentaries, and policy analyses.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Academic Events</h3>
                <p className="text-gray-600 text-sm">
                  Conferences, workshops, and seminars bringing together leading experts and practitioners.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Educational Programs</h3>
                <p className="text-gray-600 text-sm">
                  Specialized courses, certificate programs, and research opportunities for students and professionals.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect with the Vice-Chancellor's Office</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For official communications, academic collaborations, or institutional partnerships, 
              please reach out through the Vice-Chancellor's office.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:vc@nluo.ac.in"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Email the Vice-Chancellor
              </a>
              
              <a
                href="tel:+91-671-2866850"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Office Contact
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}