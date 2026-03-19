import 'dotenv/config';
import pool from '../lib/db.js';

async function initDB() {
    try {
        console.log('--- Initializing Database ---');

        await pool.execute(`
            CREATE TABLE IF NOT EXISTS services (
                id INT AUTO_INCREMENT PRIMARY KEY,
                service_id VARCHAR(50) UNIQUE,
                short_title VARCHAR(255),
                slug VARCHAR(255) UNIQUE NOT NULL,
                title VARCHAR(255) NOT NULL,
                head TEXT,
                description LONGTEXT,
                intro LONGTEXT,
                whatYouGet LONGTEXT,
                bestFor LONGTEXT,
                closing LONGTEXT,
                outcomes LONGTEXT,
                faqs LONGTEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);

        await pool.execute(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        console.log('Database tables created or already exist.');

        process.exit(0);
    } catch (error) {
        console.error('Initialization failed:', error);
        process.exit(1);
    }
}

initDB();
