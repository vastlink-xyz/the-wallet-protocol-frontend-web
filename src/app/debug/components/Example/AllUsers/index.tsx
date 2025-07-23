import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { AUTH_METHOD_SCOPE } from '@lit-protocol/constants';
import { AUTH_METHOD_TYPE } from '@lit-protocol/constants';
import { getSessionSigs } from '@/lib/lit';
import { litNodeClient } from '@/lib/lit';
import { LitContracts } from '@lit-protocol/contracts-sdk';
import { PKPEthersWallet } from '@lit-protocol/pkp-ethers';
import { log } from '@/lib/utils';
import { AuthMethod, IRelayPKP, SessionSigs } from '@lit-protocol/types';
import { User } from '@/app/api/user/storage';
import { getPersonalSignIpfsId, getPersonalTransactionIpfsId, getVerifyAuthTokenIpfsId } from '@/lib/lit/ipfs-id-env';
import { LIT_NETWORK } from '@lit-protocol/constants';
import { getBtcAddressByPublicKey } from '@/lib/web3/btc';
import { litActionCodeForCommonUpgradableProxy } from '@/lib/lit-action-code/common-upgradable-proxy.lit';

const upgradeIpfsHexFn = getPersonalSignIpfsId
const removeIpfsIdHex = '0x1220df491e70a1f1893e2446cc3ad5a147b51c79afcd854d01f9b5826a20c815c649'

interface UserProps {
  currentUserPkp: IRelayPKP | null;
  currentUserAuthMethod: AuthMethod | null;
  sessionSigs: SessionSigs | null;
}

export function AllUsers({
  currentUserPkp,
  currentUserAuthMethod,
  sessionSigs,
}: UserProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await fetch('/api/user/all');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          setUsers(data.users);
        } else {
          throw new Error(data.error || 'Failed to fetch users');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch users');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const handleCheckPermittedLitActions = async (user: User) => {
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

      const permittedActions = await litContracts.pkpPermissionsContractUtils.read.getPermittedActions(user.litActionPkp!.tokenId)
      log('permitted actions', permittedActions)
    } catch (err) {
      log('err', err);
    } finally {
      setLoading(false);
    }
  }

  // Handle upgrade button click (empty implementation for now)
  const handleUpgrade = async (user: User) => {
    if (!sessionSigs) {
      return;
    }

    try {
      setLoading(true);
      const ipfsIdHex = await upgradeIpfsHexFn('hex')
      log('ipfsIdHex for upgrade', ipfsIdHex)
      
      const response = await litNodeClient.executeJs({
        code: litActionCodeForCommonUpgradableProxy,
        sessionSigs,
        jsParams: {
          publicKey: user.litActionPkp!.publicKey,
          litDatilNetwork: LIT_NETWORK.DatilDev,
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

  // Handle upgrade button click (empty implementation for now)
  const handleRemoveLitAction = async (user: User) => {
    if (!sessionSigs) {
      return;
    }

    try {
      setLoading(true);
      
      const response = await litNodeClient.executeJs({
        code: litActionCodeForCommonUpgradableProxy,
        sessionSigs,
        jsParams: {
          publicKey: user.litActionPkp!.publicKey,
          litDatilNetwork: LIT_NETWORK.DatilDev,
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

  const handleLogBtcAddress = async (user: User) => {
    const btcAddress = getBtcAddressByPublicKey(user.litActionPkp!.publicKey)
    log('ethAddress', user.litActionPkp!.ethAddress)
    log('btcAddress', btcAddress)
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Users</h1>
      
      {loading && <p>Loading users...</p>}
      
      {error && <p className="text-red-500">Error: {error}</p>}
      
      {!loading && !error && users.length === 0 && (
        <p>No users found.</p>
      )}
      
      {users.length > 0 && (
        <div>
          <p className="mb-2">Total users: {users.length}</p>
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{user.email}</span>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      disabled={loading}
                      onClick={() => handleLogBtcAddress(user)}
                    >
                      btc address
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      disabled={loading}
                      onClick={() => handleUpgrade(user)}
                    >
                      Upgrade
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      disabled={loading}
                      onClick={() => handleRemoveLitAction(user)}
                    >
                      Remove Lit Action
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      disabled={loading}
                      onClick={() => handleCheckPermittedLitActions(user)}
                    >
                      View Permitted Actions
                    </Button>
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