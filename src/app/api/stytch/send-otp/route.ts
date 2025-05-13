import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '../client';

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Send email OTP via Stytch
    const response = await stytchClient.otps.email.loginOrCreate({
      email,
      expiration_minutes: 10, // OTP valid for 10 minutes
    });

    // Return the method_id needed for verification
    return NextResponse.json({
      success: true,
      method_id: response.email_id,
    });
  } catch (error: any) {
    console.error('Error sending OTP:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Failed to send OTP',
        details: error.error_type || error.error_message 
      },
      { status: 500 }
    );
  }
}
