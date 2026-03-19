import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function POST(request) {
    try {
        const formData = await request.json();
        const { image, filename } = formData;

        if (!image) {
            return NextResponse.json({ error: "Missing image data" }, { status: 400 });
        }

        // Base64 to Buffer
        const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
        const buffer = Buffer.from(base64Data, 'base64');

        // Path creation
        const uploadDir = join(process.cwd(), 'public', 'uploads', 'case-studies');
        if (!existsSync(uploadDir)) {
            await mkdir(uploadDir, { recursive: true });
        }

        // Safe unique filename
        const uniqueFilename = `${Date.now()}-${filename.replace(/\s+/g, '-').toLowerCase()}`;
        const filePath = join(uploadDir, uniqueFilename);

        await writeFile(filePath, buffer);

        const publicUrl = `/uploads/case-studies/${uniqueFilename}`;

        return NextResponse.json({ 
            success: true, 
            message: "Asset uploaded successfully", 
            url: publicUrl 
        });

    } catch (error) {
        console.error('API Error in admin-upload:', error);
        return NextResponse.json({ error: "Storage infrastructure failure" }, { status: 500 });
    }
}
