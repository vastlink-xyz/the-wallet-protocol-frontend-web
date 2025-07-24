import { AuthMethod } from "@lit-protocol/types";
import { getAuthIdByAuthMethod } from "@lit-protocol/lit-auth-client";
import { SecurityLayer, SecurityLayerType } from "@/types/security";
import crypto from 'crypto';

export interface MFAOption {
  type: SecurityLayerType;
  label: string;
  enabled: boolean;
  config?: any;
}

export class SecurityLayerService {
  
  /**
   * Get user's security layers from API
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
   * Get required verification layers based on priority system
   */
  static getRequiredVerificationLayers(securityLayers: SecurityLayer[]): SecurityLayer[] {
    // Sort by priority (lower number = higher priority)
    const sortedLayers = securityLayers
      .filter(layer => layer.isEnabled)
      .sort((a, b) => a.priority - b.priority);
    
    const required: SecurityLayer[] = [];
    const prioritiesSeen = new Set<number>();
    
    for (const layer of sortedLayers) {
      if (!prioritiesSeen.has(layer.priority)) {
        // For each priority level, include all enabled layers of that priority
        const samePriorityLayers = sortedLayers.filter(l => 
          l.priority === layer.priority && l.isEnabled
        );
        
        if (layer.category === 'pin') {
          // PIN layers are always required if enabled
          required.push(...samePriorityLayers);
        } else if (layer.category === 'otp') {
          // For OTP, user can choose one from the same priority level
          // Return all options for the frontend to present choice
          required.push(...samePriorityLayers);
        }
        
        prioritiesSeen.add(layer.priority);
      }
    }
    
    return required;
  }
  
  /**
   * Check if PIN verification is required (simple check)
   */
  static async requiresPINVerification(authMethod: AuthMethod): Promise<boolean> {
    const securityLayers = await this.getUserSecurityLayers(authMethod);
    const pinLayer = securityLayers.find(layer => layer.type === 'PIN' && layer.category === 'pin');
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
  
  /**
   * Get category and priority for a given layer type
   */
  static getCategoryAndPriority(layerType: SecurityLayerType): { category: 'pin' | 'otp', priority: number } {
    if (layerType === 'PIN') {
      return { category: 'pin', priority: 10 };
    } else if (['WHATSAPP_OTP', 'TOTP', 'EMAIL_OTP'].includes(layerType)) {
      return { category: 'otp', priority: 20 };
    }
    throw new Error(`Unsupported layer type: ${layerType}`);
  }
  
  /**
   * Validate if layer type is supported
   */
  static validateLayerType(layerType: string): boolean {
    return ['PIN', 'WHATSAPP_OTP', 'TOTP', 'EMAIL_OTP'].includes(layerType);
  }
  
  /**
   * Sort security layers by priority (lower number = higher priority)
   */
  static sortLayersByPriority(layers: SecurityLayer[]): SecurityLayer[] {
    return [...layers].sort((a, b) => a.priority - b.priority);
  }
  
  /**
   * Find a layer by its type
   */
  static findLayerByType(layers: SecurityLayer[], layerType: SecurityLayerType): SecurityLayer | undefined {
    return layers.find(layer => layer.type === layerType);
  }
  
  /**
   * Create a new security layer with appropriate defaults
   */
  static createNewLayer(layerType: SecurityLayerType, config: any): SecurityLayer {
    const { category, priority } = this.getCategoryAndPriority(layerType);
    
    return {
      id: crypto.randomUUID(),
      type: layerType,
      category,
      priority,
      isEnabled: true,
      ...(layerType === 'EMAIL_OTP' ? { isFallback: true } : {}),
      config
    };
  }
}