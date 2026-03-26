"use client";

import { Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";



const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/noltven/",
    color: "hover:bg-[#0077B5]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/noltven_?igsh=MXNyOHU5NHN0b2RzeA==",
    color: "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
  },
];

export function SocialSidebar() {
  return (
    <div className="fixed right-0 top-auto bottom-6 md:top-1/2 md:-translate-y-1/2 z-[9999] flex flex-col items-end gap-2 md:gap-1.5">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          className={`
            group relative flex items-center justify-center 
            w-10 h-10 md:w-12 md:h-12 
            bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-y border-l border-slate-200
            text-slate-600 rounded-l-xl md:rounded-l-2xl transition-all duration-500 
            ${link.color} hover:text-white hover:w-14 md:hover:w-16 hover:-translate-x-2 md:hover:-translate-x-3
            shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]
          `}
        >
          <link.icon className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:scale-110" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl transform translate-x-2 group-hover:translate-x-0">
            {link.name}
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
          </span>
        </motion.a>
      ))}
    </div>
  );
}
