import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Users, Target, Award, BookOpen, Calendar, MapPin, Phone, Mail } from 'lucide-react'
import Editable from '@/components/editable/Editable'

export default function CMNPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <Editable id="cmn.centre-for-mediation-and" as="span">Centre for Mediation and</Editable> <span className="text-blue-600"><Editable id="cmn.negotiation" as="span">Negotiation</Editable></span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Promoting dialogue-based, non-adversarial dispute resolution mechanisms and nurturing 
              a generation of skilled mediators and negotiators at NLUO.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900"><Editable id="cmn.our-vision" as="span">Our Vision</Editable></h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To establish NLUO as a leading center for excellence in mediation and negotiation, 
                contributing to a more peaceful and harmonious society through innovative dispute resolution mechanisms.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900"><Editable id="cmn.our-mission" as="span">Our Mission</Editable></h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To promote research, training, and awareness in mediation and negotiation, 
                providing accessible dispute resolution services and building capacity in alternative dispute resolution.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              <Editable id="cmn.what-we" as="span">What We</Editable> <span className="text-blue-600"><Editable id="cmn.offer" as="span">Offer</Editable></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3"><Editable id="cmn.training-programs" as="span">Training Programs</Editable></h3>
                <p className="text-gray-600">
                  Comprehensive courses in mediation and negotiation techniques, 
                  from basic skills to advanced practice.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3"><Editable id="cmn.mediation-services" as="span">Mediation Services</Editable></h3>
                <p className="text-gray-600">
                  Professional mediation services for various disputes including family, 
                  property, and commercial matters.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3"><Editable id="cmn.events-workshops" as="span">Events & Workshops</Editable></h3>
                <p className="text-gray-600">
                  Regular seminars, conferences, and workshops featuring leading experts 
                  in alternative dispute resolution.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              <Editable id="cmn.get-in" as="span">Get in</Editable> <span className="text-blue-600"><Editable id="cmn.touch" as="span">Touch</Editable></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2"><Editable id="cmn.location" as="span">Location</Editable></h3>
                <p className="text-gray-600">
                  <Editable id="cmn.national-law-university-odisha" as="span">National Law University Odisha</Editable><br />
                  <Editable id="cmn.sector-13-cda-cuttack-odisha" as="span">Sector 13, CDA, Cuttack, Odisha</Editable>
                </p>
              </div>
              
              <div className="text-center">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2"><Editable id="cmn.phone" as="span">Phone</Editable></h3>
                <p className="text-gray-600">
                  +91 671 230 8018
                </p>
              </div>
              
              <div className="text-center">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2"><Editable id="cmn.email" as="span">Email</Editable></h3>
                <p className="text-gray-600">
                  <Editable id="cmn.cmn-nluo-ac-in" as="span">cmn@nluo.ac.in</Editable>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}