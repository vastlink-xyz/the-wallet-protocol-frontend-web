import { AUTH_METHOD_TYPE } from '@lit-protocol/constants';
import { AuthMethod } from '@lit-protocol/types';
import { jwtDecode } from 'jwt-decode';
import { log } from '../utils';

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
 * Verify if a stytch ID token is still valid
 * @param token Google ID token to verify
 * @returns Promise resolving to true if token is valid, false otherwise
 */
async function isStytchTokenValid(token: string): Promise<boolean> {
  if (!token) return false;
  
  const verifyTokenRes = await fetch(`/api/verify-token`, {
    method: 'POST',
    body: JSON.stringify({
      authMethodType: AUTH_METHOD_TYPE.StytchEmailFactorOtp,
      accessToken: token,
    }),
  })
  const data = await verifyTokenRes.json()
  log('is token valid', data)
  return data.valid
}

/**
 * Unified function to verify if a token is valid based on its type
 * @param type The authentication method type from AUTH_METHOD_TYPE
 * @param token The token to verify
 * @returns Promise resolving to true if token is valid, false otherwise
 */
export async function isTokenValid(authMethod: AuthMethod): Promise<boolean> {
  if (!authMethod) return false;

  if (authMethod.authMethodType === AUTH_METHOD_TYPE.GoogleJwt) {
    return isGoogleTokenValid(authMethod.accessToken);
  }

  if (authMethod.authMethodType === AUTH_METHOD_TYPE.StytchEmailFactorOtp) {
    return isStytchTokenValid(authMethod.accessToken);
  }

  console.error(`Unsupported authmethod type: ${authMethod.authMethodType}`);
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
  
  const verifyTokenRes = await fetch(`/api/verify-token`, {
    method: 'POST',
    body: JSON.stringify({
      authMethodType: AUTH_METHOD_TYPE.StytchEmailFactorOtp,
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