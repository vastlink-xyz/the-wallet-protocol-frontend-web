import { NextRequest, NextResponse } from 'next/server';
import { authenticateMultiProviderSession } from '@/lib/auth/multi-provider-auth';
import { AuthProviderType } from '@/lib/lit/custom-auth';
import { addAuthProviderToUser, getUser } from '../storage';
import { verifyGoogleAuth } from '@/lib/auth/provider-verification';

// POST /api/user/auth-providers - Add a new auth provider to user
export async function POST(request: NextRequest) {
  try {
    // Authenticate session using multi-provider authentication
    const authResult = await authenticateMultiProviderSession(request);
    const { user: authenticatedUser } = authResult;
    
    const body = await request.json();
    const { authMethodId, providerType, accessToken } = body;

    if (!authMethodId || !providerType || !accessToken) {
      return NextResponse.json(
        { error: 'Missing required fields: authMethodId, providerType, accessToken' },
        { status: 400 }
      );
    }

    // Verify the user exists
    const existingUser = await getUser(authMethodId);
    if (!existingUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Verify the provider authentication
    let verificationResult;
    let providerInfo;

    switch (providerType) {
      case AuthProviderType.GOOGLE:
        verificationResult = await verifyGoogleAuth(accessToken);
        if (!verificationResult.success) {
          return NextResponse.json(
            { error: `Google verification failed: ${verificationResult.error}` },
            { status: 400 }
          );
        }
        
        // Ensure we have the required googleUserId
        if (!verificationResult.metadata?.googleUserId) {
          return NextResponse.json(
            { error: 'Google verification failed: missing user ID' },
            { status: 400 }
          );
        }
        
        providerInfo = {
          providerType: AuthProviderType.GOOGLE,
          sub: verificationResult.metadata.googleUserId,
          email: verificationResult.userEmail,
          metadata: verificationResult.metadata
        };
        break;

      default:
        return NextResponse.json(
          { error: `Unsupported provider type: ${providerType}` },
          { status: 400 }
        );
    }

    // Check if this provider is already connected
    const existingProvider = existingUser.authProviders?.find(
      p => p.providerType === providerType && p.sub === providerInfo.sub
    );

    if (existingProvider) {
      return NextResponse.json(
        { error: 'This provider is already connected to your account' },
        { status: 400 }
      );
    }

    // Add the new auth provider
    const updatedUser = await addAuthProviderToUser(authMethodId, providerInfo);
    
    if (!updatedUser) {
      return NextResponse.json(
        { error: 'Failed to add auth provider' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Auth provider added successfully',
      authProviders: updatedUser.authProviders
    });

  } catch (error) {
    console.error('Error in POST /api/user/auth-providers:', error);
    return NextResponse.json(
      { error: 'An error occurred while adding auth provider' },
      { status: 500 }
    );
  }
}