import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function WatchStoryPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-6xl aspect-video">
          <video
            src="/story.mp4"
            controls
            autoPlay
            className="w-full h-full rounded-xl"
          />
        </div>
      </main>

      <Footer />
    </>
  )
}
