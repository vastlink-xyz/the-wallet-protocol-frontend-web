import { Button } from "@/components/ui/button";
import api from "@/lib/api";
import { auth0TokenManager } from "@/lib/utils/auth0TokenManager";
import { useAuth0 } from "@auth0/auth0-react";

export default function MfaPage() {
  const { user, getAccessTokenSilently, loginWithRedirect } = useAuth0();

  const handleLoginBalance = () => {
    loginWithRedirect({
      authorizationParams: {
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        response_type: 'id_token token',
        client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
        redirect_uri: 'http://localhost:3000/mfa',
        scope: 'openid view:balance',
      }
    })
  }
  
  const handleBalance = async () => {
    console.log("Balance");
    auth0TokenManager.setTokenGetter(() => getAccessTokenSilently({
      authorizationParams: {
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        response_type: 'id_token token',
        client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
        redirect_uri: 'http://localhost:3000/mfa',
        scope: 'openid view:balance',
      }
    }));
    const response = await api.get('/mfa-management/balance');
    console.log(response);
  }

  const handleLoginTransfer = () => {
    loginWithRedirect({
      authorizationParams: {
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        response_type: 'id_token token',
        client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
        redirect_uri: 'http://localhost:3000/mfa',
        scope: 'openid transfer:funds',
      }
    })
  }

  const handleTransfer = async () => {
    auth0TokenManager.setTokenGetter(() => getAccessTokenSilently({
      authorizationParams: {
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        response_type: 'id_token token',
        client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
        redirect_uri: 'http://localhost:3000/mfa',
        scope: 'openid transfer:funds',
      }
    }));
    const response = await api.post('/mfa-management/transfer');
    console.log(response);
  }

  const handleUserInfo = async () => {
    const response = await api.get('/user/info');
    console.log(response);
  }
  

  if (!user) {
    return <div>Loading...</div>;
  }

  return <div>
    <div>
      <Button onClick={handleLoginBalance}>Login Balance</Button>
      <Button onClick={handleBalance}>Balance</Button>
      <Button onClick={handleLoginTransfer}>Login Transfer</Button>
      <Button onClick={handleTransfer}>Transfer</Button>
      <Button onClick={handleUserInfo}>User Info</Button>
    </div>
  </div>;
}
