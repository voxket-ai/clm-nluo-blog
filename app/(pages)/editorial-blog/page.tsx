import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Linkedin } from 'lucide-react'
import { link } from 'fs'
import Editable from '@/components/editable/Editable'
import EditableImage from '@/components/editable/EditableImage'
import { slotId } from '@/lib/contentKeys'

// Advisory Editorial Board members
const boardMembers = [
  {
    name: "Prof. (Dr.) Ved Kumari",
    position: "Vice-Chancellor",
    organization: "National Law University Odisha",
    image: "/persons/Prof. (Dr.) Ved Kumari.jpg",
    linkedin: "https://www.linkedin.com/in/vedkumari/"
  },
  {
    name: "Prof. (Dr.) V. K Ahuja",
    position: "Director",
    organization: "Indian Law Institute",
    image: "/persons/img1.jpeg", // No image available
    linkedin: " https://www.linkedin.com/in/v-k-ahuja-0ba2bb104/"
  },
  {
    name: "Prof. (Dr.) Sunanda Bharti",
    position: "Professor of Law",
    organization: "Law Centre - I, University of Delhi",
    image: "/persons/Prof. (Dr.) Sunanda Bharti.jpg",
    linkedin: "https://www.linkedin.com/in/sunanda-bharti-1aaa2b7/"
  },
  {
    name: "Daniel Brantes Ferreira",
    position: "CEO",
    organization: "Brazilian Centre for Mediation and Arbitration",
    image: "/persons/Daniel Brantes Ferreira.jpg",
    linkedin: " https://www.linkedin.com/in/danielbrantes/?locale=en"
  },
  {
    name: "Pauline McKay",
    position: "Co-ordinator",
    organization: "University of Strathclyde Mediation Clinic",
    image: "/persons/Pauline_Mckay.jpg",
    linkedin: "https://www.linkedin.com/in/pauline-mckay-430a07195/"
  },
  {
    name: "Dr. Akshay Verma",
    position: "Co-Director",
    organization: "NLUO CMN",
    image: "/persons/Dr. Akshay Verma.jpg",
    linkedin: "https://www.linkedin.com/in/dr-akshay-verma-397b68170/"
  }
]

// Guest Editor
const guestEditor = {
  name: "Aniruddha Mahadevan Sethi",
  position: "Guest Editor",
  organization: "Mediation & Negotiation Expert",
  image: "/persons/img2.jpeg",
  linkedin: "https://in.linkedin.com/in/aniruddha-mahadevan-sethi-b297b5194?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile"
}

// Student Editors
const studentEditors = [
  {
    name: "Yashaswi Agrima",
    position: "Student Editor",
    image: "/persons/img3.jpeg"
  },
  {
    name: "Manvi",
    position: "Student Editor",
    image: "/persons/img4.jpeg"
  }
]

// Blog Administrator
const blogAdministrator = {
  name: "Nimisha Sarma",
  position: "Blog Administrator",
  organization: "NLUO CMN",
  image: "/persons/img5.jpeg"
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
              <Editable id="editorial-blog.editorial" as="span">Editorial</Editable> <span className="text-blue-600"><Editable id="editorial-blog.structure" as="span">Structure</Editable></span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <Editable id="editorial-blog.meet-our-editorial-team-organized-in-four-distin" as="span">Meet our editorial team organized in four distinct tiers, each playing a crucial role in maintaining the quality and standards of NLUO Mediation Blogs.</Editable>
            </p>
          </div>

          {/* 1. Advisory Editorial Board */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <Editable id="editorial-blog.1-advisory-editorial" as="span">1. Advisory Editorial</Editable> <span className="text-blue-600"><Editable id="editorial-blog.board" as="span">Board</Editable></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-200">
                    {member.image.includes('placeholder') ? (
                      <div className="w-full h-full bg-linear-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                    ) : (
                      <EditableImage
                        id={slotId('editorial.board', member.name, 'photo')}
                        src={member.image}
                        alt={member.name}
                        label={`Photo of ${member.name}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <Editable id={slotId('editorial.board', member.name, 'name')} as="span" label="Board member name">{member.name}</Editable>
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">
                    <Editable id={slotId('editorial.board', member.name, 'position')} as="span" label="Board member role">{member.position}</Editable>
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    <Editable id={slotId('editorial.board', member.name, 'organization')} as="span" label="Board member organisation">{member.organization}</Editable>
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    <Linkedin className="h-4 w-4 mr-1" />
                    <Editable id="editorial-blog.linkedin" as="span">LinkedIn</Editable>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Guest Editor(s) */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <Editable id="editorial-blog.2-guest" as="span">2. Guest</Editable> <span className="text-blue-600"><Editable id="editorial-blog.editor-s" as="span">Editor(s)</Editable></span>
            </h2>
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-200">
                    {guestEditor.image.includes('placeholder') ? (
                      <div className="w-full h-full bg-linear-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">{guestEditor.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                    ) : (
                      <EditableImage
                        id="editorial.guest.photo"
                        src={guestEditor.image}
                        alt={guestEditor.name}
                        label="Guest editor photo"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <Editable id="editorial.guest.name" as="span" label="Guest editor name">{guestEditor.name}</Editable>
                </h3>
                <p className="text-blue-600 font-medium mb-1">
                  <Editable id="editorial.guest.position" as="span" label="Guest editor role">{guestEditor.position}</Editable>
                </p>
                <p className="text-gray-600 text-sm">
                  <Editable id="editorial.guest.organization" as="span" label="Guest editor organisation">{guestEditor.organization}</Editable>
                </p>
              </div>
            </div>
          </section>

          {/* 3. Student Editors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <Editable id="editorial-blog.3-student" as="span">3. Student</Editable> <span className="text-blue-600"><Editable id="editorial-blog.editors" as="span">Editors</Editable></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {studentEditors.map((editor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-200">
                    {editor.image.includes('placeholder') ? (
                      <div className="w-full h-full bg-linear-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">{editor.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                    ) : (
                      <EditableImage
                        id={slotId('editorial.student', editor.name, 'photo')}
                        src={editor.image}
                        alt={editor.name}
                        label={`Photo of ${editor.name}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <Editable id={slotId('editorial.student', editor.name, 'name')} as="span" label="Student editor name">{editor.name}</Editable>
                  </h3>
                  <p className="text-blue-600 font-medium">
                    <Editable id={slotId('editorial.student', editor.name, 'position')} as="span" label="Student editor role">{editor.position}</Editable>
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Blog Administrator */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <Editable id="editorial-blog.4-blog" as="span">4. Blog</Editable> <span className="text-blue-600"><Editable id="editorial-blog.administrator" as="span">Administrator</Editable></span>
            </h2>
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                 <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-200">
                    {blogAdministrator.image.includes('placeholder') ? (
                      <div className="w-full h-full bg-linear-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                        <span className="text-white text-xl font-bold">{blogAdministrator.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                    ) : (
                      <EditableImage
                        id="editorial.admin.photo"
                        src={blogAdministrator.image}
                        alt={blogAdministrator.name}
                        label="Blog administrator photo"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <Editable id="editorial.admin.name" as="span" label="Administrator name">{blogAdministrator.name}</Editable>
                </h3>
                <p className="text-blue-600 font-medium mb-1">
                  <Editable id="editorial.admin.position" as="span" label="Administrator role">{blogAdministrator.position}</Editable>
                </p>
                <p className="text-gray-600 text-sm">
                  <Editable id="editorial.admin.organization" as="span" label="Administrator organisation">{blogAdministrator.organization}</Editable>
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