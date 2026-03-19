import 'dotenv/config';
import pool from '../lib/db.js';

const bizDevData = {
    title: "Build a Consistent Pipeline for the Right Opportunities.",
    cta: "Strengthen Your Outreach Engine",
    head: "Build a Consistent Pipeline for the Right Opportunities.",
    description: "Business development isn't a single conversation or a well-timed cold call. It's a series of well-executed activities research, data, outreach, follow-up carried out consistently enough to create momentum. At Noltven, we manage the groundwork that makes that momentum possible, so your team can stay focused on the conversations that convert. \n\nFrom building your prospect intelligence to running structured outreach campaigns, we help you establish a reliable, scalable BD engine across UK, EU, UAE, US, and APAC.",
    intro: {
        title: "The Work Behind Every Successful Deal",
        overview: "Every closed deal is the visible result of a long chain of consistent, less glamorous activity. Research. List building. Outreach. Follow-up. Most businesses don't struggle with strategy they struggle with execution at scale. \n\nTime gets divided across competing priorities. Outreach becomes inconsistent. Promising leads go cold because no one followed up. We step in to handle the operational side of BD, so your pipeline stays active, targeted, and aligned with your ideal client profile, every single week.",
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
        highlights: []
    },
    whatYouGet: [
        {
            title: "Market Research & Account Mapping",
            slug: "market-research-account-mapping",
            head: "Start With Clarity, Not Just More Outreach",
            description: "Effective business development starts long before the first message is sent. Without a clear picture of where the genuine opportunities are, outreach becomes a volume game unfocused, inefficient, and easy to ignore. The fix isn't more activity. It's better intelligence. \n\nAt Noltven, we begin by mapping your market with precision. We analyse your Ideal Customer Profile against the real landscape of your target sectors and regions identifying the accounts worth pursuing, the decision-makers worth reaching, and the timing worth acting on.",
            text: "Start With Clarity, Not Just More Outreach",
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
            description: "Your outreach is only ever as effective as the data behind it. Bounced emails, outdated contacts, and job titles that changed six months ago don't just waste time they damage your brand's credibility with every failed touchpoint. Clean, current, well-structured prospect data is the foundation that everything else is built on. \n\nWe build and maintain your prospect database using targeted criteria, verified sources, and ongoing data validation ensuring that every contact in your list has genuine potential and current relevance.",
            text: "Accurate Data That Drives Meaningful Outreach",
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
                "Data Architecture": [
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
            description: "Inconsistent outreach is one of the most common and costly BD failures. You start strong, send a flurry of messages, get busy, fall quiet and any momentum you would built evaporates. The contacts who were warming up go cold. The conversations that were starting don't progress. And you are back to square one. \n\nWe keep your outreach moving. Through personalised, multi-channel campaigns built around your brand and value proposition, we maintain consistent market presence on your behalf building genuine engagement rather than just filling inboxes.",
            text: "Consistency That Turns Outreach Into Opportunity",
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
                "Execution Layer": [
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
            description: "A poorly maintained CRM is often worse than no CRM at all. Stale data erodes trust in the system. Missed follow-ups create gaps in what should be a seamless buyer journey. And without reliable visibility across your pipeline, it becomes nearly impossible to forecast accurately or prioritise intelligently. \n\nWe manage and maintain your CRM as a live, accurate reflection of your BD activity tracking every interaction, updating lead statuses, flagging follow-up windows, and keeping your pipeline structured from first touch through to conversion.",
            text: "Bring Structure and Visibility to Your Pipeline",
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
                "Operational Visibility": [
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
        title: "Business Development",
        text: "Build a BD Engine That Works Consistently \n\nGrowth isn't the result of a single great effort it's the outcome of a system that operates reliably, day after day. At Noltven, we combine research, data, outreach, and pipeline structure to help you build that system across every market you're targeting. \n\nIf you are ready to stop treating BD as a reactive activity and start building a reliable, scalable growth engine let's talk.",
        points: [
            "Targeted market and account intelligence",
            "Clean, verified prospect data",
            "Consistent multi-channel outreach",
            "Structured CRM and pipeline oversight"
        ],
        cta: "Let's Build Your Growth Engine"
    }
};

async function update() {
    try {
        console.log("🚀 Updating Business Development service...");
        
        await pool.execute(
            `UPDATE services SET 
                title = ?, cta = ?, head = ?, description = ?, 
                intro = ?, whatYouGet = ?, closing = ?
            WHERE service_id = 'biz-dev'`,
            [
                bizDevData.title,
                bizDevData.cta,
                bizDevData.head,
                bizDevData.description,
                JSON.stringify(bizDevData.intro),
                JSON.stringify(bizDevData.whatYouGet),
                JSON.stringify(bizDevData.closing)
            ]
        );
        
        console.log("🎉 Update successful!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Update failed:", error);
        process.exit(1);
    }
}

update();
