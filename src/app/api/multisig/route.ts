import { NextRequest } from 'next/server'
import { getWallets, saveWallet, MultisigWallet } from './storage'
import { randomUUID } from 'crypto'
import { getUserByPkpAddress, getUser } from '../user/storage'
import { log } from '@/lib/utils'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const signerAddress = searchParams.get('address')
    const walletId = searchParams.get('id')
    
    const wallets = await getWallets()
    
    // If walletId is provided, return the specific wallet
    if (walletId) {
      const wallet = wallets.find(w => w.id === walletId)
      if (!wallet) {
        return Response.json(
          { success: false, error: "Wallet not found" },
          { status: 404 }
        )
      }
      return Response.json({ success: true, data: wallet })
    }
    
    // If no walletId but signerAddress is provided, filter by address
    if (signerAddress) {
      const filteredWallets = wallets.filter(wallet => 
        wallet.signers.some(signer => 
          signer.ethAddress.toLowerCase() === signerAddress.toLowerCase()
        )
      )
      return Response.json({ success: true, data: filteredWallets })
    }
    
    // If neither is provided, return error
    return Response.json(
      { success: false, error: "Either wallet ID or signer address is required" },
      { status: 400 }
    )
  } catch (error) {
    console.error('Error fetching multisig wallets:', error)
    return Response.json(
      { success: false, error: "Failed to fetch wallets" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    log('body', body)
    
    // Email for both signers is required
    if (!body.signer1Email || !body.signer2Email) {
      return Response.json(
        { success: false, error: "Email addresses for both signers are required" },
        { status: 400 }
      )
    }
    
    // Check for required encryption fields
    if (!body.ciphertext || !body.dataToEncryptHash || !body.dataToEncryptHashSignature || !body.metadata) {
      return Response.json(
        { success: false, error: "Encryption data (ciphertext, dataToEncryptHash, dataToEncryptHashSignature, metadata) is required" },
        { status: 400 }
      )
    }
    
    const wallet = {
      id: randomUUID(),
      pkp: body.multisigPkp,
      signers: [
        {
          ethAddress: body.currentPkp.ethAddress,
          publicKey: body.currentPkp.publicKey,
          email: body.signer1Email
        },
        {
          ethAddress: body.signer2.ethAddress,
          publicKey: body.signer2.publicKey,
          email: body.signer2Email
        }
      ],
      threshold: 2,           // Currently fixed to 2
      totalSigners: 2,        // Currently fixed to 2
      ciphertext: body.ciphertext,
      dataToEncryptHash: body.dataToEncryptHash,
      dataToEncryptHashSignature: body.dataToEncryptHashSignature,
      metadata: body.metadata
    }

    await saveWallet(wallet)
    return Response.json({ success: true, data: wallet })
  } catch (error) {
    console.error('Error creating multisig wallet:', error)
    return Response.json(
      { success: false, error: "Failed to create wallet" },
      { status: 500 }
    )
  }
}
