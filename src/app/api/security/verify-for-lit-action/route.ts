import { NextRequest, NextResponse } from 'next/server';
import { getUserBySub } from '../../user/storage';
import { SecurityLayer } from '@/types/security';
import { authenticateStytchSession, getJwtTokenFromRequest } from '../../stytch/sessionAuth';
import { stytchClient } from '../../stytch/client';
import { log } from '@/lib/utils';

interface VerifyForLitActionRequest {
  transactionAmount: string;
  tokenType: string;
  contextType: string;
  walletId?: string; // Optional walletId for multisig operations
  pinCode?: string;
  mfaType?: 'WHATSAPP_OTP' | 'TOTP' | 'EMAIL_OTP';
  mfaCode?: string;
  mfaMethodId?: string;
}


// POST /api/security/verify-for-lit-action - Handle all security verification logic for lit action
export async function POST(request: NextRequest) {
  try {
    const session = await authenticateStytchSession(request);
    const sessionJwt = getJwtTokenFromRequest(request);
    const body: VerifyForLitActionRequest = await request.json();
    
    const {
      transactionAmount,
      tokenType,
      contextType,
      walletId,
      pinCode,
      mfaType,
      mfaCode,
      mfaMethodId
    } = body;
    log('body', body);

    // 1. Get user and security layers
    const user = await getUserBySub(session.user_id);
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    const securityLayers = user.walletSettings?.securityLayers || [];
    
    // 2. Check PIN requirements
    const pinLayer = securityLayers.find((layer: SecurityLayer) => layer.type === 'PIN');
    const isPinEnabled = pinLayer?.isEnabled || false;

    if (isPinEnabled && pinLayer) {
      if (!pinCode) {
        // PIN is required but not provided
        return NextResponse.json({
          success: false,
          requiresPIN: true,
          pinData: pinLayer.config?.pinData,
          error: 'PIN is required but not provided'
        });
      }
      
      // PIN is provided, return PIN data for lit action verification
      if (!pinLayer.config?.pinData) {
        return NextResponse.json({
          success: false,
          error: 'PIN data not found in security layer'
        });
      }
    }

    // 3. Check MFA policy if no MFA code provided yet
    if (!mfaCode || !mfaType) {
      try {
        console.log('Checking MFA policy for transaction...', {
          authMethodId: user.authMethodId,
          transactionAmount,
          tokenType,
          contextType
        });

        const policyResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/mfa/check-policy`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionJwt}`,
          },
          body: JSON.stringify({
            authMethodId: user.authMethodId,
            transactionAmount,
            tokenType,
            contextType,
            walletId, // Pass walletId for multisig policy checking
          })
        });

        console.log('Policy response status:', policyResponse.status);

        if (policyResponse.ok) {
          const policyData = await policyResponse.json();
          console.log('Policy data received:', policyData);
          
          if (policyData.requiresMfa) {
            // Get available MFA options from security layers
            // All enabled MFA methods are available for user selection
            const availableMFALayers = securityLayers.filter((layer: SecurityLayer) => 
              layer.type !== 'PIN' && layer.isEnabled
            );
            
            console.log('MFA Layer Selection:', {
              totalMFALayers: securityLayers.filter(l => l.type !== 'PIN').length,
              availableMethods: availableMFALayers.length,
              availableTypes: availableMFALayers.map(l => l.type)
            });

            const availableMFAOptions = availableMFALayers.map((layer: SecurityLayer) => {
              switch (layer.type) {
                case 'WHATSAPP_OTP':
                  return {
                    type: layer.type,
                    label: 'WhatsApp OTP',
                    config: layer.config
                  };
                case 'TOTP':
                  return {
                    type: layer.type,
                    label: 'Authenticator App (TOTP)',
                    config: layer.config
                  };
                case 'EMAIL_OTP':
                  return {
                    type: layer.type,
                    label: 'Email OTP',
                    config: layer.config
                  };
                default:
                  return null;
              }
            }).filter(option => option !== null);

            return NextResponse.json({
              success: false,
              requiresMFA: true,
              availableMFAOptions,
              // Also return PIN data if PIN was provided
              ...(isPinEnabled && pinCode && pinLayer ? { pinData: pinLayer.config?.pinData } : {}),
              error: 'MFA verification required'
            });
          } else {
            console.log('Policy check passed - MFA not required');
          }
        } else {
          const errorData = await policyResponse.json();
          console.error('Policy check failed with status:', policyResponse.status, errorData);
          // If policy check fails, we should treat it as requiring MFA for security
          return NextResponse.json({
            success: false,
            error: `Policy check failed: ${errorData.error || 'Unknown error'}`
          }, { status: 500 });
        }
      } catch (error) {
        console.error('Error checking MFA policy:', error);
        // If policy check fails, we should treat it as requiring MFA for security
        return NextResponse.json({
          success: false,
          error: 'Failed to check security policy - transaction denied for security reasons'
        }, { status: 500 });
      }
    }

    // 4. Verify MFA if provided
    if (mfaCode && mfaType) {
      let verificationResult = false;

      try {
        switch (mfaType) {
          case 'WHATSAPP_OTP':
            const whatsappResponse = await stytchClient.otps.authenticate({
              method_id: mfaMethodId!,
              code: mfaCode,
            });
            // Verify the OTP belongs to the current user
            verificationResult = !!whatsappResponse.user_id && whatsappResponse.user_id === session.user_id;
            break;

          case 'TOTP':
            const totpResponse = await stytchClient.totps.authenticate({
              user_id: session.user_id,
              totp_code: mfaCode,
            });
            verificationResult = !!totpResponse.user_id;
            break;

          case 'EMAIL_OTP':
            const emailResponse = await stytchClient.otps.authenticate({
              method_id: mfaMethodId!,
              code: mfaCode,
            });
            // Verify the OTP belongs to the current user
            verificationResult = !!emailResponse.user_id && emailResponse.user_id === session.user_id;
            break;

          default:
            return NextResponse.json({
              success: false,
              error: `Unsupported MFA type: ${mfaType}`
            }, { status: 400 });
        }
      } catch (error) {
        console.error(`${mfaType} verification failed:`, error);
        verificationResult = false;
      }

      if (!verificationResult) {
        return NextResponse.json({
          success: false,
          error: `Invalid ${mfaType} code or verification failed`
        }, { status: 400 });
      }
    }

    // 5. All verifications passed
    return NextResponse.json({
      success: true,
      // Return PIN data if PIN was enabled (for lit action to verify)
      ...(isPinEnabled && pinCode && pinLayer ? { pinData: pinLayer.config?.pinData } : {})
    });

  } catch (error) {
    console.error('Error in POST /api/security/verify-for-lit-action:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}