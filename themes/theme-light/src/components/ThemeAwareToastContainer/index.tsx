'use client';

import { Zoom, ToastContainer } from 'react-toastify';
import '@/styles/react-toastify.css'
import { useEffect, useState } from "react";

export default function ThemeAwareToastContainer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator?.userAgent || '');
    setIsMobile(isMobile);
  }, [])


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
      // theme={'colored'}
      transition={Zoom}
      style={ isMobile ? undefined : {
        width: 'auto',
        maxWidth: '400px',
      }}
    />
  );
}
