"use client";

import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Search, Settings, Rocket, TrendingUp, CheckCircle } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const phases = [
  {
    number: "01",
    icon: Search,
    title: "Deep Dive",
    subtitle: "Discovery & Planning",
    duration: "Week 1-2",
    description: "We immerse ourselves in your business to understand your unique hiring needs, company culture, and strategic objectives.",
    activities: [
      "Stakeholder interviews and alignment sessions",
      "Current state assessment and gap analysis",
      "Hiring forecast and capacity planning",
      "Technology and process evaluation",
      "Competitive landscape and employer brand analysis",
      "Custom RPO strategy development",
    ],
    outcomes: [
      "Tailored RPO implementation roadmap",
      "Defined KPIs and success metrics",
      "Clear roles and responsibilities matrix",
    ],
  },
  {
    number: "02",
    icon: Settings,
    title: "Integration & Setup",
    subtitle: "Building the Foundation",
    duration: "Week 2-4",
    description: "We seamlessly integrate with your team, systems, and employer brand to create a unified recruitment function.",
    activities: [
      "Team onboarding and culture immersion",
      "ATS and technology integration",
      "Process documentation and playbooks",
      "Employer brand alignment and content creation",
      "Communication protocols establishment",
      "Training for hiring managers",
    ],
    outcomes: [
      "Fully integrated recruitment team",
      "Optimized technology stack",
      "Standardized processes and templates",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Optimize",
    subtitle: "Execution Excellence",
    duration: "Week 4-8",
    description: "We begin active recruitment operations while continuously refining our approach based on real-world performance.",
    activities: [
      "Active candidate sourcing and engagement",
      "Pipeline building and talent pooling",
      "Interview scheduling and coordination",
      "Candidate experience management",
      "Weekly performance reviews",
      "Process optimization iterations",
    ],
    outcomes: [
      "Active candidate pipelines",
      "Initial placements completed",
      "Optimized recruitment workflows",
    ],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Ongoing Partnership",
    subtitle: "Scale & Continuous Improvement",
    duration: "Ongoing",
    description: "We evolve together, scaling capacity as needed and implementing continuous improvements based on data insights.",
    activities: [
      "Monthly business reviews and strategy sessions",
      "Advanced analytics and predictive insights",
      "Market intelligence and salary benchmarking",
      "Employer brand evolution",
      "Process automation opportunities",
      "Succession planning support",
    ],
    outcomes: [
      "Sustained hiring excellence",
      "Measurable ROI and cost savings",
      "Strategic talent advantage",
    ],
  },
];

export default function Process() {
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
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              A Proven Methodology for{" "}
              <span className="text-secondary">Hiring Success</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              Our structured four-phase approach ensures a seamless transition, 
              rapid results, and continuous improvement throughout our partnership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <Section>
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-secondary/50 to-transparent -translate-x-1/2" />

          <div className="space-y-20 lg:space-y-32">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-secondary items-center justify-center z-10">
                  <span className="text-lg font-bold text-secondary">{phase.number}</span>
                </div>

                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`${index % 2 === 1 ? "lg:order-2 lg:pl-20" : "lg:pr-20 lg:text-right"}`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <div className="lg:hidden w-14 h-14 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                        <phase.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary rounded-full mb-2">
                          {phase.duration}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold">{phase.title}</h2>
                        <p className="text-secondary font-medium">{phase.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {phase.description}
                    </p>

                    <div className={`bg-muted rounded-xl p-6 ${index % 2 === 0 ? "lg:ml-auto" : ""} max-w-md`}>
                      <h4 className="font-semibold mb-3">Key Outcomes</h4>
                      <ul className="space-y-2">
                        {phase.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                            <span className="text-muted-foreground">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? "lg:order-1 lg:pr-20" : "lg:pl-20"}`}>
                    <div className="card-premium p-8">
                      <h3 className="text-xl font-semibold mb-6">Activities</h3>
                      <ul className="space-y-4">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">
                              {i + 1}
                            </div>
                            <span className="text-muted-foreground">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </Layout>
  );
}
