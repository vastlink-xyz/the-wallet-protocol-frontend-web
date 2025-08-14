import { NextRequest, NextResponse } from 'next/server'
import { 
  createAPIKeysProposal, 
  getAPIKeysProposalsByWallet, 
  getAPIKeysProposalById,
  addSignatureToAPIKeysProposal,
  updateAPIKeysProposalStatus,
  deleteAPIKeysProposal
} from './storage'
import { APIKeysProposalData, APIKeysProposalCreatedBy } from './models'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const walletId = searchParams.get('walletId')
    const proposalId = searchParams.get('proposalId')

    if (proposalId) {
      // Get single proposal by ID
      const proposal = await getAPIKeysProposalById(proposalId)
      if (!proposal) {
        return NextResponse.json({ success: false, error: 'Proposal not found' }, { status: 404 })
      }
      return NextResponse.json({ success: true, proposal })
    }

    if (walletId) {
      // Get all proposals for a wallet
      const proposals = await getAPIKeysProposalsByWallet(walletId)
      return NextResponse.json({ success: true, proposals })
    }

    return NextResponse.json({ success: false, error: 'Missing walletId or proposalId parameter' }, { status: 400 })
  } catch (error) {
    console.error('Error fetching API keys proposals:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch proposals' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { multisigWalletId, title, description, createdBy, proposalData } = body

    // Validate required fields
    if (!multisigWalletId || !title || !description || !createdBy || !proposalData) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate createdBy structure
    if (!createdBy.authMethodId || !createdBy.ethAddress || !createdBy.email) {
      return NextResponse.json(
        { success: false, error: 'Invalid createdBy data' },
        { status: 400 }
      )
    }

    // Validate proposalData structure
    if (!proposalData.type || !['UPDATE_API_KEYS', 'UPDATE_IPFS_IDS', 'CREATE_CONFIG', 'DELETE_CONFIG'].includes(proposalData.type)) {
      return NextResponse.json(
        { success: false, error: 'Invalid proposal type' },
        { status: 400 }
      )
    }

    const proposal = await createAPIKeysProposal({
      multisigWalletId,
      title,
      description,
      createdBy: createdBy as APIKeysProposalCreatedBy,
      proposalData: proposalData as APIKeysProposalData
    })

    return NextResponse.json({ success: true, proposal })
  } catch (error) {
    console.error('Error creating API keys proposal:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create proposal' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { proposalId, action, ...data } = body

    if (!proposalId || !action) {
      return NextResponse.json(
        { success: false, error: 'Missing proposalId or action' },
        { status: 400 }
      )
    }

    switch (action) {
      case 'addSignature':
        const { signature } = data
        if (!signature || !signature.signer || !signature.signature || !signature.publicKey) {
          return NextResponse.json(
            { success: false, error: 'Invalid signature data' },
            { status: 400 }
          )
        }
        
        const updatedProposal = await addSignatureToAPIKeysProposal(proposalId, signature)
        if (!updatedProposal) {
          return NextResponse.json(
            { success: false, error: 'Proposal not found' },
            { status: 404 }
          )
        }
        
        return NextResponse.json({ success: true, proposal: updatedProposal })

      case 'updateStatus':
        const { status, txHash } = data
        if (!status || !['pending', 'completed', 'failed', 'canceled'].includes(status)) {
          return NextResponse.json(
            { success: false, error: 'Invalid status' },
            { status: 400 }
          )
        }
        
        const statusUpdated = await updateAPIKeysProposalStatus(proposalId, status, txHash)
        if (!statusUpdated) {
          return NextResponse.json(
            { success: false, error: 'Proposal not found' },
            { status: 404 }
          )
        }
        
        return NextResponse.json({ success: true, proposal: statusUpdated })

      default:
        return NextResponse.json(
          { success: false, error: 'Invalid action' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Error updating API keys proposal:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update proposal' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const proposalId = searchParams.get('proposalId')

    if (!proposalId) {
      return NextResponse.json(
        { success: false, error: 'Missing proposalId parameter' },
        { status: 400 }
      )
    }

    const deleted = await deleteAPIKeysProposal(proposalId)
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: 'Proposal not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, message: 'Proposal deleted successfully' })
  } catch (error) {
    console.error('Error deleting API keys proposal:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete proposal' },
      { status: 500 }
    )
  }
}