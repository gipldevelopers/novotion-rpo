import { Layout } from "@/components/layout/Layout";
import { CareersHero } from "@/components/careers/CareersHero";
import { CareersGrid } from "@/components/careers/CareersGrid";
import { CTASectionV2 } from "@/components/home-v2/CTASectionV2";

export const metadata = {
    title: "Careers & Global Talent | Join the Noltven Team",
    description: "Build your career with Noltven. We are looking for high-performance talent specialized in recruitment, marketing, and business transformation.",
};

export default function Careers() {
    return (
        <Layout>
            <main className="bg-white">
                {/* 1. Global Talent Hero */}
                <CareersHero />

                {/* 2. Opportunities & Intel Grid */}
                <CareersGrid />

                {/* 3. High-Conversion CTA Extension */}
                <CTASectionV2 />
            </main>
        </Layout>
    );
}
