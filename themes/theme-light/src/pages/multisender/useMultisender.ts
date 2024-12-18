import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { TokenType } from "@/types/tokens";
import { Address, isAddress, parseEther } from "viem";
import { auth, emailRegex, formatNumberWithCommas, getEstimatedBatchGasFeeByToken, log } from "@/lib/utils";
import api from "@/lib/api";
import { useTranslation } from "react-i18next";
import { ToInputValidationState } from "@/pages/multisender/components/ToInput";
import { useDebounce } from "@/hooks/useDebounce";
import { useTokenBalance } from "@/hooks/useTokenBalance";
import { useTokenPrice } from "@/hooks/useTokenPrice";
import { TokenTransferred } from "../profile/components/DailyTransactionLimitModal";
import { useDailyWithdrawalLimits } from "@/hooks/useDailyWithdrawalLimits";

export interface Transfer {
  to: string;
  note: string;
  amount: string;
  token: TokenType;
  balance: string;
}

export interface TotalAmount extends Record<TokenType, string> {
  usdValue: string;
}

export type GasFees = Partial<Record<TokenType, string>> & {
  usdValue?: string;
}

export function useMultisender() {
  const { address } = auth.all()
  const { t } = useTranslation();
  const { data: ethBalance, isFetched: ethBalanceFetched } = useTokenBalance('ETH')
  const { data: maticBalance, isFetched: maticBalanceFetched } = useTokenBalance('MATIC')
  const { data: tvwtBalance, isFetched: tvwtBalanceFetched } = useTokenBalance('TVWT')
  const { data: tokenPrices } = useTokenPrice();
  const { data: defaultLimits } = useDailyWithdrawalLimits();
  const [todayTokenTransferred, setTodayTokenTransferred] = useState<TokenTransferred | null>(null);

  const [transfers, setTransfers] = useState<Transfer[]>([]);
  const [toValidations, setToValidations] = useState<ToInputValidationState[]>([]);
  const [sending, setSending] = useState(false);
  const [isEstimatingFee, setIsEstimatingFee] = useState(false);

  const [totalAmount, setTotalAmount] = useState<TotalAmount>({
    ETH: '0',
    MATIC: '0',
    TVWT: '0',
    usdValue: '0'
  });

  const [gasFees, setGasFees] = useState<GasFees | null>(null);
  const previousStateRef = useRef<string>('');

  const debouncedTransfers = useDebounce(transfers, 800);
  const debouncedToValidations = useDebounce(toValidations, 800);

  // init transfers
  useEffect(() => {
    if (ethBalanceFetched && maticBalanceFetched && tvwtBalanceFetched) {
      initTransfers();
    }
  }, [ethBalanceFetched, maticBalanceFetched, tvwtBalanceFetched]);

  // init today's token transferred
  useEffect(() => {
    fetchTransferred();
  }, []);

  // calculate total amount
  useEffect(() => {
    const total = {
      ETH: 0,
      MATIC: 0,
      TVWT: 0
    };

    transfers.forEach(transfer => {
      if (transfer.amount && !isNaN(parseFloat(transfer.amount))) {
        total[transfer.token] += parseFloat(transfer.amount);
      }
    });

    const usdValue = tokenPrices ?
      total.ETH * parseFloat(tokenPrices.ETH) +
      total.MATIC * parseFloat(tokenPrices.MATIC) +
      total.TVWT * parseFloat(tokenPrices.TVWT) :
      0;

    setTotalAmount({
      ETH: total.ETH.toString(),
      MATIC: total.MATIC.toString(),
      TVWT: total.TVWT.toString(),
      usdValue: formatNumberWithCommas(usdValue.toString(), 2)
    });
  }, [transfers, tokenPrices]);

  // token balances
  const tokenBalances = useMemo(() => {
    return {
      ETH: ethBalance?.balance || '0',
      MATIC: maticBalance?.balance || '0',
      TVWT: tvwtBalance?.balance || '0',
    }
  }, [ethBalance, maticBalance, tvwtBalance]);

  const hasInsufficientBalance = useMemo(() => 
    Object.entries(totalAmount)
      .filter(([token]) => token !== 'usdValue')
      .some(([token, amount]) => {
        return parseFloat(amount) > parseFloat(tokenBalances[token as TokenType] || '0')
      }
      ),
    [totalAmount, tokenBalances]
  );

  // check if send button is disabled
  const isDisabled = useMemo(() => {
    return transfers.some((t, index) => {
      // check if required fields are empty
      if (!t.to || !t.amount || !t.token) {
        return true;
      }

      // check if address/email is valid
      const validation = toValidations[index];
      if (validation?.error || validation?.isValidating) {
        return true;
      }

      // check if amount is valid
      const amount = parseFloat(t.amount);
      if (isNaN(amount) || amount <= 0) {
        return true;
      }

      // check if balance is enough
      if (hasInsufficientBalance) {
        return true;
      }

      return false;
    });
  }, [transfers, toValidations, hasInsufficientBalance]);

  // check if there is any content, used for exit prompt
  const hasContent = useMemo(() => {
    return transfers.some(t => t.to || t.note || t.amount);
  }, [transfers]);

  // validate address/email and amount when transfers change
  useEffect(() => {
    debouncedTransfers.forEach((transfer, index) => {
      if (transfer.to) {
        // if address is empty, it will be validated by blur event
        // to avoid displaying error message when first input is empty
        validateAddress(transfer.to, index);
      }
    });
  }, [debouncedTransfers]);

  // calculate gas fee when toValidations or debouncedTransfers change
  useEffect(() => {
    calculateGasFee();
  }, [debouncedToValidations, debouncedTransfers]);

  const calculateGasFee = useCallback(async () => {
    // compare state
    const currentState = JSON.stringify({
      validations: debouncedToValidations,
      transfers: debouncedTransfers
    });
    
    // if state is the same, skip calculation
    if (currentState === previousStateRef.current) {
      return;
    }
    previousStateRef.current = currentState;

    // check if send button is disabled
    if (isDisabled) {
      return;
    }

    // filter out valid transfer params
    const getValidTransferParams = (tokenType: TokenType) => {
      return debouncedTransfers
        .filter((t, index) => {
          const isValid = t.token === tokenType && t.amount && (
            // case 1: direct address
            isAddress(t.to) ||
            // case 2: registered email, has fullAddress
            (debouncedToValidations[index]?.fullAddress)
          )
          return isValid;
        })
        .map((t, index) => ({
          to: isAddress(t.to)
            ? t.to as Address
            : debouncedToValidations[index]?.fullAddress as Address,
          amount: parseEther(t.amount)
        }));
    };

    const ethTransferParams = getValidTransferParams('ETH');
    const maticTransferParams = getValidTransferParams('MATIC');
    const tvwtTransferParams = getValidTransferParams('TVWT');

    setIsEstimatingFee(true);
    try {
      const tokenTypes: TokenType[] = ['ETH', 'MATIC', 'TVWT'];
      const transferParamsMap = {
        ETH: ethTransferParams,
        MATIC: maticTransferParams,
        TVWT: tvwtTransferParams
      };

      for (const token of tokenTypes) {
        const params = transferParamsMap[token];
        if (params.length > 0) {
          log('start estimating gas fee', token, params);
          const fee = await getEstimatedBatchGasFeeByToken(token, params, address);
          if (fee) {
            setGasFees(prev => ({
              ...prev,
              [token]: fee.feeInTokens,
            }));
          }
        } else {
          setGasFees(prev => ({
            ...prev,
            [token]: undefined
          }));
        }
      }

      // calculate usd value
      if (gasFees && tokenPrices) {
        const ethUsdValue = gasFees.ETH ? parseFloat(gasFees.ETH) * parseFloat(tokenPrices.ETH) : 0;
        const maticUsdValue = gasFees.MATIC ? parseFloat(gasFees.MATIC) * parseFloat(tokenPrices.MATIC) : 0;
        const tvwtUsdValue = gasFees.TVWT ? parseFloat(gasFees.TVWT) * parseFloat(tokenPrices.TVWT) : 0;

        const usdValue = ethUsdValue + maticUsdValue + tvwtUsdValue;
        setGasFees(prev => ({
          ...prev,
          usdValue: formatNumberWithCommas(usdValue.toString(), 2)
        }));
      }
    } catch (error) {
      console.error('Failed to calculate gas fee:', error);
      setGasFees(null);
    } finally {
      setIsEstimatingFee(false);
    }
  }, [debouncedToValidations, debouncedTransfers, isDisabled]);

  const initTransfers = () => {
    setTransfers([{
      to: "",
      note: "",
      amount: '',
      token: "TVWT",
      balance: tokenBalances['TVWT'] || '0',
    }]);

    setToValidations([{
      isValidating: false,
      isValidEmail: false,
      fullAddress: '',
      error: ''
    }]);
  }

  const validateAddress = async (to: string, index: number) => {
    if (!to) {
      setToValidations(prev => {
        const newValidations = [...prev];
        newValidations[index] = {
          isValidating: false,
          isValidEmail: false,
          fullAddress: '',
          error: 'Address or email is required'
        };
        return newValidations;
      });
      return;
    }

    // display loading icon
    setToValidations(prev => {
      const newValidations = [...prev];
      newValidations[index] = {
        ...prev[index],
        isValidating: true
      };
      return newValidations;
    });

    try {
      if (isAddress(to)) {
        setToValidations(prev => {
          const newValidations = [...prev];
          newValidations[index] = {
            isValidating: false,
            isValidEmail: false,
            fullAddress: '',
            error: ''
          };
          return newValidations;
        });
        return;
      }

      if (!emailRegex.test(to)) {
        setToValidations(prev => {
          const newValidations = [...prev];
          newValidations[index] = {
            isValidating: false,
            isValidEmail: false,
            fullAddress: '',
            error: t('/dashboard.[token].sendModal.invalidEmailFormat')
          };
          return newValidations;
        });
        return;
      }

      const res = await api.get(`/address/`, {
        params: { email: to }
      });

      setToValidations(prev => {
        const newValidations = [...prev];
        newValidations[index] = {
          isValidating: false,
          isValidEmail: true,
          fullAddress: res.data.success ? res.data.address : '',
          error: res.data.success ? '' : t('/dashboard.[token].sendModal.unregisteredEmailNotice')
        };
        return newValidations;
      });

    } catch (err) {
      setToValidations(prev => {
        const newValidations = [...prev];
        newValidations[index] = {
          isValidating: false,
          isValidEmail: false,
          fullAddress: '',
          error: 'error'
        };
        return newValidations;
      });
    }
  };

  const fetchTransferred = async () => {
    try {
      const { data } = await api.post('/transaction/outbound-amount', {
        tokens: ['ETH', 'MATIC', 'TVWT'],
      });
      // data is in format of { ETH: '0', MATIC: '0', TVWT: '0' }
      // unit is wei
      setTodayTokenTransferred(data);
    } catch (error) {
      console.error('Failed to fetch token transferred:', error);
    }
  };

  const handleToChange = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.trim();
    const newTransfers = [...transfers];
    newTransfers[index].to = value;
    setTransfers(newTransfers);
  };

  const handleToBlur = (index: number) => {
    validateAddress(transfers[index].to, index);
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
    const newTransfers = [...transfers];
    newTransfers[index].note = e.target.value;
    setTransfers(newTransfers);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.trim();
    const newTransfers = [...transfers];
    newTransfers[index].amount = value;
    setTransfers(newTransfers);
  };

  const handleTokenTypeChange = async (type: TokenType, index: number) => {
    setIsEstimatingFee(false);

    try {
      const balance = tokenBalances[type] || '0';
      setTransfers(prev => {
        const newTransfers = [...prev];
        newTransfers[index] = {
          ...prev[index],
          token: type,
          amount: '',
          balance: balance,
        };
        return newTransfers;
      });
    } catch (error) {
      console.error('Failed to fetch balance:', error);
    }
  };

  const handleSend = async () => {
    setSending(true);
    try {
      // TODO: send
      await new Promise(resolve => setTimeout(resolve, 2000));
    } finally {
      setSending(false);
    }
  };

  const handleAddTransfer = () => {
    const newTransfer: Transfer = {
      to: "",
      note: "",
      amount: '',
      token: "TVWT",
      balance: tokenBalances['TVWT'] || '0',
    };
    setTransfers([...transfers, newTransfer]);

    setToValidations([...toValidations, {
      isValidating: false,
      isValidEmail: false,
      fullAddress: '',
      error: ''
    }]);
  }

  const handleDeleteTransfer = (index: number) => {
    setTransfers(transfers.filter((_, i) => i !== index));
    setToValidations(toValidations.filter((_, i) => i !== index));
  };

  return {
    transfers,
    toValidations,
    sending,
    isDisabled,
    hasContent,
    isEstimatingFee,
    tokenBalances,
    tokenPrices,
    hasInsufficientBalance,
    handleToChange,
    handleToBlur,
    handleNoteChange,
    handleAmountChange,
    handleTokenTypeChange,
    handleSend,
    handleAddTransfer,
    handleDeleteTransfer,
    totalAmount,
    todayTokenTransferred,
    defaultLimits,
    gasFees,
  };
}
