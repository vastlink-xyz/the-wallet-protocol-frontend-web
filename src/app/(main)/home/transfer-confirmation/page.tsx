'use client'

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn, formatDecimal, log } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogoLoading } from '@/components/LogoLoading';
import { useSearchParams } from 'next/navigation';
import { Address, formatEther } from 'viem';
import { useTransaction } from '@/components/VastWalletConnect/useTransaction';
import { TokenType } from '@/types/tokens';
import { toast } from 'react-toastify';
import { TransactionType } from '@/types/transaction';

export default function TransferConfirmationPage() {
  const params = useSearchParams()
  const { signTransaction } = useTransaction()

  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [balance, setBalance] = useState('')
  const [amount, setAmount] = useState('123')
  const [toEmail, setToEmail] = useState('')
  const [toAddress, setToAddress] = useState('')
  const [token, setToken] = useState('')
  const [note, setNote] = useState('')

  useEffect(() => {
    if (params) {
      log('pp', params)
      init()
    }
  }, [params])

  const init = async () => {
    const balance = params.get('balance')
    const amount = params.get('amount')
    const toEmail = params.get('toEmail')
    const toAddress = params.get('toAddress')
    const token = params.get('token')
    const note = params.get('note')

    setBalance(balance || '')
    setAmount(amount || '')
    setToEmail(toEmail || '')
    setToAddress(toAddress || '')
    setToken(token || '')
    setNote(note || '')
  }

  const handleConfirmTransfer = async () => {
    try {
      setSending(true);

      const result = await signTransaction({
        to: toAddress as Address,
        amount: formatEther(BigInt(amount)),
        data: '',
        token: token as TokenType,
        transactionType: TransactionType.INVITE_TRANSFER,
      })

      if (result) {
        setSuccess(true);
      }
    } catch (error) {
      console.error('Error confirming transfer:', error);
      toast.error('Transfer failed');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-w-[480px] max-w-[560px] mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Transfer Confirmation</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="flex">
          <section className='w-[120px]'>
            <p className='mb-2'>Amount:</p>
            <p className='mb-2'>To Email:</p>
            <p className='mb-2'>To Address:</p>
          </section>

          <section className=''>
            <p className='mb-2'>{ formatEther(BigInt(amount)) } { token }</p>
            <p className='mb-2'>{ toEmail }</p>
            <p className='mb-2 break-all'>{ toAddress }</p>
          </section>
        </div>

        {
          !success && (
            <div className="mt-4">
              <Button
                className={cn(
                  'w-full',
                )}
                disabled={sending}
                onClick={() => handleConfirmTransfer()}
              >
                {
                  sending ? (
                    <div className="">
                      <LogoLoading />
                    </div>
                  ) : (
                    <span>Send</span>
                  )
                }
              </Button>
            </div>
          )
        }

        </CardContent>
      </Card>
    </div>
  );
}