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
        <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden scroll-mt-32">
            <div className="container-premium relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
                    >
                        <Sparkles className="h-4 w-4" />
                        Engagement
                    </motion.div>
                    -
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">
                        Let's Design Your <span className="text-secondary">Growth Strategy</span>
                    </h2>

                    <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                        Whether you're scaling a startup or optimizing an enterprise ecosystem, we provide the talent logic you need to win.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Side: Info & Socials */}
                    <div className="lg:col-span-5 flex flex-col h-full">
                        <div className="space-y-4 flex-grow">
                            {[
                                { icon: Mail, label: "Direct Communication", value: "info@novotionrpo.com", tag: "Email" },
                                { icon: Phone, label: "Immediate Support", value: "+1 (234) 567-890", tag: "Call" },
                                { icon: MapPin, label: "Global Presence", value: "Orlando • Ahmedabad", tag: "Visit" },
                                { icon: Clock, label: "Operational Window", value: "24/7 Delivery", tag: "Availability" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-secondary/20 hover:bg-white transition-all duration-500 flex items-center gap-6 relative overflow-hidden shadow-sm hover:shadow-lg hover:shadow-slate-200/50"
                                >
                                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:bg-white transition-all shadow-sm">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <p className="text-slate-400 text-[9px] uppercase font-bold tracking-[0.2em]">{item.label}</p>
                                            <span className="text-slate-200 text-[8px] font-bold uppercase tracking-widest">{item.tag}</span>
                                        </div>
                                        <p className="text-slate-800 font-bold tracking-tight text-base">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links Block */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 pt-8 border-t border-slate-100"
                        >
                            <p className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.4em] mb-6 px-1">Connect Socially</p>
                            <div className="flex gap-4">
                                {socialLinks.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-secondary hover:border-secondary transition-all duration-300 group shadow-sm"
                                    >
                                        <social.icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-12 rounded-xl bg-slate-50 border border-slate-200 relative overflow-hidden group shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] pointer-events-none opacity-50" />

                            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.3em] ml-1">First Name</label>
                                        <Input className="bg-white border-slate-200 rounded-xl py-6 focus:border-secondary shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 h-auto text-slate-900 placeholder:text-slate-300 transition-all" placeholder="John" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.3em] ml-1">Last Name</label>
                                        <Input className="bg-white border-slate-200 rounded-xl py-6 focus:border-secondary shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 h-auto text-slate-900 placeholder:text-slate-300 transition-all" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.3em] ml-1">Work Email</label>
                                    <Input type="email" className="bg-white border-slate-200 rounded-xl py-6 focus:border-secondary shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 h-auto text-slate-900 placeholder:text-slate-300 transition-all" placeholder="john@company.com" />
                                </div>

                                <div className="space-y-4">
                                    <label className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.3em] ml-1">Strategic Message</label>
                                    <Textarea className="bg-white border-slate-200 rounded-xl focus:border-secondary shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[160px] text-slate-900 placeholder:text-slate-300 transition-all resize-none" placeholder="Briefly describe your hiring objectives..." />
                                </div>

                                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-16 rounded-xl text-[13px] tracking-[0.3em] shadow-xl shadow-secondary/20 transition-all group/btn border-none">
                                    INITIATE CONSULTATION
                                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
