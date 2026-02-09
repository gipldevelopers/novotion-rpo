import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const services = [
  { name: "Full RPO Partnership", href: "/services#full-rpo" },
  { name: "Project RPO", href: "/services#project-rpo" },
  { name: "Offshore Recruitment", href: "/services#offshore" },
  { name: "Executive Search", href: "/services#executive" },
  { name: "Candidate Screening", href: "/services#screening" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Process", href: "/process" },
  { name: "Industries", href: "/industries" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Refund Policy", href: "/refund" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-premium py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center font-bold text-lg text-secondary-foreground">
                N
              </div>
              <span className="text-xl font-semibold">
                Novotion <span className="text-secondary">RPO</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Strategic Recruitment Process Outsourcing partner for USA & UK
              enterprises. We accelerate your hiring goals with measurable
              outcomes.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div className="text-sm text-primary-foreground/70">
                  <p className="font-medium text-primary-foreground">
                    USA Office
                  </p>
                  <p>Orlando, FL</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div className="text-sm text-primary-foreground/70">
                  <p className="font-medium text-primary-foreground">
                    India Office
                  </p>
                  <p>Ahmedabad, Gujarat</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a
                  href="mailto:info@novotionrpo.com"
                  className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  info@novotionrpo.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Novotion RPO. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
