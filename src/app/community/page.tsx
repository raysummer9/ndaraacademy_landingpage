import CommunityHeaderSection from '@/components/sections/CommunityHeaderSection';
import CommunityFeaturesSection from '@/components/sections/CommunityFeaturesSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export default function Community() {
  return (
    <main className="min-h-screen bg-[#fffff0] pt-20">
      <CommunityHeaderSection />
      <CommunityFeaturesSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
