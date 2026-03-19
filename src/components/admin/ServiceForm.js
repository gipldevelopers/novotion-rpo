"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
    Plus, 
    Trash2, 
    ChevronDown, 
    ChevronUp, 
    Save, 
    X, 
    LayoutDashboard, 
    Briefcase,
    Zap,
    Target,
    Shield,
    MessageCircle,
    ArrowLeft,
    Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ServiceForm({ editingService = null }) {
    const router = useRouter();
    const [isSaving, setIsSaving] = useState(false);
    const [activeTab, setActiveTab] = useState("core");

    const [formData, setFormData] = useState({
        service_id: "",
        short_title: "",
        sort_order: 0,
        slug: "",
        title: "",
        cta: "",
        head: "",
        description: "",
        bestFor: "",
        intro: { title: "", overview: "", points: [{ title: "", text: "" }], highlights: [""] },
        outcomes: [""],
        whatYouGet: [], // This will store our Pillars
        faqs: [{ question: "", answer: "" }],
        closing: { title: "", text: "", points: [""], cta: "" }
    });

    useEffect(() => {
        if (editingService) {
            setFormData({
                ...editingService,
                intro: {
                    title: editingService.intro?.title || "",
                    overview: editingService.intro?.overview || editingService.intro?.text || "",
                    points: editingService.intro?.points || [{ title: "", text: "" }],
                    highlights: editingService.intro?.highlights || [""]
                },
                outcomes: Array.isArray(editingService.outcomes) ? editingService.outcomes : [""],
                whatYouGet: (editingService.whatYouGet || []).map(p => ({
                    ...p,
                    list: p.list || [],
                    subslug: {
                        title: p.subslug?.title || "",
                        head: p.subslug?.head || "",
                        description: p.subslug?.description || "",
                        howWeWork: p.subslug?.howWeWork || [],
                        benefits: p.subslug?.benefits || [],
                        servicesInclude: p.subslug?.servicesInclude || {},
                        boundary: p.subslug?.boundary || "",
                        bottomLine: p.subslug?.bottomLine || ""
                    }
                })),
                faqs: editingService.faqs || [{ question: "", answer: "" }],
                closing: {
                    title: editingService.closing?.title || "",
                    text: editingService.closing?.text || "",
                    points: editingService.closing?.points || [""],
                    cta: editingService.closing?.cta || ""
                }
            });
        }
    }, [editingService]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSaving(true);

        const method = editingService ? "PUT" : "POST";
        const url = editingService ? `/api/services/${editingService.id}` : "/api/services";

        try {
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) router.push("/admin/services");
        } catch (error) {
            console.error("Save Error:", error);
        } finally {
            setIsSaving(false);
        }
    };

    // Helper to add/remove array items
    const addItem = (path, defaultValue) => {
        const parts = path.split('.');
        const newFormData = { ...formData };
        let current = newFormData;
        for (let i = 0; i < parts.length - 1; i++) current = current[parts[i]];
        current[parts[parts.length - 1]] = [...current[parts[parts.length - 1]], defaultValue];
        setFormData(newFormData);
    };

    const removeItem = (path, index) => {
        const parts = path.split('.');
        const newFormData = { ...formData };
        let current = newFormData;
        for (let i = 0; i < parts.length - 1; i++) current = current[parts[i]];
        current[parts[parts.length - 1]] = current[parts[parts.length - 1]].filter((_, i) => i !== index);
        setFormData(newFormData);
    };

    const updateNested = (path, value) => {
        const parts = path.split('.');
        const newFormData = { ...formData };
        let current = newFormData;
        for (let i = 0; i < parts.length - 1; i++) current = current[parts[i]];
        current[parts[parts.length - 1]] = value;
        setFormData(newFormData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-12 pb-20">
            {/* Form Nav */}
            <div className="sticky top-0 z-40 bg-slate-50/80 backdrop-blur-md py-4 border-b border-slate-200 -mx-8 px-8 flex items-center justify-between">
                <div className="flex gap-4 overflow-x-auto no-scrollbar">
                    {["core", "intro", "pillars", "outcomes", "faqs", "closing"].map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                activeTab === tab 
                                ? "bg-slate-900 text-white shadow-lg" 
                                : "bg-white text-slate-400 hover:text-slate-900"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="flex gap-4">
                    <Button 
                        type="button" 
                        variant="ghost" 
                        onClick={() => router.back()}
                        className="rounded-xl text-[10px] font-black uppercase tracking-widest"
                    >
                        Discard
                    </Button>
                    <Button 
                        type="submit" 
                        disabled={isSaving}
                        className="bg-secondary hover:bg-slate-900 text-white rounded-xl shadow-xl shadow-secondary/10 px-8 text-[10px] font-black uppercase tracking-widest"
                    >
                        {isSaving ? "Synchronizing..." : "Commit Changes"}
                    </Button>
                </div>
            </div>

            {/* Core Definition */}
            {activeTab === "core" && (
                <Section title="Core Architecture" icon={Briefcase}>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Input label="Internal Service ID" value={formData.service_id} onChange={(v) => setFormData({...formData, service_id: v})} placeholder="e.g. recruitment" />
                        <Input label="Short Nav/Grid Title" value={formData.short_title} onChange={(v) => setFormData({...formData, short_title: v})} placeholder="e.g. Recruitment Support" />
                        <Input label="Sort Order (1, 2, 3...)" type="number" value={formData.sort_order} onChange={(v) => setFormData({...formData, sort_order: parseInt(v) || 0})} placeholder="0" />
                        <Input label="Public URL Slug" value={formData.slug} onChange={(v) => setFormData({...formData, slug: v})} placeholder="e.g. recruitment-services" />
                        <Input label="Strategic Title (H1)" value={formData.title} onChange={(v) => setFormData({...formData, title: v})} full className="text-xl font-black" />
                        <Input label="Hero CTA Button Label" value={formData.cta} onChange={(v) => setFormData({...formData, cta: v})} placeholder="e.g. Build Your Hiring Extension" />
                        <Input label="Hero Tagline" value={formData.head} onChange={(v) => setFormData({...formData, head: v})} full placeholder="Short power statement" />
                        <Textarea label="Core Narrative Description" value={formData.description} onChange={(v) => setFormData({...formData, description: v})} full />
                        <Input label="Best For (Who is this for?)" value={formData.bestFor} onChange={(v) => setFormData({...formData, bestFor: v})} full />
                    </div>
                </Section>
            )}

            {/* Intro Section */}
            {activeTab === "intro" && (
                <Section title="Intro Module" icon={Sparkles}>
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <Input label="Intro Headline" value={formData.intro.title} onChange={(v) => updateNested('intro.title', v)} full />
                            <Textarea label="Intro Overview (The bold paragraph)" value={formData.intro.overview} onChange={(v) => updateNested('intro.overview', v)} full />
                        </div>

                        <div className="space-y-6">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Strategic Insight Points (3 Columns)</label>
                            <div className="grid md:grid-cols-3 gap-6">
                                {formData.intro.points?.map((p, i) => (
                                    <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm space-y-4 relative group">
                                        <button type="button" onClick={() => updateNested('intro.points', formData.intro.points.filter((_, idx) => idx !== i))} className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                        <Input label="Point Title" value={p.title} onChange={(v) => {
                                            const newP = [...formData.intro.points];
                                            newP[i].title = v;
                                            updateNested('intro.points', newP);
                                        }} />
                                        <Textarea label="Point Text" value={p.text} onChange={(v) => {
                                            const newP = [...formData.intro.points];
                                            newP[i].text = v;
                                            updateNested('intro.points', newP);
                                        }} />
                                    </div>
                                ))}
                            </div>
                            <button type="button" onClick={() => updateNested('intro.points', [...(formData.intro.points || []), { title: "", text: "" }])} className="text-secondary font-black text-[10px] uppercase tracking-widest hover:translate-x-1 transition-all">
                                + Add Point (Max 3)
                            </button>
                        </div>

                        <ListEditor 
                            label="Key Intro Highlights (List below paragraph)" 
                            items={formData.intro.highlights} 
                            onAdd={() => updateNested('intro.highlights', [...formData.intro.highlights, ""])}
                            onRemove={(i) => updateNested('intro.highlights', formData.intro.highlights.filter((_, idx) => idx !== i))}
                            onChange={(i, v) => {
                                const newH = [...formData.intro.highlights];
                                newH[i] = v;
                                updateNested('intro.highlights', newH);
                            }}
                        />
                    </div>
                </Section>
            )}

            {/* Pillars (Complex) */}
            {activeTab === "pillars" && (
                <Section title="Strategic Pillars (Sub-Pages)" icon={Zap}>
                    <div className="space-y-6">
                        {formData.whatYouGet.map((pillar, pIdx) => (
                            <PillarEditor 
                                key={pIdx}
                                pillar={pillar}
                                index={pIdx}
                                onRemove={() => removeItem('whatYouGet', pIdx)}
                                onChange={(newPillar) => {
                                    const newW = [...formData.whatYouGet];
                                    newW[pIdx] = newPillar;
                                    setFormData({...formData, whatYouGet: newW});
                                }}
                            />
                        ))}
                        <button 
                            type="button" 
                            onClick={() => addItem('whatYouGet', { 
                                title: "", 
                                text: "", 
                                list: [""],
                                subslug: { 
                                    title: "", 
                                    head: "", 
                                    description: "", 
                                    howWeWork: [""], 
                                    benefits: [""], 
                                    servicesInclude: {}, 
                                    boundary: "", 
                                    bottomLine: "" 
                                } 
                            })}
                            className="w-full py-8 border-2 border-dashed border-slate-200 rounded-[2.5rem] text-slate-400 font-bold hover:border-secondary hover:text-secondary transition-all flex flex-col items-center gap-2"
                        >
                            <Plus className="w-8 h-8" />
                            Add New Strategic Pillar
                        </button>
                    </div>
                </Section>
            )}

            {/* Outcomes */}
            {activeTab === "outcomes" && (
                <Section title="Business Deliverables" icon={Target}>
                    <div className="space-y-6">
                        <ListEditor 
                            label="Outcomes (Sidebar List)" 
                            items={formData.outcomes} 
                            onAdd={() => addItem('outcomes', "")}
                            onRemove={(i) => removeItem('outcomes', i)}
                            onChange={(i, v) => {
                                const newO = [...formData.outcomes];
                                newO[i] = v;
                                setFormData({...formData, outcomes: newO});
                            }}
                        />
                    </div>
                </Section>
            )}

            {/* FAQs */}
            {activeTab === "faqs" && (
                <Section title="Operational Intelligence (FAQs)" icon={MessageCircle}>
                    <div className="space-y-4">
                        {formData.faqs.map((faq, i) => (
                            <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex gap-6 items-start">
                                <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-black shrink-0">{i+1}</span>
                                <div className="flex-1 space-y-4">
                                    <Input label="Question" value={faq.question} onChange={(v) => {
                                        const newF = [...formData.faqs];
                                        newF[i].question = v;
                                        setFormData({...formData, faqs: newF});
                                    }} />
                                    <Textarea label="Response" value={faq.answer} onChange={(v) => {
                                        const newF = [...formData.faqs];
                                        newF[i].answer = v;
                                        setFormData({...formData, faqs: newF});
                                    }} />
                                </div>
                                <button type="button" onClick={() => removeItem('faqs', i)} className="text-slate-300 hover:text-red-500 transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                        <button type="button" onClick={() => addItem('faqs', { question: "", answer: "" })} className="w-full py-6 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold hover:text-secondary hover:border-secondary transition-all">
                            Add FAQ Item
                        </button>
                    </div>
                </Section>
            )}

            {/* Closing */}
            {activeTab === "closing" && (
                <Section title="Closing Directive" icon={Shield}>
                    <div className="space-y-8">
                        <Input label="Closing Headline" value={formData.closing.title} onChange={(v) => updateNested('closing.title', v)} full />
                        <Textarea label="Closing Statement" value={formData.closing.text} onChange={(v) => updateNested('closing.text', v)} full />
                        <ListEditor 
                            label="Closing Callouts" 
                            items={formData.closing.points} 
                            onAdd={() => updateNested('closing.points', [...formData.closing.points, ""])}
                            onRemove={(i) => updateNested('closing.points', formData.closing.points.filter((_, idx) => idx !== i))}
                            onChange={(i, v) => {
                                const newP = [...formData.closing.points];
                                newP[i] = v;
                                updateNested('closing.points', newP);
                            }}
                        />
                        <Input label="Main CTA Label" value={formData.closing.cta} onChange={(v) => updateNested('closing.cta', v)} full />
                    </div>
                </Section>
            )}
        </form>
    );
}

// UI Building Blocks
function Section({ title, icon: Icon, children }) {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
        >
            <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight italic uppercase">{title}</h2>
            </div>
            <div className="bg-white/50 p-1 rounded-[3rem] border border-slate-100 shadow-sm">
                <div className="bg-slate-50/50 p-10 rounded-[2.8rem] space-y-8">
                    {children}
                </div>
            </div>
        </motion.section>
    );
}

function Input({ label, value, onChange, placeholder, full = false, className = "" }) {
    return (
        <div className={`space-y-2 ${full ? 'md:col-span-2' : ''}`}>
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{label}</label>
            <input 
                type="text" 
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                className={`w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-slate-700 outline-none focus:ring-4 focus:ring-secondary/5 transition-all text-sm font-bold ${className}`}
                placeholder={placeholder}
            />
        </div>
    );
}

function Textarea({ label, value, onChange, placeholder, full = false }) {
    return (
        <div className={`space-y-2 ${full ? 'md:col-span-2' : ''}`}>
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{label}</label>
            <textarea 
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-3xl py-6 px-8 text-slate-600 outline-none focus:ring-8 focus:ring-secondary/5 transition-all text-sm leading-relaxed min-h-[120px] font-medium"
                placeholder={placeholder}
            />
        </div>
    );
}

function ListEditor({ label, items = [], onAdd, onRemove, onChange }) {
    return (
        <div className="space-y-4">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{label}</label>
            <div className="grid gap-3">
                {items.map((item, i) => (
                    <div key={i} className="flex gap-4 items-center">
                        <input 
                            type="text" 
                            value={item}
                            onChange={(e) => onChange(i, e.target.value)}
                            className="flex-1 bg-white border border-slate-200 rounded-xl py-3 px-5 text-sm font-medium outline-none focus:border-secondary transition-all"
                        />
                        <button type="button" onClick={() => onRemove(i)} className="text-slate-300 hover:text-red-500 p-2">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
                <button type="button" onClick={onAdd} className="w-fit flex items-center gap-2 text-secondary font-black text-[10px] uppercase tracking-widest hover:translate-x-1 transition-all">
                    <Plus className="w-3 h-3" />
                    Add Entry
                </button>
            </div>
        </div>
    );
}

function PillarEditor({ pillar, index, onRemove, onChange }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const updatePillar = (field, value) => {
        onChange({ ...pillar, [field]: value });
    };

    const updateSubslug = (field, value) => {
        onChange({ 
            ...pillar, 
            subslug: { ...pillar.subslug, [field]: value } 
        });
    };

    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm group">
            <div className="p-8 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-all" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-xs">{index + 1}</div>
                    <div>
                        <h4 className="font-black text-slate-900 tracking-tight">{pillar.title || "Untitled Strategic Pillar"}</h4>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Execution Layer</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button type="button" onClick={(e) => { e.stopPropagation(); onRemove(); }} className="text-slate-300 hover:text-red-500 p-2">
                        <Trash2 className="w-5 h-5" />
                    </button>
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden border-t border-slate-100"
                    >
                        <div className="p-10 space-y-10 bg-slate-50/30">
                            {/* Main Detail Summary */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <Input label="Pillar Title" value={pillar.title} onChange={(v) => updatePillar('title', v)} />
                                <Input label="Sub-page Slug" value={pillar.subslug?.slug || ""} onChange={(v) => updateSubslug('slug', v)} placeholder="e.g. strategic-sourcing" />
                                <Textarea label="Main Service Page Summary" value={pillar.text} onChange={(v) => updatePillar('text', v)} full />
                                <ListEditor 
                                    label="Highlight Features" 
                                    items={pillar.list || []} 
                                    onAdd={() => updatePillar('list', [...(pillar.list || []), ""])}
                                    onRemove={(i) => updatePillar('list', pillar.list.filter((_, idx) => idx !== i))}
                                    onChange={(i, v) => {
                                        const newL = [...pillar.list];
                                        newL[i] = v;
                                        updatePillar('list', newL);
                                    }}
                                />
                            </div>

                            {/* Deep Detail Page (Sub-Slug) */}
                            <div className="p-8 rounded-[2rem] bg-secondary/5 border border-secondary/10 space-y-8">
                                <div className="flex items-center gap-3 text-secondary">
                                    <Sparkles className="w-5 h-5" />
                                    <h5 className="text-[10px] font-black uppercase tracking-[0.3em]">Sub-Slug Page Content (Detailed View)</h5>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <Input label="Sub-page Title (Large)" value={pillar.subslug?.title} onChange={(v) => updateSubslug('title', v)} full />
                                    <Input label="Italic Sub-head" value={pillar.subslug?.head} onChange={(v) => updateSubslug('head', v)} full />
                                    <Textarea label="Sub-page Long Description" value={pillar.subslug?.description} onChange={(v) => updateSubslug('description', v)} full />
                                    
                                    <ListEditor 
                                        label="How We Work (Steps)" 
                                        items={pillar.subslug?.howWeWork || []} 
                                        onAdd={() => updateSubslug('howWeWork', [...(pillar.subslug?.howWeWork || []), ""])}
                                        onRemove={(i) => updateSubslug('howWeWork', pillar.subslug.howWeWork.filter((_, idx) => idx !== i))}
                                        onChange={(i, v) => {
                                            const newH = [...pillar.subslug.howWeWork];
                                            newH[i] = v;
                                            updateSubslug('howWeWork', newH);
                                        }}
                                    />
                                    <ListEditor 
                                        label="Outcome Benefits" 
                                        items={pillar.subslug?.benefits || []} 
                                        onAdd={() => updateSubslug('benefits', [...(pillar.subslug?.benefits || []), ""])}
                                        onRemove={(i) => updateSubslug('benefits', pillar.subslug.benefits.filter((_, idx) => idx !== i))}
                                        onChange={(i, v) => {
                                            const newB = [...pillar.subslug.benefits];
                                            newB[i] = v;
                                            updateSubslug('benefits', newB);
                                        }}
                                    />

                                    <Input label="Strategic Boundary Statement" value={pillar.subslug?.boundary} onChange={(v) => updateSubslug('boundary', v)} full />
                                    <Input label="Bottom Line Quote" value={pillar.subslug?.bottomLine} onChange={(v) => updateSubslug('bottomLine', v)} full />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
