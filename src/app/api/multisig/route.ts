import { NextRequest } from 'next/server'
import { getWallets, saveWallet } from './storage'
import { randomUUID } from 'crypto'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const signerAddress = searchParams.get('address')
    
    if (!signerAddress) {
      return Response.json(
        { success: false, error: "Signer address is required" },
        { status: 400 }
      )
    }

    const wallets = await getWallets()
    // Filter wallets where the provided address is one of the signers
    const filteredWallets = wallets.filter(wallet => 
      wallet.signers.some(signer => 
        signer.ethAddress.toLowerCase() === signerAddress.toLowerCase()
      )
    )

    return Response.json({ success: true, data: filteredWallets })
  } catch {
    return Response.json(
      { success: false, error: "Failed to fetch wallets" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const wallet = {
      id: randomUUID(),
      pkp: body.multisigPkp,
      signers: [
        {
          ethAddress: body.currentPkp.ethAddress,
          publicKey: body.currentPkp.publicKey
        },
        body.signer2
      ],
      threshold: 2,           // Currently fixed to 2
      totalSigners: 2         // Currently fixed to 2
    }

    await saveWallet(wallet)
    return Response.json({ success: true, data: wallet })
  } catch {
    return Response.json(
      { success: false, error: "Failed to create wallet" },
      { status: 500 }
    )
  }
}
