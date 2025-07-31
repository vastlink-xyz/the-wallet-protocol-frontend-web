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
 * Verify if a Google ID token is still valid
 * @param token Google ID token to verify
 * @returns Promise resolving to true if token is valid, false otherwise
 */
async function isGoogleTokenValid(token: string): Promise<boolean> {
  if (!token) return false;
  
  try {
    const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
    
    // If response is OK (status 200), token is valid
    return response.ok;
  } catch (error) {
    console.error('Error validating Google token:', error);
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
 * Unified function to verify if a token is valid based on its provider type
 * @param authMethod The VastbaseAuthMethod object containing token and provider type info
 * @returns Promise resolving to true if token is valid, false otherwise
 */
export async function isTokenValid(authMethod: VastbaseAuthMethod): Promise<boolean> {
  if (!authMethod) return false;

  // Use providerType from authMethod to determine validation method
  switch (authMethod.providerType) {
    case AuthProviderType.GOOGLE:
      return isGoogleTokenValid(authMethod.accessToken);
    
    case AuthProviderType.EMAIL_OTP:
      return isStytchTokenValid(authMethod.accessToken);
    
    case AuthProviderType.PASSKEY:
      // kkktodo
      return !!authMethod.accessToken;
    
    default:
      console.error(`Unsupported provider type: ${authMethod.providerType}`);
      return false;
  }
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