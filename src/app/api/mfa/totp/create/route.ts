import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '../../../stytch/client';
import { getStytchUserIdFromRequest } from '@/lib/auth/multi-provider-auth';
import { log } from '@/lib/utils';

// POST /api/mfa/totp/create - Create TOTP for user
export async function POST(request: NextRequest) {
  try {
    const { authMethodId, stytchUserId, providerType } = await getStytchUserIdFromRequest(request);
    
    if (!stytchUserId) {
      return NextResponse.json(
        { 
          error: 'No Stytch user found. Please ensure you have email authentication set up.',
          details: 'TOTP requires a Stytch user account. Users must have email authentication configured.'
        },
        { status: 400 }
      );
    }
    
    const body = await request.json();
    const { expiration_minutes = 1440 } = body;

    log('Creating TOTP for user:', stytchUserId, 'authMethodId:', authMethodId, 'provider:', providerType);

    // Create TOTP using Stytch API
    const response = await stytchClient.totps.create({
      user_id: stytchUserId,
      expiration_minutes
    });

    log('TOTP creation response:', response);

    // Return the response data needed for setup
    return NextResponse.json({
      totp_id: response.totp_id,
      secret: response.secret,
      qr_code: response.qr_code,
      recovery_code: response.recovery_codes?.[0] || '', // Only return the first recovery code
      user: response.user
    });

  } catch (error: any) {
    console.error('Error creating TOTP:', error);
    return NextResponse.json(
      { error: error.error_message || 'Failed to create TOTP' },
      { status: 500 }
    );
  }
}