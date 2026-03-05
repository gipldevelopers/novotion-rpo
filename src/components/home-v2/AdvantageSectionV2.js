"use client";

import { motion } from "framer-motion";
import { Search, Users, Zap, Briefcase, Globe, Sparkles } from "lucide-react";

const advantages = [
    {
        title: "Precision Sourcing",
        description: "Moving beyond keywords to identify the sub-surface technical and cultural markers that define elite talent.",
        icon: Search,
        tag: "Accuracy"
    },
    {
        title: "Agile Scalability",
        description: "Our on-demand recruitment framework grows with your project needs, eliminating fixed overhead risks.",
        icon: Zap,
        tag: "Speed"
    },
    {
        title: "Strategic Advisory",
        description: "We don't just fill roles; we build your talent roadmap, advising on market rates and competitive strategy.",
        icon: Briefcase,
        tag: "Strategy"
    },
];

export function AdvantageSection() {
    return (
        <section id="advantages" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden scroll-mt-32">
            <div className="container-premium relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 shadow-sm"
                    >
                        <Sparkles className="h-4 w-4" />
                        Our Logic
                    </motion.div>
                    -
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">
                        Architecting Your <br />
                        <span className="text-secondary">Competitive Advantage</span>
                    </h2>

                    <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                        Precision, speed, and strategic alignment are the cornerstones of our high-impact RPO methodology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {advantages.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative p-8 md:p-10 rounded-xl bg-white border border-slate-100 hover:border-secondary/20 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
                        >
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:bg-white transition-all shadow-sm">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em]">{item.tag}</span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-secondary transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-slate-500 text-[14px] font-light leading-relaxed">
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
