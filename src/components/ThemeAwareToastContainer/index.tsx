'use client';

import { log } from "@/lib/utils";
import { forcedLightThemeRoutes } from "@/providers/ThemeProvider";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Flip, Zoom, Bounce, ToastContainer } from 'react-toastify';

export default function ThemeAwareToastContainer() {
  const { theme } = useTheme()
  const pathname = usePathname()

  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
      closeButton={false}
      // theme={currentTheme() as "light" | "dark"}
      theme={'colored'}
      transition={Zoom}
      style={{width: 'auto', maxWidth: '400px'}}
    />
  );
}
