import { NextRequest, NextResponse } from 'next/server';
import { getUser, createUser } from './storage';
import { authenticateStytchSession } from '../stytch/sessionAuth';
import { AuthProviderType } from '@/lib/lit/custom-auth';

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

// POST /api/user - Create a new user with multi-provider support
export async function POST(request: NextRequest) {
  try {
    // Authenticate session and get sub from it
    const session = await authenticateStytchSession(request);
    const sub = session.user_id; // This is the Stytch user_id (sub)
    
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

    // Create new user with multi-provider architecture
    const newUser = await createUser({
      authMethodId,
      primaryEmail: email,
      authProvider: {
        providerType: AuthProviderType.EMAIL_OTP,
        sub: sub,
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