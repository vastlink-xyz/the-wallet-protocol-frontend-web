import { NextRequest, NextResponse } from 'next/server';
import { updateUserWalletSettings } from '../storage';
import { authenticateMultiProviderSession } from '@/lib/auth/multi-provider-auth';
import { log } from '@/lib/utils';
import { policyEnforcer } from '@/services/policies/PolicyEnforcer';
import { stytchClient } from '@/app/api/stytch/client';
import { SUPPORTED_TOKENS_INFO, TokenType, SUPPORTED_TOKEN_SYMBOLS } from '@/lib/web3/token';
import { StytchError } from 'stytch';

// PATCH /api/user/settings - Update user wallet settings
export async function PATCH(request: NextRequest) {
  try {
    // Authenticate the user session using multi-provider authentication
    const authResult = await authenticateMultiProviderSession(request);
    const { user, token } = authResult;
    log('Authenticated session in user settings:', { user: user?.authMethodId, providerType: authResult.providerType });

    // TODO by JJ:
    // Should get current settings from the data source instead of the request, and use it for OTP and MFA.
    // const currentSettings = await getPersonalWalletSettings(user);

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

    // Validate limits for all supported tokens
    for (const symbol of SUPPORTED_TOKEN_SYMBOLS) {
      const tokenInfo = SUPPORTED_TOKENS_INFO[symbol];
      
      // Check if the token limit exists
      if (walletSettings.dailyWithdrawLimits[tokenInfo.symbol] === undefined) {
        return NextResponse.json(
          { error: `${tokenInfo.symbol} limit is required in dailyWithdrawLimits` },
          { status: 400 }
        );
      }

      // Validate token limit is a valid string that can be parsed to a number
      if (typeof walletSettings.dailyWithdrawLimits[tokenInfo.symbol] !== 'string' || 
          isNaN(parseFloat(walletSettings.dailyWithdrawLimits[tokenInfo.symbol]))) {
        return NextResponse.json(
          { error: `${tokenInfo.symbol} limit must be a valid numeric string` },
          { status: 400 }
        );
      }
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
        sessionJwt: token,
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
    if (error instanceof StytchError && error.error_message) {
      return NextResponse.json(
        { error: error.error_message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'An error occurred while updating user settings' },
      { status: 500 }
    );
  }
} 