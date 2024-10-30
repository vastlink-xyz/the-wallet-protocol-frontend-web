import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import api from '@/lib/api';
import { handleError, log } from '@/lib/utils';
import { toast } from 'react-toastify';
import { LogoLoading } from '@/components/LogoLoading';
import { KYBStatus } from './helper';
import { mockBusinessDetail, mockEntityId, mockKybStep, mockSearchResult, mockSelectedBusiness } from './mock';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFlowData } from './useFlowData';

interface SearchResult {
  name: string;
  abn: string;
  acn: string | null;
  state: string;
  postalCode: string;
  isActive: boolean;
  type: string | null;
}

interface BusinessDetail {
  registered_name: string;
  ABN: string;
  ACN: string;
  date_registered_with_asic: string;
  state_registered_with_asic: string;
}

const defaultBusinessDetail: BusinessDetail = {
  registered_name: '',
  ABN: '',
  ACN: '',
  date_registered_with_asic: '',
  state_registered_with_asic: '',
}

interface AdditionalBusinessDetail {
  sourceOfCapital: string;
  industry: string;
  websiteUrl: string;
  socialMediaUrl: string;
  officePhone: string;
}

export function AustralianKYBFlow() {
  const navigate = useNavigate();

  const [kybStep, setKybStep] = useState(1);
  const [search, setSearch] = useState<string>('');
  const [searchLoading, setSearchLoading] = useState(false);
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
  const { flowId, flowIndex, serviceUrl, nextIndex } = useFlowData()

  const handleBack = () => {
    setKybStep(kybStep - 1);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numeric input
    const value = e.target.value.replace(/\D/g, '');
    setSearch(value);
  };

  const isValidABNACN = (value: string) => {
    // ABN is 11 digits, ACN is 9 digits
    return value.length === 11 || value.length === 9;
  };

  const handleSearch = async () => {
    if (!isValidABNACN(search)) {
      toast.error('Please enter a valid ABN (11 digits) or ACN (9 digits)');
      return;
    }

    try {
      setSearchLoading(true);
      const response = await api.post('/marketplace/product/frankieone/get-token');
      const token = response.data;
      const { data } = await api.post('/marketplace/product/frankieone/business-lookup', {
        search: search,
        token: token,
      });
      log('lookup business response data', data)
      if (data.length > 0) {
        setSearchResult(data[0]);
      }
    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
    } finally {
      setSearchLoading(false);
    }
  };

  const handleBusinessDetailFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBusinessDetail(prev => ({ ...prev, [name]: value }));
  };

  const handleAdditionalBusinessDetailFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAdditionalBusinessDetail(prev => ({ ...prev, [name]: value }));
  };

  const handleBusinessDetail = async () => {
    try {
      setContinueLoading(true);
      const {data} = await api.post('/marketplace/product/frankieone/query-asic-report', {
        abn: searchResult?.abn,
        acn: searchResult?.acn,
        resultLevel: 'summary',
      });

      // const data = {
      //   "checkId": "16032321-a5c9-7f86-8dc5-8eb4eeddfc22",
      //   "entityId": "a2802ea2-bf3a-dd0e-6274-0d64f3601d9b",
      //   "function": "ownership",
      //   "requestId": "01J9BKQXB4SRCP5DHABKZSRNB1"
      // }
      setEntityId(data.entityId)

      // Poll for report completion
      await pollForReportCompletion(data.requestId);
    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
      setContinueLoading(false);
    }
  }

  const handleAdditionalBusinessDetail = async () => {
    setKybStep(3);
  }

  const pollForReportCompletion = async (requestId: string) => {
    const maxAttempts = 60; // 5 minutes maximum polling time
    let attempts = 0;

    const poll = async (): Promise<void> => {
      try {
        const response = await api.get(`/marketplace/product/frankieone/retrieve-response?requestId=${requestId}`);
        log('response retrieve', response.data);

        if (response.status === 202 || response.data.status === 'pending') {
          // Report is still processing, continue polling
          if (attempts < maxAttempts) {
            attempts++;
            setTimeout(poll, 5000); // Poll again after 5 seconds
          } else {
            // Exceeded maximum polling time
            toast.error(`Timeout while generating report`);
          }
        } else if (response.data.status === 'success') {
          log('report complete', response.data.data.payload)
          const payload = response?.data?.data?.payload
          const business = payload?.uboResponse?.business_details
          if (business) {
            setBusinessDetail(prev => ({ ...prev, ...business }))
          }
          setContinueLoading(false);
          setKybStep(2);
        } else {
          // Assume any other status is an error
          toast.error(`Failed to generate report: ${response.data.status}`);
        }
      } catch (error) {
        const errorInfo = handleError(error);
        toast.error(errorInfo.message);
        setContinueLoading(false);
      }
    };

    // Start polling
    await poll();
  };

  const handleSubmit = async () => {
    try {
      setContinueLoading(true);
      const {data} = await api.post('/marketplace/product/frankieone/save-kyb-data', {
        businessName: businessDetail.registered_name,
        countryCode: 'AU',
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
      navigate(`${serviceUrl}?${params.toString()}`)
    } else {
      navigate('/dashboard')
      setSearch('');
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
            <h2 className="text-2xl font-bold mb-4">Search Business</h2>
            <div className="space-y-4">
              <Label htmlFor="search" className="text-sm font-medium">Enter ABN or ACN</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="search"
                  name="search"
                  placeholder="Enter 11-digit ABN or 9-digit ACN"
                  value={search}
                  onChange={handleInputChange}
                  maxLength={11}
                />
                <Button onClick={handleSearch} disabled={searchLoading || !isValidABNACN(search)}>
                  {searchLoading ? <LogoLoading /> : 'Search'}
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
                      <p className="text-base font-semibold text-primary/80">{searchResult.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary/50">ABN</p>
                      <p className="text-base font-semibold text-primary/80">{searchResult.abn}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary/50">ACN</p>
                      <p className="text-base font-semibold text-primary/80">{searchResult.acn || 'N/A'}</p>
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
                <label htmlFor="registered_name" className="block mb-2 font-medium text-lg">Full registered business name</label>
                <Input
                  id="registered_name"
                  name="registered_name"
                  value={businessDetail.registered_name}
                  onChange={handleBusinessDetailFormInputChange}
                />
              </div>
              <div className="mb-8">
                <label htmlFor="ABN" className="block mb-2 font-medium text-lg">ABN</label>
                <Input
                  id="ABN"
                  name="ABN"
                  value={businessDetail.ABN}
                  onChange={handleBusinessDetailFormInputChange}
                />
              </div>
              <div className="mb-8">
                <label htmlFor="ACN" className="block mb-2 font-medium text-lg">ACN</label>
                <Input
                  id="ACN"
                  name="ACN"
                  value={businessDetail.ACN}
                  onChange={handleBusinessDetailFormInputChange}
                />
              </div>
              <div className="mb-8">
                <label htmlFor="date_registered_with_asic" className="block mb-2 font-medium text-lg">Date registered with ASIC</label>
                <Input
                  id="date_registered_with_asic"
                  name="date_registered_with_asic"
                  value={businessDetail.date_registered_with_asic}
                  onChange={handleBusinessDetailFormInputChange}
                />
              </div>
              <div className="mb-8">
                <label htmlFor="state_registered_with_asic" className="block mb-2 font-medium text-lg">State registered with ASIC</label>
                <Input
                  id="state_registered_with_asic"
                  name="state_registered_with_asic"
                  value={businessDetail.state_registered_with_asic}
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
                  flowId && flowIndex ? 'Continue to KYC' : 'Return to Dashboard'
                }
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};
