"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Phone, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <Section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative section-dark rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-center overflow-hidden"
        style={{ boxShadow: "var(--shadow-2xl)" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-8 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4" />
            Free 30-Minute Strategy Session
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Ready to Transform Your
            <br />
            <span className="text-gradient-primary">Talent Acquisition?</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Schedule a free consultation with our RPO experts to discover how we can help you build a world-class hiring engine tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary text-secondary-foreground text-base h-14 px-10">
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/30 text-base h-14 px-10 backdrop-blur-sm">
              <a href="tel:+1234567890">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
