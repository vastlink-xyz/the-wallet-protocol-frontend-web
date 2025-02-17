import { auth0TokenManager } from "@/lib/utils/auth0TokenManager";
import { apiService } from "@/services/KeyManagementService/FireblocksKeyManagementService/fireblocksInstance";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export default function CallbackPage() {
  // const { getAccessTokenSilently } = useAuth0();

  // useEffect(() => {
  //   auth0TokenManager.setTokenGetter(getAccessTokenSilently);

  //   // Initialize the socket
  //   apiService.initSocket();
  // }, [getAccessTokenSilently]);

  return (
    <div>123</div>
  );
};
