"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { Monitor, Stethoscope, Landmark, Factory, HardHat, Cog, Zap, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const industries = [
    {
        id: "tech",
        name: "Technology & IT",
        subtitle: "Software, SaaS, Cloud & Digital Transformation",
        icon: Monitor,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        tag: "Digital"
    },
    {
        id: "healthcare",
        name: "Healthcare",
        subtitle: "Clinical, Administrative & MedTech Solutions",
        icon: Stethoscope,
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
        tag: "Health"
    },
    {
        id: "construction",
        name: "Construction",
        subtitle: "Modern Infrastructure, Civil & Residential Projects",
        icon: HardHat,
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
        tag: "Build"
    },
    {
        id: "engineering",
        name: "Engineering",
        subtitle: "Mechanical, Electrical & Precision Engineering",
        icon: Cog,
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
        tag: "Engine"
    },
    {
        id: "manufacturing",
        name: "Manufacturing",
        subtitle: "Smart Factory, Logistics & Supply Chain",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        tag: "Industry"
    },
    {
        id: "energy",
        name: "Energy",
        subtitle: "Renewables, Solar, Wind & Smart Power Grids",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1466611653911-954ffec13f18?auto=format&fit=crop&q=80&w=800",
        tag: "Power"
    },
    {
        id: "finance",
        name: "Financial Services",
        subtitle: "Banking, FinTech, Insurance & Wealth Management",
        icon: Landmark,
        image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=800",
        tag: "Finance"
    }
];

const infiniteIndustries = [...industries, ...industries, ...industries];

export function IndustriesPreview() {
    const x = useMotionValue(0);
    const containerRef = useRef(null);
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useAnimationFrame((t, delta) => {
        if (!isHovered && !isDragging) {
            let moveBy = -0.4 * (delta / 16);
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
            if (isDragging && scrollRef.current) {
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
    }, [isDragging, x]);

    return (
        <section id="industries" className="py-12 md:py-12 bg-white relative overflow-hidden scroll-mt-20">
            <div className="relative z-10 w-full">
                {/* Section Header */}
                <div className="container-premium text-center max-w-3xl mx-auto mb-8 md:mb-12 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-6 shadow-sm"
                    >
                        <Sparkles className="h-4 w-4" />
                        Global Segments
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tighter leading-[1.05] font-display">
                        Deep Domain <br />
                        <span className="text-secondary italic">Expertise</span>
                    </h2>
                </div>

                {/* Draggable Marquee */}
                <div
                    ref={containerRef}
                    className="relative cursor-grab active:cursor-grabbing overflow-visible select-none"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Shadow Overlays */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

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
                        {infiniteIndustries.map((industry, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[420px] rounded-[2.5rem] bg-slate-50 border border-slate-200 hover:border-secondary/30 transition-all duration-500 relative group shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 pointer-events-auto overflow-hidden flex flex-col"
                            >
                                {/* Image Area */}
                                <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
                                    <Image
                                        src={industry.image}
                                        alt={industry.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                                        draggable={false}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                    
                                    {/* Overlay Content */}
                                    <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                                        <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                                            <industry.icon className="h-5 w-5" strokeWidth={1.5} />
                                        </div>
                                        <span className="px-2.5 py-0.5 rounded-full bg-secondary text-white text-[8px] font-bold uppercase tracking-widest shadow-lg shadow-secondary/20">
                                            {industry.tag}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 tracking-tight font-display">
                                        {industry.name}
                                    </h3>
                                    <p className="text-slate-500 text-[13px] md:text-sm font-light leading-relaxed mb-6 flex-grow">
                                        {industry.subtitle}
                                    </p>
                                    
                                    <Link 
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-[10px] hover:gap-4 transition-all"
                                    >
                                        Inquire Specifically
                                        <ArrowRight className="h-3 w-3" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
