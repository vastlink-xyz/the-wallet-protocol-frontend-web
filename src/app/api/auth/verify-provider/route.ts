import { NextRequest, NextResponse } from 'next/server';
import { AuthProviderType } from '@/lib/lit/custom-auth';
import { verifyProviderAuth } from '@/lib/auth/provider-verification';

/**
 * Multi-Provider Authentication Verification API
 * 
 * This endpoint is called by the Lit Action to verify authentication tokens
 * from different providers (Email/Stytch, Google, Passkey).
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { providerType, accessToken, userEmail, timestamp } = body;

    console.log('🔄 Verifying authentication for:', { providerType, userEmail });

    if (!providerType || !accessToken || !userEmail) {
      return NextResponse.json({
        success: false,
        error: 'Missing required parameters: providerType, accessToken, userEmail'
      }, { status: 400 });
    }

    // Verify the timestamp is recent (within 5 minutes)
    const now = Date.now();
    if (timestamp && Math.abs(now - timestamp) > 5 * 60 * 1000) {
      return NextResponse.json({
        success: false,
        error: 'Authentication request expired'
      }, { status: 400 });
    }

    const verificationResult = await verifyProviderAuth(providerType as AuthProviderType, accessToken, userEmail);

    if (verificationResult.success) {
      console.log('✅ Authentication verified for:', userEmail);

      return NextResponse.json({
        success: true,
        providerType,
        userEmail: (verificationResult as any).userEmail,
      });
    } else {
      console.log('❌ Authentication failed for:', userEmail, verificationResult.error);
      return NextResponse.json({
        success: false,
        error: verificationResult.error
      }, { status: 401 });
    }

  } catch (error: any) {
    console.error('Error in provider verification:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal server error during verification'
    }, { status: 500 });
  }
}