"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BarChart, X, Sparkles, Download, Target, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const caseStudiesData = [
    {
        slug: "reducing-cost-per-hire-tech-enterprise",
        title: "Reducing Cost-Per-Hire by 40% for a Global Tech Enterprise",
        excerpt: "An empirical breakdown of exactly where budget leaks occur in traditional recruitment and how an optimized RPO deployment surgically fixed capital inefficiency, saving over $2M annually.",
        category: "Tech Enterprise",
        metric: "-40% CPH",
        date: "March 5, 2026",
        image: "/assets/process_inner_banner_bg.png"
    },
    {
        slug: "scaling-offshore-engineering-teams",
        title: "Scaling Offshore Engineering Teams by 300% in 6 Months",
        excerpt: "Balancing automation velocity with human-centric candidate quality. How next-generation artificial intelligence and offshore sourcing allowed a SaaS unicorn to hit aggressive product milestones.",
        category: "SaaS Scale-up",
        metric: "+300% Growth",
        date: "February 28, 2026",
        image: "/assets/services_inner_banner_bg.png"
    },
    {
        slug: "mastering-global-offshore-talent-integration",
        title: "Structuring a 24/7 Follow-the-Sun Recruitment Engine",
        excerpt: "The 'Follow-the-Sun' model is no longer about cost-saving—it's about momentum. Learn the structural requirements for seamless cultural and technological integration across borders.",
        category: "Global Strategy",
        metric: "24/7 Ops",
        date: "February 15, 2026",
        image: "/assets/about_inner_banner_bg.png"
    },
    {
        slug: "executive-search-market-mapping",
        title: "Executive Market Mapping for Series C FinTech Expansion",
        excerpt: "Delivering fully verified executive talent pipelines for critical leadership roles, resulting in 100% placement rate for C-Suite positions within 60 days of search initiation.",
        category: "FinTech",
        metric: "60 Days to Fill",
        date: "January 30, 2026",
        image: "/assets/careers_hero_bg.png"
    }
];

export function CaseStudiesGrid() {
    const containerRef = useRef(null);
    const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStudy, setSelectedStudy] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleOpenModal = (study) => {
        setSelectedStudy(study);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedStudy(null);
        setFormData({ name: "", email: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) return;

        setIsSubmitting(true);

        // Simulate API call / Form processing
        setTimeout(() => {
            setIsSubmitting(false);
            const slug = selectedStudy.slug;
            handleCloseModal();
            // Navigate to the full report
            router.push(`/case-studies/${slug}`);
        }, 1500);
    };

    return (
        <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
            <div className="container-premium relative z-10 px-6 md:px-12">

                {/* Section Header */}
                <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-secondary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 shadow-sm"
                        >
                            <Sparkles className="h-4 w-4" />
                            Client Success 
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-tight font-display">
                            Insights Derived from <br />
                            <span className="text-secondary">Actual Market Performance</span>
                        </h2>
                    </div>
                </div>

                {/* Draggable Carousel Area */}
                <div className="relative">
                    <motion.div
                        ref={containerRef}
                        className="cursor-grab active:cursor-grabbing overflow-visible select-none"
                    >
                        <motion.div
                            drag="x"
                            dragConstraints={{
                                right: 0,
                                left: -((caseStudiesData.length * 520) - (containerRef.current?.offsetWidth || 1200) + (caseStudiesData.length * 40)) || -1000
                            }}
                            dragElastic={0.1}
                            className="flex gap-6 md:gap-10 py-8"
                            style={{ touchAction: 'none' }}
                        >
                            {caseStudiesData.map((study, index) => (
                                <motion.div
                                    key={study.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex-shrink-0 w-[300px] md:w-[450px] lg:w-[500px] flex flex-col bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden hover:border-secondary/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 shadow-sm"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-56 md:h-72 w-full block overflow-hidden bg-slate-100 group">
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-700 opacity-90 group-hover:scale-105"
                                            draggable={false}
                                        />
                                        <div className="absolute top-6 left-6 z-10 flex gap-2">
                                            <span className="bg-white/95 backdrop-blur-md text-slate-900 text-[9px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full shadow-sm">
                                                {study.category}
                                            </span>
                                            <span className="bg-secondary text-white text-[9px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full shadow-[0_0_15px_rgba(207,96,61,0.4)]">
                                                {study.metric}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 tracking-tight leading-snug line-clamp-2 font-display">
                                            {study.title}
                                        </h3>

                                        <p className="text-slate-500 text-sm md:text-[15px] font-light leading-relaxed mb-8 flex-grow line-clamp-3">
                                            {study.excerpt}
                                        </p>

                                        {/* Action Button */}
                                        <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                                            <button
                                                onClick={() => handleOpenModal(study)}
                                                className="w-full h-12 md:h-14 rounded-xl bg-slate-900 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-3 hover:bg-secondary transition-colors duration-300 shadow-lg shadow-slate-900/10 active:scale-[0.98]"
                                            >
                                                View Full Study
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Ungated Access / Email Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleCloseModal}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />
                        
                        {/* Modal Body */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
                        >
                            {/* Header */}
                            <div className="bg-slate-50 p-6 md:p-8 border-b border-slate-100">
                                <button
                                    onClick={handleCloseModal}
                                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-400 hover:text-slate-900"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                
                                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                                    <Download className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 tracking-tight font-display mb-2">
                                    Unlock Full Report
                                </h3>
                                <p className="text-sm text-slate-500 font-light leading-relaxed">
                                    Enter your details below to get instant access to the complete case study: <span className="font-semibold text-slate-700">"{selectedStudy?.title}"</span>
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-6">
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold text-slate-900 uppercase tracking-widest pl-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="John Doe"
                                            className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold text-slate-900 uppercase tracking-widest pl-1">Work Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="john@company.com"
                                            className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-14 rounded-xl bg-secondary text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-[#b04f30] transition-colors shadow-lg shadow-secondary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                                            Unlocking...
                                        </span>
                                    ) : (
                                        <>Access Report <ArrowRight className="w-4 h-4" /></>
                                    )}
                                </button>
                                <p className="text-[10px] text-center text-slate-400 uppercase tracking-wider">
                                    We promise not to spam you.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
