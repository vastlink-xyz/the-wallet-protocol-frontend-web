import { NextRequest, NextResponse } from 'next/server';
import { stytchClient } from '@/app/api/stytch/client';
import { getUser } from '@/app/api/user/storage';

export async function DELETE(request: NextRequest) {
  try {
    const { authMethodId, webauthnRegistrationId } = await request.json();
    
    if (!authMethodId) {
      return NextResponse.json(
        { error: 'authMethodId is required' },
        { status: 400 }
      );
    }

    // Get user from database to get Stytch user_id
    const user = await getUser(authMethodId);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Find the EMAIL_OTP provider to get Stytch user_id
    const stytchProvider = user.authProviders?.find(
      p => p.providerType === 'email_otp' && p.isEnabled
    );
    
    if (!stytchProvider?.sub) {
      return NextResponse.json(
        { error: 'No Stytch user_id found for this user' },
        { status: 400 }
      );
    }

    // If specific registration ID provided, delete that one
    if (webauthnRegistrationId) {
      await stytchClient.users.deleteWebAuthnRegistration({
        webauthn_registration_id: webauthnRegistrationId
      });
      return NextResponse.json({ 
        message: 'Passkey deleted successfully',
        deletedCount: 1
      });
    }

    // Otherwise, get all registrations and delete them
    const stytchUser = await stytchClient.users.get({
      user_id: stytchProvider.sub
    });

    const webauthnRegistrations = stytchUser.webauthn_registrations || [];
    
    if (webauthnRegistrations.length === 0) {
      return NextResponse.json({
        message: 'No passkey registrations found to delete',
        deletedCount: 0
      });
    }
    
    // Delete all registrations one by one
    for (const registration of webauthnRegistrations) {
      await stytchClient.users.deleteWebAuthnRegistration({
        webauthn_registration_id: registration.webauthn_registration_id
      });
    }

    return NextResponse.json({
      message: `Deleted ${webauthnRegistrations.length} passkey registrations`,
      deletedCount: webauthnRegistrations.length
    });

  } catch (error: any) {
    console.error('Error deleting Passkey:', error);
    
    // Handle Stytch specific errors
    if (error.error_type === 'webauthn_registration_not_found') {
      return NextResponse.json(
        { error: 'Passkey registration not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to delete Passkey' },
      { status: 500 }
    );
  }
}