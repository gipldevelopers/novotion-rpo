import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { sendCaseStudyEmail } from '@/lib/nodemailer';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, company, phone, slug } = body;

        if (!name || !email || !slug) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 1. Save to Database
        const query = 'INSERT INTO study_leads (name, email, company, phone, case_study_slug) VALUES (?, ?, ?, ?, ?)';
        const params = [name, email, company || null, phone || null, slug];
        await db.execute(query, params);

        // 2. Send Real Email Notification via SMTP
        try {
            await sendCaseStudyEmail({ name, email, company, phone, slug });
            console.log(`[SMTP] Case Study lead notification sent to recipient!`);
        } catch (mailError) {
            console.error('[SMTP] FATAL Error sending case study email:', mailError);
            // We still return success since the DB portion is done
        }

        return NextResponse.json({ success: true, message: 'Request processed and lead recorded' });
    } catch (error) {
        console.error('API Error in case-study-request:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
