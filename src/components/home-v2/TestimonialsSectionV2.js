"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { Sparkles, ArrowRight, Target, Briefcase, MapPin } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { GatedCaseStudyModal } from "../case-studies/GatedCaseStudyModal";

export function TestimonialsSection({ initialData = [] }) {
    const x = useMotionValue(0);
    const containerRef = useRef(null);
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
 
    // Dynamic Data State
    const [caseStudies, setCaseStudies] = useState(initialData);
    const [selectedStudy, setSelectedStudy] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
 
    useEffect(() => {
        if (initialData.length > 0) return;
        const fetchStudies = async () => {
            try {
                const res = await fetch("/api/case-studies");
                if (res.ok) setCaseStudies(await res.json());
            } catch (err) {
                console.error("Carousel fetch error:", err);
            }
        };
        fetchStudies();
    }, [initialData]);

    const handleOpenModal = (study) => {
        const unlocked = localStorage.getItem(`cs-access-${study.slug}`);
        if (unlocked) {
            window.location.href = `/case-studies/${study.slug}`;
            return;
        }
        setSelectedStudy(study);
        setIsModalOpen(true);
    };

    const infiniteItems = caseStudies.length > 0 
        ? [...caseStudies, ...caseStudies, ...caseStudies]
        : [];

    useAnimationFrame((t, delta) => {
        if (!isHovered && !isDragging && infiniteItems.length > 0) {
            let moveBy = -0.5 * (delta / 16);
            let nextX = x.get() + moveBy;

            if (scrollRef.current) {
                const totalWidth = scrollRef.current.scrollWidth;
                const setWidth = totalWidth / 3;
                if (nextX <= -setWidth * 2) {
                    nextX += setWidth;
                }
            }
            x.set(nextX);
        }
    });

    useEffect(() => {
        const unsubscribe = x.on("change", (latest) => {
            if (isDragging && scrollRef.current && infiniteItems.length > 0) {
                const totalWidth = scrollRef.current.scrollWidth;
                const setWidth = totalWidth / 3;

                if (latest <= -setWidth * 2) {
                    x.set(latest + setWidth);
                } else if (latest >= -setWidth) {
                    x.set(latest - setWidth);
                }
            }
        });
        return () => unsubscribe();
    }, [isDragging, x, infiniteItems.length]);

    if (caseStudies.length === 0) return null;

    return (
        <section id="case-studies" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-20">
            <div className="relative z-10 w-full">
                {/* Section Header */}
                <div className="container-premium text-center max-w-3xl mx-auto mb-12 px-4">
                    <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-secondary text-white text-[11px] font-bold uppercase tracking-[0.3em] mb-8 shadow-xl shadow-secondary/20">
                        <Target className="h-4 w-4" />
                        Executive Case Studies
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-[1.12]">
                        Proving Performance <br />
                        <span className="text-secondary italic">Step by Step</span>
                    </h2>

                    <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto">
                        Deep-dive into how our strategic framework transforms recruitment operations for market leaders globally.
                    </p>
                </div>

                {/* Infinite + Draggable Marquee */}
                <div
                    ref={containerRef}
                    className="relative cursor-grab active:cursor-grabbing overflow-visible select-none px-4"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />

                    <motion.div
                        ref={scrollRef}
                        drag="x"
                        dragConstraints={{ left: -10000, right: 10000 }}
                        dragElastic={0.1}
                        style={{ x }}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={() => setIsDragging(false)}
                        className="flex gap-6 md:gap-8 py-6 w-max"
                    >
                        {infiniteItems.map((study, index) => (
                            <div
                                key={`${study.id}-${index}`}
                                className="flex-shrink-0 w-[320px] sm:w-[450px] md:w-[500px] p-8 md:p-10 rounded-[3rem] bg-white border border-slate-200 hover:border-secondary/20 transition-all duration-500 relative group shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 pointer-events-auto overflow-hidden text-left"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-secondary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10 flex flex-col h-full items-start whitespace-normal pointer-events-none">
                                    <div className="flex justify-between items-center w-full mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-secondary border border-slate-100 group-hover:bg-white transition-colors">
                                                <Briefcase className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-widest text-secondary leading-none mb-1">{study.industry}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="text-slate-500 text-sm md:text-base font-light leading-relaxed mb-4 opacity-95 italic">
                                            "{study.excerpt.trim()}"
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
