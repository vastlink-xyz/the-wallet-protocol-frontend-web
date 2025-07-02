import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '../client';
import { parseError } from '@/lib/error';
import { log } from '@/lib/utils';

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    const { methodId, code } = body;

    if (!methodId || !code) {
      return NextResponse.json(
        { error: 'Method ID and verification code are required' },
        { status: 400 }
      );
    }

    // Verify the OTP code with Stytch
    const response = await stytchClient.otps.authenticate({
      method_id: methodId,
      code,
      session_duration_minutes: 60 * 24 * 7, // 7 days session
    });

    // Get session info to return the session JWT
    const sessionResponse = await stytchClient.sessions.authenticate({
      session_token: response.session_token,
    });

    // Return the session JWT and user ID for LitProtocol authentication
    return NextResponse.json({
      success: true,
      session_jwt: sessionResponse.session_jwt,
      user_id: response.user_id,
    });
  } catch (error: any) {
    let message = 'Failed to verify OTP';
    const parsedError = parseError(error);
    log('parsedError', parsedError);

    if (parsedError.error_type === 'otp_code_not_found') {
      message = 'OTP code is invalid, please try again';
    }

    return NextResponse.json(
      { 
        error,
        message,
      },
      { status: 500 }
    );
  }
}