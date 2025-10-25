import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Linkedin } from 'lucide-react'

// Sample editorial board data
const boardMembers = [
  {
    name: "Dr. Vinod Kothari",
    position: "Managing Partner",
    organization: "Vinod Kothari and Company",
    image: "/api/placeholder/200/200",
    linkedin: "https://in.linkedin.com/in/vinodkothari"
  },
  {
    name: "Ketan D. Parikh",
    position: "Senior Counsel (Arbitration)",
    organization: "High Court of Bombay",
    image: "/api/placeholder/200/200",
    linkedin: "https://www.linkedin.com/in/ketan-parikh-a002539/"
  },
  {
    name: "Steve Levitsky",
    position: "Merger Clearance and Antitrust Counseling",
    organization: "Manhattan, New York, United States",
    image: "/api/placeholder/200/200",
    linkedin: "https://www.linkedin.com/in/steve-levitsky-69143a51/"
  },
  {
    name: "Adhiraj Gupta",
    position: "Senior Associate",
    organization: "Walker Morris LLP",
    image: "/api/placeholder/200/200",
    linkedin: "https://www.linkedin.com/in/adhiraj-gupta-24204750"
  },
  {
    name: "Anshuman Sakle",
    position: "Partner (Competition/Antitrust Law)",
    organization: "Khaitan & Co.",
    image: "/api/placeholder/200/200",
    linkedin: "https://www.linkedin.com/in/anshumansakle/"
  },
  {
    name: "Anjana Potti",
    position: "Partner (Banking & Finance)",
    organization: "Shardul Amarchand Mangaldas & Co",
    image: "/api/placeholder/200/200",
    linkedin: "https://www.linkedin.com/in/anjana-potti-37670413/"
  }
]

const studentEditors = [
  {
    name: "Shubham Singh",
    position: "Editor in Chief",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Paavanta Arya",
    position: "Senior Editor",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Aditya Danturty",
    position: "Senior Editor",
    image: "/api/placeholder/200/200"
  }
]

export default function EditorialBlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Editorial <span className="text-blue-600">Board</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our distinguished editorial board comprising leading legal professionals, scholars, and experts who guide our content and maintain the highest standards of legal commentary.
            </p>
          </div>

          {/* Board of Editors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Board of <span className="text-blue-600">Editors</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-linear-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.organization}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    <Linkedin className="h-4 w-4 mr-1" />
                    LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Student Editors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Student <span className="text-blue-600">Editors</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {studentEditors.map((editor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-linear-to-r from-green-400 to-blue-500 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{editor.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{editor.name}</h3>
                  <p className="text-blue-600 font-medium">{editor.position}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Blog Administrator */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Blog <span className="text-blue-600">Administrator</span>
            </h2>
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-linear-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">SG</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Surbhi Goyal</h3>
                <p className="text-blue-600 font-medium">Blog Administrator</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}