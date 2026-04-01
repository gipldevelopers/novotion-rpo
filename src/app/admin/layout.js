"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
    LayoutDashboard, 
    LogOut, 
    Menu, 
    X, 
    ChevronRight,
    Search,
    Bell,
    ExternalLink,
    FileText,
    Mail,
    Briefcase,
    Shield
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sidebarItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Messages", href: "/admin/messages", icon: Mail },
    { name: "Study Leads", href: "/admin/case-studies", icon: FileText },
    { name: "Job Postings", href: "/admin/jobs", icon: Briefcase },
];

export default function AdminLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        const res = await fetch("/api/admin/logout", { method: "POST" });
        if (res.ok) router.push("/admin-login");
    };

    return (
        <div className="min-h-screen bg-slate-50 flex overflow-hidden">
            {/* Sidebar */}
            <aside 
                className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:relative lg:translate-x-0`}
            >
                <div className="h-full flex flex-col p-8">
                    {/* Logo Area */}
                    <div className="mb-12 flex items-center justify-between">
                        <Link href="/" className="group flex items-center gap-3">
                            <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-secondary/20">N</div>
                            <span className="text-xl font-black tracking-tight group-hover:text-secondary transition-colors uppercase">Noltven Hub</span>
                        </Link>
                        <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-2">
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6 ml-3">Operations Management</div>
                        {sidebarItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center justify-between p-4 rounded-2xl group transition-all duration-300 ${
                                        isActive 
                                        ? "bg-secondary text-white shadow-xl shadow-secondary/20" 
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <item.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-500 group-hover:text-secondary"} transition-colors`} />
                                        <span className="font-bold text-sm">{item.name}</span>
                                    </div>
                                    {isActive && <ChevronRight className="w-4 h-4 opacity-50" />}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Bottom Actions */}
                    <div className="mt-auto pt-8 border-t border-white/5 space-y-4">
                        <Link href="/" target="_blank" className="flex items-center gap-4 p-4 text-slate-400 font-bold text-sm hover:text-white transition-colors group">
                            <ExternalLink className="w-5 h-5 group-hover:text-secondary" />
                            View Live Website
                        </Link>
                        <button 
                            onClick={handleLogout}
                            className="w-full flex items-center gap-4 p-4 text-red-400 font-bold text-sm hover:bg-red-500/10 rounded-2xl transition-all group"
                        >
                            <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Log Out
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 max-h-screen overflow-hidden">
                {/* Header */}
                <header className="h-24 bg-white border-b border-slate-100 px-8 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-8 flex-1">
                        <button onClick={() => setSidebarOpen(true)} className={`${isSidebarOpen ? "hidden" : "block"} lg:hidden p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors`}>
                            <Menu className="w-6 h-6 text-slate-500" />
                        </button>

                        {/* Search Bar (Static/Demo) */}
                        <div className="relative max-w-md w-full hidden md:block">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input 
                                type="text" 
                                placeholder="Universal search command..." 
                                className="w-full bg-slate-50 border-none rounded-xl py-3 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-slate-600"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <button className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors relative">
                                <Bell className="w-5 h-5 text-slate-500" />
                                <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
                            </button>
                        </div>
                        <div className="h-10 w-[1px] bg-slate-100 mr-2 md:block hidden"></div>
                        <div className="flex items-center gap-4 group cursor-pointer lg:pl-2">
                            <div className="text-right hidden sm:block">
                                <p className="text-[12px] font-black text-slate-900 tracking-tight leading-none mb-1 uppercase">Operations Admin</p>
                                <p className="text-[10px] font-bold text-slate-400 tracking-wider leading-none uppercase">Execution Manager</p>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center font-black text-white shadow-xl shadow-slate-200 shadow-inner group-hover:scale-105 transition-all">
                                AD
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Viewport */}
                <div className="flex-1 overflow-y-auto p-8 relative scroll-smooth bg-slate-50/50">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
