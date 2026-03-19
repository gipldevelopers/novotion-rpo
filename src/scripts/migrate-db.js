const mysql = require('mysql2/promise');
require('dotenv').config();

async function fixDatabase() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT || 3306
    });

    try {
        console.log('--- DB FIX START ---');
        console.log(`Connected to: ${process.env.DB_HOST} / ${process.env.DB_NAME}`);

        // 1. Drop Services
        console.log('Dropping services table...');
        await connection.execute('DROP TABLE IF EXISTS services');

        // 2. Clear out old table if it exists
        await connection.execute('DROP TABLE IF EXISTS case_study_requests');

        // 3. Create Study Leads
        console.log('Creating study_leads table...');
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS study_leads (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                company VARCHAR(255),
                phone VARCHAR(50),
                case_study_slug VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await connection.execute(createTableQuery);

        // 4. List Tables to confirm
        const [tables] = await connection.execute('SHOW TABLES');
        console.log('Current Tables:', tables.map(t => Object.values(t)[0]));

        console.log('--- DB FIX COMPLETE ---');
    } catch (error) {
        console.error('Error during DB fix:', error);
    } finally {
        await connection.end();
    }
}

fixDatabase();
