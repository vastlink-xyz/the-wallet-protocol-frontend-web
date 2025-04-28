import { NextRequest } from 'next/server'
import { getMessageProposals, saveMessageProposal, getWalletById } from '../storage'
import { randomUUID } from 'crypto'
import { log } from '@/lib/utils'
import axios from 'axios'

// Get message proposals for a wallet
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const walletId = searchParams.get('walletId')
    
    if (!walletId) {
      return Response.json(
        { success: false, error: "Wallet ID is required" },
        { status: 400 }
      )
    }

    const proposals = await getMessageProposals(walletId)
    return Response.json({ success: true, data: proposals })
  } catch {
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
    const { walletId, createdBy, message, transactionData, signers, sendEmail } = body

    const proposalId = randomUUID()
    
    const proposal = {
      id: proposalId,
      walletId,
      status: 'pending',
      createdBy,
      message,
      signatures: [],
      transactionData
    }

    await saveMessageProposal({...proposal, status: 'pending' as const})
    
    // Send email notifications if requested
    if (sendEmail === true && signers && signers.length > 0) {
      try {
        // Get wallet details to create wallet link
        const wallet = await getWalletById(walletId)
        
        // Send notifications to all signers
        for (const signer of signers) {
          if (signer.email) {
            await sendMultisigNotification({
              to: signer.email,
              proposalId: proposalId,
              recipientAddress: transactionData?.to || 'N/A',
              amount: transactionData?.value || '0',
              walletLink: `${process.env.NEXT_PUBLIC_APP_URL}/multisig?walletId=${walletId}`
            })
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

// Helper function to send multisig notification emails
async function sendMultisigNotification({
  to,
  proposalId,
  recipientAddress,
  amount,
  walletLink
}: {
  to: string
  proposalId: string
  recipientAddress: string
  amount: string
  walletLink: string
}) {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/messaging/send-multisig-notification`, {
      to,
      proposalId,
      recipientAddress,
      amount,
      walletLink
    })
    
    return response.data
  } catch (error) {
    console.error('Error sending multisig notification:', error)
    throw error
  }
}
