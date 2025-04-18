import { IRelayPKP } from '@lit-protocol/types'
import { promises as fs } from 'fs'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'src/app/api/multisig/data/multisig.json')

export interface MultisigWallet {
  id: string
  pkp: IRelayPKP
  signers: {
    ethAddress: string
    publicKey: string
  }[]
  threshold: number      // Number of signatures required to execute a transaction
  totalSigners: number   // Total number of signers in the wallet
}

interface DB {
  wallets: MultisigWallet[]
  messageProposals: MessageProposal[]
}

export async function getWallets(): Promise<MultisigWallet[]> {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8')
    return JSON.parse(data).wallets
  } catch {
    return []
  }
}

export async function saveWallet(wallet: MultisigWallet): Promise<void> {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8')
    const db: DB = JSON.parse(data)
    db.wallets.push(wallet)
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
  } catch {
    const db: DB = {
      wallets: [wallet],
      messageProposals: []
    }
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
  }
}

export interface MessageProposal {
  id: string
  walletId: string      // Reference to the MultisigWallet
  status: 'pending' | 'completed' | 'failed'
  createdBy: string     // Address of the proposer
  message: string       // The message to be signed
  signatures: {
    signer: string      // Address of the signer
    signature: string   // EIP-191 signature
  }[]
}

export async function getMessageProposals(walletId: string): Promise<MessageProposal[]> {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8')
    const db: DB = JSON.parse(data)
    return db.messageProposals?.filter(msg => msg.walletId === walletId) || []
  } catch {
    return []
  }
}

export async function saveMessageProposal(proposal: MessageProposal): Promise<void> {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8')
    const db: DB = JSON.parse(data)
    db.messageProposals = db.messageProposals || []
    
    // Find the index of the existing proposal
    const index = db.messageProposals.findIndex(p => p.id === proposal.id)
    
    if (index !== -1) {
      // Update existing proposal
      db.messageProposals[index] = proposal
    } else {
      // Add new proposal
      db.messageProposals.push(proposal)
    }
    
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
  } catch {
    const db: DB = {
      wallets: [],
      messageProposals: [proposal]
    }
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
  }
}
