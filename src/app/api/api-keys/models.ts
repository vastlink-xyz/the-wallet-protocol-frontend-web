import mongoose from 'mongoose';

// API Key document interface - minimalist version
export interface APIKeyDocument {
  _id?: string;
  multisigWalletId: string;
  ciphertext: string;
  dataToEncryptHash: string;
  accessControlConditions: any[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose schema for API Keys - minimalist version
const apiKeySchema = new mongoose.Schema({
  multisigWalletId: {
    type: String,
    required: true,
    index: true,
  },
  ciphertext: {
    type: String,
    required: true,
  },
  dataToEncryptHash: {
    type: String,
    required: true,
  },
  accessControlConditions: {
    type: Array,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

// Create compound index for efficient queries
apiKeySchema.index({ multisigWalletId: 1 });
apiKeySchema.index({ createdBy: 1 });

export const APIKey = mongoose.models.APIKey || mongoose.model<APIKeyDocument>('APIKey', apiKeySchema);