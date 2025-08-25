import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { MultisigWallet } from '@/app/api/multisig/storage';
import { AuthMethod, IRelayPKP, SessionSigs } from "@lit-protocol/types";
import { AUTH_METHOD_TYPE, AUTH_METHOD_SCOPE, LIT_NETWORK } from "@lit-protocol/constants";
import { litNodeClient, SELECTED_LIT_NETWORK } from "@/lib/lit";
import { getMultisigTransactionIpfsId, getPersonalSignIpfsId, getUpdateWalletIpfsId } from "@/lib/lit/ipfs-id-env";
import { log } from "@/lib/utils";
import { LitContracts } from '@lit-protocol/contracts-sdk';
import { PKPEthersWallet } from '@lit-protocol/pkp-ethers';
import { litActionCodeForCommonUpgradableProxy } from '@/lib/lit-action-code/common-upgradable-proxy.lit';

const upgradeIpfsFn = getUpdateWalletIpfsId
const removeIpfsIdHex = '0x12203bcbfca3a322e7a605154112cffdad2b518cc8d91d0c49ebfbebca5bbe8b5964'

interface AllMultisigWalletsProps {
  currentUserPkp: IRelayPKP | null;
  currentUserAuthMethod: AuthMethod | null;
  sessionSigs: SessionSigs | null;
}

export function AllMultisigWallets({
  currentUserPkp,
  currentUserAuthMethod,
  sessionSigs,
}: AllMultisigWalletsProps) {
  const [wallets, setWallets] = useState<MultisigWallet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchWallets() {
      try {
        setLoading(true);
        const response = await fetch('/api/multisig/all');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          setWallets(data.data);
        } else {
          throw new Error(data.error || 'Failed to fetch wallets');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch wallets');
        console.error('Error fetching wallets:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchWallets();
  }, []);

  const handleUpgrade = async (wallet: MultisigWallet) => {
    if (!sessionSigs) {
      return;
    }

    try {
      setLoading(true);
      const ipfsIdHex = await upgradeIpfsFn('hex')
      
      const response = await litNodeClient.executeJs({
        code: litActionCodeForCommonUpgradableProxy,
        sessionSigs,
        jsParams: {
          publicKey: wallet.pkp.publicKey,
          litDatilNetwork: SELECTED_LIT_NETWORK,
          env: process.env.NEXT_PUBLIC_ENV,
          devUrl: process.env.NEXT_PUBLIC_DEV_URL_FOR_LIT_ACTION || '',
          authMethodMetadata: {
            addOrRemove: 'add',
            keyType: 2,
            authMethodType: AUTH_METHOD_TYPE.LitAction,
            authMethodId: ipfsIdHex,
            authMethodPubkey: '0x',
            permittedScopes: [AUTH_METHOD_SCOPE.SignAnything],
          }
        },
      });
      log('response', response)
    } catch (error) {
      console.error("Error upgrading PKP:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveLitAction = async (wallet: MultisigWallet) => {
    if (!sessionSigs) {
      return;
    }

    try {
      setLoading(true);
      
      const response = await litNodeClient.executeJs({
        code: litActionCodeForCommonUpgradableProxy,
        sessionSigs,
        jsParams: {
          publicKey: wallet.pkp.publicKey,
          litDatilNetwork: SELECTED_LIT_NETWORK,
          env: process.env.NEXT_PUBLIC_ENV,
          devUrl: process.env.NEXT_PUBLIC_DEV_URL_FOR_LIT_ACTION || '',
          authMethodMetadata: {
            addOrRemove: 'remove',
            keyType: 2,
            authMethodType: AUTH_METHOD_TYPE.LitAction,
            authMethodId: removeIpfsIdHex,
            authMethodPubkey: '0x',
            // permittedScopes: [AUTH_METHOD_SCOPE.NoPermissions],
          }
        },
      });
      log('response', response)
    } catch (error) {
      console.error("Error upgrading PKP:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckPermittedLitActions = async (wallet: MultisigWallet) => {
    try {
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }

      if (!sessionSigs) {
        return;
      }

      setLoading(true);

      const pkpWallet = new PKPEthersWallet({
        controllerSessionSigs: sessionSigs,
        pkpPubKey: currentUserPkp!.publicKey,
        litNodeClient: litNodeClient,
      });
      
      await pkpWallet.init();
      log('pkpWallet init')

      const litContracts = new LitContracts({
        signer: pkpWallet,
      });
      await litContracts.connect();
      log('litcontract conneected')

      const permittedActions = await litContracts.pkpPermissionsContractUtils.read.getPermittedActions(wallet.pkp.tokenId)
      log('permitted actions', permittedActions)
    } catch (err) {
      log('err', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Multisig Wallets</h1>
      
      {loading && <p>Loading wallets...</p>}
      
      {error && <p className="text-red-500">Error: {error}</p>}
      
      {!loading && !error && wallets.length === 0 && (
        <p>No multisig wallets found.</p>
      )}
      
      {wallets.length > 0 && (
        <div>
          <p className="mb-2">Total wallets: {wallets.length}</p>
          <ul className="space-y-4">
            {wallets.map((wallet) => (
              <li key={wallet.id} className="border rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{wallet.name || "Unnamed Wallet"}</span>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        disabled={loading}
                        onClick={() => handleUpgrade(wallet)}
                      >
                        Upgrade
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        disabled={loading}
                        onClick={() => handleRemoveLitAction(wallet)}
                      >
                        Remove Lit Action
                      </Button>
                      <Button 
                        size="sm" 
                        variant="secondary"
                        disabled={loading}
                        onClick={() => handleCheckPermittedLitActions(wallet)}
                      >
                        View Permitted Actions
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <div>Address: {wallet.pkp.ethAddress}</div>
                    <div className="break-all">Public Key: {wallet.pkp.publicKey}</div>
                    <div className="text-gray-500">
                      Threshold: {wallet.threshold} of {wallet.signers.length}
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <div className="font-medium mb-1">Signers:</div>
                    <ul className="list-disc list-inside">
                      {wallet.signers.map((signer, index) => (
                        <li key={index}>
                          {signer.email} ({signer.ethAddress})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 