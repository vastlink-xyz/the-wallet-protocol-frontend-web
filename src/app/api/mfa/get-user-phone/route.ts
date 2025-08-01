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

    // Fetch user information from Stytch to get phone numbers
    const userResponse = await stytchClient.users.get({ user_id: stytchUserId });

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
    return NextResponse.json({ error: 'Failed to fetch user phone number' }, { status: 500 });
  }
} 