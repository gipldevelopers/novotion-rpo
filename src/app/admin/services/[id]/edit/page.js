"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ServiceForm from "@/components/admin/ServiceForm";
import Link from "next/link";
import { ArrowLeft, Edit2, Settings2 } from "lucide-react";
import { motion } from "framer-motion";

export default function EditServicePage() {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const res = await fetch(`/api/services/${id}`);
                const data = await res.json();
                if (data.success) {
                    setService(data.data);
                }
            } catch (error) {
                console.error("Fetch Error:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchService();
    }, [id]);

    if (loading) return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
            <Settings2 className="w-12 h-12 text-slate-200 animate-spin" />
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Architectural Layer...</p>
        </div>
    );

    if (!service) return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
            <h2 className="text-2xl font-black text-slate-900">Architecture Not Found</h2>
            <Link href="/admin/services" className="text-secondary font-bold hover:underline">Back to Safety</Link>
        </div>
    );

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
                            <Edit2 className="w-8 h-8 text-secondary" />
                            Refining Architecture: {service.title}
                        </h1>
                        <p className="text-slate-400 font-light text-sm max-w-lg">Updating the global execution layer for {service.service_id}. Changes are synced across all production nodes.</p>
                    </div>
                </div>
            </div>

            {/* Form Content */}
            <div className="max-w-6xl mx-auto">
                <ServiceForm editingService={service} />
            </div>
        </div>
    );
}
