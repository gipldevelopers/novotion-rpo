"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";
import Image from "next/image";

export function BlogsHero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/blogs_hero_bg.png"
                    alt="Noltven Blogs"
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
                        Industry <span className="text-secondary">Insights</span>
                    </h1>
                    <p className="text-secondary text-sm md:text-base font-bold uppercase tracking-[0.4em] mb-8">
                        Strategy, Growth & Market Intel
                    </p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl text-slate-700 max-w-2xl font-normal leading-relaxed"
                    >
                        Practical insights and expert perspectives across recruitment, marketing, AI,
                        business development, and  inance from the people doing the work every day.
                    </motion.p>
                </div>
            </div>

        </section>
    );
}
