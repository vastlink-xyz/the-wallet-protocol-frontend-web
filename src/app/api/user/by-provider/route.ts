import { NextRequest, NextResponse } from 'next/server';
import { AuthProviderType } from '@/lib/lit/custom-auth';
import { findUserByProviderEmail } from '../storage';

/**
 * Find user by auth provider
 * POST /api/user/by-provider
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { providerType, userEmail, accessToken } = body;

    console.log('🔍 Looking for user by provider:', { providerType, userEmail });

    if (!providerType || !userEmail || !accessToken) {
      return NextResponse.json({
        error: 'Missing required parameters: providerType, userEmail, accessToken'
      }, { status: 400 });
    }

    // First verify the access token
    console.log('🔐 Verifying access token before user lookup...');
    const verifyResponse = await fetch(`${req.nextUrl.origin}/api/auth/verify-and-get-auth-method-id`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        providerType,
        accessToken,
        userEmail,
        timestamp: Date.now()
      })
    });

    if (!verifyResponse.ok) {
      console.log('❌ Access token verification failed');
      return NextResponse.json({
        error: 'Invalid access token'
      }, { status: 401 });
    }

    const verifyResult = await verifyResponse.json();
    if (!verifyResult.success) {
      console.log('❌ Access token verification failed:', verifyResult.error);
      return NextResponse.json({
        error: 'Access token verification failed'
      }, { status: 401 });
    }

    console.log('✅ Access token verified, proceeding with user lookup...');

    // Validate provider type
    if (!Object.values(AuthProviderType).includes(providerType)) {
      return NextResponse.json({
        error: `Invalid provider type: ${providerType}`
      }, { status: 400 });
    }

    // For different provider types, we need different search strategies
    let user = null;

    switch (providerType) {
      case AuthProviderType.EMAIL_OTP:
        // For email OTP, search by email field (not sub, which is Stytch user ID)
        console.log('🔍 Searching for EMAIL_OTP user by email field:', userEmail);
        user = await findUserByProviderEmail(providerType, userEmail);
        break;
        
      case AuthProviderType.GOOGLE:
        // For Google, we need to search by email since that's what we have
        // Note: This assumes Google providers store email in the email field
        user = await findUserByProviderEmail(providerType, userEmail);
        break;
        
      case AuthProviderType.PASSKEY:
        // For Passkey, search by email
        user = await findUserByProviderEmail(providerType, userEmail);
        break;
        
      default:
        return NextResponse.json({
          error: `Unsupported provider type: ${providerType}`
        }, { status: 400 });
    }

    if (!user) {
      console.log('❌ No user found for provider:', { providerType, userEmail });
      return NextResponse.json({
        error: 'User not found'
      }, { status: 404 });
    }

    console.log('✅ Found user by provider:', user.id);
    return NextResponse.json(user);

  } catch (error: any) {
    console.error('Error finding user by provider:', error);
    return NextResponse.json({
      error: 'Internal server error'
    }, { status: 500 });
  }
}
