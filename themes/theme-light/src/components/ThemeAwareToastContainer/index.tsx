'use client';

import { Zoom, ToastContainer, toast } from 'react-toastify';
import '@/styles/react-toastify.css'
import { useEffect, useState } from "react";
import { cn } from '@/lib/utils';
import { CircleX } from 'lucide-react';

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
      theme={'colored'}
      transition={Zoom}
      icon={({ type }) => {
        if (type === 'error') {
          return <CircleX />
        }
        return undefined; // use default icon
      }}
      toastClassName={cn(
        'text-sm',
        'mobile:top-[82px]',
        'max-w-full mobile:max-w-[375px] tablet:max-w-[688px] w-auto',
        // 'left-1/2 -translate-x-1/2'
      )}
      // style={ isMobile ? undefined : {
      //   width: 'auto',
      //   maxWidth: '688px !important',
      // }}
    />
  );
}
