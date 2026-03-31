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
            title: "AI & Automation Services",
            slug: "business-process-automation",
            tagline: "WORK SMARTER. SCALE FASTER. AUTOMATE WHAT DOES NOT NEED YOU.",
            desc: "We identify and digitise manual internal tasks from simple data entry to complex cross-platform workflows ensuring your operation runs at peak efficiency around the clock.",
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
        <div className="bg-white overflow-hidden">
            {/* 1. Hero Section - Adjusted for Header Clearance */}
            <section className="pt-[140px] pb-12 relative bg-white lg:min-h-screen flex items-center overflow-hidden">
                {/* Background Text Accent - Very Faint */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 text-[22vw] font-black text-slate-50 opacity-[0.02] pointer-events-none select-none z-0">
                    NOVOTION
                </div>

                <div className="container-premium px-4 relative z-10">
                    {/* Centered Headline Section - Minimal Spacing */}
                    <div className="max-w-4xl mx-auto text-center mb-4 px-4">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-[42px] md:text-6xl lg:text-[75px] font-bold text-slate-900 leading-[1.05] tracking-tight fs61"
                        >
                            Transforming Businesses {" "}
                            <span className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-3xl bg-gradient-to-tr from-indigo-600 to-purple-500 shadow-xl shadow-indigo-200 align-middle -mt-2 group cursor-pointer hover:scale-110 transition-transform duration-500">
                                <Settings className="w-6 h-6 md:w-8 md:h-8 text-white animate-spin-slow group-hover:rotate-180 transition-transform duration-1000" />
                            </span>
                            {" "} with
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900">
                                Intelligent AI Automation
                            </span>
                        </motion.h1>
                    </div>

                    <div className="grid grid-cols-12 gap-6 items-start relative">
                        {/* Left Side: Avatar Card + AI Girl Image + Content */}
                        <div className="col-span-12 lg:col-span-4 space-y-4 relative mt-12 lg:mt-0 order-2 lg:order-1">
                            {/* Floating Social Proof Above Image */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="inline-flex items-center gap-1.5 p-2 pr-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-xl shadow-indigo-100/30"
                            >
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden relative shadow-sm">
                                            <Image src={`/assets/team/member${i}.png`} alt="Team Member" fill className="object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white relative z-10 shadow-sm">
                                        +12
                                    </div>
                                </div>
                            </motion.div>

                            {/* AI Girl Image Container - Balanced Height */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="relative w-full max-w-[350px] border-[10px] border-white shadow-2xl shadow-indigo-100 rounded-[2.5rem] rounded-tr-[6rem] overflow-hidden group"
                            >
                                <Image
                                    src="/assets/services/ai-girl.png"
                                    alt="AI Assistant"
                                    width={500}
                                    height={600}
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Bottom Accent Layer */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
                            </motion.div>

                            {/* Left Side Content Text */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="max-w-sm"
                            >
                                <p className="text-[14px] text-slate-500 font-light leading-relaxed mb-4">
                                    We transform operational bottlenecks into intelligent, self-sustaining systems. By integrating advanced AI and bespoke automation across your entire workflow, we remove the ceiling on your growth and enable your team to focus on the strategic work that matters.
                                </p>

                                <Button asChild className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white h-14 px-10 rounded-2xl font-bold transition-all shadow-2xl shadow-indigo-200 border-none group/btn text-[12px] uppercase tracking-[0.05em]">
                                    <Link href="/contact" className="flex items-center gap-2.5">
                                        Automate your workflows
                                        <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1.5 transition-transform duration-500" />
                                    </Link>
                                </Button>
                            </motion.div>

                            {/* EXTREME LEFT: High-Floating Neural Load Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -100, rotate: -8 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    y: [0, -12, 0],
                                    rotate: -8
                                }}
                                transition={{
                                    opacity: { duration: 1, delay: 1 },
                                    x: { duration: 1, delay: 1 },
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute -top-40 -left-32 p-7 rounded-[2.5rem] bg-white/70 backdrop-blur-3xl border border-white/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] w-64 z-20 hidden 2xl:block"
                            >
                                <div className="flex items-center justify-between mb-4 px-0.5">
                                    <span className="text-[10px] font-black text-indigo-600 tracking-[0.1em] uppercase">NEURAL LOAD</span>
                                    <TrendingUp className="h-4 w-4 text-indigo-600" />
                                </div>
                                <div className="h-2.5 w-full bg-indigo-50 rounded-full overflow-hidden mb-4">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '98.2%' }}
                                        transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
                                        className="h-full bg-indigo-600 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.4)]"
                                    />
                                </div>
                                <div className="text-[32px] font-bold text-slate-900 tracking-tight px-0.5">98.2%</div>
                            </motion.div>
                        </div>

                        {/* Center Side: Robot Face Image - Square Aspect for Fold */}
                        <div className="col-span-12 lg:col-span-8 relative flex justify-end lg:justify-center order-1 lg:order-2">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2 }}
                                className="relative w-full max-w-[650px] aspect-square"
                            >
                                {/* Decorative Glow Under Robot */}
                                <div className="absolute inset-0 bg-indigo-100/50 blur-[120px] rounded-full -z-10" />
                                
                                <Image
                                    src="/assets/services/robot.png"
                                    alt="Advanced AI Intelligence"
                                    fill
                                    className="object-contain t-120"
                                    priority
                                />

                                {/* FLOATING CARDS AROUND ROBOT */}
                                
                                {/* Right Card: Active Agents */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50, rotate: 3 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        y: [0, 15, 0],
                                        rotate: 3
                                    }}
                                    transition={{
                                        opacity: { delay: 1.4 },
                                        x: { delay: 1.4 },
                                        y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="absolute -top-5 -right-8 p-7 rounded-[2.5rem] bg-white/70 backdrop-blur-3xl border border-white/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] z-20 min-w-[260px] hidden sm:block"
                                >
                                    <div className="flex items-center gap-4 mb-5 px-0.5">
                                        <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                                            <Zap className="h-6 w-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] mb-0.5">ACTIVE AGENTS</div>
                                            <div className="text-[28px] font-bold text-slate-900 leading-none">1,204</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center -space-x-2.5 px-0.5">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-slate-100 overflow-hidden relative shadow-sm">
                                                <Image src={`/assets/team/member${i}.png`} alt="Agent" fill className="object-cover" />
                                            </div>
                                        ))}
                                        <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white relative z-10 border-2 border-white shadow-sm">
                                            +12
                                        </div>
                                    </div>
                                </motion.div>

                               

                                {/* Bottom Right Card: Second Neural Load */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        rotate: -2
                                    }}
                                    transition={{
                                        opacity: { delay: 2 },
                                        y: { delay: 2 }
                                    }}
                                    className="absolute bottom-30 -right-4 lg:right-10 p-7 rounded-[2.5rem] bg-white border border-white shadow-[0_45px_100px_-25px_rgba(0,0,0,0.12)] w-60 z-30 hidden sm:block"
                                >
                                    <div className="flex items-center justify-between mb-4 px-0.5">
                                        <span className="text-[10px] font-black text-indigo-600 tracking-[0.1em] uppercase">NEURAL LOAD</span>
                                        <TrendingUp className="h-4 w-4 text-indigo-600" />
                                    </div>
                                    <div className="h-2.5 w-full bg-indigo-50 rounded-full overflow-hidden mb-4">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '98.2%' }}
                                            transition={{ duration: 2, ease: "easeOut" }}
                                            className="h-full bg-indigo-600 rounded-full"
                                        />
                                    </div>
                                    <div className="text-[32px] font-bold text-slate-900 tracking-tight px-0.5">98.2%</div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Tailored Automation Pillars - Premium Light Theme */}
            <section className="py-24 bg-[#ffffff] relative overflow-hidden">
                {/* Geometric Background Pattern - Faint Modern Lattice */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                     style={{ 
                        backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                     }} 
                />
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                     style={{ 
                        backgroundImage: `linear-gradient(45deg, #4f46e5 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                     }} 
                />

                <div className="container-premium relative z-10 px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-indigo-50 rounded-full border border-indigo-100/50 shadow-sm">
                                <Users className="h-3.5 w-3.5 text-indigo-600" />
                                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">What We Do</span>
                            </div>
                            <h2 className="text-4xl md:text-[3.2rem] font-bold text-slate-900 tracking-tight leading-[1.1]">
                                Tailored Automation Pillars
                            </h2>
                        </div>
                        <p className="text-slate-500 text-[15px] font-light leading-relaxed max-w-[340px] text-right ml-auto hidden lg:block">
                            Modular AI frameworks designed to integrate seamlessly with your existing infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pillars.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="group p-10 rounded-[2.5rem] bg-[#f8faff] border border-white hover:border-indigo-100 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.08)] transition-all duration-500 relative flex flex-col h-full overflow-hidden"
                            >
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-8 border border-indigo-50 shadow-sm group-hover:scale-110 transition-all duration-500">
                                        <div className="text-indigo-600 transition-colors duration-500">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h4 className="text-[20px] font-bold text-slate-900 mb-3.5 tracking-tight group-hover:text-indigo-600 transition-colors duration-500">
                                        {item.title}
                                    </h4>
                                    <div className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.1em] mb-5 opacity-90 leading-relaxed">
                                        {item.tagline}
                                    </div>
                                    <p className="text-slate-500 text-[14px] font-light leading-relaxed mb-10 overflow-hidden line-clamp-3">
                                        {item.desc}
                                    </p>
                                    <div className="mt-auto">
                                        <Link
                                            href={`/services/ai-automation/${item.slug}`}
                                            className="text-[11px] font-bold text-indigo-600 flex items-center gap-2 uppercase tracking-[0.1em] transition-all hover:gap-3"
                                        >
                                            Learn More <ArrowRight className="h-4 w-4" />
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
