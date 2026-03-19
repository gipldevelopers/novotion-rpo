"use client";

import { useState, useEffect } from "react";
import { 
    FileText, 
    Users, 
    Plus, 
    Calendar, 
    ChevronRight, 
    Briefcase,
    Zap,
    Download,
    Mail,
    Phone,
    Trash2,
    Settings
} from "lucide-react";
import Link from "next/link";

export default function CaseStudiesDashboard() {
    const [activeTab, setActiveTab] = useState("content"); // content | leads
    const [caseStudies, setCaseStudies] = useState([]);
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboardData();
    }, [activeTab]);

    const fetchDashboardData = async () => {
        setLoading(true);
        try {
            if (activeTab === "content") {
                const res = await fetch("/api/case-studies");
                if (res.ok) setCaseStudies(await res.json());
            } else {
                const res = await fetch("/api/admin/case-studies");
                if (res.ok) setLeads(await res.json());
            }
        } finally {
            setLoading(false);
        }
    };

    const deleteStudy = async (id) => {
        if (!confirm("Are you sure you want to delete this case study?")) return;
        const res = await fetch(`/api/admin/case-studies/manage?id=${id}`, { method: 'DELETE' });
        if (res.ok) fetchDashboardData();
    };

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-24 text-slate-900">
            {/* Header with Navigation Tabs */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-4">
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Case Study Platform</h1>
                    <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-2xl w-fit">
                        <button 
                            onClick={() => setActiveTab("content")}
                            className={`flex items-center gap-3 px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === "content" ? 'bg-white text-secondary shadow-sm shadow-slate-200' : 'text-slate-400 hover:text-slate-900'}`}
                        >
                            <FileText className="w-4 h-4" />
                            Content Manager
                        </button>
                        <button 
                            onClick={() => setActiveTab("leads")}
                            className={`flex items-center gap-3 px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === "leads" ? 'bg-white text-emerald-500 shadow-sm shadow-slate-200' : 'text-slate-400 hover:text-slate-900'}`}
                        >
                            <Users className="w-4 h-4" />
                            Study Leads
                        </button>
                    </div>
                </div>

                {activeTab === "content" && (
                    <Link 
                        href="/admin/case-studies/new"
                        className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-secondary transition-all flex items-center gap-3 shadow-xl shadow-slate-900/10 active:scale-95"
                    >
                        Create New Study
                        <Plus className="w-4 h-4" />
                    </Link>
                )}
            </div>

            {loading ? (
                <div className="py-32 text-center font-black uppercase tracking-widest text-slate-300 animate-pulse">Synchronizing performance data...</div>
            ) : (
                <div className="space-y-6">
                    {/* Content Manager Tab */}
                    {activeTab === "content" && (
                        <div className="grid gap-6">
                            {caseStudies.map((study) => (
                                <div key={study.id} className="group bg-white border border-slate-100 p-8 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-48 h-32 rounded-3xl bg-slate-50 overflow-hidden relative border border-slate-50">
                                        <img src={study.image} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center gap-3">
                                            <span className="bg-slate-50 text-slate-900 text-[9px] font-black tracking-widest px-3 py-1 rounded-lg uppercase border border-slate-200">{study.industry}</span>
                                            <span className="text-slate-300 font-bold text-[9px] uppercase tracking-widest">{study.slug}</span>
                                        </div>
                                        <h3 className="text-xl font-black tracking-tight group-hover:text-secondary transition-colors">{study.title}</h3>
                                        <div className="flex items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                            <div className="flex items-center gap-2"><Zap className="w-3.5 h-3.5" /> Dynamic Content</div>
                                            <div className="flex items-center gap-2"><Briefcase className="w-3.5 h-3.5" /> High Impact</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Link 
                                            href={`/admin/case-studies/new?id=${study.id}`}
                                            className="p-4 rounded-2xl bg-slate-50 text-slate-400 hover:bg-white hover:text-secondary hover:shadow-lg transition-all border border-transparent hover:border-slate-100"
                                        >
                                            <Settings className="w-5 h-5" />
                                        </Link>
                                        <button 
                                            onClick={() => deleteStudy(study.id)}
                                            className="p-4 rounded-2xl bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-500 hover:shadow-lg transition-all border border-transparent hover:border-red-100 cursor-pointer"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                        <Link 
                                            href={`/case-studies/${study.slug}`}
                                            target="_blank"
                                            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-50 text-slate-900 font-black uppercase tracking-widest text-[10px] hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100"
                                        >
                                            Live View <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Leads Management Tab */}
                    {activeTab === "leads" && (
                        <div className="space-y-4">
                            {leads.length === 0 ? (
                                <div className="p-20 text-center rounded-[3rem] bg-slate-50 border-2 border-dashed border-slate-200 text-slate-400 font-black uppercase tracking-widest">No leads captured yet.</div>
                            ) : leads.map((lead) => (
                                <div key={lead.id} className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 group hover:border-emerald-500/20 transition-all">
                                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 border border-emerald-100">
                                        <Download className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {new Date(lead.created_at).toLocaleDateString()}
                                            <span className="text-slate-200">|</span>
                                            <Briefcase className="w-3.5 h-3.5 text-secondary" />
                                            Target: {lead.case_study_slug}
                                        </div>
                                        <h3 className="text-xl font-black tracking-tight">{lead.name}</h3>
                                        <div className="flex flex-wrap gap-4 pt-2">
                                            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 text-[10px] font-bold text-slate-600">
                                                <Mail className="w-3.5 h-3.5 text-secondary" /> {lead.email}
                                            </div>
                                            {lead.phone && (
                                                <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 text-[10px] font-bold text-slate-600">
                                                    <Phone className="w-3.5 h-3.5 text-secondary" /> {lead.phone}
                                                </div>
                                            )}
                                            {lead.company && (
                                                <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 text-[10px] font-bold text-slate-600 uppercase tracking-widest italic">
                                                    {lead.company}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <a href={`mailto:${lead.email}`} className="px-8 py-4 rounded-2xl bg-emerald-500 text-white font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all shadow-xl shadow-emerald-500/20 active:scale-95">Respond Now</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
