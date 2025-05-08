import { IRelayPKP } from '@lit-protocol/types'
import { connectToDatabase, MultisigWalletModel, MessageProposalModel } from './models'

export interface MultisigWallet {
  id: string
  pkp: IRelayPKP
  signers: {
    ethAddress: string
    publicKey: string
    email: string
  }[]
  threshold: number      // Number of signatures required to execute a transaction
  totalSigners: number   // Total number of signers in the wallet
  ciphertext: string     // Encrypted data
  dataToEncryptHash: string // Hash of the data that was encrypted
  dataToEncryptHashSignature: string // Signature of the dataToEncryptHash
  metadata: Record<string, any> // Additional metadata as JSON
}

export interface MessageProposal {
  id: string
  walletId: string      // Reference to the MultisigWallet
  status: 'pending' | 'completed' | 'failed'
  createdBy: string     // Address of the proposer
  message: string       // The message to be signed
  signatures: {
    signer: string      // Address of the signer
    signature: string   // signature
    publicKey: string
  }[]
  type?: 'transaction' | 'walletSettings'  // Proposal type
  transactionData?: {   // Transaction data for blockchain transactions
    to: string
    value: string
    data: string
  }
  settingsData?: {     // Wallet settings change data
    signers?: {
      ethAddress: string
      publicKey: string
      email: string
    }[]
    threshold?: number
    totalSigners?: number
    mfaSettings?: {
      phoneNumber?: string
      dailyLimit?: string
    }
  }
  txHash?: string       // Transaction hash after execution
}

export async function getWallets(): Promise<MultisigWallet[]> {
  try {
    await connectToDatabase();
    const wallets = await MultisigWalletModel.find({}).lean();
    return wallets.map(wallet => ({
      id: wallet.id,
      pkp: wallet.pkp as IRelayPKP,
      signers: wallet.signers,
      threshold: wallet.threshold,
      totalSigners: wallet.totalSigners,
      ciphertext: wallet.ciphertext,
      dataToEncryptHash: wallet.dataToEncryptHash,
      dataToEncryptHashSignature: wallet.dataToEncryptHashSignature,
      metadata: wallet.metadata
    }));
  } catch (error) {
    console.error('Failed to get wallets:', error);
    return [];
  }
}

export async function saveWallet(wallet: MultisigWallet): Promise<void> {
  try {
    await connectToDatabase();
    await MultisigWalletModel.findOneAndUpdate(
      { id: wallet.id }, 
      wallet, 
      { upsert: true, new: true }
    );
  } catch (error) {
    console.error('Failed to save wallet:', error);
    throw error;
  }
}

export async function getMessageProposals(walletId: string): Promise<MessageProposal[]> {
  try {
    await connectToDatabase();
    const proposals = await MessageProposalModel.find({ walletId }).lean();
    return proposals.map(proposal => ({
      id: proposal.id,
      walletId: proposal.walletId,
      status: proposal.status as 'pending' | 'completed' | 'failed',
      createdBy: proposal.createdBy,
      message: proposal.message,
      signatures: proposal.signatures,
      type: proposal.type as 'transaction' | 'walletSettings',
      transactionData: proposal.transactionData,
      settingsData: proposal.settingsData,
      txHash: proposal.txHash
    }));
  } catch (error) {
    console.error('Failed to get message proposals:', error);
    return [];
  }
}

export async function getProposalById(proposalId: string, walletId: string): Promise<MessageProposal | null> {
  try {
    await connectToDatabase();
    const proposal = await MessageProposalModel.findOne({ id: proposalId, walletId }).exec();
    
    if (!proposal) return null;
    
    return {
      id: proposal.id,
      walletId: proposal.walletId,
      status: proposal.status as 'pending' | 'completed' | 'failed',
      createdBy: proposal.createdBy,
      message: proposal.message,
      signatures: proposal.signatures,
      type: proposal.type as 'transaction' | 'walletSettings',
      transactionData: proposal.transactionData,
      settingsData: proposal.settingsData,
      txHash: proposal.txHash
    };
  } catch (error) {
    console.error('Failed to get proposal by ID:', error);
    return null;
  }
}

export async function saveMessageProposal(proposal: MessageProposal): Promise<void> {
  try {
    await connectToDatabase();
    await MessageProposalModel.findOneAndUpdate(
      { id: proposal.id }, 
      proposal, 
      { upsert: true, new: true }
    );
  } catch (error) {
    console.error('Failed to save message proposal:', error);
    throw error;
  }
}

export async function getWalletById(walletId: string): Promise<MultisigWallet | null> {
  try {
    await connectToDatabase();
    const wallet = await MultisigWalletModel.findOne({ id: walletId }).lean();
    
    if (!wallet) return null;
    
    const typedWallet = wallet as any;
    
    return {
      id: typedWallet.id,
      pkp: typedWallet.pkp as IRelayPKP,
      signers: typedWallet.signers,
      threshold: typedWallet.threshold,
      totalSigners: typedWallet.totalSigners,
      ciphertext: typedWallet.ciphertext,
      dataToEncryptHash: typedWallet.dataToEncryptHash,
      dataToEncryptHashSignature: typedWallet.dataToEncryptHashSignature,
      metadata: typedWallet.metadata
    };
  } catch (error) {
    console.error('Failed to get wallet by ID:', error);
    return null;
  }
}
