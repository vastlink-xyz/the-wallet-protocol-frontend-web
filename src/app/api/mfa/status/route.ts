import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '@/app/api/stytch/client';
import { getStytchUserIdFromRequest } from '@/lib/auth/multi-provider-auth';

export async function GET(req: NextRequest) {
  try {
    const { stytchUserId } = await getStytchUserIdFromRequest(req);
    
    if (!stytchUserId) {
      return NextResponse.json(
        { error: 'Stytch user ID not found' },
        { status: 400 }
      );
    }

    // Get MFA status from Stytch
    const userResponse = await stytchClient.users.get({ user_id: stytchUserId });
    return NextResponse.json(userResponse);
  } catch (error: any) {
    console.error('Error in GET /api/mfa/status:', error);
    return NextResponse.json({ error: 'Failed to fetch MFA status' }, { status: 500 });
  }
}
