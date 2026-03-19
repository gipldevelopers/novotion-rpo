"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, Mail, User, ArrowRight, ShieldCheck, Download } from "lucide-react";
import { useRouter } from "next/navigation";

export function GatedCaseStudyModal({ isOpen, onClose, studySlug, studyTitle }) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const res = await fetch("/api/case-studies/request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, slug: studySlug }),
            });

            if (res.ok) {
                // Successful submission
                localStorage.setItem(`cs-access-${studySlug}`, "true");
                onClose();
                // Navigate to the case study
                router.push(`/case-studies/${studySlug}`);
            } else {
                const data = await res.json();
                setError(data.error || "Submission failed. Please try again.");
            }
        } catch (err) {
            setError("Network error. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
                    >
                        {/* Light Header Section */}
                        <div className="bg-slate-50 p-10 border-b border-slate-100 flex flex-col items-center text-center">
                            <button 
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-400 hover:text-slate-900"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary">
                                <Download className="w-8 h-8" />
                            </div>
                            
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Unlock Full Report</h3>
                            <p className="text-slate-500 text-xs font-bold leading-relaxed max-w-[240px]">
                                Professional access required for the study: <br/>
                                <span className="text-secondary uppercase tracking-widest text-[9px] mt-1 block">{studyTitle}</span>
                            </p>
                        </div>

                        {/* Simplified Form Section */}
                        <div className="p-10">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest pl-1">Full Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-secondary transition-colors" />
                                            <input 
                                                required
                                                type="text" 
                                                placeholder="John Doe" 
                                                className="w-full h-12 px-12 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/5 outline-none transition-all placeholder:text-slate-300 text-slate-900 text-sm font-medium"
                                                value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-black text-slate-900 uppercase tracking-widest pl-1">Work Email</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-secondary transition-colors" />
                                            <input 
                                                required
                                                type="email" 
                                                placeholder="john@company.com" 
                                                className="w-full h-12 px-12 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/5 outline-none transition-all placeholder:text-slate-300 text-slate-900 text-sm font-medium"
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {error && (
                                    <p className="text-red-500 text-[10px] font-black uppercase text-center mt-4 tracking-widest">{error}</p>
                                )}

                                <div className="pt-6">
                                    <button 
                                        disabled={isSubmitting}
                                        type="submit" 
                                        className="w-full h-14 bg-secondary text-white rounded-xl text-[12px] font-black uppercase tracking-widest shadow-xl shadow-secondary/20 hover:bg-slate-900 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Unlocking..." : "Access Report"}
                                        {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                                    </button>
                                </div>

                                <div className="flex items-center justify-center gap-2 pt-6 text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                    Secure Executive Portal
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
