/**
 * The events that shipped with the site, kept as the seed for an empty
 * database. On first load the events collection is populated from this list so
 * nothing that was previously hard-coded is lost — after that the database is
 * the source of truth and these values are never consulted again.
 */

export interface SeedEvent {
  id: number
  title: string
  subtitle?: string
  date: string
  time?: string
  location?: string
  description: string
  speakers?: string[]
  category?: string
  attendees?: string
  status?: string
  registrationLink?: string
  recording?: string
}

export const SEED_UPCOMING: SeedEvent[] = [
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

export const SEED_PAST: SeedEvent[] = [
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
  
]

export const FEATURED_IMAGES = [
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

/**
 * Events that already have a bespoke, hand-built detail page.
 *
 * Keyed by title, not by id: the upcoming and past seed lists number their
 * entries independently, so id 1 exists in both and an id-keyed map sent the
 * 2026 conclave to a 2025 course page.
 */
export const SEED_DETAIL_PATHS: Record<string, string> = {
  'Single Credit Course: Restorative Practice and Justice': '/events/restorative-justice',
  '2nd GAJE-NLUO Mediation and Negotiation Conclave': '/events/gaje-conclave-2025',
  'NLUO CMN Stall at 3rd NLUO Flower Show': '/events/flower-show-2025',
  'Single Credit Course: Mediation and Negotiation': '/events/single-credit-course-2024',
  'NLUO CMN Stall at 4th NLUO Flower Show': '/events/flower-show-2026',
}
