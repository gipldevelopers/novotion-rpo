import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
    try {
        const [rows] = await db.execute('SELECT * FROM contact_messages ORDER BY created_at DESC');
        return NextResponse.json(rows);
    } catch (error) {
        console.error('API Error in admin-messages-fetch:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

        await db.execute('DELETE FROM contact_messages WHERE id = ?', [id]);
        return NextResponse.json({ success: true, message: 'Message deleted' });
    } catch (error) {
        console.error('API Error in admin-messages-delete:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
