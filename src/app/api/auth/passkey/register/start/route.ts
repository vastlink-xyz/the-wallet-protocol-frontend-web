import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '@/app/api/stytch/client';
import { getUser } from '@/app/api/user/storage';

export async function POST(request: NextRequest) {
  try {
    const { domain, authMethodId } = await request.json();
    
    if (!authMethodId) {
      return NextResponse.json(
        { error: 'authMethodId is required' },
        { status: 400 }
      );
    }

    // Get user from database to get Stytch user_id
    const user = await getUser(authMethodId);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Find the EMAIL_OTP provider to get Stytch user_id
    const stytchProvider = user.authProviders?.find(
      p => p.providerType === 'email_otp' && p.isEnabled
    );
    
    if (!stytchProvider?.sub) {
      return NextResponse.json(
        { error: 'No Stytch user_id found for this user' },
        { status: 400 }
      );
    }

    // Start WebAuthn registration with Stytch using Stytch user_id
    const response = await stytchClient.webauthn.registerStart({
      user_id: stytchProvider.sub,
      domain: domain || 'localhost',
      user_agent: request.headers.get('user-agent') || undefined,
      authenticator_type: 'platform', // Use platform authenticator (biometric)
      return_passkey_credential_options: true
    });

    console.log('Stytch WebAuthn register start response:', response);

    // Type assertion for Stytch WebAuthn response
    const stytchResponse = response as any;
    
    return NextResponse.json({
      options: stytchResponse
    });

  } catch (error: any) {
    console.error('Passkey registration start error:', error);
    return NextResponse.json(
      { error: 'Failed to start passkey registration' },
      { status: 500 }
    );
  }
}