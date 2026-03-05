"use client";

import { useEffect, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Search, Settings, Rocket, TrendingUp, CheckCircle, Sparkles } from "lucide-react";
import { CTASectionV2 } from "@/components/home-v2/CTASectionV2";
import { ProcessHero } from "@/components/process/ProcessHero";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    number: "01",
    icon: Search,
    title: "Deep Dive",
    subtitle: "Discovery & Strategy Alignment",
    duration: "Phase I",
    description: "We immerse ourselves in your enterprise ecosystem to understand the cultural DNA, technical requirements, and strategic vision that drive your business.",
    activities: [
      "Stakeholder alignment & cultural discovery",
      "Process & gap analysis",
      "Hiring forecast & load mapping",
      "Technology & ATS audit",
      "Market gap analysis",
      "Implementation roadmap build",
    ],
    outcomes: [
      "Custom implementation roadmap",
      "Defined success KPIs",
      "Hiring performance baseline",
    ],
  },
  {
    number: "02",
    icon: Settings,
    title: "Integration",
    subtitle: "Systemic Foundation Build",
    duration: "Phase II",
    description: "Moving beyond superficial staffing to a fully embedded recruitment engine within your company culture and technological infrastructure.",
    activities: [
      "Recruiter onboarding & culture immersion",
      "ATS & stack integration",
      "Process playbooks creation",
      "Brand messaging & employer value alignment",
      "Communication protocol establishment",
      "Management advisory training",
    ],
    outcomes: [
      "Embedded recruitment team",
      "Optimized tech stack performance",
      "Standardized hiring workflows",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Momentum",
    subtitle: "Execution Excellence",
    duration: "Phase III",
    description: "Phase III launches active recruitment operations focused on speed, quality, and a premium candidate experience that reflects your prestige.",
    activities: [
      "AI-led passive candidate sourcing",
      "High-intent talent pooling",
      "End-to-end interview management",
      "Candidate sentiment tracking",
      "Weekly performance monitoring",
      "Conversion optimization",
    ],
    outcomes: [
      "Accelerated pipeline density",
      "Immediate cost-per-hire reduction",
      "Elevated candidate experience (NPS)",
    ],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Evolution",
    subtitle: "Strategic Scalability",
    duration: "Continuous",
    description: "We evolve the partnership through data-led insights, scaling capacity as needed, and implementing consistent efficiency upgrades as you grow.",
    activities: [
      "Bi-annual strategy reviews",
      "Predictive talent analytics",
      "Global market sector mapping",
      "Employer branding evolution",
      "Process automation optimization",
      "Succession planning advisory",
    ],
    outcomes: [
      "Sustained ROI excellence",
      "Scalable delivery engine",
      "Permanent market differentiation",
    ],
  },
];

export default function Process() {
  const lineRef = useRef(null);

  useEffect(() => {
    // Progress line animation
    gsap.fromTo(
      lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".process-steps-wrapper",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Layout>
      <main className="bg-white">
        {/* 1. Cinematic Hero matching the new UI */}
        <ProcessHero />

        {/* 2. Process Section with Premium Styling */}
        <section className="py-24 md:py-40 bg-white relative overflow-hidden">
          <div className="container-premium px-6 md:px-12 relative">

            {/* Timeline Wrapper with Scroll Progress */}
            <div className="process-steps-wrapper relative space-y-32 md:space-y-48">

              {/* Central Vertical Line for Desktop */}
              <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-slate-100 -translate-x-1/2" />
              <div
                ref={lineRef}
                className="hidden md:block absolute left-1/2 top-4 w-[2px] bg-secondary -translate-x-1/2 z-10"
              />

              {phases.map((phase, index) => (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="relative"
                >
                  {/* Timeline Desktop Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border border-slate-200 items-center justify-center z-10 shadow-sm">
                    <span className="text-xl font-bold text-slate-900 leading-none">{phase.number}</span>
                  </div>

                  <div className={`grid md:grid-cols-2 gap-12 md:gap-24 items-start ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    {/* Left Column - Content Description */}
                    <div className={`${index % 2 === 1 ? "md:order-2 md:pl-0" : "md:pr-0 md:text-right"}`}>
                      <div className={`flex items-center gap-4 mb-8 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <div className="md:hidden w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 text-secondary flex items-center justify-center shadow-sm">
                          <phase.icon className="h-6 w-6" />
                        </div>
                        <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 mb-4 backdrop-blur-md">
                            <span className="text-[10px] font-bold text-slate-600 tracking-[0.4em] uppercase">{phase.duration}</span>
                          </div>
                          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tighter leading-tight">
                            {phase.title}
                          </h2>
                          <p className="text-secondary font-bold text-[11px] uppercase tracking-[0.3em] mb-4">{phase.subtitle}</p>
                        </div>
                        <div className={`hidden md:flex w-14 h-14 rounded-2xl bg-white border border-slate-200 items-center justify-center text-secondary shadow-sm ${index % 2 === 1 ? "order-first" : "order-last"}`}>
                          <phase.icon className="h-6 w-6" />
                        </div>
                      </div>

                      <p className={`text-base md:text-xl text-slate-700 font-normal leading-relaxed mb-12 ${index % 2 === 0 ? "md:ml-auto max-w-xl" : "md:mr-auto max-w-xl"}`}>
                        {phase.description}
                      </p>

                      <div className={`p-8 md:p-12 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden group shadow-2xl ${index % 2 === 0 ? "md:ml-auto" : ""} max-w-md border border-white/5`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
                        <h4 className="text-[10px] font-bold text-secondary uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
                          STRATEGIC YIELD
                        </h4>
                        <ul className="space-y-4">
                          {phase.outcomes.map((outcome, i) => (
                            <li key={i} className={`flex items-center gap-3 text-sm text-slate-200 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                              <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                              <span className="font-light tracking-wide">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column - Activities Card */}
                    <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <div className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-secondary/20 transition-all duration-500 group relative">
                        <h3 className="text-xl font-bold text-slate-900 mb-10 tracking-tight flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-secondary" />
                          PHASE EXECUTION ACTIVITIES
                        </h3>
                        <ul className="grid grid-cols-1 gap-6">
                          {phase.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-5">
                              <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 shadow-lg shadow-secondary/20 transition-transform group-hover:scale-110">
                                {i + 1}
                              </div>
                              <span className="text-slate-700 text-[16px] font-normal leading-relaxed">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Global V2 CTA matching new UI */}
        <CTASectionV2 />
      </main>
    </Layout>
  );
}
