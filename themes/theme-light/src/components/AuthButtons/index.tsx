import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "../LoginButton";
import { LogoutButton } from "../LogoutButton";

export const AuthButtons = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <LoginButton />
        </>
      )}

      {isAuthenticated && (
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
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
