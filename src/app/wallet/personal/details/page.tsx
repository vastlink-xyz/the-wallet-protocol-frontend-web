'use client';

import { useRouter } from 'next/navigation';
import { TransactionHistory } from '@/components/Transaction/TransactionHistory';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { getAuthIdByAuthMethod } from '@lit-protocol/lit-auth-client';
import { useEffect } from 'react';
import { useState } from 'react';
import { MultisigWalletAddresses } from '@/app/api/multisig/storage';
import { cn, log } from '@/lib/utils';
import { TokenAssets } from '@/app/assets/components/WalletCard/TokenAssets';
import { PersonalWalletSendReceiveActions } from '@/app/assets/components/WalletCard/PersonalWalletSendReceiveActions';
import { WalletSettingsActions } from '@/app/assets/components/WalletCard/WalletSettingsActions';
import { ArrowLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PersonalWalletDetailsPage() {
  const router = useRouter();

  const t = useTranslations('Common');

  const [isLoading, setIsLoading] = useState(true);
  const [addresses, setAddresses] = useState<MultisigWalletAddresses | null>(
    null
  );
  const [btcAddress, setBtcAddress] = useState('');
  const [ethAddress, setEthAddress] = useState('');
  const [email, setEmail] = useState<string | null>(null);

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        // Get user's authMethodId
        const storedAuthMethod = getAuthMethodFromStorage();
        if (!storedAuthMethod) return;
        const authMethodId = await getAuthIdByAuthMethod(storedAuthMethod);

        // Fetch user's information from database API
        const userResponse = await fetch(
          `/api/user?authMethodId=${authMethodId}`
        );

        if (!userResponse.ok) {
          throw new Error('Failed to fetch user information from database');
        }

        const userData = await userResponse.json();
        setAddresses(userData.addresses);
        setBtcAddress(userData.addresses?.btc);
        setEthAddress(userData.addresses?.eth);
        setEmail(userData.email);
      } catch (error) {
        console.error('Error fetching data from database:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className="mx-auto p-6 relative w-[366px] laptop:w-[808px] desktop:w-[1224px]">
      <div className="w-full flex items-center justify-between">
        <button
          onClick={() => router.push('/assets')}
          className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          {t('back')}
        </button>
        <p className={cn('text-lg text-center font-bold', 'text-black')}>
          {email}
        </p>
        <WalletSettingsActions />
      </div>

      <div className="w-full laptop:w-[640px] mx-auto mb-[80px] mt-[24px]">
        {btcAddress && ethAddress && (
          <TokenAssets btcAddress={btcAddress} ethAddress={ethAddress} />
        )}

        {/* Send/Receive Buttons - After TokenAssets */}
        {btcAddress && ethAddress && email && (
          <PersonalWalletSendReceiveActions
            btcAddress={btcAddress}
            ethAddress={ethAddress}
            walletName={email + ' (Personal)'}
            addresses={addresses}
          />
        )}
      </div>

      {addresses && (
        <div className="mt-6">
          <TransactionHistory addresses={addresses} />
        </div>
      )}
    </div>
  );
}
