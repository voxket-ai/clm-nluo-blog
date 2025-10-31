import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Linkedin, Building, MapPin, Award, Users, Target } from 'lucide-react'

// Sample advisory board data
const advisoryBoard = [
  {
    name: "Dr. Vinod Kothari",
    position: "Managing Partner",
    organization: "Vinod Kothari and Company",
    location: "Kolkata, India",
    expertise: ["Securities Law", "Banking Regulations", "Capital Markets", "Corporate Finance"],
    linkedin: "https://in.linkedin.com/in/vinodkothari",
    image: "/api/placeholder/200/200",
    bio: "Dr. Vinod Kothari is a renowned expert in securities law and banking regulations with over 30 years of experience. He has advised numerous corporations and regulatory bodies on complex financial transactions."
  },
  {
    name: "Ketan D. Parikh",
    position: "Senior Counsel (Arbitration)",
    organization: "High Court of Bombay",
    location: "Mumbai, India",
    expertise: ["Arbitration", "Dispute Resolution", "Commercial Litigation", "Corporate Law"],
    linkedin: "https://www.linkedin.com/in/ketan-parikh-a002539/",
    image: "/api/placeholder/200/200",
    bio: "Ketan D. Parikh is a distinguished arbitration specialist with extensive experience in complex commercial disputes and corporate litigation matters."
  },
  {
    name: "Steve Levitsky",
    position: "Merger Clearance and Antitrust Counseling",
    organization: "Independent Practitioner",
    location: "Manhattan, New York, United States",
    expertise: ["Antitrust Law", "Merger Clearance", "Competition Policy", "International Trade"],
    linkedin: "https://www.linkedin.com/in/steve-levitsky-69143a51/",
    image: "/api/placeholder/200/200",
    bio: "Steve Levitsky brings international expertise in antitrust and competition law, with particular focus on cross-border merger clearance processes."
  },
  {
    name: "Adhiraj Gupta",
    position: "Senior Associate",
    organization: "Walker Morris LLP",
    location: "London, United Kingdom",
    expertise: ["Private Equity", "Mergers & Acquisitions", "Corporate Finance", "Cross-border Transactions"],
    linkedin: "https://www.linkedin.com/in/adhiraj-gupta-24204750",
    image: "/api/placeholder/200/200",
    bio: "Adhiraj Gupta specializes in private equity and M&A transactions, with extensive experience in cross-border corporate deals and structuring."
  },
  {
    name: "Anshuman Sakle",
    position: "Partner",
    organization: "Khaitan & Co.",
    location: "Mumbai, India",
    expertise: ["Competition Law", "Antitrust", "Regulatory Compliance", "Corporate Advisory"],
    linkedin: "https://www.linkedin.com/in/anshumansakle/",
    image: "/api/placeholder/200/200",
    bio: "Anshuman Sakle is a leading competition law expert with deep expertise in antitrust matters and regulatory compliance for Indian corporations."
  },
  {
    name: "Anjana Potti",
    position: "Partner",
    organization: "Shardul Amarchand Mangaldas & Co",
    location: "Bangalore, India",
    expertise: ["Banking & Finance", "Project Finance", "Infrastructure Law", "Regulatory Affairs"],
    linkedin: "https://www.linkedin.com/in/anjana-potti-37670413/",
    image: "/api/placeholder/200/200",
    bio: "Anjana Potti is a prominent banking and finance lawyer with extensive experience in project finance and infrastructure transactions."
  },
  {
    name: "Abhiraj Arora",
    position: "Partner",
    organization: "Saraf and Partners",
    location: "New Delhi, India",
    expertise: ["Securities Law", "Capital Markets", "Regulatory Compliance", "IPOs"],
    linkedin: "http://linkedin.com/in/abhiraj-arora-08273ab",
    image: "/api/placeholder/200/200",
    bio: "Abhiraj Arora specializes in securities law and capital markets, with significant experience in public offerings and regulatory matters."
  },
  {
    name: "Anish Jaipuriar",
    position: "Partner",
    organization: "IC RegFin Legal Partners LLP",
    location: "Mumbai, India",
    expertise: ["Technology Law", "Mergers & Acquisitions", "Fintech Regulations", "Data Privacy"],
    linkedin: "https://www.linkedin.com/in/anishjaipuriar/",
    image: "/api/placeholder/200/200",
    bio: "Anish Jaipuriar is at the forefront of technology law and fintech regulations, advising on complex tech transactions and regulatory compliance."
  }
]

function BoardMemberCard({ member }: { member: typeof advisoryBoard[0] }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-20 h-20 rounded-full bg-linear-to-r from-blue-400 to-indigo-500 flex items-center justify-center shrink-0">
            <span className="text-white text-lg font-bold">
              {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </span>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
            <p className="text-blue-600 font-medium text-sm mb-1">{member.position}</p>
            <div className="flex items-center text-xs text-gray-600 mb-2">
              <Building className="h-3 w-3 mr-1" />
              <span className="truncate">{member.organization}</span>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{member.location}</span>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Areas of Expertise</h4>
          <div className="flex flex-wrap gap-1">
            {member.expertise.map((area, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {area}
              </span>
            ))}
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
        
        <div className="flex items-center justify-between">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
          >
            <Linkedin className="h-4 w-4 mr-1" />
            LinkedIn
          </a>
          
          <div className="flex items-center text-xs text-gray-500">
            <Award className="h-3 w-3 mr-1" />
            <span>Advisory Board</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AdvisoryBoardPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advisory <span className="text-blue-600">Board</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our Advisory Board comprises distinguished legal professionals, practitioners, and experts 
              from across the globe who provide strategic guidance and ensure the highest standards 
              of legal scholarship at the Centre for Corporate Law.
            </p>
          </div>

     

          {/* Advisory Board Members */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Board <span className="text-blue-600">Members</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* Pauline McKay */}
              <BoardMemberCard
                member={{
                  name: "Pauline McKay",
                  position: "Co-Ordinator",
                  organization: "University of Strathclyde Mediation Clinic",
                  location: "Scotland, United Kingdom",
                  expertise: ["Mediation", "Negotiation", "Dispute Resolution"],
                  linkedin: "https://uk.linkedin.com/in/pauline-mckay-430a07195?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile",
                  image: "",
                  bio: "Pauline McKay is the Co-Ordinator at the University of Strathclyde Mediation Clinic, bringing extensive experience in mediation and negotiation."
                }}
              />
              {/* Daniel Brantes Ferreira */}
              <BoardMemberCard
                member={{
                  name: "Daniel Brantes Ferreira",
                  position: "CEO",
                  organization: "Brazilian Centre for Mediation and Arbitration",
                  location: "Brazil",
                  expertise: ["Mediation", "Arbitration", "Conflict Resolution"],
                  linkedin: "https://br.linkedin.com/in/danielbrantes?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile",
                  image: "",
                  bio: "Daniel Brantes Ferreira is the CEO of the Brazilian Centre for Mediation and Arbitration, recognized for his leadership in mediation and arbitration."
                }}
              />
              {/* Prof. Ved Kumar */}
              <BoardMemberCard
                member={{
                  name: "Prof. Ved Kumar",
                  position: "Vice Chancellor",
                  organization: "National Law University Odisha",
                  location: "Odisha, India",
                  expertise: ["Law", "Legal Education", "University Administration"],
                  linkedin: "https://in.linkedin.com/in/vedkumari?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile",
                  image: "",
                  bio: "Prof. Ved Kumar is the Vice Chancellor of National Law University Odisha, with a distinguished career in legal education and administration."
                }}
              />
              {/* Prof. (Dr.) Sunanda Bharti */}
              <BoardMemberCard
                member={{
                  name: "Prof. (Dr.) Sunanda Bharti",
                  position: "Professor of Law",
                  organization: "Law Centre-I, University of Delhi",
                  location: "Delhi, India",
                  expertise: ["Law", "Legal Research", "Teaching"],
                  linkedin: "https://in.linkedin.com/in/sunanda-bharti-1aaa2b7?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile",
                  image: "",
                  bio: "Prof. (Dr.) Sunanda Bharti is a Professor of Law at Law Centre-I, University of Delhi, known for her contributions to legal research and teaching."
                }}
              />
            </div>
          </section>

          {/* Board Functions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Board <span className="text-blue-600">Functions</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Strategic Guidance</h3>
                <p className="text-gray-600 text-sm">
                  Providing strategic direction for research priorities, content development, and academic initiatives.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Knowledge Sharing</h3>
                <p className="text-gray-600 text-sm">
                  Contributing expertise through guest articles, lectures, and participation in academic discussions.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-600 text-sm">
                  Ensuring the highest standards of academic rigor and practical relevance in all publications.
                </p>
              </div>
            </div>
          </section>

     
        </div>
      </main>
      
      <Footer />
    </div>
  )
}