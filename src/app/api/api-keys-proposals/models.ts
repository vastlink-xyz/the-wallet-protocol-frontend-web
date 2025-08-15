import mongoose from 'mongoose'

export interface APIKeysProposalCreatedBy {
  authMethodId: string
  ethAddress: string
  email: string
}

export interface APIKeysProposalData {
  type: 'UPDATE_API_KEYS' | 'UPDATE_IPFS_IDS' | 'CREATE_CONFIG' | 'DELETE_CONFIG'
  multisigWalletId: string
  currentApiKeys?: Record<string, string>
  newApiKeys?: Record<string, string>
  currentIpfsIds?: string[]
  newIpfsIds?: string[]
  configId?: string    // For delete operations
  changeDescription?: string
}

export interface APIKeysProposal {
  id: string
  multisigWalletId: string
  status: 'pending' | 'completed' | 'failed' | 'canceled'
  createdAt?: Date
  updatedAt?: Date
  createdBy: APIKeysProposalCreatedBy
  title: string        // Human readable title
  description: string  // Human readable description
  signatures: {
    signer: string     // Address of the signer
    signature: string  // signature
    publicKey: string
  }[]
  proposalData: APIKeysProposalData  // The actual proposal data
  txHash?: string      // Transaction hash after execution
}

const APIKeysProposalSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  multisigWalletId: {
    type: String,
    required: true,
    index: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'canceled'],
    default: 'pending',
    index: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    authMethodId: { type: String, required: true },
    ethAddress: { type: String, required: true },
    email: { type: String, required: true }
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  signatures: [{
    signer: { type: String, required: true },
    signature: { type: String, required: true },
    publicKey: { type: String, required: true }
  }],
  proposalData: {
    type: {
      type: String,
      enum: ['UPDATE_API_KEYS', 'UPDATE_IPFS_IDS', 'CREATE_CONFIG', 'DELETE_CONFIG'],
      required: true
    },
    multisigWalletId: { type: String, required: true },
    currentApiKeys: { type: Map, of: String },
    newApiKeys: { type: Map, of: String },
    currentIpfsIds: [String],
    newIpfsIds: [String],
    configId: String,
    changeDescription: String
  },
  txHash: String
}, {
  timestamps: true
})

// Export model using the same pattern as other models
export const APIKeysProposalModel = mongoose.models.APIKeysProposal || 
  mongoose.model('APIKeysProposal', APIKeysProposalSchema);