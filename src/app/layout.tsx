import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/toast.css";
import AppNavbar from "@/components/layout/AppNavbar";
import { NotificationContainer } from "@/components/layout/NotificationContainer";
import AuthGuard from "@/components/layout/AuthGuard";
import { QueryProvider } from "@/providers/QueryProvider";
import { SidebarDesktop } from "@/components/layout/Sidebar";

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
            <AppNavbar />

            <AuthGuard />

            <div className="h-[calc(100vh-52px)] flex flex-col">
              {/* Unified notification system */}
              <NotificationContainer />

              <div className="flex flex-1 min-h-0">
                <SidebarDesktop />
                <main className="flex-1 overflow-y-auto relative">
                  {children}
                </main>
              </div>

            </div>
            
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
              style={{ width: 'fit-content' }}
              toastStyle={{ width: 'fit-content', maxWidth: '100%' }}
            />
          </GoogleOAuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
