import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '@/app/api/stytch/client';
import { AuthenticatedSession, authenticateStytchSession } from '@/app/api/stytch/sessionAuth';
import { log } from '@/lib/utils'; // Assuming log is a utility you want to keep

export async function POST(req: NextRequest) {
  try {
    // Authenticate the user session first to ensure only the logged-in user can attempt removal.
    const session: AuthenticatedSession = await authenticateStytchSession(req);
    log('Authenticated session in remove-phone:', session); 
    // session.user_id is available here if needed for logging or further checks, 
    // though not directly used by stytchClient.users.deletePhoneNumber.

    const body = await req.json();
    const { phone_id } = body; // This is the actual ID of the phone number resource in Stytch

    if (!phone_id) {
      return NextResponse.json({ error: 'phone_id is required' }, { status: 400 });
    }

    log('Attempting to delete phone number with phone_id:', phone_id, 'for user_id:', session.user_id);
    // For Consumer Stytch, deleting a phone number is done via users.deletePhoneNumber.
    // This Stytch API call itself does not require user_id, as phone_id is unique.
    // However, our session authentication step ensures this action is performed by an authenticated user.
    await stytchClient.users.deletePhoneNumber({ 
      phone_id: phone_id 
    });
    log('Successfully deleted phone_id:', phone_id);

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('Error in POST /api/mfa/whatsapp/remove:', error);
    log('Error removing phone number:', error);

    let errorMessage = 'Failed to remove phone number';
    let statusCode = 500;

    const authErrorMessages = [
      'Authorization header is missing',
      'Invalid Authorization header format. Expected "Bearer <token>"',
      'Session token is missing',
      'Invalid session or user_id missing from session',
      'Session authentication failed'
    ];

    if (authErrorMessages.some(msg => error.message?.includes(msg))) {
      errorMessage = 'Authentication failed';
      statusCode = 401;
    } else if (error.error_message) { // Stytch specific error
        errorMessage = error.error_message;
        statusCode = error.status_code || 500; // Use Stytch's status code or default to 500
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
} 