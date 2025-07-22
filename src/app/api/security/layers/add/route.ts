import { NextRequest, NextResponse } from 'next/server';
import { getUser, updateUserWalletSettings } from '../../../user/storage';
import { SecurityLayer, SecurityLayerType } from '@/types/security';
import { authenticateStytchSession } from '../../../stytch/sessionAuth';
import crypto from 'crypto';

// POST /api/security/layers/add - Add a new security layer
export async function POST(request: NextRequest) {
  try {
    const session = await authenticateStytchSession(request);
    
    const body = await request.json();
    const { authMethodId, layerType, config } = body;
    
    if (!authMethodId) {
      return NextResponse.json(
        { error: 'Missing authMethodId in request body' },
        { status: 400 }
      );
    }
    
    if (!layerType || !config) {
      return NextResponse.json(
        { error: 'Missing layerType or config' },
        { status: 400 }
      );
    }
    
    const user = await getUser(authMethodId);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    
    const currentLayers = user.walletSettings?.securityLayers || [];
    
    // Check if layer type already exists (except EMAIL_OTP which can be fallback)
    const existingLayer = currentLayers.find(layer => layer.type === layerType);
    if (existingLayer && layerType !== 'EMAIL_OTP') {
      return NextResponse.json(
        { error: `${layerType} layer already exists` },
        { status: 400 }
      );
    }
    
    const newLayer: SecurityLayer = {
      id: crypto.randomUUID(),
      type: layerType as SecurityLayerType,
      isEnabled: true,
      isFallback: false,
      config: config
    };
    
    const updatedLayers = [...currentLayers, newLayer];
    
    // Update user's security layers
    const updatedUser = await updateUserWalletSettings(authMethodId, {
      securityLayers: updatedLayers
    });
    
    if (!updatedUser) {
      return NextResponse.json(
        { error: 'Failed to add security layer' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      newLayer: newLayer,
      securityLayers: updatedUser.walletSettings?.securityLayers 
    });
  } catch (error) {
    console.error('Error in POST /api/security/layers/add:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}