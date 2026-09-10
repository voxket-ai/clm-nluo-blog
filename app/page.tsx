import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import RecentBlogsSection from '@/components/RecentBlogsSection'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Editable from '@/components/editable/Editable'

// Recent Insights reads live articles from MongoDB on each request.
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50/30">
      <Navbar />
      <main>
        <HeroSection />

        {/* Features Section */}
        <section className="relative py-20 overflow-hidden bg-[url('/nloubg.jpeg')] bg-cover bg-center bg-no-repeat">
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-slate-900/80"></div>

          {/* Decorative glows */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <Editable id="home.why.title" as="span" label="Why-choose heading">Why Choose</Editable>{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">
                  <Editable id="home.why.title-accent" as="span" label="Why-choose heading (accent)">NLUO CMN</Editable>
                </span>
              </h2>
              <Editable id="home.why.subtitle" as="p" multiline label="Why-choose subtitle" className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leading the way in mediation education and alternative dispute resolution
              </Editable>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-indigo-600 rounded-lg mb-6 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <Editable id="home.card1.title" as="h3" label="Card 1 title" className="text-xl font-bold text-white mb-4">Expert Training</Editable>
                  <Editable id="home.card1.body" as="p" multiline label="Card 1 body" className="text-gray-300">
                    Comprehensive mediation and negotiation training programs led by industry experts
                  </Editable>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-r from-emerald-600/20 to-teal-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="w-12 h-12 bg-linear-to-r from-emerald-500 to-teal-600 rounded-lg mb-6 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <Editable id="home.card2.title" as="h3" label="Card 2 title" className="text-xl font-bold text-white mb-4">Community Outreach</Editable>
                  <Editable id="home.card2.body" as="p" multiline label="Card 2 body" className="text-gray-300">
                    Extensive outreach programs making mediation accessible to rural and urban communities
                  </Editable>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-600 rounded-lg mb-6 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <Editable id="home.card3.title" as="h3" label="Card 3 title" className="text-xl font-bold text-white mb-4">Research &amp; Publications</Editable>
                  <Editable id="home.card3.body" as="p" multiline label="Card 3 body" className="text-gray-300">
                    Cutting-edge research in ADR with regular publications and academic contributions
                  </Editable>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RecentBlogsSection />

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-slate-900 py-20">
          <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-transparent to-indigo-900/30"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <Editable id="home.cta.title" as="h2" multiline label="Closing call-to-action heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Disputes into Dialogue?
            </Editable>
            <Editable id="home.cta.body" as="p" multiline label="Closing call-to-action body" className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join our community of mediators, legal professionals, and peace-builders working to create a more harmonious world.
            </Editable>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/faculty-advisors">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  <Editable id="home.cta.button" as="span" label="Call-to-action button label">Contact Us</Editable>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
