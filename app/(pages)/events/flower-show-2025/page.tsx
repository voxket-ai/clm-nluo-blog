import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, Clock, MapPin, Users, ArrowLeft, Target, Heart, Handshake } from 'lucide-react'
import Link from 'next/link'

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
            Back to Events
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="bg-linear-to-r from-green-50 to-blue-50 rounded-lg p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                NLUO CMN Stall at the 3rd Annual NLUO Flower Show
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Community outreach initiative promoting mediation awareness and services
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  <span>25-26 January 2025</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-blue-500" />
                  <span>Full Day Event</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                  <span>NLUO Campus</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2 text-blue-500" />
                  <span>Community Engagement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Event Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p>
                The National Law University Odisha Centre for Mediation and Negotiation (NLUO CMN) took an active role in the Third Annual NLUO Flower Show, which took place on January 25 and 26, 2025. At this vibrant event, the Centre set up an engaging awareness stall aimed at educating attendees about mediation and its benefits as a powerful tool for resolving disputes.
              </p>
              <p>
                The stall showcased the various services provided by the NLUO Mediation Cell, offering visitors a glimpse into how mediation can be a faster, more affordable, and relationship-friendly alternative to traditional court proceedings. The Centre's trained mediators were on hand to interact with students, faculty, and other guests, answering questions and dispelling any myths surrounding the mediation process.
              </p>
            </div>
          </section>

          {/* Initiative Objectives */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Initiative Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Awareness Building</h3>
                </div>
                <p className="text-gray-600">
                  Educate the community about mediation services and their benefits as an alternative to traditional litigation.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Community Service</h3>
                </div>
                <p className="text-gray-600">
                  Provide accessible dispute resolution services to students, faculty, and local community members.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Handshake className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Relationship Building</h3>
                </div>
                <p className="text-gray-600">
                  Foster dialogue and build trust within the community through peaceful conflict resolution approaches.
                </p>
              </div>
            </div>
          </section>

          {/* Stall Activities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Stall Activities & Services</h2>
            <div className="space-y-6">
              <div className="bg-linear-to-r from-blue-50/90 to-slate-100/80 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Showcasing</h3>
                <p className="text-gray-600">
                  The stall displayed comprehensive information about the various services provided by the NLUO Mediation Cell, including free mediation services, online dispute resolution, and multi-lingual mediation sessions.
                </p>
              </div>
              
              <div className="bg-linear-to-r from-green-50/90 to-slate-100/80 rounded-lg shadow-md p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Interactions</h3>
                <p className="text-gray-600">
                  Trained mediators were present throughout the event to interact with visitors, answer questions about the mediation process, and dispel common myths and misconceptions about alternative dispute resolution.
                </p>
              </div>
              
              <div className="bg-linear-to-r from-purple-50/90 to-slate-100/80 rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Educational Materials</h3>
                <p className="text-gray-600">
                  Visitors received informational brochures and materials explaining the benefits of mediation, including how it offers faster, more affordable, and relationship-friendly alternatives to traditional court proceedings.
                </p>
              </div>
              
              <div className="bg-linear-to-r from-orange-50/90 to-slate-100/80 rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Registration</h3>
                <p className="text-gray-600">
                  Attendees had the opportunity to sign up for mediation services, with many visitors expressing interest in having their disputes resolved through the Centre's mediation programs.
                </p>
              </div>
            </div>
          </section>

          {/* Faculty In-charge */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Faculty In-charge</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">AV</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Dr. Akshay Verma</h3>
                  <p className="text-gray-600 text-sm">Co-Director, NLUO CMN</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">AK</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Mr. Abhay Kumar</h3>
                  <p className="text-gray-600 text-sm">Centre Head</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">SP</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Ms. Suryasmita Parida</h3>
                  <p className="text-gray-600 text-sm">Centre Head</p>
                </div>
              </div>
            </div>
          </section>

          {/* Community Response */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Community Response</h2>
            <div className="bg-green-50 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Overwhelmingly Positive Response</h3>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  The response to this initiative was overwhelmingly positive, with many visitors participating in thoughtful discussions and some even signing up to have their disputes resolved through mediation. This enthusiastic turnout highlighted a growing interest in mediation as a constructive way to tackle conflicts.
                </p>
                <p>
                  Through this initiative, the Centre reinforced its dedication to promoting a culture of peaceful conflict resolution. It emphasized its vision of mediation not just as a means to settle disputes, but as a practice that strengthens relationships, encourages dialogue, and builds trust within communities.
                </p>
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  Community Engagement
                </h3>
                <p className="text-gray-600">Successfully engaged with diverse groups including students, faculty, and community members, creating awareness about mediation services.</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-green-600" />
                  Service Enrollment
                </h3>
                <p className="text-gray-600">Multiple visitors signed up for mediation services, demonstrating practical interest in alternative dispute resolution.</p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-purple-600" />
                  Myth Dispelling
                </h3>
                <p className="text-gray-600">Successfully addressed misconceptions about mediation and educated the community about its benefits and processes.</p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Handshake className="h-5 w-5 mr-2 text-orange-600" />
                  Relationship Building
                </h3>
                <p className="text-gray-600">Strengthened connections between the Centre and the broader community, promoting dialogue and trust-building.</p>
              </div>
            </div>
          </section>

          {/* Impact & Vision */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact & Vision</h2>
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Promoting Peaceful Conflict Resolution</h3>
                <p className="text-gray-600 leading-relaxed">
                  This initiative exemplified NLUO CMN's commitment to fostering a culture of peaceful conflict resolution within the community. By participating in the Flower Show, the Centre demonstrated that mediation is not merely a dispute resolution mechanism, but a transformative practice that:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Strengthens Relationships</h4>
                    <p className="text-gray-600 text-sm">Focuses on healing and preserving relationships rather than adversarial outcomes</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Encourages Dialogue</h4>
                    <p className="text-gray-600 text-sm">Promotes open communication and mutual understanding between parties</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Builds Trust</h4>
                    <p className="text-gray-600 text-sm">Creates sustainable solutions that build long-term trust within communities</p>
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
              Back to All Events
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}