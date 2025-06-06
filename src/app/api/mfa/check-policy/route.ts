import { NextRequest, NextResponse } from 'next/server';
import { AuthenticatedSession } from '../../stytch/sessionAuth';
import { authenticateStytchSession } from '../../stytch/sessionAuth';
import { log } from '@/lib/utils';
import { policyEnforcer } from '@/services/policies/PolicyEnforcer';
import { stytchClient } from '../../stytch/client';

export async function POST(request: NextRequest) {
  try {
    const session: AuthenticatedSession = await authenticateStytchSession(request);
    log('Authenticated session in verify-code:', session);

    // Check if user has verified phone numbers
    const userResponse = await stytchClient.users.get({ user_id: session.user_id });
    const verifiedPhones = userResponse.phone_numbers?.filter(phone => phone.verified) || [];
    if (verifiedPhones.length === 0) {
      // kkktodo
      // If user has no verified phone numbers, return false
      return NextResponse.json({
        requiresMfa: false,
      });
    }
    
    const body = await request.json();
    const { contextType, ...contextParams } = body;
    
    const shouldTriggerMFA = await policyEnforcer.checkPolicies({
      ...contextParams,
    }, contextType);
    
    return NextResponse.json({
      requiresMfa: shouldTriggerMFA,
    });
  } catch (error) {
    console.error('Error checking policy:', error);
    return NextResponse.json(
      { error: 'Failed to check policy' },
      { status: 500 }
    );
  }
}