"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Recruitment Services", href: "/services/recruitment-services" },
  { name: "Business Development", href: "/services/business-development" },
  { name: "Marketing Support", href: "/services/marketing-support" },
  { name: "AI & Automation", href: "/services/ai-automation" },
  { name: "Accounting & Finance", href: "/services/accounting-finance" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Case Studies", href: "/case-studies" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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
            ? "bg-white/98 backdrop-blur-xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] h-16"
            : "bg-white/30 backdrop-blur-xl h-20"
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
              const isActive = pathname === item.href || (item.name === "Services" && pathname.startsWith("/services"));

              if (item.name === "Services") {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "relative px-5 py-2 text-[13px] font-bold transition-all duration-300 rounded-lg uppercase tracking-wider flex items-center gap-1",
                        isActive
                          ? "text-secondary"
                          : "text-slate-900 hover:text-secondary hover:bg-slate-900/5"
                      )}
                    >
                      {item.name}
                      <ChevronDown className={cn("h-3 w-3 transition-transform duration-300", isServicesOpen && "rotate-180")} />
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -bottom-1 left-5 right-5 h-0.5 bg-secondary rounded-full shadow-[0_0_10px_#cf603d]"
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-64 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-2 z-50 overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-20" />
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="flex items-center justify-between px-4 py-3 text-[12px] font-bold text-slate-600 hover:text-secondary hover:bg-secondary/5 rounded-xl transition-all uppercase tracking-wider group/item"
                            >
                              {service.name}
                              <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-secondary" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-5 py-2 text-[13px] font-bold transition-all duration-300 rounded-lg uppercase tracking-wider whitespace-nowrap",
                    isActive
                      ? "text-secondary"
                      : "text-slate-900 hover:text-secondary hover:bg-slate-900/5"
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
              <Link href="/contact">CONTACT US <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
              className="lg:hidden absolute top-full left-4 right-4 mt-2 p-6 bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-[2rem] shadow-2xl z-50 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

              <div className="flex flex-col gap-2">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href || (item.name === "Services" && pathname.startsWith("/services"));

                  if (item.name === "Services") {
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex flex-col"
                      >
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className={cn(
                            "flex items-center justify-between px-4 py-3 text-sm font-bold rounded-[1.5rem] uppercase tracking-widest transition-all text-left",
                            isActive ? "text-secondary bg-secondary/5 border border-secondary/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                          )}
                        >
                          {item.name}
                          <ChevronDown className={cn("h-4 w-4 transition-transform", isMobileServicesOpen && "rotate-180")} />
                        </button>

                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden flex flex-col pl-4 mt-2"
                            >
                              <Link
                                href="/services"
                                className="block px-4 py-2 text-[12px] font-bold text-slate-500 uppercase tracking-widest hover:text-secondary"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                All Services
                              </Link>
                              {services.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className="block px-4 py-2 text-[12px] font-bold text-slate-500 uppercase tracking-widest hover:text-secondary"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 text-sm font-bold rounded-[1.5rem] uppercase tracking-widest transition-all",
                          pathname === item.href ? "text-secondary bg-secondary/5 border border-secondary/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
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
