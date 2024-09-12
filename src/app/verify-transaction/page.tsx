"use client";

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from "react";

import { auth, handleError, log } from '@/lib/utils';
import { TokenFactory } from '@/services/TokenService';
import { toast } from 'react-toastify';
import { usePassportClientVerification } from '@/hooks/usePassportClientVerification';
import { LogoLoading } from '@/components/LogoLoading';
import keyManagementService from '@/services/KeyManagementService';

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
      const { hash, token } = await keyManagementService.signTransactionWithOTP({
        transactionId: id,
        otp,
      })

      const publicClient = TokenFactory.getInstance().createToken(token).publicClient
      const receipt = await publicClient.waitForTransactionReceipt({ hash })
      if (receipt.status === 'success') {
        setStatus('success')
        // jump to home page
        router.replace('/home')
      }
      log('receipt', receipt)
    } catch(error: unknown) {
      setStatus('error')
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    }
  }

  const transactionStatus = () => {
    if (status === 'pending') {
      return <div>
        <LogoLoading size={48} type={'breathe'} />
      </div>
    } else if (status === 'success') {
      return <div className=''>Transaction confirmed, redirecting to the homepage...</div>
    } else {
      return <div className='text-destructive'>Error processing transaction</div>
    }
  }

  return (
    <div className='m-auto'> 
      {
        transactionStatus()
      }
    </div>
  );
}
