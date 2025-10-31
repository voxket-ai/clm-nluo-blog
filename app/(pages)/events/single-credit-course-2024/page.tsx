import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, Clock, MapPin, Users, ArrowLeft, Award, BookOpen, Target } from 'lucide-react'
import Link from 'next/link'

export default function SingleCreditCoursePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/events" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Single Credit Course on "Mediation and Negotiation: Styles, Strategies and Legalities"
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                A comprehensive skill-based program designed to foster experiential learning in Alternative Dispute Resolution
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  <span>7-29 December 2024</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  <span>16 hours (8 sessions)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                  <span>Online Mode</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  <span>66 participants</span>
                </div>
              </div>
            </div>
          </div>

          {/* Background */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Background</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p>
                Recognizing the growing significance of Alternative Dispute Resolution (ADR), the NLUO Centre for Mediation and Negotiation hosted a Single Credit Course on 'Mediation and Negotiation: Styles, Strategies, and Legalities'. The course spanned over the month of December, for 16 hours in online mode, aiming to provide participants with practical skills in negotiation and mediation.
              </p>
              <p>
                This initiative was designed to provide participants with practical skills and theoretical insights into the subject, ensuring a comprehensive understanding of its legal, strategic, and procedural aspects. The single-credit course was a skill-based program designed to foster experiential learning. Participants learned by doing, engaging in interactive methodologies such as case studies, simulations, and role-playing exercises.
              </p>
              <p>
                Led by renowned experts and practitioners, the course offered valuable insights into both foundational principles and advanced techniques. This initiative provided law students, legal professionals, and other participants with an opportunity to enhance their analytical, communication, and conflict-resolution skills, strengthening their expertise in the subject.
              </p>
            </div>
          </section>

          {/* Learning Objectives */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Learning Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Target className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">CREATE</h3>
                </div>
                <p className="text-gray-600">To create awareness and educate the participants about the alternative remedies apart from the conventional legal system.</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">EVALUATE & REMEMBER</h3>
                </div>
                <p className="text-gray-600">To make participants able to interpret the current mediation law in light of the landmark judgments and recent developments.</p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Award className="h-6 w-6 text-purple-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">ANALYZE</h3>
                </div>
                <p className="text-gray-600">To enable participants to differentiate among various processes of ADR.</p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Users className="h-6 w-6 text-orange-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">UNDERSTAND</h3>
                </div>
                <p className="text-gray-600">To familiarize participants and enhance their understanding about the concepts and the legal provisions relating to ADR.</p>
              </div>
            </div>
          </section>

          {/* Instructors */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Instructors</h2>
            <div className="bg-linear-to-br from-blue-50/80 to-slate-100/90 rounded-lg shadow-lg p-6 border border-blue-100/40">
              <div className="flex flex-wrap gap-3">
                {[
                  "Prof. Ved Kumari",
                  "Prof. (Dr.) Sunanda Bharti", 
                  "Dr. Eluckiaa Asaithambi",
                  "Mr. Akash Kumar",
                  "Mr. Abhay Kumar",
                  "Dr. Akshay Verma"
                ].map((instructor, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full font-medium">
                    {instructor}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Course Schedule */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Schedule</h2>
            <div className="space-y-4">
              {[
                {
                  day: "Day 1 (December 07, 2024)",
                  topic: "Alternative Dispute Resolution & Communication",
                  instructor: "Prof. Ved Kumari",
                  description: "Introduction to ADR and its significance, communication in conflict resolution, and the 7Cs of effective communication."
                },
                {
                  day: "Day 2 (December 08, 2024)", 
                  topic: "Types of Conflicts",
                  instructor: "Dr. Akshay Verma",
                  description: "Understanding disputes vs conflicts, root cause analysis, and transforming conflicts into growth opportunities."
                },
                {
                  day: "Day 3 (December 14, 2024)",
                  topic: "Negotiation Strategies",
                  instructor: "Dr. Akshay Verma", 
                  description: "Various negotiation techniques, BATNA, MLATNA, ZOPA concepts, and Nelson Mandela's negotiation strategies."
                },
                {
                  day: "Day 4 (December 15, 2024)",
                  topic: "Negotiation and Mediation Training",
                  instructor: "Prof. (Dr.) Sunanda Bharti",
                  description: "Basic Elementary Skills (BESK), active listening techniques, and the Orange Story exercise."
                },
                {
                  day: "Day 5 (December 21, 2024)",
                  topic: "Interactive Negotiation Session",
                  instructor: "Dr. Akshay Verma",
                  description: "Negotiating Style Profile exercise, role-playing scenarios, and the four stages of negotiation."
                },
                {
                  day: "Day 6 (December 22, 2024)",
                  topic: "Mediation Act 2023 & Stages of Mediation",
                  instructor: "Mr. Akash Kumar & Dr. Eluckiaa Asaithambi",
                  description: "Morning session on Mediation Act 2023, evening session on mediation stages and mediator's opening statement."
                },
                {
                  day: "Day 7 (December 28, 2024)",
                  topic: "New Mediation Act & Pre-litigation Mediation",
                  instructor: "Mr. Akash Kumar & Mr. Abhay Kumar",
                  description: "Act's purpose and confidentiality, pre-litigation mediation under Commercial Court Act 2015."
                },
                {
                  day: "Day 8 (December 29, 2024)",
                  topic: "Criminal Mediation & Settlement Reports",
                  instructor: "Mr. Abhay Kumar & Dr. Eluckiaa Asaithambi",
                  description: "Mediation in criminal matters and drafting effective mediator's settlement reports."
                }
              ].map((session, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{session.day}</h3>
                    <span className="text-blue-600 font-medium">{session.instructor}</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">{session.topic}</h4>
                  <p className="text-gray-600">{session.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Learning Outcomes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">KNOWLEDGE</h3>
                <p className="text-gray-600">Participants understood fundamental ADR concepts, identified dispute limitations in formal judicial systems, and learned to choose appropriate resolution methods.</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">ATTITUDE</h3>
                <p className="text-gray-600">Participants developed skills to solve hypothetical problems amicably through ADR mechanisms and encourage others to use ADR.</p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">SKILL</h3>
                <p className="text-gray-600">Participants enhanced communication, negotiation strategies, and learned to employ best techniques knowing their BATNA, WATNA, and MLATNA.</p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">ETHICS</h3>
                <p className="text-gray-600">Participants learned to solve ethical dilemmas while acting as negotiators and mediators, respecting individual dignity in dialogue.</p>
              </div>
            </div>
          </section>

          {/* Participants' Feedback */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Participants' Feedback</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 leading-relaxed mb-4">
                Participants provided overwhelmingly positive feedback, emphasizing the value of interactive sessions and the integration of key negotiation concepts like BATNA, WATNA, and ZOPA. They particularly appreciated the engaging activities, such as story-weaving exercises and practical role-plays, which helped bridge the gap between theoretical content and real-life applications.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                While the majority found all modules to be both practical and informative, a few suggestions were made for improvement. These included providing more detailed explanations of the negotiation plan, incorporating more practical scenarios into theoretical modules, and including short, impromptu negotiations to further enrich the learning experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Overall, the course was deemed a great success, with participants offering constructive feedback to enhance its future iterations.
              </p>
            </div>
          </section>

          {/* Back to Events */}
          <div className="text-center">
            <Link 
              href="/events" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Events
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}