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
        title: "Client Delivery Lead",
        department: "Operations",
        location: "UK / Remote",
        type: "Full-Time",
        description: "Leading multi-discipline teams to deliver consistent, high-impact results across our recruitment and marketing service lines."
    },
    {
        title: "Growth Strategy Senior",
        department: "Business Development",
        location: "USA / Global",
        type: "Full-Time",
        description: "Architecting outbound pipelines and building predictable revenue models for our enterprise client base."
    },
    {
        title: "AI Automation Engineer",
        department: "Tech & Systems",
        location: "Ahmedabad, India",
        type: "Full-Time",
        description: "Mapping business processes and building the intelligent systems that eliminate manual bottlenecks for our global partners."
    },
    {
        title: "Senior Finance Analyst",
        department: "Finance",
        location: "Ahmedabad, India",
        type: "Full-Time",
        description: "Managing accounts and financial reporting for high-scale retail and technology partners in the UK and US."
    },
    {
        title: "Content Marketing Architect",
        department: "Marketing",
        location: "Remote / Global",
        type: "Full-Time",
        description: "Designing end-to-end content strategies that drive conversions and build brand authority across global markets."
    },
    {
        title: "Technical Recruitment Specialist",
        department: "Recruitment",
        location: "UK / Hybrid",
        type: "Full-Time",
        description: "Sourcing and placing elite talent for some of the world's fastest-growing technology and SaaS companies."
    }
];

const benefits = [
    {
        icon: Globe,
        title: "Global Exposure",
        text: "Work directly with clients across the UK, EU, UAE, APAC and USA — from day one, not year three."
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
    return (
        <section className="py-24 md:py-40 bg-white relative overflow-hidden">
            <div className="container-premium relative z-10 px-6 md:px-12">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6"
                    >
                        <Sparkles className="h-4 w-4 text-secondary" />
                        <span className="text-[10px] font-bold text-secondary tracking-[0.4em] uppercase">Why Noltven</span>
                    </motion.div>
                </div>

                {/* Benefits Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 md:mb-48">
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
                            Available <span className="text-secondary italic">Deployments.</span>
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
