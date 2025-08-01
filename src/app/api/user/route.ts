import { NextRequest, NextResponse } from 'next/server';
import { getUser, createUser } from './storage';
import { authenticateMultiProviderSession } from '@/lib/auth/multi-provider-auth';
import { AuthProviderType } from '@/lib/lit/custom-auth';
import { detectTokenType } from '@/lib/auth/multi-provider-auth';
import { verifyStytchAuth } from '@/lib/auth/provider-verification';

// GET /api/user?authMethodId=xxx
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const authMethodId = searchParams.get('authMethodId');

    if (!authMethodId) {
      return NextResponse.json(
        { error: 'Missing authMethodId parameter' },
        { status: 400 }
      );
    }

    const user = await getUser(authMethodId);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error in GET /api/user:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching user' },
      { status: 500 }
    );
  }
}

// POST /api/user - Create a new user (EMAIL_OTP only)
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Missing or invalid Authorization header' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const tokenType = detectTokenType(token);
    
    // Only allow EMAIL_OTP (Stytch) users to register new accounts
    if (tokenType !== 'stytch') {
      return NextResponse.json(
        { error: 'Only Email OTP users can register new accounts. Please use existing account for other providers.' },
        { status: 403 }
      );
    }
    
    // Verify Stytch token directly
    const verificationResult = await verifyStytchAuth(token);
    if (!verificationResult.success) {
      return NextResponse.json(
        { error: verificationResult.error || 'Token verification failed' },
        { status: 401 }
      );
    }
    
    const body = await request.json();
    const { authMethodId, email } = body;

    if (!authMethodId) {
      return NextResponse.json(
        { error: 'Missing authMethodId in request body' },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { error: 'Missing email in request body' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await getUser(authMethodId);
    if (existingUser) {
      return NextResponse.json(existingUser);
    }

    // Create new user with Stytch user ID as sub
    const newUser = await createUser({
      authMethodId,
      primaryEmail: email,
      authProvider: {
        providerType: AuthProviderType.EMAIL_OTP,
        sub: verificationResult.metadata?.stytchUserId || '',
        email: email,
      }
    });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/user:', error);
    return NextResponse.json(
      { error: 'An error occurred while creating user' },
      { status: 500 }
    );
  }
} 