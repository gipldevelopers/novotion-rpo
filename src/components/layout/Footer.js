import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { name: "Full RPO Partnership", href: "/services/full-rpo-partnership" },
  { name: "Recruitment On-Demand", href: "/services/recruitment-on-demand" },
  { name: "Offshore Support", href: "/services/offshore-recruitment-support" },
  { name: "Executive Search", href: "/services/executive-search-headhunting" },
  { name: "Candidate Pre-Screening", href: "/services/candidate-pre-screening" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Process", href: "/process" },
  { name: "Careers", href: "/careers" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 md:py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none opacity-40 -translate-x-1/2 translate-y-1/2" />

      <div className="container-premium relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center group">
              <Image
                src="/assets/noltven logo.png"
                alt="Novotion Logo"
                width={200}
                height={50}
                className="h-8 md:h-10 w-auto object-contain"
                unoptimized
              />
            </div>

            <p className="text-slate-500 text-[15px] font-light leading-relaxed">
              Leading the next generation of recruitment with strategic AI automation and global talent delivery. Built for speed, quality, and your competitive edge.
            </p>

            <div className="flex items-center gap-4">
              {[Linkedin, Instagram, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 shadow-sm"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[14px] md:text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8">Service Models</h4>
            <ul className="space-y-3 md:space-y-4">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[14px] text-slate-500 hover:text-secondary transition-colors font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] md:text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8">Company</h4>
            <ul className="space-y-3 md:space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[14px] text-slate-500 hover:text-secondary transition-colors font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] md:text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8">Global Access</h4>
            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-[14px] font-bold text-slate-900 mb-1">USA & India</p>
                  <p className="text-slate-400 text-[13px] font-light leading-relaxed">Orlando, Florida • Ahmedabad, Gujarat</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:info@novotionrpo.com" className="text-[14px] font-bold text-slate-900 hover:text-secondary transition-colors">info@novotionrpo.com</a>
              </div>
              <div className="flex gap-4">
                <Phone className="h-5 w-5 text-secondary" />
                <a href="tel:+1234567890" className="text-[14px] font-bold text-slate-900 hover:text-secondary transition-colors">+1 (234) 567-890</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] text-slate-400 font-light">
            © {new Date().getFullYear()} NOVOTION RPO. THE ELITE TALENT AGENCY.
          </p>
          <div className="flex gap-8">
            {legal.map((item) => (
              <Link key={item.name} href={item.href} className="text-[12px] text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest font-bold">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
