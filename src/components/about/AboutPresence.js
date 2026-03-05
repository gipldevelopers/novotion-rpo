"use client";

import { motion } from "framer-motion";
import { Sparkles, MapPin, Globe, Clock, ShieldCheck } from "lucide-react";

const locations = [
    {
        title: "USA & UK",
        subtitle: "Strategic HQ & Market Leadership",
        description: "Primary markets focusing on executive alignment, strategy, and local compliance.",
        icon: ShieldCheck,
        tags: ["Strategy", "Leadership", "Compliance"]
    },
    {
        title: "India (Ahmedabad)",
        subtitle: "Operational Excellence Hub",
        description: "Advanced sourcing, screening, and administrative delivery engine powered by local expertise.",
        icon: Globe,
        tags: ["Scalability", "Sourcing", "Quality Control"]
    },
    {
        title: "24/7 Connectivity",
        subtitle: "Round-the-Clock Momentum",
        description: "Synchronized global operations ensuring hiring pipelines never stop moving.",
        icon: Clock,
        tags: ["Speed", "Efficiency", "Continuous Coverage"]
    }
];

export function AboutPresence() {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="container-premium relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
                        >
                            <Sparkles className="h-4 w-4" />
                            Global Presence
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tighter">
                            A Borderless Talent <br />
                            <span className="text-secondary">Delivery Framework</span>
                        </h2>

                        <div className="space-y-8">
                            {locations.map((loc, idx) => (
                                <motion.div
                                    key={loc.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-6 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:bg-white transition-all shadow-sm">
                                        <loc.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{loc.title}</h3>
                                        <p className="text-slate-500 text-sm font-light mb-4 leading-relaxed max-w-md">
                                            {loc.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {loc.tags.map(tag => (
                                                <span key={tag} className="text-[9px] font-bold text-slate-300 uppercase tracking-widest px-2 py-1 rounded-md border border-slate-100">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative hidden lg:block"
                    >
                        {/* Abstract Map or Network Graphic */}
                        <div className="relative h-[600px] w-full bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden shadow-inner">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_1px)] bg-[size:40px_40px] opacity-[0.05]" />

                            {/* Animated Pulse Dots */}
                            <div className="absolute top-1/4 left-1/4">
                                <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-20" />
                                <div className="relative w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-xl shadow-secondary/20" />
                                <span className="absolute top-6 left-0 whitespace-nowrap text-[10px] font-bold text-slate-900 tracking-widest uppercase bg-white px-2 py-1 rounded-md shadow-sm border border-slate-100">Orlando, FL</span>
                            </div>

                            <div className="absolute top-1/3 left-1/2">
                                <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-20" />
                                <div className="relative w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-xl shadow-secondary/20" />
                                <span className="absolute top-6 left-0 whitespace-nowrap text-[10px] font-bold text-slate-900 tracking-widest uppercase bg-white px-2 py-1 rounded-md shadow-sm border border-slate-100">London, UK</span>
                            </div>

                            <div className="absolute bottom-1/3 right-1/4">
                                <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-20" />
                                <div className="relative w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-xl shadow-secondary/20" />
                                <span className="absolute top-6 left-0 whitespace-nowrap text-[10px] font-bold text-slate-900 tracking-widest uppercase bg-white px-2 py-1 rounded-md shadow-sm border border-slate-100">Ahmedabad, IN</span>
                            </div>

                            {/* Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M25,25 Q50,20 50,33 T75,66" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                                <path d="M50,33 Q60,50 75,66" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
