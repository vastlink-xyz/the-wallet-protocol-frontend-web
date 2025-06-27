'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'

interface QueryProviderProps {
  children: ReactNode
}

export function QueryProvider({ children }: QueryProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Refetch when window gains focus
            refetchOnWindowFocus: true,
            // Refetch every 1 hour in the background
            refetchInterval: 60 * 60 * 1000,
            // Consider data stale after 30 seconds
            staleTime: 30 * 1000,
            // Keep unused data in cache for 10 minutes
            gcTime: 1000 * 60 * 10,
          },
        },
      })
  )

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}