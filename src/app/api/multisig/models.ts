import mongoose from 'mongoose';

// MongoDB connection string
const MONGODB_URI = process.env.NEXT_PUBLIC_DB_CONNECTION_STRING || '';

// MongoDB connection cache
interface MongooseCache {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
}

// Define global mongoose cache
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

// Initialize global cache
const cached: MongooseCache = global.mongoose || { conn: null, promise: null };
global.mongoose = cached;

export async function connectToDatabase(): Promise<mongoose.Connection> {
  // Return existing connection if available
  if (cached.conn) {
    return cached.conn;
  }

  // If no connection but promise exists, wait for it
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    // Create new connection promise
    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then((mongooseInstance) => mongooseInstance.connection);
  }

  // Wait for connection and return
  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.error('Failed to connect to database:', error);
    throw error;
  }
}

// Signer Schema
const SignerSchema = new mongoose.Schema({
  ethAddress: { type: String, required: true },
  publicKey: { type: String, required: true },
  email: { type: String, required: true },
  authMethodId: { type: String }
});

// PKP Schema
const PKPSchema = new mongoose.Schema({
  ethAddress: String,
  publicKey: String,
  tokenId: String
}, { _id: false });

// MultisigWallet Schema
const MultisigWalletSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  pkp: PKPSchema,
  signers: [SignerSchema],
  threshold: { type: Number, default: 2 },
  ciphertext: { type: String, required: true },
  dataToEncryptHash: { type: String, required: true },
  dataToEncryptHashSignature: { type: String, required: true },
  addresses: {
    eth: { type: String },
    btc: { type: String },
  },
  metadata: { 
    type: {
      // Lit Protocol access control conditions
      accessControlConditions: mongoose.Schema.Types.Mixed,
      // MFA settings for wallet operations
      mfaSettings: {
        // Daily transaction limits for different token types
        dailyLimits: { type: Map, of: String, default: new Map() }
      },
      // Additional fields for future extensibility
      _additional: { type: mongoose.Schema.Types.Mixed, default: {} }
    }, 
    required: true,
    _id: false
  },
  name: { type: String, required: true }
}, { timestamps: true });

// Signature Schema
const SignatureSchema = new mongoose.Schema({
  signer: String,
  signature: String,
  publicKey: String
});

// MessageProposal Schema
const MessageProposalSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  walletId: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed', 'failed', 'canceled'], default: 'pending' },
  createdBy: {
    authMethodId: String,
    ethAddress: String,
    email: String,
  },
  message: String,
  signatures: [SignatureSchema],
  type: { 
    type: String, 
    required: true, 
    enum: ['transaction', 'walletSettings'], 
    default: 'transaction' 
  },
  transactionData: {
    tokenType: String,
    to: String,
    value: String,
    data: String
  },
  settingsData: {
    signers: [SignerSchema],
    threshold: Number,
    mfaSettings: {
      // Daily transaction limits for different token types
      dailyLimits: { type: Map, of: String }
    },
    name: String,
    originalState: mongoose.Schema.Types.Mixed,
    changeDescription: String
  },
  txHash: String
}, { timestamps: true });

// Export models
export const MultisigWalletModel = mongoose.models.MultisigWallet || 
  mongoose.model('MultisigWallet', MultisigWalletSchema);

export const MessageProposalModel = mongoose.models.MessageProposal || 
  mongoose.model('MessageProposal', MessageProposalSchema); 