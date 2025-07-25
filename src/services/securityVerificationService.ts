// Service for handling security verification API calls
// This abstracts the common pattern of calling /api/security/verify-for-lit-action

interface SecurityVerificationParams {
  contextType: string;
  sessionJwt: string;
  transactionAmount?: string;
  tokenType?: string;
  walletId?: string;
  pinCode?: string;
  mfaType?: 'WHATSAPP_OTP' | 'TOTP' | 'EMAIL_OTP';
  mfaCode?: string;
  mfaMethodId?: string;
}

interface SecurityVerificationResult {
  success: boolean;
  requiresPIN?: boolean;
  requiresMFA?: boolean;
  availableMFAOptions?: any[];
  pinData?: any;
  error?: string;
}

export class SecurityVerificationService {
  /**
   * Call the security verification API with the provided parameters
   * Returns a result compatible with useSecurityVerification hook expectations
   */
  static async verifyForAction(params: SecurityVerificationParams): Promise<SecurityVerificationResult> {
    const {
      contextType,
      sessionJwt,
      transactionAmount = "0",
      tokenType = "ETH",
      walletId,
      pinCode,
      mfaType,
      mfaCode,
      mfaMethodId
    } = params;

    const verifyBody: any = {
      transactionAmount,
      tokenType,
      contextType,
    };

    // Add optional parameters
    if (walletId) verifyBody.walletId = walletId;
    if (pinCode) verifyBody.pinCode = pinCode;
    if (mfaCode && mfaType) {
      verifyBody.mfaCode = mfaCode;
      verifyBody.mfaType = mfaType;
      if (mfaMethodId) verifyBody.mfaMethodId = mfaMethodId;
    }

    try {
      const response = await fetch('/api/security/verify-for-lit-action', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionJwt}`
        },
        body: JSON.stringify(verifyBody)
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Security verification failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Security verification failed'
      };
    }
  }

  /**
   * Helper function to create a security-protected executeTransaction function
   * This can be used with useSecurityVerification hook
   */
  static createProtectedAction({
    contextType,
    sessionJwt,
    businessLogic,
    options
  }: {
    contextType: string;
    sessionJwt: string;
    businessLogic: () => Promise<any>;
    options?: {
      [key: string]: any;
    };
  }) {
    return async (params: any) => {
      const { pinCode, mfaType, mfaCode, mfaMethodId } = params;

      // Step 1: Verify security requirements
      const verificationResult = await SecurityVerificationService.verifyForAction({
        contextType,
        sessionJwt,
        transactionAmount: options?.transactionAmount,
        tokenType: options?.tokenType,
        walletId: options?.walletId,
        pinCode,
        mfaType,
        mfaCode,
        mfaMethodId,
      });

      if (!verificationResult.success) {
        // Return verification failure (PIN/MFA required)
        return verificationResult;
      }

      // Step 2: Execute business logic if verification passed
      try {
        const result = await businessLogic();
        return { success: true, ...result };
      } catch (error) {
        console.error('Business logic execution failed:', error);
        return {
          success: false,
          error: error instanceof Error ? error.message : 'Operation failed'
        };
      }
    };
  }
}