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

// Export model
export const PendingInvitationModel = mongoose.models.PendingInvitation || 
  mongoose.model('PendingInvitation', PendingInvitationSchema);

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