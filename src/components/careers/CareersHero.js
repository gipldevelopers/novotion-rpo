"use client";

import { motion } from "framer-motion";
import { Sparkles, Briefcase } from "lucide-react";
import Image from "next/image";

export function CareersHero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
            {/* Background Image with Overlay - Matching Process/Services */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/careers_hero_bg.png"
                    alt="Novotion Careers"
                    fill
                    className="object-cover opacity-80 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-white/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
            </div>

            <div className="container-premium relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 mb-8 backdrop-blur-md"
                    >
                        <Briefcase className="h-4 w-4 text-secondary" />
                        <span className="text-[10px] font-bold text-slate-600 tracking-[0.4em] uppercase">Join the Evolution</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tighter leading-[1.1]"
                    >
                        Build Your Future <br />
                        <span className="text-secondary italic">With Purpose.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-base md:text-xl text-slate-700 max-w-2xl font-normal leading-relaxed"
                    >
                        Not a seat filler. Not a number. A real role, with real impact, at a company that's
                        growing fast and doing work that actually matters.
                    </motion.p>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-100" />
        </section>
    );
}
