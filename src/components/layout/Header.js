"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "Careers", href: "/careers" },
  { name: "Blogs", href: "/blogs" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "py-3"
          : "py-6"
      )}
    >
      <nav className="container-premium">
        <div className={cn(
          "relative flex items-center justify-between px-6 transition-all duration-500 rounded-xl",
          isScrolled
            ? "bg-white/95 backdrop-blur-2xl shadow-lg shadow-slate-200/20 h-16"
            : "bg-white/40 md:bg-transparent h-20"
        )}>

          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90 relative z-10">
            <Image
              src="/assets/noltven logo.png"
              alt="Novotion Logo"
              width={240}
              height={60}
              className="h-10 md:h-12 w-auto object-contain"
              priority
              unoptimized
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-5 py-2 text-[13px] font-bold transition-all duration-300 rounded-lg uppercase tracking-wider",
                    isActive
                      ? "text-secondary"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-900/5"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-5 right-5 h-0.5 bg-secondary rounded-full shadow-[0_0_10px_#cf603d]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4 relative z-10">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-white text-[13px] font-bold px-6 h-10 rounded-xl transition-all shadow-lg shadow-secondary/20 border-none">
              <Link href="/contact">CONSULTATION <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-slate-900 hover:bg-slate-100"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Reverted to Previous UI */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="lg:hidden absolute top-full left-4 right-4 mt-2 p-6 bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

              <div className="flex flex-col gap-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 text-sm font-bold rounded-xl uppercase tracking-widest transition-all",
                        pathname === item.href ? "text-secondary bg-secondary/5 border border-secondary/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 mt-2 border-t border-slate-100">
                  <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 rounded-xl text-sm font-bold uppercase tracking-widest border-none">
                    <Link href="/contact">Schedule Consultation</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
