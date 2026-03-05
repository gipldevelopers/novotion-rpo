import { Layout } from "@/components/layout/Layout";
import { HeroSectionV8 } from "@/components/home-v2/HeroSectionV8";
import { MetricsSection } from "@/components/home-v2/MetricsSectionV2";
import { ProblemSection } from "@/components/home-v2/ProblemSectionV2";
import { AdvantageSection } from "@/components/home-v2/AdvantageSectionV2";
import { ServicesPreview } from "@/components/home-v2/ServicesPreviewV2";
import { IndustriesPreview } from "@/components/home-v2/IndustriesPreviewV2";
import { HowItWorksV2 } from "@/components/home-v2/HowItWorksV2";
import { TestimonialsSection } from "@/components/home-v2/TestimonialsSectionV2";
import { ContactSection } from "@/components/home-v2/ContactSectionV2";
import { CTASectionV2 } from "@/components/home-v2/CTASectionV2";

export default function Home() {
  return (
    <Layout>
      <div className="bg-[#070A11]">
        <HeroSectionV8 />
        <MetricsSection />
        <ProblemSection />
        <AdvantageSection />
        <ServicesPreview />
        <HowItWorksV2 />
        <IndustriesPreview />
        <TestimonialsSection />
        <ContactSection />
        <CTASectionV2 />
      </div>
    </Layout>
  );
}
