import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Mail, Phone, Linkedin, Award, BookOpen, GraduationCap } from 'lucide-react'

// Sample faculty advisors data
const facultyAdvisors = [
  {
    name: "Prof. Dr. Srikrishna Deva Rao",
    position: "Vice-Chancellor",
    organization: "National Law University Odisha",
    specialization: ["Constitutional Law", "Administrative Law", "Public Policy"],
    qualifications: ["Ph.D. (Law)", "LL.M.", "B.A. LL.B. (Hons.)"],
    experience: "25+ years in legal academia and practice",
    email: "vc@nluo.ac.in",
    phone: "+91-671-2866850",
    linkedin: "#",
    image: "/api/placeholder/300/300",
    bio: "Prof. Dr. Srikrishna Deva Rao is a distinguished legal academic with extensive experience in constitutional and administrative law. He has authored numerous publications and has been instrumental in shaping legal education policy in India."
  },
  {
    name: "Prof. Dr. Manjula Bai",
    position: "Dean, School of Law",
    organization: "National Law University Odisha",
    specialization: ["Corporate Law", "Securities Regulation", "Commercial Law"],
    qualifications: ["Ph.D. (Law)", "LL.M. (Corporate Law)", "B.A. LL.B."],
    experience: "20+ years in corporate law research and teaching",
    email: "dean@nluo.ac.in",
    phone: "+91-671-2866851",
    linkedin: "#",
    image: "/api/placeholder/300/300",
    bio: "Prof. Dr. Manjula Bai is a renowned expert in corporate law with extensive research contributions in securities regulation and corporate governance. She has advised various government committees on corporate law reforms."
  },
  {
    name: "Prof. Dr. Ravi Kumar Singh",
    position: "Director, Centre for Corporate Law",
    organization: "National Law University Odisha",
    specialization: ["Merger & Acquisitions", "Corporate Governance", "Banking Law"],
    qualifications: ["Ph.D. (Corporate Law)", "LL.M. (Business Law)", "B.Com. LL.B."],
    experience: "18+ years in corporate law practice and academia",
    email: "director.ccl@nluo.ac.in",
    phone: "+91-671-2866852",
    linkedin: "#",
    image: "/api/placeholder/300/300",
    bio: "Prof. Dr. Ravi Kumar Singh leads the Centre for Corporate Law and specializes in complex corporate transactions and governance issues. He has extensive experience in both practice and academia."
  },
  {
    name: "Prof. Dr. Anita Sharma",
    position: "Professor of Law",
    organization: "National Law University Odisha",
    specialization: ["Insolvency & Bankruptcy", "Competition Law", "Financial Regulation"],
    qualifications: ["Ph.D. (Law)", "LL.M. (Commercial Law)", "B.A. LL.B. (Hons.)"],
    experience: "15+ years in commercial law research",
    email: "anita.sharma@nluo.ac.in",
    phone: "+91-671-2866853",
    linkedin: "#",
    image: "/api/placeholder/300/300",
    bio: "Prof. Dr. Anita Sharma is a specialist in insolvency law and competition regulation. She has been actively involved in policy discussions on the Insolvency and Bankruptcy Code and has published extensively on financial regulation."
  }
]

function FacultyCard({ faculty }: { faculty: typeof facultyAdvisors[0] }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-8">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-32 h-32 rounded-full bg-linear-to-r from-blue-400 to-indigo-500 flex items-center justify-center mb-4">
            <span className="text-white text-2xl font-bold">
              {faculty.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{faculty.name}</h3>
          <p className="text-blue-600 font-medium mb-1">{faculty.position}</p>
          <p className="text-gray-600 text-sm">{faculty.organization}</p>
        </div>
        
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
              Specialization
            </h4>
            <div className="flex flex-wrap gap-2">
              {faculty.specialization.map((spec, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {spec}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <GraduationCap className="h-4 w-4 mr-2 text-green-500" />
              Qualifications
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {faculty.qualifications.map((qual, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  {qual}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <Award className="h-4 w-4 mr-2 text-purple-500" />
              Experience
            </h4>
            <p className="text-sm text-gray-600">{faculty.experience}</p>
          </div>
        </div>
        
        <div className="border-t pt-4 mb-4">
          <p className="text-sm text-gray-600 leading-relaxed">{faculty.bio}</p>
        </div>
        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="h-4 w-4 mr-2 text-blue-500" />
            <a href={`mailto:${faculty.email}`} className="hover:text-blue-600 transition-colors">
              {faculty.email}
            </a>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="h-4 w-4 mr-2 text-green-500" />
            <span>{faculty.phone}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Linkedin className="h-4 w-4 mr-2 text-blue-700" />
            <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              LinkedIn Profile
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
              Faculty <span className="text-blue-600">Advisors</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Meet our distinguished faculty advisors who guide the Centre for Corporate Law. 
              Their expertise, research contributions, and commitment to excellence shape our academic 
              and research initiatives in corporate law.
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 rounded-lg p-8 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Academic <span className="text-blue-600">Leadership</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our faculty advisors bring decades of combined experience in legal education, research, 
                and practice. They provide strategic guidance to CLM Blog, ensuring that our content 
                maintains the highest standards of academic rigor while remaining relevant to contemporary 
                legal practice. Each advisor contributes their unique expertise in specialized areas of 
                corporate law, creating a comprehensive knowledge base for our publications and research initiatives.
              </p>
            </div>
          </div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {facultyAdvisors.map((faculty, index) => (
              <FacultyCard key={index} faculty={faculty} />
            ))}
          </div>

          {/* Advisory Role */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Advisory <span className="text-blue-600">Role</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Content Oversight</h3>
                <p className="text-gray-600 text-sm">
                  Ensuring all published content meets academic standards and contributes meaningfully to legal scholarship.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Research Guidance</h3>
                <p className="text-gray-600 text-sm">
                  Providing strategic direction for research initiatives and identifying emerging areas of legal importance.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-600 text-sm">
                  Maintaining editorial standards and ensuring the relevance of content to legal practitioners and scholars.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect with Our Faculty</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Interested in collaborating on research or have questions about our academic programs? 
              Our faculty advisors are always open to meaningful academic and professional exchanges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ccl@nluo.ac.in"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Centre for Corporate Law
              </a>
              
              <a
                href="tel:+91-671-2866850"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Main Office
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}