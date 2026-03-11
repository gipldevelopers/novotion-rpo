"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Users, ShieldCheck, Zap, Globe, Clock } from "lucide-react";

const values = [
    {
        icon: Target,
        title: "Outcome Obsessed",
        description: "We're not here to look busy. Every action ties directly to a result you can actually measure.",
        color: "from-orange-500/20 to-orange-500/0"
    },
    {
        icon: Users,
        title: "One Team Always",
        description: "We don't hand you off to junior staff. The people who pitch are the people who deliver.",
        color: "from-secondary/20 to-secondary/0"
    },
    {
        icon: ShieldCheck,
        title: "No Hidden Agendas",
        description: "Flat rates, honest timelines, clear reporting. No surprises ever.",
        color: "from-accent/20 to-accent/0"
    },
    {
        icon: Zap,
        title: "Built to Scale",
        description: "Built to scale with you. Every process, every hire, every campaign grows as you do.",
        color: "from-slate-500/20 to-slate-500/0"
    },
    {
        icon: Globe,
        title: "Cross-Service Edge",
        description: "Five services. One shared strategy. No silos, no gaps, no dropped handoffs.",
        color: "from-secondary/20 to-secondary/0"
    },
    {
        icon: Clock,
        title: "Speed Matters",
        description: "Fast decisions. Immediate starts. Results from week one not quarter one.",
        color: "from-orange-500/20 to-orange-500/0"
    },
];

export function AboutValues() {
    return (
        <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
            <div className="container-premium relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 shadow-sm"
                    >
                        <Sparkles className="h-4 w-4" />
                        Our Core Values
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">
                        The Standards We <br />
                        <span className="text-secondary">Hold Ourselves To</span>
                    </h2>

                    <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                        Not principles on a wall. These are the standards every person at Noltven is held to every day, on every project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-secondary/20 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50"
                        >
                            <div className="relative z-10">
                                <div className="mb-8 relative">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                                    <div className="relative w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:bg-white transition-all shadow-sm">
                                        <value.icon className="h-6 w-6" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-secondary transition-colors">
                                    {value.title}
                                </h3>

                                <p className="text-slate-500 text-[14px] font-light leading-relaxed">
                                    {value.description}
                                </p>
                            </div>

                            {/* Accent Dot */}
                            <div className="absolute top-8 right-8 w-1 h-1 rounded-full bg-slate-200 group-hover:bg-secondary transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
