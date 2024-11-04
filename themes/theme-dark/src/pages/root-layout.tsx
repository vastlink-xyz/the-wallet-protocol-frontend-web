import { useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '@/styles/nprogress.css';

NProgress.configure({ 
  showSpinner: false,
  minimum: 0.1,
  easing: 'ease',
  speed: 500
});

export function RootLayout() {
  const navigation = useNavigation()

  useEffect(() => {
    console.log('navigation', navigation)
    if (navigation.state !== "idle") {
      NProgress.start()
    } else {
      NProgress.done()
    }
  }, [navigation])

  return <>
    <Outlet />
  </>
}
