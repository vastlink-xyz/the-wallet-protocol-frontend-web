import { NextRequest, NextResponse } from 'next/server';
import { getUser, User } from '../../user/storage';
import { SecurityLayer } from '@/types/security';
import { stytchClient } from '../../stytch/client';
import { log } from '@/lib/utils';
import { SecurityLayerService } from '@/services/securityLayerService';
import { verifyProviderAuth } from '@/lib/auth/provider-verification';
import { AuthProviderType, generateUnifiedAuthMethodId } from '@/lib/lit/custom-auth';
import { authenticateMultiProviderSession } from '@/lib/auth/multi-provider-auth';

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


// Priority-based security verification handlers
interface PriorityHandler {
  priority: number;
  category: string;
  checkRequired: (layers: SecurityLayer[], requestData: VerifyForLitActionRequest, user: User, sessionJwt: string) => Promise<{ isRequired: boolean; requirementData?: any }>;
  verify: (layers: SecurityLayer[], requestData: VerifyForLitActionRequest, user: User) => Promise<{ success: boolean; error?: string; data?: any }>;
  formatResponse: (layers: SecurityLayer[], requirementData?: any) => any;
}

// Priority 10: PIN verification handler
const pinHandler: PriorityHandler = {
  priority: 10,
  category: 'pin',
  checkRequired: async (layers: SecurityLayer[], requestData: VerifyForLitActionRequest, _user: User, _sessionJwt: string) => {
    const pinLayer = layers.find(layer => layer.category === 'pin' && layer.isEnabled);
    const isRequired = !!pinLayer && !requestData.pinCode;
    return {
      isRequired,
      requirementData: isRequired && pinLayer?.type === 'PIN' ? pinLayer.config.pinData : undefined
    };
  },
  verify: async (layers: SecurityLayer[], _requestData: VerifyForLitActionRequest, _user: User) => {
    const pinLayer = layers.find(layer => layer.category === 'pin' && layer.isEnabled);
    if (!pinLayer || pinLayer.type !== 'PIN' || !pinLayer.config.pinData) {
      return { success: false, error: 'PIN data not found in security layer' };
    }
    return { success: true, data: pinLayer.config.pinData };
  },
  formatResponse: (_layers: SecurityLayer[], requirementData?: any) => {
    return {
      success: false,
      requiresPIN: true,
      pinData: requirementData,
      error: 'PIN is required but not provided'
    };
  }
};

// Priority 20: MFA/OTP verification handler
const mfaHandler: PriorityHandler = {
  priority: 20,
  category: 'otp',
  checkRequired: async (layers: SecurityLayer[], requestData: VerifyForLitActionRequest, user: User, sessionJwt: string) => {
    // Check MFA policy first
    const policyResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/mfa/check-policy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionJwt}`,
      },
      body: JSON.stringify({
        authMethodId: user.authMethodId,
        transactionAmount: requestData.transactionAmount,
        tokenType: requestData.tokenType,
        contextType: requestData.contextType,
        walletId: requestData.walletId,
      })
    });

    if (!policyResponse.ok) {
      throw new Error('Policy check failed');
    }

    const policyData = await policyResponse.json();
    const isRequired = policyData.requiresMfa && (!requestData.mfaCode || !requestData.mfaType);
    
    if (isRequired) {
      // Get available OTP layers - data structure guarantees at least one exists if MFA is required
      const otpLayers = layers.filter(layer => layer.category === 'otp' && layer.isEnabled);
      
      return { isRequired, requirementData: otpLayers };
    }
    
    return { isRequired: false };
  },
  verify: async (_layers: SecurityLayer[], requestData: VerifyForLitActionRequest, user: User) => {
    const { mfaType, mfaCode, mfaMethodId } = requestData;
    
    if (!mfaCode || !mfaType) {
      return { success: true }; // MFA not required or not provided
    }

    // Get Stytch user_id from EMAIL_OTP provider
    let stytchUserId = null;
    if (user?.authProviders) {
      const emailOtpProvider = user.authProviders.find(
        provider => provider.providerType === AuthProviderType.EMAIL_OTP && provider.isPrimary
      );
      stytchUserId = emailOtpProvider?.sub;
    }

    if (!stytchUserId) {
      return { success: false, error: 'No EMAIL_OTP provider found for MFA verification' };
    }

    console.log('🔍 Using Stytch user_id for MFA:', stytchUserId);

    try {
      let verificationResult = false;

      switch (mfaType) {
        case 'WHATSAPP_OTP':
          const whatsappResponse = await stytchClient.otps.authenticate({
            method_id: mfaMethodId!,
            code: mfaCode,
          });
          verificationResult = !!whatsappResponse.user_id && whatsappResponse.user_id === stytchUserId;
          break;

        case 'TOTP':
          const totpResponse = await stytchClient.totps.authenticate({
            user_id: stytchUserId,
            totp_code: mfaCode,
          });
          verificationResult = !!totpResponse.user_id;
          break;

        case 'EMAIL_OTP':
          const emailResponse = await stytchClient.otps.authenticate({
            method_id: mfaMethodId!,
            code: mfaCode,
          });
          verificationResult = !!emailResponse.user_id && emailResponse.user_id === stytchUserId;
          break;

        default:
          return { success: false, error: `Unsupported MFA type: ${mfaType}` };
      }

      return verificationResult 
        ? { success: true }
        : { success: false, error: `Invalid ${mfaType} code or verification failed` };

    } catch (error) {
      console.error(`${mfaType} verification failed:`, error);
      return { success: false, error: `${mfaType} verification failed` };
    }
  },
  formatResponse: (_layers: SecurityLayer[], requirementData?: any) => {
    const availableMFAOptions = requirementData?.map((layer: SecurityLayer) => {
      const typeLabels = {
        'WHATSAPP_OTP': 'WhatsApp OTP',
        'TOTP': 'Authenticator App (TOTP)',
        'EMAIL_OTP': 'Email OTP'
      };
      
      return {
        type: layer.type,
        label: typeLabels[layer.type as keyof typeof typeLabels] || layer.type,
        config: layer.config
      };
    }).filter(Boolean) || [];

    return {
      success: false,
      requiresMFA: true,
      availableMFAOptions,
      error: 'MFA verification required'
    };
  }
};

// Registry of all priority handlers (easily extensible for priorities 30, 40, etc.)
const PRIORITY_HANDLERS: PriorityHandler[] = [
  pinHandler,    // Priority 10
  mfaHandler     // Priority 20
  // Future priorities can be added here:
  // otherHandler,  // Priority 30
];

// POST /api/security/verify-for-lit-action - Priority-based security verification
export async function POST(request: NextRequest) {
  try {
    const authResult = await authenticateMultiProviderSession(request);
    const { user, token } = authResult;
    const body: VerifyForLitActionRequest = await request.json();
    
    log('Priority-based verification request:', body);

    // 1. Get user and security layers
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }
    const securityLayers = user.walletSettings?.securityLayers || [];
    const sortedLayers = SecurityLayerService.sortLayersByPriority(securityLayers);
    
    // 2. Group layers by priority
    const layersByPriority = new Map<number, SecurityLayer[]>();
    sortedLayers.forEach(layer => {
      if (!layersByPriority.has(layer.priority)) {
        layersByPriority.set(layer.priority, []);
      }
      layersByPriority.get(layer.priority)!.push(layer);
    });

    // 3. Process each priority level in order
    const sortedPriorities = Array.from(layersByPriority.keys()).sort((a, b) => a - b);
    const responseData: any = {};

    for (const priority of sortedPriorities) {
      const handler = PRIORITY_HANDLERS.find(h => h.priority === priority);
      if (!handler) {
        console.log(`No handler found for priority ${priority}, skipping`);
        continue;
      }

      const layersForPriority = layersByPriority.get(priority) || [];
      
      // Check if this priority level requires verification
      try {
        const requirementCheck = await handler.checkRequired(layersForPriority, body, user, token);
        
        if (requirementCheck.isRequired) {
          // Return requirement response with accumulated data
          const response = handler.formatResponse(layersForPriority, requirementCheck.requirementData);
          return NextResponse.json({
            ...response,
            ...responseData // Include any data from higher priority levels (e.g., PIN data)
          });
        }

        // Verify if credentials provided for this priority level
        const verificationResult = await handler.verify(layersForPriority, body, user);
        
        if (!verificationResult.success) {
          return NextResponse.json({
            success: false,
            error: verificationResult.error
          }, { status: 400 });
        }

        // Accumulate response data for lower priority levels
        if (verificationResult.data) {
          if (handler.category === 'pin') {
            responseData.pinData = verificationResult.data;
          }
          // Future categories can add their data here
        }

      } catch (error) {
        console.error(`Error processing priority ${priority}:`, error);
        return NextResponse.json({
          success: false,
          error: `Security verification failed for priority ${priority}`
        }, { status: 500 });
      }
    }

    // 4. All verifications passed
    return NextResponse.json({
      success: true,
      ...responseData
    });

  } catch (error) {
    console.error('Error in priority-based security verification:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}