import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '@/app/api/stytch/client';
import { AuthenticatedSession, authenticateStytchSession } from '@/app/api/stytch/sessionAuth';
import { log } from '@/lib/utils';

export async function GET(req: NextRequest) {
  try {
    const session: AuthenticatedSession = await authenticateStytchSession(req);
    log('Authenticated session in get-user-phone:', session);

    // Fetch user information from Stytch to get phone numbers
    const userResponse = await stytchClient.users.get({ user_id: session.user_id });

    // Extract verified phone numbers
    const verifiedPhones = userResponse.phone_numbers?.filter(phone => phone.verified) || [];
    
    return NextResponse.json({ 
      success: true, 
      phones: verifiedPhones.map(phone => ({
        phone_id: phone.phone_id,
        phone_number: phone.phone_number,
        verified: phone.verified
      }))
    });

  } catch (error: any) {
    console.error('Error in GET /api/mfa/get-user-phone:', error);
    log('Error fetching user phone:', error);

    let errorMessage = 'Failed to fetch user phone number';
    let statusCode = 500;

    if (error.message?.includes('Authentication failed')) {
      errorMessage = 'Authentication failed';
      statusCode = 401;
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
} 