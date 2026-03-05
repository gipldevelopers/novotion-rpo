"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const problems = [
    {
        title: "High Time-To-Hire",
        description: "Standard recruitment models take 60+ days to fill critical roles, causing operational friction. We replace waiting with targeted, rapid execution.",
        tag: "Time Loss"
    },
    {
        title: "Quality Mismatch",
        description: "Traditional filters miss sub-surface cultural and technical fits, leading to high turnover. Our precision-first approach ensures perfect alignment from day one.",
        tag: "Cultural Risk"
    },
    {
        title: "Inefficient Cost Structure",
        description: "Unoptimized agency fees and hidden processing costs bleed your operational budget. We eradicate overhead for a radically lean and scalable expansion.",
        tag: "Cost Bloat"
    },
];

export function ProblemSection() {
    return (
        <section id="problems" className="py-12 md:py-12 bg-white relative overflow-hidden scroll-mt-20">
            <div className="container-premium relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Sticky Context */}
                    <div className="lg:col-span-5 relative">
                        <div className="lg:sticky lg:top-40">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-6 md:mb-8">
                                    <Sparkles className="h-4 w-4" />
                                    The Challenge
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tighter leading-[1.12]">
                                    Why Traditional <br />
                                    <span className="text-secondary">Models Are Broken</span>
                                </h2>
                                <p className="text-slate-600 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-lg">
                                    Standard growth tactics are fundamentally flawed. We expose the hidden inefficiencies of old-school agency logic—eliminating wasted time, poor culture fits, and bloated costs to pave a direct road to market dominance.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Numbered Clean List (No Boxes) */}
                    <div className="lg:col-span-7 flex flex-col gap-10 md:gap-14 pt-4 lg:pt-0">
                        {problems.map((problem, index) => (
                            <motion.div
                                key={problem.title}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="flex flex-col sm:flex-row gap-5 sm:gap-8 group items-start"
                            >
                                {/* Large Numbering */}
                                <div className="flex-shrink-0 pt-0 sm:pt-1">
                                    <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-200 group-hover:text-secondary/30 transition-colors duration-500 inline-block drop-shadow-sm">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Content Area */}
                                <div className="flex-grow">
                                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                                            {problem.title}
                                        </h3>
                                        <div className="hidden sm:block h-px bg-slate-200 flex-grow transition-colors group-hover:bg-secondary/30" />
                                        <span className="text-[9px] font-bold text-secondary uppercase tracking-[0.3em] bg-secondary/5 px-3 py-1 rounded-full">
                                            {problem.tag}
                                        </span>
                                    </div>
                                    <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
