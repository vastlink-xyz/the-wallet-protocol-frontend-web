import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '@/app/api/stytch/client';
import { getStytchUserIdFromRequest } from '@/lib/auth/multi-provider-auth';
import { log } from '@/lib/utils';

export async function POST(req: NextRequest) {
  try {
    const { stytchUserId } = await getStytchUserIdFromRequest(req);
    
    if (!stytchUserId) {
      return NextResponse.json(
        { error: 'Stytch user ID not found' },
        { status: 400 }
      );
    }

    const body = await req.json();
    const { method_id, code } = body; // method_id is the phone_id from the send-code step

    if (!method_id || !code) {
      return NextResponse.json({ error: 'method_id and code are required' }, { status: 400 });
    }

    log('Verifying OTP with Stytch:', { method_id, code });
    const authResponse = await stytchClient.otps.authenticate({
      method_id: method_id, // This is the phone_id
      code: code,
      // Consider adding session_management_type: "intermediate" if you don't want this to affect the primary session.
      // For MFA enrollment, the primary goal is to verify the phone and have it associated with the user.
      // Stytch will mark the phone number as verified upon successful OTP authentication.
    });
    log('Stytch OTP authenticate response:', authResponse);

    // After successful OTP authentication, the phone number (identified by method_id/phone_id)
    // should be marked as verified for the user in Stytch.
    // Fetch the updated user to confirm and return their latest state, including verified phone numbers.
    log('Fetching updated user data for user_id:', stytchUserId);
    const userResponse = await stytchClient.users.get({ user_id: stytchUserId });
    log('Updated user data:', userResponse);

    return NextResponse.json({ success: true, user: userResponse });

  } catch (error: any) {
    console.error('Error in POST /api/mfa/whatsapp/verify-code:', error);
    log('Error verifying OTP:', error);

    let errorMessage = 'Failed to verify OTP';
    let statusCode = 500;

    const authErrorMessages = [
      'Authorization header is missing',
      'Invalid Authorization header format. Expected "Bearer <token>"',
      'Session token is missing',
      'Invalid session or user_id missing from session',
      'Session authentication failed'
    ];

    if (authErrorMessages.some(msg => error.message?.includes(msg))) {
      errorMessage = 'Authentication failed';
      statusCode = 401;
    } else if (error.error_message) { // Stytch specific error (e.g., invalid code, expired OTP)
        errorMessage = error.error_message;
        // Use Stytch's status code if available, common for OTP errors might be 400 or 401/403 related
        statusCode = error.status_code || 400; // Default to 400 for OTP validation type errors
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
} 