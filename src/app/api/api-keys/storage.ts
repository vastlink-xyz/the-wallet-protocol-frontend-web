import { connectToDatabase } from '../user/models';
import { APIKey, APIKeyDocument } from './models';

export interface CreateAPIKeyData {
  multisigWalletId: string;
  ciphertext: string;
  dataToEncryptHash: string;
  accessControlConditions: any[];
  createdBy: string;
}

export interface UpdateAPIKeyData {
  ciphertext?: string;
  dataToEncryptHash?: string;
  accessControlConditions?: any[];
}

export class APIKeyStorage {
  static async createAPIKey(data: CreateAPIKeyData): Promise<APIKeyDocument> {
    await connectToDatabase();
    
    const apiKey = new APIKey(data);
    await apiKey.save();
    return apiKey.toObject();
  }

  static async getAPIKeyById(id: string): Promise<APIKeyDocument | null> {
    await connectToDatabase();
    
    const apiKey = await APIKey.findById(id);
    return apiKey ? apiKey.toObject() : null;
  }

  static async getAPIKeysByWallet(multisigWalletId: string): Promise<APIKeyDocument[]> {
    await connectToDatabase();
    
    const apiKeys = await APIKey.find({
      multisigWalletId
    }).sort({ createdAt: -1 });
    
    return apiKeys.map(key => key.toObject());
  }

  static async updateAPIKey(id: string, data: UpdateAPIKeyData): Promise<APIKeyDocument | null> {
    await connectToDatabase();
    
    const apiKey = await APIKey.findByIdAndUpdate(
      id,
      { ...data, updatedAt: new Date() },
      { new: true }
    );
    
    return apiKey ? apiKey.toObject() : null;
  }

  static async deleteAPIKey(id: string): Promise<boolean> {
    await connectToDatabase();
    
    const result = await APIKey.findByIdAndDelete(id);
    return !!result;
  }
}