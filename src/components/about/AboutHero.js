"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

// my name is anjali choudhary

export function AboutHero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/about_inner_banner_bg.png"
                    alt="About Noltven"
                    fill
                    className="object-cover opacity-80 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-white/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
            </div>

            <div className="container-premium relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                        Who We <span className="text-secondary">Are</span>
                    </h1>
                    <p className="text-secondary text-sm md:text-base font-bold uppercase tracking-[0.4em] mb-8">
                        The Idea Behind Noltven
                    </p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl"
                    >
                        Noltven was built on a simple but powerful observation: In today’s global market, hiring more people is not the solution.
                    </motion.p>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </section>
    );
}
