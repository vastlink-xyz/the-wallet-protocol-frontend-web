import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '@/app/api/stytch/client';
import { getUser } from '@/app/api/user/storage';

export async function POST(request: NextRequest) {
  try {
    const { credential, authMethodId } = await request.json();

    if (!credential || !authMethodId) {
      return NextResponse.json(
        { error: 'Credential and authMethodId are required' },
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

    // Log credential format for debugging
    console.log('Received credential from browser:', JSON.stringify(credential, null, 2));

    // Convert @simplewebauthn/browser format to standard WebAuthn format
    const standardCredential = {
      id: credential.id,
      rawId: credential.rawId,
      type: credential.type,
      response: {
        attestationObject: credential.response.attestationObject,
        clientDataJSON: credential.response.clientDataJSON
      }
    };

    console.log('Converted to standard format:', JSON.stringify(standardCredential, null, 2));

    // Stytch expects public_key_credential as JSON string
    const credentialJsonString = JSON.stringify(standardCredential);
    console.log('Credential as JSON string:', credentialJsonString);

    // Complete WebAuthn registration with Stytch and create session
    const response = await stytchClient.webauthn.register({
      user_id: stytchProvider.sub,
      public_key_credential: credentialJsonString,
      session_duration_minutes: 60 // create a 60 minute session to make sure session_jwt is not empty
    });

    return NextResponse.json({
      session_jwt: response.session_jwt,
      user: response.user,
      webauthn_registration_id: response.webauthn_registration_id
    });

  } catch (error: any) {
    console.error('Passkey registration complete error:', error);
    return NextResponse.json(
      { error: 'Failed to complete passkey registration' },
      { status: 500 }
    );
  }
}