/**
 * Security Layer Types and Interfaces
 */

export type SecurityLayerType = 'PIN' | 'WHATSAPP_OTP' | 'TOTP' | 'EMAIL_OTP';

// Base security layer interface
interface BaseSecurityLayer {
  id: string;
  isEnabled: boolean;
  isFallback: boolean;  // Mark if this layer is a fallback security layer
}

// Configuration interfaces for different types
interface PinConfig {
  pinData: {
    encryptedPinHash: string;
    dataToEncryptHash: string;
    accessControlConditions: any[];
  };
}

interface WhatsAppOTPConfig {
  stytchMethodId: string;  // Stytch method ID for WhatsApp OTP
  phoneNumber: string;     // The verified phone number
  phoneId: string;         // Stytch phone_id for reference
}

interface TOTPConfig {
  stytchMethodId: string;
}

interface EmailOTPConfig {
  // Email address comes from user's account, no additional config needed
  _placeholder?: never;
}

// Generic interface to eliminate repetition
interface TypedSecurityLayer<T extends SecurityLayerType, C> extends BaseSecurityLayer {
  type: T;
  config: C;
}

// Specific security layer types
type PinSecurityLayer = TypedSecurityLayer<'PIN', PinConfig>;
type WhatsAppOTPSecurityLayer = TypedSecurityLayer<'WHATSAPP_OTP', WhatsAppOTPConfig>;
type TOTPSecurityLayer = TypedSecurityLayer<'TOTP', TOTPConfig>;
type EmailOTPSecurityLayer = TypedSecurityLayer<'EMAIL_OTP', EmailOTPConfig>;

// Union type
export type SecurityLayer = 
  | PinSecurityLayer 
  | WhatsAppOTPSecurityLayer 
  | TOTPSecurityLayer 
  | EmailOTPSecurityLayer;

export interface UserSecurityLayers {
  authMethodId: string;
  layers: SecurityLayer[];
}


export interface SecurityProof {
  [layerType: string]: {
    pin?: string;
    otp?: string;
    methodId?: string;
    code?: string;
    [key: string]: any;
  };
}

export interface SecurityVerificationResult {
  isValid: boolean;
  error?: string;
}