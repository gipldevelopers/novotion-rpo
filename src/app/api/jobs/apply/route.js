import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(request) {
    try {
        const body = await request.json();
        const { job_id, name, email, linkedin, intent } = body;

        const query = `
            INSERT INTO job_applications (job_id, name, email, linkedin, intent)
            VALUES (?, ?, ?, ?, ?)
        `;

        await db.execute(query, [job_id, name, email, linkedin, intent]);

        return NextResponse.json({ success: true, message: 'Application submitted successfully' });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
