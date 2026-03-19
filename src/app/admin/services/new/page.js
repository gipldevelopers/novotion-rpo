"use client";

import ServiceForm from "@/components/admin/ServiceForm";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NewServicePage() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
                <div className="space-y-4">
                    <Link href="/admin/services" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-secondary transition-colors">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Back to Architecture
                    </Link>
                    <div className="space-y-2">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                            <Sparkles className="w-8 h-8 text-secondary" />
                            Deploy New Strategy
                        </h1>
                        <p className="text-slate-400 font-light text-sm max-w-lg">Define the full execution layer from high-level narrative down to strategic task pillars.</p>
                    </div>
                </div>
            </div>

            {/* Form Content */}
            <div className="max-w-6xl mx-auto">
                <ServiceForm />
            </div>
        </div>
    );
}
