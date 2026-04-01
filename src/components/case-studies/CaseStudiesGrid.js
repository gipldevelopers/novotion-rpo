"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Target, MapPin } from "lucide-react";
import Image from "next/image";
import { GatedCaseStudyModal } from "./GatedCaseStudyModal";

export function CaseStudiesGrid() {
    const [caseStudies, setCaseStudies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedStudy, setSelectedStudy] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchStudies = async () => {
            try {
                const res = await fetch("/api/case-studies");
                if (res.ok) {
                    const data = await res.json();
                    setCaseStudies(data);
                }
            } catch (err) {
                console.error("Failed to fetch studies:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchStudies();
    }, []);

    const handleOpenModal = (study) => {
        const unlocked = localStorage.getItem(`cs-access-${study.slug}`);
        if (unlocked) {
            window.location.href = `/case-studies/${study.slug}`;
            return;
        }
        setSelectedStudy(study);
        setIsModalOpen(true);
    };

    if (loading && caseStudies.length === 0) {
        return <div className="py-32 text-center font-black uppercase tracking-widest text-slate-300 animate-pulse bg-slate-50">Syncing Intelligence...</div>;
    }

    return (
        <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
            <div className="container-premium relative z-10 px-6 md:px-12">

                {/* Section Header */}
                <div className="mb-12 md:mb-20 text-slate-900">
                    <div className="max-w-3xl">

                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-tight font-display">
                            Insights Derived from <br />
                            <span className="text-secondary">Actual Market Performance</span>
                        </h2>
                    </div>
                </div>

                {/* Grid of Case Studies */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col bg-white border border-slate-200 rounded-[3rem] overflow-hidden hover:border-secondary/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 shadow-sm group"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 md:h-80 w-full overflow-hidden bg-slate-100">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-8 left-8 z-10 flex gap-3">
                                    <span className="bg-white/95 backdrop-blur-md text-slate-900 text-[9px] font-black tracking-[0.2em] uppercase px-5 py-2.5 rounded-xl shadow-sm border border-white/20">
                                        {study.industry}
                                    </span>
                                    <span className="bg-secondary text-white text-[9px] font-black tracking-[0.2em] uppercase px-5 py-2.5 rounded-xl shadow-xl shadow-secondary/20 border border-secondary/20">
                                        Case Study
                                    </span>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                                    <MapPin className="w-3.5 h-3.5 text-secondary" />
                                    {study.location}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tight leading-tight font-display">
                                    {study.title}
                                </h3>

                                <p className="text-slate-500 text-base font-light leading-relaxed mb-10 flex-grow">
                                    {study.excerpt}
                                </p>

                                {/* Action Button */}
                                <div className="pt-8 border-t border-slate-50 mt-auto">
                                    <button
                                        onClick={() => handleOpenModal(study)}
                                        className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-secondary transition-all hover:scale-105 shadow-xl shadow-slate-900/10 active:scale-95"
                                    >
                                        View Full Report
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Placeholder for future growth */}
                    <div className="hidden lg:flex flex-col items-center justify-center p-12 rounded-[3rem] border-2 border-dashed border-slate-200 bg-slate-50/50 text-center space-y-4">
                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-slate-300 shadow-sm border border-slate-100">
                            <Target className="w-8 h-8" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-400">Upcoming Case Studies</h4>
                        <p className="text-xs text-slate-400 font-medium max-w-[200px] leading-relaxed">
                            We are currently documenting more success stories across global industries.
                        </p>
                    </div>
                </div>
            </div>

            {selectedStudy && (
                <GatedCaseStudyModal 
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    studySlug={selectedStudy.slug}
                    studyTitle={selectedStudy.title}
                />
            )}
        </section>
    );
}
