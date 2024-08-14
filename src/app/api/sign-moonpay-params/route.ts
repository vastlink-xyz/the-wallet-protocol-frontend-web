import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { log } from '@/lib/utils';

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');
  log('url is', url)

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    const secretKey = process.env.NEXT_PUBLIC_MOONPAY_SECRET_KEY;

    if (!secretKey) {
      throw new Error('MOONPAY_SECRET_KEY is not set');
    }

    const signature = crypto
      .createHmac('sha256', secretKey)
      .update(new URL(url).search)
      .digest('base64');

    log('signature', signature)

    return NextResponse.json({ signature });
  } catch (error) {
    console.error('Error generating signature:', error);
    return NextResponse.json({ error: 'Failed to generate signature' }, { status: 500 });
  }
}
