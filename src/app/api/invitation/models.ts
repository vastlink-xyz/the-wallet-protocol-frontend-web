import mongoose from 'mongoose';
import { connectToDatabase } from '../user/models';

// Schema for pending transactions to unregistered users
const PendingInvitationSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  senderAuthMethodId: { type: String, required: true },
  senderEmail: { type: String, required: true },
  recipientEmail: { type: String, required: true },
  tokenType: { type: String, required: true },
  amount: { type: String, required: true },
  status: {
    type: String,
    enum: ['pending', 'registered', 'completed', 'expired', 'cancelled'],
    default: 'pending'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  expiresAt: { type: Date },
});

// Schema for pending wallet invitations (multisig wallet creation with invites)
const PendingWalletInvitationSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  walletId: { type: String, required: true },
  inviterAuthMethodId: { type: String, required: true },
  inviterEmail: { type: String, required: true },
  inviterEthAddress: { type: String, required: true },
  walletName: { type: String, required: true },

  // List of pending invitees (both registered and unregistered)
  pendingInvitees: [{
    email: { type: String, required: true },
    invitationId: { type: String, required: true }, // Reference to PendingInvitation
    isRegistered: { type: Boolean, required: true, default: false },
    authMethodId: { type: String, default: '' } // Will be filled when user registers
  }],

  // Target wallet configuration after all invitees join
  targetThreshold: { type: Number, required: true },
  targetSignersCount: { type: Number, required: true },

  // Additional target settings for wallet editing (optional)
  targetWalletName: { type: String }, // New wallet name if changed
  targetMfaSettings: { type: mongoose.Schema.Types.Mixed }, // New MFA settings if changed

  // Signers to be removed (for wallet editing)
  signersToRemove: [{ type: mongoose.Schema.Types.Mixed }], // Array of signers to remove

  // Status tracking
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Export models
export const PendingInvitationModel = mongoose.models.PendingInvitation ||
  mongoose.model('PendingInvitation', PendingInvitationSchema);

export const PendingWalletInvitationModel = mongoose.models.PendingWalletInvitation ||
  mongoose.model('PendingWalletInvitation', PendingWalletInvitationSchema);

// Type definitions
export interface PendingInvitation {
  id: string;
  senderAuthMethodId: string;
  senderEmail: string;
  recipientEmail: string;
  tokenType: string;
  amount: string;
  status: 'pending' | 'registered' | 'completed' | 'expired' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date;
}

export interface PendingWalletInvitation {
  id: string;
  walletId: string;
  inviterAuthMethodId: string;
  inviterEmail: string;
  inviterEthAddress: string;
  walletName: string;

  pendingInvitees: {
    email: string;
    invitationId: string;
    isRegistered: boolean;
    authMethodId?: string; // Optional, will be filled when user registers
  }[];

  targetThreshold: number;
  targetSignersCount: number;

  // Additional target settings for wallet editing (optional)
  targetWalletName?: string; // New wallet name if changed
  targetMfaSettings?: any; // New MFA settings if changed

  // Signers to be removed (for wallet editing)
  signersToRemove?: any[]; // Array of signers to remove

  status: 'pending' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}