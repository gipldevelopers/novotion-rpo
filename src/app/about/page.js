"use client";

import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Target, Heart, Users, Globe, Award, Handshake } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const values = [
  {
    icon: Target,
    title: "Strategic Focus",
    description: "Every decision we make is aligned with your long-term business objectives, not short-term gains.",
  },
  {
    icon: Heart,
    title: "Candidate Care",
    description: "We treat every candidate with respect, ensuring positive experiences that reflect your employer brand.",
  },
  {
    icon: Users,
    title: "Partnership First",
    description: "We become an extension of your team, fully integrated with your culture and processes.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in every placement and interaction.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Our international footprint enables access to diverse talent pools and 24/7 support.",
  },
  {
    icon: Handshake,
    title: "Transparency",
    description: "Open communication and honest reporting build the trust that powers lasting partnerships.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-secondary/20 text-secondary rounded-full mb-6">
              About Novotion RPO
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Your Strategic Partner in{" "}
              <span className="text-secondary">Talent Acquisition</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              We exist to help USA and UK enterprises build exceptional teams through 
              innovative, scalable recruitment solutions that drive measurable business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Novotion RPO, we're on a mission to transform how enterprises approach talent acquisition. 
              We believe that recruitment should be a strategic advantage, not a bottleneck.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded with a clear vision to bridge the gap between traditional staffing agencies 
              and the sophisticated needs of growing enterprises, we deliver recruitment solutions 
              that are scalable, cost-effective, and results-driven.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our unique hybrid model combines the strategic expertise of our USA and UK teams 
              with the operational efficiency of our India-based support center, enabling 24/7 
              coverage and significant cost advantages for our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-muted rounded-2xl p-8 lg:p-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-bold text-secondary mb-2">USA & UK</h3>
                  <p className="text-muted-foreground">Primary Markets & Strategic Leadership</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-secondary mb-2">India</h3>
                  <p className="text-muted-foreground">Operational Excellence Center (Ahmedabad)</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-secondary mb-2">24/7</h3>
                  <p className="text-muted-foreground">Global Recruitment Coverage</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Why We Exist */}
      <Section variant="muted">
        <SectionHeader
          badge="Our Story"
          title="Why Novotion RPO Exists"
          description="We saw a fundamental problem in how enterprises hire—and we built the solution."
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Traditional recruitment is broken. Companies face a choice between expensive staffing agencies 
                that charge 15-25% per hire with little accountability, or building internal teams that can't 
                scale with business demands.
              </p>
              <p className="text-lg leading-relaxed">
                We founded Novotion RPO to offer a third path: a true partnership model where our success 
                is directly tied to yours. We don't just fill roles—we build the infrastructure for sustainable 
                talent acquisition.
              </p>
              <p className="text-lg leading-relaxed">
                Our approach combines deep industry expertise with operational efficiency. By leveraging 
                our global footprint, we deliver enterprise-grade recruitment at a fraction of traditional costs 
                while maintaining the quality and strategic focus that growing companies need.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader
          badge="Our Values"
          title="What We Stand For"
          description="These principles guide every decision we make and every partnership we build."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                <value.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTASection />
    </Layout>
  );
}
