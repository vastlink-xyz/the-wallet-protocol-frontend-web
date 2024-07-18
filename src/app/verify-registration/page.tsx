import AuthRegister from "@/components/AuthRegister";
import Image from "next/image";

export default function Page() {

  return (
    <div className="h-screen bg-warm flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg px-12 py-12">
        <div className="flex items-center mb-8">
          <img src="/logo-alone.png" className="w-[48px]" alt="logo" />
          <p className="font-bold">Vast Wallet</p>
        </div>

        <div className="flex justify-between items-center">
          <AuthRegister />

          <div className="ml-8">
            <div className="w-[640px] text-warm-foreground flex flex-col items-center">
              <p className="text-4xl font-bold mb-4">Next generation</p>
              <p className="text-3xl mb-2">Crypto Wallets</p>
              <img src='/logo-and-text.gif' className="w-[360px]" alt="logo" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
// http://localhost:3000/verify-registration?email=user4@abc.com&otp=09aeef
