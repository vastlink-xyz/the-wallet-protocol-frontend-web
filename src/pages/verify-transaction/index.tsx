"use client";

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from "react";
import { usePassport } from "../../app/hooks/usePassport";

import axios from "axios";

export default function Page() {  
  const params = useSearchParams();

  useEffect(() => {
    const id = params?.get('id')
    const otp = params?.get('otp')

    if (id && otp) {
      console.log(`verify-transaction ${id} ${otp}`);
      verifyTransaction(id, otp);
    }
  }, [params]);

  async function verifyTransaction(id: string, otp: string) {
    const response = await axios.post(`http://localhost:5001/transaction/verify-to-sign`, 
      {
        id,
        otp,
      }
    );
    console.log(response);
  }

  return (
    <div> Verify transaction </div>
  );
}
