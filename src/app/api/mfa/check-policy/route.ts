import { NextRequest, NextResponse } from 'next/server';
import { AuthenticatedSession } from '../../stytch/sessionAuth';
import { authenticateStytchSession } from '../../stytch/sessionAuth';
import { log } from '@/lib/utils';
import { policyEnforcer } from '@/services/policies/PolicyEnforcer';

export async function POST(request: NextRequest) {
  try {
    const session: AuthenticatedSession = await authenticateStytchSession(request);
    log('Authenticated session in verify-code:', session);

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