import { useNavigate, useSearchParams } from 'react-router-dom'
import { useState, useEffect, useCallback } from "react";

import { handleError, log } from '@/lib/utils';
import { toast } from 'react-toastify';
import { Loading } from '@/components/Loading';
import api from '@/lib/api';
import { UserInfo } from '@/hooks/user/useUserInfo';
import { theTokenService } from '@/services/TokenService';

export default function Page() {  
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('pending')

  const updateDailyWithdrawalLimitsWithOtp = useCallback(async ({
    otp,
    limits,
  }: {
    otp: string;
    limits: UserInfo['dailyWithdrawalLimits'];
  }) => {
    const limitsList = theTokenService.getAllTokens().map(token => ({
      type: token.tokenType,
      value: limits?.[token.tokenType] || '0',
    }));
    try {
      await api.post('/user/update-daily-withdrawal-limits-with-otp', {
        otp,
        limits: limitsList,
      })
      setStatus('success')
      toast.success('Daily withdrawal limit successfully updated, redirecting to the profile')
      // jump to dashboard page
      navigate('/profile')
    } catch(error) {
      setStatus('error')
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    }
  }, [navigate]); // Add navigate as a dependency

  useEffect(() => {
    const email = searchParams?.get('email')
    const otp = searchParams?.get('otp')
    const limits = theTokenService.createTokenMap(token => (searchParams?.get(token.tokenType) ?? undefined));

    if (email && otp) {
      console.log(`verify-transaction ${email} ${otp}`);
      updateDailyWithdrawalLimitsWithOtp({
        otp,
        limits,
      })
    }
  }, [searchParams, updateDailyWithdrawalLimitsWithOtp]);

  const updateStatus = () => {
    if (status === 'pending') {
      return <div>
        <Loading />
      </div>
    } else if (status === 'success') {
      return <div className=''>Daily withdrawal limit successfully updated, redirecting to the profile</div>
    } else {
      return <div className='text-destructive'>Failed to update daily withdrawal limit</div>
    }
  }

  return (
    <div className='min-h-custom-main flex items-center justify-center'> 
      {
        updateStatus()
      }
    </div>
  );
}
