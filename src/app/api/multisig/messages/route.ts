import { NextRequest } from 'next/server'
import { getMessageProposals, saveMessageProposal, getWalletById, getProposalById } from '../storage'
import { randomUUID } from 'crypto'
import { log } from '@/lib/utils'
import { sendTeamNotification } from '@/lib/notification/team-notificatioin'

// Get message proposals for a wallet
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const walletId = searchParams.get('walletId')
    const proposalId = searchParams.get('proposalId')
    
    if (!walletId) {
      return Response.json(
        { success: false, error: "Wallet ID is required" },
        { status: 400 }
      )
    }

    // If proposalId is provided, return only that specific proposal
    if (proposalId) {
      const proposal = await getProposalById(proposalId, walletId)
      if (!proposal) {
        return Response.json(
          { success: false, error: "Proposal not found" },
          { status: 404 }
        )
      }
      return Response.json({ success: true, data: proposal })
    }

    // Otherwise return all proposals for the wallet
    const proposals = await getMessageProposals(walletId)
    return Response.json({ success: true, data: proposals })
  } catch (error) {
    console.error("Error fetching message proposals:", error)
    return Response.json(
      { success: false, error: "Failed to fetch message proposals" },
      { status: 500 }
    )
  }
}

// Create new message proposal
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      walletId,
      createdBy,
      message,
      transactionData,
      signers,
      sendEmail,
      type,
      settingsData,
      walletName,
      proposer,
    } = body

    const proposalId = randomUUID()
    
    // Get current wallet state for originalState reference
    const currentWallet = await getWalletById(walletId);
    
    const proposal = {
      id: proposalId,
      walletId,
      status: 'pending',
      createdBy,
      message,
      signatures: [],
      type: type || 'transaction', // Default to transaction type
      transactionData: type === 'walletSettings' ? undefined : transactionData,
      settingsData: type === 'walletSettings' 
        ? settingsData 
        : currentWallet 
          // For transaction proposals, include originalState so UI components can display correct threshold/signers
          ? { originalState: { threshold: currentWallet.threshold, signers: currentWallet.signers } }
          : undefined
    }

    await saveMessageProposal({...proposal, status: 'pending' as const})
    
    // Send email notifications if requested
    if (sendEmail === true && signers && signers.length > 0) {
      try {
        const walletLink = `${process.env.NEXT_PUBLIC_APP_URL}/wallet/${walletId}/details/proposals?proposalId=${proposalId}`;
        
        // Send notifications based on proposal type
        if (type === 'walletSettings') {
          // Send wallet settings change notifications
          for (const signer of signers) {
            if (signer.email) {
              await sendWalletSettingsNotification({
                to: signer.email,
                proposalId: proposalId,
                settingsData,
                walletLink,
                walletName,
                proposer,
              });
            }
          }
        } else {
          // Send transaction notifications (original behavior)
          for (const signer of signers) {
            if (signer.email) {
              await sendTeamNotification({
                to: signer.email,
                proposalId: proposalId,
                recipientAddress: transactionData?.to || 'N/A',
                amount: transactionData?.value || '0',
                symbol: transactionData?.tokenType,
                walletLink,
                notificationType: 'transaction',
                walletName,
                proposer,
              });
            }
          }
        }
      } catch (emailError) {
        console.error('Failed to send email notifications:', emailError)
        // Continue with the response even if email sending fails
      }
    }
    
    return Response.json({ success: true, data: proposal })
  } catch (error) {
    console.error('Failed to create message proposal:', error)
    return Response.json(
      { success: false, error: "Failed to create message proposal" },
      { status: 500 }
    )
  }
}

// Add signature to message proposal
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { proposalId, signer, signature, walletId, publicKey, status } = body
    
    const proposals = await getMessageProposals(walletId)
    const proposal = proposals.find(p => p.id === proposalId)
    log('proposalId', proposalId, proposals)
    
    if (!proposal) {
      return Response.json(
        { success: false, error: "Message proposal not found" },
        { status: 404 }
      )
    }

    // Add new signature if provided
    if (signature && signer) {
      proposal.signatures.push({
        signer,
        publicKey,
        signature,
      })
    }

    // Update status if explicitly provided
    if (status) {
      proposal.status = status;
    }

    await saveMessageProposal(proposal)
    return Response.json({ success: true, data: proposal })
  } catch {
    return Response.json(
      { success: false, error: "Failed to update message proposal" },
      { status: 500 }
    )
  }
}

// Helper function specifically for wallet settings change notifications
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
