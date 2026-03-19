import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(request) {
    try {
        const body = await request.json();
        const { id, slug, title, industry, location, excerpt, overview, challenges, solutions, results, image } = body;

        if (id) {
            // Update
            const query = `
                UPDATE case_studies SET 
                    slug = ?, title = ?, industry = ?, location = ?, excerpt = ?, 
                    overview = ?, challenges = ?, solutions = ?, results = ?, image = ?
                WHERE id = ?
            `;
            await db.execute(query, [
                slug, title, industry, location, excerpt, overview, 
                JSON.stringify(challenges), JSON.stringify(solutions), JSON.stringify(results), 
                image, id
            ]);
            return NextResponse.json({ success: true, message: 'Case study updated' });
        } else {
            // Create
            const query = `
                INSERT INTO case_studies (
                    slug, title, industry, location, excerpt, overview, 
                    challenges, solutions, results, image
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            await db.execute(query, [
                slug, title, industry, location, excerpt, overview, 
                JSON.stringify(challenges), JSON.stringify(solutions), JSON.stringify(results), 
                image
            ]);
            return NextResponse.json({ success: true, message: 'Case study created' });
        }
    } catch (error) {
        console.error('API Error in admin-case-study-manage:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

        await db.execute('DELETE FROM case_studies WHERE id = ?', [id]);
        return NextResponse.json({ success: true, message: 'Case study deleted' });
    } catch (error) {
        console.error('API Error in admin-case-study-delete:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
