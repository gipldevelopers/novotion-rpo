"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ServicesHero({ 
    title = "Stop Paying Five Agencies for One Job", 
    description = "Recruitment Services. Business Development. Digital Marketing. AI & Automation. Accounting & Finance. All live under one roof - no gaps, no conflicting priorities, no wasted budget.",
    ctaText,
    ctaLink = "/contact"
}) {
    return (
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/services_inner_banner_bg.png"
                    alt="Noltven Services"
                    fill
                    className="object-cover opacity-80 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-white/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
            </div>

            <div className="container-premium relative z-10">
                <div className="max-w-3xl">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base md:text-lg text-slate-600 font-light leading-relaxed max-w-2xl whitespace-pre-line"
                    >
                        {description.split('\n').map((line, i) => {
                            const isBold = line.startsWith('**') && line.endsWith('**');
                            const content = isBold ? line.slice(2, -2) : line;
                            return (
                                <span key={i}>
                                    {isBold ? <strong className="font-bold text-slate-900">{content}</strong> : content}
                                    {i < description.split('\n').length - 1 && <br />}
                                </span>
                            );
                        })}
                    </motion.p>

                    {ctaText && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-10"
                        >
                            <Link href={ctaLink} className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white rounded-2xl font-bold uppercase tracking-widest text-[13px] hover:bg-slate-900 transition-all shadow-xl shadow-secondary/20 group">
                                {ctaText}
                                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </section>
    );
}
