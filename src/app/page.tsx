'use client';

import HeroSection from '@/components/sections/HeroSection'
import PillarsSection from '@/components/sections/PillarsSection'
import WhyNdaraSection from '@/components/sections/WhyNdaraSection';
import TestimonialsSection from '@/components/sections/TestimonialSection';
import TeamSection from '@/components/sections/TeamSection';
import CTASection from '@/components/sections/CTASection';
import NewsletterModal from '@/components/NewsletterModal';
import { useNewsletterModal } from '@/hooks/useNewsletterModal';

export default function Home() {
  const { isModalOpen, closeModal } = useNewsletterModal();

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

      {/* Newsletter Modal */}
      <NewsletterModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
