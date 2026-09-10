import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Quote, GraduationCap, Target, Users, Award, BookOpen } from 'lucide-react'
import Editable from '@/components/editable/Editable'
import EditableImage from '@/components/editable/EditableImage'

export default function MessageFromVCPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <Editable id="message-from-the-vice-chancell.message-from-the" as="span">Message from the</Editable> <span className="text-blue-600"><Editable id="message-from-the-vice-chancell.vice-chancellor" as="span">Vice-Chancellor</Editable></span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <Editable id="message-from-the-vice-chancell.a-personal-message-from-prof-ved-kumari-vice-cha" as="span">A personal message from Prof. Ved Kumari, Vice-Chancellor of National Law University Odisha, on the vision and mission of the Centre for Mediation and Negotiation.</Editable>
            </p>
          </div>

          {/* Vice Chancellor Profile */}
          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg mb-4">
                  <EditableImage
                  id="message-from-the-vice-chancellor.image.prof-dr-ved-kumari"
                  src="/persons/Prof. (Dr.) Ved Kumari.jpg"
                  alt="Prof. (Dr.) Ved Kumari"
                  label="Prof. (Dr.) Ved Kumari"
                  className="w-full h-full object-cover"
                />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2"><Editable id="message-from-the-vice-chancell.prof-ved-kumari" as="span">Prof. Ved Kumari</Editable></h2>
                <p className="text-blue-600 font-medium mb-2"><Editable id="message-from-the-vice-chancell.vice-chancellor-2" as="span">Vice-Chancellor</Editable></p>
                <p className="text-gray-600"><Editable id="message-from-the-vice-chancell.national-law-university-odisha" as="span">National Law University Odisha</Editable></p>
                <p className="text-sm text-gray-500 mt-2"><Editable id="message-from-the-vice-chancell.former-dean-head-faculty-of-law-university-of-de" as="span">Former Dean & Head, Faculty of Law, University of Delhi</Editable></p>
              </div>
              
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-blue-500" />
                      <Editable id="message-from-the-vice-chancell.academic-excellence" as="span">Academic Excellence</Editable>
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><Editable id="message-from-the-vice-chancell.ph-d-in-juvenile-justice-system" as="span">• Ph.D. in Juvenile Justice System</Editable></li>
                      <li><Editable id="message-from-the-vice-chancell.ll-m-delhi-university" as="span">• LL.M. (Delhi University)</Editable></li>
                      <li><Editable id="message-from-the-vice-chancell.teaching-since-1983" as="span">• Teaching since 1983</Editable></li>
                      <li><Editable id="message-from-the-vice-chancell.40-years-in-legal-academia" as="span">• 40+ years in legal academia</Editable></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-green-500" />
                      <Editable id="message-from-the-vice-chancell.key-specializations" as="span">Key Specializations</Editable>
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><Editable id="message-from-the-vice-chancell.juvenile-justice" as="span">• Juvenile Justice</Editable></li>
                      <li><Editable id="message-from-the-vice-chancell.criminal-law-gender-issues" as="span">• Criminal Law & Gender Issues</Editable></li>
                      <li><Editable id="message-from-the-vice-chancell.judicial-training-clinical-education" as="span">• Judicial Training & Clinical Education</Editable></li>
                      <li><Editable id="message-from-the-vice-chancell.restorative-justice" as="span">• Restorative Justice</Editable></li>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4"><Editable id="message-from-the-vice-chancell.a-message-of-vision-and-purpose" as="span">A Message of Vision and Purpose</Editable></h2>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 text-justify">
              <p>
                <Editable id="message-from-the-vice-chancell.dear-members-of-the-legal-fraternity-and-student" as="span">Dear Members of the Legal Fraternity and Student Community,</Editable>
              </p>
              
              <p className='text-justify'>
                <Editable id="message-from-the-vice-chancell.it-gives-me-immense-pleasure-to-welcome-you-to-t" as="span">It gives me immense pleasure to welcome you to the NLUO Centre for Mediation and Negotiation and to introduce the inaugural issue of the NLUO Mediation Chronicle.</Editable>
              </p>
              
              <p className='text-justify'>
                <Editable id="message-from-the-vice-chancell.having-spent-over-four-decades-in-legal-educatio" as="span">Having spent over four decades in legal education, I have witnessed the transformative power of Alternative Dispute Resolution (ADR) firsthand. My journey from early work in juvenile justice to judicial training has reinforced a singular truth: that effective communication and the peaceful resolution of conflicts have the power to heal not just individuals, but entire communities. The establishment of this Chronicle is a testament to our institutional commitment to these values.</Editable>
              </p>
              
              <p className='text-justify'>
                <Editable id="message-from-the-vice-chancell.we-conceived-the-centre-with-the-aspiration-of-b" as="span">We conceived the Centre with the aspiration of becoming India&apos;s premier forum for Mediation and Negotiation. In an increasingly complex legal landscape, we recognize that conventional adversarial approaches must be complemented by collaborative and restorative methods. We are moving towards a future where the focus shifts from winning arguments to healing relationships and finding mutually beneficial solutions.</Editable>
              </p>
              
              <p className='text-justify'>
                <Editable id="message-from-the-vice-chancell.we-take-great-pride-in-the-nluo-mediation-cell-t" as="span">We take great pride in the NLUO Mediation Cell, the first of its kind operated by a higher education institution in India. By providing free mediation services to the community, we are bridging the gap between academic theory and real-world impact. This initiative not only serves the public but ensures that our students—the next generation of legal professionals—are trained in the art of empathy and practical problem-solving.</Editable>
              </p>
              
              <p className='text-justify'>
                <Editable id="message-from-the-vice-chancell.through-the-nluo-mediation-chronicle-we-aim-to-f" as="span">Through the NLUO Mediation Chronicle, we aim to foster a vibrant intellectual community. We envision this publication as a nexus where practitioners, academics, students, and policymakers can engage in meaningful dialogue in the field of Mediation &amp; ADR.</Editable>
              </p>
              
              <p className='text-justify'>
                <Editable id="message-from-the-vice-chancell.as-we-advance-towards-achieving-sdg-16-peace-jus" as="span">As we advance towards achieving SDG 16 (Peace, Justice, and Strong Institutions), I invite you to actively participate in this endeavour. Let us build a repository of knowledge that broadens access to the understanding of dispute resolution.</Editable>
              </p>
              
              <p className='text-justify'>
                <Editable id="message-from-the-vice-chancell.i-extend-my-heartfelt-gratitude-to-our-team-dist" as="span">I extend my heartfelt gratitude to our team, distinguished advisory board members, contributing authors, and readers whose collective support and participation drive this initiative forward. Together, we are not just documenting the evolution of mediation and negotiation, we are actively participating in shaping a future where conflicts are resolved with dignity, understanding, and mutual respect.</Editable>
              </p>
              
              <p className='text-justify'>
                <Editable id="message-from-the-vice-chancell.with-warm-regards-and-best-wishes-for-your-acade" as="span">With warm regards and best wishes for your academic and professional pursuits,</Editable>
              </p>
              
              <div className="mt-8 border-t pt-6 border-slate-200">
                <p className="font-semibold text-gray-900"><Editable id="message-from-the-vice-chancell.prof-ved-kumari-2" as="span">Prof. Ved Kumari</Editable></p>
                <p className="text-blue-600"><Editable id="message-from-the-vice-chancell.vice-chancellor-3" as="span">Vice-Chancellor</Editable></p>
                <p className="text-gray-600"><Editable id="message-from-the-vice-chancell.national-law-university-odisha-2" as="span">National Law University Odisha</Editable></p>
                <p className="text-sm text-gray-500"><Editable id="message-from-the-vice-chancell.former-dean-head-faculty-of-law-university-of-de-2" as="span">Former Dean & Head, Faculty of Law, University of Delhi</Editable></p>
              </div>
            </div>
          </div>

          {/* Distinguished Achievements */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              <Editable id="message-from-the-vice-chancell.distinguished" as="span">Distinguished</Editable> <span className="text-blue-600"><Editable id="message-from-the-vice-chancell.achievements" as="span">Achievements</Editable></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2"><Editable id="message-from-the-vice-chancell.academic-leadership" as="span">Academic Leadership</Editable></h4>
                <p className="text-gray-600 text-sm"><Editable id="message-from-the-vice-chancell.first-woman-academic-to-head-delhi-judicial-acad" as="span">First woman academic to head Delhi Judicial Academy as Chairperson (2009-2011)</Editable></p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2"><Editable id="message-from-the-vice-chancell.international-recognition" as="span">International Recognition</Editable></h4>
                <p className="text-gray-600 text-sm"><Editable id="message-from-the-vice-chancell.fellow-of-commonwealth-judicial-education-instit" as="span">Fellow of Commonwealth Judicial Education Institute, Canada (2010)</Editable></p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2"><Editable id="message-from-the-vice-chancell.commonwealth-fellow" as="span">Commonwealth Fellow</Editable></h4>
                <p className="text-gray-600 text-sm"><Editable id="message-from-the-vice-chancell.commonwealth-fellow-at-warwick-university-uk-199" as="span">Commonwealth Fellow at Warwick University, UK (1998)</Editable></p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2"><Editable id="message-from-the-vice-chancell.fulbright-scholar" as="span">Fulbright Scholar</Editable></h4>
                <p className="text-gray-600 text-sm"><Editable id="message-from-the-vice-chancell.fulbright-fellow-at-vanderbilt-university-usa-19" as="span">Fulbright Fellow at Vanderbilt University, USA (1997)</Editable></p>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2"><Editable id="message-from-the-vice-chancell.juvenile-justice-pioneer" as="span">Juvenile Justice Pioneer</Editable></h4>
                <p className="text-gray-600 text-sm"><Editable id="message-from-the-vice-chancell.author-of-treatise-on-juvenile-justice-act-1986" as="span">Author of "Treatise on Juvenile Justice Act 1986" - referred to as the "Bible" in juvenile justice</Editable></p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2"><Editable id="message-from-the-vice-chancell.innovation-in-training" as="span">Innovation in Training</Editable></h4>
                <p className="text-gray-600 text-sm"><Editable id="message-from-the-vice-chancell.introduced-village-immersion-programme-for-judic" as="span">Introduced Village Immersion Programme for Judicial Officers and E-courses on Judicial Ethics</Editable></p>
              </div>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900"><Editable id="message-from-the-vice-chancell.our-vision" as="span">Our Vision</Editable></h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <Editable id="message-from-the-vice-chancell.to-establish-the-centre-as-a-leading-center-for" as="span">To establish the Centre as a leading center for mediation and negotiation scholarship that influences policy, shapes practice, and educates the next generation of legal professionals with the knowledge and skills needed to navigate an increasingly complex corporate environment.</Editable>
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900"><Editable id="message-from-the-vice-chancell.our-mission" as="span">Our Mission</Editable></h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <Editable id="message-from-the-vice-chancell.to-advance-corporate-law-through-rigorous-resear" as="span">To advance corporate law through rigorous research, innovative teaching, and meaningful engagement with practitioners and policymakers, while maintaining our commitment to accessibility, excellence, and social responsibility.</Editable>
              </p>
            </div>
          </div>

          {/* Key Initiatives */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              <Editable id="message-from-the-vice-chancell.key" as="span">Key</Editable> <span className="text-blue-600"><Editable id="message-from-the-vice-chancell.initiatives" as="span">Initiatives</Editable></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3"><Editable id="message-from-the-vice-chancell.scholarly-publications" as="span">Scholarly Publications</Editable></h3>
                <p className="text-gray-600 text-sm">
                  <Editable id="message-from-the-vice-chancell.regular-publication-of-high-quality-research-art" as="span">Regular publication of high-quality research articles, case commentaries, and policy analyses.</Editable>
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3"><Editable id="message-from-the-vice-chancell.academic-events" as="span">Academic Events</Editable></h3>
                <p className="text-gray-600 text-sm">
                  <Editable id="message-from-the-vice-chancell.conferences-workshops-and-seminars-bringing-toge" as="span">Conferences, workshops, and seminars bringing together leading experts and practitioners.</Editable>
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3"><Editable id="message-from-the-vice-chancell.educational-programs" as="span">Educational Programs</Editable></h3>
                <p className="text-gray-600 text-sm">
                  <Editable id="message-from-the-vice-chancell.specialized-courses-certificate-programs-and-res" as="span">Specialized courses, certificate programs, and research opportunities for students and professionals.</Editable>
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