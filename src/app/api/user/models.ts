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
  id: { type: String, required: true, unique: true },
  authMethodId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  // Instead of an array of PKPs, we define specific PKP fields for different types
  sessionPkp: {
    ethAddress: String,
    publicKey: String,
    tokenId: String,
    type: { type: String, default: 'session' }
  },
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
      }
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