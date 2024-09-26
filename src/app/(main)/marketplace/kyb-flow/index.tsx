'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AustralianKYBFlow } from "./AustralianKYBFlow";
import { ExternalLink } from "lucide-react";

export function KYBFlow({
  showExternalLink = true,
}: {
  showExternalLink?: boolean
}) {
  // kkktodo: default value should be null
  const [isAustralianBusiness, setIsAustralianBusiness] = useState<boolean | null>(null);

  const handleBusinessTypeSelection = (isAustralian: boolean) => {
    setIsAustralianBusiness(isAustralian);
  };

  const openInNewTab = () => {
    window.open('/kyb', '_blank');
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

  if (isAustralianBusiness === null) {
    return renderBusinessTypeConfirmation();
  }

  if (isAustralianBusiness) {
    return <AustralianKYBFlow />;
  }

  // For non-Australian businesses
  return (
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

      <h2 className="text-2xl font-bold mb-4">International KYB Flow</h2>
      <p>Please complete the international KYB process.</p>
      {/* Add international KYB flow here */}
    </Card>
  );
}
