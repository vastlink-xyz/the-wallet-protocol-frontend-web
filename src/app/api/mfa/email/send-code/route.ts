import { NextRequest, NextResponse } from 'next/server';
import { getStytchUserIdFromRequest } from '@/lib/auth/multi-provider-auth';
import { stytchClient } from '../../../stytch/client';

export async function POST(req: NextRequest) {
  try {
    const { authMethodId, stytchUserId, providerType } = await getStytchUserIdFromRequest(req);
    
    if (!stytchUserId) {
      return NextResponse.json(
        { error: 'No Stytch user found. Please ensure you have email authentication set up.' },
        { status: 400 }
      );
    }

    // Get user's email from Stytch
    const userResponse = await stytchClient.users.get({ user_id: stytchUserId });
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