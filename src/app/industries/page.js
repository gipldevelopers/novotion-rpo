"use client";

import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import { 
  Monitor, 
  Stethoscope, 
  Landmark, 
  Factory, 
  ShoppingBag, 
  Briefcase,
  Palette,
  GraduationCap,
  Truck,
  Building2,
  Cpu,
  Leaf
} from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const industries = [
  {
    icon: Monitor,
    name: "Technology & IT",
    description: "From startups to enterprise tech, we understand the unique challenges of hiring in a competitive, fast-moving industry.",
    roles: ["Software Engineers", "DevOps", "Product Managers", "Data Scientists", "UX Designers"],
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  {
    icon: Stethoscope,
    name: "Healthcare & Life Sciences",
    description: "Specialized recruitment for healthcare providers, pharma, biotech, and medical device companies.",
    roles: ["Clinical Staff", "Research Scientists", "Regulatory Affairs", "Medical Writers", "Lab Technicians"],
    color: "bg-rose-500/10 text-rose-600 border-rose-500/20",
  },
  {
    icon: Landmark,
    name: "Financial Services",
    description: "Banking, insurance, fintech, and investment firms trust us for compliance-aware recruitment.",
    roles: ["Financial Analysts", "Risk Managers", "Compliance Officers", "Quants", "Relationship Managers"],
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  },
  {
    icon: Factory,
    name: "Manufacturing & Engineering",
    description: "Supporting industrial operations with skilled technical and operational talent.",
    roles: ["Engineers", "Plant Managers", "Quality Control", "Supply Chain", "Maintenance Techs"],
    color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-Commerce",
    description: "Omnichannel retail and digital commerce expertise for consumer-facing businesses.",
    roles: ["Store Managers", "E-commerce Specialists", "Merchandisers", "Buyers", "Customer Service"],
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description: "Consulting, legal, accounting, and business services firms requiring top-tier talent.",
    roles: ["Consultants", "Accountants", "Legal Counsel", "Project Managers", "Business Analysts"],
    color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
  },
  {
    icon: Palette,
    name: "Marketing & Creative",
    description: "Agencies and in-house teams seeking creative and marketing professionals.",
    roles: ["Creative Directors", "Digital Marketers", "Content Creators", "Brand Managers", "Designers"],
    color: "bg-pink-500/10 text-pink-600 border-pink-500/20",
  },
  {
    icon: GraduationCap,
    name: "Education & EdTech",
    description: "Traditional education institutions and innovative edtech companies.",
    roles: ["Instructional Designers", "Educators", "Academic Admin", "Product Teams", "Support Staff"],
    color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
  },
  {
    icon: Truck,
    name: "Logistics & Transportation",
    description: "Supply chain, logistics, and transportation companies requiring operational excellence.",
    roles: ["Operations Managers", "Logistics Coordinators", "Drivers", "Warehouse Staff", "Fleet Managers"],
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  },
  {
    icon: Building2,
    name: "Real Estate & Construction",
    description: "Property development, construction, and real estate services organizations.",
    roles: ["Project Managers", "Architects", "Site Managers", "Estimators", "Property Managers"],
    color: "bg-slate-500/10 text-slate-600 border-slate-500/20",
  },
  {
    icon: Cpu,
    name: "Telecommunications",
    description: "Telecom providers and network infrastructure companies.",
    roles: ["Network Engineers", "Technicians", "Sales Teams", "Customer Service", "Project Managers"],
    color: "bg-violet-500/10 text-violet-600 border-violet-500/20",
  },
  {
    icon: Leaf,
    name: "Energy & Sustainability",
    description: "Traditional energy and emerging renewable/clean tech sectors.",
    roles: ["Engineers", "Sustainability Officers", "Operations", "HSE Specialists", "Project Managers"],
    color: "bg-green-500/10 text-green-600 border-green-500/20",
  },
];

export default function Industries() {
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
              Industries
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Deep Expertise Across{" "}
              <span className="text-secondary">Key Sectors</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              Our industry-specialized recruiters understand your unique talent requirements, 
              market dynamics, and competitive landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <Section>
        <SectionHeader
          badge="Sector Expertise"
          title="Industries We Serve"
          description="Whatever your industry, we have the expertise to find and attract the talent you need."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-premium p-8 hover:border-secondary/30"
            >
              <div className={`w-14 h-14 rounded-xl ${industry.color} flex items-center justify-center mb-6 border`}>
                <industry.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{industry.description}</p>
              <div className="flex flex-wrap gap-2">
                {industry.roles.slice(0, 3).map((role) => (
                  <span key={role} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                    {role}
                  </span>
                ))}
                {industry.roles.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                    +{industry.roles.length - 3} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Not Listed Section */}
      <Section variant="muted">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our adaptable methodology and experienced team can quickly develop 
              expertise in any sector. Let's discuss how we can support your specific needs.
            </p>
          </motion.div>
        </div>
      </Section>

      <CTASection />
    </Layout>
  );
}
