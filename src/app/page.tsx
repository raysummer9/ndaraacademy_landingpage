import HeroSection from '@/components/sections/HeroSection'
import MissionSection from '@/components/sections/MissionSection'
import PillarsSection from '@/components/sections/PillarsSection'
import WhyNdaraSection from '@/components/sections/WhyNdaraSection';
import TestimonialsSection from '@/components/sections/TestimonialSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <PillarsSection />
      <WhyNdaraSection />
      <TestimonialsSection />
    </main>
  );
}
