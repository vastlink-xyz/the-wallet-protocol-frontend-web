import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '@/app/api/stytch/client';
import { AuthenticatedSession, authenticateStytchSession } from '@/app/api/stytch/sessionAuth';

export async function GET(req: NextRequest) {
  try {
    const session: AuthenticatedSession = await authenticateStytchSession(req);
    const userResponse = await stytchClient.users.get({ user_id: session.user_id });
    
    const phoneNumbers = userResponse.phone_numbers || [];

    return NextResponse.json({ phone_numbers: phoneNumbers });

  } catch (error: any) {
    console.error('Error in GET /api/mfa/status:', error);

    let errorMessage = 'Failed to fetch MFA status';
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
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
