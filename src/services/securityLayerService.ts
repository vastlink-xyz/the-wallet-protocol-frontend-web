import { AuthMethod } from "@lit-protocol/types";
import { getAuthIdByAuthMethod } from "@lit-protocol/lit-auth-client";
import { SecurityLayer, SecurityLayerType } from "@/types/security";

export interface MFAOption {
  type: SecurityLayerType;
  label: string;
  enabled: boolean;
  config?: any;
}

export class SecurityLayerService {
  
  /**
   * Get user's security layers from API (simple wrapper)
   */
  static async getUserSecurityLayers(authMethod: AuthMethod): Promise<SecurityLayer[]> {
    const authMethodId = await getAuthIdByAuthMethod(authMethod);
    
    if (!authMethodId) {
      throw new Error('Failed to get authMethodId from authMethod');
    }
    
    const response = await fetch(`/api/security/layers?authMethodId=${authMethodId}`, {
      headers: {
        'Authorization': `Bearer ${authMethod.accessToken}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch security layers');
    }
    
    const data = await response.json();
    return data.securityLayers || [];
  }
  
  /**
   * Check if PIN verification is required (simple check)
   */
  static async requiresPINVerification(authMethod: AuthMethod): Promise<boolean> {
    const securityLayers = await this.getUserSecurityLayers(authMethod);
    const pinLayer = securityLayers.find(layer => layer.type === 'PIN');
    return pinLayer?.isEnabled || false;
  }
  
  /**
   * Send OTP for the specified MFA method (frontend utility)
   */
  static async sendMFACode(
    authMethod: AuthMethod, 
    mfaType: SecurityLayerType, 
    config?: any
  ): Promise<string | null> {
    switch (mfaType) {
      case 'WHATSAPP_OTP':
        if (!config?.phoneNumber) {
          throw new Error('Phone number is required for WhatsApp OTP');
        }
        return await this.sendWhatsAppOTP(authMethod, config.phoneNumber);
        
      case 'EMAIL_OTP':
        return await this.sendEmailOTP(authMethod);
        
      case 'TOTP':
        // TOTP doesn't require sending a code, user uses their authenticator app
        return null;
        
      default:
        throw new Error(`Unsupported MFA type: ${mfaType}`);
    }
  }
  
  // Private helper methods for sending OTP
  private static async sendWhatsAppOTP(authMethod: AuthMethod, phoneNumber: string): Promise<string> {
    const response = await fetch('/api/mfa/whatsapp/send-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authMethod.accessToken}`,
      },
      body: JSON.stringify({ phone_number: phoneNumber }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send WhatsApp OTP');
    }

    const data = await response.json();
    return data.method_id;
  }
  
  private static async sendEmailOTP(authMethod: AuthMethod): Promise<string> {
    const response = await fetch('/api/mfa/email/send-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authMethod.accessToken}`,
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send Email OTP');
    }

    const data = await response.json();
    return data.method_id;
  }
}