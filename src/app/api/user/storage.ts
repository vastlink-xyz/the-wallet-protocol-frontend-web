import { IRelayPKP } from '@lit-protocol/types'
import { connectToDatabase, UserModel } from './models'
import crypto from 'crypto'
import { getBtcAddressByPublicKey } from '@/lib/web3/btc'
import { SUPPORTED_TOKEN_SYMBOLS, SUPPORTED_TOKENS_INFO } from '@/lib/web3/token'
import { SecurityLayer } from '@/types/security'

export interface UserAddresses {
  eth: string
  btc: string
  [key: string]: string
}

export interface User {
  id: string
  authMethodId: string
  email: string
  litActionPkp?: {
    ethAddress: string
    publicKey: string
    tokenId: string
    type: string
  }
  walletSettings?: {
    dailyWithdrawLimits: Record<string, string>
    securityLayers: SecurityLayer[]
  }
  addresses: UserAddresses
}

// Helper to safely extract fields from Mongoose documents
function extractUserData(doc: any): User | null {
  if (!doc) return null;
  return {
    id: doc.id || doc._id?.toString(),
    authMethodId: doc.authMethodId,
    email: doc.email,
    litActionPkp: doc.litActionPkp || undefined,
    walletSettings: doc.walletSettings || undefined,
    addresses: doc.addresses || undefined
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

// Find user by PKP ethAddress, only in litActionPkp
export async function getUserByPkpAddress(ethAddress: string): Promise<{authMethodId: string, pkp: IRelayPKP} | null> {
  try {
    await connectToDatabase();
    
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

export async function getAllUsers(): Promise<User[]> {
  try {
    await connectToDatabase();
    const users = await UserModel.find({}).lean();
    return users.map(user => extractUserData(user)).filter((user): user is User => user !== null);
  } catch (error) {
    console.error('Failed to get all users:', error);
    return [];
  }
}

export async function createUser({
  authMethodId,
  email,
  addresses
}: {
  authMethodId: string,
  email: string,
  addresses?: UserAddresses
}): Promise<User> {
  try {
    await connectToDatabase();
    
    // Generate unique ID for the user
    const id = crypto.randomUUID();
    
    const dailyWithdrawLimits: Record<string, string> = {};
    SUPPORTED_TOKEN_SYMBOLS.forEach((token) => {
      dailyWithdrawLimits[token] = SUPPORTED_TOKENS_INFO[token].defaultWithdrawLimit;
    });
    
    // Create default Email OTP security layer as fallback
    const defaultSecurityLayers: SecurityLayer[] = [
      {
        id: crypto.randomUUID(),
        type: 'EMAIL_OTP',
        isEnabled: true,
        isFallback: true,
        config: {}
      }
    ];
    
    const userData = {
      id,
      authMethodId,
      email,
      addresses,
      walletSettings: {
        dailyWithdrawLimits,
        securityLayers: defaultSecurityLayers
      }
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
  pkpType: PKPType,
  email?: string
): Promise<User | null> {
  try {
    await connectToDatabase();
    
    // First check if user exists
    const existingUser = await UserModel.findOne({ authMethodId }).lean();
    
    // If user doesn't exist, create one
    if (!existingUser) {
      if (!email) {
        throw new Error('Email is required to create a new user');
      }

      const ethAddress = pkp.ethAddress || ''
      const btcAddress = getBtcAddressByPublicKey(pkp.publicKey) || ''

      const newUser = await createUser({ authMethodId, email, addresses: { eth: ethAddress, btc: btcAddress } });
      
      // Prepare update based on PKP type
      const updateField = 'litActionPkp';
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
    const updateField = 'litActionPkp';
    const update = {
      [updateField]: {
        ethAddress: pkp.ethAddress,
        publicKey: pkp.publicKey,
        tokenId: pkp.tokenId,
        type: pkpType
      },
      updatedAt: new Date()
    } as any;

    if (pkpType === PKPType.LitAction) {
      update.addresses = {
        eth: pkp.ethAddress,
        btc: getBtcAddressByPublicKey(pkp.publicKey) || ''
      }
    }
    
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

export async function getUserPkps(authMethodId: string): Promise<{litActionPkp?: IRelayPKP}> {
  try {
    const user = await getUser(authMethodId);
    if (!user) return {};
    
    const result: {litActionPkp?: IRelayPKP} = {};

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

export async function updateUserWalletSettings(
  authMethodId: string,
  walletSettings: Partial<User['walletSettings']>
): Promise<User | null> {
  try {
    await connectToDatabase();
    
    // Ensure the user exists
    const existingUser = await UserModel.findOne({ authMethodId });
    if (!existingUser) {
      console.error(`No user found with authMethodId: ${authMethodId}`);
      return null;
    }
    
    // Update the wallet settings using $set with nested fields
    const update = {
      $set: {
        ...(walletSettings?.dailyWithdrawLimits && {
          'walletSettings.dailyWithdrawLimits': {
            ...(existingUser.walletSettings?.dailyWithdrawLimits || {}),
            ...walletSettings.dailyWithdrawLimits
          }
        }),
        ...(walletSettings?.securityLayers && {
          'walletSettings.securityLayers': walletSettings.securityLayers
        }),
        updatedAt: new Date()
      }
    };
    
    const updatedUser = await UserModel.findOneAndUpdate(
      { authMethodId },
      update,
      { new: true }
    ).lean();
    
    return extractUserData(updatedUser);
  } catch (error) {
    console.error('Failed to update user wallet settings:', error);
    return null;
  }
}

export async function getUserSecurityLayers(authMethodId: string): Promise<SecurityLayer[]> {
  try {
    const user = await getUser(authMethodId);
    if (!user || !user.walletSettings?.securityLayers) {
      return [];
    }
    
    // Return enabled layers in array order (index as execution order)
    return user.walletSettings.securityLayers.filter(layer => layer.isEnabled);
  } catch (error) {
    console.error('Failed to get user security layers:', error);
    return [];
  }
} 