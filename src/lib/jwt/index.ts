import { jwtDecode } from 'jwt-decode';
import { log } from '../utils';
import { VastbaseAuthMethod, getVastbaseAuthMethodType, AuthProviderType } from '../lit/custom-auth';

/**
 * Extract email address from Google JWT token
 * @param token Google JWT token
 * @returns Email address, or null if parsing fails
 */
export function getEmailFromGoogleToken(token: string): string | null {
  try {
    // Decode JWT token
    const decoded = jwtDecode<{ email?: string }>(token);
    
    // Return email address
    return decoded.email || null;
  } catch (error) {
    console.error('Failed to decode JWT token:', error);
    return null;
  }
}

/**
 * Verify if a Firebase ID token is still valid
 * @param token Firebase ID token to verify
 * @returns Promise resolving to true if token is valid, false otherwise
 */
async function isGoogleTokenValid(token: string): Promise<boolean> {
  if (!token) return false;
  
  try {
    // Firebase ID Token is a JWT, decode it to check expiration
    const decoded = jwtDecode<{ exp?: number; aud?: string }>(token);
    
    // Check if token is expired
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp && decoded.exp < now) {
      console.log('Firebase ID Token expired');
      return false;
    }
    
    // Check if token is from the correct Firebase project
    if (decoded.aud !== process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      console.log('Firebase ID Token from wrong project');
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error validating Firebase ID token:', error);
    return false;
  }
}

/**
 * Verify if a stytch session token is still valid by checking session expiration
 * @param token Stytch JWT token to verify
 * @returns Promise resolving to true if token is valid, false otherwise
 */
async function isStytchTokenValid(token: string): Promise<boolean> {
  if (!token) return false;
  
  try {
    // Decode JWT token
    const decoded = jwtDecode<{ 
      'https://stytch.com/session'?: {
        expires_at?: string;
      }
    }>(token);
    
    // Check if session and expires_at field exists
    const session = decoded['https://stytch.com/session'];
    if (!session || !session.expires_at) {
      console.error('Stytch JWT token missing session expires_at field');
      return false;
    }
    
    // Parse expires_at ISO string and compare with current time
    const expiresAt = new Date(session.expires_at);
    const currentTime = new Date();
    const isValid = expiresAt > currentTime;
    
    log('Stytch session token validation:', { 
      expires_at: session.expires_at, 
      currentTime: currentTime.toISOString(), 
      isValid 
    });
    return isValid;
  } catch (error) {
    console.error('Failed to decode Stytch JWT token:', error);
    return false;
  }
}

/**
 * Unified function to verify if a token is valid based on provider type
 * @param providerType The authentication provider type
 * @param token The access token to validate
 * @returns Promise resolving to true if token is valid, false otherwise
 */
export async function isTokenValid(providerType: AuthProviderType, token: string): Promise<boolean> {
  if (!token) return false;

  // Use providerType to determine validation method
  switch (providerType) {
    case AuthProviderType.GOOGLE:
      return isGoogleTokenValid(token);
    
    case AuthProviderType.EMAIL_OTP:
      return isStytchTokenValid(token);
    
    case AuthProviderType.PASSKEY:
      // kkktodo
      return !!token;
    
    default:
      console.error(`Unsupported provider type: ${providerType}`);
      return false;
  }
}

/**
 * Legacy function for backward compatibility
 * @deprecated Use isTokenValid(providerType, token) instead
 */
export async function isTokenValidLegacy(authMethod: VastbaseAuthMethod): Promise<boolean> {
  if (!authMethod) return false;

  // This function is deprecated, but kept for compatibility during migration
  // It will need the accessToken from the authMethod which should be removed
  console.warn('isTokenValidLegacy is deprecated, use isTokenValid(providerType, token) instead');
  
  // For now, return false as authMethod.accessToken should no longer exist
  return false;
}

export function getUserIdFromToken(token: string): string | null {
  try {
    const decoded = jwtDecode<{ sub?: string }>(token);
    return decoded.sub || null;
  } catch (error) {
    console.error('Failed to decode JWT token:', error);
    return null;
  }
}

export async function getNewStytchAccessToken(token: string): Promise<string> {
  if (!token) return '';
  
  const authMethodType = getVastbaseAuthMethodType();
  
  const verifyTokenRes = await fetch(`/api/verify-token`, {
    method: 'POST',
    body: JSON.stringify({
      authMethodType: authMethodType,
      accessToken: token,
    }),
  })
  const data = await verifyTokenRes.json()

  log('refresh stytch access token', data)
  if (data.valid && data.sessionJwt) {
    return data.sessionJwt
  }

  return ''
}