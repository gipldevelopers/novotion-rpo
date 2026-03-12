"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const problems = [
    {
        title: "The Hiring Trap",
        description: "Bad hires and slow processes don't just hurt your budget — they slow everything down. By the time you've filled the role, you've already lost weeks of momentum and paid way more than you should have.",
    },
    {
        title: "Marketing That Goes Nowhere",
        description: "Posting without a plan, running ads without a strategy, sending emails nobody reads. It feels like effort but it's not moving the needle. Real growth comes from knowing exactly who you're talking to and why.",
    },
    {
        title: "A Pipeline That Keeps Running Dry",
        description: "Waiting on referrals isn't a growth strategy — it's a gamble. Without a proper outreach system in place, you're always one slow month away from a revenue problem.",
    },
    {
        title: "Drowning in Work That Shouldn't Exist",
        description: "If your team is spending half their day on repetitive tasks, you're not building a business — you're just keeping the lights on. That time could be going somewhere that actually matters.",
    },
    {
        title: "Flying Blind on Finances",
        description: "Not knowing your numbers is one of the most expensive things a business can do. No visibility means no control — and no control means decisions that cost you without you even knowing it.",
    },
];

export function ProblemSection() {
    return (
        <section id="problems" className="py-20 md:py-32 bg-white relative scroll-mt-20">
            <div className="container-premium relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left Column: Sticky Context */}
                    <div className="lg:col-span-5 relative h-full">
                        <div className="lg:sticky lg:top-40 lg:z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-6 md:mb-8">
                                    <Sparkles className="h-4 w-4" />
                                    The Challenge
                                </div>
                                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tighter leading-[1.12] font-display">
                                    What Broken Operations <br />
                                    <span className="text-secondary italic">Actually Cost You</span>
                                </h2>
                                <p className="text-slate-600 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-lg">
                                    Most businesses don't realise how much they're losing until it's too late. Overpaying for the wrong hires, throwing money at marketing that doesn't land, chasing leads that go cold, doing everything manually, and never really knowing where the money's going. It adds up fast. And it doesn't have to be this way.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Scrollable */}
                    <div className="lg:col-span-7 flex flex-col gap-10 md:gap-14">
                        {problems.map((problem, index) => (
                            <motion.div
                                key={problem.title}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="flex flex-col sm:flex-row gap-5 sm:gap-8 group items-start"
                            >
                                {/* Large Numbering */}
                                <div className="flex-shrink-0 pt-0 sm:pt-1">
                                    <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-200 group-hover:text-secondary/30 transition-colors duration-500 inline-block drop-shadow-sm">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Content Area */}
                                <div className="flex-grow">
                                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight font-display">
                                            {problem.title}
                                        </h3>
                                        <div className="hidden sm:block h-px bg-slate-200 flex-grow transition-colors group-hover:bg-secondary/30" />
                                    </div>
                                    <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
