"use client";

import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import Image from "next/image";

export function ContactHero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
            {/* Background Image with Overlay - Optimized for Professional Clarity */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/contact_hero_bg.png"
                    alt="Novotion Contact"
                    fill
                    className="object-cover opacity-80 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-white/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
            </div>

            <div className="container-premium relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
                    >
                        <Send className="h-4 w-4" />
                        Initiate Connection
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tighter leading-[1.1]"
                    >
                        Let's Architect <br />
                        <span className="text-secondary italic">Your Talent Future.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl"
                    >
                        Ready to revolutionize your hiring engine? Connect with our Lead Architects
                        to discuss your custom RPO deployment and strategic scalability needs.
                    </motion.p>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </section>
    );
}
