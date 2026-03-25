"use client";

import { motion } from "framer-motion";
import { Maximize, Zap, Shield, Globe, Award, Target, Briefcase, BarChart } from "lucide-react";

const features = [
    {
        icon: Maximize,
        title: "End-to-End RPO",
        description: "Full lifecycle recruitment outsourcing from sourcing to onboarding, seamlessly integrated with your brand."
    },
    {
        icon: Zap,
        title: "Rapid Deployment",
        description: "Launch targeted hiring campaigns in days, not months. Accelerate your time-to-hire by 45%."
    },
    {
        icon: Globe,
        title: "Global Sourcing Hub",
        description: "Tap into an expansive network of passive and active candidates across the US, UK, and beyond."
    },
    {
        icon: Shield,
        title: "Compliance First",
        description: "Rigorous background checks, candidate qualification, and local compliance adherence built-in."
    },
    {
        icon: Target,
        title: "Precision Targeting",
        description: "AI-powered candidate matching that aligns skills, culture fit, and long-term retention goals."
    },
    {
        icon: BarChart,
        title: "Advanced Analytics",
        description: "Real-time dashboards providing complete transparency into pipeline health and conversion metrics."
    }
];

export function FeaturesV2() {
    return (
        <section className="py-24 relative bg-[#0B0F19]">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container-premium relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none">
                        The <span className="text-secondary">Advantage</span>
                    </h2>
                    <p className="text-secondary text-sm md:text-base font-bold uppercase tracking-[0.4em] mb-8">
                        Engineered for Excellence
                    </p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg"
                    >
                        A comprehensive suite of recruitment solutions designed to elevate your talent acquisition capabilities without scaling your internal overhead.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-secondary/30 transition-all duration-300">
                                    <feature.icon className="h-6 w-6 text-secondary group-hover:text-accent transition-colors" />
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-white/50 leading-relaxed font-light">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
