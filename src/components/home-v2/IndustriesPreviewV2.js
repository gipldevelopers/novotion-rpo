"use client";

import { motion } from "framer-motion";
import { Monitor, Stethoscope, Landmark, Sparkles, ArrowRight, Factory, Building2, DraftingCompass, Zap, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const industries = [
    {
        id: "tech",
        name: "IT",
        subtitle: "Software, SaaS & Digital Transformation",
        icon: Monitor,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
        label: "Innovation Hub"
    },
    {
        id: "healthcare",
        name: "Healthcare",
        subtitle: "MedTech & Clinical Solutions",
        icon: Stethoscope,
        image: "/assets/industry_healthcare.png",
        label: "Care Precision"
    },
    {
        id: "construction",
        name: "Construction",
        subtitle: "Infrastructure & Urban Development",
        icon: Building2,
        image: "/assets/industry_construction.png",
        label: "Legacy Build"
    },
    {
        id: "engineering",
        name: "Engineering",
        subtitle: "Precision Systems & R&D Excellence",
        icon: DraftingCompass,
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
        label: "Design Core"
    },
    {
        id: "manufacturing",
        name: "Manufacturing",
        subtitle: "Industrial Automation & Smart Production",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200",
        label: "Industry 4.0"
    },
    {
        id: "energy",
        name: "Energy",
        subtitle: "Renewables & Power Grid Management",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80&w=1200",
        label: "Global Power"
    },
    {
        id: "finance",
        name: "Accounting & Finance",
        subtitle: "Banking, FinTech & Wealth Management",
        icon: Landmark,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
        label: "Capital Flow"
    },
    {
        id: "retail",
        name: "E-commerce",
        subtitle: "Digital Retail & Global Marketplaces",
        icon: ShoppingCart,
        image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1200",
        label: "Digital Trade"
    }
];

export function IndustriesPreview() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="industries" className="min-h-screen md:h-screen bg-white relative overflow-hidden scroll-mt-20 flex flex-col justify-center py-8 md:py-6 lg:py-10">

            <div className="container-premium relative z-10 w-full px-4 max-w-[98%] lg:max-w-7xl mx-auto flex flex-col h-full lg:max-h-[88vh]">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-6 md:mb-8 shrink-0">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                        Global <span className="text-secondary">Segments</span>
                    </h2>
                    <p className="text-secondary text-sm md:text-base font-bold uppercase tracking-[0.4em] mb-8">
                        Industries We Serve
                    </p>
                </div>

                {/* Adaptive Layout: 2-Column Grid on Mobile, Cinematic Pillars on Desktop */}
                <div className="grid grid-cols-2 md:flex md:flex-row h-auto md:h-[380px] lg:h-[420px] gap-2.5 w-full flex-grow md:flex-grow-0">
                    {industries.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.04 }}
                                onClick={() => setActiveIndex(index)}
                                onMouseEnter={() => window.innerWidth > 768 && setActiveIndex(index)}
                                    className={`group relative rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden transition-all duration-500 ease-[0.23, 1, 0.32, 1] cursor-pointer shadow-sm h-[140px] md:h-full
                                    ${isActive
                                        ? "md:flex-[5] shadow-2xl shadow-slate-200"
                                        : "md:flex-1 md:opacity-70 md:hover:opacity-100"
                                    }`}
                            >
                                {/* Visual Engine */}
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className={`object-cover transition-transform duration-700 ease-out ${isActive ? "scale-105" : "scale-100"}`}
                                />

                                {/* Cinematic Overlays */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent transition-opacity duration-300 ${isActive ? "opacity-70" : "opacity-80"}`} />
                                <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-secondary/40 to-transparent transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`} />

                                {/* Mobile/Collapsed Icon Pod */}
                                <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${isActive ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"}`}>
                                    <div className="p-2 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 text-white">
                                        <item.icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.5} />
                                    </div>
                                    <p className="mt-2 text-[8px] font-bold text-white uppercase tracking-wider md:hidden text-center px-2">
                                        {item.name}
                                    </p>
                                    <p className="mt-3 text-[10px] font-bold text-white uppercase tracking-[0.2em] hidden md:block [writing-mode:vertical-lr] rotate-180">
                                        {item.name}
                                    </p>
                                </div>

                                {/* Expanded State / Content Detail (Touch aware reveal) */}
                                <div className={`absolute inset-0 z-10 p-4 md:p-6 flex flex-col justify-end transition-all duration-500 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 md:pointer-events-none md:hidden"} text-white`}>
                                    <div className="mb-2 md:mb-4">
                                        <h3 className="text-sm md:text-xl lg:text-2xl font-black mb-0.5 md:mb-1 tracking-tighter uppercase leading-none">
                                            {item.name}
                                        </h3>
                                    </div>

                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-1.5 bg-white text-slate-900 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl font-bold uppercase tracking-widest text-[7px] md:text-[8px] transition-all hover:bg-secondary hover:text-white shadow-2xl w-fit"
                                    >
                                        Inquire
                                        <ArrowRight className="h-2.5 w-2.5 md:h-3 md:w-3" />
                                    </Link>
                                </div>

                                {/* Desktop Floating Counter */}
                                <div className={`absolute top-4 right-4 transition-opacity duration-300 hidden lg:block ${isActive ? "opacity-0" : "opacity-20"}`}>
                                    <span className="text-white text-xl font-black tracking-tighter select-none">
                                        0{index + 1}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
