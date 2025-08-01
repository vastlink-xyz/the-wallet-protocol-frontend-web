import { NextRequest } from 'next/server';
import { AuthProviderType } from '@/lib/lit/custom-auth';
import { verifyProviderAuth } from '@/lib/auth/provider-verification';
import { getUser } from '@/app/api/user/storage';

/**
 * Detect token type based on JWT structure
 */
export function detectTokenType(token: string): 'stytch' | 'firebase' | 'unknown' {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return 'unknown';
    }
    
    const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
    
    // Firebase tokens have 'aud' field with Firebase project ID
    if (payload.aud && payload.firebase) {
      return 'firebase';
    }
    
    // Stytch tokens have 'stytch.com' in issuer or specific Stytch fields
    if (payload.iss && payload.iss.includes('stytch')) {
      return 'stytch';
    }
    
    // Additional detection based on token structure
    if (payload.session_id && payload.user_id) {
      return 'stytch';
    }
    
    if (payload.email && payload.firebase?.identities) {
      return 'firebase';
    }
    
    return 'unknown';
  } catch (error) {
    console.error('Token detection failed:', error);
    return 'unknown';
  }
}

export interface AuthenticatedUser {
  authMethodId: string;
  providerType: AuthProviderType;
  userEmail?: string;
  metadata?: any;
}

/**
 * Universal authentication function that auto-detects token type
 * Can be reused across different API routes
 */
export async function authenticateMultiProviderSession(request: NextRequest) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Missing or invalid Authorization header');
  }

  const token = authHeader.substring(7); // Remove 'Bearer ' prefix
  const tokenType = detectTokenType(token);
  
  console.log('🔍 Detected token type:', tokenType);
  
  try {
    let providerType: AuthProviderType;
    
    // Map token type to provider type
    if (tokenType === 'stytch') {
      providerType = AuthProviderType.EMAIL_OTP;
    } else if (tokenType === 'firebase') {
      providerType = AuthProviderType.GOOGLE;
    } else {
      throw new Error(`Unsupported token type: ${tokenType}`);
    }
    
    // Use unified verification for all providers
    const verificationResult = await verifyProviderAuth(providerType, token);
    
    console.log('🔍 Verification result:', {
      success: verificationResult.success,
      error: verificationResult.error,
      hasUserEmail: 'userEmail' in verificationResult,
      hasAuthMethodId: 'authMethodId' in verificationResult
    });
    
    if (verificationResult.success && 'authMethodId' in verificationResult && verificationResult.authMethodId) {
      // Use authMethodId directly from verification result
      const user = await getUser(verificationResult.authMethodId);
      return {
        user,
        providerType,
        token,
        session: null // No session object needed for unified approach
      };
    }
    
    throw new Error(`${providerType} token verification failed`);
  } catch (error) {
    console.error('Multi-provider authentication failed:', error);
    throw new Error('Session authentication failed');
  }
}

/**
 * Simplified authentication function that returns user info directly
 * Easier to use in API endpoints
 */
export async function authenticateUser(request: NextRequest): Promise<AuthenticatedUser> {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Missing or invalid Authorization header');
  }

  const token = authHeader.substring(7);
  const tokenType = detectTokenType(token);
  
  let providerType: AuthProviderType;
  
  if (tokenType === 'stytch') {
    providerType = AuthProviderType.EMAIL_OTP;
  } else if (tokenType === 'firebase') {
    providerType = AuthProviderType.GOOGLE;
  } else {
    throw new Error(`Unsupported token type: ${tokenType}`);
  }
  
  const verificationResult = await verifyProviderAuth(providerType, token);
  
  if (!verificationResult.success) {
    throw new Error(verificationResult.error || 'Authentication failed');
  }
  
  return {
    authMethodId: (verificationResult as any).authMethodId,
    providerType,
    userEmail: (verificationResult as any).userEmail,
    metadata: (verificationResult as any).metadata
  };
}

/**
 * Get Stytch user_id from user's auth providers
 * Used for MFA operations that require Stytch user_id
 */
export async function getStytchUserId(authMethodId: string): Promise<string | null> {
  try {
    const user = await getUser(authMethodId);
    if (!user || !user.authProviders) {
      return null;
    }

    // Find EMAIL_OTP provider which contains Stytch user_id in sub field
    const emailOtpProvider = user.authProviders.find(
      provider => provider.providerType === AuthProviderType.EMAIL_OTP
    );

    return emailOtpProvider?.sub || null;
  } catch (error) {
    console.error('Error getting Stytch user_id:', error);
    return null;
  }
}

/**
 * Get Stytch user_id from authenticated user request
 * Convenience function that combines authentication and Stytch user_id lookup
 */
export async function getStytchUserIdFromRequest(request: NextRequest): Promise<{
  authMethodId: string;
  stytchUserId: string | null;
  providerType: AuthProviderType;
}> {
  const authenticatedUser = await authenticateUser(request);
  const stytchUserId = await getStytchUserId(authenticatedUser.authMethodId);
  
  return {
    authMethodId: authenticatedUser.authMethodId,
    stytchUserId,
    providerType: authenticatedUser.providerType
  };
} 