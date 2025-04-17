import { IRelayPKP } from '@lit-protocol/types'
import { promises as fs } from 'fs'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'src/app/api/multisig/data/multisig.json')

export interface MultisigWallet {
  id: string
  pkp: IRelayPKP
  createdAt: string
  signers: {
    ethAddress: string
    publicKey: string
  }[]
  threshold: number      // Number of signatures required to execute a transaction
  totalSigners: number   // Total number of signers in the wallet
}

interface DB {
  wallets: MultisigWallet[]
  transactions: any[]
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
      transactions: []
    }
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
  }
}
