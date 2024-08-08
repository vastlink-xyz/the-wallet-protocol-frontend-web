'use client';

import { log } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { Flip, Zoom, Bounce, ToastContainer } from 'react-toastify';

export default function ThemeAwareToastContainer() {
  const { theme, systemTheme } = useTheme();

  return (
    <ToastContainer
      position="top-center"
      autoClose={8000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
      theme={theme as "light" | "dark"}
      transition={Zoom}
    />
  );
}
