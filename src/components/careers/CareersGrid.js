"use client";

import { motion } from "framer-motion";
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

const openRoles = [
    {
        title: "Senior Recruitment Architect",
        department: "Strategy & Intelligence",
        location: "USA / Remote",
        type: "Full-Time",
        description: "Designing end-to-end recruitment ecosystems for global enterprise clients with a focus on strategic scaling."
    },
    {
        title: "Lead Talent Engineer",
        department: "Operations",
        location: "Ahmedabad, India",
        type: "Full-Time",
        description: "Spearheading our elite sourcing engines and managing high-volume tech recruitment for US/UK markets."
    },
    {
        title: "Growth Partnership Lead",
        department: "Client Services",
        location: "UK / Hybrid",
        type: "Full-Time",
        description: "Architecting long-term RPO partnerships and driving surgical recruitment ROI for our premium client base."
    }
];

const benefits = [
    {
        icon: Globe,
        title: "Global Exposure",
        text: "Directly influence recruitment engines for world-class US and UK clients."
    },
    {
        icon: Target,
        title: "Tech-First Culture",
        text: "Access to cutting-edge AI automation and advanced recruitment stacks."
    },
    {
        icon: TrendingUp,
        title: "Growth Acceleration",
        text: "Strategic career maps designed for rapid horizontal and vertical scale."
    }
];

export function CareersGrid() {
    return (
        <section className="py-24 md:py-40 bg-white relative overflow-hidden">
            <div className="container-premium relative z-10 px-6 md:px-12">

                {/* Benefits Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 md:mb-48">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-secondary/20 transition-all duration-500 group shadow-sm"
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
                    <div className="text-center mb-16 md:mb-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 mb-6"
                        >
                            <Sparkles className="h-4 w-4 text-secondary" />
                            <span className="text-[10px] font-bold text-slate-600 tracking-[0.4em] uppercase">Execution Logic</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter leading-tight">
                            Available <span className="text-secondary italic">Deployment.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {openRoles.map((role, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-secondary/30 transition-all duration-500 shadow-xl shadow-slate-200/50 hover:shadow-2xl flex flex-col justify-between"
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
                                        <Link href={`/careers/${role.title.toLowerCase().replace(/ /g, "-")}`}>
                                            EXECUTE INTENT
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
                            <a href="mailto:careers@novotionrpo.com" className="text-secondary font-bold ml-2 underline decoration-secondary/20 underline-offset-4">careers@novotionrpo.com</a>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
