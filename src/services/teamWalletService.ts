import { 
    litActionContext,
    litNodeClient, 
    mintPKP
} from '@/lib/lit'
import { encryptString } from '@lit-protocol/encryption'
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE } from '@lit-protocol/constants'
import axios from 'axios'
import { TokenType } from '@/lib/web3/token'

import { log } from '@/lib/utils'
import { getCreateWalletIpfsId, getMultisigTransactionIpfsId, getUpdateWalletIpfsId, getAPIKeyManagementIpfsId, getUpgradeIpfsId } from '@/lib/lit/ipfs-id-env'
import { MFASettings, MultisigWallet, MultisigWalletMetadata } from '@/app/api/multisig/storage'
import { getVastbaseAuthMethodType } from '@/lib/lit/custom-auth'
import { BASE_URL } from '@/constants'

export const createTeamWallet = async ({
    authMethod,
    authMethodId,
    signerAuthMethodIds,
    authMethodType,
    dailyLimits,
    walletName,
    actualSigners,
    actualThreshold,
    sessionSigs,
    accessToken,
    userPkp,
    currentUserEmail,
    hasUnregisteredUsers,
    handleWalletInvitations,
    sendEmailToSigners,
    onSuccess,
    otherSigners,
    unregisteredUsers,
    setDailyLimits,
    toastSuccess,
}) => {
    // Generate multisig PKP
    const createWalletIpfsIdHex = await getCreateWalletIpfsId("hex");
    const updateWalletIpfsIdHex = await getUpdateWalletIpfsId("hex");
    const multisigTransactionIpfsIdHex = await getMultisigTransactionIpfsId('hex')
    const apiKeyManagementIpfsIdHex = await getAPIKeyManagementIpfsId('hex')
    const upgradeIpfsIdHex = await getUpgradeIpfsId('hex')
    const createWalletIpfsId = await getCreateWalletIpfsId("base58");
        
    // Combine system authMethodIds with signer authMethodIds
    const allAuthMethodIds = [
        createWalletIpfsIdHex,
        updateWalletIpfsIdHex,
        multisigTransactionIpfsIdHex,
        apiKeyManagementIpfsIdHex,
        // upgradeIpfsIdHex,
        authMethodId,
        ...signerAuthMethodIds.filter(id => id !== authMethodId) // Avoid duplicates
    ];
  
    // Create arrays with the same length for all parameters
    const allAuthMethodTypes = [
    AUTH_METHOD_TYPE.LitAction,
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
    [AUTH_METHOD_SCOPE.SignAnything],
    [AUTH_METHOD_SCOPE.NoPermissions],
    ...signerAuthMethodIds.filter(id => id !== authMethodId).map(() => [AUTH_METHOD_SCOPE.NoPermissions])
    ];

    const pkpForMultisig = await mintPKP({
    keyType: 2,
    permittedAuthMethodTypes: allAuthMethodTypes,
    permittedAuthMethodIds: allAuthMethodIds,
    permittedAuthMethodPubkeys: allAuthMethodPubkeys,
    permittedAuthMethodScopes: allAuthMethodScopes,
    addPkpEthAddressAsPermittedAddress: true,
    sendPkpToItself: true,
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

    if (!sessionSigs) {
    throw new Error('Failed to get session signatures');
    }
    log('session sigs', sessionSigs);

    // Execute Lit Action to create wallet
    const litActionRes = await litNodeClient.executeJs({
    ipfsId: createWalletIpfsId,
    sessionSigs,
    jsParams: {
        authParams: {
        accessToken,
        providerType: authMethod.providerType,
        pkpTokenId: pkpForMultisig.tokenId,
        authMethodId: authMethodId,
        authMethodType: getVastbaseAuthMethodType(),
        },
        dataToEncryptHash,
        publicKey: pkpForMultisig.publicKey,
        litActionContext,
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
    const response = await axios.post(`${BASE_URL}/api/multisig`, {
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
        const targetThreshold = actualThreshold + unregisteredUsers.length; // Include unregistered users in the threshold
        await handleWalletInvitations(walletId, unregisteredUsers, targetThreshold);

        // Show success message for invitation flow
        const unregisteredCount = otherSigners.filter(s => !s.ethAddress).length;
        toastSuccess(unregisteredCount);
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
}
