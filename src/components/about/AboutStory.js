"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

export function AboutStory() {
    return (
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
            <div className="container-premium relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                            Our <span className="text-secondary">Mission</span>
                        </h2>
                        <p className="text-secondary text-sm md:text-base font-bold uppercase tracking-[0.4em] mb-8">
                            A Growth Engine for Modern Businesses
                        </p>

                        <div className="space-y-6 text-slate-600 text-base md:text-lg font-normal leading-relaxed">
                            <p>
                                What companies truly need is a growth engine one that combines talent, processes, technology, and strategy into a single, aligned system. That’s where Noltven comes in.
                            </p>
                            <p>
                                We are not just a service provider. We act as an operational backbone for modern businesses helping them move from chaos to clarity, from effort to efficiency, and from inconsistent growth to predictable scale.
                            </p>
                            <p className="p-6 bg-slate-50 rounded-[2rem] border-l-4 border-secondary text-slate-700 font-medium italic">
                                "Growth becomes predictable when talent, strategy, and execution finally work as one."
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
