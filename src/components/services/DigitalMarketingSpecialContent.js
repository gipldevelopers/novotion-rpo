"use client";

import { motion } from "framer-motion";
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
    Check
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MarketingIcon = ({ type }) => {
    switch (type) {
        case "social-media-management": return <Share2 className="w-8 h-8" />;
        case "seo-content-marketing": return <Search className="w-8 h-8" />;
        case "email-marketing": return <Mail className="w-8 h-8" />;
        case "paid-ads-google-meta": return <MousePointer2 className="w-8 h-8" />;
        case "branding-design": return <Palette className="w-8 h-8" />;
        default: return <TrendingUp className="w-8 h-8" />;
    }
};

export function DigitalMarketingSpecialContent({ service }) {
    if (!service) return null;

    return (
        <div className="bg-white">
            {/* 1. Centered Hero Section - With Active Animated Technology Background */}
            <section className="pt-32 pb-20 relative overflow-hidden text-center border-b border-slate-100">
                {/* Amazing Active Animated Background */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    {/* Animated Tech Grid */}
                    <div 
                        className="absolute inset-0 opacity-[0.03]" 
                        style={{ 
                            backgroundImage: `linear-gradient(to right, #f26633 1px, transparent 1px), linear-gradient(to bottom, #f26633 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }} 
                    />
                    
                    {/* Moving Liquid Gradient Orbs (Faster & More Active) */}
                    <motion.div 
                        animate={{ 
                            x: [-100, 100], 
                            y: [-50, 50],
                            scale: [1, 1.5, 1] 
                        }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                        className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-secondary/20 blur-[130px] rounded-full"
                    />
                    <motion.div 
                        animate={{ 
                            x: [100, -100], 
                            y: [50, -50],
                            scale: [1, 1.3, 1] 
                        }}
                        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "linear", delay: 2 }}
                        className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] bg-secondary/15 blur-[150px] rounded-full"
                    />
                    
                    {/* Glowing Horizon Line */}
                    <motion.div 
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent"
                    />
                </div>

                <div className="container-premium relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                            <Sparkles className="h-4 w-4" />
                            Strategic Growth Engine
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-slate-900 tracking-tighter leading-[1] mb-8">
                            Marketing That Gets You <span className="text-secondary italic">Chosen</span>, Not Just Seen.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                            {service.description}
                        </p>
                        
                        <Button asChild className="bg-secondary hover:bg-slate-900 text-white h-14 px-10 rounded-xl font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-secondary/10 border-none text-[11px] group/btn">
                            <Link href="/contact" className="flex items-center gap-3">
                                Discuss Your Strategy
                                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Premium Graphic Below Hero */}
                    <motion.div 
                        initial={{ scale: 0.95, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="mt-20 relative max-w-5xl mx-auto px-4"
                    >
                        <div className="absolute inset-0 bg-secondary/10 rounded-[4rem] blur-[120px] scale-90 pointer-events-none" />
                        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border border-slate-200/50 bg-white aspect-[16/9]">
                            <Image 
                                src="/assets/marketing-dashboard.png"
                                alt="Digital Marketing Dashboard"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. What We Do - Dark Grid Section */}
            <section className="py-32 bg-slate-900 text-white relative">
                <div className="container-premium relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <div className="text-[10px] font-black text-secondary uppercase tracking-[0.5em] mb-4">What We Do</div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-white mb-6">
                            Tailored Service <span className="text-secondary italic">Pillars</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.whatYouGet?.map((item, i) => {
                            const itemSlug = item.slug || item.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `pillar-${i+1}`;
                            return (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link 
                                        href={`/services/${service.slug}/${itemSlug}`}
                                        className="flex flex-col h-full bg-white/5 border border-white/10 rounded-[2.5rem] p-10 group hover:bg-secondary hover:border-secondary transition-all duration-500 overflow-hidden relative cursor-pointer"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-secondary mb-8 group-hover:bg-white group-hover:text-secondary transition-all">
                                            <MarketingIcon type={itemSlug} />
                                        </div>

                                        <h4 className="text-xl font-black mb-4 tracking-tighter leading-none group-hover:text-white transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-secondary text-[11px] font-black mb-4 uppercase tracking-widest group-hover:text-white/80 transition-colors">
                                            {item.head}
                                        </p>
                                        <p className="text-slate-400 text-sm font-light leading-relaxed mb-10 group-hover:text-white/90 transition-colors">
                                            {item.description}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-secondary group-hover:text-white transition-colors">
                                            <span>Explore Detailed Strategy</span>
                                            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 3. Why Us - Light Content Section */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="container-premium relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <div className="text-[10px] font-black text-secondary uppercase tracking-[0.5em] mb-4">The Competitive Edge</div>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-8">
                                Why Our Marketing Approach Outperforms <span className="text-secondary">the 99%</span>
                            </h2>
                            <Button asChild className="bg-slate-900 hover:bg-secondary text-white h-14 px-10 rounded-xl font-black uppercase tracking-[0.2em] transition-all border-none text-[11px] group/btn">
                                <Link href="/contact" className="flex items-center gap-3">
                                    Discuss Your Strategy
                                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>

                        <div className="lg:w-1/2 grid gap-6">
                            {service.closing?.points?.map((point, i) => {
                                const [title, desc] = point.split(':');
                                return (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-8 rounded-[2rem] bg-white border border-slate-200 group hover:border-secondary transition-all shadow-sm"
                                    >
                                        <div className="flex gap-6 items-start">
                                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                                                <Zap className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight uppercase leading-none">{title}</h4>
                                                <p className="text-slate-500 text-sm font-light leading-relaxed">{desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Contact Redirection / Final CTA */}
            <section className="py-20 bg-white">
                <div className="container-premium text-center">
                    <div className="p-16 rounded-[4rem] bg-secondary relative overflow-hidden text-white shadow-2xl shadow-secondary/20">
                        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
                            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8">
                                <Mail className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter leading-tight">
                                Ready to scale your brand to its full potential?
                            </h2>
                            <Button asChild className="bg-white text-secondary hover:bg-slate-900 hover:text-white h-16 px-12 rounded-2xl font-black uppercase tracking-[0.2em] transition-all border-none text-[12px] group/btn">
                                <Link href="/contact" className="flex items-center gap-3">
                                    Send An Enquiry
                                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
