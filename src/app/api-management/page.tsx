'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trash2, Plus, Save, Lock, X } from 'lucide-react';
import { toast } from 'react-toastify';
import { litNodeClient } from '@/lib/lit/providers';
import { getAPIKeyManagementIpfsId } from '@/lib/lit/ipfs-id-env';
import { AuthProviderType, getVastbaseAuthMethodType } from '@/lib/lit/custom-auth';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useUserData } from '@/hooks/useUserData';
import { log } from '@/lib/utils';
import { APIKeysProposalsList } from '@/components/APIKeysProposalsList';
import { APIKeysDebugButton } from '@/components/APIKeysDebugButton';
import { litActionContext } from '@/lib/lit';

// Wallet interface for selection
interface MultisigWallet {
  _id: string;
  name: string;
  ethAddress: string;
  createdAt: string;
  threshold?: number;
  signers?: Array<{
    ethAddress: string;
    publicKey: string;
    email: string;
    authMethodId: string;
  }>;
}

// Updated interface for the new architecture
interface APIKeysConfig {
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
  
  // Frontend state (after decryption)
  isDecrypted?: boolean;
  decryptedApiKeys?: Record<string, string>;
  decryptedIpfsIds?: string[];
}

interface EnvironmentVariable {
  key: string;
  value: string;
}

// Generate access control conditions from IPFS IDs array
const generateAccessControlConditions = (ipfsIds: string[]) => {
  if (!ipfsIds || ipfsIds.length === 0) {
    return [];
  }

  if (ipfsIds.length === 1) {
    // Single IPFS ID, return directly
    return [{
      conditionType: 'evmBasic',
      contractAddress: '',
      standardContractType: '',
      chain: 'ethereum',
      method: '',
      parameters: [':currentActionIpfsId'],
      returnValueTest: {
        comparator: '=',
        value: ipfsIds[0]
      }
    }];
  }

  // Multiple IPFS IDs, connect with OR operator
  return ipfsIds.flatMap((ipfsId, index) => {
    const condition = {
      conditionType: 'evmBasic',
      contractAddress: '',
      standardContractType: '',
      chain: 'ethereum',
      method: '',
      parameters: [':currentActionIpfsId'],
      returnValueTest: {
        comparator: '=',
        value: ipfsId
      }
    };
    
    // Add OR operator if not the last condition
    return index < ipfsIds.length - 1 
      ? [condition, { operator: 'or' }]
      : [condition];
  });
};

export default function APIManagementPage() {
  // Updated state management for new architecture
  const [configData, setConfigData] = useState<APIKeysConfig | null>(null);
  const [walletId, setWalletId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Wallet selection state
  const [userWallets, setUserWallets] = useState<MultisigWallet[]>([]);
  const [loadingWallets, setLoadingWallets] = useState(false);
  
  // Environment variables management (derived from decryptedApiKeys)
  const [envVars, setEnvVars] = useState<EnvironmentVariable[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [newKeyValue, setNewKeyValue] = useState('');
  
  // IPFS IDs management (derived from decryptedIpfsIds)
  const [authorizedIpfsIds, setAuthorizedIpfsIds] = useState<string[]>([]);
  const [showAddIpfsForm, setShowAddIpfsForm] = useState(false);
  const [newIpfsId, setNewIpfsId] = useState('');

  // Auth context and user data
  const { getCurrentAccessToken, getCustomAuthSessionSigs, authMethodId } = useAuthContext();
  const { userData } = useUserData();

  // Fetch user's multisig wallets (team wallets they are part of)
  const fetchUserWallets = async () => {
    setLoadingWallets(true);
    try {
      // Check if we have authMethodId
      if (!authMethodId) {
        throw new Error('User not authenticated');
      }

      // First get user data to obtain eth address
      const userResponse = await fetch(`/api/user?authMethodId=${authMethodId}`);
      if (!userResponse.ok) throw new Error('Failed to fetch user data');
      
      const userData = await userResponse.json();
      if (!userData.litActionPkp?.ethAddress) {
        throw new Error('User eth address not found');
      }
      
      const userEthAddress = userData.litActionPkp.ethAddress;
      
      // Now fetch wallets filtered by user's eth address (same as Assets page)
      const response = await fetch(`/api/multisig?address=${userEthAddress}`);
      if (!response.ok) throw new Error('Failed to fetch wallets');
      
      const data = await response.json();
      if (data.success && data.data) {
        // Transform the data to match our interface (data.data contains the wallets with unsignedProposalsCount)
        const walletsData = data.data.map((wallet: any) => ({
          _id: wallet.id,
          name: wallet.name,
          ethAddress: wallet.addresses?.eth || wallet.ethAddress,
          createdAt: wallet.createdAt,
          threshold: wallet.threshold,
          signers: wallet.signers || []
        }));
        setUserWallets(walletsData);
      } else {
        setUserWallets([]);
      }
    } catch (error) {
      console.error('Failed to fetch user wallets:', error);
      toast.error('Failed to load wallets: ' + (error instanceof Error ? error.message : 'Unknown error'));
      setUserWallets([]);
    }
    setLoadingWallets(false);
  };

  // Load wallets on component mount
  useEffect(() => {
    if (authMethodId) {
      fetchUserWallets();
    }
  }, [authMethodId]);

  // Initialize configuration with default data
  const initializeConfig = async () => {
    if (!walletId) {
      toast.error('Please enter a wallet ID first');
      return;
    }

    setIsLoading(true);
    try {
      // Connect to Lit Network
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }

      // Get API Key Management Lit Action IPFS ID for default access control
      const apiKeyManagementIpfsId = await getAPIKeyManagementIpfsId('base58');

      // Prepare default data
      const defaultApiKeys = {
        "EXAMPLE_API_KEY": "your-api-key-here",
      };
      const defaultIpfsIds = [apiKeyManagementIpfsId];

      // Generate access control conditions based on default IPFS ID
      const accessControlConditions = generateAccessControlConditions(defaultIpfsIds);

      // Encrypt API Keys directly on frontend
      const encryptedApiKeys = await litNodeClient.encrypt({
        accessControlConditions,
        dataToEncrypt: new TextEncoder().encode(JSON.stringify(defaultApiKeys))
      });

      // Encrypt IPFS IDs directly on frontend  
      const encryptedIpfsIds = await litNodeClient.encrypt({
        accessControlConditions,
        dataToEncrypt: new TextEncoder().encode(JSON.stringify(defaultIpfsIds))
      });

      // Save configuration to database via API
      const response = await fetch('/api/api-keys-config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          multisigWalletId: walletId,
          apiKeysCiphertext: encryptedApiKeys.ciphertext,
          apiKeysDataToEncryptHash: encryptedApiKeys.dataToEncryptHash,
          ipfsIdsCiphertext: encryptedIpfsIds.ciphertext,
          ipfsIdsDataToEncryptHash: encryptedIpfsIds.dataToEncryptHash,
          accessControlConditions,
          lastModifiedBy: 'initialization'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to save configuration');
      }

      const result = await response.json();
      if (result.success) {
        toast.success('Configuration initialized successfully with example data');
        // Reload the configuration to update UI
        await loadConfigData();
      } else {
        throw new Error(result.error || 'Failed to initialize configuration');
      }

    } catch (error) {
      console.error('Failed to initialize configuration:', error);
      toast.error('Failed to initialize configuration: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
    setIsLoading(false);
  };

  const loadConfigData = async () => {
    if (!walletId) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`/api/api-keys-config?walletId=${walletId}`);
      
      if (!response.ok) throw new Error('Failed to load configuration');
      
      const data = await response.json();
      log('data 123', data)
      if (data.success) {
        if (data.config) {
          // Configuration exists
          setConfigData({
            ...data.config,
            isDecrypted: false,
            decryptedApiKeys: undefined,
            decryptedIpfsIds: undefined
          });
          // Clear derived state when loading new config
          setEnvVars([]);
          setAuthorizedIpfsIds([]);
          toast.success('Configuration loaded successfully');
        } else {
          // No configuration exists yet - this is normal for new wallets
          setConfigData(null);
          setEnvVars([]);
          setAuthorizedIpfsIds([]);
          toast.info(data.message || 'No configuration found. You can create one by adding environment variables.');
        }
      } else {
        throw new Error(data.error || 'Failed to load configuration');
      }
    } catch (error) {
      console.error('Failed to load configuration:', error);
      toast.error('Failed to load configuration');
      setConfigData(null);
    }
    setIsLoading(false);
  };

  // Create proposal for API Keys update using new API Keys proposal system
  const proposeUpdateApiKeys = async () => {
    if (!walletId || !configData || !configData.isDecrypted) {
      toast.error('Please decrypt configuration first to propose changes');
      return;
    }

    if (envVars.length === 0) {
      toast.error('Please add at least one environment variable');
      return;
    }

    if (!authMethodId || !userData?.litActionPkp?.ethAddress) {
      toast.error('User not authenticated or missing address');
      return;
    }

    setIsLoading(true);
    try {
      const newApiKeys = envVars.reduce((acc, envVar) => {
        acc[envVar.key] = envVar.value;
        return acc;
      }, {} as Record<string, string>);

      const proposalData = {
        type: 'UPDATE_API_KEYS' as const,
        multisigWalletId: walletId,
        currentApiKeys: configData.decryptedApiKeys,
        newApiKeys: newApiKeys,
        changeDescription: `Update ${Object.keys(newApiKeys).length} API key(s): ${Object.keys(newApiKeys).join(', ')}`
      };

      // Use new API Keys proposal system
      const response = await fetch('/api/api-keys-proposals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          multisigWalletId: walletId,
          title: 'Update API Keys Configuration',
          description: `Proposed changes to ${Object.keys(newApiKeys).length} API key(s): ${Object.keys(newApiKeys).join(', ')}`,
          createdBy: {
            authMethodId: authMethodId,
            ethAddress: userData.litActionPkp.ethAddress,
            email: userData.primaryEmail || userData.litActionPkp.ethAddress
          },
          proposalData: proposalData
        })
      });

      if (!response.ok) throw new Error('Failed to create API Keys proposal');

      const result = await response.json();
      if (result.success) {
        toast.success('API Keys update proposal created successfully');
        // Could redirect to API Keys proposals page or show proposal ID
        console.log('Created API Keys proposal:', result.proposal.id);
      } else {
        throw new Error(result.error || 'Failed to create API Keys proposal');
      }
    } catch (error) {
      console.error('Failed to create API Keys proposal:', error);
      toast.error('Failed to create proposal: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
    setIsLoading(false);
  };

  const decryptAndShowConfig = async () => {
    if (!walletId || !configData) {
      toast.error('Please enter a wallet ID and load configuration first');
      return;
    }

    setIsLoading(true);
    try {
      // Connect to Lit Network
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }

      // Get API Key Management Lit Action IPFS ID
      const apiKeyManagementIpfsId = await getAPIKeyManagementIpfsId('base58');

      // Get session signatures
      const sessionSigs = await getCustomAuthSessionSigs();
      if (!sessionSigs) {
        throw new Error('No session signatures available');
      }

      // Call the API Key Management Lit Action to decrypt
      // The Lit Action will fetch encrypted data from the database internally
      const result = await litNodeClient.executeJs({
        ipfsId: apiKeyManagementIpfsId,
        sessionSigs,
        jsParams: {
          action: 'decrypt',
          multisigWalletId: walletId,
          configId: configData._id,
          litActionContext,
          authParams: {
            providerType: AuthProviderType.EMAIL_OTP, // Use enum instead of string literal
            accessToken: await getCurrentAccessToken(),
            pkpTokenId: userData?.litActionPkp?.tokenId,
            authMethodType: getVastbaseAuthMethodType(), // Use the actual custom auth method type
          }
        }
      });

      console.log('Lit Action decrypt result:', result);

      if (result.response) {
        const response = typeof result.response === 'string' 
          ? JSON.parse(result.response)
          : result.response;
          
        if (response.success && response.result?.decryptedApiKeys && response.result?.decryptedIpfsIds) {
          // Update state with decrypted data
          setConfigData(prev => prev ? {
            ...prev,
            isDecrypted: true,
            decryptedApiKeys: response.result.decryptedApiKeys,
            decryptedIpfsIds: response.result.decryptedIpfsIds
          } : null);
          
          // Convert decrypted data to UI state
          const envVarsArray = Object.entries(response.result.decryptedApiKeys).map(([key, value]) => ({
            key,
            value: value as string
          }));
          setEnvVars(envVarsArray);
          setAuthorizedIpfsIds(response.result.decryptedIpfsIds);

          toast.success('Configuration decrypted successfully');
        } else {
          throw new Error(response.error || 'Decryption failed');
        }
      } else {
        throw new Error('No response from Lit Action');
      }
    } catch (error) {
      console.error('Failed to decrypt configuration:', error);
      toast.error('Failed to decrypt configuration: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
    setIsLoading(false);
  };

  // Create proposal for IPFS IDs update using new API Keys proposal system
  const proposeUpdateIpfsIds = async () => {
    if (!walletId || !configData || !configData.isDecrypted) {
      toast.error('Please decrypt configuration first to propose changes');
      return;
    }

    if (authorizedIpfsIds.length === 0) {
      toast.error('Please add at least one IPFS ID');
      return;
    }

    if (!authMethodId || !userData?.litActionPkp?.ethAddress) {
      toast.error('User not authenticated or missing address');
      return;
    }

    setIsLoading(true);
    try {
      const proposalData = {
        type: 'UPDATE_IPFS_IDS' as const,
        multisigWalletId: walletId,
        currentIpfsIds: configData.decryptedIpfsIds,
        newIpfsIds: authorizedIpfsIds,
        changeDescription: `Update ${authorizedIpfsIds.length} IPFS ID(s) for access control`
      };

      // Use new API Keys proposal system
      const response = await fetch('/api/api-keys-proposals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          multisigWalletId: walletId,
          title: 'Update IPFS IDs Access Control',
          description: `Proposed changes to ${authorizedIpfsIds.length} authorized IPFS ID(s) for access control`,
          createdBy: {
            authMethodId: authMethodId,
            ethAddress: userData.litActionPkp.ethAddress,
            email: userData.primaryEmail || userData.litActionPkp.ethAddress
          },
          proposalData: proposalData
        })
      });

      if (!response.ok) throw new Error('Failed to create IPFS IDs proposal');

      const result = await response.json();
      if (result.success) {
        toast.success('IPFS IDs update proposal created successfully');
        console.log('Created IPFS IDs proposal:', result.proposal.id);
      } else {
        throw new Error(result.error || 'Failed to create IPFS IDs proposal');
      }
    } catch (error) {
      console.error('Failed to create IPFS IDs proposal:', error);
      toast.error('Failed to create proposal: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
    setIsLoading(false);
  };

  const deleteConfig = async () => {
    if (!confirm('Are you sure you want to delete this configuration? This action cannot be undone.')) return;
    
    if (!walletId || !configData) {
      toast.error('Please load a configuration first');
      return;
    }

    if (!authMethodId || !userData?.litActionPkp?.ethAddress) {
      toast.error('User not authenticated or missing address');
      return;
    }
    
    setIsLoading(true);
    try {
      const proposalData = {
        type: 'DELETE_CONFIG' as const,
        multisigWalletId: walletId,
        configId: configData._id,
        changeDescription: 'Delete entire API Keys configuration'
      };

      // Use new API Keys proposal system
      const response = await fetch('/api/api-keys-proposals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          multisigWalletId: walletId,
          title: 'Delete API Keys Configuration',
          description: 'Proposal to delete the entire API Keys configuration for this wallet',
          createdBy: {
            authMethodId: authMethodId,
            ethAddress: userData.litActionPkp.ethAddress,
            email: userData.primaryEmail || userData.litActionPkp.ethAddress
          },
          proposalData: proposalData
        })
      });

      if (!response.ok) throw new Error('Failed to create deletion proposal');

      const result = await response.json();
      if (result.success) {
        toast.success('Configuration deletion proposal created successfully');
        console.log('Created deletion proposal:', result.proposal.id);
      } else {
        throw new Error(result.error || 'Failed to create deletion proposal');
      }
    } catch (error) {
      console.error('Failed to create deletion proposal:', error);
      toast.error('Failed to create deletion proposal: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
    setIsLoading(false);
  };

  // Environment variables management functions
  const addNewEnvVar = () => {
    if (!newKeyName || !newKeyValue) {
      toast.error('Please fill in both key name and value');
      return;
    }
    
    // Check if key already exists
    if (envVars.some(v => v.key === newKeyName)) {
      toast.error('Environment variable with this name already exists');
      return;
    }
    
    setEnvVars(prev => [...prev, { 
      key: newKeyName, 
      value: newKeyValue
    }]);
    
    // Reset form and hide it
    setNewKeyName('');
    setNewKeyValue('');
    setShowAddForm(false);
    
    toast.success('Environment variable added successfully');
  };

  const removeEnvVar = (index: number) => {
    setEnvVars(prev => prev.filter((_, i) => i !== index));
    toast.success('Environment variable removed');
  };

  const cancelAddForm = () => {
    setShowAddForm(false);
    setNewKeyName('');
    setNewKeyValue('');
  };

  // IPFS IDs management functions
  const addNewIpfsId = () => {
    if (!newIpfsId.trim()) {
      toast.error('Please enter an IPFS ID');
      return;
    }
    
    // Check if IPFS ID already exists
    if (authorizedIpfsIds.includes(newIpfsId)) {
      toast.error('This IPFS ID is already authorized');
      return;
    }
    
    setAuthorizedIpfsIds(prev => [...prev, newIpfsId]);
    setNewIpfsId('');
    setShowAddIpfsForm(false);
    toast.success('IPFS ID added successfully');
  };

  const removeIpfsId = (ipfsId: string) => {
    setAuthorizedIpfsIds(prev => prev.filter(id => id !== ipfsId));
    toast.success('IPFS ID removed');
  };

  const cancelAddIpfsForm = () => {
    setShowAddIpfsForm(false);
    setNewIpfsId('');
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">API Key Management</h1>
            <p className="text-muted-foreground">
              Securely manage project API keys and environment variables using multisig wallets
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Wallet Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Select Multisig Wallet
            </CardTitle>
            <CardDescription>
              Choose a multisig wallet to manage its encrypted API keys
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="wallet-select">Wallet</Label>
                <div className="flex gap-2">
                  <Select 
                    value={walletId} 
                    onValueChange={(value) => {
                      setWalletId(value);
                      // Clear previous config when changing wallet
                      setConfigData(null);
                      setEnvVars([]);
                      setAuthorizedIpfsIds([]);
                    }}
                    disabled={loadingWallets}
                  >
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder={loadingWallets ? "Loading wallets..." : "Select a wallet"} />
                    </SelectTrigger>
                    <SelectContent>
                      {userWallets.map((wallet) => (
                        <SelectItem key={wallet._id} value={wallet._id}>
                          <div className="flex flex-col">
                            <span className="font-medium">{wallet.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {wallet.ethAddress.slice(0, 6)}...{wallet.ethAddress.slice(-4)}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                      {userWallets.length === 0 && !loadingWallets && (
                        <div className="px-2 py-1.5 text-sm text-muted-foreground">
                          No wallets found
                        </div>
                      )}
                    </SelectContent>
                  </Select>
                  <Button
                    onClick={loadConfigData}
                    disabled={isLoading || !walletId || loadingWallets}
                  >
                    Query
                  </Button>
                </div>
              </div>
              
              {walletId && (
                <div className="text-sm text-muted-foreground">
                  <p>Selected wallet will be used for access control of API key encryption/decryption</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Access Control Conditions Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Access Control Conditions</CardTitle>
                <CardDescription>
                  Manage authorized Lit Action IPFS IDs that can access this configuration
                </CardDescription>
              </div>
              {configData && configData.isDecrypted && (
                <Button
                  onClick={() => setShowAddIpfsForm(true)}
                  className="flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add IPFS ID
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {!configData ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Lock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="mb-4">No configuration stored</p>
                  <p className="text-sm mb-6">Initialize with default IPFS ID and example API keys</p>
                  <Button
                    onClick={initializeConfig}
                    disabled={isLoading || !walletId}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {isLoading ? (
                      <>
                        <Lock className="h-4 w-4 mr-2 animate-pulse" />
                        Initializing...
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4 mr-2" />
                        Initialize Configuration
                      </>
                    )}
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* IPFS IDs Management Actions */}
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      <Lock className="h-3 w-3 mr-1" />
                      {configData.isDecrypted ? 'Decrypted' : 'Encrypted'}
                    </Badge>
                    {configData.isDecrypted && authorizedIpfsIds.length > 0 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => proposeUpdateIpfsIds()}
                        disabled={isLoading}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Save className="h-4 w-4 mr-1" />
                        Propose IPFS Updates
                      </Button>
                    )}
                  </div>
                  
                  {/* Add IPFS ID Form */}
                  {showAddIpfsForm && (
                    <div className="border rounded-lg p-4 bg-muted/50">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium">Add New IPFS ID</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={cancelAddIpfsForm}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="ipfs-id">IPFS ID</Label>
                          <Input
                            id="ipfs-id"
                            placeholder="QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG"
                            value={newIpfsId}
                            onChange={(e) => setNewIpfsId(e.target.value)}
                            className="font-mono text-xs"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          onClick={addNewIpfsId}
                          disabled={!newIpfsId}
                          className="flex-1"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add IPFS ID
                        </Button>
                        <Button
                          variant="outline"
                          onClick={cancelAddIpfsForm}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {/* IPFS IDs List */}
                  {configData.isDecrypted && authorizedIpfsIds.length > 0 ? (
                    <div className="space-y-2">
                      {authorizedIpfsIds.map((ipfsId, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 border rounded-lg">
                          <code className="bg-blue-100 px-2 py-1 rounded text-xs font-mono flex-1">
                            {ipfsId}
                          </code>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeIpfsId(ipfsId)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : configData.isDecrypted ? (
                    <div className="text-center py-4 text-muted-foreground">
                      <p>No IPFS IDs configured</p>
                      <p className="text-sm">Click "Add IPFS ID" to get started</p>
                    </div>
                  ) : (
                    // Show encrypted state
                    <div className="text-sm text-muted-foreground">
                      <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                        Access control is encrypted. Click "Decrypt" to view and edit.
                      </code>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Environment Variables Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Environment Variables</CardTitle>
                <CardDescription>
                  Encrypted environment variables managed by multisig wallet
                </CardDescription>
              </div>
              {configData && (
                <Button
                  onClick={() => setShowAddForm(true)}
                  disabled={!configData.isDecrypted}
                  className="flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add Variable
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {!configData ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Lock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No configuration stored</p>
                  <p className="text-sm">Initialize configuration above to manage environment variables</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Configuration Status and Actions */}
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      <Lock className="h-3 w-3 mr-1" />
                      {configData.isDecrypted ? 'Decrypted' : 'Encrypted'}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => decryptAndShowConfig()}
                        disabled={isLoading || !walletId}
                      >
                        <Lock className="h-4 w-4 mr-1" /> 
                        {configData.isDecrypted ? 'Refresh' : 'Decrypt'}
                      </Button>
                      {configData.isDecrypted && envVars.length > 0 && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => proposeUpdateApiKeys()}
                          disabled={isLoading}
                          className="text-green-600 hover:text-green-700"
                        >
                          <Save className="h-4 w-4 mr-1" />
                          Propose Changes
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteConfig()}
                        disabled={isLoading}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Add Variable Form */}
                  {showAddForm && (
                    <div className="border rounded-lg p-4 bg-muted/50">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium">Add New Environment Variable</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={cancelAddForm}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="key-name">Variable Name</Label>
                          <Input
                            id="key-name"
                            placeholder="e.g. STYTCH_API_KEY"
                            value={newKeyName}
                            onChange={(e) => setNewKeyName(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="key-value">Variable Value</Label>
                          <Input
                            id="key-value"
                            type="password"
                            placeholder="Enter the variable value"
                            value={newKeyValue}
                            onChange={(e) => setNewKeyValue(e.target.value)}
                          />
                        </div>
                      </div>
                    <div className="flex gap-2 mt-4">
                        <Button
                          onClick={addNewEnvVar}
                          disabled={!newKeyName || !newKeyValue}
                          className="flex-1"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Variable
                        </Button>
                        <Button
                          variant="outline"
                          onClick={cancelAddForm}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {/* Environment Variables List */}
                   {configData.isDecrypted && envVars.length > 0 ? (
                     <div className="space-y-2">
                       {envVars.map((envVar, index) => (
                         <div key={index} className="flex items-center gap-2 p-3 border rounded-lg">
                           <code className="bg-blue-100 px-2 py-1 rounded text-xs font-mono flex-1">
                             {envVar.key}
                           </code>
                           <span>=</span>
                           <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono flex-1">
                             {configData.isDecrypted ? envVar.value : '*'.repeat(envVar.value.length)}
                           </code>
                           <Button
                             variant="outline"
                             size="sm"
                             onClick={() => removeEnvVar(index)}
                             className="text-red-600 hover:text-red-700"
                           >
                             <Trash2 className="h-4 w-4" />
                           </Button>
                         </div>
                       ))}
                     </div>
                  ) : configData.isDecrypted ? (
                    <div className="text-center py-4 text-muted-foreground">
                      <p>No environment variables configured</p>
                      <p className="text-sm">Click "Add Variable" to get started</p>
                    </div>
                  ) : (
                    // Show encrypted state
                    <div className="text-sm text-muted-foreground">
                      <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                        Configuration is encrypted. Click "Decrypt" to view and edit.
                      </code>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* API Keys Debug Button */}
        {walletId && configData && (
          <APIKeysDebugButton
            walletId={walletId}
            configData={configData}
            isConfigDecrypted={configData.isDecrypted || false}
          />
        )}

        {/* API Keys Proposals List */}
        {walletId && (
          <APIKeysProposalsList
            walletId={walletId}
            walletName={userWallets.find(w => w._id === walletId)?.name}
            walletAddress={userWallets.find(w => w._id === walletId)?.ethAddress}
            threshold={userWallets.find(w => w._id === walletId)?.threshold}
            signers={userWallets.find(w => w._id === walletId)?.signers}
          />
        )}
      </div>
    </div>
  );
}