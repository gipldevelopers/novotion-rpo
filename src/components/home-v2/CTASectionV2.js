"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASectionV2() {
    return (
        <section id="cta" className="py-12 md:py-20 bg-white relative overflow-hidden scroll-mt-20">
            <div className="container-premium px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full rounded-[2.5rem] md:rounded-[4rem] bg-slate-900 overflow-hidden shadow-2xl shadow-slate-900/20"
                >
                    {/* Architectural Grid Background */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="ctaGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1" />
                                </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#ctaGrid)" />
                        </svg>
                    </div>

                    {/* Theme Glows */}
                    <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative z-10 px-6 py-10 md:px-16 md:py-20">
                        <div className="grid lg:grid-cols-12 gap-12 items-center">

                            {/* Left: Strategic Headline */}
                            <div className="lg:col-span-7 text-left">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-6"
                                >
                                    <Sparkles className="h-4 w-4" />
                                    Growth Conduit
                                </motion.div>

                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tighter leading-none">
                                    Build Your Winning  <br />
                                    <span className="text-secondary underline decoration-secondary/30 underline-offset-8">Strategy Now </span>
                                </h2>

                                <p className="text-slate-400 text-sm md:text-base font-light max-w-xl leading-relaxed italic border-l-2 border-secondary/30 pl-6">
                                    "Join the businesses already working smarter faster hiring, stronger marketing,
                                    cleaner finances, and growth systems that deliver real results every month."
                                </p>
                            </div>

                            {/* Right: Dynamic CTAs */}
                            <div className="lg:col-span-5 flex flex-col gap-4">
                                <Button asChild className="w-full h-14 md:h-20 rounded-2xl md:rounded-3xl bg-secondary hover:bg-white hover:text-secondary text-white text-[10px] md:text-[14px] font-extrabold uppercase tracking-[0.3em] transition-all duration-500 shadow-xl shadow-secondary/20 group border-none">
                                    <Link href="/contact" className="flex items-center justify-center gap-3">
                                        Initiate Consultation
                                        <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-2" />
                                    </Link>
                                </Button>

                                <div className="grid grid-cols-2 gap-3">
                                    <Button asChild variant="outline" className="h-11 md:h-14 rounded-2xl bg-white/5 border-white/10 text-white hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-500 group">
                                        <Link href="/services" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                                            Services <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" className="h-11 md:h-14 rounded-2xl bg-white/5 border-white/10 text-white hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-500 group">
                                        <Link href="/cases" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                                            Case Studies <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Trace Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
