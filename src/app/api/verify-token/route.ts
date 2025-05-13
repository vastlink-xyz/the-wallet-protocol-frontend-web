import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '@/app/api/stytch/client';
import { AUTH_METHOD_TYPE } from '@lit-protocol/constants';

/**
 * API Route for verifying authentication tokens from different providers
 * @param req The request object
 * @returns A response indicating if the token is valid
 */
export async function POST(req: NextRequest) {
  try {
    const { authMethodType, accessToken } = await req.json();

    if (!authMethodType || !accessToken) {
      return NextResponse.json(
        { error: 'authMethodType and accessToken are required' },
        { status: 400 }
      );
    }

    const verificationResult = await verifyToken(authMethodType, accessToken);

    if (!verificationResult.valid) {
      return NextResponse.json(
        { valid: false, error: verificationResult.error || 'Invalid token' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      valid: true,
      user: verificationResult.user
    });
  } catch (error: any) {
    console.error('Error verifying token:', error);
    return NextResponse.json(
      { 
        valid: false,
        error: error.message || 'Failed to verify token' 
      },
      { status: 500 }
    );
  }
} 

// Google client ID
const GOOGLE_CLIENT_ID = '490433686717-d2j3b3ocpu1qdaqql38c5ge841fu75p7.apps.googleusercontent.com';

interface VerificationResult {
  valid: boolean;
  user?: {
    id: string;
    email?: string;
    name?: string;
    [key: string]: any;
  };
  error?: string;
}

/**
 * Verify a Google JWT token
 * @param token The JWT token to verify
 * @returns The verified token information or null if invalid
 */
async function verifyGoogleToken(token: string): Promise<VerificationResult | null> {
  try {
    const response = await fetch(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`
    );

    if (!response.ok) {
      console.error("Failed to verify token with Google");
      return null;
    }

    const tokenInfo = await response.json();

    // Verify audience matches our client ID
    if (tokenInfo.aud !== GOOGLE_CLIENT_ID) {
      console.error("Invalid audience:", tokenInfo.aud);
      return null;
    }

    return {
      valid: true,
      user: {
        id: tokenInfo.sub,
        email: tokenInfo.email,
        name: tokenInfo.name
      }
    };
  } catch (error) {
    console.error("Error verifying Google token:", error);
    return null;
  }
}

/**
 * Verify a Stytch JWT token
 * @param token The JWT token to verify
 * @returns The verified token information or null if invalid
 */
async function verifyStytchToken(token: string): Promise<VerificationResult | null> {
  try {
    const response = await stytchClient.sessions.authenticateJwt({
      session_jwt: token
    });
    
    return {
      valid: true,
      user: {
        id: response.session.user_id,
      }
    };
  } catch (error) {
    console.error("Error verifying Stytch token:", error);
    return null;
  }
}

/**
 * Unified function to verify tokens from different auth providers
 * @param authMethodType The type of auth method
 * @param accessToken The token to verify
 * @returns A verification result object
 */
async function verifyToken(authMethodType: number, accessToken: string): Promise<VerificationResult> {
  try {
    if (!authMethodType || !accessToken) {
      return {
        valid: false,
        error: 'authMethodType and accessToken are required'
      };
    }

    let verificationResult;

    // Select verification method based on authMethodType
    switch (authMethodType) {
      case AUTH_METHOD_TYPE.GoogleJwt:
        verificationResult = await verifyGoogleToken(accessToken);
        break;
      case AUTH_METHOD_TYPE.StytchEmailFactorOtp:
        verificationResult = await verifyStytchToken(accessToken);
        break;
      default:
        return {
          valid: false,
          error: `Unsupported auth method type: ${authMethodType}`
        };
    }

    if (!verificationResult) {
      return {
        valid: false,
        error: 'Invalid token'
      };
    }

    return verificationResult;
  } catch (error: any) {
    console.error('Error verifying token:', error);
    return {
      valid: false,
      error: error.message || 'Failed to verify token'
    };
  }
} 