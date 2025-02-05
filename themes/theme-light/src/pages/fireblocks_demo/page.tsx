import { Button } from '@/components/ui/button';
import keyManagementService from '@/services/KeyManagementService';
import { apiService, initFireblocksNCW } from '@/services/KeyManagementService/FireblocksKeyManagementService/fireblocksInstance';
import { useEffect } from 'react';

const mockUserId = '67a34fc3bffd44d0e0a2c4d6'
const mockUsername = 'xlstest@proton.me'

export default function FireblocksDemoPage() {
  // After successful OTP registration/login and JWT generation,
  // this function assigns deviceId to user's wallet and initializes Fireblocks
  const handleVerifyRegisterByUserIdMock = async () => {
    await keyManagementService.signUp({
      username: mockUsername,
      userId: mockUserId,
    })
  }

  const handleGetWallets = async () => {
    const wallets = await apiService.getWallets()
    console.log('wallets', wallets)
  }

  const handleGenerateMPCKeys = async () => {
    await keyManagementService.generateMPCKeys()
  }

  const handleBackup = async () => {
    // todo
  }

  const handleAssetManagement = async () => {
    // todo
  }

  return <div>
    <Button onClick={handleVerifyRegisterByUserIdMock}>Sign up by user id mock</Button>
    <hr />
    <Button onClick={handleGetWallets}>Get wallets</Button>
    <hr />
    <Button onClick={handleGenerateMPCKeys}>Generate MPC keys</Button>
    <hr />
    <Button onClick={handleBackup}>Backup</Button>
    <hr />
    <Button onClick={handleAssetManagement}>Asset management</Button>
  </div>;
}
