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
 * Verify Google OAuth authentication using Firebase ID Token
 * @param firebaseIdToken Firebase ID Token (not Google Access Token)
 * @returns Verification result with user information
 */
export async function verifyGoogleAuth(firebaseIdToken: string) {
  try {
    // Firebase ID Token is a JWT, we can decode it to get user info
    // But for security, we should verify it with Firebase Admin SDK
    // For now, let's decode the JWT to extract user info
    
    const parts = firebaseIdToken.split('.');
    if (parts.length !== 3) {
      return { success: false, error: 'Invalid Firebase ID Token format' };
    }
    
    // Decode the payload
    const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
    
    // Check if token is expired
    const now = Math.floor(Date.now() / 1000);
    if (payload.exp && payload.exp < now) {
      return { success: false, error: 'Firebase ID Token expired' };
    }
    
    // Check if token is from the correct Firebase project
    if (payload.aud !== process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      return { success: false, error: 'Invalid Firebase project' };
    }
    
    // Extract user email
    if (!payload.email) {
      return { success: false, error: 'No email found in Firebase ID Token' };
    }

    return {
      success: true,
      userEmail: payload.email,
      metadata: {
        googleUserId: payload.firebase?.identities?.['google.com']?.[0] || payload.sub, // Extract Google user ID
        name: payload.name,
        picture: payload.picture,
        givenName: payload.given_name,
        familyName: payload.family_name,
        locale: payload.locale,
        verifiedEmail: payload.email_verified || false
      }
    };
  } catch (error: any) {
    console.error('Firebase ID Token verification failed:', error);
    return { success: false, error: 'Firebase ID Token verification failed' };
  }
}

/**
 * Verify Passkey authentication using Stytch WebAuthn
 */
export async function verifyPasskeyAuth(sessionJwt: string) {
  try {
    // Verify the Stytch session JWT from WebAuthn authentication
    const response = await stytchClient.sessions.authenticate({
      session_jwt: sessionJwt
    });

    if (!response.user) {
      return { success: false, error: 'Invalid Stytch WebAuthn session' };
    }

    // Get user email from Stytch user object
    const userEmail = response.user.emails?.[0]?.email;
    if (!userEmail) {
      return { success: false, error: 'No email found in Stytch WebAuthn user' };
    }

    return {
      success: true,
      userEmail,
      metadata: {
        stytchUserId: response.user.user_id,
        sessionId: response.session.session_id,
        webauthnRegistrationId: response.user.webauthn_registrations?.[0]?.webauthn_registration_id
      }
    };
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