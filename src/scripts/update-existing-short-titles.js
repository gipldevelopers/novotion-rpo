import 'dotenv/config';
import pool from '../lib/db.js';

const mappings = [
    { id: "recruitment", short: "Recruitment Support" },
    { id: "biz-dev", short: "Business Development" },
    { id: "marketing", short: "Digital Marketing" },
    { id: "ai-automation", short: "AI & Automation" },
    { id: "finance", short: "Accounting & Finance" }
];

async function update() {
    try {
        console.log("🚀 Updating existing services...");
        for (const m of mappings) {
            await pool.execute(
                "UPDATE services SET short_title = ? WHERE service_id = ?",
                [m.short, m.id]
            );
            console.log(`✅ Updated: ${m.id} -> ${m.short}`);
        }
        console.log("🎉 Done!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Update failed:", error);
        process.exit(1);
    }
}

update();
