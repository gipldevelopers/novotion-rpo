"use client";

import { motion } from "framer-motion";
import { Award, Trophy, ShieldCheck, Star, Medal, Sparkles } from "lucide-react";

// Using premium icons as placeholders for your actual award/certificate images.
// You can later swap the <Icon /> component with Next.js <Image /> when you have real award images.
const recognitions = [
    {
        title: "Top RPO Provider 2025",
        issuer: "Global HR Awards",
        icon: Award,
    },
    {
        title: "Excellence in Recruitment",
        issuer: "Talent Acquisition Excellence",
        icon: Trophy,
    },
    {
        title: "ISO 9001:2015 Certified",
        issuer: "Quality Management System",
        icon: ShieldCheck,
    },
    {
        title: "Best Place to Work",
        issuer: "Corporate Culture Institute",
        icon: Star,
    },
    {
        title: "Innovation in Sourcing",
        issuer: "Recruitment Tech Awards",
        icon: Medal,
    },
];

export function AboutRecognitions() {
    // Duplicate the array to create a seamless infinite loop
    const doubledRecognitions = [...recognitions, ...recognitions];

    return (
        <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-100 overflow-hidden relative">
            
            <div className="container-premium relative z-10 mb-12">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 shadow-sm"
                    >
                        <Sparkles className="h-3 w-3" />
                        Recognized Excellence
                    </motion.div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tighter font-display">
                        Awards & Certifications
                    </h2>
                </div>
            </div>

            {/* Infinite Marquee Container */}
            <div className="relative w-full max-w-[100vw] overflow-hidden">
                {/* Gradient Masks for smooth fade out on the edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none hidden md:block" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none hidden md:block" />

                {/* Animated Track */}
                <motion.div
                    className="flex w-max items-center gap-8 md:gap-12 pl-8 md:pl-12"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Adjust this value to make the scroll faster or slower
                    }}
                >
                    {doubledRecognitions.map((item, index) => (
                        <div 
                            key={`${item.title}-${index}`}
                            className="flex flex-col items-center w-[200px] md:w-[240px] group"
                        >
                            {/* Award Image/Icon Container (Round) */}
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:shadow-md group-hover:scale-105 transition-all duration-300 mb-6">
                                {/* If you have actual images, replace the Icon below with:
                                     <Image src={item.image} alt={item.title} fill className="object-cover rounded-full p-2" />
                                */}
                                <item.icon className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
                            </div>
                            
                            {/* Text Details */}
                            <h3 className="text-sm md:text-base font-bold text-slate-900 text-center mb-1 leading-tight px-4">
                                {item.title}
                            </h3>
                            <p className="text-[11px] md:text-xs font-bold text-slate-400 uppercase tracking-widest text-center">
                                {item.issuer}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
