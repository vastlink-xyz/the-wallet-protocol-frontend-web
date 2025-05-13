import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '../client';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, phoneNumber } = body;

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    if (!phoneNumber) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      );
    }

    // Send WhatsApp MFA to the user
    const response = await stytchClient.otps.whatsapp.send({
      user_id: userId,
      phone_number: phoneNumber,
    });

    return NextResponse.json({
      success: true,
      method_id: response.phone_id,
    });
  } catch (error: any) {
    console.error('Error sending WhatsApp MFA:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Failed to send WhatsApp MFA',
        details: error.error_type || error.error_message 
      },
      { status: 500 }
    );
  }
}
