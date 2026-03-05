"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

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
    const containerRef = useRef(null);

    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="container-premium relative z-10 px-6 md:px-12">

                {/* Section Header */}
                <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-secondary text-[10px] font-bold tracking-[0.4em] uppercase mb-6"
                        >
                            <Sparkles className="h-4 w-4" />
                            Latest Intelligence
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-tight">
                            Explore our latest <br />
                            <span className="text-secondary">Strategic Dispatches</span>
                        </h2>
                    </div>
                </div>

                {/* Draggable Carousel Area */}
                <div className="relative">
                    <motion.div
                        ref={containerRef}
                        className="cursor-grab active:cursor-grabbing overflow-visible select-none"
                    >
                        <motion.div
                            drag="x"
                            dragConstraints={{
                                right: 0,
                                left: -((blogsData.length * 520) - (containerRef.current?.offsetWidth || 1200) + (blogsData.length * 40)) || -1000
                            }}
                            dragElastic={0.1}
                            className="flex gap-6 md:gap-10 py-8"
                            style={{ touchAction: 'none' }}
                        >
                            {blogsData.map((blog, index) => (
                                <motion.div
                                    key={blog.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex-shrink-0 w-[280px] md:w-[450px] lg:w-[500px] flex flex-col bg-slate-50 border border-slate-200 rounded-[2.5rem] overflow-hidden hover:border-secondary/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 shadow-sm"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-56 md:h-72 w-full block overflow-hidden bg-white pointer-events-none">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-700 opacity-90"
                                            draggable={false}
                                        />
                                        <div className="absolute top-6 left-6 z-10">
                                            <span className="bg-white/95 backdrop-blur-md text-slate-900 text-[9px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full shadow-sm">
                                                {blog.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Body */}
                                    <div className="p-8 md:p-10 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-[10px] font-medium text-slate-500 mb-6 uppercase tracking-[0.2em]">
                                            <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {blog.readTime}</div>
                                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                            <div className="flex items-center gap-1.5">{blog.date}</div>
                                        </div>

                                        <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight leading-snug hover:text-secondary transition-colors line-clamp-2">
                                            {blog.title}
                                        </h3>

                                        <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed mb-8 flex-grow line-clamp-3">
                                            {blog.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between pt-6 border-t border-slate-200 mt-auto">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                                                    <User className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold text-slate-900 tracking-wider uppercase">{blog.author}</p>
                                                </div>
                                            </div>
                                            <Link
                                                href={`/blogs/${blog.slug}`}
                                                className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-secondary hover:border-secondary transition-all duration-300 active:scale-95"
                                            >
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
