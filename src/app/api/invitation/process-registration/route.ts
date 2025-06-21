import { NextRequest, NextResponse } from 'next/server';
import {
  updatePendingInvitationStatus,
  getPendingWalletInvitationByWalletId,
  updatePendingWalletInvitationInvitee,
  updatePendingWalletInvitationStatus,
  findPendingWalletInvitationsByInvitationId
} from '../storage';
import { getWalletById, saveMessageProposal } from '../../multisig/storage';
import { sendTeamNotification } from '@/lib/notification/team-notificatioin';
import { getUser } from '../../user/storage';
import { randomUUID } from 'crypto';

/**
 * Process user registration completion for multisig wallet invitations
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userEmail, invitationId, authMethodId } = body;

    if (!userEmail || !invitationId || !authMethodId) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: userEmail, invitationId, and authMethodId are required' },
        { status: 400 }
      );
    }
    
    // Update the invitation status to 'registered'
    const updatedInvitation = await updatePendingInvitationStatus(invitationId, 'registered');
    if (!updatedInvitation) {
      return NextResponse.json(
        { success: false, error: 'Failed to update invitation status' },
        { status: 500 }
      );
    }
    
    // Find all pending wallet invitations that include this invitation
    const pendingWalletInvitations = await findPendingWalletInvitationsByInvitationId(invitationId);
    
    for (const walletInvitation of pendingWalletInvitations) {
      // Update the invitee's registration status and authMethodId
      await updatePendingWalletInvitationInvitee(
        walletInvitation.walletId,
        userEmail,
        true,
        authMethodId
      );
      
      // Check if all invitees are now registered
      const updatedWalletInvitation = await getPendingWalletInvitationByWalletId(walletInvitation.walletId);
      if (!updatedWalletInvitation) continue;
      
      const allRegistered = updatedWalletInvitation.pendingInvitees.every(invitee => invitee.isRegistered);
      
      if (allRegistered) {
        // All users are registered, create a settings change proposal
        await createSettingsChangeProposal(updatedWalletInvitation);
        
        // Mark the wallet invitation as completed
        await updatePendingWalletInvitationStatus(walletInvitation.walletId, 'completed');
      }
    }
    
    return NextResponse.json({
      success: true,
      message: 'Registration processed successfully'
    });
  } catch (error) {
    console.error('Failed to process registration:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process registration' },
      { status: 500 }
    );
  }
}



/**
 * Create a settings change proposal to add all registered invitees to the wallet
 */
async function createSettingsChangeProposal(walletInvitation: any) {
  try {
    // Get the wallet
    const wallet = await getWalletById(walletInvitation.walletId);
    if (!wallet) {
      throw new Error('Wallet not found');
    }
    
    // Prepare the new signers list (current signers + invited signers with real user data)
    const invitedSigners = [];

    for (const invitee of walletInvitation.pendingInvitees) {
      if (invitee.isRegistered && invitee.authMethodId) {
        try {
          // Get the actual user data for registered invitees using stored authMethodId
          const user = await getUser(invitee.authMethodId);
          if (user && user.litActionPkp) {
            invitedSigners.push({
              email: invitee.email,
              ethAddress: user.litActionPkp.ethAddress,
              publicKey: user.litActionPkp.publicKey,
              authMethodId: user.authMethodId
            });
          } else {
            console.warn(`Could not find user data for registered invitee: ${invitee.email} with authMethodId: ${invitee.authMethodId}`);
          }
        } catch (error) {
          console.error(`Error fetching user data for ${invitee.email}:`, error);
        }
      }
    }

    const newSigners = [
      ...wallet.signers,
      ...invitedSigners
    ];

    // Debug logging
    console.log('Debug - Wallet invitation processing:');
    console.log('- Wallet signers count:', wallet.signers.length);
    console.log('- Invited signers count:', invitedSigners.length);
    console.log('- New signers count:', newSigners.length);
    console.log('- Wallet signers:', wallet.signers.map(s => ({ email: s.email, ethAddress: s.ethAddress })));
    console.log('- Invited signers:', invitedSigners.map(s => ({ email: s.email, ethAddress: s.ethAddress })));
    console.log('- Pending invitees:', walletInvitation.pendingInvitees.map((inv: any) => ({
      email: inv.email,
      isRegistered: inv.isRegistered,
      hasAuthMethodId: !!inv.authMethodId
    })));

    // Prepare settings data for the proposal following handleUpdateWalletSettings pattern
    const settingsData: any = {};

    // Save original state for comparison after changes are applied
    settingsData.originalState = {
      name: wallet.name,
      threshold: wallet.threshold,
      signers: wallet.signers,
      mfaSettings: wallet.metadata?.mfaSettings,
    };

    // Check if signers list has changed (added or removed signers)
    const signersChanged = JSON.stringify(newSigners.map((s: any) => s.ethAddress).sort()) !==
        JSON.stringify(wallet.signers.map((s: any) => s.ethAddress).sort());

    console.log('- Signers changed:', signersChanged);
    console.log('- Original signers ethAddresses:', wallet.signers.map((s: any) => s.ethAddress).sort());
    console.log('- New signers ethAddresses:', newSigners.map((s: any) => s.ethAddress).sort());

    if (signersChanged) {
      settingsData.signers = newSigners;
    }

    // Check if threshold has changed
    const thresholdChanged = walletInvitation.targetThreshold !== wallet.threshold;
    if (thresholdChanged) {
      settingsData.threshold = walletInvitation.targetThreshold;
    }

    // Store a summary of changes for display
    const changeDescriptions = [];
    if (settingsData.threshold !== undefined) {
      changeDescriptions.push(`Change threshold from ${wallet.threshold} to ${walletInvitation.targetThreshold}`);
    }
    if (settingsData.signers) {
      const addedCount = newSigners.filter(s => !wallet.signers.some((os: any) => os.ethAddress === s.ethAddress)).length;
      const removedCount = wallet.signers.filter((os: any) => !newSigners.some(s => s.ethAddress === os.ethAddress)).length;

      if (addedCount > 0) changeDescriptions.push(`Add ${addedCount} signer(s)`);
      if (removedCount > 0) changeDescriptions.push(`Remove ${removedCount} signer(s)`);
    }

    settingsData.changeDescription = changeDescriptions.join(', ') || 'Wallet settings updated';

    // Only proceed if there are actual changes
    if (Object.keys(settingsData).length <= 2) { // originalState and changeDescription only
      throw new Error('No changes detected in wallet invitation processing');
    }

    // Create the settings change proposal directly using storage function
    const proposalId = randomUUID();

    const proposal = {
      id: proposalId,
      walletId: walletInvitation.walletId,
      status: 'pending' as const,
      createdBy: {
        authMethodId: walletInvitation.inviterAuthMethodId,
        ethAddress: walletInvitation.inviterEthAddress,
        email: walletInvitation.inviterEmail,
      },
      message: JSON.stringify(settingsData),
      signatures: [],
      type: 'walletSettings' as const,
      transactionData: undefined,
      settingsData
    };

    // Save the proposal directly to storage
    await saveMessageProposal(proposal);

    // Send notifications to all current signers about the new proposal
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || '';
    const walletLink = `${appUrl}/wallet/${walletInvitation.walletId}/details/proposals`;

    for (const signer of wallet.signers) {
      if (signer.email) {
        await sendWalletSettingsNotification({
          to: signer.email,
          proposalId: proposalId,
          settingsData,
          walletLink,
          walletName: wallet.name,
          proposer: walletInvitation.inviterEmail,
        });
      }
    }

    console.log(`Created settings change proposal ${proposal.id} for wallet ${walletInvitation.walletId}`);

    return proposal;
  } catch (error) {
    console.error('Failed to create settings change proposal:', error);
    throw error;
  }
}

/**
 * Helper function specifically for wallet settings change notifications
 */
async function sendWalletSettingsNotification({
  to,
  proposalId,
  settingsData,
  walletLink,
  walletName,
  proposer,
}: {
  to: string
  proposalId: string
  settingsData: any
  walletLink: string
  walletName: string
  proposer: string
}) {
  try {
    // Generate detailed change description
    const changes = [];

    if (settingsData.threshold !== undefined) {
      changes.push(`Threshold changed to ${settingsData.threshold}`);
    }

    if (settingsData.signers) {
      // Count added/removed signers by comparing with original state
      const originalSigners = settingsData.originalState?.signers || [];
      const newSigners = settingsData.signers || [];

      const addedCount = newSigners.filter((s: any) =>
        !originalSigners.some((os: any) => os.ethAddress === s.ethAddress)
      ).length;
      const removedCount = originalSigners.filter((os: any) =>
        !newSigners.some((s: any) => s.ethAddress === os.ethAddress)
      ).length;

      if (addedCount > 0) changes.push(`Added ${addedCount} signer(s)`);
      if (removedCount > 0) changes.push(`Removed ${removedCount} signer(s)`);
    }

    if (settingsData.mfaSettings) {
      changes.push('MFA settings updated');
    }

    // Use the provided change description if available, or generate one
    const changeDescription = settingsData.changeDescription || changes.join(', ') || 'Wallet settings updated';

    // Use the new sendTeamNotification function
    const result = await sendTeamNotification({
      to,
      proposalId,
      recipientAddress: 'Wallet Settings',
      amount: changeDescription,
      walletLink,
      notificationType: 'wallet-settings-change',
      // Include additional details about the changes
      settingsChanges: {
        changeDescription,
        threshold: settingsData.threshold,
        signerChanges: settingsData.signers ? true : false,
        mfaChanges: settingsData.mfaSettings ? true : false,
        nameChanges: settingsData.name ? true : false,
      },
      walletName,
      proposer,
    });

    if (!result.success) {
      throw new Error(result.error || 'Failed to send wallet settings notification');
    }

    return result.response;
  } catch (error) {
    console.error('Error sending wallet settings notification:', error);
    throw error;
  }
}
