import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
    try {
        console.log('--- SYSTEM DB SETUP START ---');
        
        // 1. Drop old table
        console.log('Dropping services table...');
        await db.execute('DROP TABLE IF EXISTS services');
        
        // 2. Drop old lead table name if exists
        await db.execute('DROP TABLE IF EXISTS case_study_requests');
        
        // 3. Create study_leads
        console.log('Creating study_leads table...');
        const createLeadsQuery = `
            CREATE TABLE IF NOT EXISTS study_leads (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                company VARCHAR(255),
                phone VARCHAR(50),
                case_study_slug VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        await db.execute(createLeadsQuery);

        // 4. Create case_studies table
        console.log('Creating case_studies table...');
        const createCSQuery = `
            CREATE TABLE IF NOT EXISTS case_studies (
                id INT AUTO_INCREMENT PRIMARY KEY,
                slug VARCHAR(255) UNIQUE NOT NULL,
                title VARCHAR(255) NOT NULL,
                industry VARCHAR(255),
                location VARCHAR(255),
                excerpt TEXT,
                overview TEXT,
                challenges JSON,
                solutions JSON,
                results JSON,
                image VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        await db.execute(createCSQuery);

        // 5. Create contact_messages table
        console.log('Creating contact_messages table...');
        const createContactQuery = `
            CREATE TABLE IF NOT EXISTS contact_messages (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                subject VARCHAR(255),
                message TEXT,
                phone VARCHAR(50),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        await db.execute(createContactQuery);

        // 6. Seed initial Manchester Case Study
        console.log('Seeding initial Manchester Case Study...');
        const manchesterData = {
            slug: "manchester-construction-recruitment-growth",
            title: "How Novotion Powered a Manchester Construction Recruitment Agency's Growth",
            industry: "Construction",
            location: "Manchester, UK",
            excerpt: "A Manchester-based agency struggling with placement quality and day-one no-shows transformed its operations into a high-performance market leader.",
            overview: "A Manchester-based construction recruitment agency specializing in both contract and permanent placements was struggling to keep pace with a market that had changed faster than its internal operations. With a growing trades and labour client base and rising client expectations across Greater Manchester and the wider North-West, the agency needed to fundamentally change how it sourced and delivered across both desks before it was overtaken by leaner competitors already embedded in the same clients' PSLs.",
            challenges: JSON.stringify([
                {title: "Multi-Agency Competition Killing Quality", description: "Main contractor clients were briefing 5-8 agencies on the same vacancy, turning searches into a 'race-to-CV' sprint rather than a quality-led search."},
                {title: "Contractor Day-One No-Shows", description: "Blue-collar workers were regularly missing site starts on Monday mornings, causing site delays and damaging client relationships."},
                {title: "Permanent Desk Counter-Offer Risks", description: "White-collar candidates were frequently accepting counter-offers at the resignation stage because the agency had no process to prepare them."}
            ]),
            solutions: JSON.stringify([
                {title: "Sole/Preferred Agency Shift", description: "Shifted key clients to exclusivity or 48-hour head-start windows, demonstrating that focused searches fill faster with better candidates."},
                {title: "Same-Day Start Confirmation", description: "Introduced a 6am/evening-before confirmation call, reducing day-one no-shows by over 70% in six weeks."},
                {title: "Counter-Offer Preparedness", description: "Integrated motivation-focused conversations from the first meeting to identify and mitigate counter-offer risks before they happen."}
            ]),
            results: JSON.stringify({
                summary: "In the last quarter, the agency achieved a high conversion rate through these strategic implementations.",
                metrics: [
                    { label: "Candidate Submissions", value: "60+" },
                    { label: "Interviews Conducted", value: "20" },
                    { label: "Successful Placements", value: "6" }
                ],
                filledRoles: [
                    "Site Manager (White Collar | Permanent)",
                    "Senior Quantity Surveyor (White Collar | Permanent)",
                    "Project Manager (Commercial Fit-Out | Contract)",
                    "Site Engineer (Civils | Contract)"
                ]
            }),
            image: "/assets/case-studies/manchester-construction.jpg"
        };

        const seedQuery = `
            INSERT INTO case_studies (
                slug, title, industry, location, excerpt, overview, 
                challenges, solutions, results, image
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE title = VALUES(title)
        `;
        
        await db.execute(seedQuery, [
            manchesterData.slug,
            manchesterData.title,
            manchesterData.industry,
            manchesterData.location,
            manchesterData.excerpt,
            manchesterData.overview,
            manchesterData.challenges,
            manchesterData.solutions,
            manchesterData.results,
            manchesterData.image
        ]);
        
        // 6. Verify
        const [tables] = await db.execute('SHOW TABLES');
        const tableList = tables.map(t => Object.values(t)[0]);
        
        console.log('Verified Tables:', tableList);

        return NextResponse.json({ 
            success: true, 
            message: 'Database schema synchronized and case studies seeded.', 
            tables: tableList 
        });
    } catch (error) {
        console.error('Setup Error:', error);
        return NextResponse.json({ 
            success: false, 
            error: error.message 
        }, { status: 500 });
    }
}
