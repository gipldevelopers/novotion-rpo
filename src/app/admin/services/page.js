"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';
import { 
    Plus, 
    Edit2, 
    Trash2, 
    Search, 
    Filter,
    ChevronLeft,
    ChevronRight,
    History,
    Settings2,
    Briefcase
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/services");
            const data = await res.json();
            if (data.success) {
                setServices(data.data);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to PERMANENTLY delete this service? All pillars and FAQs within it will be LOST.")) return;
        
        try {
            const res = await fetch(`/api/services/${id}`, { method: "DELETE" });
            if (res.ok) fetchServices();
        } catch (error) {
            console.error("Delete Error:", error);
        }
    };

    const filteredServices = services.filter(s => 
        s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        s.service_id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-10">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-4">
                        <Briefcase className="w-8 h-8 text-secondary" />
                        Service Architecture
                    </h1>
                    <p className="text-slate-400 font-light text-sm max-w-lg">Manage, refine, and deploy global recruitment execution strategies across the ecosystem.</p>
                </div>
                <Button 
                    asChild
                    className="bg-secondary hover:bg-slate-900 text-white rounded-2xl h-14 px-8 font-black uppercase tracking-widest text-[11px] shadow-xl shadow-secondary/20 transition-all flex items-center justify-center gap-2"
                >
                    <Link href="/admin/services/new">
                        <Plus className="w-4 h-4" />
                        Deploy New Service
                    </Link>
                </Button>
            </div>

            {/* Filter/Search Bar */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/30 flex flex-col md:flex-row gap-6 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                        type="text" 
                        placeholder="Filter by title, ID, or deployment region..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-14 pr-6 text-sm font-medium outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-slate-600"
                    />
                </div>
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-6 py-4 bg-slate-50 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-white hover:shadow-lg hover:text-slate-900 transition-all border border-transparent hover:border-slate-100">
                        <Filter className="w-3 h-3" />
                        Status
                    </button>
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-6 py-4 bg-slate-50 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-white hover:shadow-lg hover:text-slate-900 transition-all border border-transparent hover:border-slate-100">
                        <History className="w-3 h-3" />
                        Recent
                    </button>
                </div>
            </div>

            {/* Services Table */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/40 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Execution Block</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Deployment Slug</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Pillars</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Created</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {loading ? (
                                <tr>
                                    <td colSpan="5" className="px-8 py-20 text-center">
                                        <div className="inline-flex items-center gap-3 text-slate-400 animate-pulse">
                                            <Settings2 className="w-5 h-5 animate-spin" />
                                            <span className="text-xs font-black uppercase tracking-widest">Accessing Architecture Layers...</span>
                                        </div>
                                    </td>
                                </tr>
                            ) : filteredServices.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-8 py-20 text-center text-slate-400 text-xs font-medium italic">
                                        No active services found matching your current architecture filters.
                                    </td>
                                </tr>
                            ) : filteredServices.map((service, i) => (
                                <tr key={service.id} className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary font-black text-xs">
                                                {service.title.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 text-sm group-hover:text-secondary transition-colors">{service.title}</p>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{service.service_id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-500 font-bold text-[10px] tracking-tight">{service.slug}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                            <span className="text-xs font-bold text-slate-700">{service.whatYouGet?.length || 0} Layers</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <p className="text-xs font-medium text-slate-500">{new Date(service.created_at).toLocaleDateString()}</p>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Button 
                                                asChild
                                                variant="ghost"
                                                className="p-3 bg-slate-50 rounded-xl text-slate-500 hover:bg-secondary hover:text-white hover:scale-110 transition-all shadow-sm"
                                            >
                                                <Link href={`/admin/services/${service.id}/edit`}>
                                                    <Edit2 className="w-4 h-4" />
                                                </Link>
                                            </Button>
                                            <button 
                                                onClick={() => handleDelete(service.id)}
                                                className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:bg-red-500 hover:text-white hover:scale-110 transition-all shadow-sm"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer / Pagination */}
                <div className="px-8 py-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Showing {filteredServices.length} Active System Deployments</p>
                    <div className="flex items-center gap-2">
                        <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-slate-900 transition-colors shadow-sm disabled:opacity-50" disabled>
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-slate-900 transition-colors shadow-sm disabled:opacity-50" disabled>
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
