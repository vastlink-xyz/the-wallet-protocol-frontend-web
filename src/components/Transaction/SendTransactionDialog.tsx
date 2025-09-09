import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { Button } from "../ui/button";
import { SignerEmailField } from "../SignerEmailField";
import { SUPPORTED_TOKENS_INFO, TokenType } from "@/lib/web3/token";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";
import { SelectToken } from "../SelectToken";
import { IRelayPKP } from "@lit-protocol/types";
import { MFAOtpDialog } from "./MFAOtpDialog";
import { isValidEmail, log } from "@/lib/utils";
import { estimateGasFee } from "@/lib/web3/transaction";
import { fetchEthBalance, fetchERC20TokenBalance } from "@/lib/web3/eth";
import { fetchBtcBalance } from "@/lib/web3/btc";
import { MultisigWalletAddresses } from "@/app/api/multisig/storage";
import { useTranslations } from "next-intl";
import { useAuthContext } from '@/hooks/useAuthContext';

export interface SendTransactionDialogState {
  to: string
  recipientAddress: string
  amount: string
  tokenType: TokenType
  mfaMethodId: string | null
  mfaPhoneNumber: string | null
  otpCode?: string
}

interface SendTransactionDialogProps {
  showSendDialog: boolean
  showMfa: boolean
  onSendTransaction: (state: SendTransactionDialogState) => Promise<void>
  onInviteUser: (state: SendTransactionDialogState) => Promise<void>
  isSending: boolean
  onMFACancel?: () => void
  onMFAVerify?: (state: SendTransactionDialogState) => Promise<void>
  onDialogOpenChange: (open: boolean) => void
  addresses: MultisigWalletAddresses | null
  walletName?: string
  resetAmount?: boolean
  userLitAction?: IRelayPKP
}

export function SendTransactionDialog({
  showSendDialog,
  showMfa,
  onSendTransaction,
  onInviteUser,
  isSending,
  onMFACancel,
  onMFAVerify,
  onDialogOpenChange,
  addresses,
  walletName,
  resetAmount,
  userLitAction,
}: SendTransactionDialogProps) {
  // Get auth method from localStorage
  const { authMethod, getCurrentAccessToken } = useAuthContext()

  // Early return for no auth method case
  if (!authMethod) {
    return (
      <Dialog open={showSendDialog} onOpenChange={onDialogOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Authentication Required</DialogTitle>
          </DialogHeader>
          <div className="p-4 text-center">
            <p className="text-red-500">Please log in again to continue.</p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return <SendTransactionDialogContent 
    {...{
      showSendDialog,
      showMfa,
      onSendTransaction,
      onInviteUser,
      isSending,
      onMFACancel,
      onMFAVerify,
      onDialogOpenChange,
      addresses,
      walletName,
      resetAmount,
      userLitAction,
      authMethod,
      getCurrentAccessToken
    }}
  />
}

function SendTransactionDialogContent({
  showSendDialog,
  showMfa,
  onSendTransaction,
  onInviteUser,
  isSending,
  onMFACancel,
  onMFAVerify,
  onDialogOpenChange,
  addresses,
  walletName,
  resetAmount,
  userLitAction,
  authMethod,
  getCurrentAccessToken
}: SendTransactionDialogProps & { authMethod: any; getCurrentAccessToken: () => Promise<string | null> }) {
  const t = useTranslations('SendTransactionDialog')

  // transaction state
  const [to, setTo] = useState('') // email or wallet address
  const [recipientAddress, setRecipientAddress] = useState('')
  const [amount, setAmount] = useState('')

  // Token state
  const [tokenType, setTokenType] = useState<TokenType>('ETH')
  const [tokenInfo, setTokenInfo] = useState(SUPPORTED_TOKENS_INFO[tokenType])
  const [balance, setBalance] = useState("0");
  const [isLoadingBalance, setIsLoadingBalance] = useState(false);

  // Ref to track the current balance request to prevent race conditions
  const currentBalanceRequestRef = useRef<string | null>(null);

  // MFA state
  const [mfaMethodId, setMfaMethodId] = useState<string | null>(null);
  const [mfaPhoneNumber, setMfaPhoneNumber] = useState<string | null>(null);
  
  // Fee estimation state
  const [feeEstimation, setFeeEstimation] = useState<{
    estimatedFee: string;
    isSufficientForFee: boolean;
    feeRate?: string;
    transactionPriority?: string;
    remainingBalance?: string;
    error?: string;
  } | null>(null);
  const [isLoadingFee, setIsLoadingFee] = useState(false);

  const [isInviteUser, setIsInviteUser] = useState(false);

  // Load balance when token type changes
  useEffect(() => {
    async function loadBalance() {
      if (!addresses) {
        setBalance("0");
        return;
      }

      // Create a unique request ID to track this specific request
      const requestId = `${tokenType}-${Date.now()}`;
      currentBalanceRequestRef.current = requestId;

      try {
        // Reset balance immediately when token changes to prevent showing wrong balance
        setBalance("0");
        setIsLoadingBalance(true);

        let newBalance: string = "0";

        const tokenInfo = SUPPORTED_TOKENS_INFO[tokenType]

        if (tokenInfo.chainType === 'EVM' && !tokenInfo.contractAddress) {
          newBalance = await fetchEthBalance(addresses[tokenInfo.addressKey], tokenInfo.chainName);
        } else if (tokenInfo.chainType === 'UTXO') {
          const btcBalance = await fetchBtcBalance(addresses.btc);
          newBalance = btcBalance.toString();
        } else if (tokenInfo.chainType === 'EVM' && tokenInfo.contractAddress) {
          newBalance = await fetchERC20TokenBalance({
            address: addresses[tokenInfo.addressKey],
            tokenAddress: tokenInfo.contractAddress!,
            chainName: tokenInfo.chainName,
            decimals: tokenInfo.decimals
          });
        }

        // Only update balance if this is still the current request
        if (currentBalanceRequestRef.current === requestId) {
          setBalance(newBalance);
        }
      } catch (error) {
        console.error(`Failed to fetch ${tokenType} balance:`, error);
        // Only update balance if this is still the current request
        if (currentBalanceRequestRef.current === requestId) {
          setBalance("0");
        }
      } finally {
        // Only update loading state if this is still the current request
        if (currentBalanceRequestRef.current === requestId) {
          setIsLoadingBalance(false);
        }
      }
    }

    loadBalance();
  }, [tokenType, addresses]);

  // Update tokenInfo when tokenType changes
  useEffect(() => {
    setTokenInfo(SUPPORTED_TOKENS_INFO[tokenType])
    // Reset fee estimation when token changes
    setFeeEstimation(null);
  }, [tokenType])

  useEffect(() => {
    if (showSendDialog) {
      setTo('')
      setRecipientAddress('')
      setAmount('')
      setTokenType('ETH')
      setFeeEstimation(null);
    }
  }, [showSendDialog])

  // Reset amount when parent signals success
  useEffect(() => {
    if (resetAmount) {
      setAmount('')
    }
  }, [resetAmount])

  useEffect(() => {
    if (isValidEmail(to) && !recipientAddress) {
      setIsInviteUser(true);
    } else {
      setIsInviteUser(false);
    }
  }, [recipientAddress, to])

  useEffect(() => {
    const fetchMfaData = async () => {
      try {
        const accessToken = await getCurrentAccessToken();
        if (!accessToken) {
          throw new Error('No access token available');
        }

        const response = await fetch('/api/mfa/get-user-phone', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
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
        throw error;
      }
    }

    fetchMfaData()
  }, [])

  const isValidAmount = useMemo(() => {
    return !isNaN(Number(amount)) && Number(amount) > 0
  }, [amount])
  
  // Calculate fees effect
  useEffect(() => {
    async function calculateFees() {
      // Only calculate fees when we have a valid amount and balance
      if (!isValidAmount || !balance || amount === '' || Number(amount) <= 0) {
        setFeeEstimation(null);
        return;
      }
      
      try {
        setIsLoadingFee(true);
        // Call the fee estimation function
        let estimation;
        if (tokenType === 'BTC') {
          const sendAddress = addresses?.btc || '';
          estimation = await estimateGasFee({
            tokenType,
            balance,
            sendAddress,
            recipientAddress: recipientAddress || sendAddress,
            amount,
          });
        } else {
          estimation = await estimateGasFee({ tokenType, balance });
        }
        
        setFeeEstimation(estimation);
      } catch (error) {
        console.error("Error calculating fees:", error);
        setFeeEstimation({
          estimatedFee: "0",
          isSufficientForFee: true,
          error: "Failed to estimate fee"
        });
      } finally {
        setIsLoadingFee(false);
      }
    }
    
    calculateFees();
  }, [tokenType, isValidAmount, balance, amount, recipientAddress, addresses]); // Added dependencies to ensure no caching

  // Check if balance is sufficient for amount + fees
  const isBalanceSufficient = useMemo(() => {
    if (!isValidAmount) return true;
    
    // If we have fee estimation, use it
    if (feeEstimation) {
      const totalRequired = Number(amount) + Number(feeEstimation.estimatedFee);
      return Number(balance) >= totalRequired;
    }
    
    // Fallback to simple check if no fee estimation available
    return Number(balance) >= Number(amount);
  }, [amount, balance, isValidAmount, feeEstimation]);

  // Validation
  const canSend = useMemo(() => {
    const isValidEthAddress = recipientAddress && recipientAddress.startsWith('0x') && recipientAddress.length === 42
    const isValidBtcAddress = recipientAddress

    // Include fee estimation in validation
    const hasSufficientFunds = 
      isBalanceSufficient && 
      (!feeEstimation || feeEstimation.isSufficientForFee);

    return (isValidEthAddress || isValidBtcAddress || isInviteUser) && 
           isValidAmount && 
           !isSending && 
           hasSufficientFunds && 
           !isLoadingFee &&
           !isLoadingBalance;
  }, [recipientAddress, isValidAmount, isSending, isBalanceSufficient, feeEstimation, isLoadingFee, isLoadingBalance]);

  // Function to send OTP
  const handleSendOtp = async () => {
    const accessToken = await getCurrentAccessToken();
    if (!accessToken) {
      throw new Error('No access token available');
    }

    const response = await fetch('/api/mfa/whatsapp/send-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ phone_number: mfaPhoneNumber }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Failed to send OTP: ${response.status}`);
    }
    
    const data = await response.json();
    log('data handleSendOtp', data)
  };

  const handleOtpVerify = async (otp: string) => {
    if (onMFAVerify) {
      await onMFAVerify({ to, recipientAddress, amount, tokenType, mfaMethodId, mfaPhoneNumber, otpCode: otp })
    }
  }

  const handleAddressFound = useCallback((addressData: any) => {
    if (addressData) {
      const tokenKey = SUPPORTED_TOKENS_INFO[tokenType].addressKey;
      setRecipientAddress(addressData.addresses?.[tokenKey] || '');
    } else {
      setRecipientAddress('');
    }
  }, [tokenType]);


  const onSendClick = async () => {
    try {
      if (isInviteUser) {
        // if there is no recipient address, invite user
        onInviteUser({ to, recipientAddress, amount, tokenType, mfaMethodId, mfaPhoneNumber });
      } else {
        // Send transaction to recipient - security verification is now handled by parent component
        await onSendTransaction({ to, recipientAddress, amount, tokenType, mfaMethodId, mfaPhoneNumber });
      }
    } catch (error) {
    }
  }

  return (
    <>
      {/* MFA Dialog - overlays on top of main dialog */}
      {showMfa && mfaPhoneNumber && (
        <MFAOtpDialog
          isOpen={showMfa}
          onClose={onMFACancel || (() => {})}
          onOtpVerify={handleOtpVerify}
          sendOtp={handleSendOtp}
          identifier={mfaPhoneNumber}
          title={t('otp_title')}
          description={t('otp_description', {
            amount,
            symbol: tokenInfo.symbol,
            to,
          })}
        />
      )}


      {/* Main Send Transaction Dialog */}
    <Dialog open={showSendDialog} onOpenChange={onDialogOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {walletName ? t('full_title', {address: walletName}) : t('title')}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="token-type">{t('select_token')}</Label>
            <SelectToken
              onSelect={(value) => {
                if (value !== "all") {
                  setTokenType(value)
                }
              }}
              defaultValue={tokenType}
            />
          </div>

          <SignerEmailField
            label={t('recipient')}
            input={{
              value: to,
              onChange: (value) => setTo(value),
              placeholder: t('recipient_holder', { symbol: tokenInfo.symbol }),
              id: "recipient"
            }}
            onAddressFound={handleAddressFound}
            tokenType={tokenType}
            allowUnregisteredEmail={true}
          />

          <div className="space-y-2">
            <Label htmlFor="amount">{t('amount', { 'symbol': tokenInfo.symbol })}</Label>
            <Input
              id="amount"
              type="number"
              placeholder="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
              className={amount && (!isValidAmount || (isValidAmount && !isBalanceSufficient)) ? 'border-red-500' : ''}
            />
            
            {/* Fee information display */}
            {isLoadingFee && (
              <p className="text-xs text-gray-500">{t('calc_network_fee')}</p>
            )}
            
            {!isLoadingFee && feeEstimation && amount && isValidAmount && (
              <div className="text-xs space-y-1">
                <p className="text-gray-500">
                  Estimated network fee: {feeEstimation.estimatedFee} {tokenInfo.gasFeeSymbol}
                  {feeEstimation.feeRate && ` (${feeEstimation.feeRate})`}
                </p>
                
                {/* {feeEstimation.transactionPriority && (
                  <p className="text-gray-500">
                    Priority: <span className={feeEstimation.transactionPriority === 'high' ? 'text-green-600' : 'text-yellow-600'}>
                      {feeEstimation.transactionPriority}
                    </span>
                  </p>
                )} */}
                
                {feeEstimation.error && (
                  <p className="text-red-500">{feeEstimation.error}</p>
                )}
                
                {!feeEstimation.isSufficientForFee && !feeEstimation.error && (
                  <p className="text-red-500">{t('insufficient_network_fee')}</p>
                )}
              </div>
            )}
            
            {amount && !isValidAmount && (
              <p className="text-red-500 text-xs">{t('invalid_amount')}</p>
            )}
            
            {amount && isValidAmount && isBalanceSufficient === false && (
              <p className="text-red-500 text-xs">{t('insufficient_funds')}</p>
            )}
            
            {/* Balance display with loading indicator */}
            <p className="text-xs text-gray-500">
              {t('balance', {
                value: isLoadingBalance ? 'Loading...' : balance,
                symbol: tokenInfo.symbol,
              })}
            </p>
          </div>

          <Button 
            onClick={onSendClick} 
            disabled={!canSend}
            className="w-full"
          >
            {isSending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t('sending')}
              </>
            ) : (
              isInviteUser ? t('invite_user') : t('send', { symbol: tokenInfo.symbol })
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
    </>
  )
}
