"use client";

import { useEffect, useState, use } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CTASectionV2 } from "@/components/home-v2/CTASectionV2";

// Importing the data from the grid to maintain sync
import { blogsData } from "@/components/blogs/BlogGrid";

export default function BlogDetailPage({ params }) {
    const resolvedParams = use(params);
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const foundBlog = blogsData.find((b) => b.slug === resolvedParams.slug);
        if (foundBlog) {
            setBlog(foundBlog);
        } else {
            notFound();
        }
    }, [resolvedParams.slug]);

    if (!blog) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center bg-white">
                    <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin" />
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <main className="bg-white min-h-screen pt-24 md:pt-32 pb-24">
                <article className="container-premium px-6 md:px-12 relative z-10">

                    {/* Navigation Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto mb-12 flex justify-between items-center"
                    >
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-secondary transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> Return to Intelligence
                        </Link>

                        <button className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-secondary transition-colors">
                            <Share2 className="w-4 h-4" /> Share Intel
                        </button>
                    </motion.div>

                    {/* Article Header */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
                                {blog.category}
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-tight mb-8">
                                {blog.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-slate-400" /> {blog.author}
                                </div>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-slate-400" /> {blog.date}
                                </div>
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-slate-400" /> {blog.readTime}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-5xl mx-auto mb-20 md:mb-32 relative h-[40vh] md:h-[60vh] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50"
                    >
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Article Content Body (Simulated) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-3xl mx-auto prose prose-lg prose-slate prose-headings:font-bold prose-headings:tracking-tight prose-a:text-secondary hover:prose-a:text-orange-600 focus:prose-a:text-orange-600 prose-img:rounded-[2.5rem] prose-p:font-light prose-p:leading-loose text-slate-600"
                    >
                        <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mb-12">
                            {blog.excerpt}
                        </p>

                        <p>
                            In today’s hyper-accelerated corporate environment, standard recruitment logic
                            is demonstrating critical system failure. Enterprise organizations are reporting
                            longer execution cycles and a diminishing return on agency spend.
                            The resolution requires a complete architectural pivot toward Recruitment Process Outsourcing (RPO) models.
                        </p>

                        <h2 className="text-3xl mt-16 mb-8 text-slate-900 tracking-tight">The Structural Deficit of Traditional Hiring.</h2>
                        <p>
                            To understand the trajectory of global hiring, we first must audit the inefficiencies of standard
                            talent acquisition. Most internal teams operate on reactive models—initiating sourcing protocols
                            only after a position becomes vacant. This results in "Time-to-Fill" delays that cost enterprise businesses
                            millions in lost productivity.
                        </p>

                        <div className="my-16 p-8 md:p-12 rounded-[2rem] bg-slate-50 border-l-4 border-secondary shadow-sm">
                            <p className="text-slate-900 font-medium italic text-xl md:text-2xl m-0 leading-relaxed">
                                "The integration of AI shouldn't just replace human effort; it should elevate human strategy to unprecedented levels of precision."
                            </p>
                            <p className="mt-6 text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-4 h-px bg-slate-300"></span> Lead Intelligence Architect
                            </p>
                        </div>

                        <h3 className="text-2xl mt-12 mb-6 text-slate-900 tracking-tight">Transitioning to Continuous Talent Ecosystems</h3>
                        <p>
                            The contemporary RPO isn't an external vendor; it is a fully integrated internal node.
                            Our 'Follow-the-Sun' structural framework ensures that candidate pipeline physics never experience
                            down-time. As your US operations power down, our dedicated offshore intelligence hubs initiate sourcing,
                            ensuring that shortlists are dynamically populated by morning.
                        </p>

                        <ul className="space-y-4 my-8 list-none pl-0">
                            {[
                                "Rapid Elastic Capacity allowing companies to scale resourcing instantly.",
                                "A 40% mapped reduction in generalized cost-per-hire via systemic optimization.",
                                "Deep-tier talent mining algorithms that surface candidates traditional metrics miss."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mb-0">
                            Ultimately, navigating this evolution requires an execution partner who understands both the micro-physics
                            of candidate psychology and the macro-economics of global scale.
                        </p>
                    </motion.div>
                </article>
            </main>

            {/* Global V2 CTA Extension */}
            <CTASectionV2 />
        </Layout>
    );
}
