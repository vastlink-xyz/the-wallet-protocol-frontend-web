"use client";

import { useNavigate, useSearchParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from "react";

import { handleError, log } from '@/lib/utils';
import { theTokenService, Token } from '@/services/TokenService';
import { toast } from 'react-toastify';
import keyManagementService from '@/services/KeyManagementService';
import { Loading } from '@/components/Loading';

export default function Page() {  
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('pending')

  const verifyTransaction = useCallback(async (id: string, otp: string) => {
    try {
      const { hash, token } = await keyManagementService.signTransactionWithOTP({
        transactionId: id,
        otp,
      })

      const publicClient = theTokenService.getToken(token).publicClient
      const receipt = await publicClient.waitForTransactionReceipt({ hash })
      if (receipt.status === 'success') {
        setStatus('success')
        // jump to dashboard page
        navigate('/dashboard')
      }
      log('receipt', receipt)
    } catch(error) {
      setStatus('error')
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    }
  }, [navigate]); // Add navigate as a dependency

  useEffect(() => {
    const id = searchParams?.get('id')
    const otp = searchParams?.get('otp')

    if (id && otp) {
      console.log(`verify-transaction ${id} ${otp}`);
      verifyTransaction(id, otp);
    }
  }, [searchParams, verifyTransaction]);

  const transactionStatus = () => {
    if (status === 'pending') {
      return <div>
        <Loading />
      </div>
    } else if (status === 'success') {
      return <div className=''>Transaction confirmed, redirecting to the dashboard...</div>
    } else {
      return <div className='text-destructive'>Error processing transaction</div>
    }
  }

  return (
    <div className='min-h-custom-main flex items-center justify-center'> 
      {
        transactionStatus()
      }
    </div>
  );
}
