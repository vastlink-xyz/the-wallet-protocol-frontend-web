'use client';

import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="w-full max-w-2xl px-4">
        <LoginForm />
      </div>
    </div>
  );
}
