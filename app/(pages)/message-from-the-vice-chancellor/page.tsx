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
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Prof. (Dr.) Ved Kumari</h2>
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
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Dear Colleagues, Students, and Friends of Legal Academia,
              </p>
              
              <p>
                It gives me immense pleasure to welcome you to the Centre for Mediation and Negotiation at National Law University Odisha 
                and to introduce you to the NLUO Mediation Chronicle. As someone who has dedicated over four decades to legal education 
                and has witnessed the transformative power of alternative dispute resolution, I am deeply committed to advancing the 
                field of mediation and negotiation in India.
              </p>
              
              <p>
                Throughout my academic journey, beginning from my introduction to juvenile delinquency in 1978 to my extensive work 
                in judicial training and restorative justice, I have observed how effective communication, understanding, and 
                peaceful resolution of conflicts can transform lives and communities. The establishment of the NLUO Mediation Chronicle 
                represents our institutional commitment to these principles.
              </p>
              
              <p>
                Our Centre for Mediation and Negotiation was conceived with a vision to become India's premier institution for 
                Alternative Dispute Resolution (ADR). We recognize that in our increasingly complex legal landscape, traditional 
                adversarial approaches must be complemented by collaborative, restorative methods that focus on healing relationships 
                and finding mutually beneficial solutions.
              </p>
              
              <p>
                The NLUO Mediation Cell, India's first mediation cell operated by a higher education institution, exemplifies our 
                commitment to practical application of these principles. By providing free mediation services to the community, 
                we bridge the gap between academic theory and real-world impact, while training the next generation of mediators 
                and legal professionals.
              </p>
              
              <p>
                My experience as the first woman academic to head the Delhi Judicial Academy (2009-2011) taught me the importance 
                of innovative teaching methods and participatory learning. The Village Immersion Programme for Judicial Officers, 
                which I pioneered, exposed judges to grassroots social issues – an approach we continue to embrace in our mediation 
                training programs.
              </p>
              
              <p>
                Through the NLUO Mediation Chronicle, we aim to create a vibrant intellectual community where practitioners, academics, 
                students, and policymakers can engage in meaningful dialogue about mediation, negotiation, and restorative justice. 
                Our publication will serve as a platform for sharing research, best practices, and innovative approaches to conflict 
                resolution.
              </p>
              
              <p>
                I am particularly proud of our commitment to making quality legal education and resources accessible to all. 
                Just as I introduced the "Andragogy – the Art of Teaching Adults" course to improve legal education, we believe 
                that knowledge about peaceful dispute resolution should be democratized and made available to everyone who seeks 
                to understand and contribute to this vital field.
              </p>
              
              <p>
                As we advance towards achieving SDG 16 – Peace, Justice and Strong Institutions – I encourage all members of our 
                community to actively participate in this intellectual endeavor. Submit your research, share your experiences, 
                engage with our content, and help us build a repository of knowledge that will benefit generations of legal 
                professionals and society at large.
              </p>
              
              <p>
                The challenges facing dispute resolution today – from the implementation of the Mediation Act 2023 to the integration 
                of technology in ODR platforms – require collaborative solutions and innovative thinking. Through our Centre and 
                the Mediation Chronicle, we hope to foster the kind of interdisciplinary dialogue that will drive meaningful progress 
                in creating a more just and peaceful society.
              </p>
              
              <p>
                I extend my heartfelt gratitude to our dedicated faculty, distinguished advisory board members, contributing authors, 
                and readers who make this initiative possible. Together, we are not just documenting the evolution of mediation and 
                negotiation; we are actively participating in shaping a future where conflicts are resolved with dignity, 
                understanding, and mutual respect.
              </p>
              
              <p>
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