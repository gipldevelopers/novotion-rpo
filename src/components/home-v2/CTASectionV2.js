"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASectionV2() {
    return (
        <section id="cta" className="py-12 bg-white relative overflow-hidden scroll-mt-32">
            <div className="container-premium">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full rounded-2xl md:rounded-[2.5rem] bg-[#cf603d] overflow-hidden px-6 py-12 md:py-16 text-center"
                >
                    {/* Decorative Swirls (SVG implementation based on reference) */}
                    <div className="absolute top-0 left-0 w-48 h-48 md:w-80 md:h-80 opacity-60 pointer-events-none">
                        <svg viewBox="0 0 400 400" className="w-full h-full text-white/40" fill="none" stroke="currentColor" strokeWidth="1">
                            <circle cx="0" cy="0" r="100" />
                            <circle cx="0" cy="0" r="130" />
                            <circle cx="0" cy="0" r="160" />
                            <circle cx="0" cy="0" r="190" />
                            <circle cx="0" cy="0" r="220" />
                        </svg>
                    </div>

                    <div className="absolute bottom-0 right-0 w-48 h-48 md:w-80 md:h-80 opacity-60 pointer-events-none rotate-180">
                        <svg viewBox="0 0 400 400" className="w-full h-full text-white/40" fill="none" stroke="currentColor" strokeWidth="1">
                            <circle cx="0" cy="0" r="100" />
                            <circle cx="0" cy="0" r="130" />
                            <circle cx="0" cy="0" r="160" />
                            <circle cx="0" cy="0" r="190" />
                            <circle cx="0" cy="0" r="220" />
                        </svg>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-tight">
                            Ready to Architect Your Winning Talent Engine?
                        </h2>

                        <p className="text-white/90 text-sm md:text-base font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join elite global enterprises scaling with Novotion. Schedule your <br className="hidden md:block" />
                            strategic audit and transform your recruitment logic today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild className="rounded-full bg-white hover:bg-white/90 text-[#cf603d] px-8 h-12 text-sm font-medium transition-all group border-none">
                                <Link href="/contact" className="flex items-center gap-2">
                                    Get your free consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>

                            <Button asChild variant="outline" className="rounded-full bg-transparent hover:bg-white/10 text-white border-white/40 hover:border-white px-8 h-12 text-sm font-medium transition-all group">
                                <Link href="/services" className="flex items-center gap-2">
                                    See our service models <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
