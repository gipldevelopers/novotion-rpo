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
        <section id="industries" className="py-20 md:py-32 bg-white relative overflow-hidden scroll-mt-32">
            <div className="container-premium relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 shadow-sm"
                    >
                        <Sparkles className="h-4 w-4" />
                        Industry Verticals
                    </motion.div>
                    -
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">
                        Deep Domain Expertise
                    </h2>

                    <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                        We don't just recruit; we understand the nuances of your specific sector to find talent that hit the ground running.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            className="group relative p-8 rounded-xl bg-slate-50 border border-slate-100 hover:border-secondary/20 hover:bg-white transition-all duration-500 flex flex-col h-full overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
                        >
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:bg-white transition-all shadow-sm">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em]">{item.tag}</span>
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-secondary transition-colors">
                                    {item.name}
                                </h3>

                                <p className="text-slate-400 text-xs font-light mb-6">
                                    {item.subtitle}
                                </p>


                            </div>
                        </motion.div>
                    ))}

                    {/* Custom Strategy CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="group relative p-8 rounded-xl bg-slate-50 border border-secondary/20 hover:border-secondary/40 transition-all duration-500 flex flex-col items-center justify-center text-center h-full min-h-[160px] shadow-sm hover:shadow-lg hover:shadow-slate-200/50"
                    >
                        <div className="relative z-10">
                            <p className="text-slate-900 text-sm font-bold tracking-tight mb-2">Your Sector Next</p>
                            <Link href="/contact" className="text-secondary text-[10px] uppercase font-bold tracking-wider hover:underline flex items-center gap-2">
                                Contact For Strategy <ArrowRight className="h-3 w-3" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
