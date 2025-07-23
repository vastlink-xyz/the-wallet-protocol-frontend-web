import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '../../../stytch/client';
import { authenticateStytchSession } from '../../../stytch/sessionAuth';
import { log } from '@/lib/utils';

// POST /api/mfa/totp/recover - Recover using TOTP recovery code
export async function POST(request: NextRequest) {
  try {
    const session = await authenticateStytchSession(request);
    const user_id = session.user_id;
    
    const body = await request.json();
    const { recovery_code, session_duration_minutes = 30 } = body;

    if (!recovery_code) {
      return NextResponse.json(
        { error: 'Missing recovery_code in request body' },
        { status: 400 }
      );
    }

    log('Recovering TOTP for user:', user_id);

    // Recover TOTP using Stytch API
    const response = await stytchClient.totps.recover({
      user_id,
      recovery_code,
      session_duration_minutes
    });

    log('TOTP recovery response:', response);

    return NextResponse.json({
      user: response.user,
      session_token: response.session_token,
      session: response.session,
      status_code: response.status_code
    });

  } catch (error: any) {
    console.error('Error recovering TOTP:', error);
    return NextResponse.json(
      { error: error.error_message || 'Failed to recover TOTP' },
      { status: 400 }
    );
  }
}