import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, Clock, MapPin, Users, ArrowLeft, Award, BookOpen, Target, Trophy } from 'lucide-react'
import Link from 'next/link'
import Editable from '@/components/editable/Editable'

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
            <Editable id="events.gaje-conclave-2025.back-to-events" as="span">Back to Events</Editable>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <Editable id="events.gaje-conclave-2025.2nd-gaje-nluo-mediation-and-negotiation-conclave" as="span">2nd GAJE-NLUO Mediation and Negotiation Conclave 2025</Editable>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                <Editable id="events.gaje-conclave-2025.international-conclave-in-collaboration-with-glo" as="span">International Conclave in collaboration with Global Alliance for Justice Education (GAJE) and NLUO ADR Board</Editable>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  <span><Editable id="events.gaje-conclave-2025.29-jan-2-feb-2025" as="span">29 Jan - 2 Feb 2025</Editable></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  <span><Editable id="events.gaje-conclave-2025.5-days-program" as="span">5 Days Program</Editable></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                  <span><Editable id="events.gaje-conclave-2025.nluo-campus-virtual" as="span">NLUO Campus & Virtual</Editable></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  <span><Editable id="events.gaje-conclave-2025.200-participants" as="span">200+ participants</Editable></span>
                </div>
              </div>
            </div>
          </div>

          {/* Background */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.gaje-conclave-2025.background" as="span">Background</Editable></h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p>
                <Editable id="events.gaje-conclave-2025.in-order-to-create-awareness-and-promote-the-ver" as="span">In order to create awareness and promote the very efficient mode of dispute resolution called Mediation, the NLUO Centre for Mediation and Negotiation organized the "GAJE-NLUO Mediation and Negotiation Conclave 2025", with the generous support of, and sponsored by, Global Alliance for Justice Education (GAJE), in collaboration with NLUO Alternative Dispute Resolution Board.</Editable>
              </p>
              <p>
                <Editable id="events.gaje-conclave-2025.the-conclave-was-conducted-from-29th-of-january" as="span">The conclave was conducted from 29th of January 2025 to 2nd of February 2025, at National University Odisha in hybrid mode. The event was honoured by the presence of Sr. Prof. (Dr.) V. K. Ahuja, Director, Indian Law Institute, as the Chief Guest gracing the occasion.</Editable>
              </p>
              <p>
                <Editable id="events.gaje-conclave-2025.this-holistically-designed-conclave-catered-to-t" as="span">This holistically designed Conclave catered to the curiosity of participants from all over the country and the world, mostly students, and enriched their 5-Day experience by enabling them to learn and enhance their skills of mediation and negotiation. The learning techniques included Experiential Learning, Experience Sharing, Brainstorming, Group Discussions, and Lecturing, ensuring both theoretical and practical learning.</Editable>
              </p>
            </div>
          </section>

          {/* Learning Objectives */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.gaje-conclave-2025.learning-objectives" as="span">Learning Objectives</Editable></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Target className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900"><Editable id="events.gaje-conclave-2025.create" as="span">CREATE</Editable></h3>
                </div>
                <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.to-create-awareness-and-educate-participants-abo" as="span">To create awareness and educate participants about alternative remedies apart from the conventional legal system.</Editable></p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="font-semibold text-gray-900"><Editable id="events.gaje-conclave-2025.analyze" as="span">ANALYZE</Editable></h3>
                </div>
                <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.to-enable-participants-to-differentiate-among-va" as="span">To enable participants to differentiate among various processes of ADR.</Editable></p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Award className="h-6 w-6 text-purple-600 mr-2" />
                  <h3 className="font-semibold text-gray-900"><Editable id="events.gaje-conclave-2025.understand" as="span">UNDERSTAND</Editable></h3>
                </div>
                <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.to-familiarize-participants-with-adr-concepts-an" as="span">To familiarize participants with ADR concepts and legal provisions, emphasizing communication in dispute resolution.</Editable></p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Users className="h-6 w-6 text-orange-600 mr-2" />
                  <h3 className="font-semibold text-gray-900"><Editable id="events.gaje-conclave-2025.apply" as="span">APPLY</Editable></h3>
                </div>
                <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.to-provide-practical-exposure-through-simulation" as="span">To provide practical exposure through simulation exercises and competitions on mediation and negotiation.</Editable></p>
              </div>
            </div>
          </section>

          {/* Resource Persons */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.gaje-conclave-2025.distinguished-resource-persons" as="span">Distinguished Resource Persons</Editable></h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.gaje-conclave-2025.daily-schedule" as="span">Daily Schedule</Editable></h2>
            <div className="space-y-6">
              <div className="bg-linear-to-br from-blue-50/80 to-slate-100/90 rounded-lg shadow-lg p-6 border border-blue-100/40">
                <h3 className="text-xl font-semibold text-gray-900 mb-4"><Editable id="events.gaje-conclave-2025.day-1-january-29-2025" as="span">Day 1 (January 29, 2025)</Editable></h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-medium text-gray-900"><Editable id="events.gaje-conclave-2025.the-art-of-communication" as="span">The Art of Communication</Editable></h4>
                    <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.speaker-prof-ved-kumari" as="span">Speaker: Prof. Ved Kumari</Editable></p>
                    <p className="text-sm text-gray-500"><Editable id="events.gaje-conclave-2025.focus-on-communication-fundamentals-body-languag" as="span">Focus on communication fundamentals, body language, self-esteem, and self-fulfillment</Editable></p>
                  </div>
                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-medium text-gray-900"><Editable id="events.gaje-conclave-2025.overview-of-the-mediation-act-2023" as="span">Overview of the Mediation Act, 2023</Editable></h4>
                    <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.speaker-dr-eluckiaa-asaithambi" as="span">Speaker: Dr. Eluckiaa Asaithambi</Editable></p>
                    <p className="text-sm text-gray-500"><Editable id="events.gaje-conclave-2025.comprehensive-analysis-of-the-act-s-provisions-o" as="span">Comprehensive analysis of the Act's provisions, objectives, and amendments</Editable></p>
                  </div>
                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-medium text-gray-900"><Editable id="events.gaje-conclave-2025.formal-inauguration" as="span">Formal Inauguration</Editable></h4>
                    <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.chief-guest-sr-prof-dr-v-k-ahuja" as="span">Chief Guest: Sr. Prof. (Dr.) V. K. Ahuja</Editable></p>
                    <p className="text-sm text-gray-500"><Editable id="events.gaje-conclave-2025.introduction-of-gaje-nluo-adr-board-and-nluo-cmn" as="span">Introduction of GAJE, NLUO ADR Board, and NLUO CMN Board</Editable></p>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-green-50/80 to-slate-100/90 rounded-lg shadow-lg p-6 border border-green-100/40">
                <h3 className="text-xl font-semibold text-gray-900 mb-4"><Editable id="events.gaje-conclave-2025.day-2-january-30-2025" as="span">Day 2 (January 30, 2025)</Editable></h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-medium text-gray-900"><Editable id="events.gaje-conclave-2025.krishna-and-mediation" as="span">Krishna and Mediation</Editable></h4>
                    <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.speaker-sr-prof-dr-v-k-ahuja" as="span">Speaker: Sr. Prof. (Dr.) V. K. Ahuja</Editable></p>
                    <p className="text-sm text-gray-500"><Editable id="events.gaje-conclave-2025.ancient-roots-of-mediation-traced-through-mahabh" as="span">Ancient roots of mediation traced through Mahabharata and Krishna's role as mediator</Editable></p>
                  </div>
                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-medium text-gray-900"><Editable id="events.gaje-conclave-2025.the-art-of-negotiation" as="span">The Art of Negotiation</Editable></h4>
                    <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.speaker-prof-dr-sunanda-bharti" as="span">Speaker: Prof. (Dr.) Sunanda Bharti</Editable></p>
                    <p className="text-sm text-gray-500"><Editable id="events.gaje-conclave-2025.orange-theory-negotiation-styles-and-hands-on-ne" as="span">Orange Theory, negotiation styles, and hands-on negotiation exercises</Editable></p>
                  </div>
                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-medium text-gray-900"><Editable id="events.gaje-conclave-2025.mediation-and-the-criminal-justice-system" as="span">Mediation and the Criminal Justice System</Editable></h4>
                    <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.speaker-prof-mrs-alok-sharma" as="span">Speaker: Prof. (Mrs.) Alok Sharma</Editable></p>
                    <p className="text-sm text-gray-500"><Editable id="events.gaje-conclave-2025.role-of-mediation-in-criminal-cases-and-judicial" as="span">Role of mediation in criminal cases and judicial recognition through landmark cases</Editable></p>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-purple-50/80 to-slate-100/90 rounded-lg shadow-lg p-6 border border-purple-100/40">
                <h3 className="text-xl font-semibold text-gray-900 mb-4"><Editable id="events.gaje-conclave-2025.day-3-january-31-2025" as="span">Day 3 (January 31, 2025)</Editable></h3>
                <div className="space-y-3">
                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-medium text-gray-900"><Editable id="events.gaje-conclave-2025.international-conference-on-dispute-resolution" as="span">International Conference on Dispute Resolution</Editable></h4>
                    <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.paper-presentations-on-mediation" as="span">Paper Presentations on Mediation</Editable></p>
                    <p className="text-sm text-gray-500"><Editable id="events.gaje-conclave-2025.scholars-from-prestigious-universities-presented" as="span">Scholars from prestigious universities presented research papers</Editable></p>
                  </div>
                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-medium text-gray-900"><Editable id="events.gaje-conclave-2025.mediation-clinics-and-their-working" as="span">Mediation Clinics and Their Working</Editable></h4>
                    <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.speakers-charlie-irvine-pauline-mckay" as="span">Speakers: Charlie Irvine & Pauline McKay</Editable></p>
                    <p className="text-sm text-gray-500"><Editable id="events.gaje-conclave-2025.online-workshop-on-mediation-clinic-operations-a" as="span">Online workshop on mediation clinic operations and court collaborations</Editable></p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4"><Editable id="events.gaje-conclave-2025.day-4-february-1-2025" as="span">Day 4 (February 1, 2025)</Editable></h3>
                <div className="space-y-3">
                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-medium text-gray-900"><Editable id="events.gaje-conclave-2025.hybrid-and-multi-tiered-dispute-resolution" as="span">Hybrid and Multi-tiered Dispute Resolution</Editable></h4>
                    <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.speaker-daniel-brantes-ferreira" as="span">Speaker: Daniel Brantes Ferreira</Editable></p>
                    <p className="text-sm text-gray-500"><Editable id="events.gaje-conclave-2025.analysis-of-dispute-resolution-clauses-and-inter" as="span">Analysis of dispute resolution clauses and international arbitration model clauses</Editable></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Competition Results */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.gaje-conclave-2025.2nd-gaje-nluo-national-negotiation-competition-2" as="span">2nd GAJE-NLUO National Negotiation Competition 2025</Editable></h2>
            <div className="bg-linear-to-r from-yellow-50 to-orange-50 rounded-lg p-8 mb-6">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900"><Editable id="events.gaje-conclave-2025.competition-results" as="span">Competition Results</Editable></h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                  <h4 className="font-bold text-gray-900 mb-2">🏆 Winners: NALSAR Hyderabad</h4>
                  <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.demonstrated-exceptional-negotiation-prowess-in" as="span">Demonstrated exceptional negotiation prowess in the final round</Editable></p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-gray-400">
                  <h4 className="font-bold text-gray-900 mb-2">🥈 Runners-up: MNLU Mumbai</h4>
                  <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.achieved-multiple-accolades" as="span">Achieved multiple accolades:</Editable></p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li><Editable id="events.gaje-conclave-2025.best-negotiating-team-in-preliminary-rounds" as="span">Best Negotiating Team in Preliminary Rounds</Editable></li>
                    <li><Editable id="events.gaje-conclave-2025.best-client-and-best-counsel" as="span">Best Client and Best Counsel</Editable></li>
                    <li><Editable id="events.gaje-conclave-2025.spirit-of-the-competition-award" as="span">Spirit of the Competition Award</Editable></li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2"><Editable id="events.gaje-conclave-2025.semi-finalists" as="span">Semi-finalists</Editable></h4>
                  <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.wbnujs-kolkata-and-jgls-also-reached-the-semifin" as="span">WBNUJS Kolkata and JGLS also reached the semifinal rounds</Editable></p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3"><Editable id="events.gaje-conclave-2025.competition-highlights" as="span">Competition Highlights</Editable></h4>
              <ul className="space-y-2 text-gray-600">
                <li><Editable id="events.gaje-conclave-2025.first-ever-offline-negotiation-competition-at-nl" as="span">• First-ever offline negotiation competition at NLUO</Editable></li>
                <li><Editable id="events.gaje-conclave-2025.commercial-disputes-ranging-from-motion-picture" as="span">• Commercial disputes ranging from motion picture to maritime industry</Editable></li>
                <li><Editable id="events.gaje-conclave-2025.rigorous-preliminary-and-quarterfinal-rounds" as="span">• Rigorous preliminary and quarterfinal rounds</Editable></li>
                <li><Editable id="events.gaje-conclave-2025.distinguished-judges-adv-surya-prasad-mishra-dr" as="span">• Distinguished judges: Adv. Surya Prasad Mishra, Dr. Pallab Das, and Ms. Shweta Sahu</Editable></li>
                <li><Editable id="events.gaje-conclave-2025.participation-from-leading-law-schools-across-th" as="span">• Participation from leading law schools across the country</Editable></li>
              </ul>
            </div>
          </section>

          {/* Learning Outcomes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.gaje-conclave-2025.learning-outcomes" as="span">Learning Outcomes</Editable></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3"><Editable id="events.gaje-conclave-2025.knowledge" as="span">KNOWLEDGE</Editable></h3>
                <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.understanding-of-fundamental-adr-concepts-identi" as="span">Understanding of fundamental ADR concepts, identifying dispute limitations in formal judicial systems, and comparison of different dispute resolution methods.</Editable></p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3"><Editable id="events.gaje-conclave-2025.attitude" as="span">ATTITUDE</Editable></h3>
                <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.solving-problems-and-disputes-amicably-through-a" as="span">Solving problems and disputes amicably through appropriate ADR mechanisms and encouraging people to use ADR.</Editable></p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3"><Editable id="events.gaje-conclave-2025.skill" as="span">SKILL</Editable></h3>
                <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.communicating-effectively-choosing-appropriate-n" as="span">Communicating effectively, choosing appropriate negotiation strategies, knowing BATNA, WATNA and MLATNA, and drawing settlement agreements.</Editable></p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3"><Editable id="events.gaje-conclave-2025.ethics" as="span">ETHICS</Editable></h3>
                <p className="text-gray-600"><Editable id="events.gaje-conclave-2025.solving-ethical-dilemmas-while-acting-as-negotia" as="span">Solving ethical dilemmas while acting as negotiators and mediators, respecting the demeanor of each individual participating in dialogue.</Editable></p>
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
              <Editable id="events.gaje-conclave-2025.back-to-all-events" as="span">Back to All Events</Editable>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}