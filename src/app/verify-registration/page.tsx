'use client'

import { useEffect } from "react";
import { log } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyRegistrationPage() {
  const router = useRouter()
  const params = useSearchParams()

  useEffect(() => {
    const queryParams = Object.fromEntries(params.entries());
    router.replace(`/?${new URLSearchParams(queryParams).toString()}`)
  }, []);

  return (
    <div></div>
  );
}
