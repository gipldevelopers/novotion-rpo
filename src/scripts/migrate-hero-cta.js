import 'dotenv/config';
import pool from '../lib/db.js';

async function migrate() {
    try {
        console.log("🚀 Starting Migration (Hero CTA)...");
        
        // Add cta column if it doesn't exist
        await pool.execute(`
            ALTER TABLE services 
            ADD COLUMN cta VARCHAR(255) AFTER title
        `);
        
        console.log("✅ Success! 'cta' column has been added to the services table.");
        process.exit(0);
    } catch (error) {
        if (error.code === 'ER_DUP_COLUMN_NAME') {
            console.log("ℹ️ Skipping migration: 'cta' column already exists.");
            process.exit(0);
        } else {
            console.error("❌ Migration Failed:", error);
            process.exit(1);
        }
    }
}

migrate();
