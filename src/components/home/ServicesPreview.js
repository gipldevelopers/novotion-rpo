"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Users, Building, Search, UserCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Briefcase, title: "Full RPO Partnership", description: "End-to-end recruitment management with a dedicated team fully integrated into your organization.", href: "/services#full-rpo", gradient: "from-secondary to-emerald-400" },
  { icon: Users, title: "Project RPO", description: "Flexible, on-demand recruitment support for specific hiring campaigns or seasonal peaks.", href: "/services#project-rpo", gradient: "from-blue-500 to-cyan-400" },
  { icon: Building, title: "Offshore Support", description: "Cost-effective recruitment operations leveraging our skilled India-based team.", href: "/services#offshore", gradient: "from-violet-500 to-purple-400" },
  { icon: Search, title: "Executive Search", description: "Specialized headhunting for C-suite, VP, and director-level leadership positions.", href: "/services#executive", gradient: "from-accent to-amber-400" },
  { icon: UserCheck, title: "Candidate Screening", description: "Comprehensive pre-screening, assessment, and interview coaching services.", href: "/services#screening", gradient: "from-rose-500 to-pink-400" },
];

export function ServicesPreview() {
  return (
    <Section className="bg-muted/30">
      <SectionHeader
        badge="Our Services"
        title="RPO Service Models"
        description="Tailored solutions designed to meet your unique recruitment challenges, from full partnership to specialized support."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
          >
            <Link
              href={service.href}
              className="group card-elevated p-8 h-full flex flex-col relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-primary-foreground flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="relative text-xl font-bold mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
              <p className="relative text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
              <div className="relative mt-6 flex items-center text-secondary font-semibold">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mt-14"
      >
        <Button asChild size="lg" className="btn-primary h-14 px-10 text-base">
          <Link href="/services">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </Section>
  );
}
