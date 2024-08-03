import { useState } from 'react';
import { auth, log } from "@/lib/utils";
import { Address, parseEther } from "viem";
import axios from 'axios';
import { toast } from 'react-toastify';
import { CircleCheck } from 'lucide-react';
import { Button } from '../ui/button';
import { TokenType } from '@/types/tokens';

const tokenType: TokenType = 'ETH'

export const useTransaction = () => {
  const [sending, setSending] = useState(false);

  const signTransaction = async ({
    to,
    amount,
    data,
  }: {
    to: Address;
    amount: string;
    data: string;
  }) => {
    try {
      const { authenticatedHeader, desUsername } = auth.all();
      const amt = parseEther(amount).toString();
      log('amt', amt);

      setSending(true);
      const apiPath = `transaction/sign`;
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/${apiPath}`,
        {
          to,
          amount: amt,
          data,
          token: tokenType,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Encrypted-Key": `${authenticatedHeader["X-Encrypted-Key"]}`,
            "X-Scope-Id": `${authenticatedHeader["X-Scope-Id"]}`,
            "X-Encrypted-User": `${authenticatedHeader["X-Encrypted-User"]}`,
            "X-Encrypted-Session": `${authenticatedHeader["X-Encrypted-Session"]}`,
            "X-Passport-Username": `${desUsername.username}`,
          },
        }
      );

      log('data', response.data);
      const result = response.data

      const succeeded = typeof result.hash === 'string' && result.hash.startsWith('0x');
      if (succeeded) {
        notifyTransactionSubmitted(result.hash);
      } else {
        toast.error(result.message);
      }
      return result
    } catch (error) {
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  const waitForTransactionExection = async (transactionId: string) => {
    try {
      const apiPath = `transaction/wait-for-execution`;
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/${apiPath}`,
        {
          transactionId,
        },
      );

      log('data', response.data);
      const result = response.data

      return result.hash
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const openTxPage = (txHash: string) => {
    const url = `${process.env.NEXT_PUBLIC_EXPLORER_URL}/${txHash}`;
    window.open(url, '_blank');
  };

  const notifyTransactionSubmitted = (txHash: string) => {
    toast(
      <div className="w-full">
        <div className="flex items-center">
          <CircleCheck color="#2edc82" size={16} className="mr-2" />
          <p className="flex items-center">
            Transaction submitted,
            <Button
              className="text-warm-foreground"
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

  return { signTransaction, sending, waitForTransactionExection };
};
