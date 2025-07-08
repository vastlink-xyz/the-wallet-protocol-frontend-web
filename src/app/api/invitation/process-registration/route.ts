import { NextRequest, NextResponse } from 'next/server';
import {
  updatePendingInvitationStatus,
  updatePendingWalletInvitationInvitee,
  updatePendingWalletInvitationStatus,
  findPendingWalletInvitationsByInvitationId
} from '../storage';
import { getWalletById } from '../../multisig/storage';
import { getUser } from '../../user/storage';
import { log } from '@/lib/utils';
import { generateSettingsChangeDescriptions } from '@/app/wallet/[walletId]/details/proposals/utils/settingsDescriptionUtils';

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
      // Update the invitee's registration status and authMethodId using invitationId
      const updateResult = await updatePendingWalletInvitationInvitee(
        walletInvitation.walletId,
        invitationId,
        true,
        authMethodId
      );

      if (!updateResult) {
        log('❌ Failed to update invitee registration status');
        continue;
      }
      log('✅ Successfully updated invitee registration status');

      // Use the updated result directly instead of re-querying to avoid stale data
      log('🔍 Using updated wallet invitation data from update operation');
      const updatedWalletInvitation = updateResult;
      if (!updatedWalletInvitation) {
        log('❌ Update result is null');
        continue;
      }

      const allRegistered = updatedWalletInvitation.pendingInvitees.every(invitee => invitee.isRegistered);
      log(`🎯 All invitees registered: ${allRegistered} for walletId: ${walletInvitation.walletId}`);

      if (allRegistered) {
        // All users are registered, create a settings change proposal
        await createSettingsChangeProposal(updatedWalletInvitation);

        // Mark the wallet invitation as completed
        await updatePendingWalletInvitationStatus(updatedWalletInvitation.id, 'completed');
      } else {
        log('⏳ Not all users are registered yet for walletId:', walletInvitation.walletId);
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
 * Uses the unified api/multisig/messages POST endpoint for consistency and automatic email handling
 */
async function createSettingsChangeProposal(walletInvitation: any) {
  try {
    // Get the wallet
    const wallet = await getWalletById(walletInvitation.walletId);
    if (!wallet) {
      log('❌ Wallet not found for walletId:', walletInvitation.walletId);
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

    // ===== FOLLOW NORMAL FLOW LOGIC EXACTLY =====
    // Build the final target state exactly like normal flow does

    // 1. Start with current wallet signers
    let finalSigners = [...wallet.signers];

    // 2. Remove signers that should be removed
    if (walletInvitation.signersToRemove && walletInvitation.signersToRemove.length > 0) {
      const removedEmails = walletInvitation.signersToRemove.map((s: any) => s.email);
      finalSigners = finalSigners.filter((s: any) => !removedEmails.includes(s.email));
    }

    // 3. Add new signers (invited signers that just registered)
    for (const invitedSigner of invitedSigners) {
      // Check if signer already exists (avoid duplicates)
      const exists = finalSigners.some((s: any) => s.email === invitedSigner.email);
      if (!exists) {
        finalSigners.push(invitedSigner);
      }
    }

    // Create settings data object exactly like normal flow
    const settingsData: any = {};

    // Save original state for comparison
    settingsData.originalState = {
      name: wallet.name,
      threshold: wallet.threshold,
      signers: wallet.signers,
      mfaSettings: wallet.metadata?.mfaSettings,
    };

    // Apply changes exactly like normal flow does

    // 1. Name change
    if (walletInvitation.targetWalletName && walletInvitation.targetWalletName !== wallet.name) {
      settingsData.name = walletInvitation.targetWalletName;
    }

    // 2. Signers change - use final signers list (like normal flow: settingsData.signers = signers)
    const signersChanged = JSON.stringify(finalSigners.map((s: any) => s.ethAddress).sort()) !==
        JSON.stringify(wallet.signers.map((s: any) => s.ethAddress).sort());
    if (signersChanged) {
      settingsData.signers = finalSigners;
    }

    // 3. Threshold change
    if (walletInvitation.targetThreshold !== wallet.threshold) {
      settingsData.threshold = walletInvitation.targetThreshold;
    }

    // 4. MFA settings change - use exact same format as normal flow
    if (walletInvitation.targetMfaSettings) {
      settingsData.mfaSettings = walletInvitation.targetMfaSettings;
      console.log('- Applied MFA settings to proposal:', settingsData.mfaSettings);
    }

    // Generate change descriptions using the unified utility function
    const changeResult = generateSettingsChangeDescriptions(settingsData, settingsData.originalState);

    settingsData.changeDescription = changeResult.descriptions.join(', ') || 'Wallet settings updated';

    // Only proceed if there are actual changes
    const settingsKeys = Object.keys(settingsData).filter(key => key !== 'originalState' && key !== 'changeDescription');

    if (settingsKeys.length === 0) {
      log('❌ No changes detected in wallet invitation processing');
      throw new Error('No changes detected in wallet invitation processing');
    }

    log('✅ Changes detected, proceeding with proposal creation');

    // Use the unified api/multisig/messages POST endpoint for consistency
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/multisig/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        walletId: walletInvitation.walletId,
        createdBy: {
          authMethodId: walletInvitation.inviterAuthMethodId,
          ethAddress: walletInvitation.inviterEthAddress,
          email: walletInvitation.inviterEmail,
        },
        message: JSON.stringify(settingsData),
        type: 'walletSettings',
        settingsData,
        signers: wallet.signers, // Pass current signers for email notifications
        sendEmail: true, // Enable automatic email sending
        walletName: wallet.name,
        proposer: walletInvitation.inviterEmail,
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Failed to create proposal via unified API: ${response.status} ${response.statusText}. ${errorData.error || ''}`);
    }

    const result = await response.json();
    if (!result.success) {
      throw new Error(`API returned error: ${result.error || 'Unknown error'}`);
    }

    console.log(`Created settings change proposal ${result.data.id} for wallet ${walletInvitation.walletId} via unified API`);

    return result.data;
  } catch (error) {
    console.error('Failed to create settings change proposal:', error);
    throw error;
  }
}
