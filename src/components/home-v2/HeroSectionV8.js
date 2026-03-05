"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
    {
        id: "clients",
        title: "Global Clients",
        subtitle: "Elite Partnerships",
        description: "Empowering world-class enterprises with elite talent and innovative marketing strategies that drive global impact.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000",
    },
    {
        id: "marketing",
        title: "Marketing Support",
        subtitle: "Growth Oriented",
        description: "Full-spectrum marketing operations designed to amplify your brand voice and accelerate market penetration.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000",
    },
    {
        id: "ai",
        title: "AI Automation",
        subtitle: "Future Ready",
        description: "Next-gen automation workflows that optimize your recruitment and marketing pipelines with surgical precision.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000",
    },
    {
        id: "bizdev",
        title: "Business Development",
        subtitle: "Strategic Logic",
        description: "Bridging the gap between potential and profit through data-driven business expansion and marketing logic.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000",
    },
    {
        id: "finance",
        title: "Accounting & Finance",
        subtitle: "Fiscal Integrity",
        description: "Precision financial management and accounting services tailored for high-growth digital agencies.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000",
    }
];

export function HeroSectionV8() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % services.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section id="hero" className="relative min-h-[100dvh] bg-white flex flex-col pt-32 md:pt-40 lg:pt-48 pb-20 overflow-hidden scroll-mt-32">
            {/* Background with Increased Visibility */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence>
                    <motion.div
                        key={services[activeIndex].id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={services[activeIndex].image}
                            alt=""
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Refined Overlays for Image Clarity and Text Contrast */}
                <div className="absolute inset-0 bg-white/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/10" />
            </div>

            <div className="container-premium relative z-10 w-full text-center flex-grow flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={services[activeIndex].id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 mb-8 backdrop-blur-md"
                        >
                            <Sparkles className="h-4 w-4 text-secondary" />
                            <span className="text-[10px] font-bold text-slate-600 tracking-[0.4em] uppercase">{services[activeIndex].subtitle}</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.15] mb-8 tracking-tighter drop-shadow-sm">
                            A Global Engine for <br />
                            <span className="text-secondary">{services[activeIndex].title}</span>
                        </h1>

                        <p className="text-base md:text-xl text-slate-700 max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
                            {services[activeIndex].description}
                        </p>

                        <div className="flex items-center justify-center gap-6">
                            <Button asChild size="lg" className="rounded-xl bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-8 shadow-xl shadow-secondary/20 transition-all border-none">
                                <Link href="/contact" className="flex items-center gap-2 text-[15px] tracking-wide">
                                    GET STARTED NOW
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-12 md:right-12 z-20 flex items-center gap-2 md:gap-4 bg-white/90 backdrop-blur-xl p-3 px-4 md:p-4 md:px-6 rounded-xl border border-slate-200 shadow-xl">
                <div className="flex gap-1.5 md:gap-2">
                    {services.map((_, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className="group pt-1 md:pt-2"
                            >
                                <div className="flex flex-col gap-1 md:gap-1.5 w-8 md:w-10">
                                    <div className="flex justify-between items-center px-0.5">
                                        <span className={`text-[9px] font-bold tracking-tighter transition-colors ${isActive ? 'text-secondary' : 'text-slate-400'}`}>
                                            0{index + 1}
                                        </span>
                                    </div>
                                    <div className="relative h-[2px] w-full bg-slate-100 rounded-full overflow-hidden">
                                        {isActive && (
                                            <motion.div
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 8, ease: "linear" }}
                                                className="absolute inset-0 bg-secondary shadow-[0_0_10px_#cf603d]"
                                            />
                                        )}
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

        </section>
    );
}
