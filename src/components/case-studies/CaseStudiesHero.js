"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";
import Image from "next/image";

export function CaseStudiesHero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/blogs_hero_bg.png"
                    alt="Noltven Case Studies"
                    fill
                    className="object-cover opacity-80 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-white/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
            </div>

            <div className="container-premium relative z-10">
                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter leading-none"
                    >
                        Proven Results
                    </motion.h1>
                    <p className="text-secondary text-lg md:text-xl font-bold uppercase tracking-[0.3em] mb-8">
                        Real Challenges. Measurable Impact.
                    </p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl text-slate-700 max-w-2xl font-normal leading-relaxed"
                    >
                        Explore our comprehensive case studies detailing how we have transformed scaling challenges into operational excellence for global partners.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
