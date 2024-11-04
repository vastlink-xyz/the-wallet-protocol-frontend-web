'use client'

import { ReactNode } from 'react';
import { MoonPayProvider } from '@moonpay/moonpay-react'

interface MoonPayProviderWrapperProps {
  children: ReactNode;
}

const apiKey = import.meta.env.VITE_MOONPAY_PUBLISHABLE_API_KEY
// const apiKey = 'pk_test_oxQY1qdAGKlItZrVIRQ9qpNwpfAPHjQ'

export function MoonPayProviderWrapper({ children }: MoonPayProviderWrapperProps) {
  return (
    <MoonPayProvider
      apiKey={apiKey as string}
      debug
    >
      {children}
    </MoonPayProvider>
  );
}
