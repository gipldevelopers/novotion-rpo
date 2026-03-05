"use client";

import { Layout } from "@/components/layout/Layout";
import { CareersHero } from "@/components/careers/CareersHero";
import { CareersGrid } from "@/components/careers/CareersGrid";
import { CTASectionV2 } from "@/components/home-v2/CTASectionV2";

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
