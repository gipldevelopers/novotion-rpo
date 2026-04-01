import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
    try {
        const [rows] = await db.execute('SELECT * FROM jobs WHERE is_active = 1 ORDER BY created_at DESC');
        
        // Parse JSON for directives
        const jobs = rows.map(job => ({
            ...job,
            directives: typeof job.directives === 'string' ? JSON.parse(job.directives) : job.directives
        }));

        return NextResponse.json(jobs);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { title, slug, department, location, type, description, summary, directives } = body;

        const query = `
            INSERT INTO jobs (title, slug, department, location, type, description, summary, directives)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;

        await db.execute(query, [
            title, 
            slug, 
            department, 
            location, 
            type || 'Full-Time', 
            description, 
            summary, 
            JSON.stringify(directives || [])
        ]);

        return NextResponse.json({ success: true, message: 'Job posted successfully' });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
