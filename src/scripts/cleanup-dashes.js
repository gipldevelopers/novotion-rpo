import 'dotenv/config';
import pool from '../lib/db.js';

async function cleanup() {
    try {
        console.log("🚀 Starting Global Em-Dash Cleanup...");

        // Fetch all services
        const [rows] = await pool.execute("SELECT id, title, head, description, intro, whatYouGet, bestFor, closing, outcomes, faqs FROM services");

        for (const row of rows) {
            let updated = false;
            const newRow = { ...row };

            // Fields to check
            const fields = ['title', 'head', 'description', 'intro', 'whatYouGet', 'bestFor', 'closing', 'outcomes', 'faqs'];

            for (const field of fields) {
                if (typeof newRow[field] === 'string' && newRow[field].includes(' ')) {
                    newRow[field] = newRow[field].replace(/ /g, ' ');
                    updated = true;
                }
            }

            if (updated) {
                await pool.execute(
                    `UPDATE services SET 
                        title = ?, head = ?, description = ?, intro = ?, 
                        whatYouGet = ?, bestFor = ?, closing = ?, outcomes = ?, faqs = ?
                    WHERE id = ?`,
                    [
                        newRow.title, newRow.head, newRow.description, newRow.intro,
                        newRow.whatYouGet, newRow.bestFor, newRow.closing, newRow.outcomes, newRow.faqs,
                        newRow.id
                    ]
                );
                console.log(`✅ Cleaned Service ID: ${newRow.id}`);
            }
        }

        console.log("🎉 Cleanup complete!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Cleanup failed:", error);
        process.exit(1);
    }
}

cleanup();
