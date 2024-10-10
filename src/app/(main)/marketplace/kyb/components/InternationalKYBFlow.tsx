'use client'

import React, { useState, useEffect } from 'react';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'react-toastify';
import { LogoLoading } from '@/components/LogoLoading';
import { SearchableSelect } from "@/components/SearchableSelect"

import api from '@/lib/api';
import { handleError, log } from '@/lib/utils';
import { countryCodes, KYBStatus } from './helper';

import { mockCountry, mockSearchResult } from './mock';
import { ChevronLeft } from 'lucide-react';
import { useFlowData } from './useFlowData';
import { useRouter } from 'next/navigation';

const countryOptions = countryCodes.map(code => ({
  value: code.code,
  label: code.name
}))


interface AdditionalBusinessDetail {
  sourceOfCapital: string;
  industry: string;
  websiteUrl: string;
  socialMediaUrl: string;
  officePhone: string;
}

interface BusinessDetail {
  Code?: string;
  Date?: string;
  FoundationDate?: string;
  LegalForm?: string;
  LegalStatus?: string;
  Name?: string;
  NormalisedLegalStatus?: string;
  RegistrationDate?: string;
  RegistrationNumber?: string;
  VatNumber?: string;
}

interface SearchResult {
  Name: string;
  Code: string;
  CompanyID: string;
  RegistrationAuthorityCode?: string;
  Addresses?: any;
  LegalStatus?: string;
}


const defaultBusinessDetail: BusinessDetail = {
  Code: '',
  Date: '',
  FoundationDate: '',
  LegalForm: '',
  LegalStatus: '',
  Name: '',
  NormalisedLegalStatus: '',
  RegistrationDate: '',
  RegistrationNumber: '',
  VatNumber: '',
}

export const InternationalKYBFlow: React.FC = () => {
  const router = useRouter();
  const { flowId, flowIndex, serviceUrl, nextIndex } = useFlowData()

  const [loading, setLoading] = useState(false);
  const [kybStep, setKybStep] = useState(1);
  const [country, setCountry] = useState<string>('');
  const [continueLoading, setContinueLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);
  const [businessDetail, setBusinessDetail] = useState<BusinessDetail>(defaultBusinessDetail);
  const [additionalBusinessDetail, setAdditionalBusinessDetail] = useState<AdditionalBusinessDetail>({
    sourceOfCapital: '',
    industry: '',
    websiteUrl: '',
    socialMediaUrl: '',
    officePhone: '',
  });
  const [entityId, setEntityId] = useState<string | null>(null);

  const [businessName, setBusinessName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  const handleBack = () => {
    setKybStep(kybStep - 1);
  }

  const handleCountryChange = (value: string) => {
    setCountry(value);
  };

  const handleBusinessDetailFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBusinessDetail(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = async () => {
    if (!businessName && !registrationNumber) {
      toast.error('Please enter either a business name or registration number');
      return;
    }

    try {
      setLoading(true);
      const { data } = await api.post('/marketplace/product/frankieone/international-business-search', {
        country: country,
        organisationName: businessName || undefined,
        organisationNumber: registrationNumber || undefined,
      });
      log('data', data)
      setSearchResult(data.Companies.CompanyDTO[0]);
    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBusinessDetail = async () => {
    try {
      setContinueLoading(true);
      const { data } = await api.post('/marketplace/product/frankieone/international-business-profile', {
        country: country,
        companyCode: searchResult?.Code,
        registrationAuthorityCode: searchResult?.RegistrationAuthorityCode,
      });
      log('data', data)
      setBusinessDetail(data.CompanyProfile)

      setEntityId(data.entityId)
      setContinueLoading(false);
      setKybStep(2);
    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
      setContinueLoading(false);
    }
  }

  const handleAdditionalBusinessDetail = async () => {
    setKybStep(3);
  }

  const handleAdditionalBusinessDetailFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAdditionalBusinessDetail(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      setContinueLoading(true);
      const { data } = await api.post('/marketplace/product/frankieone/save-kyb-data', {
        businessName: businessDetail.Name,
        countryCode: country,
        status: KYBStatus.VERIFIED,
        entityId: entityId,
        ...additionalBusinessDetail,
      });
      log('save kyb data', data)
      setKybStep(4);
    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
    } finally {
      setContinueLoading(false);
    }
    log('additional business detail', additionalBusinessDetail)
  }

  const handleDone = async () => {
    if (flowId && flowIndex) {
      // continue to kyc
      const params = new URLSearchParams()
      params.set('flowId', flowId)
      params.set('flowIndex', flowIndex)
      if (nextIndex > 0) {
        params.set('nextIndex', nextIndex.toString())
      }
      router.push(`${serviceUrl}?${params.toString()}`)
    } else {
      router.push('/home')
      setCountry('');
      setBusinessName('');
      setRegistrationNumber('');
      setSearchResult(null);
      setBusinessDetail(defaultBusinessDetail);
      setAdditionalBusinessDetail({
        sourceOfCapital: '',
        industry: '',
        websiteUrl: '',
        socialMediaUrl: '',
        officePhone: '',
      });
    }
  }

  return (
    <div className='light'>
      <Card className="p-8 pt-6">
        {/* back button */}
        {kybStep > 1 && (
          <div className='flex items-center gap-1 text-xs mb-4 cursor-pointer' onClick={() => handleBack()}>
            <ChevronLeft size={14} />
            <span>Back</span>
          </div>
        )}

        {kybStep === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Search for Business</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="country" className="text-sm font-medium">Select Country / Region</Label>
                <SearchableSelect
                  options={countryOptions}
                  value={country}
                  onValueChange={handleCountryChange}
                  placeholder="Select a country/region"
                  emptyMessage="No country found."
                />
              </div>
              <div>
                <Label htmlFor="businessName" className="text-sm font-medium">Business Name</Label>
                <Input
                  id="businessName"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Enter business name"
                />
              </div>
              <div>
                <Label htmlFor="registrationNumber" className="text-sm font-medium">Registration Number</Label>
                <Input
                  id="registrationNumber"
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  placeholder="Enter registration number"
                />
              </div>
              <div className='text-right'>
                <Button
                  onClick={handleSearch}
                  disabled={loading || !country || (!businessName && !registrationNumber)}
                >
                  {loading ? <LogoLoading /> : 'Search'}
                </Button>
              </div>
            </div>

            {searchResult && (
              <div className="mt-6">
                <p className='mb-2 text-sm font-medium text-primary/50'>We've found the following:</p>
                <div className='border border-primary/20 rounded-md p-6'>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <p className="text-sm font-medium text-primary/50">Name</p>
                      <p className="text-base font-semibold text-primary/80">{searchResult.Name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary/50">Company ID</p>
                      <p className="text-base font-semibold text-primary/80">{searchResult.CompanyID}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {searchResult && (
              <div className='mt-4 text-right'>
                <Button className='' onClick={() => handleBusinessDetail()} disabled={!searchResult || continueLoading}>
                  {continueLoading ? <LogoLoading /> : 'Continue'}
                </Button>
              </div>
            )}
          </>
        )}

        {kybStep === 2 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Business Detail</h2>
            <p className='text-sm text-primary/50 mb-4'>We've imported some of your business information from the ASIC registry. Please review and update any information that is incorrect.</p>
            <form>
              <div className="mb-8">
                <label htmlFor="Name" className="block mb-2 font-medium text-lg">Business Name</label>
                <Input
                  id="Name"
                  name="Name"
                  value={businessDetail.Name}
                  onChange={handleBusinessDetailFormInputChange}
                />
              </div>
              <div className="mb-8">
                <label htmlFor="FoundationDate" className="block mb-2 font-medium text-lg">Foundation Date</label>
                <Input
                  id="FoundationDate"
                  name="FoundationDate"
                  value={businessDetail.FoundationDate}
                  onChange={handleBusinessDetailFormInputChange}
                />
              </div>
              <div className="mb-8">
                <label htmlFor="LegalForm" className="block mb-2 font-medium text-lg">Legal Form</label>
                <Input
                  id="LegalForm"
                  name="LegalForm"
                  value={businessDetail.LegalForm}
                  onChange={handleBusinessDetailFormInputChange}
                />
              </div>
              <div className="mb-8">
                <label htmlFor="LegalStatus" className="block mb-2 font-medium text-lg">Legal Status</label>
                <Input
                  id="LegalStatus"
                  name="LegalStatus"
                  value={businessDetail.LegalStatus}
                  onChange={handleBusinessDetailFormInputChange}
                />
              </div>
              <div className="mb-8">
                <label htmlFor="RegistrationNumber" className="block mb-2 font-medium text-lg">Registration Number</label>
                <Input
                  id="RegistrationNumber"
                  name="RegistrationNumber"
                  value={businessDetail.RegistrationNumber}
                  onChange={handleBusinessDetailFormInputChange}
                />
              </div>
            </form>

            <div className='mt-4 text-right'>
              <Button className='' onClick={() => handleAdditionalBusinessDetail()} disabled={continueLoading}>
                {continueLoading ? <LogoLoading /> : 'Continue'}
              </Button>
            </div>
          </>
        )}

        {kybStep === 3 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Additional Business Detail</h2>
            <form>
              <div className="mb-8">
                <label htmlFor="sourceOfCapital" className="block mb-2 font-medium text-lg">Source of Capital</label>
                <Input
                  id="sourceOfCapital"
                  name="sourceOfCapital"
                  value={additionalBusinessDetail.sourceOfCapital}
                  onChange={handleAdditionalBusinessDetailFormInputChange}
                />
              </div>
              <div className="mb-8">
                <label htmlFor="industry" className="block mb-2 font-medium text-lg">Industry</label>
                <Input
                  id="industry"
                  name="industry"
                  value={additionalBusinessDetail.industry}
                  onChange={handleAdditionalBusinessDetailFormInputChange}
                />
              </div>
              <div className="mb-8">
                <label htmlFor="websiteUrl" className="block mb-2 font-medium text-lg">Website URL</label>
                <Input
                  id="websiteUrl"
                  name="websiteUrl"
                  value={additionalBusinessDetail.websiteUrl}
                  onChange={handleAdditionalBusinessDetailFormInputChange}
                />
              </div>
              <div className="mb-8">
                <label htmlFor="socialMediaUrl" className="block mb-2 font-medium text-lg">Social Media URL</label>
                <Input
                  id="socialMediaUrl"
                  name="socialMediaUrl"
                  value={additionalBusinessDetail.socialMediaUrl}
                  onChange={handleAdditionalBusinessDetailFormInputChange}
                />
              </div>
              <div className="mb-8">
                <label htmlFor="officePhone" className="block mb-2 font-medium text-lg">Office Phone</label>
                <Input
                  id="officePhone"
                  name="officePhone"
                  value={additionalBusinessDetail.officePhone}
                  onChange={handleAdditionalBusinessDetailFormInputChange}
                />
              </div>
            </form>

            <div className='mt-4 text-right'>
              <Button className='' onClick={() => handleSubmit()} disabled={continueLoading}>
                {continueLoading ? <LogoLoading /> : 'Submit'}
              </Button>
            </div>
          </>
        )}

        {kybStep === 4 && (
          <>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">KYB Completed Successfully</h2>
              <p className="text-lg text-green-600 mb-6">Your business verification process has been completed successfully.</p>
              <Button onClick={() => handleDone()}>
                {
                  flowId && flowIndex ? 'Continue to KYC' : 'Return to Home'
                }
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};