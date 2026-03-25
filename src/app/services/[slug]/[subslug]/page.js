"use client";

import { useParams } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Zap, Target, Shield, Sparkles, ArrowRight, Settings2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";

export default function ServiceSubDetail() {
    const params = useParams();
    const slug = params?.slug ? decodeURIComponent(params.slug) : "";
    const subslug = params?.subslug ? decodeURIComponent(params.subslug) : "";
    
    const service = servicesData.find(s => 
        s.slug === slug || 
        s.slug === slug.replace(/\s+/g, '-') ||
        s.id === slug
    );
    
    const subService = service?.whatYouGet?.find((ss) => 
        ss.slug === subslug || 
        ss.slug === subslug.replace(/\s+/g, '-') ||
        ss.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === subslug.replace(/\s+/g, '-')
    );
    const loading = false;

    if (loading) {
        return (
            <Layout>
                <div className="min-h-[80vh] flex flex-col items-center justify-center p-20">
                    <Settings2 className="w-12 h-12 text-slate-200 animate-spin mb-6" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Accessing Depth Layer...</p>
                </div>
            </Layout>
        );
    }

    if (!service || !subService) {
        return (
            <Layout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-20">
                    <h1 className="text-4xl font-bold mb-4 font-display">Section Not Found</h1>
                    <p className="text-slate-500 mb-8">The detailed section you're looking for could not be located in our production architecture.</p>
                    <Link href={`/services/${slug}`} className="px-6 py-3 bg-secondary text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#b04f30] transition-colors">
                        Back to Service Overview
                    </Link>
                </div>
            </Layout>
        );
    }

    const isMarketing = service.slug === 'digital-marketing';

    return (
        <Layout>
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
                <section className="relative py-24 md:py-32 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] overflow-hidden text-center text-white">
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
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter leading-tight">
                                Ready to scale your brand <br className="hidden md:block" /> to its full potential?
                            </h2>
                            <p className="text-white/80 text-base md:text-lg mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                                Join the elite group of brands that leverage Noltven's {subService.title} <br className="hidden md:block" /> to own their market and drive consistent growth.
                            </p>
                            <Button asChild className="bg-white text-[#2563eb] hover:bg-slate-900 hover:text-white h-16 px-12 rounded-2xl font-black uppercase tracking-[0.2em] transition-all border-none text-[13px] group/btn shadow-xl shadow-black/10">
                                <Link href="/contact" className="flex items-center gap-3">
                                    Claim Your Strategy Session
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
