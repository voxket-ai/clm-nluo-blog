import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Mail, Phone, Linkedin, Award, BookOpen, GraduationCap, Users } from 'lucide-react'
import Editable from '@/components/editable/Editable'
import EditableImage from '@/components/editable/EditableImage'
import { slotId } from '@/lib/contentKeys'

// Sample faculty advisors data
const facultyAdvisors = [
  {
    name: "Prof. (Dr.) Ved Kumari",
    position: "Vice-Chancellor",
    organization: "National Law University Odisha",
    specialization: ["Juvenile Justice", "Criminal Law", "Gender Discrimination", "Clinical Education"],
    qualifications: ["Ph.D. (Juvenile Justice System)", "LL.M.", "Teaching since 1983"],
    experience: "40+ years in legal academia and judicial training",
    email: "vc@nluo.ac.in",
    phone: "+91-671-2866850",
    linkedin: "#",
    image: "/persons/Prof. (Dr.) Ved Kumari.jpg",
    bio: "Prof. Ved Kumari is former Dean and Head, Faculty of Law, University of Delhi. She is a pioneer in juvenile justice research and has been instrumental in judicial training reforms, including heading the Delhi Judicial Academy as its first woman Chairperson."
  },
  {
    name: "Prof. (Dr.) Sunanda Bharti",
    position: "Professor of Law",
    organization: "Law Centre - I, University of Delhi",
    specialization: ["Constitutional Law", "Administrative Law", "Human Rights"],
    qualifications: ["Ph.D. (Law)", "LL.M.", "B.A. LL.B."],
    experience: "25+ years in legal academia and research",
    email: "sunanda.bharti@du.ac.in",
    phone: "+91-11-27666156",
    linkedin: "#",
    image: "/persons/Prof. (Dr.) Sunanda Bharti.jpg",
    bio: "Prof. Dr. Sunanda Bharti is a distinguished legal academic with extensive experience in constitutional and human rights law. She has contributed significantly to legal education and policy research."
  },
  {
    name: "Dr. Akshay Verma",
    position: "Co-Director",
    organization: "NLUO Centre for Mediation and Negotiation",
    specialization: ["Alternative Dispute Resolution", "Mediation", "Negotiation"],
    qualifications: ["Ph.D. (ADR)", "LL.M.", "B.A. LL.B."],
    experience: "15+ years in ADR practice and teaching",
    email: "akshay.verma@nluo.ac.in",
    phone: "+91-671-2866854",
    linkedin: "#",
    image: "/persons/Dr. Akshay Verma.jpg",
    bio: "Dr. Akshay Verma is a specialist in alternative dispute resolution and leads the NLUO Centre for Mediation and Negotiation's academic and practical initiatives."
  },
  {
    name: "Mr. Abhay Kumar",
    position: "Centre Head",
    organization: "NLUO Centre for Mediation and Negotiation",
    specialization: ["Mediation Practice", "ADR Administration", "Community Mediation"],
    qualifications: ["LL.M.", "B.A. LL.B.", "Certified Mediator"],
    experience: "12+ years in mediation practice",
    email: "abhay.kumar@nluo.ac.in",
    phone: "+91-671-2866855",
    linkedin: "#",
    image: "/persons/Abhay-Kumar.png",
    bio: "Mr. Abhay Kumar heads the operational aspects of the NLUO Mediation Centre and brings extensive practical experience in mediation services and community outreach."
  }
]

function FacultyCard({ faculty }: { faculty: typeof facultyAdvisors[0] }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-8">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-blue-200 mb-4">
            {faculty.image.includes('placeholder') ? (
              <div className="w-full h-full bg-linear-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {faculty.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </span>
              </div>
            ) : (
              <EditableImage
                id={slotId('faculty', faculty.name, 'photo')}
                src={faculty.image}
                alt={faculty.name}
                label={`Photo of ${faculty.name}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            <Editable id={slotId('faculty', faculty.name, 'name')} as="span" label="Faculty name">{faculty.name}</Editable>
          </h3>
          <p className="text-blue-600 font-medium mb-1">
            <Editable id={slotId('faculty', faculty.name, 'position')} as="span" label="Faculty role">{faculty.position}</Editable>
          </p>
          <p className="text-gray-600 text-sm">
            <Editable id={slotId('faculty', faculty.name, 'organization')} as="span" label="Faculty organisation">{faculty.organization}</Editable>
          </p>
        </div>
        
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
              <Editable id="faculty-advisors.specialization" as="span">Specialization</Editable>
            </h4>
            <div className="flex flex-wrap gap-2">
              {faculty.specialization.map((spec, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  <Editable id={slotId('faculty', faculty.name, 'spec', index)} as="span" label="Specialisation">{spec}</Editable>
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <GraduationCap className="h-4 w-4 mr-2 text-green-500" />
              <Editable id="faculty-advisors.qualifications" as="span">Qualifications</Editable>
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {faculty.qualifications.map((qual, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  <Editable id={slotId('faculty', faculty.name, 'qual', index)} as="span" label="Qualification">{qual}</Editable>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <Award className="h-4 w-4 mr-2 text-purple-500" />
              <Editable id="faculty-advisors.experience" as="span">Experience</Editable>
            </h4>
            <p className="text-sm text-gray-600">
              <Editable id={slotId('faculty', faculty.name, 'experience')} as="span" multiline label="Experience">{faculty.experience}</Editable>
            </p>
          </div>
        </div>
        
        <div className="border-t pt-4 mb-4 border-slate-200">
          <p className="text-sm text-gray-600 leading-relaxed">
            <Editable id={slotId('faculty', faculty.name, 'bio')} as="span" multiline label="Faculty biography">{faculty.bio}</Editable>
          </p>
        </div>
        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="h-4 w-4 mr-2 text-blue-500" />
            <a href={`mailto:${faculty.email}`} className="hover:text-blue-600 transition-colors">
              <Editable id={slotId('faculty', faculty.name, 'email')} as="span" label="Faculty email">{faculty.email}</Editable>
            </a>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="h-4 w-4 mr-2 text-green-500" />
            <span>
              <Editable id={slotId('faculty', faculty.name, 'phone')} as="span" label="Faculty phone">{faculty.phone}</Editable>
            </span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Linkedin className="h-4 w-4 mr-2 text-blue-700" />
            <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Editable id="faculty-advisors.linkedin-profile" as="span">LinkedIn Profile</Editable>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FacultyAdvisorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <Editable id="faculty-advisors.about-the" as="span">About the</Editable> <span className="text-blue-600"><Editable id="faculty-advisors.centre" as="span">Centre</Editable></span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The NLUO Centre for Mediation and Negotiation (NLUO CMN) was established in March 2014 and reconstituted in 2022 
              under the leadership of Vice-Chancellor Prof. Ved Kumari. Learn about our mission, initiatives, and leadership.
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 rounded-lg p-8 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <Editable id="faculty-advisors.academic" as="span">Academic</Editable> <span className="text-blue-600"><Editable id="faculty-advisors.leadership" as="span">Leadership</Editable></span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our faculty advisors bring decades of combined experience in legal education, research, 
                and practice. They provide strategic guidance to NLUO Mediation Blogs, ensuring that our content 
                maintains the highest standards of academic rigor while remaining relevant to contemporary 
                legal practice. Each advisor contributes their unique expertise in specialized areas of 
                corporate law, creating a comprehensive knowledge base for our publications and research initiatives.
              </p>
            </div>
          </div>

          {/* Faculty Grid */}
                    {/* About CMN Centre */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <Editable id="faculty-advisors.about-the-2" as="span">About the</Editable> <span className="text-blue-600"><Editable id="faculty-advisors.centre-2" as="span">Centre</Editable></span>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                  The NLUO Centre for Mediation and Negotiation (NLUO CMN) was established in March 2014 by Hon'ble Justices 
                  Ananga Kumar Patnaik, V. Gopala Gowda, and Adarsh Kumar Goel. It is dedicated to promoting academic research 
                  and practical training in Alternative Dispute Resolution (ADR).
                </p>
                <p className="text-gray-600 leading-relaxed text-justify">
                  As India's first mediation cell operated by a higher-education institution, the Centre aspires to be a Centre of 
                  Excellence in ADR, fostering peaceful dispute resolution, mutual understanding, and effective communication.
                </p>
              </div>
              
              <div className="h-64 relative overflow-hidden rounded-lg">
                <EditableImage
                  id="faculty-advisors.image.photo6"
                  src="/images/photo6.jpeg"
                  alt="NLUO Centre for Mediation and Negotiation"
                  label="NLUO Centre for Mediation and Negotiation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-blue-600/70 to-indigo-600/70 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Users className="h-16 w-16 mx-auto mb-4" />
                    <h3 className="text-xl font-bold"><Editable id="faculty-advisors.centre-for-mediation-and-negotiation" as="span">Centre for Mediation and Negotiation</Editable></h3>
                    <p className="text-blue-100"><Editable id="faculty-advisors.excellence-in-adr" as="span">Excellence in ADR</Editable></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Leadership */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              <Editable id="faculty-advisors.current" as="span">Current</Editable> <span className="text-blue-600"><Editable id="faculty-advisors.leadership-2" as="span">Leadership</Editable></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-200">
                  <EditableImage
                  id="faculty-advisors.image.abhay-kumar"
                  src="/persons/Abhay-Kumar.png"
                  alt="Mr. Abhay Kumar"
                  label="Mr. Abhay Kumar"
                  className="w-full h-full object-cover"
                />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2"><Editable id="faculty-advisors.mr-abhay-kumar" as="span">Mr. Abhay Kumar</Editable></h3>
                <p className="text-blue-600 font-medium text-sm"><Editable id="faculty-advisors.director-nluo-cmn" as="span">Director, NLUO CMN</Editable></p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-200">
                  <EditableImage
                  id="faculty-advisors.image.dr-akshay-verma"
                  src="/persons/Dr. Akshay Verma.jpg"
                  alt="Dr. Akshay Verma"
                  label="Dr. Akshay Verma"
                  className="w-full h-full object-cover"
                />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2"><Editable id="faculty-advisors.dr-akshay-verma" as="span">Dr. Akshay Verma</Editable></h3>
                <p className="text-blue-600 font-medium text-sm"><Editable id="faculty-advisors.co-director-nluo-cmn" as="span">Co-Director, NLUO CMN</Editable></p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-200">
                  <EditableImage
                  id="faculty-advisors.image.suryasmita-parida"
                  src="/persons/Suryasmita-Parida.png"
                  alt="Ms. Suryasmita Parida"
                  label="Ms. Suryasmita Parida"
                  className="w-full h-full object-cover"
                />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2"><Editable id="faculty-advisors.ms-suryasmita-parida" as="span">Ms. Suryasmita Parida</Editable></h3>
                <p className="text-blue-600 font-medium text-sm"><Editable id="faculty-advisors.co-director-nluo-cmn-2" as="span">Co-Director, NLUO CMN</Editable></p>
              </div>
            </div>
          </section>

          {/* NLUO Mediation Cell */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                <Editable id="faculty-advisors.nluo" as="span">NLUO</Editable> <span className="text-blue-600"><Editable id="faculty-advisors.mediation-cell" as="span">Mediation Cell</Editable></span>
              </h2>
              
              <div className="prose max-w-none text-gray-600 leading-relaxed">
                <p className="text-lg mb-6 text-justify">
                  <Editable id="faculty-advisors.the-nluo-mediation-cell-is-the-first-higher-inst" as="span">The NLUO Mediation Cell is the first higher institution run mediation cell in India to provide live mediation services (both private and court-referred mediation) as a part of its social activism. The Cell aims to handle multifarious legal disputes including family, matrimonial, property, land and consumer disputes through mediation with the help of faculties-cum-trained mediators.</Editable>
                </p>
                <p className=" text-lg mb-6 text-justify">
                  <Editable id="faculty-advisors.in-the-beginning-the-cell-is-said-to-extend-the" as="span">In the beginning, the Cell is said to extend the focus on people from nearby places and will gradually extend to the whole state and provide free mediation services both physically and virtually through Online Dispute Resolution (ODR). With this initiative, NLUO is striving hard to achieve the constitutional goal of access to justice and free legal aid.</Editable>
                </p>
                <p className="text-lg mb-8 text-justify">
                  <Editable id="faculty-advisors.nluo-with-the-establishment-of-the-nluo-mediatio" as="span">NLUO, with the establishment of the NLUO Mediation Cell, is also not far from achieving SDG 16 under the UN Sustainable Development Goals 2030, i.e., Peace, Justice and, Strong Institutions.</Editable>
                </p>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6"><Editable id="faculty-advisors.facilities-offered" as="span">Facilities Offered</Editable></h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2"><Editable id="faculty-advisors.free-mediation-services" as="span">Free Mediation Services</Editable></h4>
                  <p className="text-gray-600 text-sm"><Editable id="faculty-advisors.free-mediation-services-and-legal-assistance-for" as="span">Free mediation services and legal assistance for all</Editable></p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2"><Editable id="faculty-advisors.online-dispute-resolution" as="span">Online Dispute Resolution</Editable></h4>
                  <p className="text-gray-600 text-sm"><Editable id="faculty-advisors.odr-services-for-convenient-remote-mediation" as="span">ODR services for convenient remote mediation</Editable></p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2"><Editable id="faculty-advisors.multi-lingual-sessions" as="span">Multi-lingual Sessions</Editable></h4>
                  <p className="text-gray-600 text-sm"><Editable id="faculty-advisors.available-in-odia-hindi-and-english" as="span">Available in Odia, Hindi, and English</Editable></p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2"><Editable id="faculty-advisors.certified-mediators" as="span">Certified Mediators</Editable></h4>
                  <p className="text-gray-600 text-sm"><Editable id="faculty-advisors.trained-and-certified-mediation-professionals" as="span">Trained and certified mediation professionals</Editable></p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2"><Editable id="faculty-advisors.variety-of-disputes" as="span">Variety of Disputes</Editable></h4>
                  <p className="text-gray-600 text-sm"><Editable id="faculty-advisors.consumer-land-property-family-matrimonial" as="span">Consumer, Land, Property, Family, Matrimonial</Editable></p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2"><Editable id="faculty-advisors.private-facilities" as="span">Private Facilities</Editable></h4>
                  <p className="text-gray-600 text-sm"><Editable id="faculty-advisors.private-rooms-and-flexible-schedules" as="span">Private rooms and flexible schedules</Editable></p>
                </div>
              </div>
            </div>
          </section>

          {/* Centre Team */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                <Editable id="faculty-advisors.centre-3" as="span">Centre</Editable> <span className="text-blue-600"><Editable id="faculty-advisors.team" as="span">Team</Editable></span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="h-16 w-16 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2"><Editable id="faculty-advisors.faculty-team" as="span">Faculty Team</Editable></h3>
                  <p className="text-green-600 font-medium mb-2"><Editable id="faculty-advisors.expert-mediators" as="span">Expert Mediators</Editable></p>
                  <p className="text-gray-600 text-sm"><Editable id="faculty-advisors.our-qualified-faculty-members-bring-diverse-expe" as="span">Our qualified faculty members bring diverse expertise in mediation and conflict resolution.</Editable></p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-16 w-16 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2"><Editable id="faculty-advisors.student-volunteers" as="span">Student Volunteers</Editable></h3>
                  <p className="text-purple-600 font-medium mb-2"><Editable id="faculty-advisors.future-mediators" as="span">Future Mediators</Editable></p>
                  <p className="text-gray-600 text-sm"><Editable id="faculty-advisors.dedicated-students-committed-to-learning-and-sup" as="span">Dedicated students committed to learning and supporting mediation services.</Editable></p>
                </div>
              </div>
            </div>
          </section>

          {/* Centre Gallery */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                <Editable id="faculty-advisors.centre-4" as="span">Centre</Editable> <span className="text-blue-600"><Editable id="faculty-advisors.gallery" as="span">Gallery</Editable></span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
                  <EditableImage
                  id="faculty-advisors.image.photo7"
                  src="/images/photo7.jpeg"
                  alt="NLUO Campus View"
                  label="NLUO Campus View"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold"><Editable id="faculty-advisors.nluo-campus" as="span">NLUO Campus</Editable></p>
                      <p className="text-sm text-gray-200"><Editable id="faculty-advisors.modern-infrastructure" as="span">Modern Infrastructure</Editable></p>
                    </div>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
                  <EditableImage
                  id="faculty-advisors.image.photo8"
                  src="/images/photo8.jpeg"
                  alt="Mediation Facilities"
                  label="Mediation Facilities"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold"><Editable id="faculty-advisors.mediation-facilities" as="span">Mediation Facilities</Editable></p>
                      <p className="text-sm text-gray-200"><Editable id="faculty-advisors.state-of-the-art-rooms" as="span">State-of-the-art Rooms</Editable></p>
                    </div>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
                  <EditableImage
                  id="faculty-advisors.image.photo2"
                  src="/images/photo2.jpeg"
                  alt="Academic Events"
                  label="Academic Events"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold"><Editable id="faculty-advisors.academic-events" as="span">Academic Events</Editable></p>
                      <p className="text-sm text-gray-200"><Editable id="faculty-advisors.conferences-workshops" as="span">Conferences & Workshops</Editable></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16">
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                <Editable id="faculty-advisors.contact" as="span">Contact</Editable> <span className="text-blue-600"><Editable id="faculty-advisors.information" as="span">Information</Editable></span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1"><Editable id="faculty-advisors.chandra-mauli-mishra" as="span">Chandra Mauli Mishra</Editable></h3>
                  <p className="text-gray-600 text-sm">+91-7379132929</p>
                </div>
                
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1"><Editable id="faculty-advisors.nimisha-sarma" as="span">Nimisha Sarma</Editable></h3>
                  <p className="text-gray-600 text-sm">+91-9864858821</p>
                </div>
                
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1"><Editable id="faculty-advisors.email" as="span">Email</Editable></h3>
                  <p className="text-gray-600 text-sm"><Editable id="faculty-advisors.cmn-nluo-ac-in" as="span">cmn@nluo.ac.in</Editable></p>
                </div>
                
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1"><Editable id="faculty-advisors.social-media" as="span">Social Media</Editable></h3>
                  <p className="text-gray-600 text-sm"><Editable id="faculty-advisors.instagram-linkedin" as="span">Instagram & LinkedIn</Editable></p>
                </div>
              </div>
              
              <div className="mt-8 text-center bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4"><Editable id="faculty-advisors.visit-us" as="span">Visit Us</Editable></h3>
                <p className="text-gray-600 leading-relaxed">
                  <strong><Editable id="faculty-advisors.national-law-university-odisha-nluo" as="span">National Law University Odisha (NLUO)</Editable></strong><br />
                  <Editable id="faculty-advisors.sector-13-cda-cuttack-753014" as="span">Sector-13, CDA, Cuttack - 753014</Editable><br />
                  <Editable id="faculty-advisors.odisha-india" as="span">Odisha, India</Editable>
                </p>
              </div>
            </div>
          </section>

          {/* Advisory Role */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              <Editable id="faculty-advisors.advisory" as="span">Advisory</Editable> <span className="text-blue-600"><Editable id="faculty-advisors.role" as="span">Role</Editable></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3"><Editable id="faculty-advisors.content-oversight" as="span">Content Oversight</Editable></h3>
                <p className="text-gray-600 text-sm">
                  <Editable id="faculty-advisors.ensuring-all-published-content-meets-academic-st" as="span">Ensuring all published content meets academic standards and contributes meaningfully to legal scholarship.</Editable>
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3"><Editable id="faculty-advisors.research-guidance" as="span">Research Guidance</Editable></h3>
                <p className="text-gray-600 text-sm">
                  <Editable id="faculty-advisors.providing-strategic-direction-for-research-initi" as="span">Providing strategic direction for research initiatives and identifying emerging areas of legal importance.</Editable>
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3"><Editable id="faculty-advisors.quality-assurance" as="span">Quality Assurance</Editable></h3>
                <p className="text-gray-600 text-sm">
                  <Editable id="faculty-advisors.maintaining-editorial-standards-and-ensuring-the" as="span">Maintaining editorial standards and ensuring the relevance of content to legal practitioners and scholars.</Editable>
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