import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Sample events data
const upcomingEvents = [
  {
    id: 1,
    title: "Corporate Governance in the Digital Age",
    subtitle: "Webinar Series",
    date: "November 15, 2025",
    time: "2:00 PM - 4:00 PM IST",
    location: "Virtual Event",
    description: "Explore how digital transformation is reshaping corporate governance practices and regulatory compliance in modern businesses.",
    speakers: ["Dr. Rajesh Kumar", "Ms. Priya Sharma", "Prof. Anil Mehta"],
    registrationLink: "#",
    category: "Webinar",
    status: "Registration Open"
  },
  {
    id: 2,
    title: "Annual Corporate Law Conference 2025",
    subtitle: "Two-Day Conference",
    date: "December 5-6, 2025",
    time: "9:00 AM - 6:00 PM IST",
    location: "NLUO Campus, Cuttack",
    description: "Join leading corporate law experts, practitioners, and academics for discussions on emerging trends and challenges in corporate law.",
    speakers: ["Justice A.K. Sikri", "Mr. Cyril Shroff", "Ms. Menaka Guruswamy"],
    registrationLink: "#",
    category: "Conference",
    status: "Early Bird Registration"
  },
  {
    id: 3,
    title: "ESG Compliance Workshop",
    subtitle: "Interactive Workshop",
    date: "November 28, 2025",
    time: "10:00 AM - 5:00 PM IST",
    location: "Hybrid (NLUO + Virtual)",
    description: "Hands-on workshop covering Environmental, Social, and Governance compliance requirements for Indian corporations.",
    speakers: ["CA Vikram Singh", "Ms. Anjali Nair"],
    registrationLink: "#",
    category: "Workshop",
    status: "Registration Open"
  }
]

const pastEvents = [
  {
    id: 4,
    title: "Securities Law Reforms 2025",
    subtitle: "Panel Discussion",
    date: "October 10, 2025",
    location: "Virtual Event",
    description: "Comprehensive analysis of recent SEBI reforms and their impact on capital markets.",
    attendees: "250+ participants",
    recording: "#"
  },
  {
    id: 5,
    title: "Insolvency & Bankruptcy Code: 5 Years Later",
    subtitle: "Academic Conference",
    date: "September 20, 2025",
    location: "NLUO Campus",
    description: "Retrospective analysis of IBC implementation and its effectiveness in corporate restructuring.",
    attendees: "180+ participants",
    recording: "#"
  },
  {
    id: 6,
    title: "Contract Drafting Masterclass",
    subtitle: "Professional Development",
    date: "August 15, 2025",
    location: "Virtual Event",
    description: "Advanced techniques and best practices for drafting commercial contracts and agreements.",
    attendees: "320+ participants",
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
              href={event.registrationLink}
              className="flex items-center justify-center flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Register Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          ) : (
            <Link
              href={event.recording}
              className="flex items-center justify-center flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors font-medium"
            >
              View Recording
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
              CLM <span className="text-blue-600">Events</span>
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