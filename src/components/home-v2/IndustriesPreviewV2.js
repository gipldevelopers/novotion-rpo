"use client";

import { motion } from "framer-motion";
import { Monitor, Stethoscope, Landmark, Factory, ShoppingBag, Briefcase, Palette, ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";

const industries = [
    {
        icon: Monitor,
        name: "Technology & IT",
        subtitle: "Software, SaaS, Engineering",
        tag: "Tech"
    },
    {
        icon: Stethoscope,
        name: "Healthcare",
        subtitle: "Clinical, Administrative, MedTech",
        tag: "Health"
    },
    {
        icon: Landmark,
        name: "Financial Services",
        subtitle: "Banking, FinTech, Insurance",
        tag: "Finance"
    },
    {
        icon: Factory,
        name: "Manufacturing",
        subtitle: "Operations, Supply Chain",
        tag: "Industry"
    },
    {
        icon: ShoppingBag,
        name: "Retail & Commerce",
        subtitle: "E-Commerce, Logistics",
        tag: "E-Com"
    },
    {
        icon: Briefcase,
        name: "Professional Services",
        subtitle: "Legal, Consulting",
        tag: "Corporate"
    },
    {
        icon: Palette,
        name: "Creative & Marketing",
        subtitle: "Agency, Media, Design",
        tag: "Creative"
    },
];

export function IndustriesPreview() {
    return (
        <section id="industries" className="py-12 md:py-12 bg-white relative overflow-hidden scroll-mt-20">
            <div className="container-premium relative z-10 w-full">

                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 md:mb-12">
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 shadow-sm"
                        >
                            <Sparkles className="h-4 w-4" />
                            Global Segments
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-0 tracking-tighter leading-[1.05]">
                            Deep Domain <br />
                            <span className="text-secondary">Expertise</span>
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="text-slate-500 text-xs md:text-sm font-normal leading-relaxed border-l-2 border-slate-100 pl-4">
                            We don't just recruit; we architect specialized talent engines tailored to the unique technical and cultural benchmarks of your sector.
                        </p>
                    </div>
                </div>

                {/* Sculpted Domain Grid */}
                <div className="relative">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {industries.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative p-6 md:p-7 rounded-[2.5rem] border border-slate-200 bg-slate-50/30 hover:bg-white hover:border-secondary/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50"
                            >
                                {/* Interactive Trace Line */}
                                <div className="absolute top-0 left-0 w-full h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                                <div className="relative z-10">
                                    <div className="flex flex-col gap-6 h-full">
                                        <div className="flex items-center justify-between">
                                            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:shadow-lg group-hover:shadow-secondary/10 transition-all duration-500">
                                                <item.icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
                                            </div>
                                            <span className="text-[8px] font-bold text-slate-300 uppercase tracking-[0.3em] group-hover:text-secondary transition-colors">
                                                {item.tag}
                                            </span>
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="text-base md:text-lg font-bold text-slate-900 tracking-tight leading-tight">
                                                {item.name}
                                            </h3>
                                            <p className="text-slate-400 text-[11px] font-light leading-relaxed group-hover:text-slate-600 transition-colors">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Stategic Partnership CTA Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="group relative p-6 md:p-7 rounded-[2.5rem] border border-slate-900 bg-slate-900 overflow-hidden shadow-2xl shadow-slate-900/20"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(207,96,61,0.2),transparent)] opacity-50" />

                            <div className="relative z-10 flex flex-col justify-between h-full gap-6">
                                <div className="space-y-1">
                                    <p className="text-[9px] font-bold text-secondary uppercase tracking-[0.4em]">Strategic Path</p>
                                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tighter leading-none mb-2">
                                        Your Sector <br /> Next
                                    </h3>
                                </div>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest hover:text-secondary transition-colors group/link"
                                >
                                    Scale Now
                                    <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Grid Shadow Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent opacity-30 pointer-events-none" />
            </div>
        </section>
    );
}
