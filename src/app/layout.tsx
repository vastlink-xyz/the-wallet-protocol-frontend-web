import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/toast.css";
import AppNavbar from "@/components/AppNavbar";
import { UnsignedProposalsNotification } from "@/components/UnsignedProposalsNotification";
import AuthGuard from "@/components/AuthGuard";
import { QueryProvider } from "@/providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vastbase (powered by Vastlink)",
  description: "A next generation multisig wallet for teams",
  icons: {
    icon: '/Vastbase_logo.svg',
    apple: '/Vastbase_logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
            {/* testnet warning */}
            <div className="w-full h-[45px] py-[9px] bg-[#fffbe6] rounded-sm border border-[#ffe58f] justify-between items-center gap-1.5 inline-flex px-8">
              <div className="flex-1 text-center">
                <div className="grow shrink basis-0 text-center text-black/90 text-sm font-normal leading-snug">All assets on this platform are on testnets only</div>
              </div>
            </div>
            
            {/* Unsigned proposals notification */}
            <UnsignedProposalsNotification />

            <AppNavbar />
            <AuthGuard />
            <main>
              {children}
            </main>
            
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </GoogleOAuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
