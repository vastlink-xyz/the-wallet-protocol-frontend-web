import { NextRequest, NextResponse } from 'next/server';
import { updateUserWalletSettings } from '../storage';
import { AuthenticatedSession, authenticateStytchSession, getJwtTokenFromRequest } from '@/app/api/stytch/sessionAuth';
import { log } from '@/lib/utils';
import { policyEnforcer } from '@/services/policies/PolicyEnforcer';
import { stytchClient } from '@/app/api/stytch/client';

// PATCH /api/user/settings - Update user wallet settings
export async function PATCH(request: NextRequest) {
  try {
    // Authenticate the user session first
    const session: AuthenticatedSession = await authenticateStytchSession(request);
    log('Authenticated session in user settings:', session);

    const sessionJwt = getJwtTokenFromRequest(request);

    const body = await request.json();
    const { authMethodId, walletSettings, otp, phoneId } = body;

    if (!authMethodId) {
      return NextResponse.json(
        { error: 'Missing authMethodId in request body' },
        { status: 400 }
      );
    }

    if (!walletSettings || !walletSettings.dailyWithdrawLimits) {
      return NextResponse.json(
        { error: 'Missing or invalid walletSettings in request body' },
        { status: 400 }
      );
    }

    // Validate ETH limit exists
    if (walletSettings.dailyWithdrawLimits.ETH === undefined) {
      return NextResponse.json(
        { error: 'ETH limit is required in dailyWithdrawLimits' },
        { status: 400 }
      );
    }

    // Validate ETH limit is a valid string that can be parsed to a number
    if (typeof walletSettings.dailyWithdrawLimits.ETH !== 'string' || 
        isNaN(parseFloat(walletSettings.dailyWithdrawLimits.ETH))) {
      return NextResponse.json(
        { error: 'ETH limit must be a valid numeric string' },
        { status: 400 }
      );
    }

    // Check if we have an OTP and need to authenticate it
    if (otp) {
      // Validate OTP
      const authResponse = await stytchClient.otps.authenticate({
        method_id: phoneId,
        code: otp,
      });
      log('Stytch OTP authenticate response:', authResponse);
    } else {
      // Check if MFA is required for this operation
      const shouldTriggerMFA = await policyEnforcer.checkPolicies({
        updateSettings: walletSettings,
        sessionJwt,
      }, 'personalWalletSettingsUpdate');

      if (shouldTriggerMFA) {
        return NextResponse.json({
          requiresMfa: shouldTriggerMFA,
        });
      }
    }

    // Update user wallet settings
    const updatedUser = await updateUserWalletSettings(
      authMethodId,
      walletSettings
    );

    if (!updatedUser) {
      return NextResponse.json(
        { error: 'Failed to update user wallet settings' },
        { status: 500 }
      );
    }

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error in PATCH /api/user/settings:', error);
    return NextResponse.json(
      { error: 'An error occurred while updating user wallet settings' },
      { status: 500 }
    );
  }
} 