import { Modal } from "@/components/Modal";
import { Input } from "@/components/ui/input";
import { useTokenPrice } from "@/hooks/useTokenPrice";
import { cn, handleError, log } from "@/lib/utils";
import { useState, useEffect, useMemo } from "react";
import api from "@/lib/api";
import { formatEther, parseEther } from "viem";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { LogoLoading } from "@/components/LogoLoading";
import { TokenRecord, TokenType } from "@/types/tokens";
import { useAllTokenBalances } from "@/hooks/useTokenBalance";
import { theTokenListingService } from "@/services/TokenListingService";
import { VerificationModal } from "@/components/VerificationModal";
import { otpService } from "@/services/OTPService";

interface TokenConfig {
  type: TokenType;
  balance: string;
  todayTransferred?: string;
}

export function DailyTransactionLimitModal({
  isOpen,
  onClose,
  defaultLimits,
}: {
  isOpen: boolean;
  onClose: (reload?: boolean) => void;
  defaultLimits: Record<TokenType, string>;
}) {
  const {data: tokenBalances} = useAllTokenBalances()

  const { data: tokenPrices } = useTokenPrice();
  const [tokenTransferred, setTokenTransferred] = useState<TokenRecord<string> | null>(null);
  const [loading, setLoading] = useState(false);

  const [limits, setLimits] = useState<Record<TokenType, string>>(theTokenListingService.createTokenMap(() => ''));
  const [verificationOpen, setVerificationOpen] = useState(false);
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [pendingLimits, setPendingLimits] = useState<{ type: TokenType; value: string }[]>([]);

  useEffect(() => {
    if (isOpen) {
      init();
    }
  }, [isOpen]);

  const disabledButton = useMemo(() => {
    return theTokenListingService.getAllTokens().some(token => !limits[token.tokenType]);
  }, [limits]);

  const init = async () => {
    fetchTransferred();
    setLimits(defaultLimits);
  };

  const fetchTransferred = async () => {
    try {
      const { data } = await api.post('/transaction/outbound-amount', {
        tokens: theTokenListingService.getAllTokens().map(t => t.tokenType),
      });
      setTokenTransferred(data);
    } catch (error) {
      console.error('Failed to fetch token transferred:', error);
    }
  };

  const tokens: TokenConfig[] = useMemo(() => theTokenListingService.getAllTokens().map(token => ({
    type: token.tokenType,
    balance: tokenBalances?.[token.tokenType] || '0',
    todayTransferred: tokenTransferred?.[token.tokenType] || '0'
  })), [tokenBalances, tokenTransferred]);

  const handleLimitChange = (type: TokenType, value: string) => {
    // Only allow numbers and decimal point
    if (value && !/^\d*\.?\d*$/.test(value)) return;
    
    setLimits(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const calculateUSDValue = (type: TokenType, amount: string): string => {
    if (!amount || !tokenPrices || !tokenPrices[type]) return '0';
    
    const price = parseFloat(tokenPrices[type]);
    const tokenAmount = parseFloat(amount);
    
    if (isNaN(price) || isNaN(tokenAmount)) return '0';
    
    return (price * tokenAmount).toFixed(2);
  };

  const handleSave = async () => {
    log(limits, 'limits')
    
    try {
      setLoading(true);
      const limitsInWei: { type: TokenType; value: string }[] = theTokenListingService.getAllTokens().map(token => ({
        type: token.tokenType,
        value: parseEther(limits[token.tokenType] || '0').toString()
      }));
      
      setPendingLimits(limitsInWei);

      await api.post('/auth/generate-otp-for-daily-limit-update', {
        limits: limitsInWei,
      });

      if (otpService.getVerifyMethod() === 'email-by-nodemailer') {
        toast.info('Please check your email to confirm the transaction limit update', {
          autoClose: false,
          closeButton: true,
        });
        onClose();
      } else if (otpService.getVerifyMethod() === 'email-by-sendgrid') {
        setVerificationOpen(true);
      }
    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (code: string) => {
    try {
      setVerificationLoading(true);
      await api.post('/user/update-daily-withdrawal-limits-with-otp', {
        otp: code,
        limits: pendingLimits,
      });
      toast.success('Daily transaction limit successfully updated');
      setVerificationOpen(false);
      onClose(true);
    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
    } finally {
      setVerificationLoading(false);
    }
  };

  const formatTransactionAmount = (amount: string): string => {
    if (amount === undefined || amount === null) {
      return '0';
    }
    const formattedAmount = formatEther(BigInt(amount))
    return formattedAmount
  };

  const handleClose = () => {
    onClose();
  }

  const footer = <div className="flex justify-end gap-4">
    <Button className="hidden tablet:block" variant={'outline'} onClick={() => handleClose()}>Cancel</Button>
    <Button
      className="w-full tablet:w-auto"
      disabled={disabledButton || loading}
      onClick={() => {
        handleSave()
      }}
    >
      {loading ? <LogoLoading /> : 'Save'}
    </Button>
  </div>

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Daily Transaction Limit"
      footer={footer}
      contentClassName="p-6 max-h-[80vh] overflow-y-auto"
      className="z-[10002]"
    >
      {tokens.map((token, index) => (
        <div key={token.type} className={index > 0 ? 'mt-6' : ''}>
          <p className="text-black text-sm font-medium leading-none mb-[6px]">{token.type} daily limit</p>
          <div className={cn(
            "tablet:flex items-center justify-between",
          )}>
            <div className="flex items-center gap-2 text-[#a1a1a1] text-sm font-normal leading-none">
              <Input 
                className="w-[131px] text-black"
                value={limits[token.type]}
                onChange={(e) => handleLimitChange(token.type, e.target.value)}
                placeholder="Enter limit"
                disabled={loading}
              />
              <p>~{calculateUSDValue(token.type, limits[token.type])} USDT</p>
            </div>
            <div className={cn(
              "flex items-center gap-2 text-sm font-normal leading-none",
              'mt-[20px] tablet:mt-0'
            )}>
              <p className="text-[#a1a1a1]">Balance:</p>
              <p className="text-black">{token.balance} {token.type}</p>
            </div>
          </div>
          <div className="mt-3 bg-black/5 border-black/10 rounded-[8px] py-3 px-4 flex items-center gap-2.5">
            <img src="/imgs/icons/information_filled.svg" width={16} height={16} alt="" />
            <p className="text-black text-xs font-normal leading-none">
              {loading ? '' : `You've transferred ${formatTransactionAmount(token.todayTransferred ?? '0')} ${theTokenListingService.getToken(token.type as TokenType).symbol} today`}
            </p>
          </div>
        </div>
      ))}
      <VerificationModal
        isOpen={verificationOpen}
        onClose={() => setVerificationOpen(false)}
        loading={verificationLoading}
        onVerify={handleVerify}
        modalClassName="z-[10004]"
      />
    </Modal>
  );
}
