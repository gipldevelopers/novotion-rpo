"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight, Sparkles, Instagram, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const XIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
    </svg>
);

const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/noltven/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/noltven_?igsh=MXNyOHU5NHN0b2RzeA==", label: "Instagram" },
];

export function ContactSection() {
    return (
        <section id="contact" className="py-12 md:py-16 bg-white relative overflow-hidden scroll-mt-20">
            <div className="container-premium relative z-10 w-full px-4">

                {/* Unified Strategic Board */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto bg-slate-50/50 border border-slate-200 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-700"
                >
                    <div className="grid lg:grid-cols-5 items-stretch">

                        {/* Left Panel: Strategic Context */}
                        <div className="lg:col-span-2 p-8 md:p-12 lg:p-14 bg-slate-900 text-white relative flex flex-col justify-between overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none">
                                    Reach <span className="text-secondary">Out to Us</span>
                                </h2>
                                <p className="text-secondary text-sm md:text-base font-bold uppercase tracking-[0.4em] mb-8">
                                    Initiate Your Growth Audit
                                </p>

                                <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-sm italic border-l border-secondary/30 pl-6">
                                    "Ready to cut the overhead, fill your pipeline, and build systems that actually work?
                                    Let's talk. "
                                </p>
                            </div>

                            {/* Social Quick Connect */}
                            <div className="relative z-10 pt-12">
                                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.4em] mb-4 px-1">Connect Socially</p>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, idx) => (
                                        <a
                                            key={idx}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-secondary hover:border-secondary transition-all duration-300 shadow-sm"
                                        >
                                            <social.icon className="h-5 w-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Panel: High-Density Form */}
                        <div className="lg:col-span-3 p-8 md:p-12 lg:p-14 bg-white/40 flex flex-col justify-center">
                            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-secondary/80 text-[10px] uppercase font-bold tracking-[0.3em] ml-1">First Name</label>
                                        <input suppressHydrationWarning className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-5 focus:border-secondary outline-none shadow-none text-slate-900 placeholder:text-slate-400 transition-all font-light text-sm" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-secondary/80 text-[10px] uppercase font-bold tracking-[0.3em] ml-1">Last Name</label>
                                        <input suppressHydrationWarning className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-5 focus:border-secondary outline-none shadow-none text-slate-900 placeholder:text-slate-400 transition-all font-light text-sm" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-secondary/80 text-[10px] uppercase font-bold tracking-[0.3em] ml-1">Work Email Address</label>
                                    <input suppressHydrationWarning type="email" className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-5 focus:border-secondary outline-none shadow-none text-slate-900 placeholder:text-slate-400 transition-all font-light text-sm" placeholder="john@company.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-secondary/80 text-[10px] uppercase font-bold tracking-[0.3em] ml-1">Strategic Objective</label>
                                    <textarea className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:border-secondary outline-none shadow-none min-h-[120px] text-slate-900 placeholder:text-slate-400 transition-all resize-none font-light text-sm" placeholder="Briefly describe your hiring goals..." />
                                </div>

                                <Button className="w-full bg-gradient-to-r from-secondary to-[#154185] hover:bg-slate-900 text-white font-bold h-14 md:h-16 rounded-2xl text-[11px] md:text-[12px] tracking-[0.4em] shadow-xl shadow-secondary/20 transition-all group/btn border-none uppercase mt-4">
                                    INITIATE STRATEGY SESSION
                                    <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Horizon: Compact Contact Info */}
                    <div className="bg-slate-50 border-t border-slate-200 p-8 hidden md:block">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: Mail, label: "Email", value: " info@noltven.com" },
                                { icon: Phone, label: "Phone", value: "+44 20 3996 7029" },
                                { icon: MapPin, label: "UK Office", value: "First Floor Office, 3 Hornton Place, London, W8 4LZ, United Kingdom" },
                                { icon: Clock, label: "Availability", value: "24/7 Deployment" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:shadow-lg group-hover:shadow-secondary/10 transition-all">
                                        <item.icon className="h-5 w-5" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-[10px] uppercase font-black tracking-[0.4em] mb-0.5">{item.label}</p>
                                        <p className="text-slate-800 font-bold tracking-tight text-xs group-hover:text-secondary transition-colors">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
