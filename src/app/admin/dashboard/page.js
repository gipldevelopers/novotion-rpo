"use client";

import { useEffect, useState } from "react";
import { 
    Activity, 
    TrendingUp, 
    Users, 
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    Zap,
    Target,
    Shield,
    Briefcase
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
    { name: "Active Inquiries", value: "128", icon: Users, change: "+24.2%", trending: "up", color: "text-blue-600 bg-blue-50" },
    { name: "Job Postings", value: "3", icon: Briefcase, change: "Live", trending: "neutral", color: "text-indigo-600 bg-indigo-50" },
    { name: "Global Reach", value: "15", icon: Globe, change: "Stable", trending: "neutral", color: "text-slate-600 bg-slate-50" },
    { name: "Avg Completion", value: "98.5%", icon: Activity, change: "+3.1%", trending: "up", color: "text-emerald-600 bg-emerald-50" },
];

function Globe(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    )
}

export default function Dashboard() {
    return (
        <div className="space-y-12">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Executive Dashboard</h1>
                    <p className="text-slate-400 font-light text-sm max-w-lg">Welcome back. Here is the latest execution overview of the Noltven recruitment ecosystem.</p>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-black text-slate-500 uppercase tracking-widest shadow-sm">
                    <Calendar className="w-4 h-4 text-secondary" />
                    Last Updated: March 19, 2026
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        key={stat.name} 
                        className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:border-secondary transition-all"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full translate-x-1/2 -translate-y-1/2 -z-0 group-hover:bg-secondary/5 transition-colors" />
                        <div className="relative z-10">
                            <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center mb-6`}>
                                <stat.icon className="w-7 h-7" />
                            </div>
                            <div className="flex items-end justify-between mb-2">
                                <h3 className="text-3xl font-black text-slate-900 leading-none">{stat.value}</h3>
                                {stat.trending === "up" && (
                                    <div className="flex items-center gap-1 text-emerald-600 text-[10px] font-black uppercase tracking-tight mb-1">
                                        <ArrowUpRight className="w-3 h-3" />
                                        {stat.change}
                                    </div>
                                )}
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.name}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Visuals Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Deployment Status */}
                <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/30">
                    <div className="flex items-center justify-between mb-12">
                        <div className="space-y-1">
                            <h2 className="text-xl font-black text-slate-900 tracking-tight">Global Capability Hubs</h2>
                            <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Ongoing Expansion Status</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">Operational</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-10">
                        {[
                            { region: "United Kingdom", status: "100%", color: "bg-secondary", icon: Shield },
                            { region: "European Union", status: "100%", color: "bg-secondary", icon: Target },
                            { region: "United Arab Emirates", status: "85%", color: "bg-blue-600", icon: Zap },
                            { region: "Asia Pacific (APAC)", status: "60%", color: "bg-slate-900", icon: Activity },
                        ].map((r, i) => (
                            <div key={r.region} className="space-y-3">
                                <div className="flex items-center justify-between px-1 text-xs">
                                    <div className="flex items-center gap-3">
                                        <r.icon className="w-4 h-4 text-slate-400" />
                                        <span className="font-bold text-slate-700">{r.region}</span>
                                    </div>
                                    <span className="font-black text-slate-900">{r.status}</span>
                                </div>
                                <div className="h-3 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100 p-[2px]">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: r.status }}
                                        transition={{ duration: 1.5, delay: i * 0.2 }}
                                        className={`h-full ${r.color} rounded-full`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / Activity Feed */}
                <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden flex flex-col shadow-2xl shadow-slate-900/40">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="relative z-10 flex-1">
                        <h2 className="text-xl font-bold mb-8 tracking-tight">Recent System Logs</h2>
                        <div className="space-y-8">
                            {[
                                { title: "Service Update", text: "Recruitment services data synced", time: "12m ago" },
                                { title: "Database Sync", text: "Successfully connected to Hostinger", time: "2h ago" },
                                { title: "Admin Login", text: "Successful session initiated", time: "1d ago" },
                            ].map((log, i) => (
                                <div key={i} className="flex gap-4 border-l-2 border-white/5 pl-6 py-1 group hover:border-secondary transition-all">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{log.title}</p>
                                            <span className="text-[10px] text-white/20 font-bold">{log.time}</span>
                                        </div>
                                        <p className="text-sm font-medium text-slate-200">{log.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 pt-12 border-t border-white/5 mt-12">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">Execution Readiness</p>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                            <span className="text-xs font-bold">System Status</span>
                            <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest">Premium</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
