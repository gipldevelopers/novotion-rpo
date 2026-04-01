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
    BarChart3,
    Heart,
    Flag,
    ArrowUp,
    BarChart2
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
            {/* 1. Hero Section - Exact Image Match */}
            <section className="pt-28 lg:pt-32 pb-10 relative overflow-hidden text-left bg-[#f8fbfd] min-h-[80vh] lg:min-h-[650px] flex items-center">
                <div className="container-premium relative z-10 w-full mx-auto">

                    {/* Added px-6 here specifically to align to the Navbar's inner padding structure! */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 w-full px-6">

                        {/* LEFT COLUMN - TEXT CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="w-full lg:w-[45%] xl:w-[48%] z-30 shrink-0 relative pt-6 lg:pt-0"
                        >
                            <h1 className="text-[38px] md:text-[46px] lg:text-[48px] xl:text-[54px] font-black text-[#0f172a] tracking-tight leading-[1.08] mb-5">
                                Marketing That Gets <br className="hidden lg:block" />
                                You <span className="text-[#1a4fba]">Chosen,</span> Not Just <br className="hidden lg:block" />
                                Seen.
                            </h1>
                            <p className="text-[15px] md:text-[16px] text-slate-500 font-normal leading-[1.65] mb-10 max-w-[480px]">
                                We build and manage your full marketing presence so your brand earns trust before the first conversation even starts. Our strategy-led, marketing approach covers every channel to drive real commercial results and ensure your business is prepared for growth.
                            </p>

                            <Button asChild className="bg-[#1a4fba] hover:bg-[#153e96] text-white h-[52px] px-8 rounded-[8px] font-bold text-[13px] uppercase tracking-wider transition-all shadow-lg shadow-blue-900/10 border-none group/btn">
                                <Link href="/contact" className="flex items-center gap-2">
                                    DISCUSS YOUR STRATEGY
                                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* RIGHT COLUMN - Image 12 PERFECT REPLICA */}
                        {/* RIGHT COLUMN - Image 13 ALIGNMENT */}
                        <div className="w-full lg:w-[55%] xl:w-[50%] h-[400px] lg:h-[500px] xl:h-[550px] relative hidden lg:block z-10 overflow-visible">

                            {/* Massive Circular Cream Curve */}
                            <div className="absolute right-[-25%] xl:right-[-20%] top-[5%] w-[500px] h-[500px] xl:w-[700px] xl:h-[700px] bg-[#fcf9f3] rounded-full -z-20 opacity-100" />

                            {/* Decorative Yellow Swirl Line - Image 13 Exact Loop */}
                            <svg className="absolute top-[8%] left-[-5%] w-[80%] h-[75%] text-[#fbbf24] -z-10 hidden xl:block opacity-70" viewBox="0 0 500 400" fill="none">
                                {/* The curved path entering from top right, swooping left, doing a clockwise loop, and dropping down-left */}
                                <path d="M 400,60 C 250,50 180,90 130,210 C 110,260 160,320 190,280 C 220,240 200,180 150,210 C 100,240 90,360 80,480" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>

                            {/* Decorative Grid Dots Panel (Far Left Bottom) */}
                            <div className="absolute left-[0%] bottom-[8%] -z-10 opacity-70">
                                <div className="grid grid-cols-6 gap-3 lg:gap-4">
                                    {[...Array(30)].map((_, i) => (
                                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#e0e7ff]" />
                                    ))}
                                </div>
                            </div>

                            {/* Floating Cards Canvas */}
                            <div className="absolute inset-0 w-full h-full text-slate-800 pointer-events-none">

                                {/* CARD 1: Likes (Top Center) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                                    transition={{
                                        opacity: { duration: 0.5, delay: 0.1 },
                                        scale: { duration: 0.5, delay: 0.1 },
                                        y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0 }
                                    }}
                                    className="absolute right-[28%] top-[2%] bg-white p-3 xl:p-4 rounded-[16px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] w-[120px] xl:w-[140px] z-20 pointer-events-auto"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 rounded-full bg-[#ef4444] flex items-center justify-center shrink-0">
                                            <Heart className="w-3 h-3 text-white fill-current" />
                                        </div>
                                        <span className="text-[11px] xl:text-[13px] font-semibold text-slate-500">Likes</span>
                                    </div>
                                    <div className="text-[20px] xl:text-[24px] font-black text-[#0f172a] tracking-tight leading-none mb-2">15.9k</div>
                                    <div className="flex items-center gap-1 text-[10px] xl:text-[11px] font-bold text-[#22c55e]">
                                        <span>↑</span>
                                        <span>2.1% <span className="text-slate-400 font-medium hidden xl:inline">vs 7 days</span></span>
                                    </div>
                                </motion.div>

                                {/* CARD 2: Active Customer (Floating Left - Far Edge) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                                    transition={{
                                        opacity: { duration: 0.5, delay: 0.2 },
                                        scale: { duration: 0.5, delay: 0.2 },
                                        y: { repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }
                                    }}
                                    className="absolute left-[2%] xl:left-[6%] top-[25%] bg-white p-2 xl:p-2.5 rounded-[12px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] flex items-center gap-2.5 z-30 w-[130px] xl:w-[150px] pointer-events-auto"
                                >
                                    <div className="w-8 h-8 xl:w-9 xl:h-9 shrink-0 rounded-full bg-slate-100 overflow-hidden relative border border-slate-50">
                                        <Image src="/assets/team/member2.png" alt="User" fill className="object-cover" />
                                        <div className="absolute top-[0px] right-[0px] w-[10px] h-[10px] bg-[#22c55e] border-[1.5px] border-white rounded-full flex items-center justify-center">
                                            <svg width="5" height="5" viewBox="0 0 24 24" fill="white"><path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.6-6.2 4.6 2.4-7.4-6.2-4.5h7.6z" /></svg>
                                        </div>
                                    </div>
                                    <div className="pr-1">
                                        <div className="text-[10px] xl:text-[11px] font-bold text-[#0f172a] leading-tight">Active Customer</div>
                                        <div className="text-[8px] xl:text-[9px] font-medium text-[#8b5cf6] mt-0.5">Engaged User</div>
                                    </div>
                                </motion.div>

                                {/* CARD 3: Loyal Customer (Top Far Right) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
                                    transition={{
                                        opacity: { duration: 0.5, delay: 0.3 },
                                        scale: { duration: 0.5, delay: 0.3 },
                                        y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }
                                    }}
                                    className="absolute right-[-4%] xl:right-[-6%] top-[18%] bg-white p-2 xl:p-2.5 rounded-[12px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] flex items-center gap-2.5 z-10 w-[130px] xl:w-[150px] pointer-events-auto"
                                >
                                    <div className="w-8 h-8 xl:w-9 xl:h-9 shrink-0 rounded-full bg-slate-100 overflow-hidden relative border border-slate-50">
                                        <Image src="/assets/team/member1.png" alt="User" fill className="object-cover" />
                                        <div className="absolute top-[0px] right-[0px] w-[10px] h-[10px] bg-[#22c55e] border-[1.5px] border-white rounded-full flex items-center justify-center">
                                            <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" /></svg>
                                        </div>
                                    </div>
                                    <div className="pr-1">
                                        <div className="text-[10px] xl:text-[11px] font-bold text-[#0f172a] leading-tight">Loyal Customer</div>
                                        <div className="text-[8px] xl:text-[9px] font-medium text-[#0ea5e9] mt-0.5">VIP Member</div>
                                    </div>
                                </motion.div>

                                {/* CARD 4: Followers Stats (Bottom Left, distinct styled frame) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: [0, -10, 0] }}
                                    transition={{
                                        opacity: { duration: 0.6, delay: 0.4 },
                                        y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }
                                    }}
                                    className="absolute left-[4%] xl:left-[8%] top-[50%] bg-white p-4 xl:p-5 rounded-[16px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] w-[240px] xl:w-[260px] z-30 pointer-events-auto border-[1.5px] border-[#eff2f6]"
                                >
                                    <div className="text-[12px] xl:text-[14px] font-bold text-[#0f172a] mb-4 xl:mb-5">Followers Stats</div>

                                    <div className="relative h-[90px] xl:h-[100px] w-full mt-2">
                                        {/* Y-axis text labels */}
                                        <div className="absolute left-0 top-0 bottom-5 flex flex-col justify-between text-[8px] xl:text-[9px] font-medium text-slate-400">
                                            <span>40</span>
                                            <span>20</span>
                                            <span>0</span>
                                            <span>-20</span>
                                        </div>

                                        {/* Horizontal Background Tracking Lines */}
                                        <div className="absolute left-6 xl:left-7 right-0 top-2 bottom-[35%] flex flex-col justify-between z-0">
                                            <div className="w-full h-[1px] bg-slate-100"></div>
                                            <div className="w-full h-[1px] bg-slate-100"></div>
                                        </div>

                                        {/* Horizontal Zero Line */}
                                        <div className="absolute left-6 xl:left-7 right-0 bottom-[35%] h-[1px] bg-slate-200 z-0"></div>

                                        {/* Precise Bi-Directional Chart Bars (Fully Rounded) */}
                                        <div className="absolute left-7 xl:left-9 right-2 top-0 bottom-[35%] flex justify-between items-end z-10 w-[85%] xl:w-full">
                                            {[
                                                { up: 45, down: 20 },
                                                { up: 60, down: 24 },
                                                { up: 35, down: 20 },
                                                { up: 25, down: 20 },
                                                { up: 45, down: 20 },
                                                { up: 35, down: 20 },
                                                { up: 70, down: 24 }
                                            ].map((v, i) => (
                                                <div key={i} className="relative w-1.5 xl:w-[6px] h-[95%] flex flex-col justify-end items-center group">
                                                    {/* Purple UP pill resting on the line */}
                                                    <div className="w-full bg-[#5b45f4] rounded-full z-10" style={{ height: `${v.up}%` }}></div>
                                                    {/* Grey DOWN pill hanging beneath */}
                                                    <div className="absolute top-[102%] w-full bg-[#e2e8f0] rounded-full z-10 opacity-70" style={{ height: `${v.down}px` }}></div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* X-axis spacing */}
                                        <div className="absolute left-7 xl:left-9 right-2 bottom-[-10px] flex justify-between text-[7px] xl:text-[8px] font-medium text-slate-400 w-[85%] xl:w-full">
                                            <span>18/10</span>
                                            <span>19/10</span>
                                            <span>21/10</span>
                                            <span>23/10</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* CARD 5: 2.938 Gained (Middle Right) */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
                                    transition={{
                                        opacity: { duration: 0.5, delay: 0.5 },
                                        x: { duration: 0.5, delay: 0.5 },
                                        y: { repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1.5 }
                                    }}
                                    className="absolute right-[6%] xl:right-[10%] top-[40%] bg-white p-2.5 xl:p-3 px-3 xl:px-4 rounded-[14px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] flex items-center gap-2.5 xl:gap-3 w-[160px] xl:w-[190px] z-10 pointer-events-auto"
                                >
                                    <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0">
                                        <BarChart2 className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white" strokeWidth={3} />
                                    </div>
                                    <div className="flex flex-col pr-1">
                                        <div className="text-[16px] xl:text-[18px] font-black text-[#0f172a] leading-none tracking-tight mb-0.5">2.938</div>
                                        <div className="text-[8px] xl:text-[9px] font-medium text-slate-400 leading-[1.1]">Followers gained after this post</div>
                                    </div>
                                </motion.div>

                                {/* CARD 6: Reach (Bottom Right Center) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: [0, -10, 0] }}
                                    transition={{
                                        opacity: { duration: 0.5, delay: 0.6 },
                                        y: { repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.8 }
                                    }}
                                    className="absolute right-[18%] xl:right-[20%] bottom-[8%] lg:bottom-[12%] bg-white p-3 xl:p-4 rounded-[16px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] w-[120px] xl:w-[140px] z-30 pointer-events-auto"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 rounded-full bg-[#ffedd5] flex items-center justify-center shrink-0">
                                            <Flag className="w-3 h-3 text-[#f97316] fill-current" />
                                        </div>
                                        <span className="text-[11px] xl:text-[13px] font-semibold text-slate-500">Reach</span>
                                    </div>
                                    <div className="text-[20px] xl:text-[24px] font-black text-[#0f172a] tracking-tight leading-none mb-2">256.18k</div>
                                    <div className="flex items-center gap-1 text-[10px] xl:text-[11px] font-bold text-[#22c55e]">
                                        <span>↑</span>
                                        <span>2.1% <span className="text-slate-400 font-medium hidden xl:inline">vs 7 days</span></span>
                                    </div>
                                </motion.div>

                                {/* CARD 7: New Subscriber (Bottom Far Right Edge) */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                                    transition={{
                                        opacity: { duration: 0.5, delay: 0.7 },
                                        x: { duration: 0.5, delay: 0.7 },
                                        y: { repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 2.5 }
                                    }}
                                    className="absolute right-[-6%] xl:right-[-8%] bottom-[2%] xl:bottom-[5%] bg-white p-2 xl:p-2.5 rounded-[12px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] flex items-center gap-2.5 z-40 w-[130px] xl:w-[150px] pointer-events-auto"
                                >
                                    <div className="w-8 h-8 xl:w-9 xl:h-9 shrink-0 rounded-full bg-slate-100 overflow-hidden relative border border-slate-50">
                                        <Image src="/assets/team/member3.png" alt="User" fill className="object-cover" />
                                        {/* Green Badge with Checkmark */}
                                        <div className="absolute top-[0px] right-[0px] w-[10px] h-[10px] bg-[#22c55e] border-[1.5px] border-white rounded-full flex items-center justify-center">
                                            <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        </div>
                                    </div>
                                    <div className="pr-1">
                                        <div className="text-[10px] xl:text-[11px] font-bold text-[#0f172a] leading-tight">New Subscriber</div>
                                        <div className="text-[8px] xl:text-[9px] font-medium text-[#2563eb] mt-0.5">Premium Plan</div>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Tailored Service Pillars Section */}
            <section className="py-12 lg:py-16 bg-white relative overflow-hidden text-center">
                <div className="container-premium relative z-10 px-4 max-w-[1400px] mx-auto">
                    <div className="inline-flex items-center gap-2 bg-white text-[#1a4fba] px-5 py-2 rounded-full border border-blue-100 mb-6 shadow-sm">
                        {/* Custom Hand-holding-target Icon */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><circle cx="12" cy="11" r="3" /><path d="M12 14v1" /><path d="M12 8v1" /></svg>
                        <span className="text-[13px] font-bold tracking-wide">What We Do</span>
                    </div>
                    <h2 className="text-[38px] md:text-[44px] font-black text-[#111827] mb-8 tracking-tight">
                        Tailored Service Pillars
                    </h2>

                    {/* 5-Column Static Grid Layout (No Animation) */}
                    <div className="relative mt-10 w-full max-w-[1300px] mx-auto pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8 items-stretch relative z-10 px-4 xl:px-0">
                            {[
                                { 
                                    title: "Social Media Management",
                                    slug: "social-media-management",
                                    desc: "We handle your social presence end to end, keeping your brand visible, credible, and actively engaging customers."
                                },
                                { 
                                    title: "SEO & Content Marketing", 
                                    slug: "seo-content-marketing",
                                    desc: "We build the technical foundation and content authority that earns sustainable search rankings and qualified organic traffic."
                                },
                                { 
                                    title: "Email Marketing",
                                    slug: "email-marketing",
                                    desc: "Built on segmentation and behavioural triggers, email consistently delivers the highest ROI of any digital channel."
                                },
                                { 
                                    title: "Paid Ads (Google & Meta)",
                                    slug: "paid-ads-google-meta",
                                    desc: "Targeted intent-based campaigns across search and social platforms designed to intercept buyers and drive conversion."
                                },
                                { 
                                    title: "Branding & Design",
                                    slug: "branding-design",
                                    desc: "Distinct visual identities and crisp collateral designed to earn trust and differentiate your business at first glance."
                                },
                            ].map((card, i) => (
                                <div key={i} className="w-full bg-[#f8f9fc] rounded-[16px] px-5 xl:px-6 pb-8 pt-12 flex flex-col items-center border border-transparent transition-all relative hover:-translate-y-1 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] cursor-pointer mt-8 lg:mt-6 group">

                                    {/* Elevated Icon Bump - Same color as card to blend in */}
                                    <div className="absolute -top-[32px] left-1/2 -translate-x-1/2 w-[64px] h-[64px] rounded-full bg-[#f8f9fc] flex items-center justify-center z-10">
                                        {/* Inner White Circle */}
                                        <div className="w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)] relative z-20">
                                            {/* Solid Blue Document Icon matching Image 15 */}
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#1e40af"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" fill="#1e40af" stroke="white" strokeWidth="2" strokeLinejoin="round" /><line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" strokeLinecap="round" /><line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" /><line x1="10" y1="9" x2="8" y2="9" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
                                        </div>
                                    </div>

                                    <h3 className="text-[14px] xl:text-[15px] font-extrabold text-[#0f172a] mb-3 leading-tight text-center tracking-tight">{card.title}</h3>
                                    <p className="text-[11px] xl:text-[12px] text-slate-500 mb-8 leading-[1.6] font-medium text-center">
                                        {card.desc}
                                    </p>
                                    <Link href={`/services/digital-marketing/${card.slug}`} className="flex items-center justify-center gap-1.5 text-[12px] font-bold text-[#0f172a] mt-auto hover:text-[#1e40af] transition-colors">
                                        Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Why Us Split Section */}
            <section className="py-12 lg:py-16 bg-[#f8f9fc] relative overflow-hidden">
                <div className="container-premium relative z-10 px-4 w-full max-w-[1200px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-[500px] mx-auto"
                        >
                            {/* Dots Top Left */}
                            <div className="absolute -top-6 -left-6 grid grid-cols-4 gap-2.5 z-0 opacity-70">
                                {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#cbd5e1]" />)}
                            </div>

                            {/* Dots Bottom Right */}
                            <div className="absolute -bottom-6 -right-6 grid grid-cols-4 gap-2.5 z-0 opacity-70">
                                {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#cbd5e1]" />)}
                            </div>

                            <div className="relative rounded-[2rem] overflow-hidden shadow-lg z-10 aspect-[4/3] w-full border border-slate-200/50">
                                <Image
                                    src="/assets/banner-3 1.png"
                                    alt="Creative Growth Team"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Right Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col"
                        >
                            <h2 className="text-[34px] md:text-[40px] font-black text-[#111827] tracking-tight leading-[1.1] mb-5">
                                Why Our Marketing <br className="hidden md:block" /> Approach Outperforms the 99%
                            </h2>
                            <p className="text-slate-500 text-[15px] mb-6 pb-2 leading-relaxed pr-8">
                                Hiring should be easy, cost-effective, and flexible. Noltven is synonymous with it all.
                            </p>

                            <div className="flex flex-col gap-5">
                                {[
                                    { title: "Strategy before execution", desc: "Every channel and campaign starts with a defined commercial objective.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> },
                                    { title: "2026-ready methods", desc: "We use up-to-date SEO built for E-E-A-T and AI-powered search, not outdated tactics.", icon: <Globe className="w-5 h-5" /> },
                                    { title: "Brand as a growth asset", desc: "We treat your brand as a live commercial asset, doing persuasion work even before your team steps in.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg> }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-5 group items-center cursor-pointer">
                                        <div className="w-12 h-12 rounded-full bg-[#eaeffa] flex items-center justify-center text-[#1a4fba] shrink-0 transition-transform group-hover:scale-110">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1 pr-6">
                                            <h4 className="text-[15px] font-bold text-[#111827] mb-1 leading-tight">{item.title}</h4>
                                            <p className="text-[12px] text-slate-500 leading-relaxed font-normal">{item.desc}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white shadow-[0_5px_15px_-5px_rgba(0,0,0,0.05)] flex items-center justify-center text-slate-800 transition-all border border-slate-100 shrink-0">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Final CTA */}
            <section className="relative py-16 lg:py-20 bg-white overflow-hidden text-center flex flex-col items-center">
                {/* Floating Dots Container */}
                <div className="absolute inset-0 pointer-events-none w-full max-w-[1000px] mx-auto hidden md:block z-0">
                    {/* Green Dot */}
                    <div className="absolute right-[20%] top-[30%] w-3 h-3 bg-[#22c55e] rounded-full" />
                    {/* Blue Dot */}
                    <div className="absolute left-[20%] top-[60%] w-1.5 h-1.5 bg-[#3b82f6] rounded-full" />
                    {/* Red Dot */}
                    <div className="absolute left-[52%] bottom-[15%] w-2 h-2 bg-[#ef4444] rounded-full" />
                </div>

                <div className="container-premium relative z-10 max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[36px] md:text-[42px] font-black text-[#111827] mb-4 tracking-tight leading-[1.1]">
                            Ready to scale your brand to its full potential?
                        </h2>
                        <p className="text-slate-500 text-[15px] mb-8 font-normal leading-relaxed max-w-[800px] mx-auto whitespace-normal">
                            Stop settling for average results. Join the elite group of brands that leverage Luminescent to own their market.
                        </p>
                        <Button asChild className="bg-[#1a4fba] text-white hover:bg-[#153e96] h-14 px-10 rounded-xl font-bold uppercase tracking-wider transition-all border-none text-[13px] shadow-[0_15px_30px_-5px_rgba(26,79,186,0.3)]">
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
