import { MfaLoginButton } from "@/components/MfaLoginButton";
import api from "@/lib/api";
import { auth0TokenManager } from "@/lib/utils/auth0TokenManager";
import { apiService } from "@/services/KeyManagementService/FireblocksKeyManagementService/fireblocksInstance";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface MfaAuthenticator {
  id: string;
  name: string;
  authenticator_type: string;
  active: boolean;
  oob_channel: string;
}

export default function MfaPage() {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      console.log("scope", import.meta.env.VITE_AUTH0_SCOPE);
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: import.meta.env.VITE_AUTH0_AUDIENCE_MFA,
          scope: import.meta.env.VITE_AUTH0_SCOPE,
        },
      });
      setToken(token);
      console.log({ token });
    })();
  }, [getAccessTokenSilently]);

  const { data } = useQuery<MfaAuthenticator[]>({
    queryKey: ["mfa-authenticators", token],
    enabled: !!token,
    queryFn: async () => {
      const res = await api.get("/mfa-management/mfa-authenticators");
      console.log({ res });
      if (res.data.authenticators?.error) {
        return [];
      }
      return res.data.authenticators || [];
    },
  });

  return (
    <div className="p-5">
      <div className="text-2xl font-bold">User MFA Token</div>

      <div className="mt-4 flex flex-col gap-4">
        <div>
          <span className="text-[#999999]">Token:</span> {token}
        </div>
      </div>

      <div className="text-2xl font-bold mt-5 ">User MFA list</div>

      <div className="mt-4 flex flex-col gap-4">
        {data?.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <div>
              <span className="text-[#999999]">Name:</span> {item.name || "N/A"}
            </div>

            <div>
              <span className="text-[#999999]">Type:</span>{" "}
              {item.authenticator_type || "N/A"}
            </div>

            <div>
              <span className="text-[#999999]">Active:</span>{" "}
              {item.active ? "Yes" : "No"}
            </div>

            <div>
              <span className="text-[#999999]">Channel:</span>{" "}
              {item.oob_channel || "N/A"}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <MfaLoginButton />
      </div>
    </div>
  );
}
