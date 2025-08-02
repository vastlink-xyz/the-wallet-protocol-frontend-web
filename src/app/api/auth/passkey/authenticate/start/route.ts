import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '@/app/api/stytch/client';

export async function POST(request: NextRequest) {
  try {
    const { domain } = await request.json();

    // Start WebAuthn authentication with Stytch
    // No user authentication required since this is for login
    const response = await stytchClient.webauthn.authenticateStart({
      domain: domain || 'localhost',
      return_passkey_credential_options: true
    });

    console.log('Stytch WebAuthn authenticate start response:', response);

    return NextResponse.json({
      options: response
    });

  } catch (error: any) {
    console.error('Passkey authentication start error:', error);
    return NextResponse.json(
      { error: 'Failed to start passkey authentication' },
      { status: 500 }
    );
  }
}