"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const blogsData = [
    {
        slug: "the-evolution-of-rpo-2027",
        title: "The Evolution of RPO: Scaling Talent Architectures for 2027",
        excerpt: "As enterprise needs shift from traditional staffing to highly integrated talent ecosystems, RPO is entering a new architectural phase. We explore the critical pivots required for future-proof hiring.",
        category: "Industry Intelligence",
        author: "Chief Architect",
        readTime: "8 min read",
        date: "March 5, 2026",
        image: "/assets/process_inner_banner_bg.png"
    },
    {
        slug: "ai-in-candidate-screening",
        title: "Deploying AI in High-Volume Candidate Screening Protocols",
        excerpt: "Balancing automation velocity with human-centric candidate quality. How next-generation artificial intelligence is fundamentally rewriting the timeline of initial talent acquisition.",
        category: "Technology",
        author: "Head of Operations",
        readTime: "6 min read",
        date: "February 28, 2026",
        image: "/assets/services_inner_banner_bg.png"
    },
    {
        slug: "global-offshore-integration",
        title: "Mastering Global Offshore Talent Integration",
        excerpt: "The 'Follow-the-Sun' model is no longer about cost-saving—it's about 24/7 momentum. Learn the structural requirements for seamless cultural and technological integration across borders.",
        category: "Global Strategy",
        author: "VP of Delivery",
        readTime: "12 min read",
        date: "February 15, 2026",
        image: "/assets/about_inner_banner_bg.png"
    },
    {
        slug: "reducing-cost-per-hire",
        title: "Strategic Variables for Reducing Cost-Per-Hire by 40%",
        excerpt: "An empirical breakdown of exactly where budget leaks occur in traditional recruitment and how an optimized RPO deployment surgically fixes capital inefficiency.",
        category: "Economics",
        author: "Director of Analytics",
        readTime: "7 min read",
        date: "January 30, 2026",
        image: "/assets/careers_hero_bg.png"
    }
];

export function BlogGrid() {
    return (
        <section className="py-24 md:py-32 bg-white relative">
            <div className="container-premium px-6 md:px-12 relative z-10">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-secondary text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
                            Latest Intelligence
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-tight">
                            Explore our latest strategic dispatches.
                        </h2>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
                    {blogsData.map((blog, index) => (
                        <motion.div
                            key={blog.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group flex flex-col bg-slate-50 border border-slate-100 rounded-[2.5rem] overflow-hidden hover:border-secondary/20 hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <Link href={`/blogs/${blog.slug}`} className="relative h-64 md:h-80 w-full block overflow-hidden bg-white">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full shadow-sm">
                                        {blog.category}
                                    </span>
                                </div>
                            </Link>

                            {/* Content Body */}
                            <div className="p-8 md:p-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-6 uppercase tracking-widest">
                                    <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {blog.readTime}</div>
                                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                    <div className="flex items-center gap-1.5">{blog.date}</div>
                                </div>

                                <Link href={`/blogs/${blog.slug}`} className="block group/title">
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight leading-snug group-hover/title:text-secondary transition-colors">
                                        {blog.title}
                                    </h3>
                                </Link>

                                <p className="text-slate-500 font-light leading-relaxed mb-8 flex-grow">
                                    {blog.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-slate-200/60 mt-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-900 tracking-wider uppercase">{blog.author}</p>
                                        </div>
                                    </div>
                                    <Link
                                        href={`/blogs/${blog.slug}`}
                                        className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-secondary group-hover:border-secondary transition-all duration-300"
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
