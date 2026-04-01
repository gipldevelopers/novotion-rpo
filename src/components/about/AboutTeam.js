"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Sparkles, ArrowUpRight, Quote } from "lucide-react";
import Image from "next/image";

const team = [
    {
        name: "Devangi Goswami",
        role: "Co-Founder & CEO",
        description: "Noltven was never meant to be just another service company. It was built to become the growth engine behind businesses that refuse to stay small. We don't just support companies we structure, scale, and transform them.",
        image: "/assets/team/devangi.jpeg",
        linkedin: "https://www.linkedin.com/in/devangi-goswami-",
    },
    {
        name: "Kaval Khatri",
        role: "Co-Founder & Managing Director",
        description: "Growth without systems is chaos. At Noltven, we focus on building processes that don't just work today but continue delivering results as businesses scale globally.",
        image: "/assets/team/kaval.jpeg",
        linkedin: "https://www.linkedin.com/in/kaval-khatri-b411bb309",
    },
    {
        name: "Shadab Ansari",
        role: "Co-Founder & Director",
        description: "Execution is where most businesses struggle. Our goal at Noltven is simple: to turn ideas into consistent, measurable outcomes through the right combination of strategy, talent, and technology.",
        image: "/assets/team/shadab.jpeg",
        linkedin: "https://www.linkedin.com/in/shadab-ansari-699421189",
    },
];

export function AboutTeam() {
    return (
        <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
            {/* Background Artificats */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container-premium relative z-10">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-24">

                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[1] mb-8">
                        The Visionaries Behind <br />
                        <span className="text-secondary italic">Noltven's Mission.</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                        A leadership team dedicated to building the growth engine behind businesses structuring, scaling, and transforming global enterprises.
                    </p>
                </div>

                {/* Redesigned Team Grid - Premium Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card Wrapper */}
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl shadow-slate-200/50">
                                {/* Image with Premium Grayscale to Color Effect */}
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />

                                {/* Social Links - Top Right Corner */}
                                <div className="absolute top-6 right-6 flex flex-col gap-3 z-30 opacity-100 lg:opacity-0 lg:translate-x-10 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 transition-all duration-500">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-xl"
                                    >
                                        <Linkedin className="h-4 w-4 lg:h-5 lg:w-5" />
                                    </a>
                                    <a
                                        href={`mailto:info@noltven.com`}
                                        className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-xl"
                                    >
                                        <Mail className="h-4 w-4 lg:h-5 lg:w-5" />
                                    </a>
                                </div>

                                {/* Vertical Role Tag */}
                                <div className="absolute top-6 left-6 z-30">
                                    <div className="bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl">
                                        <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">
                                            {member.role}
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom Overlay - Gradual info reveal */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 lg:opacity-60 lg:group-hover:opacity-90 transition-opacity duration-500" />

                                {/* Info Box */}
                                <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-10 pb-8 lg:pb-10 z-20 overflow-hidden lg:overflow-visible">
                                    <div className="flex flex-col transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-0 lg:translate-y-[calc(100%-40px)] lg:group-hover:translate-y-0">
                                        {/* Name - Slides up for hover */}
                                        <h3 className="text-xl lg:text-2xl font-black text-white tracking-tight pb-4 lg:pb-6">
                                            {member.name}
                                        </h3>

                                        {/* Subtitle/Description - Slides up with name from bottom */}
                                        <div className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 delay-100 space-y-4">
                                            <div className="relative">
                                                <Quote className="absolute -left-6 -top-2 h-6 w-6 text-secondary" />
                                                <p className="text-white/80 text-[12px] lg:text-[13px] leading-relaxed font-light italic pl-4">
                                                    {member.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
