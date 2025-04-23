import { IRelayPKP } from '@lit-protocol/types'
import { connectToDatabase, MultisigWalletModel, MessageProposalModel } from './models'

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
      totalSigners: wallet.totalSigners
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
      signatures: proposal.signatures
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
      signatures: proposal.signatures
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
