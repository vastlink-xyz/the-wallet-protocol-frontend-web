import { IRelayPKP } from '@lit-protocol/types'
import { connectToDatabase, UserModel } from './models'
import crypto from 'crypto'
import { getBtcAddressByPublicKey } from '@/lib/web3/btc'
import { SUPPORTED_TOKEN_SYMBOLS, SUPPORTED_TOKENS_INFO } from '@/lib/web3/token'
import { SecurityLayer } from '@/types/security'
import { AuthProvider, AuthProviderType } from '@/lib/lit/custom-auth'

// Create default security layers - only EMAIL_OTP as fallback
// TOTP and WHATSAPP_OTP layers are created dynamically when user sets them up in Stytch
function createDefaultSecurityLayers(): SecurityLayer[] {
  return [
    {
      id: crypto.randomUUID(),
      type: 'EMAIL_OTP',
      category: 'otp',
      priority: 20,
      isEnabled: true,
      isFallback: true,
      config: {}
    }
  ];
}

export interface UserAddresses {
  eth: string
  btc: string
  [key: string]: string
}

export interface User {
  id: string
  authMethodId: string
  primaryEmail: string
  authProviders: AuthProvider[]
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
    primaryEmail: doc.primaryEmail,
    authProviders: doc.authProviders || [],
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
  primaryEmail,
  authProvider,
  addresses
}: {
  authMethodId: string,
  primaryEmail: string,
  authProvider: {
    providerType: AuthProviderType,
    sub: string,
    email?: string,
    metadata?: any
  },
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
    
    // Create all predefined security layers
    const defaultSecurityLayers = createDefaultSecurityLayers();
    
    const userData = {
      id,
      authMethodId,
      primaryEmail,
      authProviders: [{
        providerType: authProvider.providerType,
        sub: authProvider.sub,
        email: authProvider.email,
        isEnabled: true,
        isPrimary: true, // First provider is always primary
        metadata: authProvider.metadata,
        createdAt: new Date()
      }],
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
  authProvider: {
    providerType: AuthProviderType,
    sub: string,
    email?: string,
    isEnabled: boolean,
    isPrimary: boolean,
    metadata?: any
  }
): Promise<User | null> {
  try {
    await connectToDatabase();
    
    // First check if user exists
    const existingUser = await UserModel.findOne({ authMethodId }).lean();
    
    // If user doesn't exist, create one
    if (!existingUser) {
      if (!authProvider.email) {
        throw new Error('Email is required to create a new user');
      }

      const ethAddress = pkp.ethAddress || ''
      const btcAddress = getBtcAddressByPublicKey(pkp.publicKey) || ''

      const newUser = await createUser({ 
        authMethodId, 
        primaryEmail: authProvider.email,
        authProvider,
        addresses: { eth: ethAddress, btc: btcAddress } 
      });
      
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

// Add additional auth provider to existing user
export async function addAuthProviderToUser(
  authMethodId: string,
  authProvider: {
    providerType: AuthProviderType,
    sub: string,
    email?: string,
    metadata?: any
  }
): Promise<User | null> {
  try {
    await connectToDatabase();
    
    // Check if user exists
    const existingUser = await UserModel.findOne({ authMethodId });
    if (!existingUser) {
      throw new Error(`No user found with authMethodId: ${authMethodId}`);
    }
    
    // Check if this provider already exists for the user
    const providerExists = existingUser.authProviders?.some(
      (provider: any) => provider.providerType === authProvider.providerType && provider.sub === authProvider.sub
    );
    
    if (providerExists) {
      throw new Error(`Provider ${authProvider.providerType} with sub ${authProvider.sub} already exists for this user`);
    }
    
    // Add new auth provider
    const updatedUser = await UserModel.findOneAndUpdate(
      { authMethodId },
      {
        $push: {
          authProviders: {
            providerType: authProvider.providerType,
            sub: authProvider.sub,
            email: authProvider.email,
            isEnabled: true,
            isPrimary: false, // Additional providers are not primary
            metadata: authProvider.metadata,
            createdAt: new Date()
          }
        },
        updatedAt: new Date()
      },
      { new: true }
    ).lean();
    
    return extractUserData(updatedUser);
  } catch (error) {
    console.error('Failed to add auth provider to user:', error);
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
    if (!user || !user.walletSettings || !user.walletSettings.securityLayers) {
      return [];
    }
    
    return user.walletSettings.securityLayers || [];
  } catch (error) {
    console.error('Failed to get user security layers:', error);
    return [];
  }
} 

export async function getUserBySub(sub: string): Promise<User | null> {
  try {
    await connectToDatabase();
    const user = await UserModel.findOne({
      'authProviders.sub': sub
    }).lean();
    return extractUserData(user);
  } catch (error) {
    console.error('Failed to get user by sub:', error);
    return null;
  }
}

/**
 * Helper function to find user by provider email
 * This searches for users where authProviders array contains a provider
 * with the specified type and email
 */
export async function findUserByProviderEmail(providerType: AuthProviderType, email: string) {
  try {
    await connectToDatabase();
    
    const user = await UserModel.findOne({
      'authProviders': {
        $elemMatch: {
          providerType: providerType,
          email: email.toLowerCase(),
          isEnabled: true
        }
      }
    }).lean();

    if (!user) return null;

    // Remove MongoDB internal fields and return clean user data
    const { _id, __v, ...cleanUser } = user as any;
    return cleanUser;

  } catch (error) {
    console.error('Error in findUserByProviderEmail:', error);
    return null;
  }
}