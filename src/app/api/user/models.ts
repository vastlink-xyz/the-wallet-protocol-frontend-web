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

// User Schema
const UserSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Primary user ID (UUID)
  authMethodId: { type: String, required: true, unique: true }, // ID used by Lit Protocol
  primaryEmail: { type: String, required: true, unique: true }, // Primary email
  
  // Support multiple provider authentication info
  authProviders: [{
    providerType: { 
      type: String,
      required: true 
    },
    sub: { type: String, required: true }, // Provider user ID
    email: { type: String }, // Email returned by provider
    isEnabled: { type: Boolean, default: true },
    isPrimary: { type: Boolean, default: false }, // set email as primary login method
    metadata: { type: mongoose.Schema.Types.Mixed }, // Additional info
    createdAt: { type: Date, default: Date.now }
  }],
  
  litActionPkp: {
    ethAddress: String,
    publicKey: String,
    tokenId: String,
    type: { type: String, default: 'litAction' }
  },
  walletSettings: {
    type: mongoose.Schema.Types.Mixed,
    default: {
      dailyWithdrawLimits: {
        BTC: "0.001",
        ETH: "0.001"
      },
      securityLayers: [      // Unified security layers array
        {
          id: "",
          type: "EMAIL_OTP",
          category: "otp",
          priority: 20,
          isEnabled: true,
          isFallback: true,
          config: {}
        }
      ]
    }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  addresses: {
    eth: { type: String },
    btc: { type: String },
  },
});

// Export models
export const UserModel = mongoose.models.User || 
  mongoose.model('User', UserSchema); 