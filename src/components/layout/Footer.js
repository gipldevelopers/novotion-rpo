import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { name: "Recruitment Services", href: "/services/recruitment-services" },
  { name: "Business Development", href: "/services/business-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "AI & Automation", href: "/services/ai-automation" },
  { name: "Accounting & Finance", href: "/services/accounting-finance" },
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
    <footer className="bg-slate-50 border-t border-slate-200 py-10 md:py-10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none opacity-40 -translate-x-1/2 translate-y-1/2" />

      <div className="container-premium relative z-10 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
          <div className="space-y-8 md:space-y-10">
            <div className="flex items-center group">
              <Image
                src="/assets/noltven logo.png"
                alt="Novotion Logo"
                width={200}
                height={50}
                className="h-8 md:h-12 w-auto object-contain"
                unoptimized
              />
            </div>

            <p className="text-slate-500 text-[15px] font-normal leading-relaxed max-w-sm">
              Leading the next generation of recruitment with strategic AI automation and global talent delivery. Built for speed, quality, and your competitive edge.
            </p>

            <div className="flex items-center gap-4">
              {[Linkedin, Instagram, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="h-11 w-11 rounded-[1.25rem] bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-secondary/10"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[17px] md:text-[17px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-8 md:mb-10">Our Services</h4>
            <ul className="space-y-4 md:space-y-5">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[14px] text-slate-500 hover:text-secondary transition-colors font-medium hover:pl-2 transition-all duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[17px] md:text-[17px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-8 md:mb-10">Company</h4>
            <ul className="space-y-4 md:space-y-5">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[14px] text-slate-500 hover:text-secondary transition-colors font-medium hover:pl-2 transition-all duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[17px] md:text-[17px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-8 md:mb-10">Global Access</h4>
            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-5">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <div>
                  <p className="text-[14px] font-bold text-slate-900 mb-1 tracking-tight">USA & India</p>
                  <p className="text-slate-500 text-[13px] font-light leading-relaxed">Orlando, Florida • Ahmedabad, Gujarat</p>
                </div>
              </div>
              <div className="flex gap-5">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a href="mailto:info@novotionrpo.com" className="text-[14px] font-bold text-slate-900 hover:text-secondary transition-colors tracking-tight">info@novotionrpo.com</a>
              </div>
              <div className="flex gap-5">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a href="tel:+1234567890" className="text-[14px] font-bold text-slate-900 hover:text-secondary transition-colors tracking-tight">+1 (234) 567-890</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-18 md:mt-18 pt-10 md:pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} NOVOTION RPO. THE ELITE TALENT AGENCY.
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {legal.map((item) => (
              <Link key={item.name} href={item.href} className="text-[11px] text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-[0.3em] font-bold">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
