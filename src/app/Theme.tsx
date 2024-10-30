'use client'

import { useEffect, useState } from 'react';
import Script from 'next/script';

const ThemeProd = () => {
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [appName, setAppName] = useState('');
  const [themePath, setThemePath] = useState('');

  useEffect(() => {
    initLoadTheme();
  }, [])

  useEffect(() => {
    if (appName && themeLoaded) {
      const mountFn = window[`mount_${appName}`];
      if (mountFn) {
        mountFn(`${appName}-root`);
      }
    }
  }, [appName, themeLoaded]);

  const initLoadTheme = async () => {
    const theme = 'theme_light';
    const themePath = `/dist/${theme}`;

    setThemePath(themePath);
    setAppName(theme);
    document.cookie = `current-theme=${theme}; path=/`
  }

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
