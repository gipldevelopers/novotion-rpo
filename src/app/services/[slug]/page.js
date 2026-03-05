"use client";

import { use } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceDetailContent } from "@/components/services/ServiceDetailContent";
import { CTASectionV2 } from "@/components/home-v2/CTASectionV2";
import { Briefcase, Users, Building, Search, UserCheck } from "lucide-react";

const servicesData = [
    {
        id: "full-rpo",
        slug: "full-rpo-partnership",
        icon: Briefcase,
        title: "Full RPO Partnership",
        overview: "Complete end-to-end recruitment process outsourcing where we become your dedicated talent acquisition team, managing everything from requisition to onboarding.",
        whatYouGet: [
            "Dedicated recruitment team embedded in your organization",
            "Full lifecycle management from requisition to onboarding",
            "Employer branding and candidate experience optimization",
            "ATS implementation and management",
            "Comprehensive analytics and reporting",
            "Continuous process improvement initiatives",
        ],
        bestFor: "Enterprises with ongoing, high-volume hiring needs seeking to transform their entire recruitment function through strategic long-term partnership.",
        outcomes: [
            "50%+ reduction in cost-per-hire",
            "40% faster time-to-fill",
            "Improved quality of hire metrics",
            "Enhanced employer brand",
        ],
    },
    {
        id: "project-rpo",
        slug: "recruitment-on-demand",
        icon: Users,
        title: "Recruitment On-Demand",
        overview: "Flexible, project-based recruitment support for specific hiring campaigns, expansions, or seasonal peaks without the long-term commitment.",
        whatYouGet: [
            "Dedicated project team for defined scope",
            "Rapid ramp-up and ramp-down capability",
            "Project-specific KPIs and milestones",
            "Integration with existing processes",
            "Knowledge transfer upon completion",
            "Flexible contract terms",
        ],
        bestFor: "Companies with specific hiring projects, new market entries, or sudden seasonal hiring spikes that require immediate expert capacity.",
        outcomes: [
            "Rapid capacity scaling",
            "Controlled project costs",
            "Specialist expertise on demand",
            "No long-term commitment required",
        ],
    },
    {
        id: "offshore",
        slug: "offshore-recruitment-support",
        icon: Building,
        title: "Offshore Support",
        overview: "Cost-effective recruitment operations leveraging our skilled India-based team for maximum efficiency and round-the-clock delivery productivity.",
        whatYouGet: [
            "Dedicated offshore recruitment specialists",
            "Sourcing and initial screening",
            "Candidate database management",
            "Interview coordination",
            "Administrative support",
            "24/7 operational coverage",
        ],
        bestFor: "Organizations looking to extend their internal team's capacity while significantly reducing operational costs and overhead.",
        outcomes: [
            "60-70% cost reduction vs. onshore",
            "Extended working hours coverage",
            "Scalable support capacity",
            "Focus internal team on strategic work",
        ],
    },
    {
        id: "executive",
        slug: "executive-search-headhunting",
        icon: Search,
        title: "Executive Search",
        overview: "Specialized search services for senior leadership, C-suite, and hard-to-find specialist positions where discretion and depth matter most.",
        whatYouGet: [
            "Dedicated executive search consultant",
            "Comprehensive market mapping",
            "Discreet candidate approach",
            "Thorough assessment and referencing",
            "Offer negotiation support",
            "Onboarding guidance",
        ],
        bestFor: "Critical leadership hires where experience, wide industry network, and absolute discretion are paramount to success.",
        outcomes: [
            "Access to passive talent pools",
            "Reduced senior level hiring risk",
            "Faster executive placement",
            "Long-term leadership retention focus",
        ],
    },
    {
        id: "screening",
        slug: "candidate-pre-screening",
        icon: UserCheck,
        title: "Candidate Pre-Screening",
        overview: "Comprehensive candidate evaluation and preparation services to ensure only the highest caliber candidates reach your hiring managers.",
        whatYouGet: [
            "Skills and competency assessments",
            "Cultural fit evaluation",
            "Background and reference checking",
            "Interview preparation coaching",
            "Salary benchmarking",
            "Detailed candidate reports",
        ],
        bestFor: "Companies wanting to improve candidate quality, reduce time-wasted in interviews, and improve the interview-to-hire ratio.",
        outcomes: [
            "Higher interview-to-offer ratio",
            "Reduced hiring manager time waste",
            "Better prepared candidates",
            "More informed hiring decisions",
        ],
    },
];

export default function ServiceDetail({ params }) {
    const { slug } = use(params);
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        return (
            <Layout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-20">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <p className="text-slate-500 mb-8">The service specification you are looking for does not exist.</p>
                    <a href="/services" className="text-secondary font-bold uppercase tracking-widest">Back to all services</a>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <main className="bg-white">
                <ServicesHero />
                <ServiceDetailContent service={service} />
                <CTASectionV2 />
            </main>
        </Layout>
    );
}
