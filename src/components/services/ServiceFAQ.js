"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

export function ServiceFAQ({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="py-20 md:py-32 bg-slate-50 relative border-t border-slate-100">
            <div className="container-premium px-6 md:px-12 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-tight font-display">
                        Frequently Asked <span className="text-secondary italic">Questions</span>
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            
                            return (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`bg-white border ${isOpen ? 'border-secondary/30 shadow-md' : 'border-slate-200'} rounded-2xl overflow-hidden transition-all duration-300`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between gap-6 focus:outline-none"
                                    >
                                        <h3 className={`text-lg md:text-xl font-bold tracking-tight pr-8 ${isOpen ? 'text-secondary' : 'text-slate-900'}`}>
                                            {faq.question}
                                        </h3>
                                        <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-secondary text-white' : 'bg-slate-50 text-slate-400'}`}>
                                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                        </div>
                                    </button>
                                    
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-6 md:px-8 pb-8 pt-2">
                                                    <p className="text-slate-600 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
