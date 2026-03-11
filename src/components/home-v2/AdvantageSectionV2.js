"use client";

import { motion } from "framer-motion";
import { Search, Users, Zap, Briefcase, Globe, Sparkles } from "lucide-react";

const advantages = [
    {
        title: "Precision Sourcing",
        description: "We go beyond job boards using Boolean search, executive headhunting, and passive sourcing to find the candidates your competitors can't reach",
        icon: Search,
        tag: "Outcome: Accuracy"
    },
    {
        title: "Agile Scalability",
        description: "Whether you need one hire or a full operational overhaul, our flexible model scales to your needs without adding permanent overhead.",
        icon: Zap,
        tag: "Outcome: Speed"
    },
    {
        title: "Strategic Advisory",
        description: "We don't just execute we advise on market rates, hiring strategy, marketing direction, and growth planning to keep you ahead of the competition.",
        icon: Briefcase,
        tag: "Outcome: Strategy"
    },
];

export function AdvantageSection() {
    return (
        <section id="advantages" className="py-12 md:py-12 bg-slate-50 relative overflow-hidden scroll-mt-20">
            <div className="container-premium relative z-10 w-full">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 shadow-sm"
                    >
                        <Sparkles className="h-4 w-4" />
                        Our Logic
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tighter leading-[1.12]">
                        Architecting Your <br />
                        <span className="text-secondary">Competitive Advantage</span>
                    </h2>

                    <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto">
                        Every service we deliver is built on three principles: precision, speed, and strategy with clear outcomes at every stage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {advantages.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-secondary/30 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8 md:mb-10">
                                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:bg-white transition-all shadow-sm group-hover:shadow-lg group-hover:shadow-secondary/10">
                                        <item.icon className="h-6 w-6" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] group-hover:text-secondary transition-colors">{item.tag}</span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-secondary transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-slate-500 text-[13px] md:text-sm font-light leading-relaxed group-hover:text-slate-600 transition-colors">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
