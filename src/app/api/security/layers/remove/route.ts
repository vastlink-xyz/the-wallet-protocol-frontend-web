import { NextRequest, NextResponse } from 'next/server';
import { getUser, updateUserWalletSettings } from '../../../user/storage';
import { SecurityLayerType } from '@/types/security';
import { authenticateStytchSession } from '../../../stytch/sessionAuth';

// DELETE /api/security/layers/remove - Remove or disable a security layer (database only)
export async function DELETE(request: NextRequest) {
  try {
    await authenticateStytchSession(request);
    
    const body = await request.json();
    const { authMethodId, layerType } = body;
    
    if (!authMethodId) {
      return NextResponse.json(
        { error: 'Missing authMethodId in request body' },
        { status: 400 }
      );
    }
    
    if (!layerType) {
      return NextResponse.json(
        { error: 'Missing layerType in request body' },
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
    
    // Find the layer to remove
    const layerIndex = currentLayers.findIndex(layer => layer.type === layerType);
    if (layerIndex === -1) {
      return NextResponse.json(
        { error: `Security layer of type ${layerType} not found` },
        { status: 404 }
      );
    }
    
    const targetLayer = currentLayers[layerIndex];
    
    // Update database securityLayers
    // For EMAIL_OTP layers, we disable them instead of removing completely
    // For PIN, TOTP and WHATSAPP_OTP, we can remove them since they can be re-created
    if (layerType === 'EMAIL_OTP') {
      // Just disable EMAIL_OTP layers
      targetLayer.isEnabled = false;
      targetLayer.isFallback = false;
    } else {
      // Remove PIN, TOTP and WHATSAPP_OTP layers completely
      currentLayers.splice(layerIndex, 1);
    }
    
    // Update the user's security layers
    const updatedSettings = {
      ...user.walletSettings,
      securityLayers: currentLayers
    };
    
    await updateUserWalletSettings(authMethodId, updatedSettings);
    
    const action = (layerType === 'EMAIL_OTP') ? 'disabled' : 'removed';
    
    return NextResponse.json({ 
      success: true, 
      message: `Security layer ${layerType} ${action} successfully`,
      securityLayers: currentLayers
    });
    
  } catch (error: any) {
    console.error('Error removing security layer:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to remove security layer' },
      { status: 500 }
    );
  }
}