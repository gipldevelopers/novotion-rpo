"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
  { name: "Industries", href: "/industries" },
  { name: "FAQ", href: "/faq" },
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
          ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <nav className="container-premium">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-11 w-11 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 shadow-lg bg-gradient-to-br from-secondary to-emerald-400 text-secondary-foreground">
              N
            </div>
            <div className="flex flex-col">
              <span className={cn("text-xl font-bold transition-colors leading-tight", isScrolled ? "text-foreground" : "text-primary-foreground")}>
                Novotion
              </span>
              <span className="text-secondary text-xs font-semibold tracking-widest uppercase">RPO</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                  pathname === item.href ? "text-secondary" : isScrolled ? "text-foreground/80 hover:text-foreground hover:bg-muted" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div layoutId="activeNav" className="absolute bottom-0 left-4 right-4 h-0.5 bg-secondary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="btn-primary h-11 px-6 rounded-xl">
              <Link href="/contact">Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn("lg:hidden p-2.5 rounded-xl transition-all duration-300", isScrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-white/10")}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border rounded-b-2xl"
            >
              <div className="py-6 space-y-1 px-2">
                {navigation.map((item, index) => (
                  <motion.div key={item.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                    <Link href={item.href} className={cn("block px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-300", pathname === item.href ? "text-secondary bg-secondary/10" : "text-foreground hover:bg-muted")}>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div className="px-2 pt-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <Button asChild className="w-full btn-primary h-12 rounded-xl text-base">
                    <Link href="/contact">Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
