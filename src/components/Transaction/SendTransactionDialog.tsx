import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import { SignerEmailField } from "../SignerEmailField";
import { SUPPORTED_TOKENS_INFO, TokenType } from "@/lib/web3/token";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";
import { SelectToken } from "../SelectToken";
import { AuthMethod } from "@lit-protocol/types";
import { MFAOtpDialog } from "./MFAOtpDialog";
import { log } from "@/lib/utils";

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
  isSending: boolean
  onMFACancel: () => void
  onMFAVerify: (state: SendTransactionDialogState) => Promise<void>
  onDialogOpenChange: (open: boolean) => void
}

export function SendTransactionDialog({
  authMethod,
  showSendDialog,
  showMfa,
  onSendTransaction,
  isSending,
  onMFACancel,
  onMFAVerify,
  onDialogOpenChange,
}: SendTransactionDialogProps) {
  // transaction state
  const [to, setTo] = useState('') // email or wallet address
  const [recipientAddress, setRecipientAddress] = useState('')
  const [amount, setAmount] = useState('')

  // Token state
  const [tokenType, setTokenType] = useState<TokenType>('ETH')
  const [tokenInfo, setTokenInfo] = useState(SUPPORTED_TOKENS_INFO[tokenType])

  // MFA state
  const [mfaMethodId, setMfaMethodId] = useState<string | null>(null);
  const [mfaPhoneNumber, setMfaPhoneNumber] = useState<string | null>(null);

  // Update tokenInfo when tokenType changes
  useEffect(() => {
    setTokenInfo(SUPPORTED_TOKENS_INFO[tokenType])
  }, [tokenType])

  useEffect(() => {
    if (showSendDialog) {
      setTo('')
      setRecipientAddress('')
      setAmount('')
      setTokenType('ETH')
    }
  }, [showSendDialog])

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

  // Validation
  const canSend = useMemo(() => {
    const isValidEthAddress = recipientAddress && recipientAddress.startsWith('0x') && recipientAddress.length === 42
    const isValidBtcAddress = recipientAddress

    return (isValidEthAddress || isValidBtcAddress) && isValidAmount && !isSending
  }, [recipientAddress, isValidAmount, isSending])

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
    await onMFAVerify({ to, recipientAddress, amount, tokenType, mfaMethodId, mfaPhoneNumber, otpCode: otp })
  }

  // Display MFA component
  if (showMfa && mfaPhoneNumber) {
    return (
      <MFAOtpDialog
        isOpen={showMfa}
        onClose={onMFACancel}
        onOtpVerify={handleOtpVerify}
        sendOtp={handleSendOtp}
        identifier={mfaPhoneNumber}
        title="Transaction Verification"
        description={`Please verify your transaction of ${amount} ${tokenInfo.symbol} to ${to}`}
      />
    );
  }

  return (
    <Dialog open={showSendDialog} onOpenChange={onDialogOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send</DialogTitle>
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
            onAddressFound={(addressData) => {
              if (addressData) {
                const tokenKey = tokenType.toLowerCase();
                setRecipientAddress(addressData.addresses?.[tokenKey] || '');
              } else {
                setRecipientAddress('');
              }
            }}
            tokenType={tokenType}
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
              className={amount && !isValidAmount ? 'border-red-500' : ''}
            />
            {amount && !isValidAmount && (
              <p className="text-red-500 text-xs">Please enter a valid amount</p>
            )}
          </div>

          <Button 
            onClick={() => onSendTransaction({ to, recipientAddress, amount, tokenType, mfaMethodId, mfaPhoneNumber })} 
            disabled={!canSend}
            className="w-full"
          >
            {isSending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              `Send ${tokenInfo.symbol}`
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
