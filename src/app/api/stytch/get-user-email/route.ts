import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '../client';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Get user information from Stytch
    // Using any type to avoid TypeScript errors as the Stytch API response structure might vary
    const response: any = await stytchClient.users.get({
      user_id: userId
    });

    // Extract email and phone information based on the actual Stytch response structure
    let primaryEmail = null;
    let phoneNumber = null;

    // Get primary email from emails array
    if (response.emails && response.emails.length > 0) {
      // Prefer verified emails if available
      const verifiedEmail = response.emails.find((email: any) => email.verified === true);
      primaryEmail = verifiedEmail ? verifiedEmail.email : response.emails[0].email;
    }

    // Get phone number
    if (response.phone_numbers && response.phone_numbers.length > 0) {
      const verifiedPhone = response.phone_numbers.find((phone: any) => phone.verified === true);
      phoneNumber = verifiedPhone ? verifiedPhone.phone_number : response.phone_numbers[0].phone_number;
    }

    return NextResponse.json({
      success: true,
      email: primaryEmail,
      phoneNumber,
      userId: response.user_id,
      name: response.name,
      created_at: response.created_at
    });
  } catch (error: any) {
    console.error('Error getting user email:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Failed to get user email',
        details: error.error_type || error.error_message 
      },
      { status: 500 }
    );
  }
} 