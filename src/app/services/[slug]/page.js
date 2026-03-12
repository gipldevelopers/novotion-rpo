"use client";

import { Layout } from "@/components/layout/Layout";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceDetailContent } from "@/components/services/ServiceDetailContent";
import { ProcessSteps } from "@/components/process/ProcessSteps";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { CTASectionV2 } from "@/components/home-v2/CTASectionV2";
import { Briefcase, Users, Layout as LayoutIcon, Cog, Target } from "lucide-react";
import { useParams } from "next/navigation";

// ... (servicesData remains unchanged)
const servicesData = [
    {
        id: "recruitment",
        slug: "recruitment-services",
        icon: Users,
        tag: "Hire Smarter",
        title: "Recruitment That Actually Delivers Results",
        description: "Stop losing to slow hiring. We source, screen, and place right-fit candidates cutting time-to-fill by 60%.",
        overview: "Many businesses lose time and money on hiring that goes nowhere—random job posts, unsuitable applicants, and no structured process. Our approach is built around one objective: placing the right talent in the right role as efficiently as possible. No unnecessary complexity. No guesswork. Just reliable outcomes.",
        whatYouGet: [
            {
                title: "End-to-End Recruitment",
                head: "Complete Hiring Support from Start to Finish",
                description: "We manage your recruitment process from the initial job description to the moment your new employee joins the team. Our model supports both high-volume recruitment and specialised searches across sectors like healthcare, technology, finance, and engineering.",
                items: [
                    "Full Recruitment Lifecycle Management",
                    "Candidate Screening & Qualification",
                    "Technical and Culture-Fit Evaluation",
                    "ATS & VMS Platform Integration",
                    "CV Preparation and Candidate Submission",
                    "Interview Scheduling & Coordination",
                    "Offer Negotiation and Onboarding Support"
                ]
            },
            {
                title: "Talent Sourcing",
                head: "Access Talent Before the Competition Does",
                description: "Exceptional candidates are rarely found by simply posting job ads. Our sourcing specialists identify professionals through targeted research, industry networks, and specialised communities—often connecting with candidates who aren’t actively job hunting but are open to the right opportunity.",
                items: [
                    "Active & Passive Talent Identification",
                    "Advanced Boolean Search Techniques",
                    "Executive Search & Headhunting",
                    "Talent Pool Development",
                    "ATS-Optimised Candidate Profiles",
                    "Shortlisting, Pre-Screening & Market Mapping"
                ]
            },
            {
                title: "Admin Support",
                head: "Let Us Handle the Details Behind the Hire",
                description: "Successful recruitment involves far more than interviews. Our support team manages the operational tasks that keep your hiring process running smoothly, freeing you to focus on selecting the right people.",
                items: [
                    "CV Formatting & Documentation Management",
                    "Interview Scheduling & Calendar Coordination",
                    "Vendor & VMS Communication",
                    "Timesheet Processing & Payroll Support",
                    "Compliance Documentation & Admin Assistance"
                ]
            },
            {
                title: "Market Mapping",
                head: "Understand the Talent Market Before You Recruit",
                description: "Hiring decisions are stronger when backed by reliable market insights. Our market research provides visibility into talent availability, salary benchmarks, and competitor hiring strategies.",
                items: [
                    "Competitor Hiring Analysis",
                    "Salary Benchmarking & Compensation Insights",
                    "Talent Pool & Market Research",
                    "Organisational Structure Analysis",
                    "Industry Hiring Trends & Talent Movement"
                ]
            },
            {
                title: "Onboarding & Compliance",
                head: "Every Hire Ready and Compliant from Day One",
                description: "We ensure every candidate meets the necessary legal, professional, and industry requirements before they begin work—reducing risk and ensuring a smooth onboarding experience.",
                items: [
                    "Right-to-Work & Background Checks",
                    "Credential & Licence Verification",
                    "Regulatory Compliance (NHS, Joint Commission & others)",
                    "Certification Tracking & Renewals",
                    "Contractor Onboarding & Contract Handling",
                    "Timesheet Monitoring & Contractor Support"
                ]
            }
        ],
        bestFor: "You're spending 60+ days filling roles that should take two weeks. You've had wrong-fit hires that cost you more than the agency fee. You want the process handled properly, this time.",
        outcomes: [
            "Up to 60% faster time-to-fill",
            "50% reduction in cost-per-hire",
            "Higher offer acceptance rates",
            "Full compliance from day one"
        ],
        faqs: [
            { question: "How long does it usually take to fill a role?", answer: "Hiring timelines vary depending on the role and industry, but most positions can be filled within a few weeks. Our structured sourcing and screening process helps reduce hiring time significantly compared to traditional recruitment methods." },
            { question: "What industries do you recruit for?", answer: "We support recruitment across several sectors including healthcare, technology, finance, engineering, and other professional services. Our recruiters understand the specific requirements of each industry." },
            { question: "Do you only source candidates or manage the full recruitment process?", answer: "We can handle the entire hiring process from sourcing and screening candidates to interview coordination, offer management, and onboarding support." },
            { question: "What makes your recruitment process different?", answer: "We combine experienced recruiters with advanced sourcing tools and data-driven search techniques. This allows us to identify both active job seekers and passive candidates who may not be visible through standard job postings." },
            { question: "Can you support high-volume hiring?", answer: "Yes. Our recruitment model is designed to support both single critical hires and large-scale recruitment projects when companies need to build or expand teams quickly." },
            { question: "Do you provide candidate screening and assessments?", answer: "Yes. We conduct structured pre-screening, skills assessments, and cultural fit evaluations before presenting candidates to ensure they meet your requirements." },
            { question: "Can you integrate with our existing recruitment tools or ATS?", answer: "Absolutely. We work with most Applicant Tracking Systems (ATS) and Vendor Management Systems (VMS) to ensure a seamless recruitment workflow." }
        ],
    },
    {
        id: "biz-dev",
        slug: "business-development",
        icon: Briefcase,
        tag: "Grow on Purpose",
        title: "Growth Needs a Plan, Not Just Hope",
        description: "Referrals aren't a growth strategy. We build the outbound systems and pipelines that bring the right clients to you.",
        overview: "Many businesses rely on referrals, occasional deals, or random opportunities to grow. While that might work for a while, it rarely leads to stable, predictable revenue. Our business development approach focuses on building a structured system that attracts opportunities, develops relationships, and converts them into long-term business success.",
        whatYouGet: [
            {
                title: "Growth Strategy",
                head: "Define the Direction of Your Business",
                description: "Before growth can happen, there needs to be a clear path forward. We work closely with you to understand your market, evaluate opportunities, and develop a realistic strategy that aligns with your goals.",
                items: [
                    "Business Performance & Growth Analysis",
                    "Revenue Planning & Target Setting",
                    "Market Opportunity Research",
                    "Competitor & Industry Landscape Review",
                    "Strategic Growth Roadmap Creation",
                    "Ongoing Strategy Reviews & Adjustments"
                ]
            },
            {
                title: "Partnership Development",
                head: "Build Relationships That Open New Doors",
                description: "Strong partnerships can create opportunities that traditional sales cannot. We help you identify and connect with organisations, partners, and networks that can expand your reach and create mutually beneficial collaborations.",
                items: [
                    "Strategic Partner Identification",
                    "Partnership Outreach & Communication",
                    "Referral Network Development",
                    "Stakeholder Relationship Management",
                    "Collaboration & Alliance Support"
                ]
            },
            {
                title: "Outbound Sales & Prospecting",
                head: "Consistent Outreach. Consistent Opportunities.",
                description: "Relying only on inbound leads limits growth. Our team actively identifies potential clients and reaches out with personalised communication that starts meaningful conversations and opens new opportunities.",
                items: [
                    "Ideal Client Profile Development",
                    "Prospect List Creation & Verification",
                    "Personalised Outreach Messaging",
                    "Cold Email & LinkedIn Campaigns",
                    "Follow-Up Sequences & Pipeline Nurturing",
                    "Appointment Scheduling & Sales Handover"
                ]
            },
            {
                title: "Proposal & Pitch Support",
                head: "Present Your Value with Confidence",
                description: "Winning new business often depends on how clearly your value is communicated. We help craft professional proposals and compelling presentations that explain your services, highlight your strengths, and increase your chances of closing deals.",
                items: [
                    "Proposal Writing & Structuring",
                    "Pitch Deck Design & Messaging",
                    "Business Case Preparation",
                    "Tender & RFP Response Support",
                    "Value Proposition Development"
                ]
            },
            {
                title: "Market Expansion",
                head: "Explore New Markets and Revenue Opportunities",
                description: "Expanding into new markets can unlock significant growth potential when done with the right strategy. We help you research opportunities, plan entry strategies, and launch new services or markets with confidence.",
                items: [
                    "New Market Research & Evaluation",
                    "Geographic Expansion Planning",
                    "Target Audience & Segment Analysis",
                    "New Service Launch Strategies",
                    "Go-To-Market Planning & Support"
                ]
            },
            {
                title: "CRM & Pipeline Management",
                head: "Keep Every Opportunity Organised and Moving Forward",
                description: "A structured pipeline ensures that no opportunity is forgotten. We implement and manage CRM systems that track every lead, monitor progress, and keep your sales process organised and efficient.",
                items: [
                    "CRM Setup & Custom Configuration (HubSpot, Zoho, GoHighLevel & more)",
                    "Sales Pipeline Design & Management",
                    "Lead Scoring & Opportunity Prioritisation",
                    "Automated Follow-Up Systems",
                    "Deal Tracking & Revenue Forecasting",
                    "Performance Dashboards & Reporting"
                ]
            }
        ],
        bestFor: "Your pipeline is built on referrals and luck. You don't have an outbound system, a proper CRM, or the bandwidth to chase new clients consistently. Revenue is reactive. Growth is unpredictable.",
        outcomes: [
            "Predictable monthly lead flow - not referral reliance",
            "Shorter, more structured sales cycles",
            "Higher win rates on proposals and pitches",
            "New markets entered and monetized faster"
        ],
        faqs: [
            { question: "What is business development and how can it help my company?", answer: "Business development focuses on creating new opportunities for growth by building partnerships, generating leads, expanding into new markets, and strengthening your sales pipeline." },
            { question: "How do you generate leads for our business?", answer: "We identify your ideal customers, build targeted prospect lists, and conduct personalised outreach through channels like email and LinkedIn to start meaningful conversations." },
            { question: "Do you help build partnerships with other companies?", answer: "Yes. We help identify strategic partners, initiate discussions, and build collaborations that can expand your reach and create new business opportunities." },
            { question: "Can you support our sales team?", answer: "Absolutely. We help with prospecting, lead generation, pipeline management, and meeting booking so your sales team can focus on closing deals." },
            { question: "Do you provide help with proposals and presentations?", answer: "Yes. We assist in creating professional proposals, pitch decks, and business cases that clearly communicate your value to potential clients." },
            { question: "Can you help us enter new markets?", answer: "Yes. We conduct market research and create go-to-market strategies to help businesses successfully expand into new regions or industries." },
            { question: "Do you help implement CRM systems?", answer: "Yes. We set up and manage CRM platforms to track leads, manage relationships, and keep your sales pipeline organised." },
            { question: "How long does it take to see results from business development activities?", answer: "Initial conversations and opportunities can start within weeks, while consistent pipeline growth usually builds over a few months." }
        ],
    },
    {
        id: "marketing",
        slug: "marketing-support",
        icon: LayoutIcon,
        tag: "Grow Louder",
        title: "Marketing That Delivers Real Impact",
        description: "From SEO and social to paid ads and email—every channel managed, every pound tied to leads and real revenue growth.",
        overview: "Many businesses invest in marketing but see very little return. Random social posts, email campaigns no one opens, and ads without a clear strategy waste both time and budget. Our approach is simple—reach the right audience with the right message at the right moment. Everything we do is built around performance, consistency, and measurable results.",
        whatYouGet: [
            {
                title: "Social Media Management",
                head: "Stay Visible. Stay Relevant. Stay Connected.",
                description: "Your audience spends hours on social media every day. The question is whether they’re discovering your brand or someone else’s. We manage your entire social media presence, creating engaging content and consistent activity that strengthens your brand and builds meaningful connections with your audience.",
                items: [
                    "Social Media Strategy & Account Optimisation",
                    "Creative Content (Graphics, Reels & Captions)",
                    "Consistent Scheduling & Publishing",
                    "Audience Engagement & Community Management",
                    "Monthly Analytics & Performance Reporting",
                    "Competitor Monitoring & Trend Insights"
                ]
            },
            {
                title: "SEO & Content Marketing",
                head: "Be the Business People Find First",
                description: "When potential customers search online, your business needs to appear where they’re looking. Our SEO and content strategies help you rank higher, attract qualified traffic, and build long-term credibility online.",
                items: [
                    "Technical & On-Page SEO Audits",
                    "Keyword Research & SEO Strategy",
                    "Blog Writing & Content Development",
                    "Website Content Optimisation",
                    "Local SEO for Regional Visibility",
                    "Backlink Development & Authority Building",
                    "Monthly SEO Insights & Reporting"
                ]
            },
            {
                title: "Email Marketing",
                head: "Turn Your Email List into a Revenue Channel",
                description: "Email remains one of the most effective ways to build relationships with customers. We design targeted email campaigns that inform, engage, and convert subscribers into loyal clients.",
                items: [
                    "Email Campaign Planning & Strategy",
                    "Email Template Design & Copywriting",
                    "Audience Segmentation & List Management",
                    "Automated Email Sequences & Drip Campaigns",
                    "A/B Testing & Campaign Optimisation",
                    "Deliverability Tracking & Performance Reporting"
                ]
            },
            {
                title: "Paid Advertising (Google & Meta)",
                head: "Reach the Right Customers at the Right Time",
                description: "Paid advertising allows you to reach your ideal audience quickly and effectively. Our team builds and manages performance-focused campaigns across Google and Meta platforms, ensuring every advertising pound is spent wisely.",
                items: [
                    "Google Search & Display Advertising",
                    "Facebook & Instagram Ad Campaigns",
                    "Audience Research & Targeting Strategy",
                    "Ad Creative Development & Copywriting",
                    "Budget Management & Bid Optimisation",
                    "Conversion Tracking & ROI Reporting"
                ]
            },
            {
                title: "Branding & Design",
                head: "Build a Brand People Recognise and Trust",
                description: "Your brand is often the first impression someone has of your business. We help you create a professional, consistent identity that communicates your value clearly and leaves a lasting impression.",
                items: [
                    "Logo Creation & Brand Identity Design",
                    "Brand Guidelines & Visual Style Systems",
                    "Social Media Templates & Creative Assets",
                    "Marketing Materials (Flyers, Brochures, Banners)",
                    "Presentation & Pitch Deck Design"
                ]
            }
        ],
        bestFor: "Your marketing is scattered—inconsistent posts, emails that go unopened, and ad spend with nothing to show for it. You know you need to be more visible. You just need someone who actually knows how.",
        outcomes: [
            "More qualified inbound leads, lower cost",
            "Organic traffic that builds month after month",
            "Higher conversion on paid ad spend",
            "Consistent brand presence across every channel"
        ],
        faqs: [
            { question: "What marketing services do you provide?", answer: "We offer a full range of marketing support including social media management, SEO, content marketing, email campaigns, paid advertising, branding, and design services." },
            { question: "How long does it take to see results from marketing efforts?", answer: "Some strategies like paid advertising can generate results quickly, while SEO and organic marketing typically take a few months to build strong long-term growth." },
            { question: "Do you create content for social media and blogs?", answer: "Yes. Our team produces graphics, videos, blog posts, captions, and other content designed to engage your audience and strengthen your brand presence." },
            { question: "Can you manage advertising campaigns for us?", answer: "Yes. We plan, launch, and optimise campaigns on platforms like Google Ads, Facebook, and Instagram to attract the right audience and maximise your marketing budget." },
            { question: "Do you provide reports on marketing performance?", answer: "Yes. We provide regular performance reports that show how your campaigns are performing, including traffic, engagement, leads, and conversions." },
            { question: "Can you help improve our website’s visibility on Google?", answer: "Yes. Our SEO strategies focus on improving your search rankings, increasing website traffic, and helping potential customers find your business more easily." },
            { question: "Do you work with small businesses or only large companies?", answer: "We work with businesses of all sizes. Our marketing strategies are customised based on your goals, budget, and target audience." },
            { question: "Do we need long-term contracts?", answer: "No. Our services are flexible and can be adjusted based on your business needs and growth plans." }
        ],
    },
    {
        id: "ai-automation",
        slug: "ai-automation",
        icon: Cog,
        tag: "Work Smarter",
        title: "Build Systems That Work Even When You’re Not",
        description: "Your team shouldn't do manually what a workflow handles in seconds. We build the automations that give your time back.",
        overview: "Every business has processes that consume hours of valuable time—data entry, manual follow-ups, repetitive admin tasks, and disconnected tools. We help you transform those processes into intelligent systems that run automatically, allowing your business to operate more efficiently every day.",
        whatYouGet: [
            {
                title: "Workflow Automation",
                head: "Simplify Your Processes and Eliminate Bottlenecks",
                description: "We analyse how your business currently operates and redesign those workflows with automation at the core. The result is smoother operations, fewer delays, and systems that work reliably without constant manual input.",
                items: [
                    "Process Analysis & Workflow Mapping",
                    "End-to-End Business Process Automation",
                    "Task Assignment & Approval Workflow Automation",
                    "Multi-Platform Integration (CRM, Email, Databases & more)",
                    "Real-Time Notifications & Status Updates",
                    "Custom Automation Planning & Implementation"
                ]
            },
            {
                title: "AI Chatbots & Virtual Assistants",
                head: "Support Customers and Capture Leads Around the Clock",
                description: "Customers expect instant responses. AI-powered chatbots and virtual assistants allow your business to answer questions, qualify leads, and book appointments at any time of day. These systems are trained on your business information so conversations stay relevant and helpful.",
                items: [
                    "Custom AI Chatbot Development",
                    "Lead Capture & Qualification Bots",
                    "Appointment Scheduling Automation",
                    "Customer Support & FAQ Automation",
                    "Integration with Website, WhatsApp & Social Platforms",
                    "Chatbot Testing, Training & Performance Optimisation"
                ]
            },
            {
                title: "AI Reporting & Analytics",
                head: "Turn Your Business Data into Clear Insights",
                description: "Data is only valuable when it’s easy to understand and act on. We build automated reporting systems that collect data from multiple platforms, analyse it, and present it through clear dashboards and reports.",
                items: [
                    "Automated Data Collection & Integration",
                    "Custom Dashboard Setup (Looker Studio, Power BI & more)",
                    "Sales, Marketing & Operations Reporting",
                    "KPI Monitoring & Automated Alerts",
                    "Predictive Insights & Trend Analysis"
                ]
            },
            {
                title: "Marketing & Sales Automation",
                head: "Keep Your Sales Funnel Moving Automatically",
                description: "Consistent follow-ups and timely communication are essential for turning leads into customers. We design automated marketing and sales systems that nurture prospects, send targeted messages, and guide them through your sales process.",
                items: [
                    "Automated Lead Nurturing Workflows",
                    "CRM Setup & Sales Automation",
                    "Follow-Up Campaigns & Re-Engagement Sequences",
                    "Pipeline Stage Automation",
                    "Sales Tracking & Performance Monitoring"
                ]
            },
            {
                title: "Systems Integration",
                head: "Connect Your Tools and Create One Unified System",
                description: "Many businesses use multiple tools that don’t communicate with each other. We integrate your existing software so information flows automatically between platforms, reducing manual work and improving accuracy.",
                items: [
                    "Third-Party Platform Integration",
                    "API Configuration & Custom Connections",
                    "CRM, Email & Calendar Synchronisation",
                    "Payment Gateway & E-commerce Integration",
                    "Zapier, Make (Integromat) & Custom Automation Solutions"
                ]
            },
            {
                title: "AI Content Assistance",
                head: "Create More Content Without Increasing Your Workload",
                description: "Content is essential for marketing, but producing it consistently can be time-consuming. We implement AI-assisted content systems that help you generate blogs, emails, and social media posts while maintaining your brand’s tone and quality.",
                items: [
                    "AI Content Workflow Setup",
                    "Brand Voice & Style Configuration",
                    "Blog, Email & Social Content Generation",
                    "Automated Content Calendars",
                    "SEO-Optimised Content Output"
                ]
            }
        ],
        bestFor: "Your team is drowning in manual tasks. Leads are falling through the cracks. Tools don't talk to each other. You're doing the same repetitive work every day and you know a system should be doing it.",
        outcomes: [
            "Save 20+ hours of manual work per week",
            "Up to 90% fewer process errors",
            "24/7 automated lead capture and follow-up",
            "Scale operations without growing headcount"
        ],
        faqs: [
            { question: "What types of tasks can be automated in a business?", answer: "Many repetitive tasks can be automated, including lead follow-ups, data entry, reporting, email campaigns, appointment scheduling, and customer support responses." },
            { question: "Will automation replace our team members?", answer: "No. Automation is designed to support your team by handling repetitive work, allowing employees to focus on higher-value tasks such as strategy and customer relationships." },
            { question: "How long does it take to implement automation systems?", answer: "Implementation time depends on the complexity of the workflow, but many automation solutions can be designed, tested, and launched within a few weeks." },
            { question: "Can automation integrate with our current tools?", answer: "Yes. We integrate automation with many common platforms including CRM systems, email tools, spreadsheets, and other business software." },
            { question: "Do you build AI chatbots for customer support?", answer: "Yes. We design intelligent chatbots that can answer questions, capture leads, schedule appointments, and provide customer support 24/7." },
            { question: "Will automation improve our reporting and data analysis?", answer: "Yes. Automated reporting systems collect data from multiple sources and display it in clear dashboards so you can make faster, better decisions." },
            { question: "Is automation only useful for large companies?", answer: "Not at all. Small and growing businesses often benefit the most because automation allows them to scale operations without increasing staff costs." },
            { question: "Do you provide training for our team after implementation?", answer: "Yes. We guide your team on how to use and manage automation tools so they can fully benefit from the system." }
        ],
    },
    {
        id: "finance",
        slug: "accounting-finance",
        icon: Target,
        tag: "Know Your Numbers",
        title: "Strong Businesses Are Built on Financial Clarity",
        description: "Clean books, accurate payroll, zero missed deadlines—and a clear view of your finances without the cost of a full-time hire.",
        overview: "Managing finances can quickly become overwhelming when you’re also responsible for running the business. From tracking expenses to preparing for taxes, financial management requires accuracy and consistency. Our accounting support provides you with a professional financial function without the cost of maintaining a full-time finance team.",
        whatYouGet: [
            {
                title: "Bookkeeping",
                head: "Accurate Records. Organised Finances. Complete Peace of Mind.",
                description: "Clean and organised financial records are essential for making confident business decisions. We keep your books accurate and updated so you always know the financial position of your company.",
                items: [
                    "Daily Transaction Recording",
                    "Bank & Credit Card Reconciliation",
                    "Expense Categorisation & Tracking",
                    "Monthly Financial Statements (Profit & Loss, Balance Sheet)",
                    "Chart of Accounts Setup & Maintenance",
                    "Cloud Accounting Software Setup (QuickBooks, Xero & others)"
                ]
            },
            {
                title: "Accounts Payable & Receivable",
                head: "Stay in Control of Your Cash Flow",
                description: "Healthy cash flow depends on timely invoicing, professional payment management, and clear tracking of receivables and payables. We manage these processes so you can maintain strong financial stability.",
                items: [
                    "Invoice Creation & Distribution",
                    "Payment Follow-Ups & Collections Assistance",
                    "Supplier Invoice Processing & Payments",
                    "Accounts Ageing Reports & Monitoring",
                    "Credit Control Management",
                    "Cash Flow Forecasting & Monitoring"
                ]
            },
            {
                title: "Payroll",
                head: "Reliable Payroll Processing Without the Stress",
                description: "Payroll must be accurate, compliant, and on time every time. We manage the full payroll process so your employees are paid correctly while your business remains compliant with tax and employment regulations.",
                items: [
                    "Weekly or Monthly Payroll Processing",
                    "Tax & Deduction Calculations",
                    "Payslip Preparation & Distribution",
                    "Pension Contribution Management",
                    "New Employee & Exit Payroll Processing",
                    "Payroll Compliance Reporting",
                    "Year-End Payroll Submissions"
                ]
            },
            {
                title: "Financial Reporting",
                head: "Understand the Financial Health of Your Business",
                description: "Numbers alone don’t help unless they are clear and meaningful. We prepare detailed financial reports that show how your business is performing and help you make informed decisions.",
                items: [
                    "Monthly & Quarterly Financial Reports",
                    "Profit & Loss Performance Analysis",
                    "Budget vs Actual Comparison Reports",
                    "Cash Flow Statements & Projections",
                    "KPI Dashboards & Financial Metrics",
                    "Management Accounts Preparation"
                ]
            },
            {
                title: "Budgeting & Financial Planning",
                head: "Plan Your Finances with Confidence",
                description: "A well-structured budget provides direction and control over your finances. We help you create practical financial plans and monitor performance to ensure your business stays aligned with its goals.",
                items: [
                    "Annual Budget Planning",
                    "Department & Project Budget Management",
                    "Rolling Financial Forecasts",
                    "Scenario & Risk Analysis",
                    "Cost Reduction Strategies",
                    "Investment Planning & ROI Analysis"
                ]
            },
            {
                title: "Tax & Compliance",
                head: "Stay Compliant and Avoid Unnecessary Risk",
                description: "Tax regulations can be complex and time-consuming to manage. Our team ensures your business meets all compliance requirements while identifying legitimate ways to reduce tax liabilities.",
                items: [
                    "VAT Return Preparation & Submission",
                    "Corporation Tax Support & Preparation",
                    "Self-Assessment Tax Returns",
                    "Tax Compliance Reviews",
                    "HMRC Communication Management",
                    "Tax Planning & Liability Optimisation",
                    "Year-End Accounts Preparation"
                ]
            }
        ],
        bestFor: "You're running your finances from a spreadsheet at 10pm. You've missed deadlines, had cash flow surprises, or can't tell if your business is actually profitable. You need a finance team without hiring one.",
        outcomes: [
            "Save up to 60% vs full-time in-house accountant",
            "Never miss a tax deadline or payroll run",
            "Real-time view of your financial position",
            "Decisions backed by data, not guesswork"
        ],
        faqs: [
            { question: "What accounting services do you provide?", answer: "We provide bookkeeping, payroll management, financial reporting, tax preparation, budgeting, cash flow management, and compliance support." },
            { question: "Do you work with cloud accounting software?", answer: "Yes. We work with popular platforms such as QuickBooks, Xero, and other cloud-based accounting systems to manage your financial records efficiently." },
            { question: "How often will I receive financial reports?", answer: "Most clients receive monthly financial reports, but reporting schedules can be customised depending on your business requirements." },
            { question: "Can you manage payroll for my employees?", answer: "Yes. We handle the entire payroll process including calculations, payslips, deductions, compliance, and year-end reporting." },
            { question: "Will you help us manage cash flow?", answer: "Yes. We monitor incoming and outgoing payments, prepare cash flow forecasts, and provide guidance to maintain financial stability." },
            { question: "Do you assist with tax preparation and compliance?", answer: "Yes. We help prepare tax returns, ensure compliance with regulations, and identify opportunities to minimise tax liabilities where possible." },
            { question: "Can you support businesses in different countries?", answer: "Yes. We support international businesses and work with various financial regulations depending on the client’s location." },
            { question: "Is outsourcing accounting better than hiring an in-house accountant?", answer: "For many businesses, outsourcing provides professional financial expertise at a lower cost while removing the need to hire and manage a full-time finance team." }
        ],
    },
];


export default function ServiceDetail() {
    const params = useParams();
    const slug = params?.slug;

    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        return (
            <Layout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-20">
                    <h1 className="text-4xl font-bold mb-4 font-display">Service Specification Not Found</h1>
                    <p className="text-slate-500 mb-8">The service offering you're looking for could not be located.</p>
                    <a href="/services" className="px-6 py-3 bg-secondary text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#b04f30] transition-colors">
                        Return to All Services
                    </a>
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
                <ProcessSteps />
                <ServiceFAQ faqs={service.faqs} />
                <CTASectionV2 />
            </main>
        </Layout>
    );
}
