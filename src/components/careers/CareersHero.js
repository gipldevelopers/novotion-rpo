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
                    src="/assets/careers_hero_bg_ai_1774969469962.png"
                    alt="Noltven Careers"
                    fill
                    className="object-cover opacity-80 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-white/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
            </div>

            <div className="container-premium relative z-10">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                        Global <span className="text-secondary">Careers</span>
                    </h1>
                    <p className="text-secondary text-sm md:text-base font-bold uppercase tracking-[0.4em] mb-8">
                        Join the Evolution
                    </p>

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
