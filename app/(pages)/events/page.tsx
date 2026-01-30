'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, Clock, MapPin, Users, ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

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
    id: 1,
    title: "Single Credit Course: Restorative Practice and Justice",
    subtitle: "Theory and Tools for Building Compassionate Communities",
    date: "15th November – 30th November, 2025",
    time: "16 hours across multiple sessions",
    location: "Online Mode",
    description: "NLUO CMN collaborated with Accords International to conduct a comprehensive course on restorative justice, trauma-informed care, and community-centered approaches. The program featured international instructors and interactive methodologies including case studies, simulations, and restorative circle practices.",
    speakers: ["Dr. Akshay Verma", "Jeri Fields", "Dr. Sal Corbin", "Theresa Huggins", "Upasana Singh", "Dr. Akanksha Marwah"],
    category: "Course",
    attendees: "54 participants from India and US"
  },
  {
    id: 2,
    title: "2nd GAJE-NLUO Mediation and Negotiation Conclave",
    subtitle: "International Conclave",
    date: "29th January – 2nd February, 2025",
    time: "5 Days Program",
    location: "NLUO Campus & Virtual",
    description: "The second GAJE-NLUO Mediation and Negotiation Conclave featured expert-led workshops on mediation and negotiation, an International Conference on Dispute Resolution Mechanisms, and the 2nd NLUO National Negotiation Competition with NALSAR Hyderabad emerging as winners.",
    speakers: ["Prof. Ved Kumari", "Sr. Prof. V.K. Ahuja", "Charlie Irvine", "Daniel Brantes Ferreira", "Prof. Sunanda Bharti"],
    category: "Conclave",
    attendees: "200+ participants"
  },
  {
    id: 3,
    title: "NLUO CMN Stall at 3rd NLUO Flower Show",
    subtitle: "Outreach Program",
    date: "25th January - 26th January, 2025",
    time: "Full Day",
    location: "NLUO Campus",
    description: "The Centre participated in the third annual Flower Fest at NLUO by setting up an awareness stall showcasing mediation services and introducing skilled mediators to the community with overwhelmingly positive response.",
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
    attendees: "66 participants"
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
    title: "Field Visit (Door-to-Door Survey) under ADR Course",
    subtitle: "Community Survey",
    date: "14th & 30th October, 2023",
    time: "Full Day",
    location: "Sectors 11, 12, and 13 of CDA, Cuttack",
    description: "160 NLUO students conducted extensive field outreach visit surveying 350 households to assess awareness about ADR processes and inform residents about mediation services.",
    category: "Outreach",
    attendees: "350 households surveyed"
  },
  {
    id: 9,
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
    id: 10,
    title: "2nd Outreach Drive under Project KUTMB",
    subtitle: "Community Outreach",
    date: "16th July 2023",
    time: "Full Day",
    location: "Baba Tilakanagar Village",
    description: "CMN conducted outreach drive to educate villagers about mediation process, emphasizing hassle-free approach and speedy justice through door-to-door interactions and demonstrations.",
    category: "Outreach",
    attendees: "37 villagers (28 children, 7 women, 2 men)",
    recording: "#"
  },
  {
    id: 11,
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
    id: 12,
    title: "CMN stall at NLUO Flower show",
    subtitle: "Outreach Program",
    date: "21st – 23rd January, 2023",
    time: "3 Days",
    location: "NLUO Campus",
    description: "Centre set up awareness stall during Annual Flower Fest explaining advantages of mediation over litigation. Witnessed overwhelming response with visitors showing great interest in mediation services.",
    category: "Outreach",
    attendees: "Festival visitors"
  },
  {
    id: 13,
    title: "Outreach Awareness Programmes under Project KUTUMB",
    subtitle: "Community Outreach",
    date: "4th September, 25th September & 16th October, 2022",
    time: "Full Day",
    location: "Brajbeharipur, Munda Sahi, and Babatilka Nagar",
    description: "Series of Medico-Legal Camps where CMN students conducted skits and awareness activities about mediation as effective dispute resolution tool. Community members actively engaged with questions and discussions.",
    category: "Outreach",
    attendees: "Village communities"
  },
  {
    id: 14,
    title: "NLUO Mediation Cell Inauguration",
    subtitle: "Historic Launch",
    date: "15th August 2022",
    time: "Full Day",
    location: "NLUO Campus",
    description: "Inaugurated by Hon'ble Dr Justice S. Muralidhar, Chancellor NLUO & Chief Justice, High Court of Orissa. Launch of India's first institutionally run Alternative Dispute Resolution forum.",
    category: "Inauguration",
    attendees: "NLUO community and local residents",
    recording: "#"
  },
  {
    id: 15,
    title: "Legal Literacy and Outreach Drive",
    subtitle: "Community Education",
    date: "2nd August 2022",
    time: "Full Day",
    location: "Jankia Legal Aid Clinic",
    description: "NLUO CMN collaborated with Legal Aid Society and Pro Bono Club to educate unprivileged masses about mediation through interactive roleplays and multilingual handouts in Odia.",
    category: "Outreach",
    attendees: "Rural community members"
  },
  {
    id: 16,
    title: "Workshop on Mediators Opening Statement",
    subtitle: "Professional Training",
    date: "1st July 2022",
    time: "2 Hours",
    location: "Online via Zoom",
    description: "NLUO CMN's first workshop in collaboration with Accords International covering mediator's opening statement structure, legal landscape of mediation, and practical demonstrations with role plays.",
    speakers: ["Ms. Upasana Singh", "Ms. Akanksha Marwah"],
    category: "Workshop",
    attendees: "Students from multiple universities"
  },
   {
    id: 17,
    title: "NLUO CMN Stall at 4th NLUO Flower Show",
    subtitle: "Outreach Program",
    date: "24th January - 25th January, 2026",
    time: "Full Day",
    location: "NLUO Campus",
    description: "The Centre participated in the fourth annual Flower Fest at NLUO by setting up an awareness stall showcasing mediation services and introducing skilled mediators to the community with overwhelmingly positive response.",
    category: "Outreach",
    attendees: "Community engagement"
  },
]

// Featured event images
const featuredImages = [
  {
    src: "/events/event2.jpeg",
    title: "GAJE-NLUO Mediation Conclave",
    description: "Our flagship international event bringing together global ADR experts"
  },
  {
    src: "/events/event1.jpeg",
   title: "GAJE-NLUO Mediation Conclave",
    description: "Our flagship international event bringing together global ADR experts"
  },
  {
    src: "/events/event3.jpeg",
   title: "GAJE-NLUO Mediation Conclave",
    description: "Our flagship international event bringing together global ADR experts"
  },
  {
    src: "/events/event4.jpeg",
    title: "GAJE-NLUO Mediation Conclave",
    description: "Our flagship international event bringing together global ADR experts"
  },
  {
    src: "/events/event5.jpeg",
  title: "GAJE-NLUO Mediation Conclave",
    description: "Our flagship international event bringing together global ADR experts"
  },
  {
    src: "/events/event6.jpeg",
    title: "GAJE-NLUO Mediation Conclave",
    description: "Our flagship international event bringing together global ADR experts"
  },
  {
    src: "/events/event7.jpeg",
   title: "GAJE-NLUO Mediation Conclave",
    description: "Our flagship international event bringing together global ADR experts"
  },
  {
    src: "/events/event8.jpeg",
   title: "GAJE-NLUO Mediation Conclave",
    description: "Our flagship international event bringing together global ADR experts"
  },
  {
    src: "/events/event9.jpeg",
    title: "GAJE-NLUO Mediation Conclave",
    description: "Our flagship international event bringing together global ADR experts"
  },
  {
    src: "/events/event10.jpeg",
    title: "GAJE-NLUO Mediation Conclave",
    description: "Our flagship international event bringing together global ADR experts"
  }
]

// Function to get the detail page URL for each event
function getEventDetailUrl(eventId: number, eventTitle: string): string {
  const eventRoutes: { [key: number]: string } = {
    1: '/events/restorative-justice',
    2: '/events/gaje-conclave-2025',
    3: '/events/flower-show-2025', 
    4: '/events/single-credit-course-2024',
    // Add more specific routes for major events as needed
    9: '/events/gaje-conclave-2023',
    14: '/events/mediation-cell-inauguration',
    17:'/events/flower-show-2026'
  }
  
  return eventRoutes[eventId] || '#'
}

function EventCard({ event, isPast = false }: { event: any, isPast?: boolean }) {
  const detailUrl = getEventDetailUrl(event.id, event.title)
  const hasDetailPage = detailUrl !== '#'
  
  return (
    <div className="bg-linear-to-br from-slate-100/95 to-indigo-50/90 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-slate-200/40">
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
            null
          )}
          
          {hasDetailPage ? (
            <Link
              href={detailUrl}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium"
            >
              Learn More
            </Link>
          ) : (
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium">
              Learn More
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
function FeaturedEventStatic() {
  const image = featuredImages[0]

  return (
    <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-blue-900/70 via-transparent to-indigo-900/70">
        <div className="absolute bottom-8 left-8 text-white">
          <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
          <p className="text-blue-100">{image.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mediation & Negotiation <span className="text-blue-600">Events</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Join us for insightful discussions, workshops, and conferences featuring leading experts in mediation and negotiation. 
              Stay updated with the latest developments and network with professionals in the field.
            </p>
          </div>

          {/* Featured Event Images */}
          <div className="mb-16">
            <FeaturedEventStatic/>
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
             
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}