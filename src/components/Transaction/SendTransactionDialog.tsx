import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect, useMemo, useState, useCallback } from "react";
import { Button } from "../ui/button";
import { SignerEmailField } from "../SignerEmailField";
import { SUPPORTED_TOKENS_INFO, TokenType } from "@/lib/web3/token";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";
import { SelectToken } from "../SelectToken";
import { AuthMethod } from "@lit-protocol/types";
import { MFAOtpDialog } from "./MFAOtpDialog";
import { isValidEmail, log } from "@/lib/utils";
import { estimateGasFee } from "@/lib/web3/transaction";
import { fetchEthBalance, fetchERC20TokenBalance } from "@/lib/web3/eth";
import { fetchBtcBalance } from "@/lib/web3/btc";
import { MultisigWalletAddresses } from "@/app/api/multisig/storage";

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
  authMethod: AuthMethod
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
}

export function SendTransactionDialog({
  authMethod,
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
}: SendTransactionDialogProps) {
  // transaction state
  const [to, setTo] = useState('') // email or wallet address
  const [recipientAddress, setRecipientAddress] = useState('')
  const [amount, setAmount] = useState('')

  // Token state
  const [tokenType, setTokenType] = useState<TokenType>('ETH')
  const [tokenInfo, setTokenInfo] = useState(SUPPORTED_TOKENS_INFO[tokenType])
  const [balance, setBalance] = useState("0");
  const [isLoadingBalance, setIsLoadingBalance] = useState(false);

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
        
        setBalance(newBalance);
      } catch (error) {
        console.error(`Failed to fetch ${tokenType} balance:`, error);
        setBalance("0");
      } finally {
        setIsLoadingBalance(false);
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
        const estimation = await estimateGasFee({
          tokenType,
          balance
        });
        
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
  }, [tokenType, isValidAmount, balance, amount]);

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
    const response = await fetch('/api/mfa/whatsapp/send-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authMethod.accessToken}`,
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
        log('amount is', amount)
        // if there is a recipient address, send transaction to recipient
        onSendTransaction({ to, recipientAddress, amount, tokenType, mfaMethodId, mfaPhoneNumber });
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
          title="Transaction Verification"
          description={`Please verify your transaction of ${amount} ${tokenInfo.symbol} to ${to}`}
        />
      )}

      {/* Main Send Transaction Dialog */}
    <Dialog open={showSendDialog} onOpenChange={onDialogOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{walletName ? `Send from ${walletName}` : 'Send'}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="token-type">Select Token</Label>
            <SelectToken
              onSelect={(value) => setTokenType(value)}
              defaultValue={tokenType}
            />
          </div>

          <SignerEmailField
            label="Recipient"
            input={{
              value: to,
              onChange: (value) => setTo(value),
              placeholder: `Email address or ${tokenInfo.symbol} address`,
              id: "recipient"
            }}
            onAddressFound={handleAddressFound}
            tokenType={tokenType}
            allowUnregisteredEmail={true}
          />

          <div className="space-y-2">
            <Label htmlFor="amount">Amount ({tokenInfo.symbol})</Label>
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
              <p className="text-xs text-gray-500">Calculating network fee...</p>
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
                
                {!feeEstimation.isSufficientForFee && (
                  <p className="text-red-500">Insufficient funds for network fee</p>
                )}
              </div>
            )}
            
            {amount && !isValidAmount && (
              <p className="text-red-500 text-xs">Please enter a valid amount</p>
            )}
            
            {amount && isValidAmount && isBalanceSufficient === false && (
              <p className="text-red-500 text-xs">Insufficient funds for this transaction</p>
            )}
            
            {/* Balance display with loading indicator */}
            <p className="text-xs text-gray-500">
              Balance: {isLoadingBalance ? 'Loading...' : balance} {tokenInfo.symbol}
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
                Sending...
              </>
            ) : (
              isInviteUser ? `Invite Unregistered User` : `Send ${tokenInfo.symbol}`
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
    </>
  )
}
