'use client'

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { log } from '@/lib/utils';
import NProgress from 'nprogress';
import { getTheme } from './actions';
import 'nprogress/nprogress.css';

NProgress.configure({ 
  showSpinner: false,
  minimum: 0.1,
  easing: 'ease',
  speed: 500
});

const ThemeProd = () => {
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [appName, setAppName] = useState('');
  const [themePath, setThemePath] = useState('');

  const initLoadTheme = async () => {
    const params = new URLSearchParams(window.location.search);
    const theme = params.get('theme') || await getTheme();
    const themePath = `/dist/${theme}`;
    
    setThemePath(themePath);
    setAppName(theme);
  }

  useEffect(() => {
    initLoadTheme();
    NProgress.start();
  }, [])

  useEffect(() => {
    if (themeLoaded) {
      NProgress.done();
    }
  }, [themeLoaded])

  useEffect(() => {
    log('useEffect', appName, themeLoaded)
    if (appName && themeLoaded) {
      const mountFn = window[`mount_${appName}`];
      if (mountFn) {
        mountFn(`${appName}-root`);
      }
    }
  }, [appName, themeLoaded]);

  return (
    <>
      {
        (appName && themePath) && (
          <>
            <Script
              type="module"
              src={`${themePath}/index.js`}
              onLoad={() => setThemeLoaded(true)}
            />
            <link rel="stylesheet" href={`${themePath}/style.css`} />
            <div id={`${appName}-root`}></div>
          </>
        )
      }
    </>
  );
};

export default ThemeProd;
