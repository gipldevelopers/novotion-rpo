"use client";

import { motion, useAnimationControls } from "framer-motion";
import { 
    ArrowRight, 
    Sparkles, 
    Zap, 
    Share2, 
    Search, 
    Mail, 
    MousePointer2,
    Palette,
    TrendingUp,
    Check,
    Globe,
    Target,
    BarChart3
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

const MarketingIcon = ({ type }) => {
    switch (type) {
        case "social-media-management": return <Share2 className="w-6 h-6" />;
        case "seo-content-marketing": return <Search className="w-6 h-6" />;
        case "email-marketing": return <Mail className="w-6 h-6" />;
        case "paid-ads-google-meta": return <MousePointer2 className="w-6 h-6" />;
        case "branding-design": return <Palette className="w-6 h-6" />;
        default: return <TrendingUp className="w-6 h-6" />;
    }
};

const pillarIcons = {
    '01': <Target className="w-6 h-6" />,
    '02': <Globe className="w-6 h-6" />,
    '03': <BarChart3 className="w-6 h-6" />
};

export function DigitalMarketingSpecialContent({ service }) {
    const [isPaused, setIsPaused] = useState(false);
    
    if (!service) return null;

    return (
        <div className="bg-white">
            {/* 1. Hero Section - Light & Clean */}
            <section className="pt-32 pb-24 relative overflow-hidden text-center bg-white">
                {/* Background Decoration Circles - Atmospheric Glow Group */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.15, 0.25, 0.15],
                            x: [0, 40, 0],
                            y: [0, -20, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-[1200px] h-[1000px] bg-blue-50/60 rounded-[100%] blur-[120px] -translate-y-[20%]"
                    />
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                            x: [0, -40, 0],
                            y: [0, 20, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute w-[1000px] h-[900px] bg-secondary/10 rounded-[100%] blur-[100px] translate-x-[10%] translate-y-[10%]"
                    />
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.15, 1],
                            opacity: [0.08, 0.15, 0.08]
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute w-[1400px] h-[1100px] bg-indigo-50/40 rounded-[100%] blur-[140px] -translate-x-[5%] -translate-y-[5%]"
                    />
                </div>

                <div className="container-premium relative z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-8">
                            Marketing That Gets <br className="hidden md:block" />
                            You <span className="relative inline-block text-secondary">
                                Chosen,
                                <svg className="absolute -bottom-4 left-0 w-full h-4 text-secondary/60" viewBox="0 0 200 20" preserveAspectRatio="none">
                                    <motion.path 
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        d="M5,15 Q100,25 195,15" 
                                        stroke="currentColor" 
                                        strokeWidth="6" 
                                        fill="none" 
                                        strokeLinecap="round" 
                                    />
                                </svg>
                            </span> Not Just Seen.
                        </h1>
                        <p className="text-base md:text-lg text-slate-500 font-normal leading-relaxed max-w-4xl mx-auto mb-12">
                            We build and manage your full marketing presence so your brand earns trust before the first conversation even starts. 
                            Our strategy-led, 2026-ready approach turns simple curiosity into consistent conversion.
                        </p>
                        
                        <Button asChild className="bg-secondary hover:bg-slate-900 text-white h-14 px-10 rounded-xl font-bold uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 border-none text-[13px] group/btn">
                            <Link href="/contact" className="flex items-center gap-3">
                                DISCUSS YOUR STRATEGY
                                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Dashboard Graphic */}
                    <motion.div 
                        initial={{ scale: 0.95, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="relative max-w-5xl mx-auto"
                    >
                        <div className="absolute inset-0 bg-secondary/10 rounded-[4rem] blur-[120px] scale-90 pointer-events-none" />
                        <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-200/50 bg-white aspect-[16/10]">
                            <Image 
                                src="/assets/Marketing Analytics Dashboard.png"
                                alt="Marketing Analytics Dashboard"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. What We Do Section - Light Grid */}
            <section className="py-24 bg-[#f4faff] relative overflow-hidden">
                <div className="container-premium relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/10 text-secondary text-[11px] font-bold uppercase tracking-[0.3em] mb-8">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            >
                                <Globe className="h-4 w-4" />
                            </motion.div>
                            what we do
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-4">
                            Tailored Service Pillars
                        </h2>
                    </div>

                    <div className="relative mt-12 overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pause-on-hover">
                        <div className="animate-marquee flex gap-4 w-fit">
                            {/* Duplicate exactly once for marquee -50% logic */}
                            {[...Array(2)].map((_, loopIdx) => (
                                service.whatYouGet?.map((item, i) => {
                                    const itemSlug = item.slug || item.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `pillar-${i + 1}`;
                                    const colors = [
                                        "bg-[#3b82f6]", "bg-[#8b5cf6]", "bg-[#f59e0b]", "bg-[#ec4899]", "bg-[#06b6d4]"
                                    ];
                                    return (
                                        <div 
                                            key={`${loopIdx}-${i}`} 
                                            className="w-[calc(85vw-1rem)] sm:w-[calc(45vw-1rem)] md:w-[calc(30vw-1rem)] lg:w-[calc(25vw-1rem)] flex-shrink-0 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.15)] transition-all duration-500 group relative z-10"
                                        >
                                            <div className={`w-12 h-12 rounded-2xl ${colors[i % colors.length]} flex items-center justify-center text-white mb-8 shadow-lg shadow-black/5 group-hover:scale-110 transition-transform`}>
                                                <MarketingIcon type={itemSlug} />
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 tracking-tighter line-clamp-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-500 text-xs md:text-sm font-normal leading-relaxed mb-8 min-h-[60px] opacity-80 line-clamp-3">
                                                {item.description}
                                            </p>
                                            <Link 
                                                href={`/services/${service.slug}/${itemSlug}`}
                                                className="text-[11px] font-black text-slate-400 group-hover:text-secondary flex items-center gap-2 uppercase tracking-[0.2em] transition-all"
                                            >
                                                Explore Framework <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    );
                                })
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Why Us Split Section */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="container-premium relative z-10 px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-8 max-w-lg">
                                Why Our Marketing Approach <span className="relative inline-block text-secondary">
                                    Outperforms
                                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/60" viewBox="0 0 200 20" preserveAspectRatio="none">
                                        <motion.path 
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            d="M5,15 Q100,25 195,15" 
                                            stroke="currentColor" 
                                            strokeWidth="6" 
                                            fill="none" 
                                            strokeLinecap="round" 
                                        />
                                    </svg>
                                </span> the 99%
                            </h2>
                            <p className="text-lg text-slate-500 font-light leading-relaxed mb-10 max-w-md">
                                Hiring should be easy, cost-effective, and flexible. Noltven is synonymous with it all.
                            </p>
                            <Button asChild className="bg-secondary hover:bg-slate-900 text-white h-14 px-8 rounded-xl font-bold uppercase tracking-widest transition-all border-none text-[12px] group/btn">
                                <Link href="/contact" className="flex items-center gap-3">
                                    Discuss Your Strategy
                                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl z-10">
                                <Image 
                                    src="/assets/hero/banner-2 1.png" 
                                    alt="Creative Growth Team" 
                                    width={600} 
                                    height={400} 
                                    className="object-cover"
                                />
                            </div>
                            
                            {/* Floating Stats */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 border border-slate-100 flex items-center gap-3"
                            >
                                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-white text-xs font-bold leading-none">$</div>
                                <div>
                                    <p className="text-sm font-black text-slate-900 leading-tight">Over 1.2 Million</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase leading-tight">Revenue</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="absolute top-1/2 -left-12 bg-white p-3 rounded-xl shadow-lg z-20 border border-slate-100 flex items-center gap-2"
                            >
                                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white"><Check className="w-3 h-3" /></div>
                                <div>
                                    <p className="text-[11px] font-black text-slate-900 leading-tight">20K+</p>
                                    <p className="text-[8px] font-bold text-slate-400 uppercase leading-tight">Secure Jobs</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-8 -right-8 bg-white p-5 rounded-3xl shadow-2xl z-20 border border-slate-100"
                            >
                                <p className="text-[11px] font-black text-slate-900 mb-2">10K+ <span className="text-slate-400 font-medium">Real Customers</span></p>
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden relative">
                                            <Image src={`/assets/team/member${i}.png`} alt="Customer" fill className="object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-500 flex items-center justify-center text-white text-[9px] font-bold">+</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Three-Column Pillars */}
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {[
                            { id: '01', title: 'Strategy before execution', desc: 'Every channel and campaign starts with a defined commercial objective.' },
                            { id: '02', title: '2026-ready methods', desc: 'We use up-to-date SEO built for E-E-A-T and AI-powered search, not outdated tactics.' },
                            { id: '03', title: 'Brand as a growth asset', desc: 'We treat your brand as a live commercial asset, doing persuasion work even before your team steps in.' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative p-10 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
                            >
                                <span className="absolute top-6 right-8 text-5xl font-black text-blue-100 group-hover:text-blue-200 transition-colors pointer-events-none line-clamp-1">{item.id}</span>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                                        {pillarIcons[item.id]}
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight leading-none">{item.title}</h4>
                                    <p className="text-slate-500 text-sm font-normal leading-relaxed mb-10">{item.desc}</p>
                                    <Link href="#" className="text-[12px] font-bold text-slate-400 group-hover:text-secondary flex items-center gap-1.5 uppercase tracking-widest transition-colors">
                                        Learn More <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Final CTA */}
            <section className="relative py-24 md:py-28 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] overflow-hidden text-center text-white">
                {/* Background Polygons */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
                    <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-white/10 skew-x-[45deg] translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-[60%] h-[100%] bg-white/10 -skew-x-[45deg] -translate-x-1/3" />
                </div>
                
                <div className="container-premium relative z-10 max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter leading-tight">
                            Ready to scale your brand <br className="hidden md:block" /> to its full potential?
                        </h2>
                        <p className="text-white/80 text-base md:text-lg mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                            Stop settling for average results. Join the elite group of brands <br className="hidden md:block" /> that leverage Noltven to own their market.
                        </p>
                        <Button asChild className="bg-white text-[#2563eb] hover:bg-slate-900 hover:text-white h-16 px-12 rounded-2xl font-black uppercase tracking-[0.2em] transition-all border-none text-[13px] group/btn shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                            <Link href="/contact" className="flex items-center gap-3">
                                Claim Your Strategy Session
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
