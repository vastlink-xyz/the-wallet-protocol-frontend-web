import { NextRequest, NextResponse } from 'next/server';
import { getUser, createUser, addPkpToUser, getUserPkps } from './storage';
import { IRelayPKP } from '@lit-protocol/types';

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

// POST /api/user - Create a new user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { authMethodId } = body;

    if (!authMethodId) {
      return NextResponse.json(
        { error: 'Missing authMethodId in request body' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await getUser(authMethodId);
    if (existingUser) {
      return NextResponse.json(existingUser);
    }

    // Create new user
    const newUser = await createUser(authMethodId);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/user:', error);
    return NextResponse.json(
      { error: 'An error occurred while creating user' },
      { status: 500 }
    );
  }
} 