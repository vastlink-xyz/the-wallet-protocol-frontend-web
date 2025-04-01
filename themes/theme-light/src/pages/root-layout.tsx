import { useEffect, useState } from "react";
import { Outlet, useNavigation, useLocation, useNavigate } from "react-router-dom";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '@/styles/nprogress.css';
import { useAuth0 } from "@auth0/auth0-react";
import { apiService } from "@/services/KeyManagementService/FireblocksKeyManagementService/fireblocksInstance";
import { auth0TokenManager } from "@/lib/utils/auth0TokenManager";
import { Loading } from "@/components/Loading";
import { log } from "@/lib/utils";

NProgress.configure({
  showSpinner: false,
  minimum: 0.1,
  easing: 'ease',
  speed: 500
});

export function RootLayout() {
  const navigation = useNavigation()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();
  const [isInitialized, setIsInitialized] = useState(false);

  // Step 1: Initialize token getter
  // This needs to be done first because all API requests require the token
  // We split this into a separate effect to prevent race conditions with API calls
  // Step 2: Initialize socket
  // This needs to happen after token initialization because the socket
  // connection requires an authentication token for the handshake
  // Step 1: Initialize token getter
  // This needs to be done first because all API requests require the token
  // We split this into a separate effect to prevent race conditions with API calls
  // Step 2: Initialize socket
  // This needs to happen after token initialization because the socket
  // connection requires an authentication token for the handshake
  useEffect(() => {
    const initializeSocket = async () => {
      try {
        // Get initial token to ensure auth is ready
        await getAccessTokenSilently();

        // Initialize socket after we have the token
        await apiService.initSocket();

        setIsInitialized(true);
      } catch (error) {
        console.error('Failed to initialize socket:', (error as any).message);
        const errorMessage = (error as any).message || '';
        if (errorMessage.startsWith('Missing Refresh Token')) {
          log('Missing Refresh Token, logout', isLoading)
          if (pathname !== '/invite/register') {
            navigate('/')
          }
        }
        setIsInitialized(false); // Still set initialized to prevent loading screen
      }
    };

    if (isLoading) {
      return
    }

    if (isAuthenticated) {
      auth0TokenManager.setTokenGetter(getAccessTokenSilently);
    }

    initializeSocket();
  }, [getAccessTokenSilently, isLoading, isAuthenticated]);

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
  if (!isInitialized && pathname !== '/' && pathname !== '/auth' && pathname !== '/invite/register') {
    return <Loading />;
  }

  return <Outlet />;
}
