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
                title: "Admin Support",
                slug: "admin-support",
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
                title: "Market Mapping & Intelligence",
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
        outcomes: [
            "Consistently higher candidate quality",
            "Global talent access across 5 regions",
            "Faster, more reliable hiring timelines",
            "Full support without loss of control"
        ]
    },
    {
        id: "biz-dev",
        shortTitle: "Business Development",
        slug: "business-development",
        icon: Briefcase,
        title: "Build a Consistent Pipeline for the Right Opportunities.",
        description: "Business development isn't a single conversation or a well-timed cold call. It's a series of well-executed activities carried out consistently enough to create momentum. At Noltven, we manage the groundwork that makes that momentum possible, so your team can stay focused on the conversations that convert.",
        cta: "Strengthen Your Outreach Engine",
        head: "Build a Consistent Pipeline for the Right Opportunities.",
        intro: {
            title: "The Work Behind Every Successful Deal",
            overview: "Every closed deal is the visible result of a long chain of consistent, less glamorous activity. Research. List building. Outreach. Follow-up. Most businesses don't struggle with strategy they struggle with execution at scale.",
            points: [
                {
                    title: "The Capacity Gap",
                    text: "Time gets divided across competing priorities. When your local team is busy delivering or closing, the prospecting engine stops. Consistency is the first thing that breaks."
                },
                {
                    title: "The Consistency Problem",
                    text: "Occasional outbound activity produces occasional results. We manage the daily volume needed to ensure your pipeline never goes cold, regardless of how busy your internal team gets."
                },
                {
                    title: "What We Do Instead",
                    text: "We provide the consistent execution layer. From building prospect intelligence to running structured outreach campaigns, we help you establish a reliable, scalable BD engine across UK, EU, UAE, US, and APAC."
                }
            ],
            highlights: [
                "Market-specific intelligence for UK, EU, UAE, US, and APAC",
                "Higher conversion through data-backed account prioritization",
                "Reduced administrative burden for your senior sales team",
                "Consistent lead flow that survives peak delivery periods"
            ]
        },
        whatYouGet: [
            {
                title: "Market Research & Account Mapping",
                slug: "market-research-account-mapping",
                head: "Intelligence Before Outreach.",
                description: "Strategy without data is just guessing. Before we reach out, we build a deep understanding of your target market, mapping out high-value accounts and the decision-makers within them. Every downstream activity is more effective because it starts with high-quality intelligence.",
                howWeWork: [
                    "We identify where your highest opportunity exists based on real market signals",
                    "We map out organisational structures to identify the true decision-makers and influencers",
                    "We gather intelligence on competitor presence and potential project timelines",
                    "We align account lists with your specific commercial objectives for the quarter"
                ],
                benefits: [
                    "Higher outreach response rates by targeting people who actually need your service",
                    "Shorter sales cycles by bypassing 'low-fit' leads early in the process",
                    "Better informed sales conversations based on account-specific intelligence",
                    "Direct entry strategy for new markets (UK, EU, UAE, US, APAC) based on local data",
                    "Predictable account prioritization based on opportunity value and conversion likelihood"
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
                boundary: "Intelligence turns cold outreach into informed conversations.",
                bottomLine: "Every downstream activity is more effective because it starts with high-quality intelligence."
            },
            {
                title: "Lead List Building & Data Management",
                slug: "lead-list-building-data-management",
                head: "Fuel Your Sales Engine with High-Accuracy Data.",
                description: "The biggest bottleneck in any sales process is the manual work of finding, verifying, and managing data. We take that burden off your team, providing verified, high-accuracy prospect lists that are ready for immediate action. No more bouncing emails or outdated contact info.",
                howWeWork: [
                    "We use the most reliable data platforms combined with manual verification for 98%+ accuracy",
                    "We enrich lists with specific data points (Tech stack, company size, recent news) for personalization",
                    "We ensure all data is formatted and ready for direct import into your CRM or outreach tools",
                    "We manage the ongoing data hygiene needed to keep your CRM an asset rather than a liability"
                ],
                benefits: [
                    "Increase sales team productivity by 30%+ by removing the need for manual data hunting",
                    "Higher email deliverability and domain reputation through verified contact data",
                    "More effective personalization enabled by enriched data points (e.g. recent funding or hires)",
                    "Scalable lead sourcing that keeps up with your outreach volume targets",
                    "Consistent data quality that ensures your CRM remains accurate and useful"
                ],
                servicesInclude: {
                    "Data Delivery": [
                        "B2B prospect list building",
                        "Verified email and direct-dial data points",
                        "Data enrichment for personalized outreach",
                        "CRM data cleaning and management",
                        "Intent-based lead sourcing",
                        "Regular list health and accuracy audits"
                    ]
                },
                boundary: "Fuel your sales engine with data that actually converts.",
                bottomLine: "No more bouncing emails or outdated contact info just high-accuracy pipeline fuel."
            },
            {
                title: "Outreach Execution Support",
                slug: "outreach-execution-support",
                head: "Consistent Outreach. Zero Internal Friction.",
                description: "Most sales teams struggle to balance closing with prospecting. When one goes up, the other falls. Our team provides the consistent support layer needed to run multi-channel outreach (Email, LinkedIn, Calling) every single day, regardless of how busy your senior team gets.",
                howWeWork: [
                    "We design multi-channel sequences built on proven persuasion frameworks",
                    "We manage the first-level outreach, identifying interest and handling initial objections",
                    "We facilitate the 'warm handover' of interested leads directly to your sales team",
                    "We continuously A/B test messaging to improve response and meeting booking rates"
                ],
                benefits: [
                    "A pipeline that grows while you are delivering projects or closing deals",
                    "Higher meeting volume with prospects who have already expressed clear interest",
                    "Improved brand authority through professional, high-value outbound communication",
                    "Lower cost-per-lead compared to traditional high-overhead sales hires",
                    "Predictable monthly lead flow that allows you to plan recruitment and delivery with confidence"
                ],
                servicesInclude: {
                    "Campaign Management": [
                        "Multi-channel outreach strategy (LinkedIn, Email)",
                        "Personalized copywriting and sequence building",
                        "Interest identification and first-level objection handling",
                        "Meeting booking and sales handover coordination",
                        "Pipeline nurturing for 'long-term' opportunities",
                        "Detailed campaign performance reporting"
                    ]
                },
                boundary: "Consistent outreach creates consistent results.",
                bottomLine: "We manage the first-level activity so your senior team only speaks to people who want to talk."
            },
            {
                title: "CRM & Pipeline Coordination",
                slug: "crm-pipeline-coordination",
                head: "Keep Every Opportunity Moving Toward a Close.",
                description: "Revenue isn't lost to competitors as often as it is lost to the cracks between follow-ups. We manage the operational side of your sales process, ensuring every lead is tracked, every follow-up is scheduled, and your pipeline is always an accurate reflection of your commercial reality.",
                howWeWork: [
                    "We manage the day-to-day coordination within your CRM (HubSpot, Zoho, Salesforce etc.)",
                    "We set up and monitor automated follow-up sequences for leads that haven't responded yet",
                    "We provide regular pipeline health reports so you know exactly where your revenue is coming from",
                    "We ensure no lead goes 'stale' by maintaining a disciplined follow-up cadence"
                ],
                benefits: [
                    "Never lose a deal due to missed follow-ups or administrative oversight",
                    "Real-time visibility into your sales performance and revenue forecast",
                    "Faster sales cycles through tighter process coordination and follow-up discipline",
                    "Reduced 'admin time' for your sales team, allowing more time for actual selling",
                    "A more professional candidate/client experience through consistent and timely communication"
                ],
                servicesInclude: {
                    "Pipeline Management": [
                        "CRM administrative management (HubSpot, Zoho, etc.)",
                        "Lead tracking and move-along coordination",
                        "Automated follow-up sequence setup",
                        "Sales pipeline reporting and forecasting",
                        "Data entry and activity logging support",
                        "Pipeline health audits and gap identification"
                    ]
                },
                boundary: "Revenue is won or lost in the follow-up.",
                bottomLine: "Every lead tracked, every follow-up scheduled total control over your pipeline."
            }
        ],
        bestFor: "Your pipeline is built on referrals and luck. You don't have an outbound system, a proper CRM, or the bandwidth to chase new clients consistently. Revenue is reactive. Growth is unpredictable.",
        closing: {
            title: "Let's Build Your Growth Engine.",
            text: "Business development is a series of well-executed activities research, data, outreach, follow-up carried out consistently enough to create momentum.",
            points: [
                "Market-specific intelligence for 5 key regions",
                "Data-backed account prioritization",
                "Reduced burden for your senior team",
                "Consistent lead flow year-round"
            ],
            cta: "Strengthen Your Outreach Engine"
        }
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
        intro: {
            title: "Modern Marketing vs. Market Presence",
            overview: "In 2026, visibility alone isn't enough. Your audience is more sophisticated, and your competitors are more numerous. We don't just 'post' or 'run ads' we build a cohesive digital presence that does the heavy lifting for your sales team. By the time a prospect reaches out, they should already believe in your expertise.",
            points: [
                {
                    title: "Strategy First",
                    text: "Every channel and campaign starts with a defined commercial objective. We don't trade in 'likes'; we trade in pipeline."
                },
                {
                    title: "2026-Ready Methods",
                    text: "We use up-to-date SEO built for E-E-A-T and AI-powered search, not outdated volume-chasing tactics."
                },
                {
                    title: "Brand as an Asset",
                    text: "We treat your brand as a live commercial asset, doing the persuasion work even before your team steps in."
                }
            ],
            highlights: [
                "Defined commercial objectives for every campaign",
                "2026-ready SEO built for E-E-A-T and AI search",
                "Cohesive brand experience that builds trust early",
                "Active management across every key digital touchpoint"
            ]
        },
        whatYouGet: [
            {
                title: "Social Media Management",
                slug: "social-media-management",
                head: "Show Up. Stand Out. Every Single Day.",
                description: "We handle your social presence from end to end, keeping your brand visible, credible, and actively engaging customers every day. Consistency is what separates brands that grow from those that stall.",
                howWeWork: [
                    "We identify where your audience is most active and build a strategy around owning that space",
                    "We craft platform-native content (Graphics, Captions & Reels) designed to earn attention",
                    "Our disciplined publishing cadence keeps your brand visible and algorithmically relevant",
                    "We manage comments, conversations, and sector discussions on your behalf to turn followers into advocates",
                    "Monthly performance reporting focused on growth and conversion, not just raw metrics",
                    "Continuous tracking of competitor activity and emerging trends to keep you ahead of the curve"
                ],
                benefits: [
                    "Establish daily authority and brand recognition across key platforms",
                    "Maintain a consistent, high-quality stream of content without internal effort",
                    "Build a community of engaged advocates who trust your expertise",
                    "Capture and nurture leads before they even visit your website",
                    "Algorithm-proof your presence through high-engagement, native content",
                    "Data-driven content refinement based on real performance trends"
                ],
                servicesInclude: {
                    "Strategy & Execution": [
                        "Platform Strategy & Profile Optimisation",
                        "Content Creation (Graphics, Captions & Reels)",
                        "Consistent Posting & Scheduling",
                        "Community Management & Engagement",
                        "Monthly Performance Reporting",
                        "Competitor Monitoring & Trend Analysis"
                    ]
                },
                boundary: "Consistency turns passive followers into genuine advocates over time.",
                bottomLine: "Every post serves a clear brand or commercial purpose."
            },
            {
                title: "SEO & Content Marketing",
                slug: "seo-content-marketing",
                head: "Get Found. Get Trusted. Get Business.",
                description: "We build the technical foundation and content authority that earns sustainable search rankings and qualified organic traffic. We fix the foundation, not just report on it.",
                howWeWork: [
                    "We perform full audits of Core Web Vitals, crawlability, site architecture, and indexation",
                    "Intent-led keyword research mapping the specific queries your buyers use at every decision stage",
                    "Expert long-form content production that demonstrates genuine authority (E-E-A-T)",
                    "Service and landing page copy refinement to convert organic visitors into enquiries",
                    "Local SEO capture for UK, EU, UAE, US, and APAC markets",
                    "Ethical authority building through original research, digital PR, and guest publications",
                    "Results-connected reporting on rankings, organic traffic trends, and performance"
                ],
                benefits: [
                    "Earning sustainable, long-term traffic that reduces dependence on paid ads",
                    "Establishing undisputed authority on topics your customers care about most",
                    "Higher conversion rates from intent-mapped, value-driven website copy",
                    "Capture local demand across global markets with geo-targeted strategies",
                    "Reduced bounce rates and improved site performance through technical excellence",
                    "A scalable content engine that builds domain authority over time"
                ],
                servicesInclude: {
                    "Search & Authority": [
                        "On-Page & Technical SEO Audits",
                        "Keyword Research & Strategy",
                        "Blog Writing & Content Creation",
                        "Website Copy Optimisation",
                        "Local SEO for Businesses",
                        "Backlink Building & Domain Authority Growth",
                        "Monthly SEO Reporting & Insights"
                    ]
                },
                boundary: "Content earns rankings and reader trust simultaneously.",
                bottomLine: "We fix the foundation, not just report on it, so your site is solid from the ground up."
            },
            {
                title: "Email Marketing",
                slug: "email-marketing",
                head: "Your Best Sales Tool Is Already in Your Inbox.",
                description: "Built on segmentation and behavioural triggers, email consistently delivers the highest ROI of any digital channel. We craft emails to be opened, read, and acted upon.",
                howWeWork: [
                    "Marketing programmes built backwards from your specific commercial objectives",
                    "Subject lines engineered for your unique audience and copy that drives action",
                    "Database segmentation by stage, behaviour, and intent for hyper-personalization",
                    "Behaviour-triggered sequences that deliver the right follow-up at the right time",
                    "Structured A/B testing on subject lines, timing, and calls-to-action",
                    "Strict sender reputation management to ensure consistent inbox placement",
                    "Deployment of automation at scale with personal-level messaging"
                ],
                benefits: [
                    "Highest ROI channel for lead nurturing and customer retention",
                    "Consistent, automated touchpoints that keep your brand top-of-mind",
                    "Deeper customer understanding through behavioral data and click-tracking",
                    "Reduced sales cycle length through automated educational workflows",
                    "Scalable outreach that maintains a personal, high-touch feel",
                    "Improved conversion rates by matching messaging to current intent"
                ],
                servicesInclude: {
                    "Lifecycle Marketing": [
                        "Email Strategy & Campaign Planning",
                        "Template Design & Copywriting",
                        "List Segmentation & Audience Management",
                        "Automated Email Sequences & Drip Campaigns",
                        "A/B Testing & Performance Optimisation",
                        "Deliverability Monitoring & Reporting"
                    ]
                },
                boundary: "Engagements and conversions never slip through the cracks.",
                bottomLine: "It’s automation at scale, with personalization at the personal level."
            },
            {
                title: "Paid Ads (Google & Meta)",
                slug: "paid-ads-google-meta",
                head: "Stop Hoping People Find You. Put Yourself in Front of Them.",
                description: "Every pound, dollar, or dirham we manage is accountable to a real commercial outcome. We shift budget toward what performs, keeping your cost-per-action (CPA) low.",
                howWeWork: [
                    "Intent-based Google campaigns intercepting buyers at the exact moment they search",
                    "Full-funnel Meta campaigns that guide prospects from awareness to direct action",
                    "Deep audience research before drafting creative to ensure maximum relevance",
                    "Scroll-stopping creative and hooks designed to speak to real desires and pain points",
                    "Daily bid optimisation and budget management using AI-enhanced algorithms",
                    "Attribution infrastructure that connects ad spend directly to actual enquiries",
                    "Transparent ROI reporting showing exactly what every campaign produced"
                ],
                benefits: [
                    "Immediate traffic and lead generation for high-priority service areas",
                    "Precise targeting that puts your brand in front of specific high-value decision makers",
                    "Scalable growth engine increase spend to increase leads predictably",
                    "Full-funnel visibility showing where prospects are engaging and where they drop off",
                    "Reduced wasted spend through aggressive negative keyword and audience management",
                    "Direct commercial accountability with clear Cost Per Lead (CPL) metrics"
                ],
                servicesInclude: {
                    "Paid Acquisition": [
                        "Google Search & Display Ads",
                        "Meta (Facebook & Instagram) Ad Campaigns",
                        "Audience Research & Targeting Strategy",
                        "Ad Creative & Copywriting",
                        "Budget Management & Bid Optimisation",
                        "Conversion Tracking & ROI Reporting"
                    ]
                },
                boundary: "Accountable to real commercial outcomes, not just platform metrics.",
                bottomLine: "Stop hoping. Start intercepting."
            },
            {
                title: "Branding & Design",
                slug: "branding-design",
                head: "First Impressions Are Everything. Make Yours Count.",
                description: "Your brand is evaluated in under thirty seconds. We ensure your business makes a compelling first impression and has the premium assets to back it up.",
                howWeWork: [
                    "Distinctive, scalable visual identities built around your core strategy",
                    "Comprehensive brand guidelines to maintain consistency across all marketing",
                    "Professional on-brand social media templates for recognizable daily presence",
                    "High-performance marketing collateral for print and digital applications",
                    "Structured pitch deck and presentation design to elevate sales conversations",
                    "Full visual systems designed to work across every global context"
                ],
                benefits: [
                    "Immediate establishment of professionalism and trust at first glance",
                    "Reduced internal design friction with pre-built, easy-to-use templates",
                    "Cohesive brand experience across website, social, email, and print",
                    "Elevated sales conversations with high-confidence presentation assets",
                    "Market recognition through consistent use of premium brand elements",
                    "Future-proofed identity that scales with your business growth"
                ],
                servicesInclude: {
                    "Visual Identity": [
                        "Logo Design & Brand Identity",
                        "Brand Guidelines & Style Kits",
                        "Social Media Graphics & Templates",
                        "Marketing Collateral (Flyers, Brochures, Banners)",
                        "Pitch Deck & Presentation Design"
                    ]
                },
                boundary: "A compelling first impression backed by assets that perform.",
                bottomLine: "Make your thirty seconds count."
            }
        ],
        bestFor: "Your marketing is scattered inconsistent posts, emails that go unopened, and ad spend with nothing to show for it. You know you need to be more visible. You just need someone who actually knows how.",
        closing: {
            title: "Why Our Marketing Approach Outperforms the 99%",
            text: "Marketing should be a profit centre, not a cost centre. We combine high-level strategy with 2026-ready execution to help your brand earn trust even before you speak.",
            points: [
                "Strategy before execution: Every campaign starts with a commercial objective",
                "2026-ready methods: Up-to-date SEO built for E-E-A-T and AI search",
                "Brand as a growth asset: Persuasion work that happens before the first call"
            ],
            cta: "Discuss Your Marketing Strategy"
        }
    },
    {
        id: "ai-automation",
        shortTitle: "AI & Automation",
        slug: "ai-automation",
        icon: Cog,
        title: "Build Systems That Work Even When You’re Not",
        description: "Your team shouldn't do manually what a workflow handles in seconds. We build the automations that give your time back.",
        cta: "Automate Your Workflows",
        overview: "Every business has processes that consume hours of valuable time data entry, manual follow-ups, repetitive admin tasks, and disconnected tools. We help you transform those processes into intelligent systems that run automatically, allowing your business to operate more efficiently every day.",
        whatYouGet: [
            {
                title: "Workflow Automation",
                head: "Simplify Your Processes and Eliminate Bottlenecks",
                description: "We analyse how your business currently operates and redesign those workflows with automation at the core. The result is smoother operations, fewer delays, and systems that work reliably without constant manual input.",
                items: [
                    "Process Analysis & Workflow Mapping",
                    "End-to-End Business Process Automation",
                    "Task Assignment & Approval Workflow Automation",
                    "Multi-Platform Integration",
                    "Real-Time Notifications & Status Updates"
                ]
            },
            {
                title: "AI Chatbots & Virtual Assistants",
                head: "Support Customers and Capture Leads Around the Clock",
                description: "AI-powered chatbots and virtual assistants allow your business to answer questions, qualify leads, and book appointments at any time. These systems are trained on your business information.",
                items: [
                    "Custom AI Chatbot Development",
                    "Lead Qualification Bots",
                    "Appointment Scheduling Automation",
                    "Customer Support & FAQ Automation",
                    "Multi-Platform Chatbot Integration"
                ]
            }
        ],
        bestFor: "Your team is drowning in manual tasks. Leads are falling through the cracks. Tools don't talk to each other. You're doing the same repetitive work every day."
    },
    {
        id: "finance",
        shortTitle: "Accounting & Finance",
        slug: "accounting-finance",
        icon: Target,
        title: "Strong Businesses Are Built on Financial Clarity",
        description: "Clean books, accurate payroll, zero missed deadlines and a clear view of your finances without the cost of a full-time hire.",
        cta: "Organise Your Finances",
        overview: "Managing finances can quickly become overwhelming when you’re also responsible for running a business. Our accounting support provides professional financial management without the overhead."
    }
];
