import { stytchClient } from '@/app/api/stytch/client';
import { AuthProviderType } from '@/lib/lit/custom-auth';

/**
 * Verify Stytch email authentication
 */
export async function verifyStytchAuth(sessionJwt: string, expectedEmail: string) {
  try {
    // Verify the Stytch session JWT
    const response = await stytchClient.sessions.authenticate({
      session_jwt: sessionJwt
    });

    if (!response.user) {
      return { success: false, error: 'Invalid Stytch session' };
    }

    // Get user email from Stytch
    const userEmail = response.user.emails?.[0]?.email;
    if (!userEmail) {
      return { success: false, error: 'No email found in Stytch user' };
    }

    // Verify email matches expected
    if (userEmail.toLowerCase() !== expectedEmail.toLowerCase()) {
      return { success: false, error: 'Email mismatch' };
    }

    return {
      success: true,
      userEmail,
      metadata: {
        stytchUserId: response.user.user_id,
        sessionId: response.session.session_id
      }
    };
  } catch (error: any) {
    console.error('Stytch verification error:', error);
    return { success: false, error: 'Stytch verification failed' };
  }
}

/**
 * Verify Google OAuth authentication
 */
export async function verifyGoogleAuth(googleCredential: string, expectedEmail: string) {
  try {
    // Verify Google ID token
    const response = await fetch(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${googleCredential}`
    );

    if (!response.ok) {
      return { success: false, error: 'Invalid Google credential' };
    }

    const tokenInfo = await response.json();

    // Verify email matches expected
    if (tokenInfo.email?.toLowerCase() !== expectedEmail.toLowerCase()) {
      return { success: false, error: 'Email mismatch' };
    }

    // Verify email is verified
    if (!tokenInfo.email_verified) {
      return { success: false, error: 'Google email not verified' };
    }

    return {
      success: true,
      userEmail: tokenInfo.email,
      metadata: {
        googleUserId: tokenInfo.sub,
        audience: tokenInfo.aud,
        issuer: tokenInfo.iss
      }
    };
  } catch (error: any) {
    console.error('Google verification error:', error);
    return { success: false, error: 'Google verification failed' };
  }
}

/**
 * Verify Passkey authentication
 * TODO: Implement passkey verification logic
 */
export async function verifyPasskeyAuth(passkeyData: string, expectedEmail: string) {
  try {
    // TODO: Implement WebAuthn verification
    // For now, return not implemented
    return { success: false, error: 'Passkey verification not yet implemented' };
  } catch (error: any) {
    console.error('Passkey verification error:', error);
    return { success: false, error: 'Passkey verification failed' };
  }
}

/**
 * Verify authentication for any provider type
 */
export async function verifyProviderAuth(providerType: AuthProviderType, accessToken: string, userEmail: string) {
  switch (providerType) {
    case AuthProviderType.EMAIL_OTP:
      return await verifyStytchAuth(accessToken, userEmail);
    
    case AuthProviderType.GOOGLE:
      return await verifyGoogleAuth(accessToken, userEmail);
    
    case AuthProviderType.PASSKEY:
      return await verifyPasskeyAuth(accessToken, userEmail);
    
    default:
      return {
        success: false,
        error: `Unsupported provider type: ${providerType}`
      };
  }
}