"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Users, Zap, Search, Sparkles } from "lucide-react";

const problems = [
    {
        title: "High Time-To-Hire",
        description: "Standard recruitment models take 60+ days to fill critical roles, causing operational friction.",
        icon: Zap,
        tag: "Time Loss"
    },
    {
        title: "Quality Mismatch",
        description: "Traditional filters miss sub-surface cultural and technical fits, leading to high turnover.",
        icon: Users,
        tag: "Cultural Risk"
    },
    {
        title: "Inefficient Cost Structure",
        description: "Unoptimized agency fees and hidden processing costs bleed your operational budget.",
        icon: TrendingDown,
        tag: "Cost Bloat"
    },
];

export function ProblemSection() {
    return (
        <section id="problems" className="py-20 md:py-32 bg-white relative overflow-hidden scroll-mt-32">
            <div className="container-premium relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
                    >
                        <Sparkles className="h-4 w-4" />
                        The Challenge
                    </motion.div>
                    -
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">
                        Why Traditional Models <br />
                        <span className="text-secondary">Are Breaking Your Scale</span>
                    </h2>

                    <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                        Recruitment isn't just about filling seats; it's about solving the three core friction points that stall global expansion.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={problem.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative p-8 md:p-10 rounded-xl bg-slate-50 border border-slate-100 hover:border-secondary/20 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
                        >
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:bg-white transition-all shadow-sm">
                                        <problem.icon className="h-5 w-5" />
                                    </div>
                                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em]">{problem.tag}</span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-secondary transition-colors">
                                    {problem.title}
                                </h3>

                                <p className="text-slate-500 text-[14px] font-light leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_10px_#cf603d]" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
