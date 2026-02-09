"use client";

import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Users, 
  Building, 
  Search, 
  UserCheck,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/home/CTASection";

const services = [
  {
    id: "full-rpo",
    icon: Briefcase,
    title: "Full RPO Partnership",
    overview: "Complete end-to-end recruitment process outsourcing where we become your dedicated talent acquisition team.",
    whatYouGet: [
      "Dedicated recruitment team embedded in your organization",
      "Full lifecycle management from requisition to onboarding",
      "Employer branding and candidate experience optimization",
      "ATS implementation and management",
      "Comprehensive analytics and reporting",
      "Continuous process improvement initiatives",
    ],
    bestFor: "Enterprises with ongoing, high-volume hiring needs seeking to transform their entire recruitment function.",
    outcomes: [
      "50%+ reduction in cost-per-hire",
      "40% faster time-to-fill",
      "Improved quality of hire metrics",
      "Enhanced employer brand",
    ],
  },
  {
    id: "project-rpo",
    icon: Users,
    title: "Recruitment On-Demand (Project RPO)",
    overview: "Flexible, project-based recruitment support for specific hiring campaigns, expansions, or seasonal peaks.",
    whatYouGet: [
      "Dedicated project team for defined scope",
      "Rapid ramp-up and ramp-down capability",
      "Project-specific KPIs and milestones",
      "Integration with existing processes",
      "Knowledge transfer upon completion",
      "Flexible contract terms",
    ],
    bestFor: "Companies with specific hiring projects, new market entries, or seasonal hiring spikes.",
    outcomes: [
      "Rapid capacity scaling",
      "Controlled project costs",
      "Specialist expertise on demand",
      "No long-term commitment required",
    ],
  },
  {
    id: "offshore",
    icon: Building,
    title: "Recruitment Outsourcing (Offshore Support)",
    overview: "Cost-effective recruitment operations leveraging our skilled India-based team for maximum efficiency.",
    whatYouGet: [
      "Dedicated offshore recruitment specialists",
      "Sourcing and initial screening",
      "Candidate database management",
      "Interview coordination",
      "Administrative support",
      "24/7 operational coverage",
    ],
    bestFor: "Organizations looking to extend their internal team's capacity while significantly reducing operational costs.",
    outcomes: [
      "60-70% cost reduction vs. onshore",
      "Extended working hours coverage",
      "Scalable support capacity",
      "Focus internal team on strategic work",
    ],
  },
  {
    id: "executive",
    icon: Search,
    title: "Executive Search & Headhunting",
    overview: "Specialized search services for senior leadership, C-suite, and hard-to-find specialist positions.",
    whatYouGet: [
      "Dedicated executive search consultant",
      "Comprehensive market mapping",
      "Discreet candidate approach",
      "Thorough assessment and referencing",
      "Offer negotiation support",
      "Onboarding guidance",
    ],
    bestFor: "Critical leadership hires where experience, network, and discretion are paramount.",
    outcomes: [
      "Access to passive talent",
      "Reduced hiring risk",
      "Faster executive placement",
      "Long-term retention focus",
    ],
  },
  {
    id: "screening",
    icon: UserCheck,
    title: "Candidate Pre-Screening & Coaching",
    overview: "Comprehensive candidate evaluation and preparation services to ensure only the best reach your hiring managers.",
    whatYouGet: [
      "Skills and competency assessments",
      "Cultural fit evaluation",
      "Background and reference checking",
      "Interview preparation coaching",
      "Salary benchmarking",
      "Detailed candidate reports",
    ],
    bestFor: "Companies wanting to improve candidate quality and reduce interview-to-hire ratio.",
    outcomes: [
      "Higher interview-to-offer ratio",
      "Reduced hiring manager time",
      "Better prepared candidates",
      "More informed hiring decisions",
    ],
  },
];

export default function Services() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              RPO Solutions Tailored to{" "}
              <span className="text-secondary">Your Needs</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              From full-scale recruitment transformation to specialized support, 
              we offer flexible models that align with your business objectives and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <Section>
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.overview}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">What You Get</h3>
                  <ul className="space-y-3">
                    {service.whatYouGet.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-muted rounded-xl p-6 mb-6">
                  <h3 className="font-semibold mb-2">Best For:</h3>
                  <p className="text-muted-foreground">{service.bestFor}</p>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="card-premium p-8 lg:p-10 sticky top-28">
                  <h3 className="text-xl font-semibold mb-6">Business Outcomes</h3>
                  <ul className="space-y-4">
                    {service.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-sm font-bold">
                          {i + 1}
                        </div>
                        <span className="font-medium">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-border">
                    <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      <Link href="/contact">
                        Discuss This Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTASection />
    </Layout>
  );
}
