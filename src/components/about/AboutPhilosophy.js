"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, TrendingUp, Sparkles } from "lucide-react";

const philosophyItems = [
    {
        icon: Cpu,
        title: "Build Systems",
        description: "Moving from chaos to clarity by engineering repeatable, reliable operational frameworks.",
        color: "from-blue-500/10 to-transparent"
    },
    {
        icon: Zap,
        title: "Drive Efficiency",
        description: "Optimizing every process to move from effort to efficiency, maximizing output with precision.",
        color: "from-secondary/10 to-transparent"
    },
    {
        icon: TrendingUp,
        title: "Enable Scale",
        description: "Creating the foundation for predictable scale, turning inconsistent growth into engineered success.",
        color: "from-orange-500/10 to-transparent"
    }
];

export function AboutPhilosophy() {
    return (
        <section className="py-8 md:py-12 bg-white relative overflow-hidden">
            <div className="container-premium relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter"
                    >
                        Our <span className="text-secondary">Philosophy</span>
                    </motion.h2>

                    <p className="text-secondary text-sm md:text-base font-bold uppercase tracking-[0.4em] mb-8">
                        Growth should not be accidental, It should be engineered
                    </p>

                    <p className="text-slate-600 text-base md:text-lg font-normal leading-relaxed">
                        Sustainable growth isn't about more people or harder work it's about better systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {philosophyItems.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-secondary/20 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50"
                        >
                            <div className="mb-8 w-14 h-14 rounded-xl bg-white flex items-center justify-center text-slate-400 group-hover:text-secondary shadow-sm transition-all border border-slate-100 group-hover:scale-110">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                            <p className="text-slate-600 text-sm font-normal leading-relaxed group-hover:text-slate-700 transition-colors">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* What Makes Us Different Section */}
                <div className="py-10 md:py-12 border-t border-slate-100 mb-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 block">What Makes Us Different</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 md:mb-12 tracking-tighter">
                            One Unified System<br />
                            <span className="text-secondary text-xl md:text-3xl">for Scalability & Performance</span>
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-12">
                            {["Recruitment", "Business Development", "Marketing", "AI Automation", "Finance"].map((service, idx) => (
                                <div
                                    key={service}
                                    className={`p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 font-bold text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center text-center min-h-[5rem] shadow-sm ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
                                >
                                    {service}
                                </div>
                            ))}
                        </div>

                        <p className="text-slate-600 text-base md:text-xl font-normal leading-relaxed">
                            Instead of managing multiple vendors, tools, and teams, we give businesses a single growth partner combining core functions into a single, high-output engine.
                        </p>
                    </div>
                </div>

                {/* Vision Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-20 rounded-[2.5rem] md:rounded-[3rem] bg-slate-900 text-white relative overflow-hidden text-center"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-secondary)_0%,_transparent_50%)] opacity-20" />
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 block">Our Vision</span>
                        <h2 className="text-xl md:text-4xl font-light leading-tight">
                            To become the global operational growth partner for companies that want to scale <span className="text-secondary font-bold">faster, smarter, and more sustainably</span> across international markets.
                        </h2>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
