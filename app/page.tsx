import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import RecentBlogsSection from '@/components/RecentBlogsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <HeroSection />
        <RecentBlogsSection />
      </main>
      <Footer />
    </div>
  )
}
