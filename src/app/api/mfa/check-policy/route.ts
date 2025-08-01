import { NextRequest, NextResponse } from 'next/server';
import { log } from '@/lib/utils';
import { policyEnforcer } from '@/services/policies/PolicyEnforcer';
import { authenticateMultiProviderSession } from '@/lib/auth/multi-provider-auth';

export async function POST(request: NextRequest) {
  try {
    const authResult = await authenticateMultiProviderSession(request);
    const { user } = authResult;

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