'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import Image from 'next/image';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Button } from '../ui/button';
import { ArrowDownUpIcon, ChevronDownIcon, ChevronUpIcon, Loader2Icon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { estimateSwap } from '@/lib/swap/estimateSwap';
import { useTeamWallets } from '@/hooks/useTeamWallets';
import { SUPPORTED_TOKENS_INFO, TokenType } from '@/lib/web3/token';
import { fetchBtcBalance } from '@/lib/web3/btc';
import { fetchERC20TokenBalance, fetchEthBalance } from '@/lib/web3/eth';
import { MultisigWalletAddresses } from '@/app/api/multisig/storage';
import debounce from '@/lib/debounce';
import { useTranslations } from 'next-intl';
import { createWallet, executeSwap, SupportedToken } from '@/lib/swap/executeSwap';
import { toast } from 'react-toastify';
import { MFAOtpDialog } from './MFAOtpDialog';
import { useSecurityVerification } from '@/hooks/useSecurityVerification';
import { useAuthContext } from '@/hooks/useAuthContext';

type translate = (key: string, params?: any) => string;

type onTokenChange = (token: SupportedToken) => void

type AssessedValue = {
  netOutputAmont: string;
  inputSymbol: string;
  outputSymbol: string;
  slippageBps: number;
  affiliateFee: number;
  outboundFee: number;
};

const SUPPORTED_TOKENS: SupportedToken[] = [
  {
    symbol: 'ETH',
    name: 'Ethereum',
    icon: '/cryptocurrency/eth.png',
    network: 'Ethereum',
    xchainAsset: 'ETH.ETH',
    decimals: 18,
    chainType: 'EVM',
  },
  {
    symbol: 'USDT',
    name: 'USDT (Ethereum)',
    icon: '/cryptocurrency/usdt.svg',
    network: 'Ethereum',
    xchainAsset: 'ETH.USDT-0XDAC17F958D2EE523A2206206994597C13D831EC7',
    decimals: 6,
    chainType: 'EVM',
  },
  {
    symbol: 'USDC',
    name: 'USDC (Ethereum)',
    icon: '/cryptocurrency/usdc.png',
    network: 'Ethereum',
    xchainAsset: 'ETH.USDC-0XA0B86991C6218B36C1D19D4A2E9EB0CE3606EB48',
    decimals: 6,
    chainType: 'EVM',
  },
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: '/cryptocurrency/btc.png',
    network: 'Bitcoin',
    xchainAsset: 'BTC.BTC',
    decimals: 8,
    chainType: 'UTXO',
  },
];

const MFAContext = createContext<{
  isOpen?: boolean,
  open: (
    onClose?: (otp: string) => Promise<void>,
    onCancel?: () => void,
  ) => void;
  close: () => void;
}>({
  open(onClose, onCancel) {},
  close() {},
});

interface SwapDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  teamWalletId?: string;
}

function SwapTokenSelect({ token, onTokenChange }: { token: SupportedToken, onTokenChange?: onTokenChange }) {
  return (
    <Select
      value={token.xchainAsset}
      onValueChange={(value) => {
        const token = SUPPORTED_TOKENS.find((t) => t.xchainAsset === value);
        if (token) {
          onTokenChange?.(token);
        }
      }}
    >
      <SelectTrigger className="w-32 !h-12 bg-gray-300">
        <SelectValue>
          <div className="flex items-center gap-2 font-bold">
            <Image
              src={token.icon}
              alt={token.symbol}
              width={20}
              height={20}
              className="rounded-full"
            />
            {token.symbol}
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {SUPPORTED_TOKENS.map((token) => (
          <SelectItem key={token.xchainAsset} value={token.xchainAsset}>
            <div className="flex items-center gap-2">
              <Image
                src={token.icon}
                alt={token.symbol}
                width={20}
                height={20}
                className="rounded-full"
              />
              <div>
                <div className="font-medium">{token.symbol}</div>
                <div className="text-sm text-muted-foreground">
                  {token.name}
                </div>
              </div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function SwapFromInput({
  t,
  disabled,
  addresses,
  token,
  onTokenChange,
  onAmountChange,
}: {
  t: translate,
  disabled?: boolean,
  addresses: MultisigWalletAddresses | null,
  token: SupportedToken,
  onTokenChange?: onTokenChange,
  onAmountChange?: (amount: number) => void },
) {
  const [balance, setBalance] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (addresses === null) {
      return;
    }

    setIsLoading(true);
    setBalance(null);

    let p: Promise<string> | null = null;

    if (token.symbol === 'BTC') {
      p = fetchBtcBalance(addresses.btc)
        .then(balance => balance.toString());
    }
    else if (token.symbol === 'ETH') {
      p = fetchEthBalance(addresses.eth);
    } else {
      p = fetchERC20TokenBalance({
        address: addresses.eth,
        tokenAddress: SUPPORTED_TOKENS_INFO[token.symbol as TokenType].contractAddress,
        decimals: SUPPORTED_TOKENS_INFO[token.symbol as TokenType].decimals,
      });
    }

    p?.then((balance) => {
      setBalance(balance);
    }).catch((error) => {
      console.error('Failed to fetch balance:', error);
    }).finally(() => {
      setIsLoading(false);
    });
  }, [addresses, token]);

  return (
    <>
      <div className="flex flex-row items-center border p-4 rounded-lg gap-2">
        <div className="flex-1 flex flex-col">
          <label htmlFor="from" className="text-sm font-medium">
            {t('from')}
          </label>
          <input
            id="from"
            type="number"
            disabled={disabled || !addresses}
            placeholder={t('enter_amount')}
            autoComplete="off"
            className="border-none outline-none font-bold [appearance:textfield]
              [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            onChange={onAmountChange ? (e) => {
              const amount = parseFloat(e.target.value);
              if (!isNaN(amount)) {
                onAmountChange(amount);
              }
            }: undefined}
          />
        </div>
        <SwapTokenSelect token={token} onTokenChange={onTokenChange} />
      </div>
      {isLoading && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {t('balance')}<Loader2Icon className="animate-spin h-4 w-4 text-muted-foreground" />
        </div>
      )}
      {!isLoading && balance !== null && (
        <span className="text-sm text-muted-foreground">
          {`${t('balance')}${balance} ${token.symbol}`}
        </span>
      )}
    </>
  );
}

function SwapToInput({
  t,
  isCalculating,
  assessedValue,
  token,
  sellToken,
  onTokenChange,
}: {
  t: translate,
  isCalculating: boolean,
  assessedValue: AssessedValue | null,
  sellToken: SupportedToken,
  token: SupportedToken,
  onTokenChange?: onTokenChange,
}) {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setExchangeRate(null);

    fetch('/api/price')
      .then((response) => {
        if (!response.ok) {
          throw new Error('failed to fetch price data');
        }
        return response.json();
      })
      .then((data: { [key: string]: number}) => {
        if (sellToken.symbol in data && token.symbol in data) {
          const rate = data[sellToken.symbol] / data[token.symbol];
          setExchangeRate(rate);
        }
      })
      .catch((error) => {
        console.error('failed to fetch price data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [sellToken, token]);

  return (
    <>
      <div className="flex flex-row items-center border p-4 rounded-lg gap-2">
        <div className="flex-1 flex flex-col">
          <label htmlFor="to" className="text-sm font-medium">
            {t('to')}
          </label>
          {isCalculating ? (
            <Loader2Icon className="animate-spin h-6 w-6 text-muted-foreground" />
          ) : (
            <div className="h-6 font-bold">
              {assessedValue ? assessedValue.netOutputAmont : ''}
            </div>
          )}
        </div>
        <SwapTokenSelect token={token} onTokenChange={onTokenChange} />
      </div>
      {isLoading && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {t('reference')}<Loader2Icon className="animate-spin h-4 w-4 text-muted-foreground" />
        </div>
      )}
      {!isLoading && exchangeRate !== null && (
        <span className="text-sm text-muted-foreground">
          {`${t('reference')}1 ${sellToken?.symbol} ≈ ${exchangeRate} ${token.symbol}`}
        </span>
      )}
    </>
  );
}

function SwapDetails({
  t,
  assessedValue,
  className
}: {
  t: translate,
  assessedValue: AssessedValue | null,
} & React.HTMLAttributes<HTMLDivElement>,
) {
  const [ expanded, setExpanded ] = useState(false);

  if (!assessedValue) {
    return null
  }

  return (
    <div className="flex flex-col">

    <div className={cn("flex flex-row items-center text-sm text-muted-foreground", className)}>
      <span>
        {t('estimated_output')}
      </span>
      <span className="text-foreground">
        {`${assessedValue.netOutputAmont} ${assessedValue.outputSymbol}`}
      </span>
      <div className="flex-1" />
      <span className="px-2 bg-[#31BD65]/10 text-xs text-[#31BD65] rounded-sm">
        {t('free')}
      </span>
      <div className="ml-2 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        {expanded
          ? <ChevronUpIcon className="h-4 w-4" />
          : <ChevronDownIcon className="h-4 w-4" />}
      </div>
      </div>
      {assessedValue && (
        <div className={cn(
          "flex flex-col gap-1 mt-2 transition-all duration-300 ease-in-out overflow-hidden",
          expanded ? "max-h-96" : "max-h-0",
        )}>
          <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
              {t('network_fee')}
              </span>
              <span>{assessedValue.outboundFee}</span>
          </div>
          <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {t('affiliate_fee')}
              </span>
              <span>{assessedValue.affiliateFee}</span>
          </div>
          <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {t('estimated_slippage')}
              </span>
              <span>{(assessedValue.slippageBps / 100).toFixed(2)}%</span>
          </div>
          {/* <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Minimum Received</span>
            <span>
              {`${assessedValue.netOutputAmont * (1 - assessedValue.slippageBps / 10000)} ${assessedValue.outputSymbol}`}
            </span>
          </div> */}
      </div>
      )}
    </div>
  );
}

function SwapContent({ t, teamWalletId }: { t: translate, teamWalletId?: string }) {
  const mfaContex = useContext(MFAContext);

  const [isSwapping, setIsSwapping] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [amonut, setAmount] = useState<number | null>(null);
  const [fromToken, setFromToken] = useState(SUPPORTED_TOKENS[0]);
  const [toToken, setToToken] = useState(SUPPORTED_TOKENS[1]);
  const [assessedValue, setAssessedValue] = useState<AssessedValue | null>(null);

  // Get authentication data from Context
  const { authMethod, authMethodId, userData } = useAuthContext();

  const {
    data: wallets,
  } = useTeamWallets({
    userEthAddress: userData?.litActionPkp?.ethAddress || null,
    enabled: ((teamWalletId !== undefined) && !!userData?.litActionPkp?.ethAddress),
  });

  const addresses = useMemo(() => {
    if (teamWalletId) {
      if (wallets) {
        const wallet = wallets.find((w) => w.id === teamWalletId);
        if (wallet) {
          return wallet.addresses;
        }
      }
    } else {
      if (userData) {
        return userData.addresses;
      }
    }
    return null;
  }, [teamWalletId, userData, wallets]);

  useEffect(() => {
    if (isCalculating) {
      return;
    }

    if (!addresses || !amonut) {
      setAssessedValue(null);
      return;
    }

    setAssessedValue(null);
    setIsCalculating(true)

    const destAddress = (toToken.symbol === 'BTC')
      ? addresses?.btc : addresses?.eth;

    estimateSwap(
      amonut,
      fromToken.decimals,
      fromToken.xchainAsset,
      toToken.xchainAsset,
      destAddress,
    ).then((value) => {
      const netOutputAmont = value.txEstimate.netOutput.assetAmount.amount().toString()

      setAssessedValue({
        netOutputAmont,
        inputSymbol: fromToken.symbol,
        outputSymbol: toToken.symbol,
        slippageBps: value.txEstimate.slipBasisPoints,
        affiliateFee: value.txEstimate.totalFees.affiliateFee.assetAmount.amount().toNumber(),
        outboundFee: value.txEstimate.totalFees.outboundFee.assetAmount.amount().toNumber(),
      });

      setIsCalculating(false);
    }).catch((err) => {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error('Failed to calculate exchange rate');
      }
    }).finally(() => {
      setIsCalculating(false);
    });
  }, [addresses, amonut, fromToken.xchainAsset, toToken.xchainAsset]);

  const handleSwapTokens = () => {
    const newFromToken = {...toToken}
    const newToToken = {...fromToken}

    setFromToken(newFromToken)
    setToToken(newToToken)
  }

  const handleSwap = useCallback(async (otp?: string) => {
    if (isSwapping) {
      return;
    }

    if (!authMethod || !authMethodId || !userData?.litActionPkp || !addresses) {
      toast.error(t('authentication_failed'));
      return;
    }

    if (!amonut) {
      toast.error(t('invalid_amount'));
      return;
    }

    setIsSwapping(true);

    try {
      const wallet = await createWallet(
        userData.litActionPkp,
        authMethod.accessToken,
        authMethodId,
        authMethod.providerType,
        authMethod.primaryEmail,
        addresses.eth,
        addresses.btc,
        otp,
      );

      const destAddress = (toToken.symbol === 'BTC')
        ? addresses?.btc : addresses?.eth;

      await executeSwap(wallet, amonut, fromToken, toToken, destAddress);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes('MFA required')) {
          mfaContex.open(handleMFAClose, handleMFACancel);
          return;
        }
        toast.error(err.message);
      } else {
        toast.error(t('swap_failed', {
          value: amonut,
          from_symbol: fromToken.symbol,
          to_symbol: toToken.symbol,
        }));
      }
    }

    setIsSwapping(false);
  }, [isSwapping, amonut, authMethod, userData, addresses]);

  const handleMFAClose = async (otp: string) => {
    await handleSwap(otp);
    mfaContex.close();
  };

  const handleMFACancel = () => {
    setIsSwapping(false);
    mfaContex.close();
  };

    // Initialize security verification hook
  const securityVerification = useSecurityVerification({
    executeTransaction: async () => {
      await handleSwap();
    },
  });

  return (
    <div>
      <SwapFromInput
        t={t}
        disabled={isSwapping}
        addresses={addresses}
        token={fromToken}
        onTokenChange={(token) => setFromToken(token)}
        onAmountChange={debounce((amount) => setAmount(amount), 500)}
      />
      <div className="flex justify-center">
        <Button
          variant="outline"
          size="icon"
          onClick={handleSwapTokens}
          className="rounded-full my-5 border border-black"
        >
          <ArrowDownUpIcon className="h-4 w-4" />
        </Button>
      </div>
      <SwapToInput
        t={t}
        isCalculating={isCalculating}
        assessedValue={assessedValue}
        sellToken={fromToken}
        token={toToken}
        onTokenChange={(token) => setToToken(token)}
      />
      <Button
        variant="default"
        disabled={isSwapping}
        className="mt-4 w-full h-14 rounded-full font-bold text-lg"
        onClick={async () => await securityVerification.verify({})}
      >
        {isSwapping && <Loader2Icon className="animate-spin h-6 w-6 text-muted-foreground" />}
        {t('swap')}
      </Button>
      <SwapDetails className="mt-4" t={t} assessedValue={assessedValue} />
    </div>
  );
}

function SwapMFADialog({
  t,
  open,
  onClose,
  onCancel,
}: {
  t: translate,
  open?: boolean,
  onClose?: (otp: string) => Promise<void>,
  onCancel?: () => void,
}) {
  // Get authentication data from Context
  const { authMethod } = useAuthContext();
  
  // MFA state
  const [mfaMethodId, setMfaMethodId] = useState<string | null>(null);
  const [mfaPhoneNumber, setMfaPhoneNumber] = useState<string | null>(null);

  useEffect(() => {
    const fetchMfaData = async () => {
      if (!authMethod) {
        return;
      }

      try {
        const response = await fetch('/api/mfa/get-user-phone', {
          headers: {
            'Authorization': `Bearer ${authMethod.accessToken}`
          }
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Failed to fetch phone number');
        }

        const data = await response.json();
        const phones = data.phones || [];

        if (phones.length > 0) {
          // Update phone state
          const phone = phones[0];
          console.log('phone', phone)
          setMfaPhoneNumber(phone.phone_number);
          setMfaMethodId(phone.phone_id);
        } else {
          throw new Error('No verified phone number found for your account');
        }
      } catch (error) {
        console.error('Error fetching user phone:', error);
      }
    }

    fetchMfaData()
  }, [ authMethod ]);

  // Function to send OTP
  const handleSendOtp = useCallback(async () => {
    if (!authMethod) {
      toast.error(t('authentication_failed'));
      return;
    }

    const response = await fetch('/api/mfa/whatsapp/send-code', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authMethod?.accessToken}`,
      },
      body: JSON.stringify({ phone_number: mfaPhoneNumber }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      toast.error(t('authentication_failed'));

      throw new Error(errorData.error || t('send_otp_failed'));
    }
  }, [ authMethod ]);

  if (!open || !mfaPhoneNumber) {
    return null;
  }

  return (<MFAOtpDialog
    isOpen={open || false}
    onClose={() => onCancel?.()}
    onOtpVerify={async (otp) => await onClose?.(otp)}
    sendOtp={handleSendOtp}
    identifier={mfaPhoneNumber}
    title={t('mfa_title')}
    description={t('mfa_description')}
  />);
}

export function SwapDialog({ open, onOpenChange, teamWalletId }: SwapDialogProps) {
  const t = useTranslations('SwapDialog');

  const [showMfa, setShowMfa] = useState(false);
  const [onClose, setOnClose] = useState<((opt: string) => Promise<void>) | null>(null);
  const [onCancel, setOnCancel] = useState<(() => void) | null>(null);

  return (
    <MFAContext.Provider value={{
      isOpen: false,
      open: (onClose, onCancel) => {
        setShowMfa(true);
        setOnClose(onClose || null);
        setOnCancel(onCancel || null);
      },
      close: () => {
        setShowMfa(false);
        setOnClose(null);
        setOnCancel(null);
      },
    }}>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="flex flex-col max-w-full h-full mt-12 tablet:grid tablet:max-w-[calc(100%-2rem)] tablet:h-auto tablet:mt-0">
          <DialogHeader>
            <DialogTitle>{t('title')}</DialogTitle>
          </DialogHeader>
          <SwapContent t={t} teamWalletId={teamWalletId} />
        </DialogContent>
      </Dialog>

      <SwapMFADialog
        t={t}
        open={showMfa}
        onClose={onClose || undefined}
        onCancel={onCancel || undefined}
      />

    </MFAContext.Provider>
  );
}
