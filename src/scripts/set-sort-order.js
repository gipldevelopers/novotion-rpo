import 'dotenv/config';
import pool from '../lib/db.js';

const order = [
    { id: "recruitment", pos: 1 },
    { id: "biz-dev", pos: 2 },
    { id: "marketing", pos: 3 },
    { id: "ai-automation", pos: 4 },
    { id: "finance", pos: 5 }
];

async function updateOrder() {
    try {
        console.log("🚀 Setting navbar order...");
        for (const o of order) {
            await pool.execute(
                "UPDATE services SET sort_order = ? WHERE service_id = ?",
                [o.pos, o.id]
            );
            console.log(`✅ Set Order ${o.pos}: ${o.id}`);
        }
        console.log("🎉 Ordering successful!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Failed to set order:", error);
        process.exit(1);
    }
}

updateOrder();
