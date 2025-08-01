import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '../../../stytch/client';
import { getStytchUserIdFromRequest } from '@/lib/auth/multi-provider-auth';
import { getJwtTokenFromRequest } from '../../../stytch/sessionAuth';
import { log } from '@/lib/utils';
import { policyEnforcer } from '@/services/policies/PolicyEnforcer';

// DELETE /api/mfa/totp/remove - Remove TOTP for user with policy checks
export async function DELETE(request: NextRequest) {
  try {
    const { stytchUserId } = await getStytchUserIdFromRequest(request);
    
    if (!stytchUserId) {
      return NextResponse.json(
        { error: 'Stytch user ID not found' },
        { status: 400 }
      );
    }

    log('Authenticated user for TOTP removal:', stytchUserId);

    const sessionJwt = getJwtTokenFromRequest(request);
    const body = await request.json();
    const { policyContext } = body;

    // Check policies first (similar to WhatsApp removal)
    const shouldTriggerMFA = await policyEnforcer.checkPolicies({
      mfaType: 'totp',
      sessionJwt,
    }, policyContext?.contextType || 'personalWalletMFAUpdate');

    if (shouldTriggerMFA) {
      return NextResponse.json({
        requiresMfa: shouldTriggerMFA,
      });
    }

    // Get user's TOTP methods and delete them
    const stytchUser = await stytchClient.users.get({ user_id: stytchUserId });
    if (stytchUser.totps && stytchUser.totps.length > 0) {
      // Delete all TOTP methods
      for (const totp of stytchUser.totps) {
        await stytchClient.users.deleteTOTP({ totp_id: totp.totp_id });
        log('Successfully deleted totp_id:', totp.totp_id);
      }
    }

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('Error in DELETE /api/mfa/totp/remove:', error);
    log('Error removing TOTP:', error);
    return NextResponse.json({ error: 'Failed to remove TOTP' }, { status: 500 });
  }
}