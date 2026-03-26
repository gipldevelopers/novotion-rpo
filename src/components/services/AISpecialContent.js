"use client";

import { motion } from "framer-motion";
import { 
    ArrowRight, 
    Zap, 
    Bot, 
    Cpu, 
    Network, 
    Repeat, 
    BarChart3,
    Settings,
    TrendingUp,
    CheckCircle2,
    Users
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AIIcon = ({ type, className = "w-6 h-6" }) => {
    switch (type) {
        case "ai-integration-deployment": return <Cpu className={className} />;
        case "workflow-automation-scaling": return <Repeat className={className} />;
        case "custom-bot-development": return <Bot className={className} />;
        case "data-analytics-automation": return <BarChart3 className={className} />;
        case "intelligent-system-architecture": return <Network className={className} />;
        default: return <Settings className={className} />;
    }
};

const pillarIcons = [
    <Network key="01" className="w-5 h-5" />,
    <Bot key="02" className="w-5 h-5" />,
    <BarChart3 key="03" className="w-5 h-5" />,
    <Zap key="04" className="w-5 h-5" />,
    <Repeat key="05" className="w-5 h-5" />,
    <TrendingUp key="06" className="w-5 h-5" />
];

export function AISpecialContent({ service }) {
    if (!service) return null;

    const pillars = [
        {
            title: "Business Process Automation",
            slug: "business-process-automation",
            tagline: "AUTOMATE WHAT DOES NOT NEED YOU.",
            desc: "We build intelligent automation and AI systems that free your team to focus on higher value tasks, not data entry or busywork. The result is removing the ceiling on what your people can achieve.",
            icon: pillarIcons[0]
        },
        {
            title: "AI Chatbots & Assistants",
            slug: "chatbots-virtual-assistants",
            tagline: "NEVER MISS A LEAD. NEVER MISS A QUESTION",
            desc: "We build AI chatbots trained on your business to deliver on-brand responses and qualify leads around the clock.",
            icon: pillarIcons[1]
        },
        {
            title: "AI Reporting & Analytics",
            slug: "reporting-analytics",
            tagline: "STOP GUESSING. START KNOWING.",
            desc: "We build automated analytics infrastructure that consolidates your data and delivers real-time insight to the right people.",
            icon: pillarIcons[2]
        },
        {
            title: "Marketing & Sales Automation",
            slug: "marketing-sales-automation",
            tagline: "YOUR SALES FUNNEL, RUNNING ON AUTOPILOT.",
            desc: "Systematic processes ensure every lead is followed up and every opportunity progresses without depending on someone remembering to act.",
            icon: pillarIcons[3]
        },
        {
            title: "Systems Integration",
            slug: "systems-integration",
            tagline: "MAKE ALL YOUR TOOLS TALK TO EACH OTHER.",
            desc: "We connect your platforms so data flows automatically and your team stops bridging gaps manually every day.",
            icon: pillarIcons[4]
        },
        {
            title: "AI Content Assistance",
            slug: "ai-content-assistance",
            tagline: "PRODUCE MORE CONTENT, SPEND LESS TIME CREATING IT.",
            desc: "We build AI content systems trained on your voice so you produce more, faster, without sacrificing quality or credibility.",
            icon: pillarIcons[5]
        }
    ];

    return (
        <div className="bg-white">
            {/* 1. Hero Section - Refined for compact layout */}
            <section className="pt-[100px] pb-24 relative bg-white">
                <div className="container-premium px-4">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="max-w-lg"
                        >
                            {/* Top Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 rounded-full border border-purple-100 mb-6">
                                <span className="bg-purple-500 p-0.5 rounded-sm">
                                    <TrendingUp className="h-2.5 w-2.5 text-white" />
                                </span>
                                <span className="text-[9px] font-bold text-purple-600 uppercase tracking-widest">
                                    STRATEGIC GROWTH ENGINE
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-[50px] font-bold text-[#0a0a0a] tracking-tight leading-[1.1] mb-6">
                                Work & <span className="relative inline-block text-secondary">
                                    Automation
                                    {/* Refined Underline Swoosh - Matched to 3rd reference image */}
                                    <svg className="absolute -bottom-1.5 left-0 w-full h-2.5 text-secondary/50" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                                        <path d="M5 9.5C60 6 120 5 180 6.5C240 8 300 11 320 11.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </h1>

                            <p className="text-[15px] text-slate-500 font-light leading-relaxed max-w-lg mb-8">
                                {service.description || "We build intelligent automation and AI systems that free your team to focus on higher value tasks, not data entry or busywork. The result is removing the ceiling on what your people can achieve."}
                            </p>
                            
                            <Button asChild className="bg-white hover:bg-secondary text-secondary hover:text-white h-10 px-7 rounded-lg font-bold transition-all shadow-lg shadow-secondary/5 border-none group/btn text-[11px] uppercase tracking-wider">
                                <Link href="/contact" className="flex items-center gap-2">
                                    Automate your workflows
                                    <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Right Side: Image + Floating Elements - Spacing adjusted to prevent clipping */}
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0, x: 20 }}
                            animate={{ scale: 1, opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="relative flex justify-end p-12"
                        >
                            {/* Ghost Background Layers for matched depth */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] bg-secondary/10 blur-[60px] rounded-[3rem] -z-10" />
                            
                            {/* Tilted background accents */}
                            <div className="absolute top-16 left-8 w-[80%] h-[80%] bg-secondary/5 rounded-[3.5rem] rotate-[-3deg] -z-[5]" />
                            <div className="absolute top-8 right-8 w-[80%] h-[80%] bg-slate-500/5 rounded-[3.5rem] rotate-[4deg] -z-[5]" />

                            {/* Main Hero Container - Framed with Extreme Rounding */}
                            <div className="relative rounded-[3.5rem] bg-black aspect-square w-full max-w-[440px] p-0.5 shadow-[0_50px_100px_-20px_rgba(30,58,138,0.2)]">
                                <div className="relative w-full h-full rounded-[3.3rem] overflow-hidden">
                                    <Image 
                                        src="/assets/AI Visualization.png"
                                        alt="AI Visualization"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                
                                {/* Signature Card: Neural Load - Corrected Positioning with Tilt & Floating Animation */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -20, rotate: -3 }}
                                    animate={{ 
                                        opacity: 1, 
                                        x: 0,
                                        y: [0, -8, 0], // Continuous bobbing
                                        rotate: -3
                                    }}
                                    transition={{ 
                                        opacity: { delay: 0.8 },
                                        x: { delay: 0.8 },
                                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                        rotate: { delay: 0.8 }
                                    }}
                                    className="absolute -top-7 -left-10 p-5 rounded-[2rem] bg-white/70 backdrop-blur-3xl border border-white/50 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.06)] w-52 z-20"
                                >
                                    <div className="flex items-center justify-between mb-2.5 px-0.5">
                                        <span className="text-[8px] font-black text-secondary tracking-[0.1em] uppercase">NEURAL LOAD</span>
                                        <TrendingUp className="h-3.5 w-3.5 text-secondary" />
                                    </div>
                                    <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden mb-2.5">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: '98.2%' }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                                            className="h-full bg-secondary rounded-full shadow-[0_0_12px_rgba(30,58,138,0.4)]"
                                        />
                                    </div>
                                    <div className="text-[24px] font-bold text-slate-900 tracking-tight px-0.5">98.2%</div>
                                </motion.div>

                                {/* Signature Card: Active Agents - Corrected Positioning with Tilt & Floating Animation */}
                                <motion.div 
                                    initial={{ opacity: 0, x: 20, rotate: 2 }}
                                    animate={{ 
                                        opacity: 1, 
                                        x: 0,
                                        y: [0, 8, 0], // Continuous bobbing (offset from other card)
                                        rotate: 2
                                    }}
                                    transition={{ 
                                        opacity: { delay: 1.2 },
                                        x: { delay: 1.2 },
                                        y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                                        rotate: { delay: 1.2 }
                                    }}
                                    className="absolute -bottom-6 -right-10 p-5 rounded-[2rem] bg-white/70 backdrop-blur-3xl border border-white/50 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.06)] z-20 min-w-[210px]"
                                >
                                    <div className="flex items-center gap-3 mb-3.5 px-0.5">
                                        <div className="w-9 h-9 bg-purple-100 rounded-full flex items-center justify-center">
                                            <Zap className="h-4 w-4 text-purple-600" />
                                        </div>
                                        <div>
                                            <div className="text-[8px] font-black text-slate-400 uppercase tracking-[0.1em] mb-0.5">ACTIVE AGENTS</div>
                                            <div className="text-[20px] font-bold text-slate-900 leading-none">1,204</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-0.5">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-7.5 h-7.5 rounded-full border-2 border-white bg-slate-100 overflow-hidden relative">
                                                <Image src={`/assets/team/member${i}.png`} alt="Agent" fill className="object-cover" />
                                            </div>
                                        ))}
                                        <div className="w-7.5 h-7.5 rounded-full bg-secondary flex items-center justify-center text-[9px] font-bold text-white relative z-10 border-2 border-white">
                                            +12
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Tailored Automation Pillars - Dark Section */}
            <section className="py-20 bg-[#050505] relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/[0.05] blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/[0.03] blur-[100px] rounded-full" />

                <div className="container-premium relative z-10 px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 bg-secondary/10 rounded-full border border-secondary/20">
                                <Bot className="h-3 w-3 text-secondary" />
                                <span className="text-[8px] font-bold text-secondary uppercase tracking-widest">What We Do</span>
                            </div>
                            <h2 className="text-3xl md:text-[2.5rem] font-bold text-white tracking-tight leading-tight">
                                Tailored Automation Pillars
                            </h2>
                        </div>
                        <p className="text-slate-500 text-[13px] font-light leading-relaxed max-w-[300px] border-l border-white/10 pl-6 hidden lg:block">
                            Modular AI frameworks designed to integrate seamlessly with your existing infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pillars.map((item, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="group p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/15 hover:border-secondary/30 transition-all duration-500 relative flex flex-col h-full overflow-hidden"
                            >
                                {/* Signature Corner Sheen - Balanced High-Contrast Reflection */}
                                <div className="absolute top-0 right-0 w-30 h-30 bg-gradient-to-bl from-white/[0.2] via-transparent to-transparent pointer-events-none z-10 opacity-80" />
                                <div className="absolute top-0 right-0 w-22 h-[1.5px] bg-gradient-to-l from-white/35 to-transparent z-10" />
                                <div className="absolute top-0 right-0 w-[1.5px] h-22 bg-gradient-to-b from-white/35 to-transparent z-10" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-105 transition-all duration-500">
                                        <div className="text-secondary group-hover:text-white transition-colors duration-500">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h4 className="text-[17px] font-bold text-white mb-2.5 tracking-tight transition-colors">
                                        {item.title}
                                    </h4>
                                    <div className="text-[8px] font-bold text-secondary uppercase tracking-[0.1em] mb-4 opacity-80">
                                        {item.tagline}
                                    </div>
                                    <p className="text-slate-400 text-[12px] font-light leading-relaxed mb-8 line-clamp-2">
                                        {item.desc}
                                    </p>
                                    <div className="mt-auto">
                                        <Link 
                                            href={`/services/ai-automation/${item.slug}`}
                                            className="text-[9px] font-bold text-white flex items-center gap-1.5 uppercase tracking-[0.15em] transition-opacity hover:opacity-80"
                                        >
                                            LEARN MORE <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );

}
