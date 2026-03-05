"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { Quote, Star, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const testimonials = [
    {
        quote: "Novotion transformed our hiring process completely. We reduced time-to-hire by 45% and improved quality.",
        author: "Sarah Mitchell",
        title: "VP of HR",
        img: "11",
        tag: "Digital Growth"
    },
    {
        quote: "Their strategic approach helped us scale from 50 to 200 employees in record time without quality loss.",
        author: "James Thompson",
        title: "CEO",
        img: "12",
        tag: "Scalability"
    },
    {
        quote: "The cost savings alone justified the partnership. Their global network is unmatched in the industry.",
        author: "Michael Chen",
        title: "Talent Director",
        img: "13",
        tag: "Efficiency"
    },
    {
        quote: "Precision matching at its best. Every candidate presented was a culture-first fit for our engineering team.",
        author: "Elena Rodriguez",
        title: "CTO",
        img: "14",
        tag: "Culture Fit"
    },
    {
        quote: "A rare partner that actually delivers on its promises. Highly recommended for offshore scaling.",
        author: "David Wilson",
        title: "Operations Head",
        img: "15",
        tag: "Partnership"
    },
];

const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

export function TestimonialsSection() {
    const x = useMotionValue(0);
    const containerRef = useRef(null);
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useAnimationFrame((t, delta) => {
        if (!isHovered && !isDragging) {
            let moveBy = -0.5 * (delta / 16);
            let nextX = x.get() + moveBy;

            if (scrollRef.current) {
                const totalWidth = scrollRef.current.scrollWidth;
                const setWidth = totalWidth / 3;
                if (nextX <= -setWidth * 2) {
                    nextX += setWidth;
                }
            }
            x.set(nextX);
        }
    });

    useEffect(() => {
        const unsubscribe = x.on("change", (latest) => {
            if (isDragging && scrollRef.current) {
                const totalWidth = scrollRef.current.scrollWidth;
                const setWidth = totalWidth / 3;

                if (latest <= -setWidth * 2) {
                    x.set(latest + setWidth);
                } else if (latest >= -setWidth) {
                    x.set(latest - setWidth);
                }
            }
        });
        return () => unsubscribe();
    }, [isDragging, x]);

    return (
        <section id="testimonials" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden scroll-mt-32">
            <div className="relative z-10">
                {/* Section Header */}
                <div className="container-premium text-center max-w-3xl mx-auto mb-12 md:mb-20 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 shadow-sm"
                    >
                        <Sparkles className="h-4 w-4" />
                        Client Success
                    </motion.div>
                    -
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter">
                        Partnering for Success
                    </h2>

                    <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                        Join the ranks of market leaders who have revolutionized their talent acquisition with our strategic RPO framework.
                    </p>
                </div>

                {/* Infinite + Draggable Marquee */}
                <div
                    ref={containerRef}
                    className="relative cursor-grab active:cursor-grabbing overflow-visible select-none px-4"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Shadow Overlays */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />

                    <motion.div
                        ref={scrollRef}
                        drag="x"
                        dragConstraints={{ left: -10000, right: 10000 }}
                        dragElastic={0.1}
                        style={{ x }}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={() => setIsDragging(false)}
                        className="flex gap-6 py-10 w-max"
                    >
                        {infiniteTestimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[450px] p-6 md:p-10 rounded-xl bg-white border border-slate-100 hover:border-secondary/20 transition-all duration-500 relative group shadow-sm hover:shadow-xl hover:shadow-slate-200/50 pointer-events-auto"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-secondary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                                <div className="relative z-10 flex flex-col h-full items-start whitespace-normal pointer-events-none">
                                    <div className="flex justify-between items-start w-full mb-6 md:mb-10">
                                        <div className="flex gap-0.5 md:gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-secondary text-secondary" />
                                            ))}
                                        </div>
                                        <span className="text-[8px] md:text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em]">{testimonial.tag}</span>
                                    </div>

                                    <Quote className="absolute top-6 right-8 md:top-8 md:right-10 h-8 w-8 md:h-10 md:w-10 text-slate-200 group-hover:text-secondary opacity-10 transition-colors" />

                                    <p className="text-slate-600 text-sm md:text-lg font-light leading-relaxed mb-8 md:mb-12 flex-grow italic">
                                        "{testimonial.quote}"
                                    </p>

                                    <div className="flex items-center gap-3 md:gap-4 border-t border-slate-100 pt-6 md:pt-8 w-full mt-auto">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-slate-100 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                                            <Image
                                                src={`https://i.pravatar.cc/100?img=${testimonial.img}`}
                                                alt={testimonial.author}
                                                fill
                                                className="object-cover"
                                                draggable={false}
                                            />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-slate-800 text-sm md:text-base mb-0.5">{testimonial.author}</p>
                                            <p className="text-slate-400 text-[11px] md:text-[13px] font-light">
                                                {testimonial.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
