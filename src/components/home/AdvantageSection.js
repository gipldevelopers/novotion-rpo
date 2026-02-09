"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Target, Zap, Shield, LineChart, Users2, Globe } from "lucide-react";

const advantages = [
  { icon: Target, title: "Precision Matching", description: "Our deep industry expertise ensures candidates align with both skill requirements and company culture." },
  { icon: Zap, title: "Accelerated Hiring", description: "Streamlined processes and dedicated teams reduce time-to-hire by up to 50%." },
  { icon: Shield, title: "Quality Guarantee", description: "Rigorous vetting process with retention guarantees ensures you hire right the first time." },
  { icon: LineChart, title: "Data-Driven Insights", description: "Real-time analytics and reporting provide visibility into every aspect of your recruitment." },
  { icon: Users2, title: "Scalable Teams", description: "Flex your recruitment capacity up or down based on seasonal or project demands." },
  { icon: Globe, title: "Global Reach", description: "Access talent pools across USA, UK, and leverage our offshore support for 24/7 coverage." },
];

export function AdvantageSection() {
  return (
    <Section variant="muted">
      <SectionHeader
        badge="Why Novotion"
        title="The Novotion RPO Advantage"
        description="We combine strategic expertise, cutting-edge technology, and a partnership-first approach to transform your talent acquisition."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((advantage, index) => (
          <motion.div
            key={advantage.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group card-premium p-8 hover:border-secondary/30"
          >
            <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
              <advantage.icon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
