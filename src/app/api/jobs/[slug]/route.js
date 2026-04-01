import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(request, { params }) {
    try {
        const { slug } = await params;
        const [rows] = await db.execute('SELECT * FROM jobs WHERE slug = ?', [slug]);

        if (rows.length === 0) {
            return NextResponse.json({ error: 'Job not found' }, { status: 404 });
        }

        const job = {
            ...rows[0],
            directives: typeof rows[0].directives === 'string' ? JSON.parse(rows[0].directives) : rows[0].directives
        };

        return NextResponse.json(job);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        const { slug: existingSlug } = await params;
        const body = await request.json();
        const { title, slug, department, location, type, description, summary, directives, is_active } = body;

        const query = `
            UPDATE jobs 
            SET title = ?, slug = ?, department = ?, location = ?, type = ?, description = ?, summary = ?, directives = ?, is_active = ?
            WHERE slug = ?
        `;

        await db.execute(query, [
            title, 
            slug, 
            department, 
            location, 
            type || 'Full-Time', 
            description, 
            summary, 
            JSON.stringify(directives || []),
            is_active === undefined ? 1 : is_active,
            existingSlug
        ]);

        return NextResponse.json({ success: true, message: 'Job updated successfully' });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { slug } = await params;
        await db.execute('DELETE FROM jobs WHERE slug = ?', [slug]);
        return NextResponse.json({ success: true, message: 'Job deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
