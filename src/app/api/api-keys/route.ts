import { NextRequest, NextResponse } from 'next/server';
import { APIKeyStorage } from './storage';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const walletId = searchParams.get('walletId');
    const apiKeyId = searchParams.get('id');

    if (apiKeyId) {
      // Get specific API key
      const apiKey = await APIKeyStorage.getAPIKeyById(apiKeyId);
      if (!apiKey) {
        return NextResponse.json({ error: 'API key not found' }, { status: 404 });
      }
      
      return NextResponse.json({ 
        success: true, 
        apiKey
      });
    }

    if (walletId) {
      // Get API keys for specific wallet
      const apiKeys = await APIKeyStorage.getAPIKeysByWallet(walletId);
      
      return NextResponse.json({ 
        success: true, 
        apiKeys
      });
    }

    return NextResponse.json({ error: 'walletId or id parameter required' }, { status: 400 });

  } catch (error) {
    console.error('API Key retrieval error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve API keys', details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      multisigWalletId, 
      ciphertext, 
      dataToEncryptHash, 
      accessControlConditions,
      createdBy
    } = body;

    // Validate required fields
    if (!multisigWalletId || !ciphertext || !dataToEncryptHash || !accessControlConditions || !createdBy) {
      return NextResponse.json(
        { error: 'Missing required fields: multisigWalletId, ciphertext, dataToEncryptHash, accessControlConditions, createdBy' },
        { status: 400 }
      );
    }

    const apiKey = await APIKeyStorage.createAPIKey({
      multisigWalletId,
      ciphertext,
      dataToEncryptHash,
      accessControlConditions,
      createdBy
    });

    return NextResponse.json({ 
      success: true, 
      apiKey
    });

  } catch (error) {
    console.error('API Key creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create API key', details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const apiKeyId = searchParams.get('id');

    if (!apiKeyId) {
      return NextResponse.json(
        { error: 'API key ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { ciphertext, dataToEncryptHash, accessControlConditions } = body;

    const updatedAPIKey = await APIKeyStorage.updateAPIKey(apiKeyId, {
      ciphertext,
      dataToEncryptHash,
      accessControlConditions
    });

    if (!updatedAPIKey) {
      return NextResponse.json({ error: 'API key not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      apiKey: updatedAPIKey
    });

  } catch (error) {
    console.error('API Key update error:', error);
    return NextResponse.json(
      { error: 'Failed to update API key', details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const apiKeyId = searchParams.get('id');

    if (!apiKeyId) {
      return NextResponse.json(
        { error: 'API key ID is required' },
        { status: 400 }
      );
    }

    const success = await APIKeyStorage.deleteAPIKey(apiKeyId);

    if (!success) {
      return NextResponse.json({ error: 'API key not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'API key deleted successfully' 
    });

  } catch (error) {
    console.error('API Key deletion error:', error);
    return NextResponse.json(
      { error: 'Failed to delete API key', details: (error as Error).message },
      { status: 500 }
    );
  }
}