import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '@/app/api/stytch/client'; // Assuming client is here

// Updated interface to represent the Stytch session object more completely.
// This will now be the actual shape of the session object returned by Stytch.
export interface AuthenticatedSession {
  user_id: string; // Stytch typically uses snake_case for user_id
  session_id?: string; // Example: Stytch session often includes a session_id
  [key: string]: any; // Allow any other properties that Stytch might return
}

/**
 * Authenticates a Stytch session JWT from the request.
 * @param req The NextRequest object.
 * @returns A Promise resolving to an AuthenticatedSession object (the full Stytch session object).
 * @throws An error if authentication fails or token is missing.
 */
export async function authenticateStytchSession(req: NextRequest): Promise<AuthenticatedSession> {
  const authorizationHeader = req.headers.get('Authorization');
  if (!authorizationHeader) {
    throw new Error('Authorization header is missing');
  }

  const tokenParts = authorizationHeader.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0].toLowerCase() !== 'bearer') {
    throw new Error('Invalid Authorization header format. Expected "Bearer <token>"');
  }
  const sessionJwt = tokenParts[1];

  if (!sessionJwt) {
    throw new Error('Session token is missing');
  }

  try {
    const { session } = await stytchClient.sessions.authenticateJwt({
      session_jwt: sessionJwt,
    });
    // In Stytch Consumer Auth, user_id is directly on the session object.
    // For B2B it might be session.member_session.user_id or similar.
    // Let's assume Consumer for now as this is for "personal" wallet.
    if (!session || !session.user_id) { // Ensure the critical user_id is present
      throw new Error('Invalid session or user_id missing from session');
    }
    // Return the entire Stytch session object
    return session as AuthenticatedSession; // Assert type if Stytch's SDK doesn't directly match our interface
  } catch (error) {
    console.error('Stytch session authentication failed:', error);
    // It's good to check the error type from Stytch if available
    // For example, if (error.status_code === 401 || error.status_code === 403) ...
    throw new Error('Session authentication failed');
  }
}
