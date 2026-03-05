"use client";

import { motion } from "framer-motion";
import { Search, UserCheck, ShieldCheck, Rocket, Sparkles } from "lucide-react";

const steps = [
    {
        title: "Strategic Discovery",
        description: "We audit your current tech stack and culture to map precisely where the talent friction exists.",
        icon: Search,
        tag: "Step 01"
    },
    {
        title: "Pipeline Architecture",
        description: "Engaging high-intent candidates through targeted vertical sourcing and custom marketing automation.",
        icon: UserCheck,
        tag: "Step 02"
    },
    {
        title: "Quality Verification",
        description: "Rigorous technical and behavioral screening ensure only top 1% of talent reaches your desk.",
        icon: ShieldCheck,
        tag: "Step 03"
    },
    {
        title: "Seamless Integration",
        description: "Support through offer negotiation and onboarding to ensure long-term retention and early ROI.",
        icon: Rocket,
        tag: "Step 04"
    },
];

export function HowItWorksV2() {
    return (
        <section id="process" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden scroll-mt-32">
            <div className="container-premium relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 shadow-sm"
                    >
                        <Sparkles className="h-4 w-4" />
                        Our Process
                    </motion.div>
                    -
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">
                        Four Steps to <br />
                        <span className="text-secondary">Talent Sovereignty</span>
                    </h2>

                    <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                        A systematic framework that eliminates guesswork and delivers repeatable hiring success.
                    </p>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative p-8 rounded-xl bg-white border border-slate-100 hover:border-secondary/20 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
                            >
                                <div className="flex justify-between items-start mb-10">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:bg-white transition-all shadow-sm">
                                        <step.icon className="h-5 w-5" />
                                    </div>
                                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em]">{step.tag}</span>
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight group-hover:text-secondary transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-slate-500 text-[13px] font-light leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Step Indicator */}
                                <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-200 shadow-sm">
                                    0{index + 1}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
