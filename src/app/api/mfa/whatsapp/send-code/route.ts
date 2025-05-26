import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '@/app/api/stytch/client';
import { AuthenticatedSession, authenticateStytchSession } from '@/app/api/stytch/sessionAuth';
import { log } from '@/lib/utils';

export async function POST(req: NextRequest) {
  try {
    const session: AuthenticatedSession = await authenticateStytchSession(req);
    log('Authenticated session in send-code:', session);

    const body = await req.json();
    const { phone_number } = body; // Expecting E.164 format, e.g., "+12345678900"

    if (!phone_number) {
      return NextResponse.json({ error: 'phone_number is required' }, { status: 400 });
    }

    // For adding a phone number to an existing Consumer user for MFA,
    // we typically send an OTP to it. Stytch's otps.whatsapp.send with user_id
    // can be used. It will associate this OTP attempt with the user.
    const otpResponse = await stytchClient.otps.whatsapp.send({
      user_id: session.user_id,
      phone_number: phone_number,
      // expiration_minutes: 5, // Optional: defaults to 10 minutes
    });
    log('Stytch OTP send response:', otpResponse);

    // The method_id to be used for otps.authenticate is the phone_id from this response
    // (for phone-based OTPs in consumer product).
    return NextResponse.json({ success: true, method_id: otpResponse.phone_id });

  } catch (error: any) {
    console.error('Error in POST /api/mfa/whatsapp/send-code:', error);
    log('Error sending OTP:', error);

    let errorMessage = 'Failed to send OTP';
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
    } else if (error.error_message) {
      errorMessage = error.error_message;
      if (error.error_type && error.error_type === 'too_many_unverified_factors') {
        errorMessage = 'Too many verification attempts. Please try again after some time.';
      }
      statusCode = error.status_code || 500;
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
} 