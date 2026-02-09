"use client";

import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection } from "@/components/home/CTASection";

const faqs = [
  {
    category: "About RPO",
    questions: [
      {
        question: "What exactly does RPO include?",
        answer: "RPO (Recruitment Process Outsourcing) includes a comprehensive range of services: talent sourcing and attraction, candidate screening and assessment, interview coordination, offer management, onboarding support, employer branding, recruitment technology management, analytics and reporting, and process optimization. The specific scope is tailored to each client's needs.",
      },
      {
        question: "How is RPO different from traditional staffing agencies?",
        answer: "Unlike traditional agencies that charge 15-25% per placement with limited accountability, RPO is a strategic partnership. We integrate with your team, represent your employer brand, and are measured on outcomes like quality of hire, time-to-fill, and cost-per-hire. We're invested in your long-term success, not just filling individual roles.",
      },
      {
        question: "What's the difference between full RPO and project RPO?",
        answer: "Full RPO is a comprehensive, ongoing partnership where we manage your entire recruitment function or a significant portion of it. Project RPO is a flexible, time-bound engagement for specific hiring campaigns, geographic expansions, or seasonal peaks. Both deliver the same quality and methodology, just with different scopes and timelines.",
      },
    ],
  },
  {
    category: "Getting Started",
    questions: [
      {
        question: "How quickly can we start working together?",
        answer: "Our typical implementation timeline is 2-4 weeks from contract signing to active recruitment. This includes discovery, integration, and setup phases. For urgent needs, we can accelerate this timeline. Project RPO engagements can often begin within 1-2 weeks.",
      },
      {
        question: "What's involved in the onboarding process?",
        answer: "Onboarding includes stakeholder interviews, process documentation, technology integration (ATS access, etc.), employer brand immersion, hiring manager training, and establishing communication protocols. We ensure our team functions as a seamless extension of your organization.",
      },
      {
        question: "Do you require a long-term contract?",
        answer: "We offer flexible engagement models. While full RPO partnerships typically involve 12-24 month agreements for optimal results, we also offer project-based engagements and shorter pilot programs. We're confident in our ability to deliver value and earn long-term partnerships.",
      },
    ],
  },
  {
    category: "Coverage & Support",
    questions: [
      {
        question: "Which regions do you support?",
        answer: "We primarily serve clients in the USA and UK, with our strategic leadership based in these markets. Our operational excellence center in India (Ahmedabad) enables 24/7 coverage and support. We can also support hiring in other regions depending on specific requirements.",
      },
      {
        question: "Is RPO suitable for small companies?",
        answer: "While full RPO is typically most valuable for organizations hiring 20+ roles annually, our flexible models can work for companies of various sizes. Project RPO and our offshore support services can be excellent solutions for growing companies that aren't ready for full RPO but need professional recruitment support.",
      },
      {
        question: "What industries do you specialize in?",
        answer: "We have deep expertise across Technology, Healthcare, Financial Services, Manufacturing, Retail, Professional Services, and more. Our experienced recruiters quickly develop sector-specific knowledge, and we're not limited to any particular industry.",
      },
    ],
  },
  {
    category: "Process & Technology",
    questions: [
      {
        question: "Do you use our ATS or bring your own technology?",
        answer: "We're flexible—we can work within your existing ATS and technology stack, or we can implement and manage recruitment technology as part of our service. We have experience with all major ATS platforms and can recommend solutions if you're looking to upgrade.",
      },
      {
        question: "How do you ensure candidate quality?",
        answer: "We use a multi-stage screening process including skills assessments, behavioral interviews, cultural fit evaluation, and thorough reference checking. Our quality metrics are tracked and reported regularly, and we offer placement guarantees for peace of mind.",
      },
      {
        question: "What reporting and analytics do you provide?",
        answer: "We provide comprehensive dashboards covering all key metrics: pipeline health, time-to-fill, cost-per-hire, source effectiveness, quality of hire, diversity metrics, and more. Reports are customized to your needs and delivered weekly or monthly as preferred.",
      },
    ],
  },
  {
    category: "Costs & Value",
    questions: [
      {
        question: "How is RPO priced?",
        answer: "RPO pricing varies based on scope, volume, and complexity. Common models include cost-per-hire, monthly management fee, or hybrid approaches. We work with you to design a pricing structure that aligns incentives and delivers clear ROI. Most clients see 40-60% cost savings compared to agency fees.",
      },
      {
        question: "What kind of ROI can we expect?",
        answer: "Clients typically see significant improvements: 40-60% reduction in cost-per-hire, 30-50% faster time-to-fill, improved quality of hire metrics, and enhanced employer brand. We establish baseline measurements and track ROI throughout our partnership.",
      },
      {
        question: "Are there any hidden costs?",
        answer: "No hidden costs. Our pricing is transparent and all-inclusive based on the agreed scope. Technology fees, advertising costs, and other expenses are clearly defined upfront. We believe in building trust through transparency.",
      },
    ],
  },
];

export default function FAQ() {
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
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Frequently Asked{" "}
              <span className="text-secondary">Questions</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              Everything you need to know about our RPO services. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <Section>
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-secondary rounded-full" />
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="card-premium px-6 border"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTASection />
    </Layout>
  );
}
