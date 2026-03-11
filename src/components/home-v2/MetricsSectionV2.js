"use client";

import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { Building2, Target, Zap, Globe } from "lucide-react";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value, suffix = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 60,
        damping: 20,
    });

    const displayValue = useTransform(springValue, (latest) =>
        Math.floor(latest).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    return (
        <span ref={ref}>
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
}

const metrics = [
    {
        icon: Building2,
        targetValue: 14,
        suffix: "+",
        label: "Active Client Accounts",
        description: "Global businesses served across UK, US, Canada & APAC",
        color: "from-[#cf603d] to-[#ebd69b]"
    },
    {
        icon: Target,
        targetValue: 85,
        suffix: "%+",
        label: "Client Retention Rate",
        description: "Businesses that stay, scale, and grow with us",
        color: "from-[#cf603d] to-[#cf603d]/40"
    },
    {
        icon: Zap,
        targetValue: 60,
        suffix: "%",
        label: "Average Cost Savings",
        description: "Vs. in-house hiring and traditional agency models",
        color: "from-[#ebd69b] to-[#cf603d]"
    },
    {
        icon: Globe,
        targetValue: 24,
        suffix: "/7",
        label: "Global Support",
        description: "Continuous operations across every service line",
        color: "from-[#cf603d] to-[#ffffff]"
    },
];

export function MetricsSection() {
    return (
        <section id="metrics" className="relative flex flex-col justify-center py-12 md:py-12 bg-white overflow-hidden scroll-mt-20">
            <div className="container-premium relative z-10 w-full">

                {/* Title & Subtitle */}
                <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tighter leading-[1.1]">
                            Proven <span className="text-secondary">Impact</span> at Scale
                        </h2>
                        <p className="text-xs md:text-sm lg:text-base text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed italic border-x-2 border-slate-100 px-6">
                            Quantifiable results across five key service lines from recruitment and marketing to AI automation, business growth, and financial management.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group p-6 md:p-8 rounded-[2.5rem] bg-slate-50/30 border border-slate-200 hover:border-secondary/30 hover:bg-white transition-all duration-500 flex flex-col items-center text-center h-full shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 overflow-hidden relative"
                        >
                            {/* Icon with Glow */}
                            <div className="mb-4 md:mb-6 relative">
                                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary group-hover:shadow-xl group-hover:shadow-secondary/10 transition-all duration-500">
                                    <metric.icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Animated Value */}
                            <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-1 tracking-tighter">
                                <AnimatedNumber value={metric.targetValue} suffix={metric.suffix} />
                            </div>

                            {/* Labels */}
                            <div className="text-[9px] md:text-[10px] font-bold text-secondary uppercase tracking-[0.3em] mb-1.5">{metric.label}</div>
                            <div className="text-slate-400 text-[10px] md:text-xs font-light max-w-[120px] md:max-w-[160px] leading-relaxed group-hover:text-slate-500 transition-colors">{metric.description}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
