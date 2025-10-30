import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BookOpen, Target, Users, Award, ArrowRight, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function AboutTheBlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              NLUO Centre for <span className="text-blue-600">Mediation and Negotiation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The Centre for Mediation and Negotiation is an initiative of National Law University Odisha to promote academic research on themes pertaining to Alternative Dispute Resolution (ADR).
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              <span className="text-blue-600">Overview</span>
            </h2>
            <div className="prose max-w-none text-gray-600 leading-relaxed text-lg">
              <p className="mb-6">
                The Centre aims to bridge the gap between theoretical understanding and real-world application, with a focus on the study of mediation and negotiation. In addition to conducting research, the centre seeks to organise events such as Faculty Development Programmes (FDPs), seminars, training workshops, and diploma and certificate programmes on ADR to encourage hands-on learning.
              </p>
              <p className="mb-6">
                It also aims to familiarise students with the inner workings of various processes. The centre's long-term goal is to improve students' communication abilities and instil in them the faculty of mediation and negotiation.
              </p>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Vision & <span className="text-blue-600">Mission</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our vision is to become a centre of excellence that leads ground breaking research, education, and practical involvement in the areas of Mediation and Negotiation. As India's first higher institution run Mediation Cell, we aim to foster peaceful conflict resolution through research, education, and practical involvement, promoting justice, understanding, and effective communication.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Mission</h3>
                <p className="text-gray-600 mb-4">
                  The NLUO Centre for Mediation and Negotiation is dedicated to advancing knowledge and practice in the domain of Mediation and Negotiation. Our mission is four-fold:
                </p>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Conducting interdisciplinary research on dispute causes, mediation dynamics, and legal frameworks</li>
                  <li>• Offering practical learning experiences through FDPs, diploma and certificate courses</li>
                  <li>• Establishing collaborations with academic and professional institutions</li>
                  <li>• Promoting mediation regionally and globally through ODR services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* NLUO Mediation Cell */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                NLUO <span className="text-blue-600">Mediation Cell</span>
              </h2>
              
              <div className="prose max-w-none text-gray-600 leading-relaxed">
                <p className="text-lg mb-6">
                  The NLUO Mediation Cell is the first higher institution run mediation cell in India to provide live mediation services (both private and court-referred mediation) as a part of its social activism. The Cell aims to handle multifarious legal disputes including family, matrimonial, property, land and consumer disputes through mediation with the help of faculties-cum-trained mediators.
                </p>
                <p className="mb-6">
                  In the beginning, the Cell is said to extend the focus on people from nearby places and will gradually extend to the whole state and provide free mediation services both physically and virtually through Online Dispute Resolution (ODR). With this initiative, NLUO is striving hard to achieve the constitutional goal of access to justice and free legal aid.
                </p>
                <p className="mb-8">
                  NLUO, with the establishment of the NLUO Mediation Cell, is also not far from achieving SDG 16 under the UN Sustainable Development Goals 2030, i.e., Peace, Justice and, Strong Institutions.
                </p>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Facilities Offered</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Free Mediation Services</h4>
                  <p className="text-gray-600 text-sm">Free mediation services and legal assistance for all</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Online Dispute Resolution</h4>
                  <p className="text-gray-600 text-sm">ODR services for convenient remote mediation</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Multi-lingual Sessions</h4>
                  <p className="text-gray-600 text-sm">Available in Odia, Hindi, and English</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Certified Mediators</h4>
                  <p className="text-gray-600 text-sm">Trained and certified mediation professionals</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Variety of Disputes</h4>
                  <p className="text-gray-600 text-sm">Consumer, Land, Property, Family, Matrimonial</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Private Facilities</h4>
                  <p className="text-gray-600 text-sm">Private rooms and flexible schedules</p>
                </div>
              </div>
            </div>
          </section>


          {/* Our Team */}
          <section className="mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Our <span className="text-blue-600">Team</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">Director</h3>
                  <p className="text-gray-700">Mr. Abhay Kumar</p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">Co-Directors</h3>
                  <p className="text-gray-700">Dr. Akshay Verma</p>
                  <p className="text-gray-700">Ms. Suryasmita Parida</p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">Mentor</h3>
                  <p className="text-gray-700">Sri Valli M</p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">Co-ordinators</h3>
                  <p className="text-gray-700">Chandra Mauli Mishra</p>
                  <p className="text-gray-700">Yashaswi Agrima</p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">Social Media Head</h3>
                  <p className="text-gray-700">Nimisha Sarma</p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">Research Head</h3>
                  <p className="text-gray-700">Manvi</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16">
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Contact <span className="text-blue-600">Us</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1">Chandra Mauli Mishra</h3>
                  <p className="text-gray-600 text-sm">+91-7379132929</p>
                </div>
                
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1">Nimisha Sarma</h3>
                  <p className="text-gray-600 text-sm">+91-9864858821</p>
                </div>
                
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 text-sm">cmn@nluo.ac.in</p>
                </div>
                
                <div className="text-center bg-white rounded-lg p-4 shadow-md">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900 mb-1">Social Media</h3>
                  <p className="text-gray-600 text-sm">Instagram & LinkedIn</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  )
}