"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Target, Sparkles, Bot } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ServiceSubDetailClient({ service, subService, slug }) {
    if (!service || !subService) return null;
    
    const isMarketing = service.slug === 'digital-marketing';
    const isAI = service.slug === 'ai-automation';
    const isFinance = service.slug === 'accounting-finance';

    if (isAI) {
        const titleColors = ['text-amber-500', 'text-sky-500', 'text-purple-500'];
        
        return (
            <main className="bg-white min-h-screen pt-32 pb-0">
                {/* 1. Hero Section - Light & Sophisticated */}
                <div className="bg-[#f4f7fa] relative overflow-hidden">
                    <section className="relative pt-16 pb-12">
                        <div className="container-premium relative z-10 px-4">
                            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                                <div className="lg:w-3/5">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#e0ebf7] text-[#2563eb] text-[11px] font-bold uppercase tracking-widest mb-6">
                                        <Bot className="h-4 w-4" /> Strategic Pillar
                                    </div>
                                    <div className="text-slate-400 text-[13px] font-bold uppercase tracking-widest mb-3">How We Work</div>
                                    <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-slate-900 tracking-tight leading-tight">
                                        AI & Automation Services
                                    </h1>
                                </div>
                                <div className="lg:w-1/3 xl:w-2/5">
                                    <p className="text-slate-500 text-[15px] leading-relaxed font-normal max-w-lg">
                                        We build intelligent automation and AI systems that free your team to focus on higher value tasks, not data entry or busywork. The result is removing the ceiling on what your people can achieve.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. Service Cards Grid */}
                    <section className="pb-24 pt-8">
                        <div className="container-premium relative z-10 px-4">
                            <div className="grid md:grid-cols-2 gap-8">
                                {subService.howWeWork.map((step, i) => {
                                    const hasColon = step.includes(':');
                                    const title = hasColon ? step.split(':')[0] : `Phase ${i + 1}`;
                                    const desc = hasColon ? step.split(':').slice(1).join(':').trim() : step;
                                    const colorClass = titleColors[i % titleColors.length];
                                    
                                    return (
                                        <motion.div 
                                            key={i} 
                                            initial={{ opacity: 0, y: 20 }} 
                                            whileInView={{ opacity: 1, y: 0 }} 
                                            viewport={{ once: true }} 
                                            transition={{ delay: i * 0.1 }} 
                                            className="p-10 rounded-2xl bg-white border border-slate-50 shadow-sm hover:shadow-md transition-all duration-500 group"
                                        >
                                            <h3 className={`text-[20px] font-bold mb-4 tracking-tight ${colorClass}`}>
                                                {title}
                                            </h3>
                                            <p className="text-slate-500 text-[15px] leading-relaxed font-normal">
                                                {desc}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>

                {/* 3. Final CTA section - Brand Potential */}
                <section className="relative py-24 bg-white overflow-hidden text-center">
                    <div className="container-premium relative z-10 max-w-4xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-[52px] font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                                Ready to scale your brand to its full potential?
                            </h2>
                            <p className="text-slate-400 text-sm md:text-base mb-12 font-normal max-w-2xl mx-auto leading-relaxed">
                                Stop settling for average results. Join the elite group of brands that leverage Noltven to own their market.
                            </p>
                            <Button asChild className="bg-[#1e4ba0] hover:bg-slate-900 text-white h-16 px-12 rounded-xl font-bold transition-all border-none shadow-xl shadow-blue-900/10">
                                <Link href="/contact" className="flex items-center gap-3">
                                    Claim Your Strategy Session
                                </Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Decorative minimalist dots */}
                    <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60" />
                    <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-red-400 rounded-full opacity-60" />
                    <div className="absolute bottom-12 left-1/2 w-2 h-2 bg-green-400 rounded-full opacity-60" />
                </section>
            </main>
        );
    }

    if (!isMarketing) {
        // TRULY OLD/STANDARD UI FOR OTHER SERVICES
        return (
            <main className="bg-white min-h-screen pt-24 pb-0">
                {/* Hero Section */}
                <section className="relative py-16 md:py-20 overflow-hidden bg-slate-50 border-b border-slate-100">
                    <div className="container-premium relative z-10">
                        <Link href={`/services/${slug}`} className="inline-flex items-center gap-2 text-slate-500 hover:text-secondary mb-8 transition-colors text-[11px] font-bold uppercase tracking-widest">
                            <ArrowLeft className="h-4 w-4" /> Return to {service.shortTitle}
                        </Link>
                        <div className="max-w-4xl">
                            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                                {subService.title}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-500 font-normal leading-relaxed max-w-3xl">
                                {subService.head || subService.description.split('\n')[0]}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container-premium">
                        <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start">
                            {/* Left Column Content */}
                            <div className="lg:col-span-8 space-y-16">
                                {/* Description */}
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Service Overview</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed font-light whitespace-pre-line border-l-4 border-secondary/20 pl-8 italic">
                                        {subService.description}
                                    </p>
                                </div>

                                {/* How We Work */}
                                {subService.howWeWork && (
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">How We Work</h2>
                                        <div className="space-y-4">
                                            {subService.howWeWork.map((step, i) => (
                                                <div key={i} className="flex gap-4 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                                    <div className="mt-1 w-6 h-6 flex-shrink-0 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-[10px]">
                                                        {i + 1}
                                                    </div>
                                                    <span className="text-slate-700 font-medium">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Benefits */}
                                {subService.benefits && !isFinance && (
                                    <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden">
                                        <h2 className="text-2xl font-bold mb-8 tracking-tight flex items-center gap-3">
                                            <Sparkles className="h-6 w-6 text-secondary" />
                                            Key Benefits
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-y-6 gap-x-10">
                                            {subService.benefits.map((benefit, i) => (
                                                <div key={i} className="flex gap-4 items-start">
                                                    <div className="mt-1.5 w-4 h-4 flex-shrink-0 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                                    </div>
                                                    <span className="text-sm text-slate-300 font-light leading-snug">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Services Include (Grid of Categories) */}
                                {subService.servicesInclude && !isFinance && (
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-10 tracking-tight">Service Specifications</h2>
                                        <div className={`grid gap-6 ${
                                            Object.keys(subService.servicesInclude).length === 1 
                                            ? 'grid-cols-1' 
                                            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                                        }`}>
                                            {Object.entries(subService.servicesInclude).map(([category, items], i) => (
                                                <div key={i} className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                                    <h3 className="text-base font-bold text-secondary mb-6 tracking-wide uppercase">{category}</h3>
                                                    <ul className="space-y-3">
                                                        {items.map((item, j) => (
                                                            <li key={j} className="flex gap-3 items-start group">
                                                                <ArrowRight className="h-3 w-3 mt-1 text-slate-300 group-hover:text-secondary transition-colors" />
                                                                <span className="text-[13px] text-slate-600 font-normal leading-tight">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Boundary / Bottom Line */}
                                {(subService.boundary || subService.bottomLine) && !isFinance && (
                                    <div className="bg-slate-50 border border-slate-200 p-8 md:p-12 rounded-[2.5rem] text-center italic space-y-6">
                                        {subService.boundary && (
                                            <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                                                {subService.boundary.includes(':') && subService.boundary.indexOf(':') < 30 ? (
                                                    <>
                                                        <span className="font-black text-slate-900">{subService.boundary.substring(0, subService.boundary.indexOf(':') + 1)}</span>
                                                        {subService.boundary.substring(subService.boundary.indexOf(':') + 1)}
                                                    </>
                                                ) : subService.boundary}
                                            </p>
                                        )}
                                        {subService.bottomLine && (
                                            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
                                                "{subService.bottomLine}"
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Right Column Sidebar */}
                            <div className="lg:col-span-4 sticky top-32">
                                <div className="p-8 pb-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl shadow-slate-200/50">
                                    <h3 className="text-lg font-bold text-slate-900 mb-8 tracking-tight uppercase">Inquiry Matrix</h3>
                                    <p className="text-slate-500 text-sm mb-10 font-normal leading-relaxed">
                                        Our strategy for {subService.title} is built on data and execution. Contact us to discuss how we can integrate this into your current operation.
                                    </p>
                                    <Button asChild className="w-full bg-secondary hover:bg-slate-900 text-white rounded-xl h-14 shadow-xl shadow-secondary/20 transition-all border-none">
                                        <Link href="/contact" className="flex items-center justify-center gap-3 text-[11px] font-bold tracking-widest uppercase">
                                            Inquire Now <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <div className="mt-10 pt-8 border-t border-slate-100">
                                        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2">Service ID</p>
                                        <p className="text-[14px] font-bold text-slate-500">{subService.slug || 'SPEC-001'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    // NEW UI FOR MARKETING (remaining services)
    
    // Derived columns for masonry layout from howWeWork
    const leftColumnItems = [];
    const rightColumnItems = [];
    
    const FALLBACK_IMAGES = [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop", // SEO
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop", // Strategy
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop", // Writing
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop", // Tech
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop", // Strategy
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop", // Writing
    ];

    const ICON_COLORS = [
        "bg-[#10b981]", // green
        "bg-[#f43f5e]", // pink
        "bg-[#f97316]", // orange
        "bg-[#10b981]", // green
        "bg-[#f43f5e]", // pink
        "bg-[#f97316]" // orange
    ];

    if (subService.howWeWork) {
        // Always use up to 6 items to keep the 3x2 masonry grid perfectly balanced
        const displayItems = subService.howWeWork.slice(0, 6);

        displayItems.forEach((step, i) => {
            const hasColon = step.includes(':');
            const title = hasColon ? step.split(':')[0] : `Phase ${i + 1}`;
            const desc = hasColon ? step.split(':').slice(1).join(':').trim() : step;
            
            const imageStr = FALLBACK_IMAGES[i % FALLBACK_IMAGES.length];
            const iconBg = ICON_COLORS[i % ICON_COLORS.length];

            const itemData = { title, desc, imageStr, iconBg, originalIndex: i };
            
            const cycle = Math.floor(i / 3) % 2; 
            const posInCycle = i % 3;
            // Precise column positioning to match the screenshot visually
            if (cycle === 0) {
                if (posInCycle === 0) leftColumnItems.push({...itemData, style: 'landscape'});
                if (posInCycle === 1) leftColumnItems.push({...itemData, style: 'square'});
                if (posInCycle === 2) rightColumnItems.push({...itemData, style: 'portrait'});
            } else {
                if (posInCycle === 0) leftColumnItems.push({...itemData, style: 'portrait'});
                if (posInCycle === 1) rightColumnItems.push({...itemData, style: 'landscape'});
                if (posInCycle === 2) rightColumnItems.push({...itemData, style: 'square'});
            }
        });
    }

    const renderCard = (item, idx) => {
        // Explicitly balancing column heights.
        // Landscape: 380px. Square: 380px. gap: 32px
        // Left Column Cycle 0 total: 380 + 32 + 380 = 792px.
        // Right Column Cycle 0 element must be 792px to match exactly!
        
        const isPortrait = item.style === 'portrait';
        const hClass = isPortrait ? 'h-[350px] sm:h-[450px] lg:h-[632px]' : 'h-[250px] sm:h-[300px] lg:h-[300px]';
        
        return (
            <motion.div 
                key={`${item.originalIndex}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative w-full ${hClass} rounded-[2rem] overflow-hidden group shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.15)] transition-all duration-500 bg-slate-100`}
            >
                <Image src={item.imageStr} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none opacity-50 transition-opacity group-hover:opacity-70" />
                
                {/* Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 w-auto lg:w-11/12 xl:w-10/12 bg-white rounded-[1.5rem] p-5 lg:p-6 flex flex-col sm:flex-row gap-4 lg:gap-5 items-start">
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full flex items-center justify-center text-white ${item.iconBg}`}>
                        <Target className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div>
                        <h3 className="text-[15px] lg:text-[17px] font-black text-slate-900 mb-1 lg:mb-2 tracking-tight leading-tight">{item.title}</h3>
                        <p className="text-[12px] lg:text-[13px] text-slate-500 font-normal leading-relaxed opacity-90 line-clamp-3 sm:line-clamp-none">{item.desc}</p>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <main className="bg-[#f8fbfd] min-h-screen pt-20 pb-0">
            {/* HERO SECTION MATCHING DESIGN */}
            <section className="relative py-16 overflow-hidden text-center bg-[#f8fbfd]">
                <div className="container-premium relative z-10">
                    <Link href={`/services/${slug}`} className="inline-flex items-center gap-2 text-slate-400 hover:text-[#1a4fba] mb-12 transition-colors font-black uppercase tracking-[0.3em] text-[10px] mx-auto">
                        <ArrowLeft className="h-4 w-4" /> Return to {service.shortTitle} Overview
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 text-[#1a4fba] text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-blue-100 shadow-sm">
                            <Sparkles className="h-4 w-4" /> Strategic Pillar
                        </div>
                        
                        <h1 className="text-[38px] md:text-[52px] lg:text-[64px] font-black text-[#0f172a] tracking-tight leading-tight mb-8">
                             {subService.title.split(' ').slice(0, -1).join(' ')} <span className="relative inline-block text-[#1a4fba]">
                                {subService.title.split(' ').slice(-1)}
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#1a4fba]/40" viewBox="0 0 200 20" preserveAspectRatio="none">
                                    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} d="M5,15 Q100,25 195,15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        
                        {subService.head && (
                            <p className="text-[16px] md:text-[18px] lg:text-[22px] text-slate-900 font-extrabold leading-tight mb-6 mx-auto uppercase tracking-tighter">
                                {subService.head}
                            </p>
                        )}
                        
                        <p className="text-[15px] md:text-[18px] text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto whitespace-normal opacity-90">
                            {subService.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* MASONRY IMAGE GRID */}
            {subService.howWeWork && (
                <section className="py-12 bg-[#f8fbfd] relative overflow-hidden">
                    <div className="container-premium !max-w-[1550px] relative z-10 px-4 xl:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                            {/* Left Column */}
                            <div className="flex flex-col gap-6 lg:gap-8">
                                {leftColumnItems.map((item, idx) => renderCard(item, idx))}
                            </div>
                            
                            {/* Right Column */}
                            <div className="flex flex-col gap-6 lg:gap-8">
                                {rightColumnItems.map((item, idx) => renderCard(item, idx))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* FINAL CTA ENTIRE MATCH */}
            <section className="relative py-16 lg:py-24 bg-[#f8fbfd] overflow-hidden text-center flex flex-col items-center">
                {/* Floating Dots Container */}
                <div className="absolute inset-0 pointer-events-none w-full max-w-[1000px] mx-auto hidden md:block z-0">
                     <div className="absolute right-[20%] top-[30%] w-3 h-3 bg-[#22c55e] rounded-full" />
                     <div className="absolute left-[20%] top-[60%] w-1.5 h-1.5 bg-[#3b82f6] rounded-full" />
                     <div className="absolute left-[52%] bottom-[15%] w-2 h-2 bg-[#ef4444] rounded-full" />
                </div>

                <div className="container-premium relative z-10 max-w-5xl mx-auto px-4 mt-8 w-full flex justify-center flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-[36px] md:text-[42px] font-black text-[#111827] mb-4 tracking-tight leading-[1.1]">
                            Ready to scale your brand to its full potential?
                        </h2>
                        <p className="text-slate-500 text-[15px] mb-8 font-normal leading-relaxed max-w-[800px] mx-auto whitespace-normal">
                            Stop settling for average results. Join the elite group of brands that leverage Luminescent to own their market.
                        </p>
                        <Button asChild className="bg-[#1a4fba] text-white hover:bg-[#153e96] h-14 px-10 rounded-xl font-bold uppercase tracking-wider transition-all border-none text-[13px] shadow-[0_15px_30px_-5px_rgba(26,79,186,0.3)] shrink-0 group">
                            <Link href="/contact" className="flex items-center gap-3">
                                Claim Your Strategy Session
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
