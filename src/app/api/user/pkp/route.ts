import { NextRequest, NextResponse } from 'next/server';
import { addPkpToUser, getUserPkps, PKPType, getUser } from '../storage';

// GET /api/user/pkp?authMethodId=xxx
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

    const pkps = await getUserPkps(authMethodId);
    return NextResponse.json(pkps);
  } catch (error) {
    console.error('Error in GET /api/user/pkp:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching PKPs' },
      { status: 500 }
    );
  }
}

// POST /api/user/pkp - Add or update a PKP for a user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { authMethodId, pkp, pkpType } = body;

    console.log(`POST /api/user/pkp - Request for ${authMethodId}, type: ${pkpType}`);

    if (!authMethodId || !pkp) {
      return NextResponse.json(
        { error: 'Missing authMethodId or pkp in request body' },
        { status: 400 }
      );
    }

    // Validate PKP structure
    if (!pkp.ethAddress || !pkp.publicKey || !pkp.tokenId) {
      return NextResponse.json(
        { error: 'Invalid PKP structure. ethAddress, publicKey, and tokenId are required' },
        { status: 400 }
      );
    }

    // Validate PKP type
    // kkktodo
    let type = PKPType.Session;
    if (pkpType) {
      if (pkpType === 'litAction') {
        type = PKPType.LitAction;
      } else if (pkpType !== 'session') {
        return NextResponse.json(
          { error: 'Invalid pkpType. Must be "session" or "litAction"' },
          { status: 400 }
        );
      }
    }

    // Check if user already has a PKP of this type
    const existingUser = await getUser(authMethodId);
    const hasExistingPkp = existingUser?.litActionPkp;
    
    const action = hasExistingPkp ? 'Updating' : 'Adding';
    console.log(`${action} ${type} PKP for user ${authMethodId}`);

    // Add or update the PKP
    const updatedUser = await addPkpToUser(authMethodId, pkp, type);
    if (!updatedUser) {
      return NextResponse.json(
        { error: `Failed to ${action.toLowerCase()} PKP for user` },
        { status: 500 }
      );
    }

    console.log(`Successfully ${action.toLowerCase()} PKP for user ${authMethodId}`);
    return NextResponse.json({
      success: true,
      message: `Successfully ${action.toLowerCase()} PKP`,
      user: updatedUser
    });
  } catch (error) {
    console.error('Error in POST /api/user/pkp:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing the PKP' },
      { status: 500 }
    );
  }
} 