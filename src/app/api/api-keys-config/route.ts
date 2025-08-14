import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../multisig/models';
import mongoose from 'mongoose';

// API Keys Configuration Schema
const apiKeysConfigSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  multisigWalletId: { type: String, required: true, index: true },
  
  // Encrypted API Keys data
  apiKeysCiphertext: { type: String, required: true },
  apiKeysDataToEncryptHash: { type: String, required: true },
  
  // Encrypted IPFS IDs data
  ipfsIdsCiphertext: { type: String, required: true },
  ipfsIdsDataToEncryptHash: { type: String, required: true },
  
  // Access control conditions (based on current authorized IPFS IDs)
  accessControlConditions: { type: [mongoose.Schema.Types.Mixed], required: true },
  
  // Metadata
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastModifiedBy: { type: String, required: true }, // authMethodId
}, {
  collection: 'api_keys_configs'
});

// Create model if it doesn't exist
const APIKeysConfigModel = mongoose.models.APIKeysConfig || 
  mongoose.model('APIKeysConfig', apiKeysConfigSchema);

export interface APIKeysConfig {
  _id: string;
  multisigWalletId: string;
  
  // Encrypted API Keys data
  apiKeysCiphertext: string;
  apiKeysDataToEncryptHash: string;
  
  // Encrypted IPFS IDs data  
  ipfsIdsCiphertext: string;
  ipfsIdsDataToEncryptHash: string;
  
  // Access control conditions (based on current authorized IPFS IDs)
  accessControlConditions: any[];
  
  // Metadata
  createdAt: string;
  updatedAt: string;
  lastModifiedBy: string;
}

// GET: Retrieve API keys configuration for a specific wallet
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const walletId = searchParams.get('walletId');
    
    if (!walletId) {
      return NextResponse.json({
        success: false,
        error: 'Wallet ID is required'
      }, { status: 400 });
    }

    await connectToDatabase();
    
    const config = await APIKeysConfigModel.findOne({ 
      multisigWalletId: walletId 
    }).lean();

    if (!config) {
      // Return success with null config when no configuration exists
      // This allows the frontend to handle the "no config" state gracefully
      return NextResponse.json({
        success: true,
        config: null,
        message: 'No configuration found for this wallet ID'
      });
    }

    // Return the configuration without decrypted data
    return NextResponse.json({
      success: true,
      config
    });

  } catch (error) {
    console.error('API Keys Config GET error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to retrieve configuration'
    }, { status: 500 });
  }
}

// POST: Create or update API keys configuration
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      _id,
      multisigWalletId,
      apiKeysCiphertext,
      apiKeysDataToEncryptHash,
      ipfsIdsCiphertext,
      ipfsIdsDataToEncryptHash,
      accessControlConditions,
      lastModifiedBy
    } = body;

    // Validation
    if (!multisigWalletId || !apiKeysCiphertext || !apiKeysDataToEncryptHash || 
        !ipfsIdsCiphertext || !ipfsIdsDataToEncryptHash || !accessControlConditions || 
        !lastModifiedBy) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields'
      }, { status: 400 });
    }

    await connectToDatabase();

    // Check if config already exists
    const existingConfig = await APIKeysConfigModel.findOne({ multisigWalletId });
    
    let config;
    if (existingConfig) {
      // Update existing config (without _id field)
      const updateData = {
        apiKeysCiphertext,
        apiKeysDataToEncryptHash,
        ipfsIdsCiphertext,
        ipfsIdsDataToEncryptHash,
        accessControlConditions,
        lastModifiedBy,
        updatedAt: new Date(),
      };
      
      config = await APIKeysConfigModel.findOneAndUpdate(
        { multisigWalletId },
        updateData,
        { new: true }
      );
    } else {
      // Create new config
      const configData = {
        _id: _id || new mongoose.Types.ObjectId().toString(),
        multisigWalletId,
        apiKeysCiphertext,
        apiKeysDataToEncryptHash,
        ipfsIdsCiphertext,
        ipfsIdsDataToEncryptHash,
        accessControlConditions,
        lastModifiedBy,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      config = await APIKeysConfigModel.create(configData);
    }

    return NextResponse.json({
      success: true,
      config: {
        _id: config._id,
        multisigWalletId: config.multisigWalletId,
        apiKeysCiphertext: config.apiKeysCiphertext,
        apiKeysDataToEncryptHash: config.apiKeysDataToEncryptHash,
        ipfsIdsCiphertext: config.ipfsIdsCiphertext,
        ipfsIdsDataToEncryptHash: config.ipfsIdsDataToEncryptHash,
        accessControlConditions: config.accessControlConditions,
        createdAt: config.createdAt,
        updatedAt: config.updatedAt,
        lastModifiedBy: config.lastModifiedBy,
      } as APIKeysConfig
    });

  } catch (error) {
    console.error('API Keys Config POST error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to save configuration'
    }, { status: 500 });
  }
}

// DELETE: Remove API keys configuration
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const walletId = searchParams.get('walletId');
    const configId = searchParams.get('configId');
    
    if (!walletId) {
      return NextResponse.json({
        success: false,
        error: 'Wallet ID is required'
      }, { status: 400 });
    }

    await connectToDatabase();
    
    const query = configId 
      ? { _id: configId, multisigWalletId: walletId }
      : { multisigWalletId: walletId };
    
    const result = await APIKeysConfigModel.findOneAndDelete(query);

    if (!result) {
      return NextResponse.json({
        success: false,
        error: 'Configuration not found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Configuration deleted successfully'
    });

  } catch (error) {
    console.error('API Keys Config DELETE error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to delete configuration'
    }, { status: 500 });
  }
}