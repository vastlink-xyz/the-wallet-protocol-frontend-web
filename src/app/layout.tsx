import type { Metadata } from "next";
import { Inter, Varela_Round } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import ProgressBarProvider from "@/providers/ProgressBarProvider";

import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

import 'react-toastify/dist/ReactToastify.css';
import { WalletConnectPairProvider } from "@/providers/WalletConnectPairProvider";
import { ThemeProvider } from "@/providers/ThemeProvider"
import ThemeAwareToastContainer from "@/components/ThemeAwareToastContainer";

const inter = Inter({
  subsets: ["latin"]
});

const varela = Varela_Round({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Vast Wallet",
  description: "Vast Wallet",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(varela.className, 'min-h-screen bg-white text-black', 'flex flex-col')}>
        <main className="flex flex-col flex-grow">
          <Suspense>
          <NextIntlClientProvider messages={messages}>
            <ProgressBarProvider>
              <WalletConnectPairProvider>
                <ThemeProvider
                  attribute="class"
                  enableSystem={true}
                  defaultTheme="system"
                >
                  {children}
                  <ThemeAwareToastContainer />
                </ThemeProvider>
              </WalletConnectPairProvider>
            </ProgressBarProvider>
          </NextIntlClientProvider>
          </Suspense>
        </main>

      </body>
    </html>
  );
}