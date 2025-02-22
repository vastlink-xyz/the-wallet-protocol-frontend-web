import { useEffect, useState } from "react";
import { Outlet, useNavigation, useLocation } from "react-router-dom";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '@/styles/nprogress.css';
import { useAuth0 } from "@auth0/auth0-react";
import { apiService } from "@/services/KeyManagementService/FireblocksKeyManagementService/fireblocksInstance";
import { auth0TokenManager } from "@/lib/utils/auth0TokenManager";
import { Loading } from "@/components/Loading";

NProgress.configure({
  showSpinner: false,
  minimum: 0.1,
  easing: 'ease',
  speed: 500
});

export function RootLayout() {
  const navigation = useNavigation()
  const { pathname } = useLocation()
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [isInitialized, setIsInitialized] = useState(false);
  const [isTokenInitialized, setIsTokenInitialized] = useState(false);

  // Step 1: Initialize token getter
  // This needs to be done first because all API requests require the token
  // We split this into a separate effect to prevent race conditions with API calls
  useEffect(() => {
    if (isAuthenticated) {
      auth0TokenManager.setTokenGetter(getAccessTokenSilently);
      setIsTokenInitialized(true);
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  // Step 2: Initialize socket
  // This needs to happen after token initialization because the socket
  // connection requires an authentication token for the handshake
  useEffect(() => {
    const initializeSocket = async () => {
      if (!isTokenInitialized) return;
      
      try {
        // Get initial token to ensure auth is ready
        await getAccessTokenSilently();
        
        // Initialize socket after we have the token
        await apiService.initSocket();
        
        setIsInitialized(true);
      } catch (error) {
        console.error('Failed to initialize socket:', error);
        setIsInitialized(true); // Still set initialized to prevent loading screen
      }
    };

    initializeSocket();
  }, [isTokenInitialized, getAccessTokenSilently]);

  useEffect(() => {
    // console.log('navigation', navigation)
    if (navigation.state !== "idle") {
      NProgress.start()
    } else {
      NProgress.done()
    }
  }, [navigation])

  // scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Show loading screen until both token and socket are initialized
  if ((!isTokenInitialized || !isInitialized) && pathname !== '/' && pathname !== '/auth') {
    return <Loading />;
  }

  return <Outlet />;
}
