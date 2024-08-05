import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import ProgressBarProvider from "@/providers/ProgressBarProvider";

import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WalletConnectPairProvider } from "@/providers/WalletConnectPairProvider";
import { ThemeProvider } from "@/providers/ThemeProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vast Wallet",
  description: "Vast Wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'min-h-screen bg-white text-black', 'flex flex-col')}>
        <main className="flex flex-col flex-grow">
          <Suspense>
            <ProgressBarProvider>
              <WalletConnectPairProvider>
                <ThemeProvider
                  attribute="class"
                  enableSystem={false}
                  defaultTheme="light"
                >
                  {children}
                </ThemeProvider>
              </WalletConnectPairProvider>
            </ProgressBarProvider>
          </Suspense>
        </main>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="colored"
          transition={Flip}
        />
      </body>
    </html>
  );
}