'use client';

import { log } from "@/lib/utils";
import { Flip, Zoom, Bounce, ToastContainer } from 'react-toastify';

export default function ThemeAwareToastContainer() {
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
      // theme={currentTheme() as "light" | "dark"}
      theme={'light'}
      transition={Zoom}
      style={{width: 'auto', maxWidth: '400px'}}
    />
  );
}
