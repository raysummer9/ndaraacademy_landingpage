import CollaborationHeadingSection from '@/components/sections/CollaborationHeadingSection';
import CollaborationCTASection from '@/components/sections/CollaborationCTASection';
import CollaborationCardsSection from '@/components/sections/CollaborationCardsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';


export default function Collaboration() {
  return (
    <main className="min-h-screen bg-[#fffff0] pt-20">
      <CollaborationHeadingSection />
      <CollaborationCTASection />
      <CollaborationCardsSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
