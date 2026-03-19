"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

const team = [
    {
        name: "Devangi Goswami",
        role: "CEO & Co-Founder",
        description: "Noltven was never meant to be just another service company. It was built to become the growth engine behind businesses that refuse to stay small. We don't just support companies—we structure, scale, and transform them.",
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
        <section className="pt-16 md:pt-20 lg:pt-24 pb-20 lg:pb-32 bg-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container-premium relative z-10">
                {/* Section Header - Centered */}
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center mb-16 lg:mb-24 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 shadow-sm"
                    >
                        <Sparkles className="h-4 w-4" />
                        Our Leadership
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tighter leading-[1.1] font-display mb-8">
                        The Visionaries Behind <br className="hidden md:block" />
                        <span className="text-secondary text-gradient-primary">Noltven's Mission.</span>
                    </h2>
                    <p className="text-slate-500 text-sm md:text-lg max-w-2xl leading-relaxed font-light">
                        A leadership team dedicated to building the growth engine behind businesses that refuse to stay small—structuring, scaling, and transforming global enterprises.
                    </p>
                </div>

                {/* Contemporary Checked Grid - Optimized for Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-7xl mx-auto items-stretch border border-slate-100 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/40">
                    {team.map((member, index) => {
                        const isEven = index === 1;
                        return (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: isEven ? -20 : 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={`flex flex-col group ${index < 2 ? 'md:border-r border-slate-100' : ''} ${index > 0 ? 'border-t md:border-t-0 border-slate-100' : ''}`}
                            >
                                {/* 1. The Block with Image - Always top on mobile, checked on desktop */}
                                <div className={`relative h-[350px] lg:h-[450px] overflow-hidden ${isEven ? 'md:order-2 order-1' : 'order-1'}`}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover object-top grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className={`absolute inset-0 ${isEven ? 'bg-secondary/5' : 'bg-slate-900/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                </div>

                                {/* 2. The Block with Text Details - Always bottom on mobile, checked on desktop */}
                                <div className={`flex-1 p-8 lg:p-12 flex flex-col justify-center text-center md:text-left items-center md:items-start ${isEven ? 'md:order-1 order-2' : 'order-2'} bg-white group-hover:bg-slate-50 transition-colors duration-500`}>
                                    <span className="inline-block text-[10px] font-bold text-secondary uppercase tracking-[0.3em] mb-4">
                                        {member.role}
                                    </span>
                                    <h3 className="text-3xl font-bold text-slate-900 tracking-tighter mb-6 font-display">
                                        {member.name}
                                    </h3>
                                    
                                    <div className="relative mb-8 text-center md:text-left">
                                        <div className="absolute -top-6 -left-4 md:block hidden text-slate-100 text-7xl font-serif leading-none select-none pointer-events-none">"</div>
                                        <p className="relative z-10 text-[15px] lg:text-[16px] text-slate-500 font-light leading-relaxed italic">
                                            "{member.description}"
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 pt-6 border-t border-slate-100 w-full justify-center md:justify-start">
                                        <a 
                                            href={member.linkedin} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-secondary hover:text-white transition-all duration-300 shadow-sm"
                                        >
                                            <Linkedin className="h-4 w-4" />
                                        </a>
                                        <a 
                                            href={`mailto:office@novotion.com`} 
                                            className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm"
                                        >
                                            <Mail className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
