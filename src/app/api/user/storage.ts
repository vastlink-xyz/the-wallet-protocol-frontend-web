import { IRelayPKP } from '@lit-protocol/types'
import { connectToDatabase, UserModel } from './models'
import crypto from 'crypto'

export interface User {
  id: string
  authMethodId: string
  sessionPkp?: {
    ethAddress: string
    publicKey: string
    tokenId: string
    type: string
  }
  litActionPkp?: {
    ethAddress: string
    publicKey: string
    tokenId: string
    type: string
  }
}

// Helper to safely extract fields from Mongoose documents
function extractUserData(doc: any): User | null {
  if (!doc) return null;
  return {
    id: doc.id || doc._id?.toString(),
    authMethodId: doc.authMethodId,
    sessionPkp: doc.sessionPkp || undefined,
    litActionPkp: doc.litActionPkp || undefined
  };
}

export async function getUser(authMethodId: string): Promise<User | null> {
  try {
    await connectToDatabase();
    const user = await UserModel.findOne({ authMethodId }).lean();
    return extractUserData(user);
  } catch (error) {
    console.error('Failed to get user:', error);
    return null;
  }
}

export async function getUserById(id: string): Promise<User | null> {
  try {
    await connectToDatabase();
    const user = await UserModel.findOne({ id }).lean();
    return extractUserData(user);
  } catch (error) {
    console.error('Failed to get user by id:', error);
    return null;
  }
}

// Find user by PKP ethAddress, either in sessionPkp or litActionPkp
export async function getUserByPkpAddress(ethAddress: string): Promise<{authMethodId: string, pkp: IRelayPKP} | null> {
  try {
    await connectToDatabase();
    
    // Check session PKP
    const userWithSessionPkp = await UserModel.findOne({
      'sessionPkp.ethAddress': ethAddress
    }).exec();
    
    if (userWithSessionPkp) {
      return {
        authMethodId: userWithSessionPkp.authMethodId,
        pkp: {
          ethAddress: userWithSessionPkp.sessionPkp.ethAddress,
          publicKey: userWithSessionPkp.sessionPkp.publicKey,
          tokenId: userWithSessionPkp.sessionPkp.tokenId
        }
      };
    }
    
    // Check lit action PKP
    const userWithLitActionPkp = await UserModel.findOne({
      'litActionPkp.ethAddress': ethAddress
    }).exec();
    
    if (userWithLitActionPkp) {
      return {
        authMethodId: userWithLitActionPkp.authMethodId,
        pkp: {
          ethAddress: userWithLitActionPkp.litActionPkp.ethAddress,
          publicKey: userWithLitActionPkp.litActionPkp.publicKey,
          tokenId: userWithLitActionPkp.litActionPkp.tokenId
        }
      };
    }
    
    return null;
  } catch (error) {
    console.error('Failed to get user by PKP address:', error);
    return null;
  }
}

export async function createUser(authMethodId: string): Promise<User> {
  try {
    await connectToDatabase();
    
    // Generate unique ID for the user
    const id = crypto.randomUUID();
    
    const userData = {
      id,
      authMethodId
    };
    
    const newUser = await UserModel.create(userData);
    return extractUserData(newUser) as User;
  } catch (error) {
    console.error('Failed to create user:', error);
    throw error;
  }
}

export enum PKPType {
  Session = 'session',
  LitAction = 'litAction'
}

export async function addPkpToUser(
  authMethodId: string, 
  pkp: IRelayPKP, 
  pkpType: PKPType
): Promise<User | null> {
  try {
    await connectToDatabase();
    
    // First check if user exists
    const existingUser = await UserModel.findOne({ authMethodId }).lean();
    
    // If user doesn't exist, create one
    if (!existingUser) {
      const newUser = await createUser(authMethodId);
      
      // Prepare update based on PKP type
      const updateField = pkpType === PKPType.Session ? 'sessionPkp' : 'litActionPkp';
      const update = {
        [updateField]: {
          ethAddress: pkp.ethAddress,
          publicKey: pkp.publicKey,
          tokenId: pkp.tokenId,
          type: pkpType
        },
        updatedAt: new Date()
      };
      
      // Handle the new user case
      const updatedUser = await UserModel.findOneAndUpdate(
        { id: newUser.id },
        update,
        { new: true }
      ).lean();
      
      return extractUserData(updatedUser);
    }
    
    // Update existing user with the new PKP
    const updateField = pkpType === PKPType.Session ? 'sessionPkp' : 'litActionPkp';
    const update = {
      [updateField]: {
        ethAddress: pkp.ethAddress,
        publicKey: pkp.publicKey,
        tokenId: pkp.tokenId,
        type: pkpType
      },
      updatedAt: new Date()
    };
    
    const updatedUser = await UserModel.findOneAndUpdate(
      { authMethodId },
      update,
      { new: true }
    ).lean();
    
    return extractUserData(updatedUser);
  } catch (error) {
    console.error('Failed to add PKP to user:', error);
    return null;
  }
}

export async function getUserPkps(authMethodId: string): Promise<{sessionPkp?: IRelayPKP, litActionPkp?: IRelayPKP}> {
  try {
    const user = await getUser(authMethodId);
    if (!user) return {};
    
    const result: {sessionPkp?: IRelayPKP, litActionPkp?: IRelayPKP} = {};
    
    if (user.sessionPkp) {
      result.sessionPkp = {
        ethAddress: user.sessionPkp.ethAddress,
        publicKey: user.sessionPkp.publicKey,
        tokenId: user.sessionPkp.tokenId
      };
    }
    
    if (user.litActionPkp) {
      result.litActionPkp = {
        ethAddress: user.litActionPkp.ethAddress,
        publicKey: user.litActionPkp.publicKey,
        tokenId: user.litActionPkp.tokenId
      };
    }
    
    return result;
  } catch (error) {
    console.error('Failed to get user PKPs:', error);
    return {};
  }
} 