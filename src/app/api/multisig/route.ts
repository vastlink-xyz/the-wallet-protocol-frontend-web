import { NextRequest } from 'next/server'
import { getWallets, saveWallet, MultisigWallet } from './storage'
import { randomUUID } from 'crypto'
import { getUserByPkpAddress, getUser } from '../user/storage'
import { log } from '@/lib/utils'
import { ethers } from 'ethers'
import { getBtcAddressByPublicKey } from '@/lib/web3/btc'

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
    
    // Email for signer is required
    if (!body.signer1Email) {
      return Response.json(
        { success: false, error: "Email address for signer is required" },
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
    
    // Check for required name field
    if (!body.name) {
      return Response.json(
        { success: false, error: "Wallet name is required" },
        { status: 400 }
      )
    }
    
    // Use provided signers array if available, otherwise fall back to creating one with current user
    const signers = body.signers && Array.isArray(body.signers) && body.signers.length > 0
      ? body.signers
      : [
        {
          ethAddress: body.currentPkp.ethAddress,
          publicKey: body.currentPkp.publicKey,
          email: body.signer1Email,
          authMethodId: body.authMethodId
        }
        ];
    
    // Use provided threshold if available, otherwise default to 1 or minimum required
    const threshold = body.threshold !== undefined 
      ? body.threshold 
      : Math.min(1, signers.length);
    
    // Log the received threshold value and its type
    console.log('Received threshold value:', body.threshold, 'Type:', typeof body.threshold);
    console.log('Using threshold value:', threshold, 'Type:', typeof threshold);
    
    // Generate wallet addresses from the multisig PKP public key
    let addresses = body.addresses;
    if (!addresses && body.multisigPkp && body.multisigPkp.publicKey) {
      const ethAddress = body.multisigPkp.ethAddress
      const btcAddress = getBtcAddressByPublicKey(body.multisigPkp.publicKey);
      addresses = { eth: ethAddress, btc: btcAddress };
    } else if (!addresses) {
      addresses = { eth: '', btc: '' }; // Default empty values if no PKP or addresses provided
    }
    
    const wallet = {
      id: randomUUID(),
      pkp: body.multisigPkp,
      signers: signers,
      threshold: threshold,
      ciphertext: body.ciphertext,
      dataToEncryptHash: body.dataToEncryptHash,
      dataToEncryptHashSignature: body.dataToEncryptHashSignature,
      metadata: body.metadata,
      name: body.name, // Save wallet name from request
      addresses: addresses
    }

    log('Creating multisig wallet with:', {
      totalSigners: signers.length,
      threshold: threshold,
      name: body.name,
      signerEmails: signers.map((s: any) => s.email)
    });

    await saveWallet(wallet)
    return Response.json({ success: true, data: wallet, walletId: wallet.id })
  } catch (error) {
    console.error('Error creating multisig wallet:', error)
    return Response.json(
      { success: false, error: "Failed to create wallet" },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    log('Update wallet request:', body)
    
    if (!body.id) {
      return Response.json(
        { success: false, error: "Wallet ID is required" },
        { status: 400 }
      )
    }
    
    // Verify the wallet exists
    const wallets = await getWallets()
    const existingWallet = wallets.find(w => w.id === body.id)
    
    if (!existingWallet) {
      return Response.json(
        { success: false, error: "Wallet not found" },
        { status: 404 }
      )
    }

    // Check if this is a name-only update
    const isNameOnlyUpdate = 
      body.name !== undefined && 
      body.name !== existingWallet.name && 
      Object.keys(body).length <= 2 && // just id and name
      !body.signers && 
      !body.threshold && 
      !body.ciphertext && 
      !body.metadata;
    
    // Skip signature verification for name-only updates
    if (!isNameOnlyUpdate) {
      // verify signature
      const publicKey = existingWallet.pkp.publicKey
      const messageHash = ethers.utils.hashMessage(body.dataToEncryptHash);
      const recoveredAddress = ethers.utils.recoverAddress(messageHash, body.dataToEncryptHashSignature);
      const expectedAddress = ethers.utils.computeAddress(publicKey);
      const isValid = recoveredAddress.toLowerCase() === expectedAddress.toLowerCase();

      if (!isValid) {
        return Response.json(
          { success: false, error: "Invalid signature" },
          { status: 403 }
        )
      }
    } else {
      log('Name-only update detected, skipping signature verification');
    }

    // Make sure name is always present
    if (body.name === undefined && existingWallet.name) {
      body.name = existingWallet.name;
    } else if (!body.name) {
      return Response.json(
        { success: false, error: "Wallet name is required" },
        { status: 400 }
      )
    }

    // Update wallet with new data
    const updatedWallet = {
      ...existingWallet,
      ...body,
    }
    
    log('Updated wallet settings:', {
      name: updatedWallet.name,
      threshold: updatedWallet.threshold,
      totalSigners: updatedWallet.signers.length,
      signers: updatedWallet.signers.map((s: { email: string, ethAddress: string }) => ({ email: s.email, ethAddress: s.ethAddress })),
      mfaSettings: updatedWallet.metadata?.mfaSettings
    })
    
    await saveWallet(updatedWallet)
    
    return Response.json({ 
      success: true, 
      message: "Wallet updated successfully",
      data: updatedWallet
    })
  } catch (error) {
    console.error('Error updating multisig wallet:', error)
    return Response.json(
      { success: false, error: "Failed to update wallet" },
      { status: 500 }
    )
  }
}
