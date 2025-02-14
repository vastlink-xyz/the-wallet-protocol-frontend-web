import { Auth0NavigateProvider } from "@/providers/Auth0Provider";

export default function CallbackPage() {
  return (
    <Auth0NavigateProvider>
      <div></div>
    </Auth0NavigateProvider>
  );
};
