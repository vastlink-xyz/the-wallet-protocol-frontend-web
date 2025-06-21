'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignerEmailField } from '@/components/SignerEmailField'
import { Loader2, Plus, Trash2 } from 'lucide-react'
import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { toast } from 'react-toastify'
import axios from 'axios'
import { isValidEmail, log } from '@/lib/utils'
import { 
  getSessionSigsByPkp, 
  litNodeClient, 
  mintPKP
} from '@/lib/lit'
import { encryptString } from '@lit-protocol/encryption'
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE } from '@lit-protocol/constants'
import { getCreateWalletIpfsId, getMultisigTransactionIpfsId, getUpdateWalletIpfsId, getUpgradeIpfsId, getPersonalSignIpfsId } from '@/lib/lit/ipfs-id-env'
import { useAuthExpiration } from '@/hooks/useAuthExpiration'
import { isTokenValid } from '@/lib/jwt'
import { TokenType, SUPPORTED_TOKEN_SYMBOLS, SUPPORTED_TOKENS_INFO } from '@/lib/web3/token'
import { MFASettings, MultisigWallet, MultisigWalletMetadata } from '@/app/api/multisig/storage'
import { LabeledContainer } from './LabeledContainer'
import { DailyWithdrawLimits, getDefaultDailyWithdrawLimits } from './Transaction/DailyWithdrawLimits'
import { getUserEmailFromStorage } from '@/lib/storage/user'
import { sendTeamNotification } from '@/lib/notification/team-notificatioin'
import { sendProposalExecutedNotification } from '@/lib/notification/proposal-executed-notification'
import { MessageProposal } from '@/app/api/multisig/storage'
import { signProposal } from '@/app/wallet/[walletId]/details/proposals/utils/sign-proposal'
import { fetchProposal } from '@/app/wallet/[walletId]/details/proposals/utils/proposal'
import { executeWalletSettingsProposal } from '@/app/wallet/[walletId]/details/proposals/utils/execute-proposal'

interface MultisigWalletFormContentProps {
  mode: 'create' | 'edit'
  authMethod: AuthMethod
  userPkp: IRelayPKP
  authMethodId: string
  wallet?: MultisigWallet // Only needed for edit mode
  onCancel?: () => void
  onSuccess?: () => void
}

// Function to send email to other signers
const sendEmailToSigners = async (
  currentUserEmail: string, 
  signers: any[], 
  walletAddress: string, 
  threshold: number,
  walletLink: string,
  walletName: string
) => {
  // Filter out the current user from the signers list
  const otherSigners = signers.filter(signer => signer.email !== currentUserEmail);
  
  if (otherSigners.length === 0) {
    console.log('No other signers to notify');
    return {
      success: true,
      sentTo: []
    };
  }
  
  console.log(`Sending email notification to ${otherSigners.length} signers`);
  
  try {
    // Send notification email to each recipient
    const emailResults = await Promise.all(otherSigners.map(async (signer) => {
      return await sendTeamNotification({
        to: signer.email,
        walletLink,
        notificationType: 'multisig-wallet-added',
        walletAddress,
        threshold,
        signersCount: signers.length,
        walletName,
        proposer: currentUserEmail,
      });
    }));
    
    // Count successfully sent emails
    const successCount = emailResults.filter(result => result.success).length;
    
    return {
      success: successCount > 0,
      sentTo: emailResults
        .filter(result => result.success)
        .map(result => result.email)
    };
  } catch (error) {
    console.error('Failed to send notification emails:', error);
    toast.error('Unable to send notification emails to other signers');
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      sentTo: []
    };
  }
};

export function MultisigWalletFormContent({
  mode,
  authMethod,
  userPkp,
  authMethodId,
  wallet,
  onCancel,
  onSuccess
}: MultisigWalletFormContentProps) {
  const { handleExpiredAuth } = useAuthExpiration();
  const [isLoading, setIsLoading] = useState(false)
  
  // Form states - initial values depend on mode
  const [signers, setSigners] = useState<any[]>(
    mode === 'edit' 
      ? (wallet?.signers || []) 
      : []
  )
  const [threshold, setThreshold] = useState(
    mode === 'edit' 
      ? wallet?.threshold || 1
      : 1
  )
  
  // Create default dailyLimits object
  const defaultDailyLimits = getDefaultDailyWithdrawLimits();
  
  const [dailyLimits, setDailyLimits] = useState<Record<TokenType, string> | undefined>(
    mode === 'edit'
      ? {...defaultDailyLimits, ...(wallet?.metadata?.mfaSettings?.dailyLimits)}
      : defaultDailyLimits
  )
  const [isLimitValid, setIsLimitValid] = useState<boolean>(true);

  const [walletName, setWalletName] = useState(
    mode === 'edit'
      ? wallet?.name || ''
      : ''
  )
  
  // New signer state
  const [newSignerEmail, setNewSignerEmail] = useState('')
  const [newSignerAddress, setNewSignerAddress] = useState('')
  const [newSignerPublicKey, setNewSignerPublicKey] = useState('')
  const [signerAuthMethodId, setSignerAuthMethodId] = useState('')
  const [showAddSignerForm, setShowAddSignerForm] = useState(false)
  const [newSignerError, setNewSignerError] = useState(false)
  
  // Ref for scrolling to the new signer form
  const newSignerFormRef = useRef<HTMLDivElement>(null)

  // Get current user's email from authMethod
  let currentUserEmail = '';
  if (authMethod.accessToken) {
    const email = getUserEmailFromStorage()
    if (email) {
      currentUserEmail = email;
    }
  }

  // Initialize signers list with current user for create mode
  useEffect(() => {
    if (mode === 'create' && signers.length === 0 && userPkp) {
      setSigners([{
        email: currentUserEmail,
        ethAddress: userPkp.ethAddress,
        publicKey: userPkp.publicKey,
        authMethodId: authMethodId
      }]);
    }
  }, [mode, signers.length, userPkp, currentUserEmail, authMethodId]);
  
  const hasInviteUsers = useMemo(() => {
    log('signers', signers)
    return signers.some(signer => !signer.ethAddress)
  }, [signers])

  const buttonText = useMemo(() => {
    if (mode === 'edit') {
      return 'Update Wallet Settings'
    }
    return 'Create Wallet'
  }, [mode])

  // Handle adding a new signer
  const handleAddSigner = () => {
    if (!newSignerEmail || !isValidEmail(newSignerEmail)) {
      return
    }
    
    // Check if signer already exists in the list
    const existingSigner = signers.find(s => {
      return (newSignerAddress && s.ethAddress === newSignerAddress) || (newSignerEmail && s.email === newSignerEmail)
    })
    
    if (existingSigner) {
      toast.error('This signer is already in the list');
      return;
    }
    
    const newSigner = {
      email: newSignerEmail,
      ethAddress: newSignerAddress,
      publicKey: newSignerPublicKey || '',
      authMethodId: signerAuthMethodId || ''
    };
    
    const newSigners = [...signers, newSigner];
    setSigners(newSigners);
    
    // Update threshold when adding a new signer
    // For 1 of 1 -> 2 of 2, or 1 of 2 -> 2 of 3, etc.
    setThreshold(Math.min(2, newSigners.length));
    
    // Clear form and hide
    setNewSignerEmail('');
    setNewSignerAddress('');
    setNewSignerPublicKey('');
    setSignerAuthMethodId('');
    setShowAddSignerForm(false);
    setNewSignerError(false);
  };

  // Handle removing a signer
  const handleRemoveSigner = (email: string) => {
    setSigners(signers.filter(signer => signer.email !== email));
  };

  // Handle threshold change when signers array changes
  useEffect(() => {
    // Ensure threshold is not greater than the number of signers
    if (threshold > signers.length) {
      // Make sure threshold is at least 1 (never 0)
      setThreshold(Math.max(1, signers.length));
    }
  }, [signers, threshold]);

  // In create mode, when wallet has no name, set a default name based on existing wallets count
  useEffect(() => {
    if (mode === 'create' && !walletName) {
      // Get user's existing wallets count
      const fetchWalletCount = async () => {
        if (!userPkp) return;
        try {
          const { data } = await axios.get(`/api/multisig?address=${userPkp.ethAddress}`);
          if (data.success) {
            const count = data.data.length + 1;
            setWalletName(`Team Wallet ${count}`);
          }
        } catch (error) {
          console.error('Failed to fetch wallet count:', error);
          // If fetching fails, set a generic name
          setWalletName('Team Wallet');
        }
      };
      
      fetchWalletCount();
    }
  }, [mode, userPkp]);

  // Handle limits change from DailyWithdrawLimits component
  const handleLimitsChange = useCallback((newLimits: Record<TokenType, string>, isValid: boolean) => {
    setDailyLimits(newLimits);
    setIsLimitValid(isValid);
  }, []);

  // Handle wallet invitations for unregistered users
  const handleWalletInvitations = async (
    walletId: string,
    otherSigners: any[],
    targetThreshold: number,
    targetSignersCount: number
  ) => {
    try {
      // Call API to create wallet invitations
      const response = await fetch('/api/invitation/create-wallet-invitations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authMethod.accessToken}`
        },
        body: JSON.stringify({
          walletId,
          inviterAuthMethodId: authMethodId,
          inviterEmail: currentUserEmail,
          inviterEthAddress: userPkp.ethAddress,
          walletName,
          otherSigners,
          targetThreshold,
          targetSignersCount
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create wallet invitations');
      }

      const result = await response.json();

      console.log(`Created wallet invitations for ${result.data.totalInvitations} users, sent emails to ${result.data.emailsSent} unregistered users`);
    } catch (error) {
      console.error('Failed to handle wallet invitations:', error);
      toast.error('Failed to send invitations to some users');
    }
  };

  // Create new multisig wallet (create mode)
  const handleCreateMultisigWallet = async () => {
    if (!userPkp || !dailyLimits) {
      console.error('Missing required information');
      return;
    }

    const authMethodType = authMethod.authMethodType

    // Check for unconfirmed new signer
    if (showAddSignerForm && newSignerEmail.trim() !== '') {
      toast.error('Please confirm or cancel the new signer before creating the wallet');
      setNewSignerError(true);
      if (newSignerFormRef.current) {
        newSignerFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Verify Google token before proceeding
    if (!authMethod || !authMethod.accessToken) {
      toast.error('Authentication information is missing');
      return;
    }

    // Determine if we need to use invitation mechanism
    const otherSigners = signers.filter(s => s.email !== currentUserEmail);
    const hasUnregisteredUsers = otherSigners.some(signer => !signer.ethAddress);

    // Store original threshold for invitation mechanism
    const originalThreshold = threshold;
    const originalSignersCount = signers.length;
    
    try {
      setIsLoading(true);

      const isValid = await isTokenValid(authMethod);
      if (!isValid) {
        handleExpiredAuth();
        setIsLoading(false)
        return;
      }

      // Generate multisig PKP
      const createWalletIpfsIdHex = await getCreateWalletIpfsId("hex");
      const updateWalletIpfsIdHex = await getUpdateWalletIpfsId("hex");
      const multisigTransactionIpfsIdHex = await getMultisigTransactionIpfsId('hex')
      const createWalletIpfsId = await getCreateWalletIpfsId("base58");

      // Determine actual signers for wallet creation
      let actualSigners;
      let actualThreshold;

      if (hasUnregisteredUsers) {
        // Invitation mechanism: only include creator
        actualSigners = [{
          email: currentUserEmail,
          ethAddress: userPkp.ethAddress,
          publicKey: userPkp.publicKey,
          authMethodId: authMethodId
        }];
        actualThreshold = 1;
      } else {
        // Normal flow: include all signers
        actualSigners = signers;
        actualThreshold = threshold;
      }

      // Collect all authMethodIds from actual signers
      const signerAuthMethodIds = actualSigners
        .filter(s => s.authMethodId)
        .map(s => s.authMethodId);
      
      // Combine system authMethodIds with signer authMethodIds
      const allAuthMethodIds = [
        createWalletIpfsIdHex,
        updateWalletIpfsIdHex,
        multisigTransactionIpfsIdHex,
        authMethodId,
        ...signerAuthMethodIds.filter(id => id !== authMethodId) // Avoid duplicates
      ];
      
      // Create arrays with the same length for all parameters
      const allAuthMethodTypes = [
        AUTH_METHOD_TYPE.LitAction,
        AUTH_METHOD_TYPE.LitAction,
        AUTH_METHOD_TYPE.LitAction,
        authMethodType,
        ...signerAuthMethodIds.filter(id => id !== authMethodId).map(() => authMethodType)
      ];

      const allAuthMethodPubkeys = allAuthMethodIds.map(() => '0x');

      const allAuthMethodScopes = [
        [AUTH_METHOD_SCOPE.SignAnything],
        [AUTH_METHOD_SCOPE.SignAnything],
        [AUTH_METHOD_SCOPE.SignAnything],
        [AUTH_METHOD_SCOPE.PersonalSign],
        ...signerAuthMethodIds.filter(id => id !== authMethodId).map(() => [AUTH_METHOD_SCOPE.NoPermissions])
      ];

      const pkpForMultisig = await mintPKP({
        authMethod,
        options: {
          permittedAuthMethodTypes: allAuthMethodTypes,
          permittedAuthMethodIds: allAuthMethodIds,
          permittedAuthMethodPubkeys: allAuthMethodPubkeys,
          permittedAuthMethodScopes: allAuthMethodScopes,
          addPkpEthAddressAsPermittedAddress: false,
          sendPkpToItself: true,
        },
      });
      
      log('multisig pkp', pkpForMultisig);

      // Prepare MFA settings and wallet data
      const mfaSettings: MFASettings = {
        dailyLimits: dailyLimits
      };

      // Prepare data to encrypt for new wallet
      const dataToEncrypt = {
        name: walletName,
        signers: actualSigners, // Use actual signers for wallet creation
        threshold: actualThreshold, // Use actual threshold for wallet creation
        mfaSettings,
      };

      // Add log to check threshold value
      console.log('Creating the team wallet with threshold:', actualThreshold, 'and signers:', actualSigners.length);
      console.log('Data to encrypt:', JSON.stringify(dataToEncrypt, null, 2));

      // Connect to Lit node if not already connected
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }

      // Setup access control
      const updateWalletIpfsId = await getUpdateWalletIpfsId("base58");
      const accessControlConditions = [
        {
          contractAddress: '',
          standardContractType: '',
          chain: 'ethereum',
          method: '',
          parameters: [':currentActionIpfsId'],
          returnValueTest: {
            comparator: '=',
            value: updateWalletIpfsId,
          },
        },
      ];

      // Encrypt data
      const { ciphertext, dataToEncryptHash } = await encryptString(
        {
          accessControlConditions,
          dataToEncrypt: JSON.stringify(dataToEncrypt),
        },
        litNodeClient,
      );
      log('encrypt data');

      // Get session signatures
      const sessionSigs = await getSessionSigsByPkp({authMethod, pkp: userPkp, refreshStytchAccessToken: true});
      log('session sigs', sessionSigs);

      // Execute Lit Action to create wallet
      const litActionRes = await litNodeClient.executeJs({
        ipfsId: createWalletIpfsId,
        sessionSigs,
        jsParams: {
          authParams: {
            accessToken: authMethod.accessToken,
            authMethodId: authMethodId,
            authMethodType: authMethod.authMethodType,
          },
          dataToEncryptHash,
          publicKey: pkpForMultisig.publicKey,
          env: process.env.NEXT_PUBLIC_ENV,
        },
      });
      log('litaction res', litActionRes);

      // Verify signature
      const signatureObj = litActionRes.signatures['create-wallet-signature'];
      if (!signatureObj || !signatureObj.signature) {
        throw new Error('Failed to create the team wallet');
      }

      const dataToEncryptHashSignature = signatureObj.signature;
      log('dataToEncryptHashSignature', dataToEncryptHashSignature);

      // Prepare metadata
      const metadata: MultisigWalletMetadata = {
        accessControlConditions,
        mfaSettings,
        name: walletName
      };

      // Create the wallet via API
      const response = await axios.post('/api/multisig', {
        multisigPkp: pkpForMultisig,
        currentPkp: userPkp,
        signer1Email: currentUserEmail,
        ciphertext,
        dataToEncryptHash,
        metadata,
        dataToEncryptHashSignature,
        authMethodId,
        signers: actualSigners, // Include actual signers for wallet creation
        threshold: actualThreshold, // Include actual threshold for wallet creation
        name: walletName, // Add wallet name as top-level field
      });

      if (response.data.success) {
        const walletId = response.data.walletId;

        if (hasUnregisteredUsers) {
          // Handle invitation mechanism
          await handleWalletInvitations(walletId, otherSigners, originalThreshold, originalSignersCount);
        } else {
          // Normal flow: send email notifications to other signers
          const appUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;
          const walletLink = appUrl;

          await sendEmailToSigners(
            currentUserEmail,
            actualSigners,
            pkpForMultisig.ethAddress,
            actualThreshold,
            walletLink,
            walletName,
          ).catch(error => {
            console.error('Failed to send notification emails:', error);
          });
        }

        // Clear form
        setDailyLimits({} as Record<TokenType, string>);

        // Call success callback
        if (onSuccess) {
          onSuccess();
        }
      }
    } catch (error) {
      console.error('Failed to create the team wallet:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const autoSignProposal = async (proposal: MessageProposal) => {
    if (!wallet) {
      return
    }

    const response = await signProposal({
      proposal,
      userPkp,
      authMethod,
      authMethodId,
    })

    if (response.data.success) {
      const updatedProposal = await fetchProposal(proposal.id, wallet.id)
      
      // Check if signatures have reached the threshold
      if (updatedProposal && updatedProposal.signatures.length >= wallet.threshold) {
        // Automatically execute the multisig action once threshold is reached
        await autoExecuteProposal(updatedProposal, wallet)
      } else {
        toast.info('You have approved the proposal. Waiting for other signers to approve.')
      }
    }
  };

  const autoExecuteProposal = async (proposal: MessageProposal, wallet: MultisigWallet) => {
    const sessionSigs = await getSessionSigsByPkp({authMethod, pkp: userPkp, refreshStytchAccessToken: true});
    const walletPkp = wallet.pkp

    const response = await executeWalletSettingsProposal({
      proposal,
      sessionSigs,
      wallet,
      walletPkp,
      authMethod,
      authMethodId,
    })

    if (response.data.success) {
      if (onSuccess) {
        toast.success('Wallet settings updated successfully.')
        onSuccess();
      }
    }
  };

  // Update existing multisig wallet (edit mode)
  const handleUpdateWalletSettings = async () => {
    if (!wallet) {
      return
    }

    try {
      // Check for unconfirmed new signer
      if (showAddSignerForm && newSignerEmail.trim() !== '') {
        toast.error('Please confirm or cancel the new signer before updating wallet settings');
        setNewSignerError(true);
        // Scroll to new signer form
        if (newSignerFormRef.current) {
          newSignerFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }
      
      setIsLoading(true);
      
      // Verify access token before proceeding
      if (!authMethod || !authMethod.accessToken) {
        toast.error('Authentication information is missing');
        setIsLoading(false);
        return;
      }
      
      const isValid = await isTokenValid(authMethod);
      if (!isValid) {
        handleExpiredAuth();
        setIsLoading(false);
        return;
      }
      
      // Validate signers data
      const invalidSigners = signers.filter(s => !s.ethAddress || !s.email);
      if (invalidSigners.length > 0) {
        toast.error('Some signers have incomplete information. Please check all signers.');
        setIsLoading(false);
        return;
      }
      
      // Ensure at least one signer
      if (signers.length === 0) {
        toast.error('At least one signer is required');
        setIsLoading(false);
        return;
      }
      
      // Create an empty settings change data object
      const settingsData: any = {};
      
      // Save original state for comparison after changes are applied
      settingsData.originalState = {
        name: wallet.name,
        threshold: wallet.threshold,
        signers: wallet.signers,
        mfaSettings: wallet.metadata?.mfaSettings,
      };

      // check if name has changed
      const nameChanged = walletName !== wallet.name;
      if (nameChanged) {
        settingsData.name = walletName;
      }
      
      // Check if signers list has changed (added or removed signers)
      const signersChanged = JSON.stringify(signers.map((s: any) => s.ethAddress).sort()) !== 
          JSON.stringify(wallet.signers.map((s: any) => s.ethAddress).sort());
      
      if (signersChanged) {
        settingsData.signers = signers;
      }
      
      // Check if threshold has changed
      const thresholdChanged = threshold !== wallet.threshold;
      if (thresholdChanged) {
        settingsData.threshold = threshold;
      }
      
      // Check if MFA settings have changed
      const currentMfa = wallet.metadata?.mfaSettings || {};
      const mfaChanged = 
        JSON.stringify(currentMfa.dailyLimits) !== JSON.stringify(dailyLimits);
        
      if (mfaChanged) {
        settingsData.mfaSettings = {
          dailyLimits
        } as MFASettings;
      }
      
      // Store a summary of changes for display after proposal completion
      const changeDescriptions = [];
      if (settingsData.name) {
        changeDescriptions.push(`Change name from ${wallet.name} to ${walletName}`);
      }
      if (settingsData.threshold !== undefined) {
        changeDescriptions.push(`Change threshold from ${wallet.threshold} to ${threshold}`);
      }
      if (settingsData.signers) {
        const addedCount = signers.filter(s => !wallet.signers.some((os: any) => os.ethAddress === s.ethAddress)).length;
        const removedCount = wallet.signers.filter((os: any) => !signers.some(s => s.ethAddress === os.ethAddress)).length;
        
        if (addedCount > 0) changeDescriptions.push(`Add ${addedCount} signer(s)`);
        if (removedCount > 0) changeDescriptions.push(`Remove ${removedCount} signer(s)`);
      }
      if (mfaChanged) {
        changeDescriptions.push('Update MFA settings');
      }
      
      settingsData.changeDescription = changeDescriptions.join(', ');
      
      // Only proceed if there are actual changes
      if (Object.keys(settingsData).length <= 2) { // originalState and changeDescription only
        toast.error('No changes detected. Please make changes before submitting.');
        setIsLoading(false);
        return;
      }
      
      // Create a proposal for changes
      const response = await axios.post('/api/multisig/messages', {
        walletId: wallet.id,
        createdBy: {
          authMethodId: authMethodId,
          ethAddress: userPkp.ethAddress,
          email: currentUserEmail,
        },
        message: JSON.stringify(settingsData),
        type: 'walletSettings', // Use new type field
        settingsData, // Only includes changed fields
        sendEmail: true,
        signers: wallet.signers,
        walletName: wallet.name, // Use the original wallet name
        proposer: currentUserEmail,
      });
      
      if (response.data.success) {
        const proposal = response.data.data;
        await autoSignProposal(proposal);
        // Close the modal when update is successful
        if (onCancel) {
          onCancel();
        }
      }
    } catch (error) {
      console.error('Failed to create wallet settings proposal:', error);
      toast.error('Failed to update wallet settings');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission based on mode
  const handleSubmit = async () => {
    if (mode === 'create') {
      await handleCreateMultisigWallet();
    } else {
      await handleUpdateWalletSettings();
    }
  };

  // Check if threshold options need to be adjusted
  const thresholdOptions = Array.from(
    { length: signers.length }, 
    (_, i) => i + 1
  );

  return (
    <div className="space-y-8">
      {/* Wallet Name */}
      <LabeledContainer label="Wallet Name">
        <Input
          id="walletName"
          value={walletName}
          onChange={(e) => setWalletName(e.target.value)}
          placeholder="Enter wallet name"
          className="flex-grow"
        />
      </LabeledContainer>
      
      {/* Signers Section */}
      <LabeledContainer label="Signers">
        {signers.map((signer, index) => (
          <div key={index} className="flex items-center justify-between gap-2 mb-2">
            <SignerEmailField
              allowUnregisteredEmail={true}
              label={`Signer ${index + 1}`}
              input={{
                value: signer.email,
                onChange: () => {},
              }}
              inputType="email"
              address={signer.ethAddress}
              disabled={true}
              className="flex-1"
            />
            
            {/* Only allow removing signers that are not the current user */}
            {signer.email !== currentUserEmail && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleRemoveSigner(signer.email)}
                className="text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            )}
          </div>
        ))}

        {/* Add A New Signer */}
        <div ref={newSignerFormRef} className={`space-y-3 py-4 ${newSignerError ? 'bg-red-50 px-4 rounded-md border-red-200' : ''}`}>
          {showAddSignerForm ? (
            <div className="grid grid-cols-1 gap-3">
              <SignerEmailField
                emailOnly={true}
                allowUnregisteredEmail={true}
                label="New Signer"
                input={{
                  value: newSignerEmail,
                  onChange: (value) => {
                    setNewSignerEmail(value);
                    setNewSignerError(false);
                  },
                  placeholder: "Enter signer's email",
                  id: "newSigner",
                  className: newSignerError ? "border-red-500" : ""
                }}
                onAddressFound={(addressData) => {
                  if (addressData) {
                    setNewSignerAddress(addressData.addresses?.eth || '');
                    setNewSignerPublicKey(addressData.publicKey || '');
                    setSignerAuthMethodId(addressData.authMethodId || '');
                  } else {
                    setNewSignerAddress('');
                    setNewSignerPublicKey('');
                    setSignerAuthMethodId('');
                  }
                }}
              />
              
              {newSignerError && (
                <div className="text-sm text-red-500 -mt-1">
                  Please confirm or cancel this signer before proceeding
                </div>
              )}
              
              <div className="flex space-x-2 mt-2">
                <Button 
                  onClick={handleAddSigner}
                  variant="outline"
                  disabled={!newSignerEmail}
                  className="flex-1"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Confirm
                </Button>
                
                <Button 
                  onClick={() => {
                    setShowAddSignerForm(false);
                    setNewSignerEmail('');
                    setNewSignerAddress('');
                    setNewSignerPublicKey('');
                    setSignerAuthMethodId('');
                    setNewSignerError(false);
                  }}
                  variant="ghost"
                  className="flex-none"
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <Button 
              onClick={() => setShowAddSignerForm(true)}
              variant="outline"
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add A New Signer
            </Button>
          )}
        </div>
      </LabeledContainer>
      
      
      {/* Threshold Setting - only show if we have signers */}
      {signers.length > 0 && (
        <LabeledContainer label="Signature Threshold">
          <div className="flex items-center space-x-4">
            <Label htmlFor="threshold">Required Signatures:</Label>
            <select
              id="threshold"
              value={threshold}
              onChange={(e) => setThreshold(parseInt(e.target.value))}
              className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {thresholdOptions.map((num) => (
                <option key={num} value={num}>
                  {num} of {signers.length}
                </option>
              ))}
            </select>
          </div>
        </LabeledContainer>
      )}
      
      {/* MFA Settings */}
      <LabeledContainer label="Daily Transfer Limits">
        {
          dailyLimits && (
            <DailyWithdrawLimits
              initialLimits={dailyLimits}
              onChange={handleLimitsChange}
            />
          )
        }
      </LabeledContainer>
      
      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        {onCancel && (
          <Button
            onClick={onCancel}
            variant="outline"
            disabled={isLoading}
            className="flex-1"
          >
            Cancel
          </Button>
        )}
        <Button
          onClick={handleSubmit}
          disabled={isLoading || signers.length === 0 || !isLimitValid}
          className="flex-1"
          title={mode === 'edit' ? "Update signers, threshold or MFA settings (requires multi-signature approval)" : ""}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {buttonText}
        </Button>
      </div>
    </div>
  );
} 