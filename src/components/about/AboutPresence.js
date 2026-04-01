"use client";

import { motion } from "framer-motion";
import { Sparkles, MapPin, Globe, Clock, ShieldCheck } from "lucide-react";

const locations = [
    {
        title: "UK",
        subtitle: "Strategic HQ & Market Leadership",
        description: "Strategic HQ client relationships, account leadership, and local market intelligence.",
        icon: ShieldCheck,
    },
    {
        title: "India (Ahmedabad)",
        subtitle: "High-Output Delivery",
        description: "High-output delivery engine running recruitment, marketing, automation, finance, and admin daily.",
        icon: Globe,
    },
    {
        title: "24/7 Connectivity",
        subtitle: "Round-the-Clock Momentum",
        description: "Synchronized operations across all five service lines always active, always delivering.",
        icon: Clock,
    }
];

export function AboutPresence() {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="container-premium relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                            Global <span className="text-secondary">Presence</span>
                        </h2>
                        <p className="text-secondary text-sm md:text-base font-bold uppercase tracking-[0.4em] mb-8">
                            Built to Operate Anywhere. Built to Deliver Everywhere.
                        </p>

                        <div className="space-y-8">
                            {locations.map((loc, idx) => (
                                <motion.div
                                    key={loc.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-6 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:bg-white transition-all shadow-sm">
                                        <loc.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{loc.title}</h3>
                                        <p className="text-slate-600 text-sm font-normal mb-4 leading-relaxed max-w-md group-hover:text-slate-700 transition-colors">
                                            {loc.description}
                                        </p>

                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative hidden lg:block"
                    >
                        {/* Abstract Map or Network Graphic */}
                        <div className="relative h-[480px] md:h-[600px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl bg-slate-50 border border-slate-200 group">
                            {/* Dot Matrix Background Map */}
                            <img 
                                src="/assets/global_presence_vector.png"
                                alt="Global Reach Map"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-all duration-1000 scale-[1.05] group-hover:scale-100"
                            />
                            
                            {/* Connection Curve */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <motion.path 
                                    d="M48,25 Q58,20 70,50" 
                                    fill="none" 
                                    stroke="var(--color-secondary)" 
                                    strokeWidth="0.15" 
                                    strokeDasharray="1,1" 
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                />
                            </svg>

                            {/* LONDON HQ */}
                            <div className="absolute top-[25%] left-[48%] group/london">
                                <motion.div 
                                    animate={{ scale: [1, 2, 1], opacity: [0.3, 0.1, 0.3] }} 
                                    transition={{ duration: 2.5, repeat: Infinity }} 
                                    className="absolute -inset-6 rounded-full bg-secondary/20 blur-md" 
                                />
                                <div className="relative w-3.5 h-3.5 rounded-full bg-secondary border-4 border-white shadow-xl shadow-secondary/30" />
                                
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                    <span className="whitespace-nowrap text-[10px] font-black text-slate-900 tracking-[0.2em] uppercase bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                        LONDON, UK (HQ)
                                    </span>
                                </div>
                            </div>

                            {/* AHMEDABAD HUB */}
                            <div className="absolute top-[50%] left-[70%] group/india">
                                <motion.div 
                                    animate={{ scale: [1, 2, 1], opacity: [0.3, 0.1, 0.3] }} 
                                    transition={{ duration: 2.5, repeat: Infinity, delay: 1.25 }} 
                                    className="absolute -inset-6 rounded-full bg-blue-600/20 blur-md" 
                                />
                                <div className="relative w-3.5 h-3.5 rounded-full bg-blue-600 border-4 border-white shadow-xl shadow-blue-600/30" />
                                
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                    <span className="whitespace-nowrap text-[10px] font-black text-slate-900 tracking-[0.2em] uppercase bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                        AHMEDABAD, INDIA (DELIVERY)
                                    </span>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
