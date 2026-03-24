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

    return (
        <Layout>
            <main className="bg-white min-h-screen pt-32 pb-16">
                <div className="container-premium">
                    {/* Back Link */}
                    <Link 
                        href={`/services/${slug}`}
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-secondary mb-12 transition-colors font-bold uppercase tracking-[0.2em] text-[10px]"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to {service.id === 'recruitment' ? 'Recruitment Services' : 'Service Overview'}
                    </Link>

                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                        {/* Left Column: Hero + Content */}
                        <div className="lg:col-span-8 space-y-16">
                            {/* Hero Section of Sub-page */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-3"
                            >
                                <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-secondary/5 border border-secondary/10 text-[10px] font-black uppercase tracking-widest text-secondary">
                                    <Sparkles className="h-3 w-3" />
                                    Strategic Pillar
                                </div>
                                <h1 className="text-2xl md:text-4xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                                    {subService.title}
                                </h1>
                                <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed italic border-l-4 border-secondary/20 pl-8 text-balance">
                                    {subService.head}
                                </p>
                            </motion.div>

                            {/* Mission Description */}
                            <motion.section
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="prose prose-slate prose-lg max-w-none">
                                    {subService.description.split('\n\n').map((paragraph, i) => (
                                        <p key={i} className="text-slate-600 leading-relaxed font-light">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </motion.section>

                            {/* Execution Engine - How We Work */}
                            {subService.howWeWork && (
                                <section className="space-y-10">
                                    <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-3">
                                        <Zap className="h-4 w-4 text-secondary" />
                                        How We Work: 
                                    </h2>
                                    <div className="grid gap-4">
                                        {subService.howWeWork.map((step, i) => (
                                            <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex gap-6 items-start group hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                                                <div className="mt-1 w-8 h-8 flex-shrink-0 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-secondary font-black text-xs shadow-sm group-hover:bg-secondary group-hover:text-white transition-all">
                                                    0{i+1}
                                                </div>
                                                <p className="text-slate-700 font-medium leading-relaxed">
                                                    {step.includes(':') ? (
                                                        <>
                                                            <strong className="text-slate-900">{step.split(':')[0]}:</strong>
                                                            {step.split(':').slice(1).join(':')}
                                                        </>
                                                    ) : step}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                        </div>

                        {/* Right Column: Sticky Sidebar CTA */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-8 md:p-10 rounded-[3rem] bg-slate-50 border border-slate-200 text-center space-y-8 shadow-2xl shadow-slate-200/50"
                            >
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-slate-900">Ready to Leverage This Expansion?</h3>
                                    <p className="text-slate-500 text-sm font-light">
                                        Let's discuss how we can integrate this specific execution layer into your current workflow.
                                    </p>
                                </div>
                                <Button asChild className="w-full bg-secondary hover:bg-slate-900 text-white h-16 rounded-2xl border-none transition-all shadow-xl shadow-secondary/10">
                                    <Link href="/contact" className="flex items-center justify-center gap-3 text-[11px] font-black tracking-widest uppercase">
                                        Schedule Discovery <ArrowRight className="h-5 w-5" />
                                    </Link>
                                </Button>
                                <p className="text-[10px] text-slate-400 font-medium">No retainers. Flexible scaling. Pure execution.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
