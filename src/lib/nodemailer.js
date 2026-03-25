import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_ENCRYPTION === 'ssl',
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
});

export const sendDirectContactEmail = async ({ to, subject, html }) => {
    if (!to) throw new Error("Recipient address missing");
    
    const mailOptions = {
        from: `Noltven Platform <${process.env.MAIL_FROM_ADDRESS}>`,
        to: to,
        subject: subject,
        html: html,
    };

    return await transporter.sendMail(mailOptions);
};

export const sendCaseStudyEmail = async ({ name, email, company, phone, slug }) => {
    const to = process.env.MAIL_TO_ADDRESS || 'vraj@gohilinfotech.com';
    
    const mailOptions = {
        from: `Novotion Case Studies <${process.env.MAIL_FROM_ADDRESS}>`,
        to: to,
        subject: `New Case Study Request: ${slug}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
                <h2 style="color: #1b50a2;">New Case Study Lead</h2>
                <p>A user has requested access to a premium case study.</p>
                <hr style="border: 0; border-top: 1px solid #eee;"/>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company || 'Not Specified'}</p>
                <p><strong>Phone:</strong> ${phone || 'Not Specified'}</p>
                <p><strong>Case Study:</strong> <span style="color: #666;">${slug}</span></p>
                <hr style="border: 0; border-top: 1px solid #eee;"/>
                <p style="font-size: 12px; color: #999;">This lead has been saved to your Admin Panel also.</p>
            </div>
        `,
    };

    return await transporter.sendMail(mailOptions);
};
