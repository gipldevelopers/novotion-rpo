import 'dotenv/config';
import pool from '../lib/db.js';

async function check() {
    try {
        const [rows] = await pool.execute("SELECT id, service_id, slug, title FROM services");
        console.table(rows);
        
        // Also check one whatYouGet to see the slugs inside
        const [one] = await pool.execute("SELECT whatYouGet FROM services WHERE service_id = 'biz-dev'");
        if (one.length > 0) {
            const data = JSON.parse(one[0].whatYouGet);
            console.log("Biz Dev Pillars Slugs:");
            data.forEach(p => console.log(`- ${p.title}: ${p.slug}`));
        }
        
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

check();
