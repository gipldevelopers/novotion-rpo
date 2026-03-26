"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Target, Sparkles, Bot } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ServiceSubDetailClient({ service, subService, slug }) {
    if (!service || !subService) return null;
    
    const isMarketing = service.slug === 'digital-marketing';
    const isAI = service.slug === 'ai-automation';

    if (isAI) {
        return (
            <main className="bg-white min-h-screen pt-40 pb-0">
                {/* Unified Hero & Grid Container with Diagonal Gradient */}
                <div className="bg-gradient-to-bl from-blue-50/40 via-white/50 to-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px] -translate-y-[10%] translate-x-[20%]" />
                    
                    {/* AI SPECIAL HERO SECTION */}
                    <section className="relative pb-20 pt-10">
                        <div className="container-premium relative z-10">
                            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                                <div className="lg:w-3/5">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                        <Bot className="h-4 w-4" />
                                        Strategic Pillar
                                    </div>
                                    <div className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">How We Work</div>
                                    <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-slate-900 tracking-tighter leading-[1.05]">
                                        {subService.title.split(' ').slice(0, -1).join(' ')} <span className="text-secondary">{subService.title.split(' ').slice(-1)}</span>
                                    </h1>
                                </div>
                                <div className="lg:w-1/3 xl:w-1/4">
                                    <div className="text-slate-500 text-[13px] leading-relaxed font-normal">
                                        {subService.head && (
                                            <div className="text-slate-900 font-bold mb-2">{subService.head}</div>
                                        )}
                                        <p className="whitespace-pre-line opacity-90">
                                            {subService.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* AI HOW WE WORK SECTION - LIGHT GRID WITH REFLECTIONS */}
                    <section className="pb-32 pt-16">
                        <div className="container-premium relative z-10">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {subService.howWeWork.map((step, i) => {
                                    const hasColon = step.includes(':');
                                    const title = hasColon ? step.split(':')[0] : `Phase ${i + 1}`;
                                    const desc = hasColon ? step.split(':').slice(1).join(':').trim() : step;
                                    
                                    return (
                                        <motion.div 
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/95 via-white/80 to-[#f0f7ff]/40 border border-slate-100 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.1)] transition-all duration-500 group relative overflow-hidden"
                                        >
                                            {/* Corner Sheen - Top Right */}
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 via-transparent to-transparent pointer-events-none z-10" />
                                            <div className="absolute top-0 right-0 w-16 h-[1.5px] bg-gradient-to-l from-secondary/15 to-transparent z-10" />
                                            <div className="absolute top-0 right-0 w-[1.5px] h-16 bg-gradient-to-b from-secondary/15 to-transparent z-10" />

                                            {/* Corner Sheen - Bottom Left */}
                                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/10 via-transparent to-transparent pointer-events-none z-10" />
                                            <div className="absolute bottom-0 left-0 w-16 h-[1.5px] bg-gradient-to-r from-secondary/15 to-transparent z-10" />
                                            <div className="absolute bottom-0 left-0 w-[1.5px] h-16 bg-gradient-to-t from-secondary/15 to-transparent z-10" />

                                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary mb-8 border border-blue-50 shadow-sm transition-transform group-hover:scale-110 relative z-20">
                                                <Target className="h-5 w-5" />
                                            </div>
                                            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 tracking-tight relative z-20">
                                                {title}
                                            </h3>
                                            <p className="text-slate-500 text-[13px] leading-relaxed font-normal relative z-20">
                                                {desc}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>

                {/* CTA Remains the same */}
                <section className="relative py-16 md:py-20 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] overflow-hidden text-center text-white">
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
                        <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-white/10 skew-x-[45deg] translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-[60%] h-[100%] bg-white/10 -skew-x-[45deg] -translate-x-1/3" />
                    </div>
                    
                    <div className="container-premium relative z-10 max-w-4xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tighter leading-tight">
                                Ready to scale your brand <br className="hidden md:block" /> to its full potential?
                            </h2>
                            <p className="text-white/80 text-sm md:text-base mb-8 font-light max-w-2xl mx-auto leading-relaxed">
                                Join the elite group of brands that leverage Noltven's {subService.title} <br className="hidden md:block" /> to own their market and drive consistent growth.
                            </p>
                            <Button asChild className="bg-white text-[#2563eb] hover:bg-slate-900 hover:text-white h-14 px-10 rounded-2xl font-black uppercase tracking-[0.2em] transition-all border-none text-[12px] group/btn shadow-xl shadow-black/10">
                                <Link href="/contact" className="flex items-center gap-3">
                                    Claim Your Strategy Session
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main className="bg-white min-h-screen pt-32 pb-0">
            {/* HERO SECTION */}
            <section className="relative py-24 overflow-hidden text-center bg-white border-b border-slate-50">
                {/* Background Decoration Circles - Atmospheric Glow Group */}
                {isMarketing && (
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
                        <motion.div 
                            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute w-[1200px] h-[1000px] bg-blue-50/60 rounded-[100%] blur-[120px] -translate-y-[20%]"
                        />
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute w-[1000px] h-[900px] bg-secondary/10 rounded-[100%] blur-[100px] translate-x-[10%] translate-y-[10%]"
                        />
                    </div>
                )}

                <div className="container-premium relative z-10">
                    <Link 
                        href={`/services/${slug}`}
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-secondary mb-12 transition-colors font-black uppercase tracking-[0.3em] text-[10px]"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Return to {service.shortTitle} Overview
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                            <Sparkles className="h-4 w-4" />
                            Strategic Pillar
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
                            {subService.title.split(' ').slice(0, -1).join(' ')} <span className="relative inline-block text-secondary">
                                {subService.title.split(' ').slice(-1)}
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/60" viewBox="0 0 200 20" preserveAspectRatio="none">
                                    <motion.path 
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        d="M5,15 Q100,25 195,15" 
                                        stroke="currentColor" 
                                        strokeWidth="6" 
                                        fill="none" 
                                        strokeLinecap="round" 
                                    />
                                </svg>
                            </span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
                            {subService.head || subService.description.split('\n')[0]}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* HOW WE WORK - GRID LAYOUT */}
            {subService.howWeWork && (
                <section className="py-24 bg-[#f4faff] relative overflow-hidden">
                    <div className="container-premium relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-20">
                            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">How We Work</div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 leading-tight">
                                Delivery in {subService.howWeWork.length} <span className="relative inline-block text-secondary">
                                    Effortless
                                    <svg className="absolute -bottom-2 left-0 w-full h-2 text-secondary/40" viewBox="0 0 200 20" preserveAspectRatio="none">
                                        <motion.path 
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            viewport={{ once: true }}
                                            d="M5,15 Q100,25 195,15" 
                                            stroke="currentColor" 
                                            strokeWidth="4" 
                                            fill="none" 
                                        />
                                    </svg>
                                </span> Steps
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {subService.howWeWork.map((step, i) => {
                                const hasColon = step.includes(':');
                                const title = hasColon ? step.split(':')[0] : `Phase ${i + 1}`;
                                const desc = hasColon ? step.split(':').slice(1).join(':').trim() : step;
                                
                                return (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.15)] transition-all duration-500 group relative overflow-hidden"
                                    >
                                        <div className="absolute top-8 right-10 text-4xl font-black text-secondary/5 group-hover:text-secondary/10 transition-colors">
                                            0{i + 1}
                                        </div>
                                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                                            <Target className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 tracking-tighter">
                                            {title}
                                        </h3>
                                        <p className="text-slate-500 text-sm font-normal leading-relaxed opacity-80">
                                            {desc}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* FINAL CTA - FULL WIDTH */}
            <section className="relative py-16 md:py-20 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] overflow-hidden text-center text-white">
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
                    <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-white/10 skew-x-[45deg] translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-[60%] h-[100%] bg-white/10 -skew-x-[45deg] -translate-x-1/3" />
                </div>
                
                <div className="container-premium relative z-10 max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tighter leading-tight">
                            Ready to scale your brand <br className="hidden md:block" /> to its full potential?
                        </h2>
                        <p className="text-white/80 text-sm md:text-base mb-8 font-light max-w-2xl mx-auto leading-relaxed">
                            Join the elite group of brands that leverage Noltven's {subService.title} <br className="hidden md:block" /> to own their market and drive consistent growth.
                        </p>
                        <Button asChild className="bg-white text-[#2563eb] hover:bg-slate-900 hover:text-white h-14 px-10 rounded-2xl font-black uppercase tracking-[0.2em] transition-all border-none text-[12px] group/btn shadow-xl shadow-black/10">
                            <Link href="/contact" className="flex items-center gap-3">
                                Claim Your Strategy Session
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
