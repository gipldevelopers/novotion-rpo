"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { 
    Save, 
    ArrowLeft, 
    Plus, 
    Trash2, 
    Layout, 
    Image as ImageIcon, 
    FileText, 
    Target, 
    Briefcase,
    Zap,
    ShieldAlert,
    BarChart3
} from "lucide-react";

export default function EditCaseStudy() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    
    const [formData, setFormData] = useState({
        id: null,
        slug: "",
        title: "",
        industry: "",
        location: "",
        excerpt: "",
        overview: "",
        challenges: [{ title: "", description: "" }],
        solutions: [{ title: "", description: "" }],
        results: {
            summary: "",
            metrics: [{ label: "", value: "" }],
            filledRoles: [""]
        },
        image: "/assets/case-studies/manchester-construction.jpg"
    });

    // Fetch existing data if editing
    useEffect(() => {
        if (id) {
            fetchStudy(id);
        }
    }, [id]);

    const fetchStudy = async (studyId) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/case-studies?id=${studyId}`);
            if (res.ok) {
                const data = await res.json();
                setFormData({
                    ...data,
                    challenges: data.challenges || [],
                    solutions: data.solutions || [],
                    results: {
                        summary: data.results?.summary || "",
                        metrics: data.results?.metrics || [],
                        filledRoles: data.results?.filledRoles || []
                    }
                });
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            const res = await fetch("/api/admin/case-studies/manage", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                router.push("/admin/case-studies");
            }
        } finally {
            setSaving(false);
        }
    };

    // Generic Add/Remove for arrays
    const addChallenge = () => setFormData({...formData, challenges: [...formData.challenges, { title: "", description: "" }]});
    const removeChallenge = (index) => setFormData({...formData, challenges: formData.challenges.filter((_, i) => i !== index)});

    const addSolution = () => setFormData({...formData, solutions: [...formData.solutions, { title: "", description: "" }]});
    const removeSolution = (index) => setFormData({...formData, solutions: formData.solutions.filter((_, i) => i !== index)});

    const addMetric = () => setFormData({...formData, results: {...formData.results, metrics: [...formData.results.metrics, { label: "", value: "" }]}});
    const removeMetric = (index) => setFormData({...formData, results: {...formData.results, metrics: formData.results.metrics.filter((_, i) => i !== index)}});

    const addRole = () => setFormData({...formData, results: {...formData.results, filledRoles: [...formData.results.filledRoles, ""]}});
    const removeRole = (index) => setFormData({...formData, results: {...formData.results, filledRoles: formData.results.filledRoles.filter((_, i) => i !== index)}});

    if (loading) return <div className="p-20 text-center font-black uppercase tracking-widest text-slate-400">Loading study data...</div>;

    return (
        <div className="max-w-5xl mx-auto space-y-12 pb-24">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <button 
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-secondary transition-colors mb-4"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to List
                    </button>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">{id ? 'Edit' : 'Create'} Case Study</h1>
                </div>
                <button 
                    onClick={handleSave}
                    disabled={saving}
                    className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-secondary transition-all flex items-center gap-3 shadow-xl shadow-slate-900/10 disabled:opacity-50"
                >
                    {saving ? 'Syncing...' : 'Save Study'}
                    <Save className="w-4 h-4" />
                </button>
            </div>

            <form className="grid lg:grid-cols-12 gap-10">
                {/* Left: Metadata */}
                <div className="lg:col-span-8 space-y-8">
                    
                    {/* Basic Info */}
                    <div className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm space-y-8 text-slate-900">
                        <div className="flex items-center gap-3 text-secondary">
                            <FileText className="w-5 h-5" />
                            <h2 className="text-sm font-black uppercase tracking-widest">General Content</h2>
                        </div>

                        <div className="grid gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Display Title</label>
                                <input 
                                    className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm font-bold outline-none ring-2 ring-transparent focus:ring-secondary/20 transition-all"
                                    placeholder="Report Title..."
                                    value={formData.title}
                                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Unique Slug (URL)</label>
                                    <input 
                                        className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-[10px] font-black uppercase tracking-widest outline-none ring-2 ring-transparent focus:ring-secondary/20 transition-all"
                                        placeholder="manchester-construction..."
                                        value={formData.slug}
                                        onChange={(e) => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/ /g, '-')})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Industry Sector</label>
                                    <input 
                                        className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm font-bold outline-none ring-2 ring-transparent focus:ring-secondary/20 transition-all"
                                        placeholder="Healthcare, IT..."
                                        value={formData.industry}
                                        onChange={(e) => setFormData({...formData, industry: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Executive Overview (Detail Page)</label>
                                <textarea 
                                    className="w-full bg-slate-50 border-none rounded-[2rem] py-6 px-8 text-sm font-medium leading-relaxed outline-none ring-2 ring-transparent focus:ring-secondary/20 transition-all h-64"
                                    placeholder="Enter full client narrative..."
                                    value={formData.overview}
                                    onChange={(e) => setFormData({...formData, overview: e.target.value})}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Challenges Section */}
                    <div className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm space-y-8 text-slate-900">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-red-500">
                                <ShieldAlert className="w-5 h-5" />
                                <h2 className="text-sm font-black uppercase tracking-widest">Key Challenges</h2>
                            </div>
                            <button type="button" onClick={addChallenge} className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all cursor-pointer">
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>
                        
                        <div className="space-y-6">
                            {(formData.challenges || []).map((c, i) => (
                                <div key={i} className="p-6 bg-slate-50 rounded-2xl relative group">
                                    <button type="button" onClick={() => removeChallenge(i)} className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors cursor-pointer">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                    <div className="grid gap-4">
                                        <input 
                                            placeholder="Challenge Title"
                                            className="bg-transparent border-none text-sm font-black text-slate-900 outline-none w-11/12"
                                            value={c.title}
                                            onChange={(e) => {
                                                const newC = [...formData.challenges];
                                                newC[i].title = e.target.value;
                                                setFormData({...formData, challenges: newC});
                                            }}
                                        />
                                        <textarea 
                                            placeholder="Detailed breakdown..."
                                            className="bg-transparent border-none text-xs font-medium text-slate-500 outline-none resize-none h-12"
                                            value={c.description}
                                            onChange={(e) => {
                                                const newC = [...formData.challenges];
                                                newC[i].description = e.target.value;
                                                setFormData({...formData, challenges: newC});
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Solutions Section */}
                    <div className="p-10 rounded-[3rem] bg-slate-900 text-white shadow-sm space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2" />
                        
                        <div className="flex items-center justify-between relative z-10">
                            <div className="flex items-center gap-3 text-emerald-400">
                                <Zap className="w-5 h-5" />
                                <h2 className="text-sm font-black uppercase tracking-widest">Strategic Solutions</h2>
                            </div>
                            <button type="button" onClick={addSolution} className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/40 hover:bg-emerald-500 hover:text-white transition-all cursor-pointer">
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-6 relative z-10">
                            {(formData.solutions || []).map((s, i) => (
                                <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-2xl relative group">
                                    <button type="button" onClick={() => removeSolution(i)} className="absolute top-4 right-4 text-white/20 hover:text-emerald-400 transition-colors cursor-pointer">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                    <div className="grid gap-4">
                                        <input 
                                            placeholder="Solution Strategy"
                                            className="bg-transparent border-none text-sm font-black text-white outline-none w-11/12"
                                            value={s.title}
                                            onChange={(e) => {
                                                const newS = [...formData.solutions];
                                                newS[i].title = e.target.value;
                                                setFormData({...formData, solutions: newS});
                                            }}
                                        />
                                        <textarea 
                                            placeholder="Implementation steps..."
                                            className="bg-transparent border-none text-xs font-medium text-white/40 outline-none resize-none h-12"
                                            value={s.description}
                                            onChange={(e) => {
                                                const newS = [...formData.solutions];
                                                newS[i].description = e.target.value;
                                                setFormData({...formData, solutions: newS});
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Sidebar / Summary */}
                <div className="lg:col-span-4 space-y-8">
                    
                    {/* Visual Asset */}
                    <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm space-y-6 text-slate-900">
                        <div className="flex items-center gap-3 text-blue-500">
                            <ImageIcon className="w-5 h-5" />
                            <h2 className="text-sm font-black uppercase tracking-widest">Hero Asset</h2>
                        </div>
                        <div className="aspect-video rounded-2xl bg-slate-100 relative overflow-hidden group border border-slate-50">
                            {formData.image ? (
                                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                    <ImageIcon className="w-12 h-12" />
                                </div>
                            )}
                        </div>
                        
                        <div className="space-y-4">
                            <label className="block">
                                <span className="sr-only">Choose profile photo</span>
                                <input 
                                    type="file" 
                                    accept="image/*"
                                    onChange={async (e) => {
                                        const file = e.target.files?.[0];
                                        if (!file) return;
                                        
                                        // Preview Locally
                                        const reader = new FileReader();
                                        reader.onloadend = async () => {
                                            const base64String = reader.result;
                                            
                                            // 1. Upload to Server
                                            const res = await fetch("/api/admin/upload", {
                                                method: "POST",
                                                headers: { "Content-Type": "application/json" },
                                                body: JSON.stringify({ image: base64String, filename: file.name })
                                            });
                                            
                                            if (res.ok) {
                                                const data = await res.json();
                                                setFormData({ ...formData, image: data.url });
                                            }
                                        };
                                        reader.readAsDataURL(file);
                                    }}
                                    className="block w-full text-xs text-slate-500 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:tracking-widest file:bg-slate-900 file:text-white hover:file:bg-secondary transition-all cursor-pointer"
                                />
                            </label>
                            
                            {/* Manual Path Support as Fallback */}
                            <div className="pt-4 border-t border-slate-100">
                                <label className="text-[9px] font-black uppercase tracking-widest text-slate-300 ml-1">Asset URL Path</label>
                                <input 
                                    className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-[10px] font-black uppercase tracking-widest outline-none mt-1"
                                    placeholder="/assets/case-studies/..."
                                    value={formData.image}
                                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Results / Metrics */}
                    <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-sm space-y-6 text-slate-900">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-secondary">
                                <BarChart3 className="w-5 h-5" />
                                <h2 className="text-sm font-black uppercase tracking-widest">Key Metrics</h2>
                            </div>
                            <button type="button" onClick={addMetric} className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-slate-300 hover:text-secondary transition-all cursor-pointer">
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {(formData.results?.metrics || []).map((m, i) => (
                                <div key={i} className="flex gap-2">
                                    <input 
                                        className="w-full bg-white border-none rounded-xl py-3 px-4 text-[10px] font-black uppercase tracking-widest outline-none"
                                        placeholder="Value (e.g. 60+)"
                                        value={m.value}
                                        onChange={(e) => {
                                            const newM = [...formData.results.metrics];
                                            newM[i].value = e.target.value;
                                            setFormData({...formData, results: {...formData.results, metrics: newM}});
                                        }}
                                    />
                                    <input 
                                        className="w-full bg-white border-none rounded-xl py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest outline-none"
                                        placeholder="Label..."
                                        value={m.label}
                                        onChange={(e) => {
                                            const newM = [...formData.results.metrics];
                                            newM[i].label = e.target.value;
                                            setFormData({...formData, results: {...formData.results, metrics: newM}});
                                        }}
                                    />
                                    <button type="button" onClick={() => removeMetric(i)} className="p-2 text-slate-200 hover:text-red-500 transition-colors cursor-pointer"><Trash2 className="w-4 h-4" /></button>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-slate-200 space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Filled Roles</h3>
                                <button type="button" onClick={addRole} className="w-6 h-6 rounded-md bg-white flex items-center justify-center text-slate-300 hover:text-secondary transition-all cursor-pointer">
                                    <Plus className="w-3.5 h-3.5" />
                                </button>
                            </div>
                            {(formData.results?.filledRoles || []).map((role, i) => (
                                <div key={i} className="flex gap-2">
                                    <input 
                                        className="w-full bg-white border-none rounded-xl py-3 px-4 text-[10px] font-medium text-slate-600 outline-none"
                                        placeholder="Role Title..."
                                        value={role}
                                        onChange={(e) => {
                                            const newRoles = [...formData.results.filledRoles];
                                            newRoles[i] = e.target.value;
                                            setFormData({...formData, results: {...formData.results, filledRoles: newRoles}});
                                        }}
                                    />
                                    <button type="button" onClick={() => removeRole(i)} className="p-2 text-slate-200 hover:text-red-500 transition-colors cursor-pointer"><Trash2 className="w-3 h-3" /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
