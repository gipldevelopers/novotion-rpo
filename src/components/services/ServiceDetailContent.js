"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, Sparkles, Target, X, Zap, Shield, BarChart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export function ServiceDetailContent({ service }) {
    const [selectedPoint, setSelectedPoint] = useState(null);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (selectedPoint) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedPoint]);

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
                                        <motion.div 
                                            key={i} 
                                            whileHover={{ y: -5 }}
                                            onClick={() => setSelectedPoint(item)}
                                            className="flex gap-4 p-6 rounded-[2.5rem] bg-slate-50 border border-slate-200 group hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer text-left"
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                                                <CheckCircle className="h-5 w-5" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-slate-900 text-[16px] font-bold leading-tight group-hover:text-secondary transition-colors">
                                                    {typeof item === 'string' ? item : item.title}
                                                </span>
                                                <span className="text-slate-500 text-[13px] font-medium flex items-center gap-1 group-hover:text-slate-700">
                                                    View Details <ArrowRight className="h-3 w-3" />
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Who This Is For Section */}
                            <div className="p-8 md:p-12 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group shadow-2xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-6 tracking-tight flex items-center gap-3">
                                        <Target className="h-6 w-6 text-secondary" />
                                        Who This Is For
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

            {/* Popup Modal */}
            <AnimatePresence>
                {selectedPoint && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPoint(null)}
                            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                        >
                            {/* Header */}
                            <div className="p-8 md:p-12 pb-4 flex justify-between items-start">
                                <div className="space-y-2">
                                    <span className="text-secondary font-bold text-sm tracking-widest uppercase">Service Detail</span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                        {selectedPoint.title}
                                    </h3>
                                </div>
                                <button 
                                    onClick={() => setSelectedPoint(null)}
                                    className="p-3 rounded-full bg-slate-100 text-slate-500 hover:bg-secondary hover:text-white transition-all shadow-sm"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Content Scrollable Area */}
                            <div className="flex-1 overflow-y-auto p-8 md:p-12 pt-4 space-y-8 custom-scrollbar">
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold text-slate-900">{selectedPoint.head}</h4>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        {selectedPoint.description}
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <h5 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Services Include</h5>
                                    <div className="grid md:grid-cols-1 gap-4">
                                        {selectedPoint.items.map((item, idx) => (
                                            <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-secondary/20 hover:bg-secondary/5 transition-all">
                                                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all">
                                                    <Check className="h-3.5 w-3.5" />
                                                </div>
                                                <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-end">
                                <Button asChild className="bg-secondary hover:bg-secondary/90 text-white rounded-xl px-8 h-12 font-bold border-none transition-all shadow-lg shadow-secondary/10">
                                    <Link href="/contact" className="flex items-center gap-2 tracking-widest uppercase text-[12px]">
                                        ENQUIRE NOW
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

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

