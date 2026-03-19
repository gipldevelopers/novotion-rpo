import 'dotenv/config';
import pool from '../lib/db.js';
import { caseStudies } from '../data/caseStudiesData.js';

async function seedCaseStudies() {
    console.log('--- SEEDING CASE STUDIES ---');
    try {
        const connection = await pool.getConnection();

        for (const study of caseStudies) {
            console.log(`Migrating: ${study.title}`);
            const query = `
                INSERT INTO case_studies (
                    slug, title, industry, location, excerpt, overview, 
                    challenges, solutions, results, image
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE title = VALUES(title), excerpt = VALUES(excerpt)
            `;

            await connection.execute(query, [
                study.slug,
                study.title,
                study.industry,
                study.location,
                study.excerpt,
                study.overview,
                JSON.stringify(study.challenges || []),
                JSON.stringify(study.solutions || []),
                JSON.stringify(study.results || {}),
                study.image
            ]);
        }

        console.log('✅ SEEDING COMPLETE!');
        connection.release();
        process.exit(0);
    } catch (error) {
        console.error('❌ SEEDING FAILED:', error);
        process.exit(1);
    }
}

seedCaseStudies();
