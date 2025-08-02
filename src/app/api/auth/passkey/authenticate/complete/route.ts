import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '@/app/api/stytch/client';
import { STYTCH_SESSION_DURATION_MINUTES } from '@/lib/stytch/constants';

export async function POST(request: NextRequest) {
  try {
    const { credential } = await request.json();

    if (!credential) {
      return NextResponse.json(
        { error: 'Credential is required' },
        { status: 400 }
      );
    }

    console.log('Received credential from browser:', JSON.stringify(credential, null, 2));

    // Convert @simplewebauthn/browser format to standard WebAuthn format
    const standardCredential = {
      id: credential.id,
      rawId: credential.rawId,
      type: credential.type,
      response: {
        authenticatorData: credential.response.authenticatorData,
        clientDataJSON: credential.response.clientDataJSON,
        signature: credential.response.signature,
        userHandle: credential.response.userHandle
      }
    };

    console.log('Converted to standard format:', JSON.stringify(standardCredential, null, 2));

    // Stytch expects public_key_credential as JSON string
    const credentialJsonString = JSON.stringify(standardCredential);
    console.log('Credential as JSON string:', credentialJsonString);

    // Complete WebAuthn authentication with Stytch and create session
    const response = await stytchClient.webauthn.authenticate({
      public_key_credential: credentialJsonString,
      session_duration_minutes: STYTCH_SESSION_DURATION_MINUTES
    });

    // Type assertion for Stytch WebAuthn authentication response
    const stytchResponse = response;

    return NextResponse.json({
      session_jwt: stytchResponse.session_jwt,
      user: stytchResponse.user,
      session_id: stytchResponse.session?.session_id
    });

  } catch (error: any) {
    console.error('Passkey authentication complete error:', error);
    return NextResponse.json(
      { error: 'Failed to complete passkey authentication' },
      { status: 500 }
    );
  }
}