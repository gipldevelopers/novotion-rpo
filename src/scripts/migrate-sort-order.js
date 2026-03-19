import 'dotenv/config';
import pool from '../lib/db.js';

async function migrate() {
    try {
        console.log("🚀 Starting Migration (Sort Order)...");
        
        // Add sort_order column if it doesn't exist
        await pool.execute(`
            ALTER TABLE services 
            ADD COLUMN sort_order INT DEFAULT 0 AFTER short_title
        `);
        
        console.log("✅ Success! 'sort_order' column has been added to the services table.");
        process.exit(0);
    } catch (error) {
        if (error.code === 'ER_DUP_COLUMN_NAME') {
            console.log("ℹ️ Skipping migration: 'sort_order' column already exists.");
            process.exit(0);
        } else {
            console.error("❌ Migration Failed:", error);
            process.exit(1);
        }
    }
}

migrate();
