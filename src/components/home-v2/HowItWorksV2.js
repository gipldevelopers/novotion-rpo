"use client";

import { motion } from "framer-motion";
import { Search, UserCheck, ShieldCheck, Rocket, Sparkles } from "lucide-react";

const steps = [
    {
        title: "Strategic Discovery",
        description: "We audit your current operations recruitment, marketing, automation, finances, and growth to map exactly where the biggest gaps and opportunities exist.",
        icon: Search,
        tag: "Phase 01"
    },
    {
        title: "Solution Architecture",
        description: "We design a tailored action plan across every relevant service line, aligned to your exact goals, your market, and the results you need to hit.",
        icon: UserCheck,
        tag: "Phase 02"
    },
    {
        title: "Precision Execution",
        description: "Specialist teams across recruitment, marketing, AI, business development, and finance execute with speed, accuracy, and full accountability - no delays.",
        icon: ShieldCheck,
        tag: "Phase 03"
    },
    {
        title: "Performance & Growth",
        description: "We track every result, refine what isn't working, and scale what is so your business keeps moving forward month after month.",
        icon: Rocket,
        tag: "Phase 04"
    },
];

export function HowItWorksV2() {
    return (
        <section id="process" className="py-12 md:py-16 bg-slate-50 relative overflow-hidden scroll-mt-20">
            <div className="container-premium relative z-10 w-full">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 shadow-sm"
                    >
                        <Sparkles className="h-4 w-4" />
                        Our Process
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tighter leading-[1.15]">
                        The Strategic <br />
                        <span className="text-secondary">Execution Lifecycle</span>
                    </h2>
                    <p className="text-slate-500 text-xs md:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
                        A structured, four-phase delivery model designed to eliminate friction, drive consistency, and ensure every service we provide delivers measurable results.
                    </p>
                </div>

                {/* Progressive Logic Path UI */}
                <div className="relative max-w-5xl mx-auto px-4">

                    {/* Background Progress Line */}
                    <div className="absolute top-[32px] left-[40px] right-[40px] h-[2px] bg-slate-200 hidden lg:block">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 bg-secondary origin-left shadow-[0_0_10px_rgba(207,96,61,0.3)]"
                        />
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 lg:gap-4 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative"
                            >
                                {/* The Interactive Node */}
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left h-full">

                                    {/* Phase Bubble */}
                                    <div className="relative mb-6">
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center transition-all duration-500 group-hover:border-secondary shadow-lg shadow-slate-200/50 group-hover:shadow-secondary/20 relative z-20 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <step.icon className="h-6 w-6 md:h-8 md:w-8 text-slate-400 group-hover:text-secondary group-hover:scale-110 transition-all duration-500 relative z-10" strokeWidth={1.5} />
                                        </div>

                                        {/* Step Indicator Pin */}
                                        <div className="absolute -top-1 -right-1 w-6 h-6 md:w-7 md:h-7 rounded-full bg-slate-900 text-white text-[9px] md:text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-md z-30 group-hover:bg-secondary transition-colors">
                                            0{index + 1}
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="bg-transparent group-hover:bg-white lg:p-4 rounded-[2rem] transition-all duration-500 lg:group-hover:shadow-xl lg:group-hover:shadow-slate-200/40 relative z-10 lg:group-hover:-translate-y-2 w-full border border-transparent lg:group-hover:border-slate-200">
                                        <div className="inline-flex items-center gap-2 mb-2">
                                            <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] opacity-0 lg:group-hover:opacity-100 transition-opacity">
                                                Phase 0{index + 1}
                                            </span>
                                        </div>
                                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-secondary transition-colors leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-500 text-[11px] md:text-sm font-light leading-relaxed max-w-full lg:max-w-[240px] opacity-100 lg:group-hover:text-slate-600 transition-colors px-2 lg:px-0">
                                            {step.description}
                                        </p>

                                        {/* Interactive Decoration */}
                                        <div className="mt-4 md:mt-6 h-1 w-0 bg-secondary group-hover:w-full transition-all duration-700 ease-out hidden lg:block" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
