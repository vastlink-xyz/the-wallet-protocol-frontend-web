'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { KYC } from "./KYC";
import { CheckCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import { KYCStatus } from "@/app/(main)/marketplace/kyb/components/helper";
import { LogoLoading } from "@/components/LogoLoading";

export default function KYCFlowPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [verifedData, setVerifedData] = useState<any>(null);

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    try {
      setIsLoading(true)
      const { data } = await api.get('/marketplace/product/frankieone/get-kyc-status')
      if (data && data.status === KYCStatus.VERIFIED) {
        setVerified(true)
        setVerifedData(data)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleReVerify = () => {
    setVerified(false)
  }

  const renderVerifiedStatus = () => (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <CardTitle className="text-2xl font-bold text-center text-primary">
          Verification Complete
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-primary/80 mb-4">
          Your identity has been successfully verified.
        </p>
        <p className="text-center text-primary/80">
          <span className="font-semibold">Verification Time:</span> {verifedData.verificationTimestamp}
        </p>
      </CardContent>
      <CardFooter className="w-full flex justify-center">
        <Button 
          onClick={() => handleReVerify()} 
          className="flex items-center justify-center"
        >
          <RefreshCw className="mr-2 h-4 w-4" /> Re-verify Identity
        </Button>
      </CardFooter>
    </Card>
  );

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">
      <LogoLoading type="breathe" />
    </div>
  }

  return (
    <div>
      {
        verified ? renderVerifiedStatus() : <KYC />
      }
    </div>
  );
}
