import { Layout } from "@/components/layout/Layout";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { CTASectionV2 } from "@/components/home-v2/CTASectionV2";

export const metadata = {
  title: "Professional Services | RPO, Digital Marketing & AI Automation",
  description: "Explore Noltven's full suite of business transformation services. From strategic recruitment to AI-powered operations and performance marketing.",
};

export default function Services() {
  return (
    <Layout>
      <main className="bg-white">
        <ServicesHero />
        <ServicesGrid />
        <CTASectionV2 />
      </main>
    </Layout>
  );
}
