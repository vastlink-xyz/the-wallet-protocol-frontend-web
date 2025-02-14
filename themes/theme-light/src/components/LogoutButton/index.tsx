import { cn } from "@/lib/utils";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <div
    className={cn(
      "h-12 px-6 py-3.5 bg-white rounded-[60px] justify-center items-center gap-2 cursor-pointer",
      "hidden laptop:inline-flex"
    )}
  >
    <div
      className="text-center text-black text-base font-medium leading-tight"
      onClick={handleLogout}
    >
      Logout
    </div>
  </div>
  );
};
