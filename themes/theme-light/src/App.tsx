import { RouterProvider } from "react-router-dom"
import router from "@/routes/routeConfig"

// roboto font
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto-mono/400.css'

// asap font
import '@fontsource/asap/400.css';  // normal
import '@fontsource/asap/500.css';  // medium
import '@fontsource/asap/700.css';  // bold

import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';

import { Suspense } from "react";

import ThemeAwareToastContainer from "@/components/ThemeAwareToastContainer";
import { MoonPayProviderWrapper } from "@/providers/MoonPayProviderWrapper";

import i18n from "@/lib/i18n";
import { I18nextProvider } from "react-i18next";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5,  // data is fresh within 5 minutes
      gcTime: 1000 * 60 * 30,  // cache for 30 minutes
    },
  },
})

export function App() {
  return (
    <div className="font-['Roboto']">
      <Suspense>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>
            <MoonPayProviderWrapper>
              <RouterProvider router={router} />
            </MoonPayProviderWrapper>
            <ThemeAwareToastContainer />
          </I18nextProvider>
        </QueryClientProvider>
      </Suspense>
    </div>
  )
}
