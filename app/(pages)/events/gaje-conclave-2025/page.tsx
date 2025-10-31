import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, Clock, MapPin, Users, ArrowLeft, Award, BookOpen, Target, Trophy } from 'lucide-react'
import Link from 'next/link'

export default function GajeConclaveDetailPage() {
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
                2nd GAJE-NLUO Mediation and Negotiation Conclave 2025
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                International Conclave in collaboration with Global Alliance for Justice Education (GAJE) and NLUO ADR Board
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  <span>29 Jan - 2 Feb 2025</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  <span>5 Days Program</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                  <span>NLUO Campus & Virtual</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  <span>200+ participants</span>
                </div>
              </div>
            </div>
          </div>

          {/* Background */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Background</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p>
                In order to create awareness and promote the very efficient mode of dispute resolution called Mediation, the NLUO Centre for Mediation and Negotiation organized the "GAJE-NLUO Mediation and Negotiation Conclave 2025", with the generous support of, and sponsored by, Global Alliance for Justice Education (GAJE), in collaboration with NLUO Alternative Dispute Resolution Board.
              </p>
              <p>
                The conclave was conducted from 29th of January 2025 to 2nd of February 2025, at National University Odisha in hybrid mode. The event was honoured by the presence of Sr. Prof. (Dr.) V. K. Ahuja, Director, Indian Law Institute, as the Chief Guest gracing the occasion.
              </p>
              <p>
                This holistically designed Conclave catered to the curiosity of participants from all over the country and the world, mostly students, and enriched their 5-Day experience by enabling them to learn and enhance their skills of mediation and negotiation. The learning techniques included Experiential Learning, Experience Sharing, Brainstorming, Group Discussions, and Lecturing, ensuring both theoretical and practical learning.
              </p>
            </div>
          </section>

          {/* Learning Objectives */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Target className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">CREATE</h3>
                </div>
                <p className="text-gray-600">To create awareness and educate participants about alternative remedies apart from the conventional legal system.</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">ANALYZE</h3>
                </div>
                <p className="text-gray-600">To enable participants to differentiate among various processes of ADR.</p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Award className="h-6 w-6 text-purple-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">UNDERSTAND</h3>
                </div>
                <p className="text-gray-600">To familiarize participants with ADR concepts and legal provisions, emphasizing communication in dispute resolution.</p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Users className="h-6 w-6 text-orange-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">APPLY</h3>
                </div>
                <p className="text-gray-600">To provide practical exposure through simulation exercises and competitions on mediation and negotiation.</p>
              </div>
            </div>
          </section>

          {/* Resource Persons */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Distinguished Resource Persons</h2>
            <div className="space-y-6">
              {[
                {
                  name: "Prof. Ved Kumari",
                  position: "Vice-Chancellor, NLUO | Trained Mediator",
                  description: "Former Dean and Head, Faculty of Law, University of Delhi. Pioneer in juvenile justice research and judicial training reforms."
                },
                {
                  name: "Sr. Prof. (Dr.) V K Ahuja",
                  position: "Director, Indian Law Institute",
                  description: "Senior Professor with 30+ years experience, authored several books on IPR, International Law, and Mediation."
                },
                {
                  name: "Charlie Irvine",
                  position: "Director, University of Strathclyde Mediation Clinic",
                  description: "Qualified solicitor and mediator, started the Mediation Clinic in 2011 providing small claims mediation across Scotland's courts."
                },
                {
                  name: "Ms. Pauline McKay",
                  position: "Mediation Co-ordinator, University of Strathclyde",
                  description: "Full-time Co-ordinator with 30+ years university experience and 5 years as trained mediator."
                },
                {
                  name: "Daniel Brantes Ferreira",
                  position: "CEO, Brazilian Centre for Mediation and Arbitration",
                  description: "Independent arbitrator, CIArb fellow, and Editor-in-Chief of Brazilian Journal of Alternative Dispute Resolution."
                },
                {
                  name: "Prof. (Dr.) Sunanda Bharti",
                  position: "Professor of Law, University of Delhi | Trained Mediator",
                  description: "Certified Professional Mediator from IIAM with pioneering research on legal personality of unborn/foetus."
                }
              ].map((person, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{person.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{person.position}</p>
                  <p className="text-gray-600">{person.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Daily Schedule */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Daily Schedule</h2>
            <div className="space-y-6">
              <div className="bg-linear-to-br from-blue-50/80 to-slate-100/90 rounded-lg shadow-lg p-6 border border-blue-100/40">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Day 1 (January 29, 2025)</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-medium text-gray-900">The Art of Communication</h4>
                    <p className="text-gray-600">Speaker: Prof. Ved Kumari</p>
                    <p className="text-sm text-gray-500">Focus on communication fundamentals, body language, self-esteem, and self-fulfillment</p>
                  </div>
                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-medium text-gray-900">Overview of the Mediation Act, 2023</h4>
                    <p className="text-gray-600">Speaker: Dr. Eluckiaa Asaithambi</p>
                    <p className="text-sm text-gray-500">Comprehensive analysis of the Act's provisions, objectives, and amendments</p>
                  </div>
                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-medium text-gray-900">Formal Inauguration</h4>
                    <p className="text-gray-600">Chief Guest: Sr. Prof. (Dr.) V. K. Ahuja</p>
                    <p className="text-sm text-gray-500">Introduction of GAJE, NLUO ADR Board, and NLUO CMN Board</p>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-green-50/80 to-slate-100/90 rounded-lg shadow-lg p-6 border border-green-100/40">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Day 2 (January 30, 2025)</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-medium text-gray-900">Krishna and Mediation</h4>
                    <p className="text-gray-600">Speaker: Sr. Prof. (Dr.) V. K. Ahuja</p>
                    <p className="text-sm text-gray-500">Ancient roots of mediation traced through Mahabharata and Krishna's role as mediator</p>
                  </div>
                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-medium text-gray-900">The Art of Negotiation</h4>
                    <p className="text-gray-600">Speaker: Prof. (Dr.) Sunanda Bharti</p>
                    <p className="text-sm text-gray-500">Orange Theory, negotiation styles, and hands-on negotiation exercises</p>
                  </div>
                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-medium text-gray-900">Mediation and the Criminal Justice System</h4>
                    <p className="text-gray-600">Speaker: Prof. (Mrs.) Alok Sharma</p>
                    <p className="text-sm text-gray-500">Role of mediation in criminal cases and judicial recognition through landmark cases</p>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-purple-50/80 to-slate-100/90 rounded-lg shadow-lg p-6 border border-purple-100/40">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Day 3 (January 31, 2025)</h3>
                <div className="space-y-3">
                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-medium text-gray-900">International Conference on Dispute Resolution</h4>
                    <p className="text-gray-600">Paper Presentations on Mediation</p>
                    <p className="text-sm text-gray-500">Scholars from prestigious universities presented research papers</p>
                  </div>
                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-medium text-gray-900">Mediation Clinics and Their Working</h4>
                    <p className="text-gray-600">Speakers: Charlie Irvine & Pauline McKay</p>
                    <p className="text-sm text-gray-500">Online workshop on mediation clinic operations and court collaborations</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Day 4 (February 1, 2025)</h3>
                <div className="space-y-3">
                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-medium text-gray-900">Hybrid and Multi-tiered Dispute Resolution</h4>
                    <p className="text-gray-600">Speaker: Daniel Brantes Ferreira</p>
                    <p className="text-sm text-gray-500">Analysis of dispute resolution clauses and international arbitration model clauses</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Competition Results */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2nd GAJE-NLUO National Negotiation Competition 2025</h2>
            <div className="bg-linear-to-r from-yellow-50 to-orange-50 rounded-lg p-8 mb-6">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Competition Results</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                  <h4 className="font-bold text-gray-900 mb-2">🏆 Winners: NALSAR Hyderabad</h4>
                  <p className="text-gray-600">Demonstrated exceptional negotiation prowess in the final round</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-gray-400">
                  <h4 className="font-bold text-gray-900 mb-2">🥈 Runners-up: MNLU Mumbai</h4>
                  <p className="text-gray-600">Achieved multiple accolades:</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Best Negotiating Team in Preliminary Rounds</li>
                    <li>Best Client and Best Counsel</li>
                    <li>Spirit of the Competition Award</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Semi-finalists</h4>
                  <p className="text-gray-600">WBNUJS Kolkata and JGLS also reached the semifinal rounds</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Competition Highlights</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• First-ever offline negotiation competition at NLUO</li>
                <li>• Commercial disputes ranging from motion picture to maritime industry</li>
                <li>• Rigorous preliminary and quarterfinal rounds</li>
                <li>• Distinguished judges: Adv. Surya Prasad Mishra, Dr. Pallab Das, and Ms. Shweta Sahu</li>
                <li>• Participation from leading law schools across the country</li>
              </ul>
            </div>
          </section>

          {/* Learning Outcomes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">KNOWLEDGE</h3>
                <p className="text-gray-600">Understanding of fundamental ADR concepts, identifying dispute limitations in formal judicial systems, and comparison of different dispute resolution methods.</p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">ATTITUDE</h3>
                <p className="text-gray-600">Solving problems and disputes amicably through appropriate ADR mechanisms and encouraging people to use ADR.</p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">SKILL</h3>
                <p className="text-gray-600">Communicating effectively, choosing appropriate negotiation strategies, knowing BATNA, WATNA and MLATNA, and drawing settlement agreements.</p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">ETHICS</h3>
                <p className="text-gray-600">Solving ethical dilemmas while acting as negotiators and mediators, respecting the demeanor of each individual participating in dialogue.</p>
              </div>
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