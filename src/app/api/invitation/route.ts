import { NextRequest, NextResponse } from 'next/server';
import { createPendingInvitation, getPendingInvitationById, getPendingInvitationsByRecipientEmail } from './storage';
import { getUser } from '../user/storage';
import { SUPPORTED_TOKENS_INFO, TokenType } from '@/lib/web3/token';
import { sendInviteEmail } from '@/lib/notification/invite-notification';

// Create a pending invitation
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { recipientEmail, tokenType, amount, authMethodId } = body;
    
    // Validate required fields
    if (!recipientEmail || !tokenType || !amount) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Get sender info
    const sender = await getUser(authMethodId);
    if (!sender) {
      return NextResponse.json(
        { success: false, error: 'Sender not found' },
        { status: 404 }
      );
    }
    
    // Create pending invitation
    const invitation = await createPendingInvitation({
      senderAuthMethodId: authMethodId,
      senderEmail: sender.primaryEmail,
      recipientEmail,
      tokenType,
      amount
    });
    
    // Generate invite URL
    const inviteUrl = `${process.env.NEXT_PUBLIC_APP_URL}/invite/${invitation.id}`;
    
    // Get token symbol
    let tokenSymbol = tokenType;
    if (Object.keys(SUPPORTED_TOKENS_INFO).includes(tokenType)) {
      tokenSymbol = SUPPORTED_TOKENS_INFO[tokenType as TokenType].symbol;
    }
    
    // Send invitation email
    try {
      await sendInviteEmail({
        recipientEmail,
        senderEmail: sender.primaryEmail,
        tokenType: tokenSymbol,
        amount,
        inviteUrl
      });
    } catch (emailError) {
      console.error('Failed to send invitation email:', emailError);
      // We don't fail the whole request if just the email fails
    }
    
    // Return success with invitation data
    return NextResponse.json({
      success: true,
      data: {
        id: invitation.id,
        inviteUrl
      }
    });
    
  } catch (error) {
    console.error('Error creating pending invitation:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create pending invitation' },
      { status: 500 }
    );
  }
}

// Get a pending invitation by ID
export async function GET(request: NextRequest) {
  try {
    // Get invitation ID from URL
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');
    const email = searchParams.get('email');
    
    if (id) {
      // Get invitation by ID
      const invitation = await getPendingInvitationById(id);
      
      if (!invitation) {
        return NextResponse.json(
          { success: false, error: 'Invitation not found' },
          { status: 404 }
        );
      }
      
      // Return invitation data
      return NextResponse.json({
        success: true,
        data: invitation
      });
    } else if (email) {
      // Get invitations for recipient
      const invitations = await getPendingInvitationsByRecipientEmail(email);
      
      // Return invitations
      return NextResponse.json({
        success: true,
        data: invitations
      });
    } else {
      return NextResponse.json(
        { success: false, error: 'Missing id or email parameter' },
        { status: 400 }
      );
    }
    
  } catch (error) {
    console.error('Error getting pending transaction:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to get pending transaction' },
      { status: 500 }
    );
  }
} 