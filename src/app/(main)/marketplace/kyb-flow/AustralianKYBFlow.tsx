'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BusinessInfo {
  name: string;
  abn: string;
  address: string;
}

export const AustralianKYBFlow: React.FC = () => {
  const [kybStep, setKybStep] = useState(1);
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
    name: '',
    abn: '',
    address: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessInfo({ ...businessInfo, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    setKybStep(kybStep + 1);
  };

  if (kybStep === 1) {
    return (
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4">Search for Business</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="search">Enter Business Name or ABN</Label>
            <Input id="search" name="search" placeholder="Business name or ABN" onChange={handleInputChange} />
          </div>
          <Button onClick={handleNextStep}>Search</Button>
        </div>
      </Card>
    );
  } else if (kybStep === 2) {
    return (
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4">Business Search Results</h2>
        <p>Displaying search results from ABR...</p>
        <Button onClick={handleNextStep}>Select Business</Button>
      </Card>
    );
  } else if (kybStep === 3) {
    return (
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4">Request Business Profile</h2>
        <p>Retrieving business profile from ASIC...</p>
        <Button onClick={handleNextStep}>Next</Button>
      </Card>
    );
  } else if (kybStep === 4) {
    return (
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4">Business Profile</h2>
        <p>Displaying business profile and company structure...</p>
        <Button onClick={handleNextStep}>Confirm Details</Button>
      </Card>
    );
  } else if (kybStep === 5) {
    return (
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4">Available Reports</h2>
        <p>Listing available reports for the business...</p>
        <Button onClick={handleNextStep}>Select Reports</Button>
      </Card>
    );
  } else if (kybStep === 6) {
    return (
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4">Request Reports</h2>
        <p>Requesting selected reports...</p>
        <Button onClick={handleNextStep}>Submit Request</Button>
      </Card>
    );
  } else if (kybStep === 7) {
    return (
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4">Report Generation</h2>
        <p>Generating requested reports...</p>
        <Button onClick={handleNextStep}>Check Status</Button>
      </Card>
    );
  } else if (kybStep === 8) {
    return (
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4">KYB Process Complete</h2>
        <p>All requested reports are ready. You will receive a webhook notification with the report data.</p>
      </Card>
    );
  } else {
    return (
      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4">Error</h2>
        <p>An unexpected error occurred in the KYB process. Please try again.</p>
      </Card>
    );
  }
};
