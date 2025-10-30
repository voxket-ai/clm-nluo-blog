import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Upcoming events data
const upcomingEvents = [
  {
    id: 1,
    title: "3rd GAJE-NLUO Mediation and Negotiation Conclave",
    subtitle: "International Conclave",
    date: "TBA 2026",
    time: "5 Days Program",
    location: "NLUO Campus & Virtual",
    description: "The third edition of our flagship event in collaboration with Global Alliance for Justice Education (GAJE), featuring workshops, conferences, and negotiation competitions.",
    speakers: ["International ADR Experts", "Leading Mediators", "Academic Scholars"],
    registrationLink: "#",
    category: "Conclave",
    status: "Coming Soon"
  }
]

const pastEvents = [
  {
    id: 2,
    title: "2nd GAJE-NLUO Mediation and Negotiation Conclave",
    subtitle: "International Conclave",
    date: "29th January – 2nd February, 2025",
    time: "5 Days Program",
    location: "NLUO Campus & Virtual",
    description: "The second GAJE-NLUO Mediation and Negotiation Conclave featured expert-led workshops on mediation and negotiation, an International Conference on Dispute Resolution Mechanisms, and the 2nd NLUO National Negotiation Competition.",
    speakers: ["International ADR Experts", "Leading Mediators"],
    category: "Conclave",
    attendees: "250+ participants"
  },
  {
    id: 3,
    title: "NLUO CMN Stall at 3rd NLUO Flower Show",
    subtitle: "Outreach Program",
    date: "25th January - 26th January, 2025",
    time: "Full Day",
    location: "NLUO Campus",
    description: "The Centre participated in the third annual Flower Fest at NLUO by setting up an awareness stall showcasing mediation services and introducing skilled mediators to the community.",
    category: "Outreach",
    attendees: "Community engagement"
  },
  {
    id: 4,
    title: "Single Credit Course: Mediation and Negotiation",
    subtitle: "Educational Program",
    date: "7th December – 29th December, 2024",
    time: "16 hours across 8 sessions",
    location: "Online Mode",
    description: "Successfully conducted course blending theoretical insights with experiential learning through simulations, case studies, and role-plays on ADR mechanisms, communication techniques, and the Mediation Act 2023.",
    category: "Course",
    attendees: "43 students"
  },
  {
    id: 5,
    title: "4th Annual Mediation Clinic Conference",
    subtitle: "International Conference",
    date: "21st March 2024",
    time: "Full Day",
    location: "University of Strathclyde, Glasgow",
    description: "NLUO CMN co-director represented the centre in the conference on 'Learning Through Practice: Mediation Clinics and Mediator Education', highlighting national and international achievements.",
    category: "Conference",
    attendees: "Global participants"
  },
  {
    id: 6,
    title: "Single Credit Course: Negotiation and Mediation Training",
    subtitle: "Joint Educational Program",
    date: "24th February – 25th February 2024",
    time: "16 hours over 2 days",
    location: "NLUO Campus",
    description: "Joint course by CPPLGG and NLUO CMN in response to the Mediation Act 2023, providing practical skills in negotiation and mediation through theoretical discussions and role-play exercises.",
    category: "Course",
    attendees: "Multiple participants"
  },
  {
    id: 7,
    title: "NLUO CMN Stall at 2nd NLUO Flower Show",
    subtitle: "Outreach Program",
    date: "26th January - 27th January 2024",
    time: "Full Day",
    location: "NLUO Campus",
    description: "Second annual flower festival awareness stall promoting alternative dispute resolution programs and highlighting benefits of mediation over litigation.",
    category: "Outreach",
    attendees: "Community engagement"
  },
  {
    id: 8,
    title: "1st GAJE-NLUO Mediation and Negotiation Conclave",
    subtitle: "Inaugural Conclave",
    date: "9th August – 13th August 2023",
    time: "5 Days in 2 Phases",
    location: "Hybrid (NLUO Campus + Virtual)",
    description: "First conclave in collaboration with Global Alliance for Justice Education featuring workshops, scholarly discussions, and the inaugural NLUO National Negotiation Competition with 28 law schools participating.",
    category: "Conclave",
    attendees: "250+ participants"
  },
  {
    id: 9,
    title: "2nd Outreach Drive under Project KUTMB",
    subtitle: "Community Outreach",
    date: "16th July 2023",
    time: "Full Day",
    location: "Baba Tilakanagar Village",
    description: "CMN conducted outreach drive to educate villagers about mediation process, emphasizing hassle-free approach and speedy justice through door-to-door interactions and demonstrations.",
    category: "Outreach",
    attendees: "Village community",
    recording: "#"
  },
  {
    id: 10,
    title: "1st Outreach Drive under Project KUTMB",
    subtitle: "Community Outreach",
    date: "8th July 2023",
    time: "Full Day",
    location: "Brajebeharipur Tala Sahi Village",
    description: "First outreach drive making villagers aware of mediation process through skits, demonstrations, and door-to-door interactions. Identified land and construction disputes for future resolution.",
    category: "Outreach",
    attendees: "45-50 villagers",
    recording: "#"
  },
  {
    id: 11,
    title: "NLUO Mediation Cell Inauguration",
    subtitle: "Historic Launch",
    date: "15th August 2022",
    time: "Full Day",
    location: "NLUO Campus",
    description: "Inaugurated by Hon'ble Dr Justice S. Muralidhar, Chancellor NLUO & Chief Justice, High Court of Orissa. Launch of India's first institutionally run Alternative Dispute Resolution forum.",
    category: "Inauguration",
    attendees: "NLUO community and local residents",
    recording: "#"
  }
]

function EventCard({ event, isPast = false }: { event: any, isPast?: boolean }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="h-2 bg-linear-to-r from-blue-500 to-indigo-600"></div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                isPast 
                  ? 'bg-gray-100 text-gray-600' 
                  : event.category === 'Conference' 
                    ? 'bg-purple-100 text-purple-800'
                    : event.category === 'Webinar'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
              }`}>
                {event.category || 'Event'}
              </span>
              {!isPast && event.status && (
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  {event.status}
                </span>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
            <p className="text-blue-600 font-medium mb-3">{event.subtitle}</p>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
            <span>{event.date}</span>
          </div>
          
          {event.time && (
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-2 text-blue-500" />
              <span>{event.time}</span>
            </div>
          )}
          
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-blue-500" />
            <span>{event.location}</span>
          </div>
          
          {(event.attendees || event.speakers) && (
            <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-2 text-blue-500" />
              <span>
                {isPast ? event.attendees : `${event.speakers.length} speakers`}
              </span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
        
        {!isPast && event.speakers && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-900 mb-2">Featured Speakers:</p>
            <div className="flex flex-wrap gap-1">
              {event.speakers.map((speaker: string, index: number) => (
                <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                  {speaker}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex gap-3">
          {!isPast ? (
            <Link
              href={event.registrationLink || "#"}
              className="flex items-center justify-center flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Register Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          ) : (
            <Link
              href={event.recording || "#"}
              className="flex items-center justify-center flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors font-medium"
            >
              View Details
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          )}
          
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mediation & Negotiation <span className="text-blue-600">Events</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Join us for insightful discussions, workshops, and conferences featuring leading experts in corporate law. 
              Stay updated with the latest developments and network with professionals in the field.
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Upcoming <span className="text-blue-600">Events</span>
              </h2>
              <div className="text-sm text-gray-500">
                {upcomingEvents.length} events scheduled
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>

          {/* Newsletter Signup for Events */}
          <div className="bg-blue-50 rounded-lg p-8 mb-16">
            <div className="max-w-2xl mx-auto text-center">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Never Miss an Event</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our events newsletter and be the first to know about upcoming webinars, conferences, and workshops.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Past Events */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Past <span className="text-blue-600">Events</span>
              </h2>
              <div className="text-sm text-gray-500">
                {pastEvents.length} events completed
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast={true} />
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                View All Past Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}