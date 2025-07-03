import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '../client';
import { STYTCH_SESSION_DURATION_MINUTES } from '@/lib/stytch/constants';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { methodId, code } = body;

    if (!methodId || !code) {
      return NextResponse.json(
        { error: 'Method ID and verification code are required' },
        { status: 400 }
      );
    }

    // Verify the SMS OTP
    const response = await stytchClient.otps.authenticate({
      method_id: methodId,
      code,
      session_duration_minutes: STYTCH_SESSION_DURATION_MINUTES,
    });

    return NextResponse.json({
      success: true,
      user_id: response.user_id,
    });
  } catch (error: any) {
    console.error('Error verifying SMS MFA:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Failed to verify SMS MFA',
        details: error.error_type || error.error_message 
      },
      { status: 500 }
    );
  }
}
