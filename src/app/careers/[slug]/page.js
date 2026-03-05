"use client";

import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    MapPin,
    Briefcase,
    Clock,
    Sparkles,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CareerDetailPage({ params }) {
    const slug = params?.slug || "career-detail";
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return (
        <Layout>
            <main className="bg-white pt-32 pb-24 md:pt-48 md:pb-40">
                <div className="container-premium px-6 md:px-12">
                    {/* Back Link */}
                    <Link
                        href="/careers"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-secondary transition-colors font-bold text-[10px] uppercase tracking-[0.4em] mb-12"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Deployments
                    </Link>

                    <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
                        {/* Left: Role Intelligence */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 mb-6">
                                    <Sparkles className="h-4 w-4 text-secondary" />
                                    <span className="text-[10px] font-bold text-slate-600 tracking-[0.4em] uppercase">Core Requirement</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter leading-tight">
                                    {title}
                                </h1>
                                <div className="flex flex-wrap gap-6 text-slate-500 font-bold text-[10px] uppercase tracking-widest">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-secondary" />
                                        Remote / Global HQ
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Briefcase className="h-4 w-4 text-secondary" />
                                        Full-Time Execution
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-secondary" />
                                        Immediate Deployment
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Executive Summary</h2>
                                    <p className="text-slate-500 text-lg leading-relaxed font-light">
                                        We are looking for a visionary {title} to join our elite strategic engine.
                                        You will be responsible for architecting high-impact recruitment ecosystems
                                        and driving surgical ROI for our global enterprise partners.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Key Directives</h2>
                                    <ul className="space-y-4">
                                        {[
                                            "Design and execute end-to-end recruitment architectures.",
                                            "Manage high-fidelity stakeholder relationships at the enterprise level.",
                                            "Optimize talent delivery workflows through AI and automation.",
                                            "Lead technical sourcing sprints for high-scale global markets."
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-4 text-slate-500">
                                                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                                <span className="text-base font-light leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>
                        </div>

                        {/* Right: Execution Interface (Apply Form) */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 bg-slate-50 border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">Surgical Application</h3>
                                <form className="space-y-6">
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</Label>
                                        <Input className="bg-white border-slate-100 h-12 rounded-xl" placeholder="John Doe" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Work Email</Label>
                                        <Input className="bg-white border-slate-100 h-12 rounded-xl" type="email" placeholder="john@company.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">LinkedIn Profile</Label>
                                        <Input className="bg-white border-slate-100 h-12 rounded-xl" placeholder="https://linkedin.com/in/..." />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Brief Intent</Label>
                                        <Textarea className="bg-white border-slate-100 rounded-xl" placeholder="Why are you the right architect for this role?" rows={4} />
                                    </div>
                                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-14 rounded-2xl shadow-xl shadow-secondary/20 border-none">
                                        SUBMIT CANDIDACY
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <p className="text-[10px] text-slate-400 text-center font-bold uppercase tracking-widest">
                                        Secure Enterprise Processing
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
