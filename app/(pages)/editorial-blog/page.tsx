import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Linkedin } from 'lucide-react'

// Advisory Editorial Board members
const boardMembers = [
  {
    name: "Prof. (Dr.) V. K Ahuja",
    position: "Director",
    organization: "Indian Law Institute",
    image: "/api/placeholder/200/200",
    linkedin: "#"
  },
  {
    name: "Pauline McKay",
    position: "Co-ordinator",
    organization: "University of Strathclyde Mediation Clinic",
    image: "/api/placeholder/200/200",
    linkedin: "#"
  },
  {
    name: "Daniel Brantes Ferreira",
    position: "CEO",
    organization: "Brazilian Centre for Mediation and Arbitration",
    image: "/api/placeholder/200/200",
    linkedin: "#"
  },
  {
    name: "Prof. (Dr.) Sunanda Bharti",
    position: "Professor of Law",
    organization: "Law Centre - I, University of Delhi",
    image: "/api/placeholder/200/200",
    linkedin: "#"
  },
  {
    name: "Prof. Ved Kumari",
    position: "Vice-Chancellor",
    organization: "National Law University Odisha",
    image: "/api/placeholder/200/200",
    linkedin: "#"
  },
  {
    name: "Akshay Verma",
    position: "Co-Director",
    organization: "NLUO CMN",
    image: "/api/placeholder/200/200",
    linkedin: "#"
  }
]

// Guest Editor
const guestEditor = {
  name: "Aniruddha Mahadevan Sethi",
  position: "Guest Editor",
  organization: "Mediation & Negotiation Expert",
  image: "/api/placeholder/200/200"
}

// Student Editors
const studentEditors = [
  {
    name: "Yashaswi Agrima",
    position: "Student Editor",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Manvi",
    position: "Student Editor",
    image: "/api/placeholder/200/200"
  }
]

// Blog Administrator
const blogAdministrator = {
  name: "Nimisha Sarma",
  position: "Blog Administrator",
  organization: "NLUO CMN",
  image: "/api/placeholder/200/200"
}

export default function EditorialBlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Editorial <span className="text-blue-600">Structure</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our editorial team organized in four distinct tiers, each playing a crucial role in maintaining the quality and standards of NLUO Mediation Chronicle.
            </p>
          </div>

          {/* 1. Advisory Editorial Board */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              1. Advisory Editorial <span className="text-blue-600">Board</span>
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

          {/* 2. Guest Editor(s) */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              2. Guest <span className="text-blue-600">Editor(s)</span>
            </h2>
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-linear-to-r from-green-400 to-teal-500 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{guestEditor.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{guestEditor.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{guestEditor.position}</p>
                <p className="text-gray-600 text-sm">{guestEditor.organization}</p>
              </div>
            </div>
          </section>

          {/* 3. Student Editors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              3. Student <span className="text-blue-600">Editors</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {studentEditors.map((editor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-linear-to-r from-indigo-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{editor.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{editor.name}</h3>
                  <p className="text-blue-600 font-medium">{editor.position}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Blog Administrator */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              4. Blog <span className="text-blue-600">Administrator</span>
            </h2>
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-linear-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{blogAdministrator.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{blogAdministrator.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{blogAdministrator.position}</p>
                <p className="text-gray-600 text-sm">{blogAdministrator.organization}</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}