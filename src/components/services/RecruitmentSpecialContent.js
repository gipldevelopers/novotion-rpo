"use client";

import { motion } from "framer-motion";
import { 
    ArrowRight, 
    Sparkles, 
    Zap, 
    Users, 
    Search, 
    Briefcase, 
    UserPlus, 
    TrendingUp,
    Globe,
    Target,
    Award
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RecruitmentIcon = ({ type }) => {
    switch (type) {
        case "executive-search": return <Award className="w-6 h-6" />;
        case "rpo-solutions": return <Globe className="w-6 h-6" />;
        case "contingent-workforce": return <Users className="w-6 h-6" />;
        case "talent-strategy": return <Target className="w-6 h-6" />;
        default: return <UserPlus className="w-6 h-6" />;
    }
};

const pillarIcons = {
    '01': <Users className="w-6 h-6" />,
    '02': <Search className="w-6 h-6" />,
    '03': <Briefcase className="w-6 h-6" />
};

export function RecruitmentSpecialContent({ service }) {
    if (!service) return null;

    return (
        <div className="bg-white">
            {/* 1. Hero Section - Light & Clean */}
            <section className="pt-32 pb-24 relative overflow-hidden text-center bg-white">
                <div className="container-premium relative z-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 tracking-tighter leading-tight mb-8">
                            Talent That <br className="hidden md:block" />
                            Builds <span className="relative inline-block text-secondary">
                                Empires
                                <motion.span 
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="absolute -bottom-2 left-0 w-full h-1.5 bg-secondary/30 rounded-full origin-left"
                                />
                            </span>, Not Just Teams.
                        </h1>
                        <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-3xl mx-auto mb-10">
                            The best growth strategy is a great team. We don't just fill seats; we find the elite 1% who
                            drive innovation and own their roles with accountability.
                        </p>
                        
                        <Button asChild className="bg-secondary hover:bg-slate-900 text-white h-14 px-10 rounded-xl font-bold uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 border-none text-[13px] group/btn">
                            <Link href="/contact" className="flex items-center gap-3">
                                DISCUSS YOUR STRATEGY
                                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Dashboard/Graphic Below Hero */}
                    <motion.div 
                        initial={{ scale: 0.95, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="relative max-w-5xl mx-auto"
                    >
                        <div className="absolute inset-0 bg-secondary/10 rounded-[4rem] blur-[120px] scale-90 pointer-events-none" />
                        <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-200/50 bg-white aspect-[16/10]">
                            <Image 
                                src="/assets/hero/recruitment.png"
                                alt="Elite Recruitment Dashboard"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. What We Do Section - Light Grid */}
            <section className="py-24 bg-slate-50/50 relative">
                <div className="container-premium relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-[11px] font-bold uppercase tracking-widest mb-6">
                            <Users className="h-3.5 w-3.5" />
                            what we do
                        </div>
                        <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tighter text-slate-900">
                            Tailored Recruitment Pillars
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                        {service.whatYouGet?.map((item, i) => {
                            const itemSlug = item.slug || item.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `pillar-${i + 1}`;
                            const colors = [
                                "bg-indigo-600", "bg-blue-500", "bg-cyan-500", "bg-violet-500"
                            ];
                            return (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-secondary/20 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 group"
                                >
                                    <div className={`w-10 h-10 rounded-xl ${colors[i % colors.length]} flex items-center justify-center text-white mb-6 shadow-lg shadow-black/5`}>
                                        <RecruitmentIcon type={itemSlug} />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 line-clamp-3">
                                        {item.description}
                                    </p>
                                    <Link 
                                        href={`/services/${service.slug}/${itemSlug}`}
                                        className="text-[11px] font-bold text-slate-400 group-hover:text-secondary flex items-center gap-1.5 uppercase tracking-widest transition-colors"
                                    >
                                        Learn More <ArrowRight className="h-3 w-3" />
                                    </Link>
                                </motion.div>
                            );
                        })}
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
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
                                why our recruitment <br />
                                approach <span className="text-secondary italic">Outperforms</span> the 99%
                            </h2>
                            <p className="text-lg text-slate-500 font-light leading-relaxed mb-10 max-w-lg">
                                Traditional agencies focus on speed and volume. We focus on impact and cultural alignment. We find people who don't just "do the job" but "own the job".
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
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl z-10 bg-slate-100 aspect-[5/4]">
                                <Image 
                                    src="/assets/hero/recruitment.png" 
                                    alt="Creative Growth Team" 
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            
                            {/* Floating Badges */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl z-20 hidden md:block"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-slate-900">10k+</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Talent Reach</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-2xl z-20 hidden md:block"
                            >
                                <div className="flex items-center gap-3 px-2">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                                                <Image src={`/assets/team/member${i}.png`} alt="Client" width={32} height={32} />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-slate-900">100k+ Profiles</p>
                                        <p className="text-[9px] font-bold text-slate-400 uppercase">Analyzed Monthly</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Three-Column Pillars */}
                    <div className="grid md:grid-cols-3 gap-8 mt-32">
                        {[
                            { id: '01', title: 'Audit Driven Sourcing', desc: 'We don\'t just look for skills; we audit the candidate\'s actual track record of impact and accountability.' },
                            { id: '02', title: 'Global Delivery Network', desc: 'Our borders are open. We find you the best talent in the world, not just the best talent in your city.' },
                            { id: '03', title: 'Unified Growth Fit', desc: 'We ensure candidates fit your data-built strategy, turning human capital into a competitive asset.' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-secondary transition-all group overflow-hidden"
                            >
                                <span className="absolute top-4 right-8 text-[7rem] font-bold text-slate-200/50 group-hover:text-secondary/10 transition-colors pointer-events-none line-clamp-1">{item.id}</span>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm mb-8">
                                        {pillarIcons[item.id]}
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight uppercase leading-none">{item.title}</h4>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">{item.desc}</p>
                                    <Link href="#" className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] flex items-center gap-1.5">
                                        Learn More <ArrowRight className="h-3 w-3" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Final CTA */}
            <section className="py-24 px-4 bg-white">
                <div className="container-premium">
                    <div className="relative p-12 md:p-20 rounded-[3rem] md:rounded-[4rem] bg-gradient-to-br from-secondary via-secondary to-blue-600 overflow-hidden text-center text-white shadow-2xl">
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                        </div>
                        
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">
                                Ready to build the future of your company?
                            </h2>
                            <p className="text-white/80 text-sm md:text-base mb-10 font-light">
                                Don't settle for "good enough" hires. Build a network of world-class performers with Noltven's headhunting precision.
                            </p>
                            <Button asChild className="bg-white text-secondary hover:bg-slate-900 hover:text-white h-16 px-12 rounded-2xl font-bold uppercase tracking-widest transition-all border-none text-[13px] group/btn">
                                <Link href="/contact" className="flex items-center gap-3">
                                    Share Your Message With Us
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
