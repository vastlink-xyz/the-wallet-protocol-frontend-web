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