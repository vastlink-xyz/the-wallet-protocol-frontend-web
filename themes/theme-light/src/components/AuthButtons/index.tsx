import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { LoginButton } from "../LoginButton";
import { LogoutButton } from "../LogoutButton";
import { useNavigate } from "react-router-dom";

export const AuthButtons = () => {
  const navigate = useNavigate();

  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  console.log({ user });

  useEffect(() => {
    getAccessTokenSilently().then((token) => {
      console.log({ token });
    });
  }, []);

  return (
    <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <LoginButton />
        </>
      )}

      {isAuthenticated && (
        <div className="flex items-center gap-4 mb-4">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/mfa")}
          >
            <img
              src={user?.picture}
              alt="Profile"
              className="rounded-full w-12 h-12"
            />
            <div className="flex items-center gap-2">
              <h2 className="text-[#f2f2f2]">{user?.nickname}</h2>
            </div>
          </div>

          <LogoutButton />
        </div>
      )}
    </div>
  );
};
