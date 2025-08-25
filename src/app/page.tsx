import HeroSection from '@/components/sections/HeroSection'
import PillarsSection from '@/components/sections/PillarsSection'
import WhyNdaraSection from '@/components/sections/WhyNdaraSection';
import TestimonialsSection from '@/components/sections/TestimonialSection';
import TeamSection from '@/components/sections/TeamSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />

      {/* Decorative Element - Between Mission and Pillars */}
      <div className="relative">
        <div className="absolute -top-70 -right-60 z-0">
          <img
            src="/assets/ellipse3.svg"
            alt="Backdrop decoration"
            className="w-[1200px] h-[1200px] opacity-100"
          />
        </div>
      </div>

      <PillarsSection />
      <WhyNdaraSection />
      <TestimonialsSection />
      <TeamSection />
      <CTASection />
    </main>
  );
}
