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
import { TokenType } from "@/types/tokens";

interface TokenConfig {
  type: 'ETH' | 'MATIC' | 'TVWT';
  balance: string;
  todayTransferred?: number;
}

interface TokenLimit {
  [key: string]: string;
}

interface TokenPrices {
  ETH: string;
  MATIC: string;
  TVWT: string;
}

interface TokenTransferred {
  ETH: number;
  MATIC: number;
  TVWT: number;
}

export function DailyTransactionLimitModal({
  isOpen,
  onClose,
  ethBalance,
  maticBalance,
  tvwtBalance,
}: {
  isOpen: boolean;
  onClose: () => void;
  ethBalance: string;
  maticBalance: string;
  tvwtBalance: string;
}) {
  const { data: tokenPrices } = useTokenPrice();
  const [tokenTransferred, setTokenTransferred] = useState<TokenTransferred | null>(null);
  const [loading, setLoading] = useState(false);

  const [limits, setLimits] = useState<TokenLimit>({
    ETH: '',
    MATIC: '',
    TVWT: ''
  });

  useEffect(() => {
    if (isOpen) {
      init();
    }
  }, [isOpen]);

  const disabledButton = useMemo(() => {
    return !limits.ETH || !limits.MATIC || !limits.TVWT;
  }, [limits]);

  const init = async () => {
    fetchDefaultLimits();
    fetchTransferred();
  };

  const fetchDefaultLimits = async () => {
    try {
      const { data } = await api.get('/transaction/default-daily-withdrawal-limits', {
        params: {
          includeUserLimits: true,
        }
      });
      // Convert Wei to Ether for each token
      const convertedLimits = {
        ETH: formatEther(BigInt(data.ETH ?? 0)), // Default to 0 if undefined
        MATIC: formatEther(BigInt(data.MATIC ?? 0)), // Default to 0 if undefined
        TVWT: formatEther(BigInt(data.TVWT ?? 0)) // Default to 0 if undefined
      };
      setLimits(convertedLimits);
    } catch (error) {
      console.error('Failed to fetch default limits:', error);
    }
  };

  const fetchTransferred = async () => {
    try {
      const { data } = await api.post('/transaction/outbound-amount', {
        tokens: ['ETH', 'MATIC', 'TVWT'],
      });
      setTokenTransferred(data);
    } catch (error) {
      console.error('Failed to fetch token transferred:', error);
    }
  };

  const tokens: TokenConfig[] = useMemo(() => [
    { type: 'ETH', balance: ethBalance, todayTransferred: tokenTransferred?.ETH || 0 },
    { type: 'MATIC', balance: maticBalance, todayTransferred: tokenTransferred?.MATIC || 0 },
    { type: 'TVWT', balance: tvwtBalance, todayTransferred: tokenTransferred?.TVWT || 0 },
  ], [ethBalance, maticBalance, tvwtBalance, tokenTransferred]);

  const handleLimitChange = (type: keyof TokenLimit, value: string) => {
    // Only allow numbers and decimal point
    if (value && !/^\d*\.?\d*$/.test(value)) return;
    
    setLimits(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const calculateUSDValue = (type: keyof TokenPrices, amount: string): string => {
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
      const limitsInWei: { type: TokenType; value: string }[] = [
        {
          type: 'ETH',
          value: parseEther(limits.ETH || '0').toString()
        },
        {
          type: 'MATIC',
          value: parseEther(limits.MATIC || '0').toString()
        },
        {
          type: 'TVWT',
          value: parseEther(limits.TVWT || '0').toString()
        }
      ];
      await api.post('/auth/generate-otp-for-daily-limit-update', {
        limits: limitsInWei,
      });
      toast.info('Please check your email to confirm the transaction limit update', {
        autoClose: false,
        closeButton: true,
      });
      onClose();
    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
    } finally {
      setLoading(false);
    }
  };

  const formatTransactionAmount = (amount: number): string => {
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
      contentClassName="p-6"
    >
      {tokens.map((token, index) => (
        <div key={token.type} className={index > 0 ? 'mt-6' : ''}>
          <p className="text-black text-sm font-medium leading-none mb-[6px]">{token.type} daily limit</p>
          <div className={cn(
            "tablet:flex items-center justify-between",
          )}>
            <div className="flex items-center gap-2 text-[#a1a1a1] text-sm font-normal leading-none">
              <Input 
                className="w-[131px]"
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
              <p className="text-[#a1a1a1]">Balance</p>
              <p className="text-black">{token.balance} {token.type}</p>
            </div>
          </div>
          <div className="mt-3 bg-black/5 border-black/10 rounded-[8px] py-3 px-4 flex items-center gap-2.5">
            <img src="/imgs/icons/information_filled.svg" width={16} height={16} alt="" />
            <p className="text-black text-xs font-normal leading-none">
              {loading ? 'Loading...' : `You've transferred ${formatTransactionAmount(token.todayTransferred ?? 0)} ${token.type} today`}
            </p>
          </div>
        </div>
      ))}
    </Modal>
  );
}
