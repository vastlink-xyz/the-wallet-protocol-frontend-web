import { sleep } from "@/lib/utils";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export const Auth0AuthenticationGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isLoading, error, getAccessTokenSilently, loginWithRedirect } =
    useAuth0();

  useEffect(() => {
    const initializeAuth = async () => {

      try {
        // await sleep(5000);
        // Attempt silent authentication on component mount
        await getAccessTokenSilently({
          // cacheMode: "on", // Use cache first, then network if needed
          authorizationParams: {
            audience: import.meta.env.VITE_AUTH0_AUDIENCE, // If you need an audience
            scope: "openid profile email offline_access",
          },
        });
      } catch (e) {
        // Handle errors - user might need to log in again
        console.log("Silent authentication failed:", e);
        // await loginWithRedirect({
        //   appState: {
        //     returnTo: window.location.pathname,
        //   },
        //   authorizationParams: {
        //     audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        //     scope: "openid profile email offline_access", // Add offline_access scope
        //   },
        // });
      }
    };

    initializeAuth();
  }, [getAccessTokenSilently, loginWithRedirect]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Authentication Error: {error.message}</div>;
  }

  return <>{children}</>;
};
