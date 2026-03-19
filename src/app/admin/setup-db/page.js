"use client";

import { useState } from "react";
import { Database, Zap, ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export default function DBSetupPage() {
    const [status, setStatus] = useState("idle");
    const [result, setResult] = useState(null);
    const [isSyncing, setIsSyncing] = useState(false);

    const handleSync = async () => {
        setIsSyncing(true);
        setStatus("syncing");
        try {
            const res = await fetch("/api/admin/setup-db");
            const data = await res.json();
            if (res.ok && data.success) {
                setResult(data);
                setStatus("success");
            } else {
                setResult(data);
                setStatus("error");
            }
        } catch (err) {
            setResult({ error: "Network communication failure." });
            setStatus("error");
        } finally {
            setIsSyncing(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-12 py-12">
            <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <Database className="w-3 h-3" />
                    System Infrastructure
                </div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tight">Database Synchronization</h1>
                <p className="text-slate-500 font-light max-w-xl leading-relaxed">
                    Update your remote Hostinger database to match the new static-first architecture. This will safely remove legacy tables and provision new lead tracking structures.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Action Card */}
                <div className="p-10 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden group border border-white/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-10 border border-white/10">
                            <Zap className="w-7 h-7 text-secondary" />
                        </div>
                        
                        <h2 className="text-2xl font-bold mb-4 tracking-tight">Run Full Sync</h2>
                        <ul className="space-y-4 mb-12 flex-grow">
                            <li className="flex gap-3 text-sm text-white/60 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                Drop Legacy 'Services' Table
                            </li>
                            <li className="flex gap-3 text-sm text-white/60 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                Initialize Dynamic 'Case Studies' Table
                            </li>
                            <li className="flex gap-3 text-sm text-white/60 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                Seed Manchester Growth Content
                            </li>
                            <li className="flex gap-3 text-sm text-white/60 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                Initialize 'Study Leads' Table
                            </li>
                            <li className="flex gap-3 text-sm text-white/60 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                Verify Connection Permissions
                            </li>
                        </ul>

                        <button 
                            onClick={handleSync}
                            disabled={isSyncing}
                            className={`w-full py-4 rounded-2xl text-[12px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 ${
                                status === "success" 
                                ? "bg-emerald-500 text-white shadow-emerald-500/20" 
                                : "bg-secondary hover:bg-white text-white hover:text-slate-900 shadow-secondary/20"
                            } disabled:opacity-50`}
                        >
                            {isSyncing ? "Processing Sync..." : status === "success" ? "Sync Successful" : "Run Synchronization"}
                            {!isSyncing && <ArrowRight className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

                {/* Status/Output Card */}
                <div className="p-10 rounded-[3rem] bg-white border border-slate-100 flex flex-col shadow-lg shadow-slate-200/50">
                    <div className="flex items-center justify-between mb-8">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Sync Output</span>
                        {status === "success" && (
                            <div className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[9px] font-bold uppercase tracking-widest">
                                Database Ready
                            </div>
                        )}
                    </div>

                    <div className="flex-grow flex flex-col justify-center items-center text-center p-6 bg-slate-50 rounded-[2rem] border border-slate-100 border-dashed">
                        {status === "idle" ? (
                            <div className="space-y-4">
                                <Database className="w-12 h-12 text-slate-200 mx-auto" />
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-loose">Waiting for command...<br/>Please trigger synchronization.</p>
                            </div>
                        ) : status === "syncing" ? (
                            <div className="space-y-6">
                                <div className="w-12 h-12 rounded-full border-2 border-slate-200 border-t-secondary animate-spin mx-auto" />
                                <p className="text-xs font-black text-slate-900 uppercase tracking-widest">Bridging Connection...</p>
                            </div>
                        ) : status === "success" ? (
                            <div className="space-y-8 text-left w-full">
                                <div className="flex items-center gap-4 text-emerald-600">
                                    <CheckCircle2 className="w-8 h-8 shrink-0" />
                                    <p className="text-sm font-black uppercase tracking-tight leading-tight">Sync Completed<br/>Successfully</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Verified Tables:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {result.tables?.map(t => (
                                            <span key={t} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-700 capitalize">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6 text-center">
                                <AlertTriangle className="w-12 h-12 text-red-400 mx-auto" />
                                <div className="space-y-2">
                                    <p className="text-sm font-black text-red-500 uppercase tracking-tight">Access Denied</p>
                                    <p className="text-[10px] font-medium text-slate-400 leading-relaxed max-w-[200px] mx-auto">
                                        Remote host refused connection. Ensure your IP is whitelisted in Hostinger Remote MySQL.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
