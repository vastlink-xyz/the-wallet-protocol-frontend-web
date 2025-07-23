import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '../../../stytch/client';
import { AuthenticatedSession, authenticateStytchSession, getJwtTokenFromRequest } from '../../../stytch/sessionAuth';
import { log } from '@/lib/utils';
import { policyEnforcer } from '@/services/policies/PolicyEnforcer';

// DELETE /api/mfa/totp/remove - Remove TOTP for user with policy checks
export async function DELETE(request: NextRequest) {
  try {
    const session: AuthenticatedSession = await authenticateStytchSession(request);
    log('Authenticated session in remove-totp:', session);

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
    const stytchUser = await stytchClient.users.get({ user_id: session.user_id });
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

    let errorMessage = 'Failed to remove TOTP';
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
    } else if (error.error_message) {
      errorMessage = error.error_message;
      statusCode = error.status_code || 500;
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}