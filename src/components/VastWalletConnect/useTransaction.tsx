import { useEffect, useRef, useState } from 'react';
import { auth, handleError, log } from "@/lib/utils";
import { Address, parseEther } from "viem";
import { toast } from 'react-toastify';
import { CircleCheck } from 'lucide-react';
import { Button } from '../ui/button';
import { TokenType } from '@/types/tokens';
import { makeAuthenticatedApiRequest } from '@/lib/utils';
import { usePassportClientVerification } from '@/hooks/usePassportClientVerification';
import { Token, TokenFactory } from '@/services/TokenService';
import { TransactionType } from '@/types/transaction';
import api from '@/lib/api';
import keyManagementService from '@/services/KeyManagementService';

export const useTransaction = () => {
  const [sending, setSending] = useState(false);
  const { verifyPassportClient } = usePassportClientVerification()
  const tokenRef = useRef<Token>()

  const signTransaction = async ({
    to,
    amount,
    data,
    token='ETH',
    transactionType,
  }: {
    to: Address;
    amount: string;
    data: string;
    token: TokenType;
    transactionType: TransactionType;
  }) => {
    tokenRef.current = TokenFactory.getInstance().createToken(token)

    try {
      const amt = parseEther(amount).toString();
      log('amt', amt);

      setSending(true);

      const result = await keyManagementService.signTransaction({
        toAddress: to,
        amount: amt,
        token: token,
        transactionType: transactionType,
      })

      const {
        needOtp,
        hash,
        message,
      } = result

      if (hash) {
        notifyTransactionSubmitted(hash)
      } else if (needOtp) {
        // need to be verified
        toast.error(message)
      }

      return result
    } catch (error: unknown) {
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    } finally {
      setSending(false);
    }
  };

  const waitForTransactionExection = async (transactionId: string) => {
    try {
      const apiPath = `/transaction/wait-for-execution`;
      const response = await api.post(apiPath, {
        transactionId,
      });

      log('data', response.data);
      const result = response.data

      return result.hash
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const openTxPage = (txHash: string) => {
    const url = `${tokenRef.current?.openUrl}/${txHash}`
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
      return 'ETH'
    }
    return 'ETH'
  }

  return { signTransaction, sending, waitForTransactionExection, tokenTypeByChainId };
};
