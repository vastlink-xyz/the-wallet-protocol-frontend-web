import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { TokenType } from "@/types/tokens";
import { Address, isAddress, parseEther } from "viem";
import { auth, emailRegex, formatDecimal, formatNumberWithCommas, handleError, log } from "@/lib/utils";
import api from "@/lib/api";
import { useTranslation } from "react-i18next";
import { ToInputValidationState } from "./ToInput";
import { useDebounce } from "@/hooks/useDebounce";
import { useTokenBalance } from "@/hooks/useTokenBalance";
import { useTokenPrice } from "@/hooks/useTokenPrice";
import { TokenTransferred } from "@/pages/profile/components/DailyTransactionLimitModal";
import { useDailyWithdrawalLimits } from "@/hooks/useDailyWithdrawalLimits";
import { useTransaction } from "@/components/VastWalletConnect/useTransaction";
import { TransactionType } from "@/types/transaction";
import { TransferResult } from "../../page";
import { clearEmailValidationCache, getEstimatedGasFeeByToken, validateCsvData, validateEmailWithCache } from "./helper";
import Papa from 'papaparse';
import { toast } from "react-toastify";

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

export function useMultisender({
  onSent,
}: {
  onSent: (results: TransferResult[], gasFees: GasFees | null, totalAmount: TotalAmount) => void;
}) {
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
  const [amountRequiredValidations, setAmountRequiredValidations] = useState<boolean[]>([]);
  const [sending, setSending] = useState(false);
  const [isEstimatingFee, setIsEstimatingFee] = useState(false);

  const [totalAmount, setTotalAmount] = useState<TotalAmount>({
    ETH: '0',
    MATIC: '0',
    TVWT: '0',
    usdValue: '0'
  });

  const [gasFees, setGasFees] = useState<GasFees | null>(null);

  const debouncedTransfers = useDebounce(transfers, 800);
  const debouncedToValidations = useDebounce(toValidations, 800);

  const { signTransaction } = useTransaction()

  // init transfers
  useEffect(() => {
    if (ethBalanceFetched && maticBalanceFetched && tvwtBalanceFetched) {
      initTransfers();
    }
  }, [ethBalanceFetched, maticBalanceFetched, tvwtBalanceFetched]);

  // init today's token transferred
  useEffect(() => {
    clearEmailValidationCache();
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
        const tokenType = token as TokenType;
        const totalBalance = parseFloat(tokenBalances[tokenType] || '0');
        const transferAmount = parseFloat(amount);
        const gasFeeAmount = gasFees && gasFees[tokenType] ? parseFloat(gasFees[tokenType]!) : 0;
        
        // total expense = transfer amount + gas fee
        const totalExpense = transferAmount + gasFeeAmount;
        
        return totalExpense > totalBalance;
      }),
    [totalAmount, tokenBalances, gasFees]
  );

  const isUnregisteredEmail = ({
    transfer,
    validation,
  }: {
    transfer: Transfer;
    validation: ToInputValidationState;
  }) => {
    return emailRegex.test(transfer.to) && validation?.error === t('/dashboard.[token].sendModal.unregisteredEmailNotice');
  }

  // check if send button is disabled
  const isDisabled = useMemo(() => {
    return transfers.some((t, index) => {
      // check if required fields are empty
      if (!t.to || !t.amount || !t.token) {
        return true;
      }
      
      // check if address/email is valid
      const validation = toValidations[index];
      if ((validation?.error && !isUnregisteredEmail({ transfer: t, validation })) || validation?.isValidating) {
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
    if (isDisabled) {
      // if there is any error, do not calculate gas fee and set gasFees to null
      setGasFees(null);
      return;
    }

    setIsEstimatingFee(true);
    try {
      const tokenTypes: TokenType[] = ['ETH', 'MATIC', 'TVWT'];
      const newGasFees: GasFees = {};

      const getValidTransferParams = (tokenType: TokenType) => {
        return debouncedTransfers
          .filter((t, index) => {
            const isValid = t.token === tokenType && t.amount && (
              isAddress(t.to) ||
              debouncedToValidations[index]?.fullAddress
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

      // calculate gas fee for each token
      for (const token of tokenTypes) {
        const params = getValidTransferParams(token);
        if (params.length > 0) {
          const estimations = await Promise.all(
            params.map(param => 
              getEstimatedGasFeeByToken({
                tokenType: token,
                transferParams: param,
                fromAddress: address,
              })
            )
          );

          // calculate total gas fee
          const totalFee = estimations.reduce(
            (sum, est) => est ? sum + parseFloat(est.feeInTokens) : sum,
            0
          );

          if (totalFee > 0) {
            newGasFees[token] = formatDecimal(totalFee.toString());
          }
        }
      }

      // calculate USD value
      if (tokenPrices) {
        const ethUsdValue = newGasFees.ETH ? parseFloat(newGasFees.ETH) * parseFloat(tokenPrices.ETH) : 0;
        const maticUsdValue = newGasFees.MATIC ? parseFloat(newGasFees.MATIC) * parseFloat(tokenPrices.MATIC) : 0;
        const tvwtUsdValue = newGasFees.TVWT ? parseFloat(newGasFees.TVWT) * parseFloat(tokenPrices.TVWT) : 0;

        const usdValue = ethUsdValue + maticUsdValue + tvwtUsdValue;
        newGasFees.usdValue = formatNumberWithCommas(usdValue.toString(), 2);
      }

      setGasFees(newGasFees);
    } catch (error) {
      console.error('Failed to calculate gas fee:', error);
      setGasFees(null);
    } finally {
      setIsEstimatingFee(false);
    }
  }, [debouncedToValidations, debouncedTransfers, isDisabled, address, tokenPrices]);

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

    setAmountRequiredValidations([false]);
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

      const res = await validateEmailWithCache(to);

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

  const handleAmountBlur = (index: number) => {
    const value = transfers[index].amount;
    setAmountRequiredValidations(prev => {
      const newValidations = [...prev];
      newValidations[index] = value === '';
      return newValidations;
    });
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
    
    // reset validation state
    setAmountRequiredValidations(prev => {
      const newValidations = [...prev];
      newValidations[index] = false;
      return newValidations;
    });
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

  const handleSingleSend = async (transfer: Transfer, index: number) => {
    const validation = toValidations[index];
    const amount = transfer.amount;
    let toAddress: Address;
    let toEmail: string | undefined;

    if (isAddress(transfer.to)) {
      // send by address
      toAddress = transfer.to as Address;
    } else if (isUnregisteredEmail({ transfer, validation })) {
      // send register email to unregistered user
      toEmail = transfer.to;
      await api.post('/invite/invite-register', {
        toEmail,
        from: address,
        amount: parseEther(amount).toString(),
        token: transfer.token,
        note: transfer.note,
      });
      return;
    } else {
      // send by email
      toAddress = validation?.fullAddress as Address;
    }

    const result = await signTransaction({
      to: toAddress,
      amount,
      data: '',
      token: transfer.token,
      transactionType: TransactionType.TRANSFER,
      note: transfer.note,
      isNotifySubmit: false,
      isNotifyOtp: false,
      isNotifyError: false,
    })

    return result;
  }

  const handleSend = async () => {
    setSending(true);

    try {
      const results: TransferResult[] = [];
      
      // handle each transfer
      for (let i = 0; i < transfers.length; i++) {
        const transfer = transfers[i];
        try {
          const result = await handleSingleSend(transfer, i);
          
          if (isUnregisteredEmail({ transfer, validation: toValidations[i] })) {
            results.push({
              to: transfer.to,
              type: 'invitation',
              status: 'sent',
              statusMessage: 'Invitation email sent. The recipient will receive an invitation email to sign up their account.',
              amount: transfer.amount,
              token: transfer.token
            });
          } else {
            results.push({
              to: transfer.to,
              type: 'transaction',
              status: result?.hash ? 'sent' : 'failed',
              statusMessage: result?.needOtp ? 'Daily transaction limit exceeded. Please check your email and verify by the OTP.' : 'Sent and received',
              amount: transfer.amount,
              token: transfer.token
            });
          }
        } catch (error) {
          const type = isUnregisteredEmail({ transfer, validation: toValidations[i] }) ? 'invitation' : 'transaction';
          const errorInfo = handleError(error);
          log('handleSend', { errorInfo });
          results.push({
            to: transfer.to,
            type,
            status: 'failed',
            statusMessage: type === 'transaction' ? errorInfo.message : 'Not sent. Please try transferring again.',
            amount: transfer.amount,
            token: transfer.token
          });
        }
      }

      onSent(results, gasFees, totalAmount);
    } catch (error) {
      console.error('Failed to send transfers:', error);
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

    setAmountRequiredValidations([...amountRequiredValidations, false]);
  }

  const handleDeleteTransfer = (index: number) => {
    setTransfers(transfers.filter((_, i) => i !== index));
    setToValidations(toValidations.filter((_, i) => i !== index));
    setAmountRequiredValidations(amountRequiredValidations.filter((_, i) => i !== index));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      Papa.parse<string[]>(file, {
        header: false,
        complete: (results: Papa.ParseResult<string[]>) => {
          const validation = validateCsvData(results.data);
          
          if (!validation.isValid) {
            toast.error(validation.error);
            setTransfers([]);
            event.target.value = '';
            return;
          }

          // skip header and empty rows
          const transfers: Transfer[] = results.data
            .slice(1) // skip header
            .filter(row => row[0] && row[0].trim() !== '') // skip empty rows
            .map(row => ({
              to: row[0],
              note: row[1],
              token: row[2] as TokenType,
              amount: row[3],
              balance: tokenBalances[row[2] as TokenType] || '0',
            }));

          setTransfers(transfers);
          
          // init validation state
          setToValidations(transfers.map(() => ({
            isValidating: false,
            isValidEmail: false,
            fullAddress: '',
            error: ''
          })));

          setAmountRequiredValidations(transfers.map(() => false));

          toast.success('CSV file uploaded successfully');
        },
        error: (error: Error) => {
          toast.error(`Error parsing CSV: ${error.message}`);
        }
      });
    }
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
    handleFileChange,
    totalAmount,
    todayTokenTransferred,
    defaultLimits,
    gasFees,
    handleAmountBlur,
    amountRequiredValidations,
  };
}
