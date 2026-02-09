"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const benefits = [
  "Dedicated recruitment team integrated with your HR",
  "Scalable capacity that grows with your needs",
  "Data-driven hiring decisions and analytics",
  "Employer brand management and candidate experience",
  "Compliance and process standardization",
  "Significant cost savings over traditional agencies",
];

export function WhatIsRPOSection() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <SectionHeader
            badge="Understanding RPO"
            title="What is Recruitment Process Outsourcing?"
            description="RPO is a strategic partnership where an organization transfers all or part of its recruitment processes to an external provider."
            align="left"
            className="mb-8"
          />
          <ul className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{benefit}</span>
              </motion.li>
            ))}
          </ul>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/about">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="relative">
          <div className="absolute -inset-4 bg-secondary/5 rounded-3xl -z-10" />
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-primary-foreground">
            <h3 className="text-2xl font-semibold mb-6">RPO vs Traditional Agencies</h3>
            <div className="space-y-6">
              <div className="pb-6 border-b border-primary-foreground/20">
                <p className="text-sm uppercase tracking-wider text-primary-foreground/60 mb-2">Traditional Agency</p>
                <ul className="space-y-2 text-primary-foreground/80">
                  <li>Per-hire fees (15-25% of salary)</li>
                  <li>Transaction-focused relationship</li>
                  <li>Limited employer brand integration</li>
                  <li>Inconsistent candidate quality</li>
                </ul>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-secondary mb-2">RPO Partnership</p>
                <ul className="space-y-2 text-primary-foreground">
                  <li>Predictable cost per hire</li>
                  <li>Long-term strategic partnership</li>
                  <li>Full employer brand alignment</li>
                  <li>Quality-focused with accountability</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
