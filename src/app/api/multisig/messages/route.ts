import { NextRequest } from 'next/server'
import { getMessageProposals, saveMessageProposal } from '../storage'
import { randomUUID } from 'crypto'
import { log } from '@/lib/utils'

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
    const { walletId, createdBy, message } = body

    const proposal = {
      id: randomUUID(),
      walletId,
      status: 'pending',
      createdBy,
      message,
      signatures: []
    }

    await saveMessageProposal({...proposal, status: 'pending' as const})
    return Response.json({ success: true, data: proposal })
  } catch {
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
