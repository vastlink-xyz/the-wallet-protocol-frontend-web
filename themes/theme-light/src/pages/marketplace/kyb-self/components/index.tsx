'use client'

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { AustralianKYBFlow } from "./AustralianKYBFlow";
import { CheckCircle, ExternalLink, RefreshCw } from "lucide-react";
import { InternationalKYBFlow } from "./InternationalKYBFlow";
import api from "@/lib/api";
import { cn, log } from "@/lib/utils";
import { KYBStatus } from "./helper";
import { LogoLoading } from "@/components/LogoLoading";

export function KYBFlow({
  showExternalLink = true,
}: {
  showExternalLink?: boolean
}) {
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
    <div className="p-0 relative">
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
    </div>
  );

  const renderVerifiedStatus = () => (
    <>
      <div className="mt-[48px] mb-[27px] text-center text-black text-[28px] font-bold leading-[36.96px]">
        Verification Complete
      </div>

      <div className="h-4 flex justify-center items-center">
        <p className="text-center">
          <span className="text-[#979797] text-sm font-medium font-['Roboto'] leading-none">Your business has been successfully verified.</span>
        </p>
      </div>

      <div className="p-4 text-[#979797] text-sm font-medium font-['Roboto'] leading-none">
        <p className="text-center mb-2">
          <span className="font-medium">Business Name:</span> {verifedData.businessName}
        </p>
        <p className="text-center">
          <span className="font-medium">Verification Time:</span> {verifedData.verificationTimestamp}
        </p>
      </div>

      <div className={cn([
        'tablet:w-[548px] w-[334px]',
        'tablet:px-4 px-0',
        'mt-[56px] mx-auto',
        'flex flex-col items-center'
      ])}>
        <img src="/imgs/icons/success_added.png" alt="success" />

        <Button
          className="w-full mt-[46px]"
          onClick={() => handleReVerify()}
        >
          <RefreshCw className="mr-2 h-4 w-4" /> Re-verify Business
        </Button>
      </div>
    </>
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
