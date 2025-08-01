import { stytchClient } from '../../stytch/client';
import { SecurityLayerType } from '@/types/security';
import { getUser } from '../../user/storage';
import { AuthProviderType } from '@/lib/lit/custom-auth';

// Helper function to verify if Stytch data exists for the given layer type
export async function verifyStytchDataExists(authMethodId: string, layerType: SecurityLayerType): Promise<boolean> {
  try {
    // Get user and find EMAIL_OTP provider's sub (Stytch user_id)
    const user = await getUser(authMethodId);
    if (!user) {
      console.error('User not found for authMethodId:', authMethodId);
      return false;
    }

    const emailProvider = user.authProviders?.find(p => p.providerType === AuthProviderType.EMAIL_OTP);
    if (!emailProvider?.sub) {
      console.error('EMAIL_OTP provider not found for user:', authMethodId);
      return false;
    }

    const stytchResponse = await stytchClient.users.get({ user_id: emailProvider.sub });
    
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