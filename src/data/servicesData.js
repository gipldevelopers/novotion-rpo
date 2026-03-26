import { Briefcase, Users, Layout as LayoutIcon, Cog, Target } from "lucide-react";

export const servicesData = [
    {
        id: "recruitment",
        shortTitle: "Recruitment Support",
        slug: "recruitment-services",
        icon: Users,
        title: "Extend Your Hiring Team. Don't Replace It.",
        description: "True RPO shouldn't feel like handing over the keys. It should feel like gaining a highly capable extension of your own team one that works within your systems, respects your processes, and delivers results without the friction of starting from scratch.\n\nAt Noltven, we plug directly into your recruitment function, bringing global reach, structured delivery, and the depth of execution your team needs without disrupting what's already working.\n\nWe don't take over we build alongside you.",
        cta: "Build Your Hiring Extension",
        intro: {
            title: "Outsourcing That Doesn't Compromise Control",
            overview: "Most outsourcing arrangements fall apart in predictable ways promises that outpace delivery, or a handover so complete that you lose visibility entirely. We built Noltven around a different model entirely.",
            points: [
                {
                    title: "The Overpromise Problem",
                    text: "You have been told before that an outsourced partner will transform your hiring. Targets are set. Expectations are raised. Then reality arrives. We don't overpromise we scope carefully and deliver consistently."
                },
                {
                    title: "The Disconnect Problem",
                    text: "Outsourcing fails when the partner operates in isolation. Misaligned candidates, missed briefings, communication gaps. At Noltven, your internal team remains the authority we operate within your structure, not around it."
                },
                {
                    title: "What We Do Instead",
                    text: "We operate as a controlled extension of your recruitment function giving you the capacity, speed, and global reach of a large team, while you retain the control and client relationships that define your brand."
                }
            ],
            highlights: [
                "Access to active and passive global talent pools across UK, EU, UAE, US, and APAC",
                "Consistent quality screening frameworks that align with your internal standards",
                "Faster turnaround on sourcing and submissions without overloading your recruiters",
                "A stronger, more reliable process built around your workflow, not ours"
            ]
        },
        whatYouGet: [
            {
                title: "End-to-End Recruitment",
                slug: "end-to-end-recruitment",
                head: "Full Support Where You Need It. Control Where It Matters.",
                description: "When outsourcing fails, it's usually because control was ceded too broadly. Decisions that should sit with your team end up being made by someone who doesn't know your clients, your brand, or your standards. We designed our delivery model to prevent exactly that.\n\nAt Noltven, we function as the execution engine behind your recruiters handling sourcing, screening, and coordination with precision, while your team stays focused on what it does best managing client relationships and closing placements. Think of it as adding another gear to your operation, without adding headcount.",
                howWeWork: [
                    "We take full responsibility for sourcing, pre-screening, and interview coordination from brief to shortlist",
                    "You retain complete oversight, all client interaction, and every final hiring decision",
                    "First shortlist delivered within 48–72 hours, with defined quality checkpoints at every stage",
                    "Designed to flex around tight client SLAs, VMS platforms, and multi-market hiring programmes"
                ],
                benefits: [
                    "Improve your submission-to-interview ratio with candidates who are genuinely pre-qualified not just profile-matched",
                    "Reduce time-to-submit without placing additional pressure on your recruiters",
                    "Minimise drop-offs through tighter candidate briefing and expectation alignment",
                    "Build a consistent, repeatable hiring process that scales across roles and markets",
                    "Maintain full control over client relationships while accelerating delivery behind the scenes",
                    "Scale hiring volume across UK, EU, UAE, US, and APAC without scaling your headcount"
                ],
                servicesInclude: {
                    "Execution": [
                        "End-to-end recruitment aligned to your workflow",
                        "Structured candidate sourcing and pre-screening",
                        "Skills and culture-fit evaluation"
                    ],
                    "Coordination": [
                        "Interview scheduling with candidates and clients",
                        "Real-time pipeline tracking and communication",
                        "CV optimisation to client and VMS standards"
                    ],
                    "Delivery": [
                        "Offer management and negotiation support",
                        "Onboarding coordination post-acceptance",
                        "Drop-off prevention through candidate alignment"
                    ]
                },
                boundary: "We never interact directly with your clients, and we never override your process. Your brand, your relationships, and your control remain entirely intact always.",
                bottomLine: "You bring the requirement. We make sure you don't miss the placement."
            },
            {
                title: "Talent Sourcing",
                slug: "talent-sourcing",
                head: "Reach Talent Before the Market Does",
                description: "The strongest candidates aren't scrolling job boards they're already employed, performing well, and only open to the right conversation. Reaching them before your competitors do is not about working harder. It's about knowing where to look and how to engage.\n\nAt Noltven, we go beyond active applicants. Using advanced Boolean search, X-ray techniques, and deep platform sourcing across global markets, we identify and engage talent that the market hasn't seen yet. Every profile that reaches your desk has already been pre-screened for relevance so you are not sifting, you are selecting.",
                howWeWork: [
                    "Advanced Boolean, X-ray, and multi-platform sourcing targeting active and passive candidates",
                    "Talent identification across UK, EU, UAE, US, and APAC adapted to market conditions in each region",
                    "Every profile is screened before delivery no raw candidate dumps, only relevant shortlists",
                    "Proactive talent pipeline building for recurring and urgent roles, so you are never starting from zero"
                ],
                benefits: [
                    "Submit candidates before roles become saturated in the open market",
                    "Increase client response rates with relevant, well-matched profiles",
                    "Build a ready pipeline for recurring and time-sensitive roles",
                    "Reduce over-reliance on job boards and inbound-only sourcing",
                    "Gain a consistent competitive edge on niche tech and specialist hiring",
                    "Access talent across five major global markets with a localised approach"
                ],
                servicesInclude: {
                    "Discovery": [
                        "Active and passive candidate sourcing",
                        "Global talent pool access",
                        "Headhunting for niche and hard-to-fill roles"
                    ],
                    "Search Strategy": [
                        "Boolean, X-ray & multi-platform sourcing",
                        "Tech and non-IT hiring strategies",
                        "Market-aligned search customisation"
                    ],
                    "Pipeline": [
                        "Talent pipeline creation for ongoing roles",
                        "Market mapping aligned to live positions",
                        "Shortlist delivery tied to SLA and urgency"
                    ]
                },
                bottomLine: "You don't wait for candidates. You reach them first."
            },
            {
                title: "Recruitment Admin Support",
                slug: "recruitment-admin-support",
                head: "Streamline Recruitment Operations",
                description: "Ask any experienced recruiter what slows them down, and the honest answer is rarely a shortage of candidates. It's the constant friction of the work surrounding the hire scheduling, formatting, chasing, documenting. Each task is small, but together they quietly erode the time your team should be spending on billable activity.\n\nWe take that weight off. Noltven's admin support team handles the full operational layer of your recruitment process aligning with your ATS, VMS, and internal workflows so that nothing falls through the cracks and your recruiters can focus entirely on converting.",
                howWeWork: [
                    "We align with your internal systems ATS, VMS, and existing workflows",
                    "We handle all coordination, documentation, and tracking",
                    "We ensure every step progresses without delays or follow-up gaps"
                ],
                benefits: [
                    "Reduce recruiter workload without adding to your headcount",
                    "Improve submission speed and coordination efficiency across live roles",
                    "Eliminate delays caused by scheduling gaps and documentation backlogs",
                    "Maintain smoother, more professional communication across candidates and clients",
                    "Particularly valuable for agencies managing multiple roles, VMS platforms, and tight delivery timelines simultaneously"
                ],
                servicesInclude: {
                    "Coordination": [
                        "Interview scheduling and calendar management",
                        "Candidate and client communication alignment",
                        "Real-time pipeline tracking and updates"
                    ],
                    "Documentation": [
                        "CV formatting to client and VMS standards",
                        "Candidate documentation management",
                        "Database maintenance and data hygiene"
                    ],
                    "Operations": [
                        "VMS and vendor coordination",
                        "Timesheet processing and admin support",
                        "Compliance paperwork handling"
                    ]
                },
                bottomLine: "Less admin. More placements."
            },
            {
                title: "Market Mapping & Talent Intelligence",
                slug: "market-mapping",
                head: "Win More Roles with Better Market Intelligence",
                description: "Submitting candidates without understanding the market you are operating in is a costly gamble. Misaligned salary expectations, overlooked talent hotspots, or a brief that doesn't reflect competitive reality any of these can cost you a placement that should have been yours.\n\nNoltven's market mapping service gives you the intelligence to act with confidence. We analyse talent availability, competitor hiring activity, compensation benchmarks, and demand trends so your submissions are sharper, your client conversations are more credible, and your close rates improve.",
                howWeWork: [
                    "We analyse talent availability, competitor hiring activity, and salary trends across your target markets",
                    "We map where the right candidates are and the most effective ways to approach them",
                    "We align all insights directly to your live roles and client expectations"
                ],
                benefits: [
                    "Submit candidates with stronger market alignment reducing mismatches and rejections",
                    "Improve offer acceptance rates with compensation insights grounded in real data",
                    "Strengthen your credibility in client conversations with evidence-backed market intelligence",
                    "Reduce time wasted on roles that are unrealistically scoped or misaligned to market reality",
                    "Particularly valuable for niche hiring, new geographies, and roles that have stalled in the market"
                ],
                servicesInclude: {
                    "Market Intelligence": [
                        "Competitor hiring analysis",
                        "Industry and regional benchmarking",
                        "Talent movement and demand trends"
                    ],
                    "Compensation Insights": [
                        "Salary and contract rate benchmarking",
                        "Candidate expectation analysis",
                        "Offer positioning by market and seniority"
                    ],
                    "Talent Mapping": [
                        "Skill-based talent pool identification",
                        "Org structure and workforce mapping",
                        "New geography and niche market insights"
                    ]
                },
                bottomLine: "Better data. Sharper submissions. More closures."
            },
            {
                title: "Onboarding & Compliance",
                slug: "onboarding-compliance",
                head: "Secure Every Placement from Offer to Start Date",
                description: "A placement isn't truly complete until the candidate walks through the door on day one compliant, prepared, and ready to start. Too many good hires unravel in the final stretch: missing documents, failed checks, or a candidate who loses confidence during a slow onboarding process.\n\nWe help staffing agencies close that gap. Noltven manages the full verification and onboarding process keeping every step moving, every document in order, and every candidate engaged right through to their start date.",
                howWeWork: [
                    "We manage verification, documentation, and compliance checks end to end",
                    "We align onboarding processes with client requirements and regional regulatory standards",
                    "We track every step proactively to prevent last-minute drop-offs and delays"
                ],
                benefits: [
                    "Reduce candidate drop-offs in the post-offer, pre-start window",
                    "Ensure faster onboarding with complete, accurate documentation from the outset",
                    "Stay fully compliant with client requirements and regional regulatory standards",
                    "Protect your placed revenue by eliminating last-minute compliance failures",
                    "Particularly critical for healthcare, IT contracting, and any compliance-heavy sector or market"
                ],
                servicesInclude: {
                    "Verification": [
                        "Right-to-work checks across UK, EU, UAE, US, and APAC",
                        "Background and reference verification",
                        "Identity and eligibility documentation"
                    ],
                    "Compliance": [
                        "Professional licence and credential validation",
                        "Regulatory compliance support by sector",
                        "Compliance documentation tracking"
                    ],
                    "Onboarding": [
                        "Contractor onboarding and documentation",
                        "Offer follow-up and joining coordination",
                        "Timesheet setup and contractor support"
                    ]
                },
                bottomLine: "Placements that don't just close they join, and they stay."
            }
        ],
        bestFor: "Your recruitment team is the authority, but they are drowning in the execution. You need to scale across regions, handle high-volume VMS requirements, or simply give your recruiters the space to focus on relationships rather than admin and sourcing. You need a partner who scales with you, not a separate agency that competes with you.",
        closing: {
            title: "Rethink Outsourcing. Build a Hiring Advantage That Lasts.",
            text: "Noltven is not here to replace your recruitment team. We are here to make it more capable, more scalable, and more effective across every market you operate in.",
            points: [
                "Consistently higher candidate quality",
                "Global talent access across 5 regions",
                "Faster, more reliable hiring timelines",
                "Full support without loss of control"
            ],
            cta: "Let's Strengthen Your Hiring Process"
        },
        faqs: [
            { question: "How does Noltven differ from a traditional recruitment agency?", answer: "We don't compete with you; we work for you. We act as a back-office extension of your team, handling the heavy lifting of sourcing and admin so your recruiters can focus on closing deals." },
            { question: "Do you talk to our clients?", answer: "No. We maintain a strict 'No Client Interaction' policy. We operate entirely behind the scenes as your white-labelled execution partner." },
            { question: "Which regions do you cover?", answer: "We have active talent delivery capabilities across the UK, EU, UAE, US, and APAC regions." },
            { question: "How quickly can you start delivering candidates?", answer: "Typically, we deliver the first qualified shortlist within 48–72 hours of receiving a brief." },
            { question: "Can you handle high-volume VMS requirements?", answer: "Yes. Our systems are designed to flex around high-volume recruitment needs and VMS platform compliance." }
        ],
    },
    {
        id: "biz-dev",
        shortTitle: "Business Development",
        slug: "business-development",
        icon: Briefcase,
        title: "Build a Consistent Pipeline for the Right Opportunities.",
        description: "Business development isn't a single conversation or a well-timed cold call. It's a series of well-executed activities research, data, outreach, follow-up carried out consistently enough to create momentum. At Noltven, we manage the groundwork that makes that momentum possible, so your team can stay focused on the conversations that convert.\n\nFrom building your prospect intelligence to running structured outreach campaigns, we help you establish a reliable, scalable BD engine across UK, EU, UAE, US, and APAC.",
        cta: "Strengthen Your Outreach Engine",
        head: "Build a Consistent Pipeline for the Right Opportunities.",
        intro: {
            title: "The Work Behind Every Successful Deal",
            overview: "Every closed deal is the visible result of a long chain of consistent, less glamorous activity. Research. List building. Outreach. Follow-up. Most businesses don't struggle with strategy they struggle with execution at scale.\n\nTime gets divided across competing priorities. Outreach becomes inconsistent. Promising leads go cold because no one followed up. We step in to handle the operational side of BD, so your pipeline stays active, targeted, and aligned with your ideal client profile, every single week.",
            points: [
                {
                    title: "The Capacity Problem",
                    text: "Your team knows how to close. But building the pipeline that feeds those conversations takes time and consistency that's hard to maintain alongside everything else."
                },
                {
                    title: "The Consistency Problem",
                    text: "Sporadic outreach produces sporadic results. Without a structured system behind it, even good outreach strategies fail to compound into real pipeline."
                },
                {
                    title: "What We Do Instead",
                    text: "We run the engine that keeps your BD moving research, data, outreach, CRM so your team spends its time on qualified conversations, not cold prospecting."
                }
            ],
            highlights: [
                "Targeted market and account intelligence",
                "Clean, verified prospect data",
                "Consistent multi-channel outreach",
                "Structured CRM and pipeline oversight"
            ]
        },
        whatYouGet: [
            {
                title: "Market Research & Account Mapping",
                slug: "market-research-account-mapping",
                head: "Start With Clarity, Not Just More Outreach",
                description: "Effective business development starts long before the first message is sent. Without a clear picture of where the genuine opportunities are, outreach becomes a volume game unfocused, inefficient, and easy to ignore. The fix isn't more activity. It's better intelligence.\n\nAt Noltven, we begin by mapping your market with precision. We analyse your Ideal Customer Profile against the real landscape of your target sectors and regions identifying the accounts worth pursuing, the decision-makers worth reaching, and the timing worth acting on.",
                howWeWork: [
                    "We analyse your ICP, industry landscape, and target regions to map high-potential accounts",
                    "We combine research, data insights, and strategic filtering to surface relevant, well-timed opportunities",
                    "Every account identified is assessed for opportunity value and fit before it reaches your team"
                ],
                benefits: [
                    "Clear direction on where to concentrate your outreach effort",
                    "Better alignment between your BD activity and your highest-value prospects",
                    "Reduced time spent chasing low-quality or low-fit leads",
                    "A stronger, more credible foundation for every downstream BD activity",
                    "Market-specific intelligence for UK, EU, UAE, US, and APAC"
                ],
                servicesInclude: {
                    "Market Intelligence": [
                        "Industry and niche-specific market research",
                        "Target account identification and prioritisation",
                        "Competitor positioning and hiring signals",
                        "Decision-maker and stakeholder mapping",
                        "Account scoring based on opportunity value",
                        "Market entry analysis for new regions"
                    ]
                },
                boundary: "Right market. Right accounts. Better outcomes.",
                bottomLine: "With clear market visibility, your outreach becomes more focused, efficient, and effective from the very first touchpoint."
            },
            {
                title: "Lead List Building & Data Management",
                slug: "lead-list-building-data-management",
                head: "Accurate Data That Drives Meaningful Outreach",
                description: "Your outreach is only ever as effective as the data behind it. Bounced emails, outdated contacts, and job titles that changed six months ago don't just waste time they damage your brand's credibility with every failed touchpoint. Clean, current, well-structured prospect data is the foundation that everything else is built on.\n\nWe build and maintain your prospect database using targeted criteria, verified sources, and ongoing data validation ensuring that every contact in your list has genuine potential and current relevance.",
                howWeWork: [
                    "We build and refine prospect lists using targeted ICP criteria and verified sources",
                    "We continuously validate and update data to maintain accuracy and relevance",
                    "Every contact added is assessed for genuine potential before being included"
                ],
                benefits: [
                    "Higher response rates from outreach that actually reaches the right person",
                    "A reliable, up-to-date prospect database you can trust",
                    "Less time wasted on irrelevant contacts and dead-end leads",
                    "Improved efficiency and conversion across all BD channels",
                    "A foundation that supports consistent outreach at scale"
                ],
                servicesInclude: {
                    "Data Management": [
                        "Custom lead lists built to your ICP",
                        "Decision-maker contact identification",
                        "Data verification and enrichment",
                        "List segmentation by industry, geography, and company size",
                        "Ongoing database cleaning and updates",
                        "Duplicate removal and data hygiene"
                    ]
                },
                boundary: "Clean data. Targeted outreach. Better results.",
                bottomLine: "With the right data in place, every outreach effort becomes more precise improving both engagement and conversion at every stage."
            },
            {
                title: "Outreach Execution Support",
                slug: "outreach-execution-support",
                head: "Consistency That Turns Outreach Into Opportunity",
                description: "Inconsistent outreach is one of the most common and costly BD failures. You start strong, send a flurry of messages, get busy, fall quiet and any momentum you would built evaporates. The contacts who were warming up go cold. The conversations that were starting don't progress. And you are back to square one.\n\nWe keep your outreach moving. Through personalised, multi-channel campaigns built around your brand and value proposition, we maintain consistent market presence on your behalf building genuine engagement rather than just filling inboxes.",
                howWeWork: [
                    "We create and manage outreach campaigns tailored to your audience and positioning",
                    "Every interaction is aligned to your brand tone and value proposition",
                    "Our process is focused on building genuine engagement not volume for its own sake"
                ],
                benefits: [
                    "Consistent market presence without placing strain on your internal team",
                    "Increased engagement and response rates from well-timed, relevant outreach",
                    "Stronger brand positioning across your target markets",
                    "More qualified conversations landing in your team's calendar",
                    "A pipeline that grows steadily rather than in unpredictable bursts"
                ],
                servicesInclude: {
                    "Outreach Support": [
                        "Personalised email outreach campaigns",
                        "LinkedIn connection and messaging support",
                        "Cold calling assistance",
                        "Multi-touch follow-up sequences",
                        "Campaign tracking and performance monitoring",
                        "Meeting booking with qualified prospects"
                    ]
                },
                boundary: "Consistent outreach. Meaningful conversations. Real opportunities.",
                bottomLine: "When outreach is structured and sustained, your pipeline grows predictably creating a steady flow of opportunities for your team to convert."
            },
            {
                title: "CRM & Pipeline Coordination",
                slug: "crm-pipeline-coordination",
                head: "Bring Structure and Visibility to Your Pipeline",
                description: "A poorly maintained CRM is often worse than no CRM at all. Stale data erodes trust in the system. Missed follow-ups create gaps in what should be a seamless buyer journey. And without reliable visibility across your pipeline, it becomes nearly impossible to forecast accurately or prioritise intelligently.\n\nWe manage and maintain your CRM as a live, accurate reflection of your BD activity tracking every interaction, updating lead statuses, flagging follow-up windows, and keeping your pipeline structured from first touch through to conversion.",
                howWeWork: [
                    "We manage and maintain your CRM by tracking interactions and updating lead statuses in real time",
                    "We align outreach activity with your sales pipeline for a seamless prospecting-to-conversion flow",
                    "We ensure follow-ups are never missed and every lead is handled at the right moment"
                ],
                benefits: [
                    "Complete, real-time visibility of your pipeline at every stage",
                    "Better tracking of leads and opportunities nothing slips through",
                    "Timely follow-ups that keep warm prospects engaged",
                    "A more organised, efficient, and confident sales process",
                    "Business development that becomes measurable, predictable, and scalable"
                ],
                servicesInclude: {
                    "Pipeline Coordination": [
                        "CRM updates and activity tracking",
                        "Lead and deal status management",
                        "Follow-up coordination and reminders",
                        "Pipeline structuring and maintenance",
                        "Performance reporting and pipeline metrics",
                        "Activity summaries and forecasting support"
                    ]
                },
                boundary: "Organised pipeline. Better visibility. More conversions.",
                bottomLine: "With a structured CRM in place, your business development becomes more predictable, measurable, and built for scale."
            }
        ],
        bestFor: "Your pipeline is built on referrals and luck. You don't have an outbound system, a proper CRM, or the bandwidth to chase new clients consistently. Revenue is reactive. Growth is unpredictable.",
        closing: {
            title: "Business Development",
            text: "Build a BD Engine That Works Consistently\n\nGrowth isn't the result of a single great effort it's the outcome of a system that operates reliably, day after day. At Noltven, we combine research, data, outreach, and pipeline structure to help you build that system across every market you're targeting.\n\nIf you are ready to stop treating BD as a reactive activity and start building a reliable, scalable growth engine —let's talk.",
            points: [
                "Targeted market and account intelligence",
                "Clean, verified prospect data",
                "Consistent multi-channel outreach",
                "Structured CRM and pipeline oversight"
            ],
            cta: "Let's Build Your Growth Engine"
        },
        faqs: [
            { question: "Do you handle the actual closing?", answer: "No. We manage the groundwork research, data, and first-level outreach so your senior team can stay focused on the high-value conversations that convert." },
            { question: "What regions do you cover for BD?", answer: "We provide structured outreach and market intelligence across the UK, EU, UAE, US, and APAC regions." },
            { question: "Which CRM platforms do you support?", answer: "We are platform-agnostic and can manage your pipeline within HubSpot, Zoho, Salesforce, or any other major CRM system." },
            { question: "How do you ensure lead quality?", answer: "We use targeted ICP criteria and manual verification for every prospect, ensuring that your outreach is directed only at high-intent, high-fit accounts." }
        ]
    },
    {
        id: "marketing",
        shortTitle: "Digital Marketing",
        slug: "digital-marketing",
        icon: LayoutIcon,
        title: "Marketing That Gets You Chosen, Not Just Seen.",
        description: "We build and manage your full marketing presence so your brand earns trust before the first conversation even starts. Our strategy-led, 2026-ready marketing approach covers every channel to drive real commercial results and ensure your business is prepared for growth.",
        cta: "Launch Your Marketing Engine",
        head: "Marketing That Gets You Chosen, Not Just Seen.",
        whatYouGet: [
            {
                title: "Social Media Management",
                slug: "social-media-management",
                head: "Show Up. Stand Out. Every Single Day.",
                description: "We handle your social presence from end to end, keeping your brand visible, credible, and actively engaging customers every day.",
                howWeWork: [
                    "Platform Strategy & Profile Optimisation: We identify where your audience is most active and build a strategy around owning that space. We make sure your profile is positioned to communicate authority at first glance.",
                    "Content Creation (Graphics, Captions & Reels): We craft platform-native content designed to earn attention, not just fill a calendar. Every post serves a clear brand or commercial purpose.",
                    "Consistent Posting & Scheduling: Our disciplined publishing cadence keeps your brand visible and algorithmically relevant. Consistency is what separates brands that grow from those that stall.",
                    "Community Management & Engagement: We manage comments, conversations, and sector discussions on your behalf. Active community management turns passive followers into genuine advocates over time.",
                    "Monthly Performance Reporting: We provide clear reporting on what is growing, what is converting, and what needs to change. Decisions are based on evidence rather than instinct.",
                    "Competitor Monitoring & Trend Analysis: We continuously track competitor activity and emerging trends so your content strategy leads the market rather than simply reacting to it."
                ]
            },
            {
                title: "SEO & Content Marketing",
                slug: "seo-content-marketing",
                head: "Get Found. Get Trusted. Get Business.",
                description: "We build the technical foundation and content authority that earns sustainable search rankings and qualified organic traffic.",
                howWeWork: [
                    "On-Page & Technical SEO Audits: We perform a full audit of Core Web Vitals, crawlability, site architecture, and indexation. We fix the foundation, not just report on it, so your site is solid from the ground up.",
                    "Keyword Research & Strategy: We conduct intent-led research mapping the specific queries your buyers use at every stage of their decision journey, not just high-volume terms.",
                    "Blog Writing & Content Creation: Our experts produce long-form content that demonstrates genuine authority on the topics your customers care about most. Content earns rankings and reader trust simultaneously.",
                    "Website Copy Optimisation: We refine service pages and landing page copy to convert organic visitors into enquiries. We highlight key value propositions and strategically place credibility signals.",
                    "Local SEO for Businesses: We optimise your Google Business Profile, manage local citations, and use geo-targeted keyword strategy to capture local leads, whether you compete in the UK, UAE, US, EU, or APAC.",
                    "Backlink Building & Domain Authority Growth: We ethically build authority through original research, digital PR, and guest publications. This increases your share of search visibility and earns search engine trust because it reflects real credibility.",
                    "Monthly SEO Reporting & Insights: We deliver results-connected reports on rankings, organic traffic trends, and content performance. This data-driven view keeps strategy refinement clear and focused on your next priorities."
                ]
            },
            {
                title: "Email Marketing",
                slug: "email-marketing",
                head: "Your Best Sales Tool Is Already in Your Inbox.",
                description: "Built on segmentation and behavioural triggers, email consistently delivers the highest ROI of any digital channel available to your business.",
                howWeWork: [
                    "Email Strategy & Campaign Planning: We design email programmes built backwards from your commercial objectives. Every sequence is tied to business goals from the start.",
                    "Template Design & Copywriting: We craft emails to be opened, read, and acted upon. Subject lines are engineered for your unique audience, and every message is on-brand and consistent across touchpoints.",
                    "List Segmentation & Audience Management: Your database is segmented by relationship stage, behaviour, and intent so every subscriber gets messages that truly resonate. It’s automation at scale, with personalization at the personal level.",
                    "Automated Email Sequences & Drip Campaigns: These behaviour-triggered sequences deliver the right follow-up based on what a subscriber does (or doesn't do). We ensure engagement and conversions never slip through the cracks.",
                    "A/B Testing & Performance Optimisation: We run structured tests on subject lines, timing, and calls-to-action to improve conversion, open, and click-through rates over time.",
                    "Deliverability Monitoring & Reporting: We manage sender reputation, bounce handling, and inbox placement so your emails consistently reach the inbox instead of getting stuck in spam."
                ]
            },
            {
                title: "Paid Ads (Google & Meta)",
                slug: "paid-ads-google-meta",
                head: "Stop Hoping People Find You. Put Yourself in Front of Them.",
                description: "Every pound, dollar, or dirham we manage is accountable to a real commercial outcome, not just a platform metric.",
                howWeWork: [
                    "Google Search & Display Ads: We run intent-based campaigns that intercept buyers at the moment they search. This includes keyword bidding, negative keyword management, and high-converting landing pages.",
                    "Meta (Facebook & Instagram) Ad Campaigns: We build full-funnel Meta campaigns that generate awareness and guide warm prospects with messaging that addresses their specific needs and hesitations.",
                    "Audience Research & Targeting Strategy: Before writing a single ad, we conduct deep audience analysis so your ads reach the people most likely to convert, rather than the broadest possible audience.",
                    "Ad Creative & Copywriting: We design scroll-stopping creatives and write hooks that speak to real desires before the ask. Every creative element is crafted to earn its place and engage your audience.",
                    "Budget Management & Bid Optimisation: Our daily management shifts budget toward what performs best. We use AI-enhanced algorithms and manual strategies to get the most from every ad pound, keeping your cost-per-action (CPA) low.",
                    "Conversion Tracking & ROI Reporting: We set up attribution infrastructure that connects your ad spend to actual enquiries. You’ll always know exactly what each campaign produced through clear, comprehensive reporting."
                ]
            },
            {
                title: "Branding & Design",
                slug: "branding-design",
                head: "First Impressions Are Everything. Make Yours Count.",
                description: "Your brand is evaluated in under thirty seconds. From logo refreshes to full visual identity systems, we ensure your business makes a compelling first impression and has the assets to back it up.",
                howWeWork: [
                    "Logo Design & Brand Identity: We craft a distinctive, scalable identity built around your strategy. The logo and visual identity convey your brand’s personality and values, designed to work across every context in which your brand appears.",
                    "Brand Guidelines & Style Kits: We develop comprehensive guidelines to maintain consistency across all marketing materials. This includes color palettes, typography, and usage rules so your identity remains consistent no matter who’s doing the work.",
                    "Social Media Graphics & Templates: We create on-brand templates to keep your social presence consistently professional and recognizable, without needing a designer for every post.",
                    "Marketing Collateral (Flyers, Brochures, Banners): We design print and digital materials that effectively communicate your messages. From proposals and brochures to event banners and campaign assets, every piece meets your brand standards.",
                    "Pitch Deck & Presentation Design: We elevate your presentations to match your business conversations. Each deck is compelling, structured, and built to leave decision-makers with confidence in your proposal."
                ]
            }
        ],
        closing: {
            title: "Why Our Marketing Approach Outperforms the 99%",
            text: "",
            points: [
                "Strategy before execution: Every channel and campaign starts with a defined commercial objective.",
                "2026-ready methods: We use up-to-date SEO built for E-E-A-T and AI-powered search, not outdated tactics.",
                "Brand as a growth asset: We treat your brand as a live commercial asset, doing persuasion work even before your team steps in."
            ],
            cta: "Discuss Your Marketing Strategy"
        }
    },
    {
        id: "ai-automation",
        shortTitle: "AI & Automation",
        slug: "ai-automation",
        icon: Cog,
        title: "Work Smarter. Scale Faster. Automate What Does Not Need You.",
        description: "We build intelligent automation and AI systems that free your team to focus on higher value tasks, not data entry or busywork. The result is removing the ceiling on what your people can achieve.",
        cta: "Automate Your Workflows",
        head: "Work Smarter. Scale Faster. Automate What Does Not Need You.",
        intro: {
            title: "The Automation Advantage",
            overview: "Every business has processes that consume hours of valuable time data entry, manual follow-ups, repetitive admin tasks that don't just slow you down, they cap your growth. We transform these bottlenecks into intelligent systems that run automatically, allowing your business to operate more efficiently every day.",
            points: [
                {
                    title: "Capacity First",
                    text: "Removing the manual load allows your team to focus on strategy and high-value work instead of clerical repetition."
                },
                {
                    title: "Error-Free Execution",
                    text: "Systems don't get tired and don't make clerical mistakes. They work perfectly, 24/7, with zero fatigue."
                },
                {
                    title: "Scalability Unlocked",
                    text: "Automated systems scale infinitely. Your operations grow without proportional increases in headcount and overhead."
                }
            ],
            highlights: [
                "End-to-end operational automation",
                "24/7 lead qualification and support",
                "Consolidated real-time analytics",
                "Autonomous marketing and sales funnels"
            ]
        },
        whatYouGet: [
            {
                title: "Business Process Automation",
                slug: "business-process-automation",
                head: "Automate What Does Not Need You.",
                description: "We build intelligent automation and AI systems that free your team to focus on higher value tasks, not data entry or busywork. The result is removing the ceiling on what your people can achieve.",
                howWeWork: [
                    "Business Process Mapping & Audit: We conduct a structured analysis of how your operations actually function, mapping every workflow, handoff, and manual step before designing any automation.",
                    "End-to-End Workflow Automation: We automate complete processes from trigger to completion. Manual tasks are removed entirely and replaced by systems that execute faster and without errors.",
                    "Task & Approval Flow Automation: We set up intelligent routing of tasks and approvals to the right people, with automated reminders and escalation logic so nothing gets stuck waiting indefinitely.",
                    "Cross-Platform Integration (CRM, Email, Spreadsheets & More): We connect your tools so information flows automatically between them. We eliminate the manual data transfers that should never have been disconnected.",
                    "Real-Time Alerts & Automated Notifications: We create trigger-based alerts that surface critical information the moment it matters, so your team can respond immediately to what matters most.",
                    "Custom Automation Strategy & Roadmap: We build a prioritized automation plan around your specific operational priorities. The most impactful improvements come first, with a clear, executable path forward."
                ],
                benefits: [
                    "Immediate reduction in manual data entry and repetitive admin",
                    "Faster process turnaround times with zero human delay",
                    "Improved data accuracy across all connected business platforms",
                    "Clear visibility into process bottlenecks and performance",
                    "Scalable operational foundation that grows with your volume"
                ],
                servicesInclude: {
                    "Workflow": [
                        "Process Mapping & Auditing",
                        "End-to-End Automation Design",
                        "Task & Approval Routing"
                    ],
                    "Connectivity": [
                        "Cross-Platform Tool Integration",
                        "Real-time Alert Configuration",
                        "Data Flow Synchronisation"
                    ]
                },
                boundary: "Automation handles the volume; your team handles the value.",
                bottomLine: "Focus on what matters. Automate the rest."
            },
            {
                title: "AI Chatbots & Virtual Assistants",
                slug: "chatbots-virtual-assistants",
                head: "Never Miss a Lead. Never Miss a Question.",
                description: "We build AI chatbots trained on your business to deliver on-brand responses and qualify leads around the clock.",
                howWeWork: [
                    "Custom AI Chatbot Design & Build: We design chatbots from the ground up for your specific business context. Each bot is trained on your services and brand voice rather than deployed from a generic template.",
                    "Lead Qualification & Capture Bots: Our intelligent bots qualify inbound interest in real time and capture contact details for high-quality leads. Qualified leads are delivered directly to your sales team automatically.",
                    "Appointment Scheduling Automation: We set up frictionless booking based on live availability, removing the back-and-forth that delays high-value conversations and letting interest remain hot.",
                    "FAQ & Customer Support Automation: Our bots handle your most common queries instantly and accurately at any hour, so your team can focus on complex interactions instead of repetitive questions.",
                    "Website, WhatsApp & Social Media Integration: We deploy chatbots across every channel your audience reaches out on (website, WhatsApp, social media, etc.), providing consistent, on-brand responses wherever the conversation begins.",
                    "Bot Training, Testing & Ongoing Optimisation: We continuously refine your chatbots using real conversation data so accuracy improves over time. Regular updates ensure the bots stay aligned with your business needs."
                ],
                benefits: [
                    "24/7 lead capture and customer support across all channels",
                    "Higher conversion rates through immediate response to interest",
                    "Reduced support burden on your team for repetitive queries",
                    "Structured, pre-qualified leads delivered to your sales team",
                    "Seamless, professional brand experience for every visitor"
                ],
                servicesInclude: {
                    "Intelligent Bots": [
                        "Lead Qualification Bots",
                        "Scheduling & Booking Automation",
                        "FAQ Support Assistants"
                    ],
                    "Omnichannel": [
                        "Website & WhatsApp Integration",
                        "Social Media DM Automation",
                        "Custom Multi-channel Deployment"
                    ]
                },
                boundary: "AI handles the first touch; your people close the deal.",
                bottomLine: "Your business stays open 24/7, without the 24/7 overhead."
            },
            {
                title: "AI Reporting & Analytics",
                slug: "reporting-analytics",
                head: "Stop Guessing. Start Knowing.",
                description: "We build automated analytics infrastructure that consolidates your data and delivers real-time insight to the right people.",
                howWeWork: [
                    "Automated Data Collection & Consolidation: We create a single, reliable data layer that pulls automatically from your CRM, marketing, finance, and operations platforms with no manual extraction required.",
                    "Custom Dashboard Setup (Looker Studio, Power BI, etc.): We configure real-time dashboards around the decisions your leadership actually makes, rather than generic templates that prioritise nothing.",
                    "Sales, Marketing & Operations Reporting: We automate reporting across every function, covering revenue, marketing ROI, and operational KPIs. Reports are delivered on your required cadence without manual effort.",
                    "KPI Tracking & Performance Alerts: We set up live monitoring with automated alerts when key metrics move outside defined thresholds. This way issues are visible immediately, before they escalate.",
                    "AI-Powered Forecasting & Trend Analysis: We implement predictive models that surface patterns and project outcomes, including sales forecasts, demand planning, and churn risk, so you can anticipate the future with data."
                ],
                benefits: [
                    "Zero time spent on manual data export and spreadsheet building",
                    "Real-time visibility into business performance and ROI",
                    "Evidence-based decision making for leadership teams",
                    "Early warning systems for performance drops or bottlenecks",
                    "Accurate forecasting to support growth and resource planning"
                ],
                servicesInclude: {
                    "Analytics": [
                        "Automated Data Consolidation",
                        "Custom Dashboard Configuration",
                        "Functional Performance Reporting"
                    ],
                    "Intelligence": [
                        "AI Sales & Revenue Forecasting",
                        "KPI Monitoring & Live Alerts",
                        "Trend & Churn Analysis"
                    ]
                },
                boundary: "Data collection is automated; strategic action is human-led.",
                bottomLine: "Visibility is the foundation of growth."
            },
            {
                title: "Marketing & Sales Automation",
                slug: "marketing-sales-automation",
                head: "Your Sales Funnel, Running on Autopilot.",
                description: "Systematic processes ensure every lead is followed up and every opportunity progresses without depending on someone remembering to act.",
                howWeWork: [
                    "Automated Lead Nurturing Sequences: We set up multi-touch programs triggered by lead behaviour to deliver the right content at every moment as a prospect moves toward a decision.",
                    "CRM Setup & Automation: We implement and automate your CRM (HubSpot, Zoho, Salesforce, etc.) so your data is always up to date and your team stays focused on the highest-probability deals.",
                    "Follow-Up & Re-Engagement Campaigns: We run automated sequences that revive dormant leads with fresh, relevant value propositions rather than just repeating old messages.",
                    "Pipeline Stage Automation: We use intelligent progression to create the right tasks and triggers when deals move stages. This makes the CRM drive the process rather than depending on manual updates.",
                    "Sales Performance Tracking & Alerts: We provide real-time visibility of conversion rates and deal velocity, with automated alerts when performance deviates from targets before it impacts revenue."
                ],
                benefits: [
                    "Consistent lead follow-up that never skips a beat",
                    "Higher deal velocity through automated pipeline progression",
                    "Reduced administrative burden on your sales team",
                    "Improved marketing ROI through automated re-engagement",
                    "Predictable sales pipeline based on behavioral data"
                ],
                servicesInclude: {
                    "Pipeline": [
                        "CRM Workflow Automation",
                        "Lead Nurturing Sequences",
                        "Pipeline Progression Logic"
                    ],
                    "Performance": [
                        "Sales Velocity Monitoring",
                        "Automated Re-engagement",
                        "Conversion Tracking Alerts"
                    ]
                },
                boundary: "Systems manage the funnel; sales reps manage the relationship.",
                bottomLine: "Don't depend on memory. Depend on momentum."
            },
            {
                title: "Systems Integration",
                slug: "systems-integration",
                head: "Make All Your Tools Talk to Each Other.",
                description: "We connect your platforms so data flows automatically and your team stops bridging gaps manually every day.",
                howWeWork: [
                    "Third-Party App & Platform Integration: We build custom architecture to connect your CRM, marketing, finance, operations, and project management tools into one unified ecosystem, not a collection of isolated apps.",
                    "API Setup & Custom Connections: For platforms without native integrations, we create custom API connections to enable seamless data flow between any two systems your business depends on.",
                    "CRM, Email & Calendar Sync: We implement bidirectional synchronization to ensure every communication is logged and every relationship is fully visible to anyone who needs it.",
                    "E-commerce & Payment Gateway Integration: We connect payment platforms and billing tools to your operations systems so sales and revenue data flows automatically and reconciliation work is eliminated.",
                    "Zapier, Make (Integromat) & Custom Automation Builds: We use no-code platforms for speed and agility, or build custom solutions for complex needs. We match the right tool to each specific integration requirement."
                ],
                benefits: [
                    "Elimination of manual data transfers and siloed information",
                    "Unified view of the business across all platforms",
                    "Faster information flow between departments",
                    "Reduced risk of data entry errors and inconsistencies",
                    "Agile infrastructure that supports adding new tools easily"
                ],
                servicesInclude: {
                    "Connectivity": [
                        "Native & Custom API Connections",
                        "Bidirectional Platform Sync",
                        "CRM & Calendar Integration"
                    ],
                    "Operations": [
                        "Payment Gateway & Billing Links",
                        "No-code & Custom Hybrid Builds",
                        "Unified Ecosystem Architecture"
                    ]
                },
                boundary: "Unified data is the only source of truth.",
                bottomLine: "Integration is the bridge to efficiency."
            },
            {
                title: "AI Content Assistance",
                slug: "ai-content-assistance",
                head: "Produce More Content. Spend Less Time Creating It.",
                description: "We build AI content systems trained on your voice so you produce more, faster, without sacrificing quality or credibility.",
                howWeWork: [
                    "AI Content Workflow Setup & Training: We create an end-to-end content production process from brief to AI-assisted draft to editorial review, so content creation becomes a reliable system rather than a scramble.",
                    "Brand Voice & Tone Configuration: We train the AI on your specific tone, language standards, and audience sensitivities so every output sounds authentically like your brand.",
                    "Blog, Email & Social Media Content Generation: We generate AI-assisted content at the volume your program requires. An editorial review step ensures accuracy, depth, and genuine expertise throughout.",
                    "Content Calendar Automation: We set up automated scheduling and publishing workflows to deliver content on the right channel at the right frequency without manual management.",
                    "SEO-Optimised Output Configuration: We configure AI systems to incorporate target keywords and answer user intent, so the content works for search rankings as well as for readers."
                ],
                benefits: [
                    "Significantly higher output of blog, social, and email content",
                    "Consistent brand voice across all digital touchpoints",
                    "Lower cost-per-piece compared to fully manual production",
                    "Better SEO rankings through consistent authority building",
                    "Removal of 'creative block' and production bottlenecks"
                ],
                servicesInclude: {
                    "Production": [
                        "AI Workflow Configuration",
                        "Brand Voice Training",
                        "Automated Content Generation"
                    ],
                    "Distribution": [
                        "Calendar & Posting Automation",
                        "SEO Optimisation Tuning",
                        "Multi-channel Content Flows"
                    ]
                },
                boundary: "AI generates the draft; experts ensure the depth.",
                bottomLine: "Quality at the speed of thought."
            }
        ],
        bestFor: "Your team is drowning in manual tasks. Leads are falling through the cracks. Tools don't talk to each other. You're doing the same repetitive work every day.",
        closing: {
            title: "Build Systems That Work Even When You’re Not",
            text: "Every business has repetitive processes that drain time and create errors. We help you transform those into autonomous engines that support your growth.",
            points: [
                "End-to-end operational automation",
                "24/7 lead qualification and support",
                "Consolidated real-time analytics",
                "Autonomous marketing and sales funnels"
            ],
            cta: "Automate Your Workflows"
        },
        faqs: [
            { question: "Do I need to replace my existing tools?", answer: "Not at all. We specialize in connecting the tools you already use like HubSpot, Salesforce, or Google Workspace into a unified, automated ecosystem." },
            { question: "How long does a typical automation take to build?", answer: "Simple workflow automations can be active in days, while complex systems integrations or custom AI bot builds typically take 2-4 weeks to design, test, and deploy." },
            { question: "Is my data secure when using AI?", answer: "Security is our priority. We use enterprise-grade APIs and private configurations to ensure your business data is never used to train public models." },
            { question: "Will AI replace my team?", answer: "No. Our goal is to automate the busywork (data entry, scheduling, etc.) so your team can focus on high-value strategy and creative problem solving." }
        ]
    },
    {
        id: "finance",
        shortTitle: "Accounting & Finance",
        slug: "accounting-finance",
        icon: Target,
        title: "Accounting & Finance Services",
        description: "Your Numbers Should Work For You, Not Against You. We give you accurate books, timely reports, and a finance function focused on supporting your growth not just filing obligations.",
        cta: "Organize Your Finances",
        head: "Your Numbers Should Work For You, Not Against You.",
        whatYouGet: [
            {
                title: "Bookkeeping",
                slug: "bookkeeping",
                head: "Clean Books. Zero Headaches. Always Up to Date.",
                description: "We keep your records accurate, current, and ready to support every financial decision your business needs to make.",
                howWeWork: [
                    "Day-to-Day Transaction Recording: Every transaction is recorded accurately and coded correctly on the day it happens. Your financial picture is always current, not weeks behind.",
                    "Bank & Credit Card Reconciliation: We perform regular reconciliations across all accounts to identify and resolve discrepancies immediately, preventing complexity from building up.",
                    "Expense Categorisation & Management: Every expense is properly categorised and coded, giving you the clarity your management decisions require and ensuring your tax filings are accurate.",
                    "Monthly Financial Statements (P&L, Balance Sheet): We deliver accurate profit & loss and balance sheet statements at each month-end, with commentary explaining what the numbers mean, not just what they are.",
                    "Chart of Accounts Setup & Management: We design your chart of accounts specifically for your business model with the analytical clarity you need to understand performance, without unnecessary complexity.",
                    "Cloud Accounting Software Setup (QuickBooks, Xero & more): We configure and manage your cloud accounting platform so it works for your business from day one, including ongoing support to keep it running smoothly."
                ],
                benefits: [
                    "Permanent visibility into your current financial position",
                    "Elimination of year-end 'scramble' for missing documents",
                    "Improved decision making with data that is days old, not months",
                    "Reduced accountant fees through clean, ready-for-audit books",
                    "Full professional management of your accounting software"
                ],
                servicesInclude: {
                    "Operations": [
                        "Daily Transaction Processing",
                        "Bank & Credit Reconciliation",
                        "Categorisation & Coding"
                    ],
                    "Reporting": [
                        "P&L & Balance Sheet Production",
                        "Management Commentary",
                        "Software & Chart of Accounts Setup"
                    ]
                },
                boundary: "Professional accuracy is the only standard.",
                bottomLine: "Focus on your business. We'll handle the books."
            },
            {
                title: "Accounts Payable & Receivable",
                slug: "accounts-payable-receivable",
                head: "Get Paid Faster. Pay Smarter. Stay Cash Flow Positive.",
                description: "We manage your full AP and AR cycle so your cash position is always visible and never a surprise.",
                howWeWork: [
                    "Invoice Creation & Distribution: We generate accurate invoices and send them on time, formatted to each client’s requirements with the correct references to eliminate reasons for delayed payment.",
                    "Payment Chasing & Collections Support: We conduct structured follow-up to recover payment with the right persistence, while preserving customer relationships.",
                    "Supplier Invoice Processing & Payments: We verify, code, and process your vendor invoices according to your payment schedule to maintain trust and avoid late fees.",
                    "Accounts Ageing Reports & Analysis: We provide current ageing analysis for receivables and payables, giving you the intelligence to manage cash flow and credit.",
                    "Credit Control Management: We proactively identify at-risk accounts before they become overdue and engage customers early to prevent bad debts.",
                    "Cash Flow Monitoring & Forecasting: We build rolling cash flow forecasts from confirmed receivables and payables, giving you several weeks of visibility rather than being caught off guard by shortfalls."
                ],
                benefits: [
                    "Improved cash position through faster invoice conversion",
                    "Reduced bad debt risk via proactive credit control",
                    "More professional customer and supplier relationships",
                    "Total clarity on upcoming cash requirements and receipts",
                    "Elimination of administrative friction in the payment cycle"
                ],
                servicesInclude: {
                    "Receivables": [
                        "Bill Generation & Distribution",
                        "Active Collections Support",
                        "AR Ageing & Status Analysis"
                    ],
                    "Payables": [
                        "Vendor Invoice Processing",
                        "Payment Planning & Cycles",
                        "Cash Position Monitoring"
                    ]
                },
                boundary: "Cash flow management is the heartbeat of growth.",
                bottomLine: "Get paid on time. Pay with confidence."
            },
            {
                title: "Payroll",
                slug: "payroll",
                head: "Pay Your Team Accurately. Every Time. On Time.",
                description: "In 2026, payroll compliance demands specialist expertise. We manage every calculation, submission, and regulatory requirement precisely.",
                howWeWork: [
                    "Monthly & Weekly Payroll Processing: We handle gross-to-net calculations for every employee each pay period, with a review process that catches errors before payslips are issued.",
                    "Tax Deductions & National Insurance Calculations: We perform accurate PAYE and NI calculations, submitted through real-time systems (RTI) on time every cycle with all statutory payments handled correctly.",
                    "Payslip Generation & Distribution: We produce professional payslips and distribute them on schedule, ensuring accuracy and compliance every pay run.",
                    "Pension Contribution Management: We fully manage auto-enrolment compliance, from assessing which workers qualify to submitting pension contributions.",
                    "New Starter & Leaver Processing: We handle all changes in employment, including issuing P45s to leavers and reporting new starters to HMRC.",
                    "Payroll Compliance & Regulatory Reporting: We maintain audit-ready documentation and processes to navigate all payroll regulations confidently.",
                    "Year-End Payroll Submissions: We prepare and submit year-end forms, including P60s and P11D benefit reports, with time to review rather than last-minute approvals."
                ],
                benefits: [
                    "Zero stress during pay week everything is handled on time",
                    "Full compliance with HMRC and National Insurance requirements",
                    "Accurate pension management and regulatory reporting",
                    "Professional documentation for every employee (Payslips, P60s)",
                    "Secure handling of all sensitive payroll and employee data"
                ],
                servicesInclude: {
                    "Processing": [
                        "Gross-to-Net Calculations",
                        "PAYE & NI Table Compliance",
                        "Payslip Distribution"
                    ],
                    "Compliance": [
                        "Pension Auto-Enrolment",
                        "HMRC RTI Submissions",
                        "Year-End P60 & P11D Reporting"
                    ]
                },
                boundary: "Accuracy in payroll is non-negotiable.",
                bottomLine: "Your team stays focused; we ensure they stay paid."
            },
            {
                title: "Financial Reporting",
                slug: "financial-reporting",
                head: "Stop Flying Blind. Know Your Numbers Inside Out.",
                description: "We close the gap between financial performance and insight so your team makes data-driven decisions every time.",
                howWeWork: [
                    "Monthly & Quarterly Financial Reports: We deliver performance reports promptly after each period close, covering profits, spending, budgets, and forecasts with clear explanations of key movements.",
                    "Profit & Loss Analysis: We break down your P&L beyond the headline figures, analyzing profitability by product, service, or sector so you know exactly where margins need attention.",
                    "Budget vs Actuals Reporting: We perform variance analysis that explains the causes of each significant difference between budgeted and actual performance, separating one-off items from trends requiring strategic response.",
                    "Cash Flow Statements & Projections: We provide current cash flow reporting alongside forward projections, giving you real-time visibility for investment decisions without guessing at the cash consequences.",
                    "KPI Dashboards & Financial Scorecards: We create custom dashboards tracking the financial KPIs most relevant to your business. These are built for decision-makers, not just for compiling reports.",
                    "Management Accounts Preparation: We compile monthly management accounts by the 10th working day of the month, presenting the data in a format that informs decisions rather than requiring translation."
                ],
                benefits: [
                    "Deeper understanding of where your profit is being made",
                    "The ability to spot negative trends before they impact cash",
                    "Clear accountability for spending across your departments",
                    "Investment-ready financial data for stakeholders or lenders",
                    "Confidence grounded in real, reconciled financial data"
                ],
                servicesInclude: {
                    "Analysis": [
                        "Segmented P&L Analysis",
                        "Variance & Trend Reporting",
                        "KPI Dashboard Configuration"
                    ],
                    "Visibility": [
                        "Management Accounts (Monthly)",
                        "Quarterly Strategy Packs",
                        "Cash Velocity Tracking"
                    ]
                },
                boundary: "Insight turns data into commercial momentum.",
                bottomLine: "Decisions are better when the data is clearer."
            },
            {
                title: "Budgeting & Planning",
                slug: "budgeting-planning",
                head: "Plan Where Your Money Goes Before It Goes Anywhere.",
                description: "In 2026, high-quality budgeting and forecasting is a competitive advantage. We build living financial plans that adapt as your business does.",
                howWeWork: [
                    "Annual Budget Creation & Planning: We build a bottom-up budget collaboratively with your leadership. We model revenue and expenses and set cash assumptions your operations can execute against.",
                    "Department & Project Budget Management: We manage budgets at a granular level, giving delivery teams the visibility they need without escalating every decision to finance.",
                    "Rolling Forecast Development: We update forecasts monthly with actuals and current assumptions, keeping your financial plan accurate rather than chasing a target that’s already outdated.",
                    "Scenario Planning & Sensitivity Analysis: We stress-test your financial models across upside, base, and downside scenarios, so you understand the consequences of each decision before you commit.",
                    "Cost Reduction & Profitability Analysis: We conduct granular margin analysis to identify where your business is losing money and where targeted changes will deliver the greatest sustainable improvement.",
                    "Growth Investment Planning & ROI Modelling: We model growth investments (like new hires, marketing, or expansions) to turn strategic instincts into quantifiable business cases, ensuring each decision is based on solid forecasts."
                ],
                benefits: [
                    "Controlled spending that aligns with your strategic goals",
                    "The ability to model 'What If' scenarios before committing cash",
                    "Better prioritisation of growth investments and capital spend",
                    "Higher professional credibility with investors and banks",
                    "Reduced waste through granular margin and cost analysis"
                ],
                servicesInclude: {
                    "Planning": [
                        "Annual Budget Development",
                        "Department Level Planning",
                        "Growth Investment Modelling"
                    ],
                    "Forecasting": [
                        "Live Rolling Forecasts",
                        "Scenario & Sensitivity Analysis",
                        "Profitability & Margin Audits"
                    ]
                },
                boundary: "Strategy is useless without the budget to back it up.",
                bottomLine: "Control your future, don't just hope for it."
            }
        ],
        bestFor: "Your finances are a black box. You only know your position when your accountant files year-end. You're guessing at cash flow, drowning in receipts, and worrying about payroll compliance.",
        closing: {
            title: "Your Numbers Should Work For You",
            text: "Most businesses view finance as a filing obligation. We view it as a growth engine. We help you build a finance function that supports your strategy and ensures you never have to fly blind again.",
            points: [
                "Daily transaction accuracy",
                "Professional payroll compliance",
                "Budget vs Actuals transparency",
                "Scenario-based growth planning"
            ],
            cta: "Let's Strengthen Your Finance Function"
        },
        faqs: [
            { question: "Which software do you use?", answer: "We are experts in major cloud platforms including Xero, QuickBooks, and Sage. If you don't have a system yet, we help you choose and set up the one best suited to your business." },
            { question: "Do you handle my tax filings?", answer: "We prepare your books to an audit-ready standard and can work directly with your existing tax accountant to ensure filings are seamless and accurate." },
            { question: "How often are my books updated?", answer: "We record transactions and reconcile accounts on a daily or weekly basis depending on your volume, ensuring your financial picture is never outdated." },
            { question: "Can you handle payroll for remote teams?", answer: "Yes. We manage payroll compliance and calculations for domestic and international teams, ensuring everyone is paid accurately and on time." }
        ]
    }
];
