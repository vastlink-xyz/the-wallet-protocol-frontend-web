import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Auth0NavigateProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  const onRedirectCallback = (appState: any) => {
    console.log('appState', appState, window.location.pathname)
    const inviteParams = appState?.inviteParams;
    if (inviteParams) {
      navigate(appState?.returnTo || window.location.pathname, { state: { inviteParams } });
    } else {
      navigate(appState?.returnTo || window.location.pathname);
    }
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience: audience,
        redirect_uri: redirectUri,
        scope: "openid profile email offline_access",
        // connection: 'email',
      }}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens={true}
      // useRefreshTokensFallback={true} // Used for memory cache
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};
