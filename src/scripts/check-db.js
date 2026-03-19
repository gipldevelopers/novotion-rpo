import 'dotenv/config';
import pool from '../lib/db.js';

async function testConnection() {
    console.log('📡 Connecting to Hostinger Database...');
    console.log(`📡 Host: ${process.env.DB_HOST}`);

    try {
        const connection = await pool.getConnection();
        console.log('✅ Connection Successful!');
        
        console.log('🗑️ Dropping services table...');
        await connection.execute('DROP TABLE IF EXISTS services');
        
        console.log('🗑️ Dropping case_study_requests (old name)...');
        await connection.execute('DROP TABLE IF EXISTS case_study_requests');

        console.log('🏗️ Creating study_leads table...');
        const createQuery = `
            CREATE TABLE IF NOT EXISTS study_leads (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                company VARCHAR(255),
                phone VARCHAR(50),
                case_study_slug VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;
        await connection.execute(createQuery);

        const [tables] = await connection.execute('SHOW TABLES');
        console.log('✅ DATABASE SYNCED SUCCESSFULLY!');
        console.log('📊 Current Tables:', tables.map(t => Object.values(t)[0]));
        
        connection.release();
        process.exit(0);
    } catch (error) {
        console.error('❌ MIGRATION FAILED!');
        console.error(`Message: ${error.message}`);
        process.exit(1);
    }
}

testConnection();
