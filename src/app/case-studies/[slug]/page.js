"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ArrowRight, 
    CheckCircle2, 
    Lock, 
    FileText, 
    ShieldAlert, 
    Target, 
    Briefcase,
    Mail,
    User,
    Building2,
    Phone,
    Loader2
} from "lucide-react";
import Image from "next/image";

export default function CaseStudyPage() {
    const { slug } = useParams();
    const [study, setStudy] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isGated, setIsGated] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    useEffect(() => {
        setMounted(true);
        fetchStudyData();
        const submitted = localStorage.getItem(`cs-access-${slug}`);
        if (submitted) setIsGated(false);
    }, [slug]);

    const fetchStudyData = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/case-studies?slug=${slug}`);
            if (res.ok) {
                setStudy(await res.json());
            }
        } catch (err) {
            console.error("Fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    if (!mounted) return null;

    if (loading) {
        return (
            <Layout>
                <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white">
                    <Loader2 className="w-12 h-12 text-secondary animate-spin" />
                    <p className="font-black uppercase tracking-[0.4em] text-slate-300 text-[10px]">Retrieving Executive Data</p>
                </div>
            </Layout>
        );
    }

    if (!study) return (
        <Layout>
            <div className="min-h-screen flex items-center justify-center font-black uppercase tracking-widest text-slate-400">Case Study Not Found</div>
        </Layout>
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const res = await fetch("/api/case-studies/request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, slug }),
            });

            if (res.ok) {
                localStorage.setItem(`cs-access-${slug}`, "true");
                setIsGated(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Network error. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Layout>
            <main className="bg-white min-h-screen pt-24 pb-20 md:pt-32 md:pb-24">
                <div className="container-premium px-4 sm:px-6 lg:px-12">
                    
                    {/* Header Area */}
                    <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-center text-slate-900">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-secondary text-[10px] sm:text-[11px] font-black uppercase tracking-widest mb-6"
                        >
                            <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Premium Strategic Report
                        </motion.div>
                        <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-6">
                            {study.title}
                        </h1>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-slate-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest">
                            <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl border border-slate-100"><Briefcase className="w-3.5 h-3.5 text-secondary" /> {study.industry}</div>
                            <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl border border-slate-100"><Target className="w-3.5 h-3.5 text-secondary" /> {study.location}</div>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {isGated ? (
                            <motion.div
                                key="gated-form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="max-w-xl mx-auto p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
                                
                                <div className="relative z-10 text-center mb-10">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
                                        <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                                    </div>
                                    <h2 className="text-xl sm:text-2xl font-black mb-4 tracking-tight">Access Full Report</h2>
                                    <p className="text-white/40 text-xs sm:text-sm font-light leading-relaxed">
                                        This is a protected executive report. Please provide your work email to unlock the full case study analysis.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-secondary transition-colors" />
                                        <input 
                                            required
                                            type="text" 
                                            placeholder="Full Name" 
                                            className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl py-3.5 sm:py-4 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-white placeholder:text-white/20"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        />
                                    </div>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-secondary transition-colors" />
                                        <input 
                                            required
                                            type="email" 
                                            placeholder="Business Email" 
                                            className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl py-3.5 sm:py-4 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-white placeholder:text-white/20"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        />
                                    </div>

                                    {error && <p className="text-red-400 text-[10px] font-bold text-center mt-2 uppercase tracking-widest">{error}</p>}

                                    <button 
                                        disabled={isSubmitting}
                                        type="submit" 
                                        className="w-full bg-secondary hover:bg-white text-white hover:text-slate-900 py-4 rounded-xl sm:rounded-2xl text-[11px] sm:text-[12px] font-black uppercase tracking-widest shadow-xl shadow-secondary/20 transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-3 active:scale-95"
                                    >
                                        {isSubmitting ? "Processing..." : "Unlock Full Report"}
                                        {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="content-unlocked"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-16 md:space-y-24"
                            >
                                {/* Full Width Image */}
                                <div className="relative h-[280px] sm:h-[400px] md:h-[600px] w-full rounded-[2rem] sm:rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100">
                                    <Image 
                                        src={study.image} 
                                        alt={study.title} 
                                        fill 
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12">
                                        <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 text-white">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest mt-0.5">Unlocked Report</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Grid */}
                                <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start">
                                    
                                    {/* Summary */}
                                    <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8 order-2 lg:order-1">
                                        <div className="p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-slate-50 border border-slate-100">
                                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 font-display">Quarterly Performance</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8">
                                                {study.results.metrics.map(m => (
                                                    <div key={m.label}>
                                                        <p className="text-3xl sm:text-4xl font-black text-slate-900 leading-none mb-2">{m.value}</p>
                                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{m.label}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            <div className="mt-8 pt-8 border-t border-slate-200">
                                                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Roles Successfully Filled</h4>
                                                <ul className="space-y-3">
                                                    {study.results.filledRoles.map((role, i) => (
                                                        <li key={i} className="flex gap-3 text-sm font-medium text-slate-600">
                                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                                            {role}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Main Story Content */}
                                    <div className="lg:col-span-8 space-y-16 md:space-y-24 order-1 lg:order-2">
                                        <section className="space-y-6">
                                            <div className="flex items-center gap-3">
                                                <span className="w-8 h-[2px] bg-secondary" />
                                                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Client Overview</h2>
                                            </div>
                                            <p className="text-lg md:text-2xl text-slate-600 font-light leading-relaxed">
                                                {study.overview}
                                            </p>
                                        </section>

                                        <section className="space-y-10">
                                            <div className="flex items-center gap-3 border-l-4 border-red-500 pl-4">
                                                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-red-500 font-display">Core Challenges Identified</h2>
                                            </div>
                                            <div className="grid gap-4 sm:gap-6">
                                                {study.challenges.map((c, i) => (
                                                    <div key={i} className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                                        <h4 className="text-base sm:text-lg font-black text-slate-900 mb-2 tracking-tight flex items-center gap-4 group-hover:text-red-500 transition-colors font-display">
                                                            <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 shrink-0" />
                                                            {c.title}
                                                        </h4>
                                                        <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed pl-8 sm:pl-9">{c.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section className="space-y-10">
                                            <div className="flex items-center gap-3 border-l-4 border-emerald-500 pl-4">
                                                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 font-display">Strategic Implementation</h2>
                                            </div>
                                            <div className="grid gap-6 md:gap-8">
                                                {study.solutions.map((s, i) => (
                                                    <div key={i} className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-slate-900 text-white relative overflow-hidden group border border-white/5 shadow-2xl">
                                                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        <h4 className="text-lg md:text-xl font-black mb-4 tracking-tighter flex items-center gap-4 text-emerald-400 font-display">
                                                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                                            {s.title}
                                                        </h4>
                                                        <p className="text-white/60 text-sm md:text-lg font-light leading-relaxed">{s.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </Layout>
    );
}
