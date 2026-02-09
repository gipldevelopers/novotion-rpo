"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowRight, Search, Settings, Rocket, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const steps = [
  { number: "01", icon: Search, title: "Deep Dive", subtitle: "Discovery and Planning", description: "We immerse ourselves in your business and hiring needs." },
  { number: "02", icon: Settings, title: "Integration", subtitle: "Setup and Alignment", description: "Integrate our team with your HR and systems." },
  { number: "03", icon: Rocket, title: "Launch", subtitle: "Execute and Optimize", description: "Sourcing, screening, and placing candidates." },
  { number: "04", icon: TrendingUp, title: "Partnership", subtitle: "Scale and Grow", description: "Ongoing support and strategic improvements." },
];

export function ProcessPreview() {
  return (
    <Section>
      <SectionHeader badge="Our Process" title="How We Work" description="A proven methodology that delivers consistent results." />
      <div className="relative">
        <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} className="relative text-center">
              <div className="relative inline-flex mb-6">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-secondary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
              <p className="text-secondary text-sm font-medium mb-3">{step.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} className="text-center mt-12">
        <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
          <Link href="/process">Learn More About Our Process <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </motion.div>
    </Section>
  );
}
