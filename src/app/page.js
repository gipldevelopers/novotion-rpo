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
import { SocialSidebar } from "@/components/layout/SocialSidebar";
import { caseStudies } from "@/data/caseStudiesData";

export const metadata = {
  title: "Building High-Impact Teams Through Strategic RPO & Digital Growth",
  description: "Noltven is a premium partner for Recruitment Process Outsourcing, AI-driven automation, and high-performance digital marketing. Scale your operations with speed and precision.",
};

export default function Home() {
  return (
    <Layout>
      <SocialSidebar />
      <div className="bg-[#070A11] will-change-transform">
        <HeroSectionV8 />
        <MetricsSection />
        <ProblemSection />
        <AdvantageSection />
        <ServicesPreview />
        <HowItWorksV2 />
        <IndustriesPreview />
        <ContactSection />
        <TestimonialsSection initialData={caseStudies} />
        <CTASectionV2 />
      </div>
    </Layout>
  );
}
