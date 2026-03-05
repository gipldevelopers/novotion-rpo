"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Cog, Layout, Users, Globe, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
    {
        title: "End-to-End RPO",
        description: "A complete overhaul of your talent acquisition engine. From employer branding and sourcing strategy to final onboarding and retention analytics.",
        features: ["Strategy & Tech Audit", "Custom Pipeline Build", "Sub-surface Culture Filter", "Scalable Growth Framework"],
        icon: Cog,
        tag: "Integrated",
        color: "bg-[#cf603d]"
    },
    {
        title: "On-Demand Scaling",
        description: "Need to hire 10 engineers in 30 days? Our project-based RPO plugs directly into your peak cycles without adding permanent headcount burden.",
        features: ["Burst Talent Capacity", "Extreme Speed-to-Fill", "Full Risk Transfer", "On-Demand Recruiting Hub"],
        icon: Layout,
        tag: "Flexible",
        color: "bg-[#ebd69b]"
    },
    {
        title: "Offshore Hubs",
        description: "Architecting elite specialized functional hubs in emerging markets. We handle the complexity so you get global quality at high cost-efficiency.",
        features: ["Global Market Analysis", "Local Compliance Setup", "Hybrid Management Model", "Remote Culture Integration"],
        icon: Globe,
        tag: "Global",
        color: "bg-[#070A11]"
    },
];

export function ServicesPreview() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="services" className="py-12 md:py-12 bg-white relative overflow-hidden scroll-mt-20 min-h-[100dvh] flex items-center">
            <div className="container-premium relative z-10 w-full">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-4"
                    >
                        <Sparkles className="h-4 w-4" />
                        Our Solutions
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4 tracking-tighter leading-[1.12]">
                        Strategic Talent <br />
                        <span className="text-secondary">Delivery Systems</span>
                    </h2>
                    <p className="text-slate-500 text-sm md:text-base font-normal leading-relaxed max-w-2xl mx-auto">
                        Precision-engineered models designed to solve your most complex hiring bottlenecks.
                    </p>
                </div>

                {/* Interactive Layout (Tabs) */}
                <div className="grid lg:grid-cols-12 gap-8 items-stretch">

                    {/* Left: Tab Selectors */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {services.map((service, index) => (
                            <button
                                key={service.title}
                                onClick={() => setActiveTab(index)}
                                className={`text-left p-5 md:p-6 rounded-[1.5rem] transition-all duration-500 relative overflow-hidden group border ${activeTab === index
                                    ? 'bg-slate-900 border-slate-900 shadow-xl shadow-slate-900/10'
                                    : 'bg-white border-slate-200 hover:border-secondary/20 hover:bg-slate-50'
                                    }`}
                            >
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${activeTab === index ? 'bg-secondary text-white' : 'bg-slate-50 text-slate-400 group-hover:text-secondary'
                                        }`}>
                                        <service.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <span className={`text-[8px] font-bold uppercase tracking-[0.2em] mb-0.5 block ${activeTab === index ? 'text-secondary/80' : 'text-slate-300'
                                            }`}>
                                            {service.tag}
                                        </span>
                                        <h3 className={`text-base md:text-lg font-bold tracking-tight transition-colors ${activeTab === index ? 'text-white' : 'text-slate-900'
                                            }`}>
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>

                                {activeTab === index && (
                                    <motion.div
                                        layoutId="activeTabGlow"
                                        className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent pointer-events-none"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right: Content Preview */}
                    <div className="lg:col-span-8 bg-slate-50/50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-slate-200 flex flex-col justify-center shadow-sm">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="relative z-10"
                            >
                                <div className="flex items-center gap-3 mb-6 md:mb-8">
                                    <div className="h-px w-6 bg-secondary" />
                                    <span className="text-[9px] font-bold text-secondary uppercase tracking-[0.3em]">Technical Specification</span>
                                </div>

                                <h4 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tighter leading-none">
                                    {services[activeTab].title}
                                </h4>

                                <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed mb-10 max-w-xl italic border-l-2 border-slate-200 pl-6">
                                    "{services[activeTab].description}"
                                </p>

                                <div className="grid sm:grid-cols-2 gap-y-5 gap-x-12 mb-12">
                                    {services[activeTab].features.map((feature, i) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            key={feature}
                                            className="flex items-center gap-3 text-[13px] md:text-sm text-slate-600 font-medium group/feat"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center group-hover/feat:bg-secondary transition-colors duration-300">
                                                <Check className="h-3 w-3 text-secondary group-hover/feat:text-white" />
                                            </div>
                                            {feature}
                                        </motion.div>
                                    ))}
                                </div>

                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-secondary transition-all shadow-xl shadow-slate-900/10 group w-fit"
                                >
                                    Full Service Blueprint
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
