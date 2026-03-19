import 'dotenv/config';
import pool from '../lib/db.js';

const ctas = [
    { id: "recruitment", cta: "Build Your Hiring Extension" },
    { id: "biz-dev", cta: "Scale Your Sales Pipeline" },
    { id: "marketing", cta: "Grow Your Brand" },
    { id: "ai-automation", cta: "Automate Your Workflows" },
    { id: "finance", cta: "Organise Your Finances" }
];

async function updateCTAs() {
    try {
        console.log("🚀 Setting Hero CTAs...");
        for (const item of ctas) {
            await pool.execute(
                "UPDATE services SET cta = ? WHERE service_id = ?",
                [item.cta, item.id]
            );
            console.log(`✅ Set CTA: ${item.id} -> ${item.cta}`);
        }
        console.log("🎉 Hero CTAs updated!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Failed to set CTAs:", error);
        process.exit(1);
    }
}

updateCTAs();
