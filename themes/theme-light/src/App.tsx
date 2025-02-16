import { RouterProvider } from "react-router-dom"
import router from "@/routes/routeConfig"

// // roboto font
// import '@fontsource/roboto/400.css'
// import '@fontsource/roboto/500.css'
// import '@fontsource/roboto/700.css'
// import '@fontsource/roboto-mono/400.css'

// // asap font
// import '@fontsource/asap/400.css';  // normal
// import '@fontsource/asap/500.css';  // medium
// import '@fontsource/asap/700.css';  // bold

import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';

import { Suspense } from "react";

import ThemeAwareToastContainer from "@/components/ThemeAwareToastContainer";
import { MoonPayProviderWrapper } from "@/providers/MoonPayProviderWrapper";

import i18n from "@/lib/i18n";
import { I18nextProvider } from "react-i18next";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FontLoader } from "./components/FontLoader";
import { REACT_QUERY_STALE_TIME, REACT_QUERY_GC_TIME } from "@/lib/utils";
import { Auth0NavigateProvider } from "./providers/Auth0Provider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: REACT_QUERY_STALE_TIME,  // data is fresh within 1 hour
      gcTime: REACT_QUERY_GC_TIME,  // cache for 24 hours
    },
  },
})

export function App() {
  return (
    <>
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
      <FontLoader />
    </>
  )
}
