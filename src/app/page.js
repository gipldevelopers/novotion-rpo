import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { MetricsSection } from "@/components/home/MetricsSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { WhatIsRPOSection } from "@/components/home/WhatIsRPOSection";
import { AdvantageSection } from "@/components/home/AdvantageSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { IndustriesPreview } from "@/components/home/IndustriesPreview";
import { ProcessPreview } from "@/components/home/ProcessPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <MetricsSection />
      <ProblemSection />
      <WhatIsRPOSection />
      <AdvantageSection />
      <ServicesPreview />
      <IndustriesPreview />
      <ProcessPreview />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
}
