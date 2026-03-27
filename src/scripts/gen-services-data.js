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
                boundary: "Boundary We Maintain: We never interact directly with your clients, and we never override your process. Your brand, your relationships, and your control remain entirely intact   always.",
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
        closing: {
            title: "Rethink Outsourcing. Build a Hiring Advantage That Lasts.",
            text: "Noltven is not here to replace your recruitment team. We are here to make it more capable, more scalable, and more effective across every market you operate in.\n\nThen you are not looking for a vendor. You are looking for a recruitment partner.",
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
                    "Data Delivery": [
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
                    "Campaign Management": [
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
        closing: {
            title: "Build a BD Engine That Works Consistently",
            text: "Growth isn't the result of a single great effort it's the outcome of a system that operates reliably, day after day. At Noltven, we combine research, data, outreach, and pipeline structure to help you build that system across every market you're targeting.\n\nIf you are ready to stop treating BD as a reactive activity and start building a reliable, scalable growth engine  let's talk.",
            points: [
                "Targeted market and account intelligence",
                "Clean, verified prospect data",
                "Consistent multi-channel outreach",
                "Structured CRM and pipeline oversight"
            ],
            cta: "Let's Build Your Growth Engine"
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
                description: "We handle your social presence from end to end, keeping your brand visible, credible, and actively engaging customers every day.",
                howWeWork: [
                    "Platform Strategy & Profile Optimisation: We identify where your audience is most active and build a strategy around owning that space. We make sure your profile is positioned to communicate authority at first glance.",
                    "Content Creation (Graphics, Captions & Reels): We craft platform-native content designed to earn attention, not just fill a calendar. Every post serves a clear brand or commercial purpose.",
                    "Consistent Posting & Scheduling: Our disciplined publishing cadence keeps your brand visible and algorithmically relevant. Consistency is what separates brands that grow from those that stall.",
                    "Community Management & Engagement: We manage comments, conversations, and sector discussions on your behalf. Active community management turns passive followers into genuine advocates over time.",
                    "Monthly Performance Reporting: We provide clear reporting on what is growing, what is converting, and what needs to change. Decisions are based on evidence rather than instinct.",
                    "Competitor Monitoring & Trend Analysis: We continuously track competitor activity and emerging trends so your content strategy leads the market rather than simply reacting to it."
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
        title: "Work Smarter. Scale Faster. Automate What Does Not Need You.",
        description: "We transform operational bottlenecks into intelligent, self-sustaining systems. By integrating advanced AI and bespoke automation across your entire workflow, we remove the ceiling on your growth and enable your team to focus on the strategic work that matters.",
        cta: "Automate Your Workflows",
        overview: "Every business has processes that consume hours of valuable time data entry, manual follow-ups, repetitive admin tasks, and disconnected tools. We help you transform those processes into intelligent systems that run automatically, allowing your business to operate more efficiently every day.",
        whatYouGet: [
            {
                title: "AI & Automation Services",
                head: "Work Smarter. Scale Faster. Automate What Does Not Need You.",
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
        description: "**Your Numbers Should Work For You, Not Against You.**\nClean books, accurate payroll, zero missed deadlines and a clear view of your finances without the cost of a full-time hire.",
        cta: "Organise Your Finances",
        overview: "Managing finances can quickly become overwhelming when you’re also responsible for running a business. Our accounting support provides professional financial management without the overhead."
    }
];
