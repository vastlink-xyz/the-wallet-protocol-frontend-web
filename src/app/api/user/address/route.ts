import { NextRequest, NextResponse } from 'next/server';
import { getUserByPkpAddress } from '../storage';
import { getUser } from '../storage';

// GET /api/user/address?address=0x...
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const address = searchParams.get('address');

    if (!address) {
      return NextResponse.json(
        { error: 'Missing address parameter' },
        { status: 400 }
      );
    }

    const userInfo = await getUserByPkpAddress(address);
    
    if (!userInfo) {
      return NextResponse.json(
        { 
          success: false,
          message: 'No user found with this address' 
        },
        { status: 404 }
      );
    }

    // Get user's email information
    const user = await getUser(userInfo.authMethodId);
    const email = user?.email || null;

    // Return specific PKP and user information without exposing all user data
    return NextResponse.json({
      success: true,
      data: {
        authMethodId: userInfo.authMethodId,
        email: email,
        pkp: userInfo.pkp
      }
    });
  } catch (error) {
    console.error('Error in GET /api/user/address:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'An error occurred while fetching user by address' 
      },
      { status: 500 }
    );
  }
}
