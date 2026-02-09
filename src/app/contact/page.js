"use client";

import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";
import Link from "next/link"; // Not used in link form but might be needed if links added

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
      {/* Hero Section */}
      <section className="hero-section pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-secondary/20 text-secondary rounded-full mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Let's Transform Your{" "}
              <span className="text-secondary">Talent Acquisition</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              Schedule a free consultation with our RPO experts. We'll discuss your 
              hiring challenges and explore how we can help you build a world-class team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Section className="py-16 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">USA Office</p>
                  <p className="text-muted-foreground">Orlando, FL, USA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">India Office</p>
                  <p className="text-muted-foreground">Ahmedabad, Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:info@novotionrpo.com" className="text-secondary hover:underline">
                    info@novotionrpo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a href="tel:+1234567890" className="text-secondary hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Business Hours</p>
                  <p className="text-muted-foreground">24/7 Global Support</p>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
              <Calendar className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Prefer a Scheduled Call?</h3>
              <p className="text-primary-foreground/70 text-sm mb-4">
                Book a free 30-minute consultation with one of our RPO experts.
              </p>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Schedule a Call
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="card-premium p-8 lg:p-12">
              <h2 className="text-2xl font-bold mb-2">Request a Consultation</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (234) 567-890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      placeholder="Company Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input
                      id="jobTitle"
                      placeholder="VP of HR"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-rpo">Full RPO Partnership</SelectItem>
                        <SelectItem value="project-rpo">Project RPO</SelectItem>
                        <SelectItem value="offshore">Offshore Support</SelectItem>
                        <SelectItem value="executive">Executive Search</SelectItem>
                        <SelectItem value="screening">Candidate Screening</SelectItem>
                        <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hiringVolume">Annual Hiring Volume</Label>
                    <Select
                      value={formData.hiringVolume}
                      onValueChange={(value) => setFormData({ ...formData, hiringVolume: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select volume" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 hires</SelectItem>
                        <SelectItem value="11-50">11-50 hires</SelectItem>
                        <SelectItem value="51-100">51-100 hires</SelectItem>
                        <SelectItem value="100+">100+ hires</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How can we help? *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your hiring challenges and goals..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Submit Request
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-secondary hover:underline">Privacy Policy</a>
                  {" "}and{" "}
                  <a href="/terms" className="text-secondary hover:underline">Terms of Service</a>.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}
