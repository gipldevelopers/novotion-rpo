"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, Settings, Rocket, TrendingUp, CheckCircle, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    number: "01",
    icon: Search,
    title: "Audit",
    subtitle: "Where Are You Actually Right Now?",
    duration: "PHASE I",
    description: "Before we recommend anything, we get in deep. We map every process, every gap, and every wasted resource across your business so the plan we build is based on reality, not assumptions.",
    activities: [
      "Full operational audit across all five service areas",
      "Stakeholder interviews & process discovery",
      "Tech stack and tools review",
      "Market and competitor benchmarking",
      "KPI baseline setting",
      "Implementation roadmap sign-off",
    ],
    outcomes: [
      "Honest baseline of your current operations",
      "Clear list of highest-impact quick wins",
      "Custom implementation plan built for your business",
    ],
  },
  {
    number: "02",
    icon: Settings,
    title: "Blueprint",
    subtitle: "Here's Exactly What We'll Build",
    duration: "PHASE II",
    description: "No vague proposals. We come back with a precise execution plan—tools, workflows, team structure, timelines, and success metrics mapped to your exact requirements.",
    activities: [
      "Specialist team briefed and onboarded",
      "Platform and CRM integrations built",
      "Process playbooks created per service line",
      "Brand tone, messaging and guidelines set",
      "Reporting dashboards configured",
      "Communication protocols established",
    ],
    outcomes: [
      "Fully embedded service team ready for go-live",
      "All integrations, tools and platforms configured",
      "Process playbooks written and approved",
    ],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Ignition",
    subtitle: "We Go Live All Engines Running",
    duration: "PHASE III",
    description: "This is where it gets real. Every service line activates. Candidates are being sourced, campaigns go live, automations fire, leads enter the pipeline, and your books are being managed.",
    activities: [
      "Recruitment sourcing, screening and pipeline active",
      "Marketing campaigns live across all channels",
      "Automation workflows running and monitored",
      "Outbound BD sequences and CRM operational",
      "Finance and bookkeeping management commenced",
      "Weekly reporting and check-ins initiated",
    ],
    outcomes: [
      "Active pipeline across recruitment and business development",
      "Campaigns live and generating measurable output",
      "Operational costs tracked and reducing from week one",
    ],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Compound",
    subtitle: "Every Month Better Than the Last",
    duration: "PHASE IV",
    description: "The longer we work together, the better we get at delivering for you. We review data, refine what needs improving, and scale up what's working so results compound over time.",
    activities: [
      "Quarterly strategy and performance reviews",
      "Predictive analytics and forecasting",
      "Service capacity scaling based on growth targets",
      "Automation optimisation and new workflow builds",
      "Employer brand and market positioning evolution",
      "Succession planning and advisory support",
    ],
    outcomes: [
      "Compounding ROI across every active service line",
      "Scalable delivery capacity that grows with you",
      "Market advantage that widens month by month",
    ],
  },
];

export function ProcessSteps() {
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
    <section className="py-24 md:py-40 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container-premium px-6 md:px-12 relative">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-secondary text-[10px] font-bold uppercase tracking-[0.4em] mb-6"
            >
                <Sparkles className="h-4 w-4" />
                Our Methodology
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tighter leading-tight font-display">
                How We Make It <span className="text-secondary italic">Happen</span>
            </h2>
        </div>

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
                      <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tighter leading-tight font-display">
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
                    <h3 className="text-xl font-bold text-slate-900 mb-10 tracking-tight flex items-center gap-2 font-display">
                      <Sparkles className="h-5 w-5 text-secondary" />
                      PHASE EXECUTION ACTIVITIES
                    </h3>
                    <ul className="grid grid-cols-1 gap-6">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-5">
                          <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 shadow-lg shadow-secondary/20 transition-transform group-hover:scale-110">
                            {i + 1}
                          </div>
                          <span className="text-slate-700 text-[15px] font-normal leading-relaxed">{activity}</span>
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
  );
}
