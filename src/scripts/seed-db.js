import 'dotenv/config';
import pool from '../lib/db.js';
import { servicesData } from '../data/servicesData.js';

async function seedDB() {
    try {
        console.log('--- Seeding Database ---');

        // Step 1: Seed Admin User
        const adminUser = process.env.ADMIN_USER || 'admin';
        const adminPass = process.env.ADMIN_PASS || 'admin123';

        console.log(`Seeding Admin User: ${adminUser}`);
        await pool.execute(
            `INSERT IGNORE INTO users (username, password) VALUES (?, ?)`,
            [adminUser, adminPass]
        );

        // Step 2: Seed Services
        for (const service of servicesData) {
            console.log(`Seeding: ${service.title}`);
            
            await pool.execute(
                `INSERT IGNORE INTO services (
                    service_id, short_title, slug, title, head, description, 
                    intro, whatYouGet, bestFor, closing, outcomes, faqs
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    service.id,
                    service.shortTitle || service.title,
                    service.slug,
                    service.title,
                    service.head || '',
                    service.description || '',
                    JSON.stringify(service.intro || {}),
                    JSON.stringify(service.whatYouGet || []),
                    service.bestFor || '',
                    JSON.stringify(service.closing || {}),
                    JSON.stringify(service.outcomes || []),
                    JSON.stringify(service.faqs || [])
                ]
            );
        }

        console.log('Database seeding completed successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
}

seedDB();
