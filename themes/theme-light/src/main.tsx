import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App';
import { log } from '@/lib/utils';
import packageJson from '@root/package.json';
import { isDev } from '@/lib/utils/common';

log('isDev', isDev)

// Declare the type for the window object
declare global {
  interface Window {
    [key: string]: any;
  }
}

export function mountFunction(containerId: string) {
  const root = createRoot(document.getElementById(containerId) as HTMLElement);
  root.render(
    <App />
    // <StrictMode>
    // </StrictMode>
  );
  return () => root.unmount();
}

if (isDev) {
  mountFunction('root')
} else {
  // mount the theme to the global window object
  if (typeof window !== 'undefined') {
    window[`mount_${packageJson.name}`] = mountFunction;
  }
}
