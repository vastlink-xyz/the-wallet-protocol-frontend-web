import { RouterProvider } from "react-router-dom"
import router from "@/routes/routeConfig"

import '@fontsource/roboto/400.css'
import '@fontsource/roboto-mono/400.css'
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';

import { Suspense } from "react";

import { WalletConnectPairProvider } from "@/providers/WalletConnectPairProvider";
import ThemeAwareToastContainer from "@/components/ThemeAwareToastContainer";
import { MoonPayProviderWrapper } from "@/providers/MoonPayProviderWrapper";

import i18n from "@/lib/i18n";
import { I18nextProvider } from "react-i18next";

export function App() {
  return (
    <div className="font-['Roboto']">
      <Suspense>
        <I18nextProvider i18n={i18n}>
          <WalletConnectPairProvider>
            <MoonPayProviderWrapper>
              <RouterProvider router={router} />
            </MoonPayProviderWrapper>
            <ThemeAwareToastContainer />
          </WalletConnectPairProvider>
        </I18nextProvider>
      </Suspense>
    </div>
  )
}
