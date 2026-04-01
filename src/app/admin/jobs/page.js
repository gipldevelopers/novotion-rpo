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
    Users
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AdminJobsPage() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/jobs");
            const data = await res.json();
            if (Array.isArray(data)) {
                setJobs(data);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (slug) => {
        if (!window.confirm("Are you sure you want to PERMANENTLY delete this job post?")) return;
        
        try {
            const res = await fetch(`/api/jobs/${slug}`, { method: "DELETE" });
            if (res.ok) fetchJobs();
        } catch (error) {
            console.error("Delete Error:", error);
        }
    };

    const toggleStatus = async (job) => {
        try {
            const res = await fetch(`/api/jobs/${job.slug}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...job, is_active: !job.is_active })
            });
            if (res.ok) fetchJobs();
        } catch (error) {
            console.error("Toggle Status Error:", error);
        }
    };

    const filteredJobs = jobs.filter(j => 
        j.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        j.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-10">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-4">
                        <Users className="w-8 h-8 text-secondary" />
                        Recruitment Pipeline
                    </h1>
                    <p className="text-slate-400 font-light text-sm max-w-lg">Manage open deployment opportunities and strategic talent acquisition across all global sectors.</p>
                </div>
                <Button 
                    asChild
                    className="bg-secondary hover:bg-slate-900 text-white rounded-2xl h-14 px-8 font-black uppercase tracking-widest text-[11px] shadow-xl shadow-secondary/20 transition-all flex items-center justify-center gap-2"
                >
                    <Link href="/admin/jobs/new">
                        <Plus className="w-4 h-4" />
                        Post New Position
                    </Link>
                </Button>
            </div>

            {/* Filter/Search Bar */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/30 flex flex-col md:flex-row gap-6 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                        type="text" 
                        placeholder="Search positions, departments, or locations..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-14 pr-6 text-sm font-medium outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-slate-600"
                    />
                </div>
            </div>

            {/* Jobs Table */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/40 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Position Details</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Department</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {loading ? (
                                <tr>
                                    <td colSpan="4" className="px-8 py-20 text-center">
                                        <div className="inline-flex items-center gap-3 text-slate-400 animate-pulse">
                                            <Settings2 className="w-5 h-5 animate-spin" />
                                            <span className="text-xs font-black uppercase tracking-widest">Accessing Talent Data...</span>
                                        </div>
                                    </td>
                                </tr>
                            ) : filteredJobs.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="px-8 py-20 text-center text-slate-400 text-xs font-medium italic">
                                        No active positions found in current pipeline.
                                    </td>
                                </tr>
                            ) : filteredJobs.map((job) => (
                                <tr key={job.id} className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary font-black text-xs">
                                                {job.title.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 text-sm group-hover:text-secondary transition-colors">{job.title}</p>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{job.location}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-500 font-bold text-[10px] tracking-tight">{job.department}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <button 
                                            onClick={() => toggleStatus(job)}
                                            className={`flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${
                                                job.is_active 
                                                ? "bg-emerald-50 text-emerald-600 border border-emerald-100" 
                                                : "bg-slate-100 text-slate-400 border border-slate-200"
                                            }`}
                                        >
                                            <div className={`w-1.5 h-1.5 rounded-full ${job.is_active ? "bg-emerald-500 animate-pulse" : "bg-slate-400"}`} />
                                            {job.is_active ? "Active" : "Draft"}
                                        </button>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Button 
                                                asChild
                                                variant="ghost"
                                                className="p-3 bg-slate-50 rounded-xl text-slate-500 hover:bg-secondary hover:text-white hover:scale-110 transition-all shadow-sm"
                                            >
                                                <Link href={`/admin/jobs/${job.slug}/edit`}>
                                                    <Edit2 className="w-4 h-4" />
                                                </Link>
                                            </Button>
                                            <button 
                                                onClick={() => handleDelete(job.slug)}
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

                <div className="px-8 py-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tracking {filteredJobs.length} Talent Pipelines</p>
                </div>
            </div>
        </div>
    );
}
