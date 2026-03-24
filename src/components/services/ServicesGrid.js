"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Layout as LayoutIcon, Cog, Target, ArrowRight, ChevronRight, Check, Settings2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";

const iconMap = {
    recruitment: Users,
    'biz-dev': Briefcase,
    'business-development': Briefcase,
    marketing: LayoutIcon,
    'digital-marketing': LayoutIcon,
    'ai-automation': Cog,
    finance: Target,
    'accounting-finance': Target,
};

export function ServicesGrid() {
    const services = servicesData;
    const loading = false;

    if (loading) {
        return (
            <div className="py-20 text-center">
                <Settings2 className="w-10 h-10 text-slate-200 animate-spin mx-auto mb-4" />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Deployment Matrix...</p>
            </div>
        );
    }
    return (
        <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
            <div className="container-premium relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = iconMap[service.id] || Briefcase;
                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-secondary/20 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50"
                                >
                                    <Link href={`/services/${service.slug}`} className="block">
                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-10">
                                                <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:bg-white transition-all shadow-sm">
                                                    <IconComponent className="h-6 w-6" />
                                                </div>
                                            </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-secondary transition-colors">
                                        {service.shortTitle || service.title}
                                    </h3>

                                    <p className="text-slate-500 text-[14px] font-light leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    <div className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-secondary transition-colors pt-4 border-t border-slate-50 w-full">
                                        View Specification <ChevronRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </Link>

                            {/* Accent Dot */}
                            <div className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-slate-100 group-hover:bg-secondary transition-colors" />
                        </motion.div>
                            );
                        })}

                    {/* Specialized Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900 text-white border border-slate-800 flex flex-col justify-center items-start relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-secondary/40 transition-colors" />
                        <h3 className="text-2xl font-bold mb-4 tracking-tighter">Not Sure Where to Start?</h3>
                        <p className="text-slate-400 text-sm font-light mb-8 leading-relaxed">
                            Tell us what's holding your business back. We'll figure out which services move the needle and build something that fits.
                        </p>
                        <Button asChild className="bg-secondary hover:bg-secondary/90 text-white rounded-xl h-12 px-8 border-none shadow-lg shadow-secondary/20">
                            <Link href="/contact" className="text-[12px] font-bold">LET'S TALK</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
