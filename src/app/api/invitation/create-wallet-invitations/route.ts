import { NextRequest, NextResponse } from 'next/server';
import {
  createPendingInvitation,
  createPendingWalletInvitation
} from '../storage';
import { sendInviteEmail } from '@/lib/notification/invite-notification';

/**
 * Create wallet invitations for multisig wallet creation
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      walletId,
      inviterAuthMethodId,
      inviterEmail,
      inviterEthAddress,
      walletName,
      otherSigners,
      targetThreshold,
      targetSignersCount,
      targetWalletName,
      targetMfaSettings,
      signersToRemove
    } = body;
    
    // Validate required fields
    if (!walletId || !inviterAuthMethodId || !inviterEmail || !inviterEthAddress || !walletName || !otherSigners || !Array.isArray(otherSigners)) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create individual invitations for all other signers (registered and unregistered)
    const pendingInvitees: {
      email: string;
      invitationId: string;
      isRegistered: boolean;
      authMethodId?: string;
    }[] = [];
    
    for (const signer of otherSigners) {
      // Create PendingInvitation for each signer (0 ETH transfer)
      const invitation = await createPendingInvitation({
        senderAuthMethodId: inviterAuthMethodId,
        senderEmail: inviterEmail,
        recipientEmail: signer.email,
        tokenType: 'ETH',
        amount: '0'
      });
      
      pendingInvitees.push({
        email: signer.email,
        invitationId: invitation.id,
        isRegistered: !!signer.ethAddress, // true if already registered
        authMethodId: signer.authMethodId || '' // Include authMethodId if available
      });
    }
    
    // Create PendingWalletInvitation to track the overall invitation
    await createPendingWalletInvitation({
      walletId,
      inviterAuthMethodId,
      inviterEmail,
      inviterEthAddress,
      walletName,
      pendingInvitees,
      targetThreshold,
      targetSignersCount,
      targetWalletName,
      targetMfaSettings,
      signersToRemove
    });
    
    // Send invitation emails to unregistered users
    const unregisteredSigners = otherSigners.filter(signer => !signer.ethAddress);

    for (const signer of unregisteredSigners) {
      const invitationId = pendingInvitees.find(inv => inv.email === signer.email)?.invitationId;
      if (invitationId) {
        try {
          // Generate invite URL
          const inviteUrl = `${process.env.NEXT_PUBLIC_APP_URL}/invite/${invitationId}`;

          // Send invitation email for multisig wallet (0 ETH transfer)
          await sendInviteEmail({
            recipientEmail: signer.email,
            senderEmail: inviterEmail,
            tokenType: 'ETH',
            amount: '0',
            inviteUrl
          });
        } catch (emailError) {
          console.error(`Failed to send invitation email to ${signer.email}:`, emailError);
          // Continue with other emails even if one fails
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Wallet invitations created and emails sent successfully',
      data: {
        totalInvitations: otherSigners.length,
        emailsSent: unregisteredSigners.length,
        unregisteredSigners: unregisteredSigners.map(signer => ({
          email: signer.email,
          invitationId: pendingInvitees.find(inv => inv.email === signer.email)?.invitationId
        }))
      }
    });
  } catch (error) {
    console.error('Failed to create wallet invitations:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create wallet invitations' },
      { status: 500 }
    );
  }
}
