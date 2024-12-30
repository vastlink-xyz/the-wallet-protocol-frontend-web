import { useRef, useState } from 'react';
import { handleError, log } from "@/lib/utils";
import { Address, parseEther } from "viem";
import { toast } from 'react-toastify';
import { CircleCheck } from 'lucide-react';
import { Button } from '../ui/button';
import { TokenType } from '@/types/tokens';
import { theTokenListingService } from '@/services/TokenListingService';
import { TransactionType } from '@/types/transaction';
import api from '@/lib/api';
import keyManagementService from '@/services/KeyManagementService';
import { Token } from '@/services/TokenListingService/tokens/Token';

export const useTransaction = () => {
  const [sending, setSending] = useState(false);
  const tokenRef = useRef<Token>()

  const signTransaction = async ({
    to,
    amount,
    data,
    token=TokenType.ETH,
    transactionType,
    note,
    isNotifySubmit=true,
    isNotifyOtp=true,
    isNotifyError=true,
  }: {
    to: Address;
    amount: string;
    data?: string;
    token: TokenType;
    transactionType: TransactionType;
    note?: string;
    isNotifySubmit?: boolean;
    isNotifyOtp?: boolean;
    isNotifyError?: boolean;
  }) => {
    tokenRef.current = theTokenListingService.getToken(token)

    try {
      const amt = parseEther(amount).toString();
      log('amt', amt);

      setSending(true);

      const result = await keyManagementService.signTransaction({
        toAddress: to,
        amount: amt,
        token: token,
        transactionType: transactionType,
        note,
      })

      const {
        needOtp,
        hash,
        message,
      } = result

      if (hash) {
        if (isNotifySubmit) {
          notifyTransactionSubmitted(hash)
        }
      } else if (needOtp) {
        // need to be verified
        if (isNotifyOtp) {
          toast.error(message)
        }
      }

      return result
    } catch (error: unknown) {
      if (isNotifyError) {
        const errorInfo = handleError(error)
        toast.error(errorInfo.message)
      } else {
        throw error
      }
    } finally {
      setSending(false);
    }
  };

  const waitForTransactionExection = async (transactionId: string) => {
    const apiPath = `/transaction/execution-status`;
    let result;

    while (true) {
      const response = await api.post(apiPath, {
        transactionId,
      });

      log('data', response.data);
      result = response.data;

      if (result.hash) {
        break;
      }

      await new Promise(resolve => setTimeout(resolve, 5000)); // wait for 5 seconds before next poll
    }

    return result.hash;
  };

  const openTxPage = (txHash: string) => {
    const url = `${tokenRef.current?.scanTransactionUrl}/${txHash}`
    window.open(url, '_blank')
  }

  const notifyTransactionSubmitted = (txHash: string) => {
    toast(
      <div className="w-full">
        <div className="flex items-center">
          <CircleCheck color="#2edc82" size={16} className="mr-2" />
          <p className="flex items-center">
            Transaction submitted,
            <Button
              className="text-brand-foreground"
              variant={'link'}
              size={'sm'}
              onClick={() => openTxPage(txHash)}
            >
              View Detail
            </Button>
          </p>
        </div>
      </div>
    );
  };

  const tokenTypeByChainId = (chainId: string): TokenType => {
    if (chainId === 'eip155:11155111') {
      return TokenType.ETH
    }
    return TokenType.ETH
  }

  return { signTransaction, sending, waitForTransactionExection, tokenTypeByChainId };
};
