import { IRelayPKP } from '@lit-protocol/types'
import { connectToDatabase, MultisigWalletModel, MessageProposalModel } from './models'
import { TokenType } from '@/lib/web3/token'

export interface MultisigWalletAddresses {
  eth: string
  btc: string
  [key: string]: string
}

// MFA settings interface
export interface MFASettings {
  dailyLimits: Record<TokenType, string>;
}

export interface MessageProposalCreatedBy {
  authMethodId: string
  ethAddress: string
  email: string
}

// Multisig wallet metadata interface
export interface MultisigWalletMetadata {
  accessControlConditions: any; // Lit Protocol access control conditions
  mfaSettings: MFASettings;
  name: string;
  [key: string]: any; // Preserve extensibility
}

export interface MultisigWallet {
  id: string
  pkp: IRelayPKP
  signers: {
    ethAddress: string
    publicKey: string
    email: string
    authMethodId: string
  }[]
  threshold: number      // Number of signatures required to execute a transaction
  ciphertext: string     // Encrypted data
  dataToEncryptHash: string // Hash of the data that was encrypted
  dataToEncryptHashSignature: string // Signature of the dataToEncryptHash
  metadata: MultisigWalletMetadata // More specific type instead of Record<string, any>
  name: string          // Wallet name
  addresses: MultisigWalletAddresses
}

export interface MessageProposal {
  id: string
  walletId: string      // Reference to the MultisigWallet
  status: 'pending' | 'completed' | 'failed'
  createdAt?: Date
  updatedAt?: Date
  createdBy: MessageProposalCreatedBy     // Address of the proposer
  message: string       // The message to be signed
  signatures: {
    signer: string      // Address of the signer
    signature: string   // signature
    publicKey: string
  }[]
  type?: 'transaction' | 'walletSettings'  // Proposal type
  transactionData?: {   // Transaction data for blockchain transactions
    tokenType: TokenType
    to: string
    value: string
    data: string
  }
  settingsData?: {     // Wallet settings change data
    signers?: {
      ethAddress: string
      publicKey: string
      email: string
      authMethodId?: string
    }[]
    threshold?: number
    mfaSettings?: MFASettings
    name?: string       // Wallet name
    originalState?: any  // Original wallet state before changes
    changeDescription?: string  // Description of changes for display
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
      ciphertext: wallet.ciphertext,
      dataToEncryptHash: wallet.dataToEncryptHash,
      dataToEncryptHashSignature: wallet.dataToEncryptHashSignature,
      metadata: wallet.metadata,
      name: wallet.name,
      addresses: wallet.addresses
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
    // Convert Mongoose objects to MessageProposal type while preserving all original fields
    return proposals as unknown as MessageProposal[];
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
    
    return proposal as unknown as MessageProposal;
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
      ciphertext: typedWallet.ciphertext,
      dataToEncryptHash: typedWallet.dataToEncryptHash,
      dataToEncryptHashSignature: typedWallet.dataToEncryptHashSignature,
      metadata: typedWallet.metadata,
      name: typedWallet.name,
      addresses: typedWallet.addresses
    };
  } catch (error) {
    console.error('Failed to get wallet by ID:', error);
    return null;
  }
}
