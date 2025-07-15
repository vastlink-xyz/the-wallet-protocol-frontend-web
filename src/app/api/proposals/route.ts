import { NextRequest } from 'next/server'
import { connectToDatabase, MessageProposalModel } from '../multisig/models'

// Get proposals with optional filtering by status and userAddress
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get('id')
    const status = searchParams.get('status')
    const userAddress = searchParams.get('userAddress')
    
    await connectToDatabase()
    
    // If userAddress is provided, get proposals from user's team wallets
    if (userAddress) {
      // Import getWallets to check user's wallets
      const { getWallets } = await import('../multisig/storage')
      const wallets = await getWallets()

      // Get wallet IDs where user is a signer (team wallets)
      const userWalletIds = wallets
        .filter(wallet => 
          wallet.signers.some(signer => 
            signer.ethAddress.toLowerCase() === userAddress.toLowerCase()
          )
        )
        .map(wallet => wallet.id)

      // Build query object
      const query: any = {
        walletId: { $in: userWalletIds }
      }

      if (id) {
        query.id = id
      }

      if (status) {
        query.status = status
      }

      // Get proposals from user's team wallets
      const proposals = await MessageProposalModel.find(query).sort({ createdAt: -1 }).lean()

      return Response.json({ success: true, data: proposals })
    }

    // If no userAddress, build basic query
    const query: any = {}
    if (id) {
      query.id = id
    }
    if (status) {
      query.status = status
    }

    // Get all proposals (optionally filtered by status)
    const proposals = await MessageProposalModel.find(query).sort({ createdAt: -1 }).lean()

    return Response.json({ success: true, data: proposals })
  } catch (error) {
    console.error("Error fetching proposals:", error)
    return Response.json(
      { success: false, error: "Failed to fetch proposals" },
      { status: 500 }
    )
  }
}