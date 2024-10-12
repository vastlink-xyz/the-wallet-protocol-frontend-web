'use client'

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { AustralianKYBFlow } from "./AustralianKYBFlow";
import { CheckCircle, ExternalLink, RefreshCw } from "lucide-react";
import { InternationalKYBFlow } from "./InternationalKYBFlow";
import api from "@/lib/api";
import { log } from "@/lib/utils";
import { KYBStatus } from "./helper";
import { LogoLoading } from "@/components/LogoLoading";

export function KYBFlow({
  showExternalLink = true,
}: {
  showExternalLink?: boolean
}) {
  // kkktodo: default value should be null
  const [isAustralianBusiness, setIsAustralianBusiness] = useState<boolean | null>(null);
  const [verified, setVerified] = useState(false);
  const [verifedData, setVerifedData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    init()
  }, []);

  const init = async () => {
    try {
      setIsLoading(true)
      const { data } = await api.get('/marketplace/product/frankieone/get-kyb-status')
      if (data && data.status === KYBStatus.VERIFIED) {
        setVerified(true)
        setVerifedData(data)
      }
    } catch (error) {
      log('kyb status error', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleBusinessTypeSelection = (isAustralian: boolean) => {
    setIsAustralianBusiness(isAustralian);
  };

  const openInNewTab = () => {
    window.open(window.location.href, '_blank');
  };

  const handleReVerify = () => {
    setVerified(false)
  };

  const renderBusinessTypeConfirmation = () => (
    <Card className="p-8 relative">
      {showExternalLink && (
        <Button
          variant="ghost"
        size="icon"
        className="absolute top-2 right-2"
        onClick={openInNewTab}
        title="Open in new window"
      >
        <ExternalLink className="h-4 w-4" />
        </Button>
      )}
      <h2 className="text-2xl font-bold mb-4">Confirm Business Type</h2>
      <p className="text-primary/60 mb-6">Is your business registered in Australia?</p>
      <div className="space-x-4">
        <Button onClick={() => handleBusinessTypeSelection(true)}>Yes, Australian Business</Button>
        <Button onClick={() => handleBusinessTypeSelection(false)}>No, International Business</Button>
      </div>
    </Card>
  );

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
          Your business has been successfully verified.
        </p>
        <p className="text-center text-primary/80 mb-2">
          <span className="font-semibold">Business Name:</span> {verifedData.businessName}
        </p>
        <p className="text-center text-primary/80">
          <span className="font-semibold">Verification Time:</span> {verifedData.verificationTimestamp}
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button 
          onClick={() => handleReVerify()} 
          className="flex items-center justify-center"
        >
          <RefreshCw className="mr-2 h-4 w-4" /> Re-verify Business
        </Button>
      </CardFooter>
    </Card>
  );

  if (isLoading) {
    return <div className="flex items-center justify-center h-full">
      <LogoLoading type="breathe" />
    </div>
  }

  if (isAustralianBusiness) {
    return <AustralianKYBFlow />;
  } else if (isAustralianBusiness === false) {
    return <InternationalKYBFlow />;
    // return <div>International KYB Flow</div>;
  }

  return <div>
    {
      verified ? renderVerifiedStatus() : renderBusinessTypeConfirmation()
    }
  </div>
}
