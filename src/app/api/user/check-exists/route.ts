import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase, UserModel } from '@/app/api/user/models';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectToDatabase();

    // Check if user exists with this email
    const existingUser = await UserModel.findOne({ 
      $or: [
        { primaryEmail: email.toLowerCase() },
        { 'authProviders.email': email.toLowerCase() }
      ]
    });

    return NextResponse.json({
      exists: !!existingUser,
      email: email.toLowerCase()
    });

  } catch (error: any) {
    console.error('Error checking user existence:', error);
    return NextResponse.json(
      { 
        error: 'Failed to check user existence',
        details: error.message 
      },
      { status: 500 }
    );
  }
}