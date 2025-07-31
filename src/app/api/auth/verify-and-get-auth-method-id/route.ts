import { NextRequest, NextResponse } from 'next/server';
import { AuthProviderType } from '@/lib/lit/custom-auth';
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
    const { providerType, accessToken, timestamp } = body;

    console.log('🔄 Verifying authentication and getting authMethodId for:', { providerType });

    if (!providerType || !accessToken) {
      return NextResponse.json({
        success: false,
        error: 'Missing required parameters: providerType, accessToken'
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

    // Verify authentication and get user from database
    const result = await verifyProviderAuth(providerType as AuthProviderType, accessToken);

    if (!result.success) {
      console.log('❌ Authentication or user lookup failed:', result.error);
      return NextResponse.json({
        success: false,
        error: result.error,
        userNotFound: (result as any).userNotFound,
      }, { status: 401 });
    }

    console.log('✅ Found user authMethodId:', (result as any).authMethodId);

    return NextResponse.json({
      success: true,
      authMethodId: (result as any).authMethodId,
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