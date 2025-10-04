import { NextRequest, NextResponse } from 'next/server';
import { getUser, updateUserWalletSettings } from '../../../user/storage';
import { SecurityLayer, SecurityLayerType } from '@/types/security';
import { authenticateMultiProviderSession } from '@/lib/auth/multi-provider-auth';
import { hasRecentOtpAuthentication } from '@/lib/auth/hasRecentOtpAuthentication';
import { SecurityLayerService } from '@/services/securityLayerService';

// DELETE /api/security/layers/remove - Remove or disable a security layer (database only)
export async function DELETE(request: NextRequest) {
  try {
    const { user, token } = await authenticateMultiProviderSession(request);
    
    const body = await request.json();
    const { authMethodId: bodyAuthMethodId, layerType } = body;
    const authMethodId = bodyAuthMethodId || user?.authMethodId;
    
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
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    if (layerType === 'PIN') {
      // require recent OTP/TOTP on session
      const hasRecent = await hasRecentOtpAuthentication(token);
      if (!hasRecent) {
        return NextResponse.json({ requiresMfa: true });
      }
    }
    
    // Validate layer type
    if (!SecurityLayerService.validateLayerType(layerType)) {
      return NextResponse.json(
        { error: `Unsupported layer type: ${layerType}` },
        { status: 400 }
      );
    }
    
    // Get current security layers array
    const securityLayers = user.walletSettings?.securityLayers || [];
    
    // Find the layer to remove
    const targetLayer = SecurityLayerService.findLayerByType(securityLayers, layerType as SecurityLayerType);
    if (!targetLayer) {
      return NextResponse.json(
        { error: `Security layer of type ${layerType} not found` },
        { status: 404 }
      );
    }
    
    const layerIndex = securityLayers.findIndex(layer => layer.id === targetLayer.id);

    
    // Update database security layers
    let updatedSecurityLayers: SecurityLayer[];
    
    if (layerType === 'EMAIL_OTP') {
      // Just disable EMAIL_OTP layers
      updatedSecurityLayers = securityLayers.map(layer => 
        layer.id === targetLayer.id 
          ? { ...layer, isEnabled: false }
          : layer
      );
    } else {
      // Remove PIN, TOTP and WHATSAPP_OTP layers completely
      updatedSecurityLayers = [...securityLayers];
      updatedSecurityLayers.splice(layerIndex, 1);
    }
    
    await updateUserWalletSettings(authMethodId, {
      securityLayers: updatedSecurityLayers
    });
    
    const action = (layerType === 'EMAIL_OTP') ? 'disabled' : 'removed';
    
    // Get updated user data
    const updatedUser = await getUser(authMethodId);
    
    const allLayers = updatedUser?.walletSettings?.securityLayers || [];
    
    return NextResponse.json({ 
      success: true, 
      message: `Security layer ${layerType} ${action} successfully`,
      securityLayers: SecurityLayerService.sortLayersByPriority(allLayers)
    });
    
  } catch (error: any) {
    console.error('Error removing security layer:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to remove security layer' },
      { status: 500 }
    );
  }
}