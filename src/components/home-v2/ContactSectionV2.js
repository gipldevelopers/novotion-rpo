"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight, Sparkles, Instagram, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
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
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
                                >
                                    <Sparkles className="h-4 w-4" />
                                    The Conduit
                                </motion.div>

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tighter leading-none">
                                    Initiate Your <br />
                                    <span className="text-secondary">Talent Audit</span>
                                </h2>

                                <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-sm italic border-l border-secondary/30 pl-6">
                                    "Ready to replace standard hiring friction with a high-velocity execution lifecycle?"
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
                                        <label className="text-secondary/80 text-[9px] uppercase font-bold tracking-[0.3em] ml-1">First Name</label>
                                        <input className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-5 focus:border-secondary outline-none shadow-none text-slate-900 placeholder:text-slate-400 transition-all font-light text-sm" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-secondary/80 text-[9px] uppercase font-bold tracking-[0.3em] ml-1">Last Name</label>
                                        <input className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-5 focus:border-secondary outline-none shadow-none text-slate-900 placeholder:text-slate-400 transition-all font-light text-sm" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-secondary/80 text-[9px] uppercase font-bold tracking-[0.3em] ml-1">Work Email Address</label>
                                    <input type="email" className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-5 focus:border-secondary outline-none shadow-none text-slate-900 placeholder:text-slate-400 transition-all font-light text-sm" placeholder="john@company.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-secondary/80 text-[9px] uppercase font-bold tracking-[0.3em] ml-1">Strategic Objective</label>
                                    <textarea className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:border-secondary outline-none shadow-none min-h-[120px] text-slate-900 placeholder:text-slate-400 transition-all resize-none font-light text-sm" placeholder="Briefly describe your hiring goals..." />
                                </div>

                                <Button className="w-full bg-secondary hover:bg-slate-900 text-white font-bold h-14 md:h-16 rounded-2xl text-[11px] md:text-[12px] tracking-[0.4em] shadow-xl shadow-secondary/20 transition-all group/btn border-none uppercase mt-4">
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
                                { icon: Mail, label: "Email", value: "info@novotionrpo.com" },
                                { icon: Phone, label: "Phone", value: "+1 (234) 567-890" },
                                { icon: MapPin, label: "Location", value: "Orlando • Ahmedabad" },
                                { icon: Clock, label: "Availability", value: "24/7 Deployment" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:shadow-lg group-hover:shadow-secondary/10 transition-all">
                                        <item.icon className="h-5 w-5" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-[8px] uppercase font-bold tracking-[0.2em] mb-0.5">{item.label}</p>
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
