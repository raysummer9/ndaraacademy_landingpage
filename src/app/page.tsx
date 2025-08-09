import HeroSection from '@/components/sections/HeroSection'
import MissionSection from '@/components/sections/MissionSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MissionSection />
      {/* Future sections will be added here */}
    </main>
  )
}
