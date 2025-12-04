import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import RecentBlogsSection from '@/components/RecentBlogsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50/30">
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Stats Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="relative mx-auto w-16 h-16 mb-4">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-indigo-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute inset-2 bg-linear-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">50+</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">50+</h3>
                <p className="text-gray-600">Events Conducted</p>
              </div>
              
              <div className="text-center group">
                <div className="relative mx-auto w-16 h-16 mb-4">
                  <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-teal-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute inset-2 bg-linear-to-r from-emerald-600 to-teal-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">1K+</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">1,000+</h3>
                <p className="text-gray-600">Participants</p>
              </div>
              
              <div className="text-center group">
                <div className="relative mx-auto w-16 h-16 mb-4">
                  <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute inset-2 bg-linear-to-r from-purple-600 to-pink-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">100+</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">100+</h3>
                <p className="text-gray-600">Cases Mediated</p>
              </div>
              
              <div className="text-center group">
                <div className="relative mx-auto w-16 h-16 mb-4">
                  <div className="absolute inset-0 bg-linear-to-r from-orange-500 to-red-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute inset-2 bg-linear-to-r from-orange-600 to-red-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">5+</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">NLUO CMN</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leading the way in mediation education and alternative dispute resolution
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-indigo-600 rounded-lg mb-6 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Expert Training</h3>
                  <p className="text-gray-300">Comprehensive mediation and negotiation training programs led by industry experts</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-r from-emerald-600/20 to-teal-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="w-12 h-12 bg-linear-to-r from-emerald-500 to-teal-600 rounded-lg mb-6 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Community Outreach</h3>
                  <p className="text-gray-300">Extensive outreach programs making mediation accessible to rural and urban communities</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-600 rounded-lg mb-6 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Research & Publications</h3>
                  <p className="text-gray-300">Cutting-edge research in ADR with regular publications and academic contributions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <RecentBlogsSection />
        
        {/* CTA Section */}
        <section className="py-20 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Disputes into Dialogue?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our community of mediators, legal professionals, and peace-builders working to create a more harmonious world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Learning
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
