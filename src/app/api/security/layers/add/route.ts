import { NextRequest, NextResponse } from 'next/server';
import { getUser, updateUserWalletSettings } from '../../../user/storage';
import { SecurityLayer, SecurityLayerType } from '@/types/security';
import { authenticateStytchSession } from '../../../stytch/sessionAuth';
import { verifyStytchDataExists } from '../stytchValidation';
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
    
    // Check if layer type already exists
    const existingLayer = currentLayers.find(layer => layer.type === layerType);
    if (existingLayer) {
      // If layer exists but is disabled, enable it instead of creating new one
      if (!existingLayer.isEnabled && (layerType === 'TOTP' || layerType === 'WHATSAPP_OTP' || layerType === 'PIN')) {
        // For Stytch-based layers, verify the data still exists in Stytch
        if (layerType !== 'PIN') {
          const stytchDataExists = await verifyStytchDataExists(session.user_id, layerType);
          if (!stytchDataExists) {
            return NextResponse.json(
              { error: `${layerType} data not found in Stytch. Please set up ${layerType} first.` },
              { status: 400 }
            );
          }
        }

        // Enable the existing layer
        const updatedLayers = currentLayers.map(layer => 
          layer.id === existingLayer.id 
            ? { ...layer, isEnabled: true, config: config }
            : layer
        );

        const updatedUser = await updateUserWalletSettings(authMethodId, {
          securityLayers: updatedLayers
        });

        if (!updatedUser) {
          return NextResponse.json(
            { error: 'Failed to enable security layer' },
            { status: 500 }
          );
        }

        return NextResponse.json({ 
          success: true, 
          updatedLayer: updatedLayers.find(l => l.id === existingLayer.id),
          securityLayers: updatedUser.walletSettings?.securityLayers 
        });
      }
      
      return NextResponse.json(
        { 
          error: 'Security layer configuration already exists',
          layerId: existingLayer.id,
          isEnabled: existingLayer.isEnabled
        },
        { status: 409 }
      );
    }

    // For TOTP and WHATSAPP_OTP, verify they exist in Stytch first
    if (layerType === 'TOTP' || layerType === 'WHATSAPP_OTP') {
      const stytchDataExists = await verifyStytchDataExists(session.user_id, layerType);
      if (!stytchDataExists) {
        return NextResponse.json(
          { error: `${layerType} data not found in Stytch. Please set up ${layerType} first.` },
          { status: 400 }
        );
      }
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