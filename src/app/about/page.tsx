import AboutHeadingSection from '@/components/sections/AboutHeadingSection';
import AboutWelcomeSection from '@/components/sections/AboutWelcomeSection';
import CommunityTestimonialSection from '@/components/sections/CommunityTestimonialSection';
import CTASection from '@/components/sections/CTASection';




export default function About() {
  return (
    <main>
      <AboutHeadingSection />
      <AboutWelcomeSection />
      <CommunityTestimonialSection />

      <CTASection />
    </main>
  );
}