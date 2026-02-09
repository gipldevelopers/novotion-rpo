"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Monitor, Stethoscope, Landmark, Factory, ShoppingBag, Briefcase, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const industries = [
  { icon: Monitor, name: "Technology and IT", color: "bg-blue-500/10 text-blue-600" },
  { icon: Stethoscope, name: "Healthcare", color: "bg-rose-500/10 text-rose-600" },
  { icon: Landmark, name: "Financial Services", color: "bg-emerald-500/10 text-emerald-600" },
  { icon: Factory, name: "Manufacturing", color: "bg-amber-500/10 text-amber-600" },
  { icon: ShoppingBag, name: "Retail and E-Commerce", color: "bg-purple-500/10 text-purple-600" },
  { icon: Briefcase, name: "Professional Services", color: "bg-cyan-500/10 text-cyan-600" },
  { icon: Palette, name: "Marketing and Creative", color: "bg-pink-500/10 text-pink-600" },
];

export function IndustriesPreview() {
  return (
    <Section variant="muted">
      <SectionHeader badge="Industries" title="Industries We Serve" description="Deep sector expertise across key industries." />
      <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
        {industries.map((industry, index) => (
          <motion.div key={industry.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className={"card-premium px-6 py-4 flex items-center gap-3 hover:border-secondary/30"}>
            <div className={"w-10 h-10 rounded-lg " + industry.color + " flex items-center justify-center"}>
              <industry.icon className="h-5 w-5" />
            </div>
            <span className="font-medium">{industry.name}</span>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="text-center mt-10">
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href="/industries">Explore All Industries <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </motion.div>
    </Section>
  );
}
