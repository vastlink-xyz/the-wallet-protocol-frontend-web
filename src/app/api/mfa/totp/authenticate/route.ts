import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '../../../stytch/client';
import { authenticateStytchSession } from '../../../stytch/sessionAuth';
import { log } from '@/lib/utils';

// POST /api/mfa/totp/authenticate - Authenticate TOTP code
export async function POST(request: NextRequest) {
  try {
    const session = await authenticateStytchSession(request);
    const user_id = session.user_id;
    
    const body = await request.json();
    const { totp_code, session_duration_minutes = 30 } = body;

    if (!totp_code) {
      return NextResponse.json(
        { error: 'Missing totp_code in request body' },
        { status: 400 }
      );
    }

    if (totp_code.length !== 6) {
      return NextResponse.json(
        { error: 'TOTP code must be exactly 6 digits' },
        { status: 400 }
      );
    }

    log('Authenticating TOTP code for user:', user_id);

    // Authenticate TOTP using Stytch API
    const response = await stytchClient.totps.authenticate({
      user_id,
      totp_code,
      // session_duration_minutes
    });

    log('TOTP authentication response:', response);

    return NextResponse.json({
      user: response.user,
      session_token: response.session_token,
      session: response.session,
      status_code: response.status_code
    });

  } catch (error: any) {
    console.error('Error authenticating TOTP:', error);
    return NextResponse.json(
      { error: error.error_message || 'Failed to authenticate TOTP' },
      { status: 400 }
    );
  }
}