import { stytchClient } from '../../stytch/client';
import { SecurityLayerType } from '@/types/security';

// Helper function to verify if Stytch data exists for the given layer type
export async function verifyStytchDataExists(userId: string, layerType: SecurityLayerType): Promise<boolean> {
  try {
    const stytchResponse = await stytchClient.users.get({ user_id: userId });
    
    switch (layerType) {
      case 'TOTP':
        return (stytchResponse.totps && stytchResponse.totps.length > 0) || false;
      case 'WHATSAPP_OTP':
        return (stytchResponse.phone_numbers?.some(p => p.verified) || false);
      default:
        return true; // PIN and EMAIL_OTP don't need Stytch verification
    }
  } catch (error) {
    console.error(`Error verifying Stytch data for ${layerType}:`, error);
    return false;
  }
}