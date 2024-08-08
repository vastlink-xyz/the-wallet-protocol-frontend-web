"use client";

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from "react";

import axios from "axios";
import { auth, log } from '@/lib/utils';
import { createPublicClient, http } from 'viem';
import { polygonAmoy } from 'viem/chains';
import { TokenFactory } from '@/services/TokenService';
import { toast } from 'react-toastify';
import { makeAuthenticatedApiRequest } from '@/lib/utils';
import { usePassportClientVerification } from '@/hooks/usePassportClientVerification';
import { LogoLoading } from '@/components/LogoLoading';

export default function Page() {  
  const params = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState('pending')
  const { verifyPassportClient } = usePassportClientVerification()

  useEffect(() => {
    const id = params?.get('id')
    const otp = params?.get('otp')

    if (id && otp) {
      console.log(`verify-transaction ${id} ${otp}`);
      verifyTransaction(id, otp);
    }
  }, [params]);

  async function verifyTransaction(id: string, otp: string) {
    try {
      const client = await verifyPassportClient()
      if (!client) {
        return
      }
      const response = await makeAuthenticatedApiRequest({
        path: 'transaction/verify-to-sign',
        data: {
          transactionId: id,
          OTP: otp,
        }
      })
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
      const res = (error as any).response
      if (res && res.data) {
        toast.error(res.data)
      }
    }
  }

  const transactionStatus = () => {
    if (status === 'pending') {
      return <div>
        <LogoLoading />
      </div>
    } else if (status === 'success') {
      return <div>Transaction confirmed, redirecting to the homepage...</div>
    } else {
      return <div>Error processing transaction</div>
    }
  }

  return (
    <div className='m-auto text-brand-foreground'> 
      {
        transactionStatus()
      }
    </div>
  );
}
