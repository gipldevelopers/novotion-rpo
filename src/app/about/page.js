"use client";

import { Layout } from "@/components/layout/Layout";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutRecognitions } from "@/components/about/AboutRecognitions";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutPresence } from "@/components/about/AboutPresence";
import { CTASectionV2 } from "@/components/home-v2/CTASectionV2";

export default function About() {
  return (
    <Layout>
      <main className="bg-white">
        {/* 1. Horizontal Inner Banner */}
        <AboutHero />

        {/* 2. Our Mission & Story */}
        <AboutStory />

        {/* 3. Global Presence Map & Locations */}
        <AboutPresence />

        {/* 4. Team Hierarchy */}
        <AboutTeam />

        {/* 5. Recognitions Marquee */}
        <AboutRecognitions />

        {/* 6. Core Values Grid */}
        <AboutValues />

        {/* 7. CTA Section */}
        <CTASectionV2 />
      </main>
    </Layout>
  );
}
