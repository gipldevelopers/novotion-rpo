"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "14+", label: "Enterprise Partners", icon: Users },
  { value: "85%", label: "Placement Success", icon: TrendingUp },
  { value: "60%", label: "Cost Reduction", icon: CheckCircle2 },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-section overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-graphic.png"
          alt="Talent Network"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-secondary/60"
          animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-accent/60"
          animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/2 w-1 h-1 rounded-full bg-secondary/40"
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container-premium relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="badge-dark mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Strategic RPO Partner for Enterprise Growth
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.05] tracking-tight mb-8"
            >
              Transform Your
              <br />
              <span className="text-gradient-primary">Talent Acquisition</span>
              <br />
              Strategy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 leading-relaxed"
            >
              Enterprise-grade Recruitment Process Outsourcing for USA and UK. Accelerate hiring with measurable outcomes and transform recruitment into a strategic advantage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button asChild size="lg" className="btn-primary text-secondary-foreground text-base px-8 py-6 h-auto">
                <Link href="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/30 text-base px-8 py-6 h-auto backdrop-blur-sm">
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8"
            >
              {["Scalable Solutions", "Proven Results", "24/7 Support"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-primary-foreground/80">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="card-dark p-6 flex items-center gap-6"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <stat.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-foreground">{stat.value}</div>
                    <div className="text-primary-foreground/60 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 pt-12 border-t border-primary-foreground/10"
        >
          <p className="text-primary-foreground/40 text-sm uppercase tracking-widest font-medium mb-8">
            Trusted by forward-thinking enterprises
          </p>
          <div className="flex flex-wrap gap-x-16 gap-y-6 items-center">
            {["TechCorp", "GlobalFinance", "HealthFirst", "InnovateLabs", "NextGen Systems"].map((company, index) => (
              <motion.span
                key={company}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-primary-foreground/30 text-xl font-bold tracking-wide hover:text-primary-foreground/50 transition-colors cursor-default"
              >
                {company}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
