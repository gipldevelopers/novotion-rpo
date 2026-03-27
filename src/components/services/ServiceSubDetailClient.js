"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Target, Sparkles, Bot } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ServiceSubDetailClient({ service, subService, slug }) {
    if (!service || !subService) return null;
    
    const isMarketing = service.slug === 'digital-marketing';
    const isAI = service.slug === 'ai-automation';
    const isFinance = service.slug === 'accounting-finance';

    if (isAI) {
        return (
            <main className="bg-white min-h-screen pt-32 pb-0">
                {/* AI SPECIAL CONTENT (remains same) */}
                <div className="bg-gradient-to-bl from-blue-50/40 via-white/50 to-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px] -translate-y-[10%] translate-x-[20%]" />
                    <section className="relative pb-20 pt-10">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="container-premium relative z-10">
                            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                                <div className="lg:w-3/5">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-6"><Bot className="h-4 w-4" />Strategic Pillar</div>
                                    <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-slate-900 tracking-tighter leading-[1.05]">
                                        {subService.title.split(' ').slice(0, -1).join(' ')} <span className="text-secondary">{subService.title.split(' ').slice(-1)}</span>
                                    </h1>
                                </div>
                                <div className="lg:w-1/3 xl:w-1/4">
                                    <div className="text-slate-500 text-[13px] leading-relaxed font-normal">
                                        {subService.head && <div className="text-slate-900 font-bold mb-2">{subService.head}</div>}
                                        <p className="whitespace-pre-line opacity-90">{subService.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </section>
                    <section className="pb-32 pt-16">
                        <div className="container-premium relative z-10">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {subService.howWeWork.map((step, i) => {
                                    const hasColon = step.includes(':');
                                    const title = hasColon ? step.split(':')[0] : `Phase ${i + 1}`;
                                    const desc = hasColon ? step.split(':').slice(1).join(':').trim() : step;
                                    return (
                                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-10 rounded-[2.5rem] bg-gradient-to-br from-white/95 via-white/80 to-[#f0f7ff]/40 border border-slate-100 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.15)] transition-all duration-500 group relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 via-transparent to-transparent pointer-events-none z-10" />
                                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary mb-8 border border-blue-50 shadow-sm transition-transform group-hover:scale-110 relative z-20"><Target className="h-5 w-5" /></div>
                                            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 tracking-tight relative z-20">{title}</h3>
                                            <p className="text-slate-500 text-[13px] leading-relaxed font-normal relative z-20">{desc}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>
                {/* FINAL CTA - HIGH FIDELITY VERSION */}
                <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] overflow-hidden text-center text-white">
                    {/* Background Polygons for depth */}
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
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tighter leading-tight">
                                Ready to scale your brand <br className="hidden md:block" /> to its full potential?
                            </h2>
                            <p className="text-white/80 text-sm md:text-base mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                                Stop settling for average results. Join the elite group of brands <br className="hidden md:block" /> that leverage Noltven to own their market.
                            </p>
                            <Button asChild className="bg-white text-[#2563eb] hover:bg-slate-900 hover:text-white h-16 px-12 rounded-2xl font-black uppercase tracking-[0.2em] transition-all border-none text-[12px] group/btn shadow-[0_20px_40px_rgba(0,0,0,0.1)] translate-y-0 hover:-translate-y-1 transition-transform duration-300">
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
    return (
        <main className="bg-white min-h-screen pt-24 pb-0">
            {/* HERO SECTION */}
            <section className="relative py-24 overflow-hidden text-center bg-white border-b border-slate-50">
                {/* Background Decoration Circles - Atmospheric Glow Group */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
                    <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute w-[1200px] h-[1000px] bg-blue-50/60 rounded-[100%] blur-[120px] -translate-y-[20%]" />
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute w-[1000px] h-[900px] bg-secondary/10 rounded-[100%] blur-[100px] translate-x-[10%] translate-y-[10%]" />
                </div>

                <div className="container-premium relative z-10">
                    <Link href={`/services/${slug}`} className="inline-flex items-center gap-2 text-slate-400 hover:text-secondary mb-12 transition-colors font-black uppercase tracking-[0.3em] text-[10px]">
                        <ArrowLeft className="h-4 w-4" /> Return to {service.shortTitle} Overview
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                            <Sparkles className="h-4 w-4" /> Strategic Pillar
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
                            {subService.title.split(' ').slice(0, -1).join(' ')} <span className="relative inline-block text-secondary">
                                {subService.title.split(' ').slice(-1)}
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/60" viewBox="0 0 200 20" preserveAspectRatio="none">
                                    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} d="M5,15 Q100,25 195,15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                        {subService.head && (
                            <p className="text-xl md:text-2xl text-slate-900 font-bold leading-tight mb-4 mx-auto max-w-2xl uppercase tracking-tighter">
                                {subService.head}
                            </p>
                        )}
                        <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto whitespace-pre-line opacity-90">
                            {subService.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* HOW WE WORK - GRID LAYOUT */}
            {subService.howWeWork && (
                <section className="py-24 bg-[#f4faff] relative overflow-hidden">
                    <div className="container-premium relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-20">
                            <div className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">How We Work</div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 leading-tight">
                                Delivery in {subService.howWeWork.length} <span className="relative inline-block text-secondary">Effortless</span> Steps
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {subService.howWeWork.map((step, i) => {
                                const hasColon = step.includes(':');
                                const title = hasColon ? step.split(':')[0] : `Phase ${i + 1}`;
                                const desc = hasColon ? step.split(':').slice(1).join(':').trim() : step;
                                return (
                                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.15)] transition-all duration-500 group relative overflow-hidden">
                                        <div className="absolute top-8 right-10 text-4xl font-black text-secondary/5 group-hover:text-secondary/10 transition-colors">0{i + 1}</div>
                                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500"><Target className="h-6 w-6" /></div>
                                        <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 tracking-tighter">{title}</h3>
                                        <p className="text-slate-500 text-sm font-normal leading-relaxed opacity-80">{desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* FINAL CTA - HIGH FIDELITY VERSION */}
            <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#2563eb] to-[#3b82f6] overflow-hidden text-center text-white">
                {/* Background Polygons for depth */}
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
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tighter leading-tight">
                            Ready to scale your brand <br className="hidden md:block" /> to its full potential?
                        </h2>
                        <p className="text-white/80 text-sm md:text-base mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                            Stop settling for average results. Join the elite group of brands <br className="hidden md:block" /> that leverage Noltven to own their market.
                        </p>
                        <Button asChild className="bg-white text-[#2563eb] hover:bg-slate-900 hover:text-white h-16 px-12 rounded-2xl font-black uppercase tracking-[0.2em] transition-all border-none text-[12px] group/btn shadow-[0_20px_40px_rgba(0,0,0,0.1)] translate-y-0 hover:-translate-y-1 transition-transform duration-300">
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
