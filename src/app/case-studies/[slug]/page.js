"use client";

import { Layout } from "@/components/layout/Layout";
import { caseStudiesData } from "@/components/case-studies/CaseStudiesGrid";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Layers, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CTASectionV2 } from "@/components/home-v2/CTASectionV2";

export default function CaseStudyDetail() {
    const params = useParams();
    const slug = params?.slug;

    const study = caseStudiesData.find(s => s.slug === slug);

    if (!study) {
        return (
            <Layout>
                <div className="min-h-screen pt-48 pb-20 flex flex-col items-center justify-center bg-white text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4 font-display">Report Not Found</h1>
                    <p className="text-slate-500 mb-8 max-w-md">We couldn't locate the case study you're looking for.</p>
                    <Link href="/case-studies" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#b04f30] transition-colors">
                        Back to Case Studies
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <main className="bg-white min-h-screen">
                {/* Hero Wrapper */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
                    {/* Background Detail */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={study.image}
                            alt={study.title}
                            fill
                            className="object-cover opacity-80"
                            priority
                        />
                        <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                    </div>

                    <div className="container-premium relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mb-8"
                        >
                            <Link href="/case-studies" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-secondary transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                                Back to All Insights
                            </Link>
                        </motion.div>

                        <div className="max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="flex flex-wrap gap-4 mb-8"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-bold tracking-[0.2em] uppercase shadow-md">
                                    <Layers className="h-3.5 w-3.5 text-secondary" />
                                    {study.category}
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-white text-[10px] font-bold tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(207,96,61,0.4)]">
                                    <Sparkles className="h-3.5 w-3.5" />
                                    {study.metric}
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase">
                                    <Clock className="h-3.5 w-3.5" />
                                    {study.date}
                                </div>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tighter leading-tight font-display"
                            >
                                {study.title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-lg md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl"
                            >
                                {study.excerpt}
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Simulated Report Content */}
                <section className="py-20 md:py-32 relative">
                    <div className="container-premium max-w-4xl relative z-10">
                        <div className="prose prose-lg md:prose-xl prose-slate max-w-none">
                            <h2 className="text-3xl font-bold text-slate-900 font-display mb-6 tracking-tight">The Initial Challenge</h2>
                            <p className="text-slate-500 leading-relaxed max-w-3xl mb-12">
                                When this {study.category} partner approached Novotion, their internal talent acquisition architecture was buckling under the pressure of aggressive scale. Time-to-fill metrics were spiraling beyond 90 days, and agency spend was decimating operational margins. The mandate was clear: rebuild the engine without stopping the train.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Before Novotion</h3>
                                    <ul className="space-y-4">
                                        <li className="flex gap-3 text-slate-500"><span className="text-red-500 font-bold">✕</span> Decentralized agency dependency</li>
                                        <li className="flex gap-3 text-slate-500"><span className="text-red-500 font-bold">✕</span> 90+ days average time-to-hire</li>
                                        <li className="flex gap-3 text-slate-500"><span className="text-red-500 font-bold">✕</span> Zero proactive talent mapping</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-900 rounded-[2.5rem] p-10 border border-slate-800 shadow-2xl">
                                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">The Strategy Installed</h3>
                                    <ul className="space-y-4">
                                        <li className="flex gap-3 text-slate-300"><span className="text-secondary font-bold">✓</span> Exclusive RPO infrastructure</li>
                                        <li className="flex gap-3 text-slate-300"><span className="text-secondary font-bold">✓</span> AI-driven continuous sourcing</li>
                                        <li className="flex gap-3 text-slate-300"><span className="text-secondary font-bold">✓</span> Integrated employer branding</li>
                                    </ul>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 font-display mb-6 tracking-tight">The Execution & {study.metric} Outcome</h2>
                            <p className="text-slate-500 leading-relaxed max-w-3xl mb-8">
                                We immediately deployed a squad of dedicated offshore acquisition specialists, integrating seamlessly into their Slack channels and internal ATS. By applying our proprietary boolean search frameworks and automated outreach sequences, we identified entirely new passive talent pools that their competitors hadn't touched.
                            </p>
                            <p className="text-slate-500 leading-relaxed max-w-3xl mb-12">
                                Within 60 days, the architecture was fully stabilized. The {study.metric} KPI was not just a vanity metric—it represented a fundamental shift in how the organization capitalized its human resourcing going forward.
                            </p>
                        </div>
                    </div>
                </section>

                <CTASectionV2 />
            </main>
        </Layout>
    );
}
