"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

export function AboutStory() {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="container-premium relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
                        >
                            <Sparkles className="h-4 w-4" />
                            Our Mission
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tighter">
                            One Partner That Does <br />
                            <span className="text-secondary">What Five Agencies Can't</span>
                        </h2>

                        <div className="space-y-6 text-slate-500 text-base md:text-lg font-light leading-relaxed">
                            <p>
                                We built Noltven on one belief: growing businesses shouldn't have to choose between getting expert support and keeping costs under control. You shouldn't have to pick two out of five.
                            </p>
                            <p>
                                So we put recruitment, marketing, AI automation, business development, and finance under one roof—all aligned to the same goals, held to the same standards, reporting to you in a single place.
                            </p>
                            <p className="p-6 bg-slate-50 rounded-[2rem] border-l-4 border-secondary text-slate-700 font-medium italic">
                                "UK and US strategy. India-based delivery. The result: enterprise output at a fraction of the cost for businesses ready to scale."
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50">
                            <div className="absolute inset-0 bg-slate-900/10 z-10" />
                            <img
                                src="/assets/about_mission.png"
                                alt="Global Strategic Partnership"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />

                            {/* Floating Card */}
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-2xl z-20">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Global Team</span>
                                </div>
                                <p className="text-slate-900 font-bold text-sm">One unified partner. Five expert services. Infinite growth potential.</p>
                            </div>
                        </div>

                        {/* Decorative background glow */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
