import { NextRequest, NextResponse } from 'next/server';
import { uploadToCloudinary } from '@/lib/cloudinary';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string || 'qlunch';

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileBase64 = `data:${file.type};base64,${buffer.toString('base64')}`;

    // Upload to Cloudinary
    const imageUrl = await uploadToCloudinary(fileBase64, folder);

    return NextResponse.json({ url: imageUrl });
  } catch (error) {
    console.error('Error in upload handler:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
