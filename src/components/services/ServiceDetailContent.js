"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Sparkles, Target, Zap, Shield, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServiceDetailContent({ service }) {
    if (!service) return null;

    return (
        <section className="py-20 md:py-32 bg-white relative">
            <div className="container-premium">
                <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
                    {/* Left Column - Content */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-12"
                        >
                            {/* Overview */}
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tighter">
                                    Service <span className="text-secondary">Overview</span>
                                </h2>
                                <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                                    {service.overview}
                                </p>
                            </div>

                            {/* What You Get Grid */}
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight flex items-center gap-3">
                                    <Sparkles className="h-6 w-6 text-secondary" />
                                    What You Get
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {service.whatYouGet.map((item, i) => (
                                        <div key={i} className="flex gap-4 p-6 rounded-[2.5rem] bg-slate-50 border border-slate-200 group hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-secondary shadow-sm">
                                                <CheckCircle className="h-5 w-5" />
                                            </div>
                                            <span className="text-slate-600 text-[15px] font-medium leading-normal">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Best For Section */}
                            <div className="p-8 md:p-12 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group shadow-2xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-6 tracking-tight flex items-center gap-3">
                                        <Target className="h-6 w-6 text-secondary" />
                                        Ideal Scenario
                                    </h3>
                                    <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
                                        {service.bestFor}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Sidebar Stats */}
                    <div className="lg:col-span-4 sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl shadow-slate-200/50"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-8 tracking-tight">Business Outcomes</h3>
                            <div className="space-y-6 mb-10">
                                {service.outcomes.map((outcome, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[12px] font-bold text-slate-400 group-hover:bg-secondary group-hover:text-white transition-all">
                                            {i + 1}
                                        </div>
                                        <p className="text-slate-700 font-medium text-[15px]">{outcome}</p>
                                    </div>
                                ))}
                            </div>

                            <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-2xl h-16 shadow-xl shadow-secondary/20 transition-all border-none">
                                <Link href="/contact" className="flex items-center justify-center gap-2 text-[14px] font-bold tracking-widest uppercase">
                                    DISCUSS NOW
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
