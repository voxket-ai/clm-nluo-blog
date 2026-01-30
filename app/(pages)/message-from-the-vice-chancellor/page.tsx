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
              A personal message from Prof. (Dr.) Ved Kumari, Vice-Chancellor of 
              National Law University Odisha, on the vision and mission of the Centre for Mediation and Negotiation.
            </p>
          </div>

          {/* Vice Chancellor Profile */}
          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg mb-4">
                  <img
                    src="/persons/Prof. (Dr.) Ved Kumari.jpg"
                    alt="Prof. (Dr.) Ved Kumari"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Prof.Ved Kumari</h2>
                <p className="text-blue-600 font-medium mb-2">Vice-Chancellor</p>
                <p className="text-gray-600">National Law University Odisha</p>
                <p className="text-sm text-gray-500 mt-2">Former Dean & Head, Faculty of Law, University of Delhi</p>
              </div>
              
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-blue-500" />
                      Academic Excellence
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ph.D. in Juvenile Justice System</li>
                      <li>• LL.M. (Delhi University)</li>
                      <li>• Teaching since 1983</li>
                      <li>• 40+ years in legal academia</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-green-500" />
                      Key Specializations
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Juvenile Justice</li>
                      <li>• Criminal Law & Gender Issues</li>
                      <li>• Judicial Training & Clinical Education</li>
                      <li>• Restorative Justice</li>
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
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 text-justify">
              <p>
                Dear Members of the Legal Fraternity and Student Community,
              </p>
              
              <p className='text-justify'>
                It gives me immense pleasure to welcome you to the NLUO Centre for Mediation and Negotiation and to introduce the inaugural issue of the NLUO Mediation Chronicle.
              </p>
              
              <p className='text-justify'>
               Having spent over four decades in legal education, I have witnessed the transformative power of Alternative Dispute Resolution (ADR) firsthand. My journey from early work in juvenile justice to judicial training has reinforced a singular truth: that effective communication and the peaceful resolution of conflicts have the power to heal not just individuals, but entire communities. The establishment of this Chronicle is a testament to our institutional commitment to these values.
              </p>
              
              <p className='text-justify'>
                We conceived the Centre with the aspiration of becoming India's premier institution for Mediation and Negotiation. In an increasingly complex legal landscape, we recognize that traditional adversarial approaches must be complemented by collaborative, restorative methods. We are moving towards a future where the focus shifts from winning arguments to healing relationships and finding mutually beneficial solutions.
              </p>
              
              <p className='text-justify'>
                We take great pride in the NLUO Mediation Cell, the first of its kind operated by a higher education institution in India. By providing free mediation services to the community, we are bridging the gap between academic theory and real-world impact. This initiative not only serves the public but ensures that our students—the next generation of legal professionals—are trained in the art of empathy and practical problem-solving.
              </p>
              
              <p className='text-justify'>
                Through the NLUO Mediation Chronicle, we aim to foster a vibrant intellectual community. We envision this publication as a nexus where practitioners, academics, students, and policymakers can engage in meaningful dialogue. Whether discussing the implementation of the Mediation Act 2023 or the integration of technology in ODR, this platform is yours to share research, best practices, and innovative thinking.
              </p>
              
              <p className='text-justify'>
                As we advance towards achieving SDG 16 (Peace, Justice, and Strong Institutions), I invite you to actively participate in this endeavour. Let us build a repository of knowledge that democratizes the understanding of dispute resolution.
              </p>
              
              <p className='text-justify'>
                I extend my heartfelt gratitude to our dedicated faculty, distinguished advisory board members, contributing authors, and readers who make this initiative possible. Together, we are not just documenting the evolution of mediation and negotiation; we are actively participating in shaping a future where conflicts are resolved with dignity, understanding, and mutual respect.
              </p>
              
              <p className='text-justify'>
                With warm regards and best wishes for your academic and professional pursuits,
              </p>
              
              
              
              <div className="mt-8 border-t pt-6">
                <p className="font-semibold text-gray-900">Prof. (Dr.) Ved Kumari</p>
                <p className="text-blue-600">Vice-Chancellor</p>
                <p className="text-gray-600">National Law University Odisha</p>
                <p className="text-sm text-gray-500">Former Dean & Head, Faculty of Law, University of Delhi</p>
              </div>
            </div>
          </div>

          {/* Distinguished Achievements */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Distinguished <span className="text-blue-600">Achievements</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Academic Leadership</h4>
                <p className="text-gray-600 text-sm">First woman academic to head Delhi Judicial Academy as Chairperson (2009-2011)</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">International Recognition</h4>
                <p className="text-gray-600 text-sm">Fellow of Commonwealth Judicial Education Institute, Canada (2010)</p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Commonwealth Fellow</h4>
                <p className="text-gray-600 text-sm">Commonwealth Fellow at Warwick University, UK (1998)</p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Fulbright Scholar</h4>
                <p className="text-gray-600 text-sm">Fulbright Fellow at Vanderbilt University, USA (1997)</p>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Juvenile Justice Pioneer</h4>
                <p className="text-gray-600 text-sm">Author of "Treatise on Juvenile Justice Act 1986" - referred to as the "Bible" in juvenile justice</p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Innovation in Training</h4>
                <p className="text-gray-600 text-sm">Introduced Village Immersion Programme for Judicial Officers and E-courses on Judicial Ethics</p>
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
                To establish the Centre as a leading center for mediation and negotiation scholarship that influences policy, 
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

        
        </div>
      </main>
      
      <Footer />
    </div>
  )
}