'use client'

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const MoonPayProvider = dynamic(
  () => import('@moonpay/moonpay-react').then((mod) => mod.MoonPayProvider),
  { ssr: false },
);

interface MoonPayProviderWrapperProps {
  children: ReactNode;
}

const apiKey = process.env.NEXT_PUBLIC_MOONPAY_PUBLISHABLE_API_KEY
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
