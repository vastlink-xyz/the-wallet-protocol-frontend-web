import { NextRequest } from 'next/server'
import { getMessageProposals, saveMessageProposal } from '../../storage'
import { log } from '@/lib/utils'

// Update message proposal status
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { proposalId, status, walletId, txHash } = body
    
    if (!proposalId || !status || !walletId) {
      return Response.json(
        { success: false, error: "ProposalId, status, and walletId are required" },
        { status: 400 }
      )
    }
    
    const proposals = await getMessageProposals(walletId)
    const proposal = proposals.find(p => p.id === proposalId)
    
    if (!proposal) {
      return Response.json(
        { success: false, error: "Message proposal not found" },
        { status: 404 }
      )
    }

    // Update status
    proposal.status = status
    
    // Save transaction hash if provided
    if (txHash) {
      proposal.txHash = txHash
    }
    
    log('Updating proposal status', {
      proposalId,
      oldStatus: proposal.status,
      newStatus: status,
      txHash: txHash || 'not provided'
    })

    await saveMessageProposal(proposal)
    return Response.json({ 
      success: true, 
      data: proposal 
    })
  } catch (error) {
    console.error('Failed to update proposal status:', error)
    return Response.json(
      { success: false, error: "Failed to update proposal status" },
      { status: 500 }
    )
  }
} 