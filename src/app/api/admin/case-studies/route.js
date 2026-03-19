import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
    try {
        const query = 'SELECT * FROM study_leads ORDER BY created_at DESC';
        const [rows] = await db.execute(query);
        return NextResponse.json(rows);
    } catch (error) {
        console.error('API Error in admin-case-studies:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
