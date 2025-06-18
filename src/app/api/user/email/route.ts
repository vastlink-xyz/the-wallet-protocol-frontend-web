import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase, UserModel } from '../models';
import { IRelayPKP } from '@lit-protocol/types';
import { User } from '../storage';

// GET /api/user/email?email=xyz@example.com
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Missing email parameter' },
        { status: 400 }
      );
    }

    await connectToDatabase();
    
    // Find user by email
    const user = await UserModel.findOne({ email }).collation({ locale: 'en', strength: 2 }).lean() as User | null;

    if (!user) {
      return NextResponse.json(
        { 
          success: false,
          message: 'No user found with this email' 
        },
        { status: 404 }
      );
    }

    // Determine which PKP to use (prefer litActionPkp)
    let pkpData: IRelayPKP | null = null;
    
    if (user.litActionPkp) {
      pkpData = {
        ethAddress: user.litActionPkp.ethAddress,
        publicKey: user.litActionPkp.publicKey,
        tokenId: user.litActionPkp.tokenId
      };
    }

    if (!pkpData) {
      return NextResponse.json(
        { 
          success: false,
          message: 'User found but has no PKP keys' 
        },
        { status: 404 }
      );
    }

    // Return specific PKP and user information without exposing all user data
    return NextResponse.json({
      success: true,
      data: {
        authMethodId: user.authMethodId,
        email: user.email,
        pkp: pkpData,
        addresses: user.addresses
      }
    });
  } catch (error) {
    console.error('Error in GET /api/user/email:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'An error occurred while fetching user by email' 
      },
      { status: 500 }
    );
  }
} 