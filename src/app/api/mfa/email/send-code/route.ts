import { NextRequest, NextResponse } from 'next/server';
import { authenticateStytchSession } from '../../../stytch/sessionAuth';
import { stytchClient } from '../../../stytch/client';

export async function POST(req: NextRequest) {
  try {
    const session = await authenticateStytchSession(req);
    
    // Get user's email from Stytch
    const userResponse = await stytchClient.users.get({ user_id: session.user_id });
    const userEmail = userResponse.emails.find(email => email.verified);
    
    if (!userEmail) {
      return NextResponse.json(
        { error: 'No verified email found for user' },
        { status: 400 }
      );
    }

    // Send Email OTP using Stytch
    const otpResponse = await stytchClient.otps.email.loginOrCreate({
      email: userEmail.email,
      expiration_minutes: 10,
    });

    return NextResponse.json({ 
      success: true, 
      method_id: otpResponse.email_id,
      email: userEmail.email
    });
  } catch (error) {
    console.error('Error sending Email OTP:', error);
    return NextResponse.json(
      { error: 'Failed to send Email OTP' },
      { status: 500 }
    );
  }
}