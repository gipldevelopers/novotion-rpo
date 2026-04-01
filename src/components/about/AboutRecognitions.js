"use client";

import Image from "next/image";
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
    const certifications = [
        {
            src: "/assets/iso-certified-company-certificate-270012022-600nw-2523784501-removebg-preview.png",
            title: "ISO/IEC 27001:2022",
            issuer: "Information Security Management System"
        },
        {
            src: "/assets/pngwing.com.png",
            title: "ISO 9001:2015",
            issuer: "Quality Management System"
        }
    ];

    return (
        <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-100 overflow-hidden relative">
            
            <div className="container-premium relative z-10 mb-12">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center">

                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter font-display">
                        Certifications
                    </h2>
                </div>
            </div>

            {/* Grid UI for Certifications */}
            <div className="container-premium relative z-10 w-full px-4 md:px-[20rem] mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col items-center flex-1 max-w-[280px]"
                        >
                            <div className="relative w-full aspect-square bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center justify-center p-8 group-hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={cert.src}
                                        alt={cert.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            
                            <div className="mt-8 text-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{cert.title}</h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] leading-relaxed max-w-[220px] mx-auto">
                                    {cert.issuer}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Carousel Removed / Commented Out as per request
            <div className="relative w-full max-w-[100vw] overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none hidden md:block" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none hidden md:block" />
                <motion.div
                    className="flex w-max items-center gap-8 md:gap-12 pl-8 md:pl-12"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                >
                    {doubledRecognitions.map((item, index) => (
                        <div 
                            key={`${item.title}-${index}`}
                            className="flex flex-col items-center w-[200px] md:w-[240px] group"
                        >
                            ... (carousel original item code)
                        </div>
                    ))}
                </motion.div>
            </div>
            */}


        </section>
    );
}
