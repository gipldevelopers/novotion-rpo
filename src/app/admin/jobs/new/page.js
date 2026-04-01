"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Sparkles, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function NewJobPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [directives, setDirectives] = useState([""]);
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        department: "",
        location: "",
        type: "Full-Time",
        description: "",
        summary: ""
    });

    const handleDirectiveChange = (index, value) => {
        const newDirectives = [...directives];
        newDirectives[index] = value;
        setDirectives(newDirectives);
    };

    const addDirective = () => setDirectives([...directives, ""]);
    const removeDirective = (index) => setDirectives(directives.filter((_, i) => i !== index));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/jobs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, directives })
            });
            if (res.ok) router.push("/admin/jobs");
        } catch (error) {
            console.error("Save Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-10 py-10">
            <div className="flex items-center justify-between">
                <Link href="/admin/jobs" className="flex items-center gap-2 text-slate-400 hover:text-secondary transition-all font-bold text-[10px] uppercase tracking-widest">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Pipeline
                </Link>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-slate-500 font-bold text-[10px] uppercase tracking-widest">
                    <Sparkles className="w-3 h-3 text-secondary" />
                    Talent Architecture
                </div>
            </div>

            <div className="bg-white rounded-[3rem] border border-slate-100 shadow-2xl p-10 md:p-16 space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Deploy New Position</h1>
                    <p className="text-slate-500 font-light max-w-xl leading-relaxed">Map the DNA of your next high-impact team member. Ensure all strategic directives are clear and concise.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Title */}
                        <div className="space-y-3">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Position Title</Label>
                            <Input 
                                required
                                value={formData.title}
                                onChange={(e) => setFormData({...formData, title: e.target.value})}
                                placeholder="e.g. Senior Recruitment Architect" 
                                className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                            />
                        </div>

                        {/* Slug */}
                        <div className="space-y-3">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Deployment Slug</Label>
                            <Input 
                                required
                                value={formData.slug}
                                onChange={(e) => setFormData({...formData, slug: e.target.value})}
                                placeholder="senior-recruitment-architect" 
                                className="h-14 rounded-2xl border-slate-100 bg-slate-50/50 font-mono text-xs"
                            />
                        </div>

                        {/* Department */}
                        <div className="space-y-3">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Strategic Department</Label>
                            <Input 
                                required
                                value={formData.department}
                                onChange={(e) => setFormData({...formData, department: e.target.value})}
                                placeholder="e.g. Operations / Recruitment" 
                                className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                            />
                        </div>

                        {/* Location */}
                        <div className="space-y-3">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Global Location</Label>
                            <Input 
                                required
                                value={formData.location}
                                onChange={(e) => setFormData({...formData, location: e.target.value})}
                                placeholder="e.g. London, UK / Remote" 
                                className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Pipeline Snippet (Grid Description)</Label>
                        <Textarea 
                            required
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                            placeholder="A concise description for the career grid view..." 
                            className="rounded-2xl border-slate-100 bg-slate-50/50 min-h-[100px]"
                        />
                    </div>

                    <div className="space-y-3">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Executive Summary (Detail Page)</Label>
                        <Textarea 
                            required
                            value={formData.summary}
                            onChange={(e) => setFormData({...formData, summary: e.target.value})}
                            placeholder="The main introductory narrative for the role..." 
                            className="rounded-2xl border-slate-100 bg-slate-50/50 min-h-[120px]"
                        />
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Key Directives (Requirements)</Label>
                            <Button type="button" onClick={addDirective} variant="outline" className="h-8 rounded-lg text-[9px] font-bold uppercase tracking-widest gap-2">
                                <Plus className="w-3 h-3" /> Add Directive
                            </Button>
                        </div>
                        <div className="space-y-4">
                            {directives.map((dir, idx) => (
                                <div key={idx} className="flex gap-3">
                                    <Input 
                                        value={dir} 
                                        onChange={(e) => handleDirectiveChange(idx, e.target.value)}
                                        placeholder={`Directive 0${idx + 1}`}
                                        className="h-12 rounded-xl border-slate-100 bg-slate-50/50"
                                    />
                                    <Button type="button" onClick={() => removeDirective(idx)} variant="ghost" className="h-12 w-12 rounded-xl text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all">
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button 
                        disabled={loading}
                        className="w-full bg-secondary hover:bg-slate-900 text-white rounded-2xl h-16 shadow-2xl shadow-secondary/20 transition-all font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3"
                    >
                        {loading ? "Initializing Deployment..." : "Authorize Position Deployment"}
                        {!loading && <Save className="w-4 h-4" />}
                    </Button>
                </form>
            </div>
        </div>
    );
}
