import { getUser } from '@/app/api/user/storage'
import { NextRequest } from 'next/server'
import { getMessageProposals, getUnsignedProposalsByUser, MessageProposal } from '../../storage'

// Get unsigned message proposals for a user
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const authMethodId = searchParams.get('authMethodId')
    const walletId = searchParams.get('walletId')
    
    if (!authMethodId) {
      return Response.json(
        { success: false, error: "authMethodId is required" },
        { status: 400 }
      )
    }

    // fetch user from authMethodId
    const user = await getUser(authMethodId)
    if (!user || !user.litActionPkp?.ethAddress) {
      // Return empty proposals if user or PKP not found
      return Response.json({ 
        success: true, 
        data: {
          proposals: [],
          count: 0
        }
      })
    }

    const userAddress = user.litActionPkp.ethAddress

    let proposals: MessageProposal[] = []
    
    // If a specific walletId is provided, only check that wallet
    if (walletId) {
      const walletProposals = await getMessageProposals(walletId)
      proposals = walletProposals.filter(proposal => 
        proposal.status === 'pending' && 
        !proposal.signatures.some(sig => sig.signer.toLowerCase() === userAddress.toLowerCase())
      )
    } else {
      // No specific wallet provided, get unsigned proposals across all wallets
      proposals = await getUnsignedProposalsByUser(userAddress)
    }

    // Return the pending proposals that haven't been signed by the user
    return Response.json({ 
      success: true, 
      data: {
        proposals,
        count: proposals.length
      }
    })
  } catch (error) {
    console.error("Error fetching unsigned message proposals:", error)
    return Response.json(
      { success: false, error: "Failed to fetch unsigned message proposals" },
      { status: 500 }
    )
  }
} 