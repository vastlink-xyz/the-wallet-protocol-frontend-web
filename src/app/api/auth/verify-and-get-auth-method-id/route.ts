import { NextRequest, NextResponse } from 'next/server';
import { AuthProviderType } from '@/lib/lit/custom-auth';
import { findUserByProviderEmail } from '../../user/storage';
import { verifyProviderAuth } from '@/lib/auth/provider-verification';

/**
 * Verify Provider and Get AuthMethodId API
 * 
 * This endpoint is called by the Lit Action to:
 * 1. Verify authentication tokens from different providers
 * 2. Get the user's authMethodId from database
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { providerType, accessToken, userEmail, timestamp } = body;

    console.log('🔄 Verifying authentication and getting authMethodId for:', { providerType, userEmail });

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

    // Step 1: Verify authentication
    const verificationResult = await verifyProviderAuth(providerType as AuthProviderType, accessToken, userEmail);

    if (!verificationResult.success) {
      console.log('❌ Authentication failed for:', userEmail, verificationResult.error);
      return NextResponse.json({
        success: false,
        error: verificationResult.error
      }, { status: 401 });
    }

    console.log('✅ Authentication verified for:', userEmail);

    // Step 2: Look up user from database to get their authMethodId
    const user = await findUserByProviderEmail(providerType as AuthProviderType, (verificationResult as any).userEmail);
    
    if (!user) {
      console.log('❌ User not found in database for:', { providerType, userEmail });
      return NextResponse.json({
        success: false,
        error: 'User not found in database'
      }, { status: 404 });
    }

    console.log('✅ Found user authMethodId:', user.authMethodId);

    return NextResponse.json({
      success: true,
      authMethodId: user.authMethodId,
      userEmail: (verificationResult as any).userEmail,
      providerType,
    });

  } catch (error: any) {
    console.error('Error in verify provider and get authMethodId:', error);
    return NextResponse.json({
      success: false,
      error: 'Internal server error during verification'
    }, { status: 500 });
  }
}