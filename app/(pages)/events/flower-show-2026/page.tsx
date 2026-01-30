import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, Clock, MapPin, Users, ArrowLeft, Target, Heart, Handshake, Lightbulb, BookOpen } from 'lucide-react'
import Link from 'next/link'

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
            Back to Events
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                NLUO CMN Stall at 4th NLUO Flower Show
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Community outreach initiative promoting mediation awareness through interactive simulation exercises and cultural collaboration
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  <span>24-25 January 2026</span>
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
                The National Law University Odisha Centre for Mediation and Negotiation (NLUO CMN) actively participated in the Fourth Annual NLUO Flower Show held on 24th and 25th January 2026. As part of the event, the Centre established an awareness stall with the objective of introducing visitors to the concept of mediation and highlighting its importance as an effective method of dispute resolution.
              </p>
              <p>
                Through the stall, the Centre presented the range of services offered by the NLUO Mediation Cell, helping attendees understand how mediation serves as a time-efficient, cost-effective, and amicable alternative to conventional litigation. Trained mediators from the Centre engaged with students, faculty members, and visitors, addressing queries, clarifying misconceptions, and explaining the mediation process in an accessible manner.
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
                  Educate the community about mediation services and their benefits as a time-efficient and cost-effective alternative to traditional litigation.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Community Service</h3>
                </div>
                <p className="text-gray-600">
                  Provide accessible dispute resolution services to students, faculty, and local community members through interactive engagement.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Handshake className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Relationship Building</h3>
                </div>
                <p className="text-gray-600">
                  Foster dialogue and build trust within the community through peaceful conflict resolution approaches and cultural activities.
                </p>
              </div>
            </div>
          </section>

          {/* Stall Activities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Stall Activities & Services</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50/90 to-slate-100/80 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Showcasing</h3>
                <p className="text-gray-600">
                  The Centre presented the range of services offered by the NLUO Mediation Cell, helping attendees understand how mediation serves as a time-efficient, cost-effective, and amicable alternative to conventional litigation.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50/90 to-slate-100/80 rounded-lg shadow-md p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Interactions</h3>
                <p className="text-gray-600">
                  Trained mediators from the Centre engaged with students, faculty members, and visitors throughout the event, addressing queries, clarifying misconceptions, and explaining the mediation process in an accessible manner. Visitors were given the opportunity to interact with mediators who are actively involved in handling cases and facilitating constructive dialogue.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50/90 to-slate-100/80 rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Simulation Exercises</h3>
                <p className="text-gray-600">
                  Attendees were further engaged through simulation exercises, where they were presented with hypothetical situations and invited to actively participate in the mediation process, providing hands-on experience with dispute resolution techniques.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50/90 to-slate-100/80 rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cultural Collaboration with Project Kutumb</h3>
                <p className="text-gray-600">
                  The Centre collaborated with Project Kutumb and conducted interactive activities based on myths and facts related to Odisha's culture, adding a unique cultural dimension to the stall and enriching the overall visitor experience.
                </p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Encouraging Response & Active Participation</h3>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  The initiative received an encouraging response, with several visitors taking part in meaningful conversations. The enthusiastic participation reflected a growing awareness and interest in mediation as a constructive approach to conflict resolution.
                </p>
                <p>
                  Through its presence at the Flower Show, the Centre reaffirmed its commitment to fostering a culture of peaceful dispute resolution and emphasized mediation not merely as a legal tool, but as a practice that promotes dialogue, strengthens relationships, and builds trust within society.
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
                <p className="text-gray-600">Successfully engaged with diverse groups including students, faculty, and community members through meaningful conversations and interactive activities.</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-green-600" />
                  Interactive Learning
                </h3>
                <p className="text-gray-600">Conducted simulation exercises that provided hands-on experience with the mediation process, enhancing understanding through active participation.</p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-purple-600" />
                  Cultural Integration
                </h3>
                <p className="text-gray-600">Successfully collaborated with Project Kutumb to incorporate cultural activities, making the initiative more engaging and culturally relevant.</p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-orange-600" />
                  Myth Clarification
                </h3>
                <p className="text-gray-600">Addressed misconceptions and clarified the mediation process through expert mediator interactions, promoting accurate understanding of dispute resolution.</p>
              </div>
            </div>
          </section>

          {/* Impact & Vision */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact & Vision</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Promoting Peaceful Conflict Resolution Through Dialogue</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Through its presence at the Flower Show, the Centre reaffirmed its commitment to fostering a culture of peaceful dispute resolution and emphasized mediation not merely as a legal tool, but as a practice that promotes dialogue, strengthens relationships, and builds trust within society. The initiative successfully fulfilled its objective of spreading awareness about mediation, highlighting its role in:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Fostering Harmony</h4>
                    <p className="text-gray-600 text-sm">Promoting mediation as a constructive approach to conflict resolution that encourages dialogue and mutual understanding</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Preserving Relationships</h4>
                    <p className="text-gray-600 text-sm">Strengthening relationships rather than creating adversarial outcomes through peaceful dispute resolution</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Affordable Resolution</h4>
                    <p className="text-gray-600 text-sm">Offering time-efficient and cost-effective dispute resolution services accessible to the public</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-8 border-2 border-green-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Mission & Impact</h2>
                <p className="text-gray-600 leading-relaxed">
                  The awareness stall at the Flower Show served as an impactful platform to extend NLUO CMN's mission of promoting peace through dialogue. The enthusiastic participation reflected a growing awareness and interest in mediation as a constructive approach to conflict resolution, successfully fulfilling the objective of spreading awareness about mediation and its vital role in our community.
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
              Back to All Events
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}