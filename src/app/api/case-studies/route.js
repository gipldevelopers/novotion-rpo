import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const slug = searchParams.get('slug');
        const id = searchParams.get('id');

        if (id) {
            const [rows] = await db.execute('SELECT * FROM case_studies WHERE id = ?', [id]);
            if (rows.length === 0) {
                return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
            }
            const study = rows[0];
            return NextResponse.json({
                ...study,
                challenges: typeof study.challenges === 'string' ? JSON.parse(study.challenges) : (study.challenges || []),
                solutions: typeof study.solutions === 'string' ? JSON.parse(study.solutions) : (study.solutions || []),
                results: typeof study.results === 'string' ? JSON.parse(study.results) : (study.results || {}),
            });
        }

        if (slug) {
            const [rows] = await db.execute('SELECT * FROM case_studies WHERE slug = ?', [slug]);
            if (rows.length === 0) {
                return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
            }
            const study = rows[0];
            return NextResponse.json({
                ...study,
                challenges: typeof study.challenges === 'string' ? JSON.parse(study.challenges) : study.challenges,
                solutions: typeof study.solutions === 'string' ? JSON.parse(study.solutions) : study.solutions,
                results: typeof study.results === 'string' ? JSON.parse(study.results) : study.results,
            });
        }

        const [rows] = await db.execute('SELECT * FROM case_studies ORDER BY created_at DESC');
        const studies = rows.map(study => ({
            ...study,
            challenges: typeof study.challenges === 'string' ? JSON.parse(study.challenges) : study.challenges,
            solutions: typeof study.solutions === 'string' ? JSON.parse(study.solutions) : study.solutions,
            results: typeof study.results === 'string' ? JSON.parse(study.results) : study.results,
        }));

        return NextResponse.json(studies);
    } catch (error) {
        console.error('API Error in public-case-studies:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
