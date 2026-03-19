"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, Sparkles, Target, X, Zap, Shield, BarChart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export function ServiceDetailContent({ service }) {
    if (!service) return null;

    return (
        <section className="py-16 md:py-24 bg-white relative">
            <div className="container-premium">
                {/* Intro Section - Strategic Insight */}
                {service.intro && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 md:mb-24"
                    >
                        <div className="w-full">
                            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 tracking-tighter leading-tight text-balance">
                                {service.intro.title}
                            </h2>
                            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-12 border-l-4 border-secondary/20 pl-8">
                                {service.intro.overview}
                            </p>
                            
                            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
                                {service.intro.points && service.intro.points.map((p, i) => (
                                    <div key={i} className="space-y-4">
                                        <h3 className="text-lg font-bold text-slate-900 tracking-tight">{p.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed font-light italic">{p.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 md:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-200 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-[40px] translate-x-10 -translate-y-10" />
                                <p className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-8 flex items-center gap-2">
                                    <Zap className="h-3 w-3 shadow-none" />
                                    What this gives you:
                                </p>
                                <div className="grid md:grid-cols-2 gap-y-6 gap-x-10">
                                    {(service.highlights || service.intro?.highlights || []).map((h, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-white border border-slate-200 flex items-center justify-center text-secondary shadow-sm">
                                                <Check className="h-3 w-3" />
                                            </div>
                                            <span className="text-sm text-slate-700 font-medium leading-tight">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
                    {/* Left Column - Content */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-16 md:space-y-24"
                        >
                            {/* Overview (Fallback for old structure) */}
                            {!service.intro && service.overview && (
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tighter">
                                        Service <span className="text-secondary">Overview</span>
                                    </h2>
                                    <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                                        {service.overview}
                                    </p>
                                </div>
                            )}

                            {/* What You Get / Detailed Sections */}
                            <div>
                                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-10 tracking-tight flex items-center gap-4">
                                    <Sparkles className="h-7 w-7 text-secondary" />
                                    Strategic Delivery Pillars
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {service.whatYouGet?.map((item, i) => {
                                        const itemSlug = item.slug || item.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `pillar-${i+1}`;
                                        
                                        return (
                                            <motion.div 
                                                key={i} 
                                                whileHover={{ y: -5 }}
                                                className="h-full"
                                            >
                                                <Link 
                                                    href={`/services/${service.slug}/${itemSlug}`}
                                                    className="flex flex-col gap-6 p-8 rounded-[2.5rem] bg-slate-50 border border-slate-200 group hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer text-left h-full"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-all">
                                                            <CheckCircle className="h-6 w-6" />
                                                        </div>
                                                        <div className="flex items-center gap-1.5 py-1 px-3 rounded-full bg-white border border-slate-100 text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-secondary group-hover:border-secondary transition-all">
                                                            Phase 0{i+1}
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="space-y-3">
                                                        <h4 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-secondary transition-colors">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-2">
                                                            {item.head}
                                                        </p>
                                                    </div>

                                                    <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
                                                        Explore Detail <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Who This Is For Section (Fallback or specific) */}
                            {service.bestFor && (
                                <div className="p-8 md:p-14 rounded-[3.5rem] bg-slate-900 text-white relative overflow-hidden group shadow-2xl">
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold mb-6 tracking-tight flex items-center gap-4">
                                            <Target className="h-7 w-7 text-secondary" />
                                            Strategic Alignment: Who This Is For
                                        </h3>
                                        <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed italic border-l-2 border-secondary/40 pl-8">
                                            "{service.bestFor}"
                                        </p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Right Column - Sidebar Stats */}
                    <div className="lg:col-span-4 sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="p-8 md:p-10 rounded-[3rem] bg-white border border-slate-200 shadow-2xl shadow-slate-200/50"
                        >
                            <h3 className="text-lg font-bold text-slate-900 mb-8 tracking-tight">Business Deliverables</h3>
                            <div className="space-y-6 mb-8">
                                {service.outcomes?.map((outcome, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[11px] font-bold text-slate-400 group-hover:bg-secondary group-hover:text-white transition-all">
                                            0{i + 1}
                                        </div>
                                        <p className="text-slate-700 font-bold text-[14px] leading-tight mt-2">{typeof outcome === 'string' ? outcome : (outcome.title || outcome.text || "Outcome")}</p>
                                    </div>
                                ))}
                            </div>

                            <Button asChild className="w-full bg-secondary hover:bg-slate-900 text-white rounded-2xl h-16 shadow-xl shadow-secondary/20 transition-all border-none">
                                <Link href="/contact" className="flex items-center justify-center gap-3 text-[12px] font-black tracking-widest uppercase">
                                    INITIATE CONSULT <ArrowRight className="h-5 w-5" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Closing Strategic Call to Action */}
                {service.closing && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 md:mt-20 p-10 md:p-16 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden text-center group shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 blur-[130px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-secondary/20 transition-all duration-700" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 blur-[130px] rounded-full -translate-x-1/2 translate-y-1/2" />
                        
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-xl md:text-4xl font-black mb-8 tracking-tighter leading-tight italic uppercase">
                                {service.closing?.title}
                            </h2>
                            <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                                {service.closing?.text}
                            </p>
                            
                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {service.closing?.points?.map((p, i) => (
                                    <div key={i} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                                        <Check className="h-2.5 w-2.5 text-secondary" />
                                        {p}
                                    </div>
                                ))}
                            </div>

                            <Button asChild className="bg-secondary hover:bg-white hover:text-slate-900 text-white h-16 px-10 rounded-2xl font-black uppercase tracking-[0.2em] transition-all shadow-2xl shadow-secondary/20 border-none text-[12px] group/btn">
                                <Link href="/contact" className="flex items-center gap-3">
                                    {service.closing?.cta || "Get Started"}
                                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e2e8f0;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #cbd5e1;
                }
            `}</style>
        </section>
    );
}

