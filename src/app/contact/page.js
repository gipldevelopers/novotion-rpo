"use client";

import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CTASectionV2 } from "@/components/home-v2/CTASectionV2";
import { ContactHero } from "@/components/contact/ContactHero";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, ArrowRight, Calendar, Sparkles } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    service: "",
    hiringVolume: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      <main className="bg-white">
        {/* 1. Specialized Contact Banner */}
        <ContactHero />

        {/* 2. Core Engagement Section */}
        <section className="py-24 md:py-40 bg-white relative overflow-hidden">
          {/* Subtle decorative background */}
          <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none opacity-50 -translate-x-1/2 -translate-y-1/2" />

          <div className="container-premium px-6 md:px-12 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

              {/* Left Column: Intelligence Nodes (Contact Info) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-4 space-y-12"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
                    <MapPin className="h-4 w-4" />
                    Operational Nodes
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tighter leading-tight mb-8">
                    Two Locations. <br /> One Unified Team.
                  </h2>
                </div>

                <div className="space-y-8">
                  {/* US Node */}
                  <div className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-200 hover:border-secondary/20 transition-all duration-500 shadow-sm hover:shadow-xl">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-slate-300 group-hover:text-secondary group-hover:bg-secondary/10 transition-all shadow-sm mb-6">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">USA Headquarters</h3>
                    <p className="text-slate-500 font-light leading-relaxed mb-4">Orlando, FL, USA</p>
                  </div>

                  {/* India Node */}
                  <div className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-200 hover:border-secondary/20 transition-all duration-500 shadow-sm hover:shadow-xl">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-slate-300 group-hover:text-secondary group-hover:bg-secondary/10 transition-all shadow-sm mb-6">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">India Operations</h3>
                    <p className="text-slate-500 font-light leading-relaxed mb-4">Ahmedabad, Gujarat, India</p>
                  </div>

                  {/* Direct Lines */}
                  <div className="space-y-6 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-secondary transition-colors">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Email</p>
                        <a href="mailto:info@noltven.com" className="text-slate-700 font-medium hover:text-secondary transition-colors">
                          info@noltven.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-secondary transition-colors">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Phone</p>
                        <a href="tel:+1234567890" className="text-slate-700 font-medium hover:text-secondary transition-colors">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Strategic Enquiry Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-8"
              >
                <div className="bg-white border border-slate-200 p-8 md:p-14 rounded-[2.5rem] shadow-2xl shadow-slate-200/50">
                  <div className="mb-12 border-b border-slate-200 pb-8 relative">
                    <div className="absolute right-0 top-0 w-24 h-24 bg-secondary/5 rounded-full blur-2xl" />
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight">Tell Us What You Need</h3>
                    <p className="text-slate-500 font-light leading-relaxed max-w-xl">
                      Give us the basics below. One of our team will respond within 24 hours with a 
                      clear outline of how we can help - no obligation, no hard sell.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">First Name *</Label>
                        <Input
                          id="firstName"
                          className="bg-slate-50 border-slate-200 h-14 rounded-2xl px-5 text-slate-700 placeholder:text-slate-300 focus:bg-white focus:border-secondary/30 focus:ring-secondary/20 transition-all duration-300"
                          placeholder="First Name *"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Last Name *</Label>
                        <Input
                          id="lastName"
                          className="bg-slate-50 border-slate-200 h-14 rounded-2xl px-5 text-slate-700 placeholder:text-slate-300 focus:bg-white focus:border-secondary/30 focus:ring-secondary/20 transition-all duration-300"
                          placeholder="Last Name *"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Work Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          className="bg-slate-50 border-slate-200 h-14 rounded-2xl px-5 text-slate-700 placeholder:text-slate-300 focus:bg-white focus:border-secondary/30 focus:ring-secondary/20 transition-all duration-300"
                          placeholder="Work Email *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Direct Line</Label>
                        <Input
                          id="phone"
                          type="tel"
                          className="bg-slate-50 border-slate-200 h-14 rounded-2xl px-5 text-slate-700 placeholder:text-slate-300 focus:bg-white focus:border-secondary/30 focus:ring-secondary/20 transition-all duration-300"
                          placeholder="Direct Line"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="company" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Company Name *</Label>
                        <Input
                          id="company"
                          className="bg-slate-50 border-slate-200 h-14 rounded-2xl px-5 text-slate-700 placeholder:text-slate-300 focus:bg-white focus:border-secondary/30 focus:ring-secondary/20 transition-all duration-300"
                          placeholder="Company Name *"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="jobTitle" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Your Role / Title</Label>
                        <Input
                          id="jobTitle"
                          className="bg-slate-50 border-slate-200 h-14 rounded-2xl px-5 text-slate-700 placeholder:text-slate-300 focus:bg-white focus:border-secondary/30 focus:ring-secondary/20 transition-all duration-300"
                          placeholder="Your Role / Title"
                          value={formData.jobTitle}
                          onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="service" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">SERVICE OF INTEREST</Label>
                        <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                          <SelectTrigger className="bg-slate-50 border-slate-200 h-14 rounded-2xl px-5 text-slate-700 focus:ring-secondary/20">
                            <SelectValue placeholder="SERVICE OF INTEREST" />
                          </SelectTrigger>
                          <SelectContent className="rounded-2xl border-slate-100 shadow-xl bg-white">
                            <SelectItem value="recruitment">Recruitment Services</SelectItem>
                            <SelectItem value="marketing">Marketing Support</SelectItem>
                            <SelectItem value="ai-automation">AI & Automation</SelectItem>
                            <SelectItem value="business-dev">Business Development</SelectItem>
                            <SelectItem value="accounting">Accounting & Finance</SelectItem>
                            <SelectItem value="full-partnership">Full Multi-Service Partnership</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="hiringVolume" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Target Volume (Annual)</Label>
                        <Select value={formData.hiringVolume} onValueChange={(value) => setFormData({ ...formData, hiringVolume: value })}>
                          <SelectTrigger className="bg-slate-50 border-slate-200 h-14 rounded-2xl px-5 text-slate-700 focus:ring-secondary/20">
                            <SelectValue placeholder="Target Volume (Annual)" />
                          </SelectTrigger>
                          <SelectContent className="rounded-2xl border-slate-100 shadow-xl bg-white">
                            <SelectItem value="1-10">Micro (1-10 hires)</SelectItem>
                            <SelectItem value="11-50">Standard (11-50 hires)</SelectItem>
                            <SelectItem value="51-100">Scale (51-100 hires)</SelectItem>
                            <SelectItem value="100+">Enterprise (100+ hires)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">WHAT ARE YOU TRYING TO ACHIEVE? *</Label>
                      <Textarea
                        id="message"
                        className="bg-slate-50 border-slate-200 rounded-2xl p-5 text-slate-700 placeholder:text-slate-300 focus:bg-white focus:border-secondary/30 focus:ring-secondary/20 transition-all duration-300 min-h-[160px]"
                        placeholder="Detail your current bottlenecks and target state..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <div className="pt-6">
                      <Button
                        type="submit"
                        className="w-full bg-slate-900 hover:bg-secondary text-white h-16 rounded-2xl shadow-xl shadow-slate-200/50 transition-all duration-500 font-bold text-xs tracking-widest uppercase border-none"
                      >
                        EXECUTE ENGAGEMENT
                        <ArrowRight className="ml-3 h-5 w-5" />
                      </Button>
                    </div>

                    <p className="text-[10px] text-slate-400 text-center font-bold tracking-widest uppercase mt-6 pt-6 border-t border-slate-50">
                      Secure 256-bit Encrypted Transmission
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Global V2 CTA Extension */}
        <CTASectionV2 />
      </main>
    </Layout>
  );
}
