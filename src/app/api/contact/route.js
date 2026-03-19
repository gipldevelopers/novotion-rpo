import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { sendDirectContactEmail } from '@/lib/nodemailer';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
        }

        // 1. Save to Database
        const query = `
            INSERT INTO contact_messages (name, email, phone, subject, message)
            VALUES (?, ?, ?, ?, ?)
        `;
        await db.execute(query, [name, email, phone || '', subject || 'Contact Inquiry', message]);

        // 2. Send Email Notification
        const adminEmail = "vraj@gohilinfotech.com";
        const emailContent = `
            <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="color: #000; font-weight: 800; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">New Contact Inquiry</h2>
                <p style="font-size: 14px; margin-bottom: 20px; color: #666;">A new message has been received from the website contact form.</p>
                
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f9fafb;">Name:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #f9fafb;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f9fafb;">Email:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #f9fafb;">${email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f9fafb;">Phone:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #f9fafb;">${phone || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f9fafb;">Subject:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #f9fafb;">${subject || 'Contact Inquiry'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #f3f4f6;" colspan="2">Message:</td>
                    </tr>
                    <tr>
                        <td style="padding: 20px; background: #f9fafb; border-radius: 10px; line-height: 1.6;" colspan="2">${message}</td>
                    </tr>
                </table>
            </div>
        `;

        // Using the newly renamed sendDirectContactEmail export to break cache
        await sendDirectContactEmail({
            to: adminEmail,
            subject: `[New Inquiry] ${subject || 'Contact Request'} from ${name}`,
            html: emailContent
        });

        return NextResponse.json({ success: true, message: "Message sent and logged successfully" });

    } catch (error) {
        console.error('API Error in contact-form:', error);
        return new Response(JSON.stringify({ 
            success: false, 
            error: "Infrastructure Exception", 
            details: error.message 
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
