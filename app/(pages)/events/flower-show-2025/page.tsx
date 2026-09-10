import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, Clock, MapPin, Users, ArrowLeft, Target, Heart, Handshake } from 'lucide-react'
import Link from 'next/link'
import Editable from '@/components/editable/Editable'

export default function FlowerShow2025Page() {
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
            <Editable id="events.flower-show-2025.back-to-events" as="span">Back to Events</Editable>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="bg-linear-to-r from-green-50 to-blue-50 rounded-lg p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <Editable id="events.flower-show-2025.nluo-cmn-stall-at-the-3rd-annual-nluo-flower-sho" as="span">NLUO CMN Stall at the 3rd Annual NLUO Flower Show</Editable>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                <Editable id="events.flower-show-2025.community-outreach-initiative-promoting-mediatio" as="span">Community outreach initiative promoting mediation awareness and services</Editable>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  <span><Editable id="events.flower-show-2025.25-26-january-2025" as="span">25-26 January 2025</Editable></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  <span><Editable id="events.flower-show-2025.full-day-event" as="span">Full Day Event</Editable></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                  <span><Editable id="events.flower-show-2025.nluo-campus" as="span">NLUO Campus</Editable></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  <span><Editable id="events.flower-show-2025.community-engagement" as="span">Community Engagement</Editable></span>
                </div>
              </div>
            </div>
          </div>

          {/* Event Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.flower-show-2025.event-overview" as="span">Event Overview</Editable></h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p>
                <Editable id="events.flower-show-2025.the-national-law-university-odisha-centre-for-me" as="span">The National Law University Odisha Centre for Mediation and Negotiation (NLUO CMN) took an active role in the Third Annual NLUO Flower Show, which took place on January 25 and 26, 2025. At this vibrant event, the Centre set up an engaging awareness stall aimed at educating attendees about mediation and its benefits as a powerful tool for resolving disputes.</Editable>
              </p>
              <p>
                <Editable id="events.flower-show-2025.the-stall-showcased-the-various-services-provide" as="span">The stall showcased the various services provided by the NLUO Mediation Cell, offering visitors a glimpse into how mediation can be a faster, more affordable, and relationship-friendly alternative to traditional court proceedings. The Centre's trained mediators were on hand to interact with students, faculty, and other guests, answering questions and dispelling any myths surrounding the mediation process.</Editable>
              </p>
            </div>
          </section>

          {/* Initiative Objectives */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.flower-show-2025.initiative-objectives" as="span">Initiative Objectives</Editable></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900"><Editable id="events.flower-show-2025.awareness-building" as="span">Awareness Building</Editable></h3>
                </div>
                <p className="text-gray-600">
                  <Editable id="events.flower-show-2025.educate-the-community-about-mediation-services-a" as="span">Educate the community about mediation services and their benefits as an alternative to traditional litigation.</Editable>
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900"><Editable id="events.flower-show-2025.community-service" as="span">Community Service</Editable></h3>
                </div>
                <p className="text-gray-600">
                  <Editable id="events.flower-show-2025.provide-accessible-dispute-resolution-services-t" as="span">Provide accessible dispute resolution services to students, faculty, and local community members.</Editable>
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Handshake className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900"><Editable id="events.flower-show-2025.relationship-building" as="span">Relationship Building</Editable></h3>
                </div>
                <p className="text-gray-600">
                  <Editable id="events.flower-show-2025.foster-dialogue-and-build-trust-within-the-commu" as="span">Foster dialogue and build trust within the community through peaceful conflict resolution approaches.</Editable>
                </p>
              </div>
            </div>
          </section>

          {/* Stall Activities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.flower-show-2025.stall-activities-services" as="span">Stall Activities & Services</Editable></h2>
            <div className="space-y-6">
              <div className="bg-linear-to-r from-blue-50/90 to-slate-100/80 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3"><Editable id="events.flower-show-2025.service-showcasing" as="span">Service Showcasing</Editable></h3>
                <p className="text-gray-600">
                  <Editable id="events.flower-show-2025.the-stall-displayed-comprehensive-information-ab" as="span">The stall displayed comprehensive information about the various services provided by the NLUO Mediation Cell, including free mediation services, online dispute resolution, and multi-lingual mediation sessions.</Editable>
                </p>
              </div>
              
              <div className="bg-linear-to-r from-green-50/90 to-slate-100/80 rounded-lg shadow-md p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3"><Editable id="events.flower-show-2025.expert-interactions" as="span">Expert Interactions</Editable></h3>
                <p className="text-gray-600">
                  <Editable id="events.flower-show-2025.trained-mediators-were-present-throughout-the-ev" as="span">Trained mediators were present throughout the event to interact with visitors, answer questions about the mediation process, and dispel common myths and misconceptions about alternative dispute resolution.</Editable>
                </p>
              </div>
              
              <div className="bg-linear-to-r from-purple-50/90 to-slate-100/80 rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3"><Editable id="events.flower-show-2025.educational-materials" as="span">Educational Materials</Editable></h3>
                <p className="text-gray-600">
                  <Editable id="events.flower-show-2025.visitors-received-informational-brochures-and-ma" as="span">Visitors received informational brochures and materials explaining the benefits of mediation, including how it offers faster, more affordable, and relationship-friendly alternatives to traditional court proceedings.</Editable>
                </p>
              </div>
              
              <div className="bg-linear-to-r from-orange-50/90 to-slate-100/80 rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3"><Editable id="events.flower-show-2025.service-registration" as="span">Service Registration</Editable></h3>
                <p className="text-gray-600">
                  <Editable id="events.flower-show-2025.attendees-had-the-opportunity-to-sign-up-for-med" as="span">Attendees had the opportunity to sign up for mediation services, with many visitors expressing interest in having their disputes resolved through the Centre's mediation programs.</Editable>
                </p>
              </div>
            </div>
          </section>

          {/* Faculty In-charge */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.flower-show-2025.faculty-in-charge" as="span">Faculty In-charge</Editable></h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg"><Editable id="events.flower-show-2025.av" as="span">AV</Editable></span>
                  </div>
                  <h3 className="font-semibold text-gray-900"><Editable id="events.flower-show-2025.dr-akshay-verma" as="span">Dr. Akshay Verma</Editable></h3>
                  <p className="text-gray-600 text-sm"><Editable id="events.flower-show-2025.co-director-nluo-cmn" as="span">Co-Director, NLUO CMN</Editable></p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg"><Editable id="events.flower-show-2025.ak" as="span">AK</Editable></span>
                  </div>
                  <h3 className="font-semibold text-gray-900"><Editable id="events.flower-show-2025.mr-abhay-kumar" as="span">Mr. Abhay Kumar</Editable></h3>
                  <p className="text-gray-600 text-sm"><Editable id="events.flower-show-2025.director" as="span">Director</Editable></p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg"><Editable id="events.flower-show-2025.sp" as="span">SP</Editable></span>
                  </div>
                  <h3 className="font-semibold text-gray-900"><Editable id="events.flower-show-2025.ms-suryasmita-parida" as="span">Ms. Suryasmita Parida</Editable></h3>
                  <p className="text-gray-600 text-sm"><Editable id="events.flower-show-2025.co-director" as="span">Co-Director</Editable></p>
                </div>
              </div>
            </div>
          </section>

          {/* Community Response */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.flower-show-2025.community-response" as="span">Community Response</Editable></h2>
            <div className="bg-green-50 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4"><Editable id="events.flower-show-2025.overwhelmingly-positive-response" as="span">Overwhelmingly Positive Response</Editable></h3>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  <Editable id="events.flower-show-2025.the-response-to-this-initiative-was-overwhelming" as="span">The response to this initiative was overwhelmingly positive, with many visitors participating in thoughtful discussions and some even signing up to have their disputes resolved through mediation. This enthusiastic turnout highlighted a growing interest in mediation as a constructive way to tackle conflicts.</Editable>
                </p>
                <p>
                  <Editable id="events.flower-show-2025.through-this-initiative-the-centre-reinforced-it" as="span">Through this initiative, the Centre reinforced its dedication to promoting a culture of peaceful conflict resolution. It emphasized its vision of mediation not just as a means to settle disputes, but as a practice that strengthens relationships, encourages dialogue, and builds trust within communities.</Editable>
                </p>
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.flower-show-2025.key-achievements" as="span">Key Achievements</Editable></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  <Editable id="events.flower-show-2025.community-engagement-2" as="span">Community Engagement</Editable>
                </h3>
                <p className="text-gray-600"><Editable id="events.flower-show-2025.successfully-engaged-with-diverse-groups-includi" as="span">Successfully engaged with diverse groups including students, faculty, and community members, creating awareness about mediation services.</Editable></p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-green-600" />
                  <Editable id="events.flower-show-2025.service-enrollment" as="span">Service Enrollment</Editable>
                </h3>
                <p className="text-gray-600"><Editable id="events.flower-show-2025.multiple-visitors-signed-up-for-mediation-servic" as="span">Multiple visitors signed up for mediation services, demonstrating practical interest in alternative dispute resolution.</Editable></p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-purple-600" />
                  <Editable id="events.flower-show-2025.myth-dispelling" as="span">Myth Dispelling</Editable>
                </h3>
                <p className="text-gray-600"><Editable id="events.flower-show-2025.successfully-addressed-misconceptions-about-medi" as="span">Successfully addressed misconceptions about mediation and educated the community about its benefits and processes.</Editable></p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Handshake className="h-5 w-5 mr-2 text-orange-600" />
                  <Editable id="events.flower-show-2025.relationship-building-2" as="span">Relationship Building</Editable>
                </h3>
                <p className="text-gray-600"><Editable id="events.flower-show-2025.strengthened-connections-between-the-centre-and" as="span">Strengthened connections between the Centre and the broader community, promoting dialogue and trust-building.</Editable></p>
              </div>
            </div>
          </section>

          {/* Impact & Vision */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="events.flower-show-2025.impact-vision" as="span">Impact & Vision</Editable></h2>
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4"><Editable id="events.flower-show-2025.promoting-peaceful-conflict-resolution" as="span">Promoting Peaceful Conflict Resolution</Editable></h3>
                <p className="text-gray-600 leading-relaxed">
                  <Editable id="events.flower-show-2025.this-initiative-exemplified-nluo-cmn-s-commitmen" as="span">This initiative exemplified NLUO CMN's commitment to fostering a culture of peaceful conflict resolution within the community. By participating in the Flower Show, the Centre demonstrated that mediation is not merely a dispute resolution mechanism, but a transformative practice that:</Editable>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2"><Editable id="events.flower-show-2025.strengthens-relationships" as="span">Strengthens Relationships</Editable></h4>
                    <p className="text-gray-600 text-sm"><Editable id="events.flower-show-2025.focuses-on-healing-and-preserving-relationships" as="span">Focuses on healing and preserving relationships rather than adversarial outcomes</Editable></p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2"><Editable id="events.flower-show-2025.encourages-dialogue" as="span">Encourages Dialogue</Editable></h4>
                    <p className="text-gray-600 text-sm"><Editable id="events.flower-show-2025.promotes-open-communication-and-mutual-understan" as="span">Promotes open communication and mutual understanding between parties</Editable></p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2"><Editable id="events.flower-show-2025.builds-trust" as="span">Builds Trust</Editable></h4>
                    <p className="text-gray-600 text-sm"><Editable id="events.flower-show-2025.creates-sustainable-solutions-that-build-long-te" as="span">Creates sustainable solutions that build long-term trust within communities</Editable></p>
                  </div>
                </div>
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
              <Editable id="events.flower-show-2025.back-to-all-events" as="span">Back to All Events</Editable>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}