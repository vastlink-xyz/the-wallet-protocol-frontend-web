'use client';

import LocaleSwitcher from "@/components/LocaleSwitcher";
// import LoginForm from "@/components/LoginForm";
import MultiProviderLogin from "@/components/LoginForm/MultiProviderLogin";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <LocaleSwitcher className="absolute top-4 right-6 z-10 text-black" size="lg" />
      <div className="w-full max-w-2xl px-4">
        {/* <LoginForm /> */}
        <MultiProviderLogin />
      </div>
      <span style={{ display: "none" }}>environment is ${process.env.NEXT_PUBLIC_ENV}</span>
    </div>
  );
}
