"use client";

import { useState, useEffect } from "react";
import { 
    Mail, 
    Calendar, 
    User, 
    Phone, 
    MessageSquare, 
    Trash2, 
    CheckCircle2, 
    Briefcase,
    Building2,
    Clock,
    Zap
} from "lucide-react";

export default function InboxDashboard() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMsg, setSelectedMsg] = useState(null);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/messages");
            if (res.ok) setMessages(await res.json());
        } finally {
            setLoading(false);
        }
    };

    const deleteMsg = async (id) => {
        if (!confirm("Delete this inquiry permanentely?")) return;
        const res = await fetch(`/api/admin/messages?id=${id}`, { method: 'DELETE' });
        if (res.ok) {
            fetchMessages();
            setSelectedMsg(null);
        }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-24 text-slate-900">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-secondary text-[10px] font-black uppercase tracking-widest">
                        <MessageSquare className="w-3.5 h-3.5" />
                        Inbound Transmission
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Unified Inbox</h1>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 font-mono uppercase tracking-[0.2em]">
                    Active Inquiries: <span className="text-slate-900 font-black">{messages.length}</span>
                </div>
            </div>

            {loading ? (
                <div className="py-32 text-center font-black uppercase tracking-widest text-slate-300 animate-pulse">Syncing Communication Nodes...</div>
            ) : (
                <div className="grid lg:grid-cols-12 gap-10">
                    
                    {/* List */}
                    <div className="lg:col-span-5 space-y-4">
                        {messages.length === 0 ? (
                            <div className="p-20 text-center rounded-[3rem] bg-slate-50 border border-dashed border-slate-100 text-slate-300 font-black uppercase tracking-widest text-xs">No Messages Found</div>
                        ) : messages.map((msg) => (
                            <div 
                                key={msg.id} 
                                onClick={() => setSelectedMsg(msg)}
                                className={`group p-8 rounded-[2.5rem] border transition-all cursor-pointer relative overflow-hidden ${selectedMsg?.id === msg.id ? 'bg-slate-900 border-slate-900 text-white shadow-2xl' : 'bg-white border-slate-100 hover:border-secondary/20 shadow-sm'}`}
                            >
                                <div className="absolute top-0 right-0 p-4">
                                    <Clock className={`w-3.5 h-3.5 ${selectedMsg?.id === msg.id ? 'text-white/20' : 'text-slate-200'}`} />
                                </div>
                                <div className="space-y-3 relative z-10">
                                    <p className={`text-[9px] font-black uppercase tracking-[0.2em] ${selectedMsg?.id === msg.id ? 'text-secondary' : 'text-slate-400'}`}>
                                        {new Date(msg.created_at).toLocaleDateString()} at {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                    <h3 className="text-lg font-black tracking-tight">{msg.name}</h3>
                                    <p className={`text-xs line-clamp-1 ${selectedMsg?.id === msg.id ? 'text-white/40' : 'text-slate-400 italic'}`}>
                                        {msg.subject || 'Strategic Inquiry'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Detail View */}
                    <div className="lg:col-span-7">
                        {selectedMsg ? (
                            <div className="bg-white border border-slate-100 rounded-[3rem] p-10 md:p-14 shadow-sm space-y-12">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white shadow-xl shadow-secondary/20">
                                                <User className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-black tracking-tight text-slate-900">{selectedMsg.name}</h2>
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic flex items-center gap-2">
                                                    <Briefcase className="w-3 h-3 text-secondary" /> {selectedMsg.company || 'Direct Entity'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => deleteMsg(selectedMsg.id)}
                                        className="p-4 rounded-2xl bg-slate-50 text-slate-300 hover:bg-red-50 hover:text-red-500 transition-all border border-transparent hover:border-red-100"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6 p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Electronic Mail</p>
                                        <a href={`mailto:${selectedMsg.email}`} className="text-sm font-bold text-slate-900 hover:text-secondary transition-colors truncate block">{selectedMsg.email}</a>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Direct Line</p>
                                        <p className="text-sm font-bold text-slate-900">{selectedMsg.phone || 'NO TEL PROVIDED'}</p>
                                    </div>
                                    <div className="col-span-full pt-4 border-t border-slate-200">
                                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Inquiry Intent</p>
                                        <p className="text-sm font-black text-secondary leading-tight uppercase tracking-tight">{selectedMsg.subject || 'Strategic Recruitment Business Development'}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Zap className="w-4 h-4 text-emerald-500" />
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Transmission Payload</h4>
                                    </div>
                                    <div className="p-10 rounded-[2.5rem] bg-white border border-slate-100 text-slate-600 font-light leading-relaxed text-base italic shadow-sm">
                                        "{selectedMsg.message}"
                                    </div>
                                </div>

                                <div className="pt-10 flex items-center justify-between border-t border-slate-100">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">{selectedMsg.id} | NODE_LOG_SECURE</span>
                                    <a 
                                        href={`mailto:${selectedMsg.email}?subject=Re: ${selectedMsg.subject}`}
                                        className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-secondary transition-all shadow-xl shadow-slate-900/10 active:scale-95"
                                    >
                                        Draft Response
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center p-20 rounded-[4rem] bg-slate-50 border-2 border-dashed border-slate-200 text-slate-300 space-y-6">
                                <Mail className="w-16 h-16 opacity-30" />
                                <p className="font-black uppercase tracking-[0.4em] text-[10px] text-center max-w-[200px] leading-loose">
                                    Select an inquiry node to decrypt transmission details.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
