"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  { quote: "Novotion transformed our hiring process completely. We reduced time-to-hire by 45%.", author: "Sarah Mitchell", title: "VP of Human Resources", company: "TechVentures Inc.", rating: 5 },
  { quote: "Their strategic approach to RPO helped us scale from 50 to 200 employees in 18 months.", author: "James Thompson", title: "CEO", company: "HealthFirst Solutions", rating: 5 },
  { quote: "The cost savings alone justified the partnership. Quality exceeded our expectations.", author: "Michael Chen", title: "Director of Talent Acquisition", company: "GlobalFinance Corp", rating: 5 },
];

export function TestimonialsSection() {
  return (
    <Section variant="dark">
      <SectionHeader badge="Testimonials" title="What Our Clients Say" description="Hear from enterprise leaders who have transformed their talent acquisition with Novotion RPO." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10"
          >
            <Quote className="h-10 w-10 text-secondary/40 mb-4" />
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">"{testimonial.quote}"</p>
            <div>
              <p className="font-semibold text-primary-foreground">{testimonial.author}</p>
              <p className="text-sm text-primary-foreground/60">{testimonial.title}</p>
              <p className="text-sm text-secondary">{testimonial.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
