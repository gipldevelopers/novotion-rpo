"use client";

import { use } from "react";
import { Layout } from "@/components/layout/Layout";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceDetailContent } from "@/components/services/ServiceDetailContent";
import { CTASectionV2 } from "@/components/home-v2/CTASectionV2";
import { Briefcase, Users, Layout as LayoutIcon, Cog, Target } from "lucide-react";

const servicesData = [
    {
        id: "recruitment",
        slug: "recruitment-services",
        icon: Users,
        tag: "Hire Smarter",
        title: "The Right Person. To The Right Role.",
        description: "Stop losing to slow hiring. We source, screen, and place right-fit candidates cutting time-to-fill by 60%.",
        overview: "From writing the job brief to welcoming your new hire—we own the entire recruitment process. Sourcing, screening, compliance, offer management, and onboarding, all handled without you lifting a finger.",
        whatYouGet: [
            "End-to-End Recruitment Management",
            "Active & Passive Candidate Sourcing",
            "Boolean Search & Headhunting",
            "Skills, Culture & Competency Assessment",
            "Right-to-Work, DBS & Compliance Checks",
            "Onboarding Coordination & Contractor Admin"
        ],
        bestFor: "You're spending 60+ days filling roles that should take two weeks. You've had wrong-fit hires that cost you more than the agency fee. You want the process handled properly, this time.",
        outcomes: [
            "Up to 60% faster time-to-fill",
            "50% reduction in cost-per-hire",
            "Higher offer acceptance rates",
            "Full compliance from day one"
        ],
    },
    {
        id: "marketing",
        slug: "marketing-support",
        icon: LayoutIcon,
        tag: "Grow Louder",
        title: "Marketing That Actually Earns Its Budget Back",
        description: "From SEO and social to paid ads and email—every channel managed, every pound tied to leads and real revenue growth.",
        overview: "Full-spectrum marketing management—social media, SEO, Google and Meta ads, email campaigns, and brand design. Every channel working in sync, every campaign built around driving actual revenue.",
        whatYouGet: [
            "Social Media Strategy, Content & Scheduling",
            "SEO Audits, Blog Writing & Website Copy",
            "Google Search, Display & Shopping Ads",
            "Meta (Facebook & Instagram) Ad Campaigns",
            "Email Marketing, Sequences & A/B Testing",
            "Brand Identity, Design & Marketing Collateral"
        ],
        bestFor: "Your marketing is scattered—inconsistent posts, emails that go unopened, and ad spend with nothing to show for it. You know you need to be more visible. You just need someone who actually knows how.",
        outcomes: [
            "More qualified inbound leads, lower cost",
            "Organic traffic that builds month after month",
            "Higher conversion on paid ad spend",
            "Consistent brand presence across every channel"
        ],
    },
    {
        id: "ai-automation",
        slug: "ai-automation",
        icon: Cog,
        tag: "Work Smarter",
        title: "Let Your Systems Do the Heavy Lifting",
        description: "Your team shouldn't do manually what a workflow handles in seconds. We build the automations that give your time back.",
        overview: "We map your current workflows, identify every manual bottleneck, and replace them with intelligent systems—chatbots, automated pipelines, connected platforms—that run your operations without human input.",
        whatYouGet: [
            "Business Process Mapping & Automation Audit",
            "Custom AI Chatbot Design, Build & Training",
            "CRM, Email, Calendar & Platform Integrations",
            "Zapier, Make, n8n & Custom API Builds",
            "Automated Lead Capture & Follow-Up Sequences",
            "AI Reporting Dashboards & KPI Tracking"
        ],
        bestFor: "Your team is drowning in manual tasks. Leads are falling through the cracks. Tools don't talk to each other. You're doing the same repetitive work every day and you know a system should be doing it.",
        outcomes: [
            "Save 20+ hours of manual work per week",
            "Up to 90% fewer process errors",
            "24/7 automated lead capture and follow-up",
            "Scale operations without growing headcount"
        ],
    },
    {
        id: "biz-dev",
        slug: "business-development",
        icon: Briefcase,
        tag: "Grow on Purpose",
        title: "Build Revenue You Can Actually Predict",
        description: "Referrals aren't a growth strategy. We build the outbound systems and pipelines that bring the right clients to you.",
        overview: "Outbound prospecting, CRM management, growth strategy, proposal writing, and partnership development—all designed to fill your pipeline with qualified opportunities and turn them into revenue.",
        whatYouGet: [
            "Growth Strategy, Market Mapping & Revenue Planning",
            "Ideal Client Profile Building & Prospect Lists",
            "Cold Email & LinkedIn Outreach Campaigns",
            "CRM Setup, Pipelines & Automated Follow-Ups",
            "Proposal Writing, Pitch Decks & Tender Responses",
            "Partnership Outreach & Referral Network Building"
        ],
        bestFor: "Your pipeline is built on referrals and luck. You don't have an outbound system, a proper CRM, or the bandwidth to chase new clients consistently. Revenue is reactive. Growth is unpredictable.",
        outcomes: [
            "Predictable monthly lead flow - not referral reliance",
            "Shorter, more structured sales cycles",
            "Higher win rates on proposals and pitches",
            "New markets entered and monetized faster"
        ],
    },
    {
        id: "finance",
        slug: "accounting-finance",
        icon: Target,
        tag: "Know Your Numbers",
        title: "Financial Clarity Without the Overhead",
        description: "Clean books, accurate payroll, zero missed deadlines—and a clear view of your finances without the cost of a full-time hire.",
        overview: "Complete financial management—bookkeeping, payroll, accounts payable and receivable, VAT and tax filing, budgeting, and reporting without the salary, benefits, and overhead of hiring in-house.",
        whatYouGet: [
            "Daily Bookkeeping & Bank Reconciliation",
            "Payroll Processing, Payslips & Compliance",
            "Accounts Payable, Receivable & Credit Control",
            "VAT Returns, Corporation Tax & HMRC Filing",
            "Monthly P&L, Cash Flow & Financial Reports",
            "Annual Budgets, Forecasting & Scenario Planning"
        ],
        bestFor: "You're running your finances from a spreadsheet at 10pm. You've missed deadlines, had cash flow surprises, or can't tell if your business is actually profitable. You need a finance team without hiring one.",
        outcomes: [
            "Save up to 60% vs full-time in-house accountant",
            "Never miss a tax deadline or payroll run",
            "Real-time view of your financial position",
            "Decisions backed by data, not guesswork"
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
                <ServicesHero 
                    tag={service.tag}
                    title={service.title}
                    description={service.description}
                />
                <ServiceDetailContent service={service} />
                <CTASectionV2 />
            </main>
        </Layout>
    );
}
