"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, Users, TrendingDown } from "lucide-react";

const problems = [
  { icon: Clock, title: "Slow Time-to-Hire", description: "Traditional recruitment methods drag on for months, leaving critical positions unfilled and teams understaffed." },
  { icon: TrendingDown, title: "Inconsistent Quality", description: "Agency-sourced candidates often don't align with company culture, leading to high turnover and rehiring costs." },
  { icon: Users, title: "Scaling Challenges", description: "Rapidly growing companies struggle to scale their internal recruitment to match business demands." },
  { icon: AlertTriangle, title: "Hidden Costs", description: "Per-hire agency fees, bad hires, and opportunity costs add up to significant hidden expenses." },
];

export function ProblemSection() {
  return (
    <Section variant="muted" className="pt-32">
      <SectionHeader
        badge="The Challenge"
        title="Traditional Recruitment is Broken"
        description="Most companies are stuck with outdated hiring models that drain resources, delay growth, and compromise on talent quality."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {problems.map((problem, index) => (
          <motion.div
            key={problem.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-premium p-8"
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center">
                <problem.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
