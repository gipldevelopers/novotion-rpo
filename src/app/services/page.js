"use client";

import { Layout } from "@/components/layout/Layout";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { CTASectionV2 } from "@/components/home-v2/CTASectionV2";

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
