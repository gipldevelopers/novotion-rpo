"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Cog, Layout, Users, Globe, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "End-to-End RPO",
        description: "A complete overhaul of your talent acquisition engine. From employer branding to final onboarding.",
        features: ["Strategy Audit", "Pipeline Build", "Culture Filter"],
        icon: Cog,
        tag: "Integrated"
    },
    {
        title: "On-Demand Scaling",
        description: "Need to hire 10 engineers in 30 days? Our project-based RPO plugs directly into your peak cycles.",
        features: ["Burst Capacity", "Speed-to-Fill", "Risk Transfer"],
        icon: Layout,
        tag: "Flexible"
    },
    {
        title: "Offshore Hubs",
        description: "Architecting elite specialized hubs in emerging markets. Global quality, high cost-efficiency.",
        features: ["Market Analysis", "Local Compliance", "Hybrid Management"],
        icon: Globe,
        tag: "Global"
    },
];

export function ServicesPreview() {
    return (
        <section id="services" className="py-20 md:py-32 bg-white relative overflow-hidden scroll-mt-32">
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
                        Our Solutions
                    </motion.div>
                    -
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">
                        Strategic Talent <br />
                        <span className="text-secondary">Delivery Systems</span>
                    </h2>

                    <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                        Precision-engineered models designed to solve your most complex hiring bottlenecks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative p-8 md:p-10 rounded-xl bg-slate-50 border border-slate-100 hover:border-secondary/20 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
                        >
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:bg-white transition-all shadow-sm">
                                        <service.icon className="h-5 w-5" />
                                    </div>
                                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em]">{service.tag}</span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-secondary transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-slate-500 text-[14px] font-light leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 mb-10">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-[13px] text-slate-400 font-medium">
                                            <Check className="h-4 w-4 text-secondary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/services" className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-secondary transition-colors">
                                    Full Specification <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
