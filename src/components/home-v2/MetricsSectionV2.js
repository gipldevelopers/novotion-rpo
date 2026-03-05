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
        label: "Enterprise Clients",
        description: "Global organizations served",
        color: "from-[#cf603d] to-[#ebd69b]"
    },
    {
        icon: Target,
        targetValue: 85,
        suffix: "%+",
        label: "Placement Rate",
        description: "Industry leading accuracy",
        color: "from-[#cf603d] to-[#cf603d]/40"
    },
    {
        icon: Zap,
        targetValue: 60,
        suffix: "%",
        label: "ROI Efficiency",
        description: "Average cost reduction",
        color: "from-[#ebd69b] to-[#cf603d]"
    },
    {
        icon: Globe,
        targetValue: 24,
        suffix: "/7",
        label: "Global Support",
        description: "Multi-timezone delivery",
        color: "from-[#cf603d] to-[#ffffff]"
    },
];

export function MetricsSection() {
    return (
        <section id="metrics" className="relative py-20 md:py-32 bg-white overflow-hidden scroll-mt-32">
            <div className="container-premium relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group p-6 md:p-10 rounded-xl bg-slate-50 border border-slate-100 hover:border-secondary/20 hover:bg-white transition-all duration-500 flex flex-col items-center text-center h-full shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
                        >
                            {/* Icon with Glow */}
                            <div className="mb-4 md:mb-8 relative">
                                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                                <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-secondary transition-all duration-300 shadow-sm">
                                    <metric.icon className="h-5 w-5 md:h-6 md:h-6" />
                                </div>
                            </div>

                            {/* Animated Value */}
                            <div className="text-2xl md:text-5xl font-bold text-slate-900 mb-1 md:mb-2 tracking-tighter">
                                <AnimatedNumber value={metric.targetValue} suffix={metric.suffix} />
                            </div>

                            {/* Labels */}
                            <div className="text-[9px] md:text-[11px] font-bold text-secondary uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1 md:mb-2">{metric.label}</div>
                            <div className="text-slate-400 text-[10px] md:text-xs font-light max-w-[120px] md:max-w-[160px]">{metric.description}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
