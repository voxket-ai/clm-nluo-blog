import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, Clock, MapPin, Users, ArrowLeft, Target, Heart, Handshake, Lightbulb, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Editable from '@/components/editable/Editable'

export default function FlowerShow2026Page() {
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
            <Editable id="events.flower-show-2026.back-to-events" as="span">Back to Events</Editable>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <Editable id="events.flower-show-2026.nluo-cmn-stall-at-4th-nluo-flower-show" as="span">NLUO CMN Stall at 4th NLUO Flower Show</Editable>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                <Editable id="events.flower-show-2026.community-outreach-initiative-promoting-mediatio" as="span">Community outreach initiative promoting mediation awareness through interactive simulation exercises and cultural collaboration</Editable>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  <span><Editable id="events.flower-show-2026.24-25-january-2026" as="span">24-25 January 2026</Editable></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  <span><Editable id="events.flower-show-2026.full-day-event" as="span">Full Day Event</Editable></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                  <span><Editable id="events.flower-show-2026.nluo-campus" as="span">NLUO Campus</Editable></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  <span><Editable id="events.flower-show-2026.community-engagement" as="span">Community Engagement</Editable></span>
                </div>
              </div>
            </div>
          </div>

          {/* Event Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.flower-show-2026.event-overview" as="span">Event Overview</Editable></h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p>
                <Editable id="events.flower-show-2026.the-national-law-university-odisha-centre-for-me" as="span">The National Law University Odisha Centre for Mediation and Negotiation (NLUO CMN) actively participated in the Fourth Annual NLUO Flower Show held on 24th and 25th January 2026. As part of the event, the Centre established an awareness stall with the objective of introducing visitors to the concept of mediation and highlighting its importance as an effective method of dispute resolution.</Editable>
              </p>
              <p>
                <Editable id="events.flower-show-2026.through-the-stall-the-centre-presented-the-range" as="span">Through the stall, the Centre presented the range of services offered by the NLUO Mediation Cell, helping attendees understand how mediation serves as a time-efficient, cost-effective, and amicable alternative to conventional litigation. Trained mediators from the Centre engaged with students, faculty members, and visitors, addressing queries, clarifying misconceptions, and explaining the mediation process in an accessible manner.</Editable>
              </p>
            </div>
          </section>

          {/* Initiative Objectives */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.flower-show-2026.initiative-objectives" as="span">Initiative Objectives</Editable></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900"><Editable id="events.flower-show-2026.awareness-building" as="span">Awareness Building</Editable></h3>
                </div>
                <p className="text-gray-600">
                  <Editable id="events.flower-show-2026.educate-the-community-about-mediation-services-a" as="span">Educate the community about mediation services and their benefits as a time-efficient and cost-effective alternative to traditional litigation.</Editable>
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900"><Editable id="events.flower-show-2026.community-service" as="span">Community Service</Editable></h3>
                </div>
                <p className="text-gray-600">
                  <Editable id="events.flower-show-2026.provide-accessible-dispute-resolution-services-t" as="span">Provide accessible dispute resolution services to students, faculty, and local community members through interactive engagement.</Editable>
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Handshake className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900"><Editable id="events.flower-show-2026.relationship-building" as="span">Relationship Building</Editable></h3>
                </div>
                <p className="text-gray-600">
                  <Editable id="events.flower-show-2026.foster-dialogue-and-build-trust-within-the-commu" as="span">Foster dialogue and build trust within the community through peaceful conflict resolution approaches and cultural activities.</Editable>
                </p>
              </div>
            </div>
          </section>

          {/* Stall Activities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.flower-show-2026.stall-activities-services" as="span">Stall Activities & Services</Editable></h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50/90 to-slate-100/80 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3"><Editable id="events.flower-show-2026.service-showcasing" as="span">Service Showcasing</Editable></h3>
                <p className="text-gray-600">
                  <Editable id="events.flower-show-2026.the-centre-presented-the-range-of-services-offer" as="span">The Centre presented the range of services offered by the NLUO Mediation Cell, helping attendees understand how mediation serves as a time-efficient, cost-effective, and amicable alternative to conventional litigation.</Editable>
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50/90 to-slate-100/80 rounded-lg shadow-md p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3"><Editable id="events.flower-show-2026.expert-interactions" as="span">Expert Interactions</Editable></h3>
                <p className="text-gray-600">
                  <Editable id="events.flower-show-2026.trained-mediators-from-the-centre-engaged-with-s" as="span">Trained mediators from the Centre engaged with students, faculty members, and visitors throughout the event, addressing queries, clarifying misconceptions, and explaining the mediation process in an accessible manner. Visitors were given the opportunity to interact with mediators who are actively involved in handling cases and facilitating constructive dialogue.</Editable>
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50/90 to-slate-100/80 rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3"><Editable id="events.flower-show-2026.simulation-exercises" as="span">Simulation Exercises</Editable></h3>
                <p className="text-gray-600">
                  <Editable id="events.flower-show-2026.attendees-were-further-engaged-through-simulatio" as="span">Attendees were further engaged through simulation exercises, where they were presented with hypothetical situations and invited to actively participate in the mediation process, providing hands-on experience with dispute resolution techniques.</Editable>
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50/90 to-slate-100/80 rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3"><Editable id="events.flower-show-2026.cultural-collaboration-with-project-kutumb" as="span">Cultural Collaboration with Project Kutumb</Editable></h3>
                <p className="text-gray-600">
                  <Editable id="events.flower-show-2026.the-centre-collaborated-with-project-kutumb-and" as="span">The Centre collaborated with Project Kutumb and conducted interactive activities based on myths and facts related to Odisha's culture, adding a unique cultural dimension to the stall and enriching the overall visitor experience.</Editable>
                </p>
              </div>
            </div>
          </section>

          {/* Community Response */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.flower-show-2026.community-response" as="span">Community Response</Editable></h2>
            <div className="bg-green-50 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4"><Editable id="events.flower-show-2026.encouraging-response-active-participation" as="span">Encouraging Response & Active Participation</Editable></h3>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  <Editable id="events.flower-show-2026.the-initiative-received-an-encouraging-response" as="span">The initiative received an encouraging response, with several visitors taking part in meaningful conversations. The enthusiastic participation reflected a growing awareness and interest in mediation as a constructive approach to conflict resolution.</Editable>
                </p>
                <p>
                  <Editable id="events.flower-show-2026.through-its-presence-at-the-flower-show-the-cent" as="span">Through its presence at the Flower Show, the Centre reaffirmed its commitment to fostering a culture of peaceful dispute resolution and emphasized mediation not merely as a legal tool, but as a practice that promotes dialogue, strengthens relationships, and builds trust within society.</Editable>
                </p>
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.flower-show-2026.key-achievements" as="span">Key Achievements</Editable></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  <Editable id="events.flower-show-2026.community-engagement-2" as="span">Community Engagement</Editable>
                </h3>
                <p className="text-gray-600"><Editable id="events.flower-show-2026.successfully-engaged-with-diverse-groups-includi" as="span">Successfully engaged with diverse groups including students, faculty, and community members through meaningful conversations and interactive activities.</Editable></p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-green-600" />
                  <Editable id="events.flower-show-2026.interactive-learning" as="span">Interactive Learning</Editable>
                </h3>
                <p className="text-gray-600"><Editable id="events.flower-show-2026.conducted-simulation-exercises-that-provided-han" as="span">Conducted simulation exercises that provided hands-on experience with the mediation process, enhancing understanding through active participation.</Editable></p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-purple-600" />
                  <Editable id="events.flower-show-2026.cultural-integration" as="span">Cultural Integration</Editable>
                </h3>
                <p className="text-gray-600"><Editable id="events.flower-show-2026.successfully-collaborated-with-project-kutumb-to" as="span">Successfully collaborated with Project Kutumb to incorporate cultural activities, making the initiative more engaging and culturally relevant.</Editable></p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-orange-600" />
                  <Editable id="events.flower-show-2026.myth-clarification" as="span">Myth Clarification</Editable>
                </h3>
                <p className="text-gray-600"><Editable id="events.flower-show-2026.addressed-misconceptions-and-clarified-the-media" as="span">Addressed misconceptions and clarified the mediation process through expert mediator interactions, promoting accurate understanding of dispute resolution.</Editable></p>
              </div>
            </div>
          </section>

          {/* Impact & Vision */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.flower-show-2026.impact-vision" as="span">Impact & Vision</Editable></h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4"><Editable id="events.flower-show-2026.promoting-peaceful-conflict-resolution-through-d" as="span">Promoting Peaceful Conflict Resolution Through Dialogue</Editable></h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <Editable id="events.flower-show-2026.through-its-presence-at-the-flower-show-the-cent-2" as="span">Through its presence at the Flower Show, the Centre reaffirmed its commitment to fostering a culture of peaceful dispute resolution and emphasized mediation not merely as a legal tool, but as a practice that promotes dialogue, strengthens relationships, and builds trust within society. The initiative successfully fulfilled its objective of spreading awareness about mediation, highlighting its role in:</Editable>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2"><Editable id="events.flower-show-2026.fostering-harmony" as="span">Fostering Harmony</Editable></h4>
                    <p className="text-gray-600 text-sm"><Editable id="events.flower-show-2026.promoting-mediation-as-a-constructive-approach-t" as="span">Promoting mediation as a constructive approach to conflict resolution that encourages dialogue and mutual understanding</Editable></p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2"><Editable id="events.flower-show-2026.preserving-relationships" as="span">Preserving Relationships</Editable></h4>
                    <p className="text-gray-600 text-sm"><Editable id="events.flower-show-2026.strengthening-relationships-rather-than-creating" as="span">Strengthening relationships rather than creating adversarial outcomes through peaceful dispute resolution</Editable></p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2"><Editable id="events.flower-show-2026.affordable-resolution" as="span">Affordable Resolution</Editable></h4>
                    <p className="text-gray-600 text-sm"><Editable id="events.flower-show-2026.offering-time-efficient-and-cost-effective-dispu" as="span">Offering time-efficient and cost-effective dispute resolution services accessible to the public</Editable></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-8 border-2 border-green-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4"><Editable id="events.flower-show-2026.mission-impact" as="span">Mission & Impact</Editable></h2>
                <p className="text-gray-600 leading-relaxed">
                  <Editable id="events.flower-show-2026.the-awareness-stall-at-the-flower-show-served-as" as="span">The awareness stall at the Flower Show served as an impactful platform to extend NLUO CMN's mission of promoting peace through dialogue. The enthusiastic participation reflected a growing awareness and interest in mediation as a constructive approach to conflict resolution, successfully fulfilling the objective of spreading awareness about mediation and its vital role in our community.</Editable>
                </p>
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
              <Editable id="events.flower-show-2026.back-to-all-events" as="span">Back to All Events</Editable>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}