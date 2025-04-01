import { useState } from 'react';
import { useUserInfo } from '@/hooks/user/useUserInfo';
import keyManagementService from '@/services/KeyManagementService';
import { apiService } from '@/services/KeyManagementService/FireblocksKeyManagementService/fireblocksInstance';
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'react-toastify';
import { loadDeviceId } from '@/services/KeyManagementService/FireblocksKeyManagementService/deviceId';

interface FireblocksHooksProps {
  onAddressGenerated?: (address: string) => void;
  onError?: (error: any) => void;
}

export const useFireblocksHooks = ({ onAddressGenerated, onError }: FireblocksHooksProps = {}) => {
  // Using useUserInfo without redirectOnError, handling errors manually
  const { data: userInfo, isFetched: userInfoFetched } = useUserInfo({
    onError: (error) => {
      console.error('Failed to fetch user info:', error);
      onError?.(error);
    }
  });
  const { getAccessTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(false);
  const [ethAddress, setEthAddress] = useState<string | null>(null);

  // Register Fireblocks and initialize
  const registerFireblocks = async () => {
    try {
      setLoading(true);
      
      if (!userInfoFetched || !userInfo) {
        throw new Error('User info not available');
      }

      if (!userInfo.walletId) {
        // Register Fireblocks user
        await keyManagementService.signUp({
          username: userInfo.email,
          sub: userInfo.sub,
        });
      } 

      // Init fireblocks instance
      const deviceId = loadDeviceId(userInfo.sub)
      if (!deviceId) {
        console.error('Device ID not found for user:', userInfo.sub)
        throw new Error('Device ID not found')
      }
      await keyManagementService.initFireblocksNCWInstance(deviceId)
      
      // Generate MPC keys
      await keyManagementService.generateMPCKeys();
      
      // Add ETH asset
      await addEthAsset();
      
      toast.success('Successfully registered with Fireblocks');
    } catch (error) {
      console.error('Failed to register with Fireblocks:', error);
      toast.error('Failed to register with Fireblocks');
      onError?.(error);
    } finally {
      setLoading(false);
    }
  };

  // Add ETH asset and get address
  const addEthAsset = async () => {
    try {
      if (!userInfoFetched || !userInfo) {
        throw new Error('User info not available');
      }
      
      const deviceId = loadDeviceId(userInfo.sub);
      if (!deviceId) {
        throw new Error('Device ID not found');
      }
      
      // Account ID default is 0
      const accountId = 0;
      // Using Base Sepolia testnet
      const assetId = 'BASECHAIN_ETH_TEST5';
      
      // Add asset
      await apiService.addAsset(deviceId, accountId, assetId);
      
      // Get address
      const addressResponse = await apiService.getAddress(deviceId, accountId, assetId);
      
      if (addressResponse && addressResponse.address) {
        setEthAddress(addressResponse.address);
        onAddressGenerated?.(addressResponse.address);
        return addressResponse.address;
      } else {
        throw new Error('Failed to get ETH address');
      }
    } catch (error) {
      console.error('Failed to add ETH asset:', error);
      toast.error('Failed to add ETH asset');
      onError?.(error);
      return null;
    }
  };

  // Check if user already has a Fireblocks wallet
  const checkExistingWallet = async () => {
    try {
      if (!userInfoFetched || !userInfo) {
        return false;
      }
      
      const deviceId = loadDeviceId(userInfo.sub);
      if (!deviceId) {
        return false;
      }
      
      // Check wallet status
      const keysStatus = await keyManagementService.config.fireblocksNCWInstance?.getKeysStatus();
      
      // Check if ready based on the actual keysStatus structure
      return keysStatus !== undefined && Object.keys(keysStatus).length > 0;
    } catch (error) {
      console.error('Failed to check wallet status:', error);
      return false;
    }
  };

  // Get wallet details
  const getWalletDetails = async () => {
    try {
      setLoading(true);
      
      if (!userInfoFetched || !userInfo) {
        throw new Error('User info not available');
      }
      
      const deviceId = loadDeviceId(userInfo.sub);
      if (!deviceId) {
        throw new Error('Device ID not found');
      }
      
      // Get wallet information
      const wallets = await apiService.getWallets();
      // Get account information
      const accounts = await apiService.getAccounts(deviceId);
      // Get asset list
      const assets = await apiService.getAssets(deviceId, 0);
      
      return { wallets, accounts, assets };
    } catch (error) {
      console.error('Failed to get wallet details:', error);
      onError?.(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    ethAddress,
    registerFireblocks,
    addEthAsset,
    checkExistingWallet,
    getWalletDetails,
    userInfo,
    userInfoFetched
  };
};
