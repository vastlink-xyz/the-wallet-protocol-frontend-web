"use client";

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from "react";

import axios from "axios";
import { auth, log } from '@/lib/utils';
import { createPublicClient, http } from 'viem';
import { polygonAmoy } from 'viem/chains';
import { TokenFactory } from '@/services/TokenService';
import { toast } from 'react-toastify';

export default function Page() {  
  const params = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState('pending')

  useEffect(() => {
    const id = params?.get('id')
    const otp = params?.get('otp')

    if (id && otp) {
      console.log(`verify-transaction ${id} ${otp}`);
      verifyTransaction(id, otp);
    }
  }, [params]);

  async function verifyTransaction(id: string, otp: string) {
    const {
      authenticatedHeader,
      desUsername,
    } = auth.all()

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/transaction/verify-to-sign`, 
        {
          transactionId: id,
          OTP: otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Encrypted-Key": `${authenticatedHeader["X-Encrypted-Key" as keyof typeof authenticatedHeader]}`,
            "X-Scope-Id": `${authenticatedHeader["X-Scope-Id" as keyof typeof authenticatedHeader]}`,
            "X-Encrypted-User": `${authenticatedHeader["X-Encrypted-User" as keyof typeof authenticatedHeader]}`,
            "X-Encrypted-Session": `${authenticatedHeader["X-Encrypted-Session" as keyof typeof authenticatedHeader]}`,
            "X-Passport-Username": `${desUsername.username}`,
          },
        }
      );
      log('res', response);

      const txHash = response.data.hash
      const tokenType = response.data.token

      if (!txHash || !tokenType) {
        setStatus('error')
        toast.error(response.data)
        return
      }

      const publicClient = TokenFactory.getInstance().createToken(tokenType).publicClient
      const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash })
      if (receipt.status === 'success') {
        setStatus('success')
        // jump to home page
        router.replace('/home')
      }
      log('receipt', receipt)
    } catch(error) {
      setStatus('error')
      log('error', error)
      toast.error((error as any).message)
    }

  }

  const transactionStatus = () => {
    if (status === 'pending') {
      return <div>Transaction is waiting for confirmation...</div>
    } else if (status === 'success') {
      return <div>Transaction confirmed, redirecting to the homepage...</div>
    } else {
      return <div>Error processing transaction</div>
    }
  }

  return (
    <div className='m-auto text-warm-foreground'> 
      {
        transactionStatus()
      }
    </div>
  );
}
