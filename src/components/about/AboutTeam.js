"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";

const team = [
    {
        name: "Vigen G.",
        role: "Founder & Managing Director",
        description: "Visionary leader with 15+ years in global RPO strategy. Architect of the Novotion blueprint.",
        image: "/assets/team/member1.png",
        linkedin: "#",
    },
    {
        name: "Sarah L.",
        role: "Head of Operations",
        description: "Operational excellence specialist focused on scaling efficient offshore recruitment engines.",
        image: "/assets/team/member2.png",
        linkedin: "#",
    },
    {
        name: "James W.",
        role: "Talent Strategy Director",
        description: "Expert in market mapping and high-stakes executive sourcing for global enterprise clients.",
        image: "/assets/team/member3.png",
        linkedin: "#",
    },
    {
        name: "Elena R.",
        role: "Client Success Lead",
        description: "Dedicated to building long-term partnerships through transparent and high-impact delivery.",
        image: "/assets/team/member4.png",
        linkedin: "#",
    },
];

export function AboutTeam() {
    return (
        <section className="pt-16 md:pt-20 lg:pt-24 pb-20 lg:pb-32 bg-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container-premium relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-12 lg:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 shadow-sm"
                    >
                        <Sparkles className="h-3 w-3" />
                        Our Leadership
                    </motion.div>
                    <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 tracking-tighter leading-[1.1] font-display mb-6">
                        The Minds Driving <br />
                        <span className="text-secondary">Recruitment Innovation.</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-xl leading-relaxed">
                        A collective of strategic thinkers and operational experts dedicated to redrawing the boundaries of global talent acquisition.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <div className="relative h-[450px] lg:h-[500px] overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2">
                                
                                {/* Image Stage */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                                    {/* Name & Role Wrapper */}
                                    <div className="transition-transform duration-500 ease-out translate-y-0 group-hover:-translate-y-2">
                                        <span className="inline-block text-[10px] font-bold text-secondary uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            {member.role}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white tracking-tight font-display">
                                            {member.name}
                                        </h3>
                                    </div>

                                    {/* Revealable Bio & Socials */}
                                    <div className="max-h-0 group-hover:max-h-[200px] opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                                        <p className="text-white/70 text-[13px] leading-relaxed mt-4 mb-6 font-medium">
                                            {member.description}
                                        </p>
                                        
                                        <div className="flex items-center pt-4 border-t border-white/10">
                                            <div className="flex gap-4">
                                                <a href={member.linkedin} className="text-white hover:text-secondary transition-colors">
                                                    <Linkedin className="h-5 w-5" />
                                                </a>
                                                <a href={`mailto:office@novotion.com`} className="text-white hover:text-secondary transition-colors">
                                                    <Mail className="h-5 w-5" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Accents */}
                <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden relative">
                                     <Image src={`/assets/team/member${i}.png`} alt="Team" fill className="object-cover" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-[10px] font-bold text-white relative">
                                +12
                            </div>
                        </div>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                            Expanding Our Global Strategic Operations
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
