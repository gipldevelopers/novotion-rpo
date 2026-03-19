import 'dotenv/config';
import pool from '../lib/db.js';

const digitalMarketingData = {
    title: "Marketing That Gets You Chosen, Not Just Seen.",
    cta: "Launch Your Marketing Engine",
    head: "Marketing That Gets You Chosen, Not Just Seen.",
    description: "We build and manage your full marketing presence so your brand earns trust before the first conversation even starts. Our strategy-led, 2026-ready marketing approach covers every channel to drive real commercial results and ensure your business is prepared for growth.",
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
        highlights: []
    },
    whatYouGet: [
        {
            title: "Social Media Management",
            slug: "social-media-management",
            head: "Show Up. Stand Out. Every Single Day.",
            description: "We handle your social presence from end to end, keeping your brand visible, credible, and actively engaging customers every day. Consistency is what separates brands that grow from those that stall.",
            text: "Show Up. Stand Out. Every Single Day.",
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
            text: "Get Found. Get Trusted. Get Business.",
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
            text: "Your Best Sales Tool Is Already in Your Inbox.",
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
            text: "Stop Hoping People Find You. Put Yourself in Front of Them.",
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
            text: "First Impressions Are Everything. Make Yours Count.",
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
};

async function update() {
    try {
        console.log("🚀 Updating Digital Marketing service...");

        await pool.execute(
            `UPDATE services SET 
                title = ?, cta = ?, head = ?, description = ?, 
                intro = ?, whatYouGet = ?, closing = ?
            WHERE service_id = 'digital-marketing'`,
            [
                digitalMarketingData.title,
                digitalMarketingData.cta,
                digitalMarketingData.head,
                digitalMarketingData.description,
                JSON.stringify(digitalMarketingData.intro),
                JSON.stringify(digitalMarketingData.whatYouGet),
                JSON.stringify(digitalMarketingData.closing)
            ]
        );

        console.log("🎉 Digital Marketing update successful!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Digital Marketing update failed:", error);
        process.exit(1);
    }
}

update();
