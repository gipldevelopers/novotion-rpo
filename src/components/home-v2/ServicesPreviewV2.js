"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Cog, Layout, Users, Briefcase, Target, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
    {
        title: "Recruitment Support",
        subHeadline: "Recruitment Support",
        description: "Complete offshore recruitment sourcing, screening, onboarding, and compliance that cuts time-to-hire by 60% and reduces hiring costs by up to 50%.",
        features: ["END-TO-END RECRUITMENT", "TALENT SOURCING", "ADMIN SUPPORT", "MARKET MAPPING", "ONBOARDING & COMPLIANCE"],
        icon: Users,
    },
    {
        title: "Marketing Support",
        subHeadline: "Marketing Support",
        description: "Full-service marketing covering social media, SEO, email campaigns, and paid ads built to grow your brand and turn the right audience into paying customers.",
        features: ["SOCIAL MEDIA MANAGEMENT", "SEO & CONTENT MARKETING", "EMAIL MARKETING", "PAID ADS (GOOGLE & META)", "BRANDING & DESIGN"],
        icon: Layout,
    },
    {
        title: "AI & Automation",
        subHeadline: "AI & Automation",
        description: "Workflow automation, AI chatbots, and system integrations that cut manual tasks, reduce errors by up to 90%, and scale your operations without extra headcount.",
        features: ["WORKFLOW AUTOMATION", "AI CHATBOTS & VIRTUAL ASSISTANTS", "AI REPORTING & ANALYTICS", "SYSTEMS INTEGRATION", "AI CONTENT ASSISTANCE"],
        icon: Cog,
    },
    {
        title: "Business Development",
        subHeadline: "Business Development",
        description: "Structured outbound prospecting, CRM management, and partnership development that fills your pipeline and converts opportunities into consistent revenue.",
        features: ["GROWTH STRATEGY", "PARTNERSHIP BUILDING", "OUTBOUND SALES & PROSPECTING", "PROPOSAL & PITCH SUPPORT", "MARKET EXPANSION", "CRM & PIPELINE MANAGEMENT"],
        icon: Briefcase,
    },
    {
        title: "Accounting & Finance",
        subHeadline: "Accounting & Finance",
        description: "Professional bookkeeping, payroll processing, tax compliance, and financial reporting without the overhead of a full-time in-house finance function.",
        features: ["BOOKKEEPING", "ACCOUNTS PAYABLE & RECEIVABLE", "PAYROLL", "FINANCIAL REPORTING", "BUDGETING & PLANNING", "TAX & COMPLIANCE"],
        icon: Target,
    },
];

export function ServicesPreview() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="services" className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden scroll-mt-32">
            <div className="container-premium w-full">
                
                {/* Section Header - Centered */}
                <div className="mb-8 md:mb-10 lg:mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-secondary text-[9px] font-extrabold uppercase tracking-[0.4em] mb-4"
                    >
                        <Sparkles className="h-3 w-3" />
                        Our Solutions
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tighter leading-[1] font-display">
                        All Five Services. <br />
                        <span className="text-secondary">One Trusted Partner.</span>
                    </h2>
                </div>

                {/* Console Card */}
                <div className="w-full flex flex-col border border-slate-200/80 rounded-2xl md:rounded-[2.5rem] bg-white shadow-lg shadow-slate-200/50 relative">
                    
                    {/* Tab Navigation - Icon-Only on Mobile, Full on Desktop */}
                    <div className="flex w-full bg-[#f8fafc] border-b border-slate-100 p-2 md:p-2.5 gap-1 md:gap-2 rounded-t-2xl md:rounded-t-[2.5rem]">
                        {services.map((item, index) => (
                            <button
                                key={item.title}
                                onClick={() => setActiveTab(index)}
                                className="flex-1 flex items-center justify-center gap-2 py-3 md:py-4 px-2 md:px-3 rounded-lg md:rounded-xl relative group"
                            >
                                {/* Animated Sliding Background */}
                                {activeTab === index && (
                                    <motion.div
                                        layoutId="activeTabBg"
                                        className="absolute inset-0 bg-secondary rounded-lg md:rounded-xl shadow-sm"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                                <item.icon className={`h-5 w-5 md:h-4 md:w-4 flex-shrink-0 relative z-10 transition-colors duration-300 ${
                                    activeTab === index ? 'text-white' : 'text-slate-300 group-hover:text-secondary'
                                }`} />
                                <span className={`hidden md:inline text-[10px] font-extrabold uppercase tracking-[0.15em] whitespace-nowrap relative z-10 transition-colors duration-300 ${
                                    activeTab === index ? 'text-white' : 'text-slate-400 group-hover:text-slate-700'
                                }`}>
                                    {item.title}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Content Stage */}
                    <div className="relative overflow-hidden rounded-b-2xl md:rounded-b-[2.5rem]">
                        
                        {/* Subtle Grid Pattern */}
                        <div className="absolute inset-0 opacity-[0.025] pointer-events-none select-none"
                             style={{ backgroundImage: `radial-gradient(#0f172a 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="p-6 md:p-10 lg:p-14 xl:p-16 relative z-10"
                            >
                                <div className="max-w-4xl">
                                    {/* Service Identity */}
                                    <div className="flex items-center gap-4 md:gap-5 mb-5 md:mb-8">
                                        <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-secondary shadow-lg shadow-slate-900/10">
                                            {(() => {
                                                const Icon = services[activeTab].icon;
                                                return <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />;
                                            })()}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[8px] md:text-[9px] font-bold text-secondary uppercase tracking-[0.4em] mb-0.5 opacity-70">
                                                Technical Strategy
                                            </span>
                                            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[2.25rem] font-bold text-slate-900 tracking-tight leading-none font-display">
                                                {services[activeTab].title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-500 text-sm md:text-base font-normal leading-relaxed mb-6 md:mb-8 lg:mb-10 max-w-2xl border-l-[3px] border-secondary/10 pl-5 md:pl-6 lg:pl-8">
                                        {services[activeTab].description}
                                    </p>

                                    {/* Features Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-8 md:gap-x-12 mb-8 md:mb-10 lg:mb-12">
                                        {services[activeTab].features.map((feature, i) => (
                                            <motion.div 
                                                key={feature}
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + (i * 0.05) }}
                                                className="flex items-center gap-3 group/feat"
                                            >
                                                <div className="w-5 h-5 flex-shrink-0 rounded-full bg-secondary/10 flex items-center justify-center text-secondary transition-all group-hover/feat:bg-secondary group-hover/feat:text-white">
                                                    <Check className="h-3 w-3" />
                                                </div>
                                                <span className="text-[12px] md:text-[13px] font-medium text-slate-600 transition-colors group-hover/feat:text-slate-900">
                                                    {feature}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                                        <Link
                                            href="/services"
                                            className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl bg-slate-900 text-white text-[10px] md:text-[11px] font-bold uppercase tracking-widest hover:bg-secondary transition-all shadow-xl shadow-slate-900/10 group active:scale-95"
                                        >
                                            Detailed Strategy
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                        <Link href="/contact" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-secondary transition-colors inline-flex items-center gap-2 group/link">
                                            Strategic Consult
                                            <ChevronRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
}
