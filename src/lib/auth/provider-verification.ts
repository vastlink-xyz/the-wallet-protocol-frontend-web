import { stytchClient } from '@/app/api/stytch/client';
import { AuthProviderType } from '@/lib/lit/custom-auth';
import { findUserByProviderEmail } from '@/app/api/user/storage';

/**
 * Verify Stytch email authentication
 */
export async function verifyStytchAuth(sessionJwt: string) {
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
export async function verifyGoogleAuth(googleCredential: string) {
  try {
    // Verify Google ID token
    const response = await fetch(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${googleCredential}`
    );

    if (!response.ok) {
      return { success: false, error: 'Invalid Google credential' };
    }

    const tokenInfo = await response.json();

    // Verify email is verified
    if (!tokenInfo.email_verified) {
      return { success: false, error: 'Google email not verified' };
    }

    if (!tokenInfo.email) {
      return { success: false, error: 'No email found in Google token' };
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
export async function verifyPasskeyAuth(passkeyData: string) {
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
 * Verify authentication for any provider type and get user from database
 */
export async function verifyProviderAuth(providerType: AuthProviderType, accessToken: string) {
  let verificationResult;
  
  switch (providerType) {
    case AuthProviderType.EMAIL_OTP:
      verificationResult = await verifyStytchAuth(accessToken);
      break;
    
    case AuthProviderType.GOOGLE:
      verificationResult = await verifyGoogleAuth(accessToken);
      break;
    
    case AuthProviderType.PASSKEY:
      verificationResult = await verifyPasskeyAuth(accessToken);
      break;
    
    default:
      return {
        success: false,
        error: `Unsupported provider type: ${providerType}`
      };
  }

  if (!verificationResult.success) {
    return verificationResult;
  }

  // Step 2: Look up user from database using the extracted email
  const extractedEmail = (verificationResult as any).userEmail;
  const user = await findUserByProviderEmail(providerType, extractedEmail);
  
  if (!user) {
    return {
      success: false,
      error: 'User not found in database',
      userNotFound: true,
    };
  }

  return {
    success: true,
    authMethodId: user.authMethodId,
    metadata: (verificationResult as any).metadata
  };
}