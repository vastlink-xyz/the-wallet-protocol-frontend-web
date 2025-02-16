import { cn } from "@/lib/utils";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
      authorizationParams: {
        // screen_hint: "signup",
        connection: 'email',
      },
    });
  };

  return (
    <>
      {/* Desktop */}
      <div
        className={cn(
          "h-12 px-6 py-3.5 bg-white rounded-[60px] justify-center items-center gap-2 cursor-pointer",
          "hidden laptop:inline-flex"
        )}
      >
        <div
          className="text-center text-black text-base font-medium leading-tight"
          onClick={handleLogin}
        >
          Get started for free
        </div>
      </div>

      {/* Mobile */}
      <div
        className={cn(
          "w-[254px] h-10 px-4 py-3 bg-white rounded-[60px] justify-center items-center gap-2 mx-auto",
          'mb-4',
          "inline-flex laptop:hidden",
          "mt-[40px] tablet:mt-[56px]",
          "w-[254px] tablet:w-[232px]"
        )}
      >
        <div
          className="text-center text-black text-sm font-medium leading-none cursor-pointer"
          onClick={handleLogin}
        >
          Get started for free
        </div>
      </div>
    </>
  );
};
