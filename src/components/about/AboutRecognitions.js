"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, ShieldCheck, Star, Medal, Sparkles, X, Maximize2 } from "lucide-react";

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
    const [selectedImage, setSelectedImage] = useState(null);

    const certificationImages = [
        {
            src: "/assets/WhatsApp Image 2026-03-31 at 17.58.59.jpeg",
            title: "ISO/IEC 27001:2022",
            issuer: "Information Security Management System"
        },
        {
            src: "/assets/WhatsApp Image 2026-03-31 at 18.01.59.jpeg",
            title: "ISO 9001:2015",
            issuer: "Quality Management System"
        }
    ];

    return (
        <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-100 overflow-hidden relative">
            
            <div className="container-premium relative z-10 mb-12">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-secondary text-sm md:text-base font-bold uppercase tracking-[0.4em] mb-4 shadow-sm"
                    >
                        <Sparkles className="h-3 w-3" />
                        Recognized Excellence
                    </motion.div>
                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter font-display">
                        Certifications
                    </h2>
                </div>
            </div>

            {/* Grid UI for Certifications */}
            <div className="container-premium relative z-10 w-full px-4 md:px-[20rem] mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
                    {certificationImages.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col items-center"
                        >
                            <div 
                                onClick={() => setSelectedImage(cert.src)}
                                className="relative h-[400px] aspect-[1/1.414] bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden cursor-pointer group-hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 mx-auto"
                            >
                                <Image
                                    src={cert.src}
                                    alt={cert.title}
                                    fill
                                    className="object-contain p-4 md:p-6"
                                />
                                
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-secondary scale-90 group-hover:scale-100 transition-transform duration-300">
                                        <Maximize2 className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 text-center">
                                <h3 className="text-lg font-bold text-slate-900 mb-1">{cert.title}</h3>
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{cert.issuer}</p>
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

            {/* Lightbox / Full-screen View */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-pointer"
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-[110]"
                        >
                            <X className="w-8 h-8" />
                        </motion.button>
                        
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative w-full h-full max-w-4xl max-h-[90vh]"
                        >
                            <Image
                                src={selectedImage}
                                alt="Full screen preview"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
