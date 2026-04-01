"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    Search,
    Code,
    TrendingUp,
    Users,
    Target,
    Globe,
    CheckCircle2,
    ArrowRight,
    MapPin,
    Clock,
    Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const benefits = [
    {
        icon: Globe,
        title: "Global Exposure",
        text: "Work directly with clients across the UK, EU, UAE, APAC and USA   from day one, not year three."
    },
    {
        icon: Target,
        title: "Five Disciplines, One Career",
        text: "Grow across five different service areas. Build rare skills. Stay sharp across every function."
    },
    {
        icon: TrendingUp,
        title: "Results, Not Face Time",
        text: "We care about outcomes. If you deliver, you grow. It's that straightforward."
    }
];

export function CareersGrid() {
    const [openRoles, setOpenRoles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const res = await fetch('/api/jobs');
                const data = await res.json();
                if (Array.isArray(data)) {
                    setOpenRoles(data);
                }
            } catch (error) {
                console.error("Failed to fetch roles:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRoles();
    }, []);

    return (
        <section className="py-8 md:py-12 bg-white relative overflow-hidden">
            <div className="container-premium relative z-10 px-6 md:px-12">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter leading-tight">
                        Why <span className="text-secondary italic">Noltven?</span>
                    </h2>
                </div>

                {/* Benefits Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-16">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-200 hover:border-secondary/20 transition-all duration-500 group shadow-sm hover:shadow-2xl hover:shadow-slate-200/50"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-secondary mb-8 shadow-sm group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                                <benefit.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{benefit.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{benefit.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Open Positions */}
                <div>
                    <div className="text-center mb-12 md:mb-16">

                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter leading-tight">
                            Open <span className="text-secondary italic">Positions.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loading ? (
                            Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="h-[300px] rounded-[2.5rem] bg-slate-50 animate-pulse" />
                            ))
                        ) : openRoles.length === 0 ? (
                            <div className="col-span-full py-20 text-center bg-slate-50 rounded-[3rem] border border-slate-100 border-dashed">
                                <p className="text-slate-400 font-medium italic">No open positions at this moment. Check back soon.</p>
                            </div>
                        ) : openRoles.map((role, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-secondary/30 transition-all duration-500 shadow-xl shadow-slate-200/50 hover:shadow-2xl flex flex-col justify-between"
                            >
                                <div className="space-y-6">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[9px] font-bold uppercase tracking-widest">{role.department}</span>
                                        <div className="flex items-center gap-1.5 text-slate-400 text-[9px] font-bold uppercase tracking-widest">
                                            <MapPin className="h-3 w-3" />
                                            {role.location}
                                        </div>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-secondary transition-colors duration-300 tracking-tight leading-tight">{role.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{role.description}</p>
                                </div>
                                <div className="mt-8">
                                    <Button asChild className="w-full bg-slate-900 hover:bg-secondary text-white rounded-2xl h-14 border-none font-bold text-[10px] tracking-widest transition-all duration-500 shadow-xl shadow-slate-200/50">
                                        <Link href={`/careers/${role.slug}`}>
                                            APPLY
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-20 text-center"
                    >
                        <p className="text-slate-400 text-sm italic">
                            Don't see a role that fits your core logic? Send your CV to
                            <a href="mailto:info@noltven.com" className="text-secondary font-bold ml-2 underline decoration-secondary/20 underline-offset-4">info@noltven.com</a>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
