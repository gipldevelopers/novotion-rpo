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
        const timer = setInterval(nextSlide, 10000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section id="hero" className="relative h-[100dvh] bg-white flex flex-col justify-center pt-24 md:pt-32 lg:pt-40 pb-20 overflow-hidden scroll-mt-32">
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

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-slate-900 leading-[1.1] mb-6 md:mb-8 tracking-tighter drop-shadow-sm">
                            A Global Engine for <br />
                            <span className="text-secondary">{services[activeIndex].title}</span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 max-w-2xl lg:max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-normal">
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
            <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {services.map((_, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className="relative py-2 px-1 group"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <div
                                className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${isActive ? 'w-10 bg-secondary' : 'w-2.5 bg-slate-300 group-hover:bg-slate-400'
                                    }`}
                            />
                        </button>
                    );
                })}
            </div>

        </section>
    );
}
