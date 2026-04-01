"use client";

import { use, useState, useEffect } from "react";
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
    const { slug } = use(params);
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        linkedin: "",
        intent: ""
    });

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${slug}`);
                if (res.ok) {
                    const data = await res.json();
                    setJob(data);
                }
            } catch (error) {
                console.error("Failed to fetch job:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchJob();
    }, [slug]);

    const handleApply = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch("/api/jobs/apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, job_id: job.id })
            });
            if (res.ok) setSubmitted(true);
        } catch (error) {
            console.error("Apply Error:", error);
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen text-slate-400 gap-3">
            <div className="w-5 h-5 rounded-full border-2 border-slate-200 border-t-secondary animate-spin" />
            <span className="text-xs font-black uppercase tracking-widest">Accessing Architecture Layers...</span>
        </div>
    );

    if (!job) return (
        <Layout>
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 pt-32">
                <h1 className="text-4xl font-black text-slate-900 mb-4">Position Not Found</h1>
                <p className="text-slate-500 mb-8 max-w-md">The deployment you're looking for might have been filled or the link is temporary.</p>
                <Button asChild className="bg-secondary rounded-2xl h-14 px-8 font-bold uppercase tracking-widest">
                    <Link href="/careers">Return to Career Grid</Link>
                </Button>
            </div>
        </Layout>
    );

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
                        Back to Open Positions
                    </Link>

                    <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
                        {/* Left: Role Intelligence */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>

                                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter leading-tight">
                                    {job.title}
                                </h1>
                                <div className="flex flex-wrap gap-6 text-slate-500 font-bold text-[10px] uppercase tracking-widest">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-secondary" />
                                        {job.location}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Briefcase className="h-4 w-4 text-secondary" />
                                        {job.type} / Immediate Start
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Executive Summary</h2>
                                    <p className="text-slate-500 text-lg leading-relaxed font-light">
                                        {job.summary}
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Key Directives</h2>
                                    <ul className="space-y-4">
                                        {job.directives?.map((item, i) => (
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
                            <div className="sticky top-32">
                                {submitted ? (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }} 
                                        animate={{ opacity: 1, scale: 1 }} 
                                        className="bg-emerald-50 border border-emerald-100 p-10 rounded-[2.5rem] text-center space-y-6 shadow-xl"
                                    >
                                        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Candidacy Received</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">Our execution team will audit your profile and reach out within 48 operational hours.</p>
                                        <Button asChild className="w-full bg-slate-900 rounded-2xl h-14 uppercase tracking-widest font-black text-[10px]">
                                            <Link href="/careers">Back to Grid</Link>
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <div className="bg-slate-50 border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50">
                                        <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">Surgical Application</h3>
                                        <form onSubmit={handleApply} className="space-y-6">
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</Label>
                                                <Input 
                                                    value={formData.name} 
                                                    onChange={e => setFormData({...formData, name: e.target.value})} 
                                                    className="bg-white border-slate-100 h-12 rounded-xl" 
                                                    placeholder="John Doe" 
                                                    required 
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Work Email</Label>
                                                <Input 
                                                    type="email" 
                                                    value={formData.email} 
                                                    onChange={e => setFormData({...formData, email: e.target.value})} 
                                                    className="bg-white border-slate-100 h-12 rounded-xl" 
                                                    placeholder="john@company.com" 
                                                    required 
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">LinkedIn Profile</Label>
                                                <Input 
                                                    value={formData.linkedin} 
                                                    onChange={e => setFormData({...formData, linkedin: e.target.value})} 
                                                    className="bg-white border-slate-100 h-12 rounded-xl" 
                                                    placeholder="https://linkedin.com/in/..." 
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Brief Intent</Label>
                                                <Textarea 
                                                    value={formData.intent} 
                                                    onChange={e => setFormData({...formData, intent: e.target.value})} 
                                                    className="bg-white border-slate-100 rounded-xl" 
                                                    placeholder="Why are you the right architect for this role?" 
                                                    rows={4} 
                                                />
                                            </div>
                                            <Button disabled={submitting} className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-14 rounded-2xl shadow-xl shadow-secondary/20 border-none">
                                                {submitting ? "SUBMITTING..." : "SUBMIT CANDIDACY"}
                                                {!submitting && <ArrowRight className="ml-2 h-4 w-4" />}
                                            </Button>
                                            <p className="text-[10px] text-slate-400 text-center font-bold uppercase tracking-widest">
                                                Secure Enterprise Processing
                                            </p>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
