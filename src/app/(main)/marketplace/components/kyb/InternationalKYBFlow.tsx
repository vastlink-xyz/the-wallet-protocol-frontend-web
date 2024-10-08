'use client'

import React, { useState, useEffect } from 'react';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from 'react-toastify';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LogoLoading } from '@/components/LogoLoading';
import { ProgressIndicator } from './ProgressIndicator';
import { SearchableSelect } from "@/components/SearchableSelect"

import api from '@/lib/api';
import { handleError, log } from '@/lib/utils';
import { countryCodes, handleDownload } from './helper';

import { mockAvailableReports, mockCountry, mockEntityId, mockKybStep, mockSearchResults, mockSelectedBusiness } from './mock';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

const countryOptions = countryCodes.map(code => ({
  value: code.code,
  label: code.name
}))

interface SearchResult {
  Name: string;
  Code: string;
  CompanyID: string;
  RegistrationAuthorityCode?: string;
  Addresses?: any;
  LegalStatus?: string;
}

interface ReportDoc {
  scanData: string;
  scanMIME: string;
}

interface ReportType {
  availableFormats: string;
  provider: string;
  reportCode: string;
  reportTitle: string;
  priceTierCode: string;
  ordered?: boolean;
  doc?: ReportDoc;
}

type businessProfileStatus = 'idle' | 'loading' | 'complete' | 'error';

export const InternationalKYBFlow: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [kybStep, setKybStep] = useState(2);
  const [country, setCountry] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>(mockSearchResults);
  const [selectedBusiness, setSelectedBusiness] = useState<SearchResult | null>(null);
  const [entityId, setEntityId] = useState<string | null>(mockEntityId);

  const [businessProfileStatus, setBusinessProfileStatus] = useState<businessProfileStatus>('idle');

  const [businessName, setBusinessName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  const [availableReports, setAvailableReports] = useState<ReportType[]>(mockAvailableReports);
  const [orderedReports, setOrderedReports] = useState<{ [key: string]: boolean }>({});

  const [selectedReport, setSelectedReport] = useState<ReportType | null>(null);
  const [reportStatus, setReportStatus] = useState<'idle' | 'loading' | 'complete' | 'error'>('idle');

  const handleCountryChange = (value: string) => {
    setCountry(value);
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
      setSearchResults(data.Companies.CompanyDTO);
      setKybStep(2);
    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectBusiness = (result: SearchResult) => {
    log('business', result)
    setSelectedBusiness(result);
    setKybStep(3);
  };

  const fetchReportData = async (documentId: string) => {
    try {
      const response = await api.get(`/marketplace/product/frankieone/retrieve-document?documentId=${documentId}`);
      log('response data', response.data)
      const docScan = response.data?.document?.docScan
      if (docScan && docScan.length > 0) {
        const doc = docScan[docScan.length - 1] as ReportDoc
      }
      return

    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(`Failed to fetch data: ${errorInfo.message}`);
    }
  };

  const getAvailableReports = async () => {
    if (!selectedBusiness) return;

    try {
      setReportStatus('loading');

      // get entityId
      const { data } = await api.post('/marketplace/product/frankieone/international-business-profile', {
        country: country,
        companyCode: selectedBusiness.Code,
        registrationAuthorityCode: selectedBusiness.RegistrationAuthorityCode,
      });
      log('data', data)
      const entityId = data.entityId
      setEntityId(entityId)

      // get available reports
      const response = await api.get(`/marketplace/product/frankieone/international-business-entity-list?entityId=${entityId}`);
      log('response', response)
      setAvailableReports(response.data.reports);
      setReportStatus('idle');
    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
      setReportStatus('error');
    }
  };

  const orderReport = async (report: ReportType, index: number) => {
    // await pollForReportCompletion('01J8S3HT5ZEHXCQR42TESVTHYM', index)
    // return
    if (!selectedBusiness) return;

    setSelectedReport(report);
    setReportStatus('loading');

    try {
      const response = await api.post('/marketplace/product/frankieone/international-business-entity-report', {
        entityId: entityId,
        reportCode: report.reportCode,
      });
      
      const { data } = response;
      log('data', data)
      toast.info('Report order initiated. This may take a few minutes.');

      await pollForReportCompletion(data.requestId, index);

    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
      setReportStatus('error');
    }
  };

  const generateReport = async () => {
    // await pollForReportCompletion('01J8PVXR0DBDFPEC0TESRYQD4F')
    // return
    if (!selectedBusiness) return;

    setBusinessProfileStatus('loading')

    try {
      let endpoint = '/marketplace/product/frankieone/international-business-profile';

      const response = await api.post(endpoint, {
        country: country,
        companyCode: selectedBusiness.Code,
        registrationAuthorityCode: selectedBusiness.RegistrationAuthorityCode,
      });
      log('response', response)
      // 
      const { data } = response;
      log('data', data)
      setEntityId(data.entityId)
      toast.info(`Business Profile report generation initiated. This may take a few minutes.`);

      // Poll for report completion
      // await pollForReportCompletion(data.requestId);

    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
      setBusinessProfileStatus('error')
    }
  };

  const pollForReportCompletion = async (requestId: string, index: number) => {
    const maxAttempts = 60; // 5 minutes maximum polling time
    let attempts = 0;

    const poll = async (): Promise<void> => {
      try {
        const { data } = await api.post(`/marketplace/product/frankieone/international-business-entity-report-status`, {
          entityId: entityId,
          requestId: requestId,
        });

        if (data.reportStatus !== 'Completed') {
          // Report is still processing, continue polling
          if (attempts < maxAttempts) {
            attempts++;
            setTimeout(poll, 10000); // Poll again after 5 seconds
          } else {
            // Exceeded maximum polling time
            setBusinessProfileStatus('error')
            toast.error(`Timeout while generating business profile report`);
          }
        } else if (data.reportStatus === 'Completed') {
          // Report is ready
          setBusinessProfileStatus('complete')
          // Fetch the actual report data
          const response = await api.post('/marketplace/product/frankieone/retrieve-document-scan-data-by-url', {
            documentUrl: data.reportUrl,
          });
          const docScan = response.data?.document?.docScan
          log('docScan', docScan)
          if (docScan && docScan.length > 0) {
            const doc = docScan[docScan.length - 1] as ReportDoc
            // update the available reports
            const newAvailableReports = [...availableReports]
            newAvailableReports[index].ordered = true
            newAvailableReports[index].doc = doc
            setAvailableReports(availableReports)
            log('success')
          }
          toast.success(`Business profile report is ready`);
        }
      } catch (error) {
        const errorInfo = handleError(error);
        toast.error(errorInfo.message);
        setBusinessProfileStatus('error')
      }
    };

    // Start polling
    await poll();
  };

  const handleDownloadReport = (report: ReportType) => {
    const doc = report.doc
    if (!doc) return
    handleDownload(doc.scanData, `business-profile-${report.reportTitle}.pdf`, doc.scanMIME)
  };

  return (
    <div>
      <ProgressIndicator steps={["Search Business", "Select Business", "Generate Reports"]} currentStep={kybStep} />

      {kybStep === 1 && (
        <Card className="p-8">
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
            <p className="text-sm text-primary/80 italic">
              Please enter either a business name or registration number, or both for a more precise search.
            </p>
            <div>
              <Label htmlFor="businessName" className="text-sm font-medium">Business Name</Label>
              <Input
                id="businessName"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Enter business name (optional if registration number is provided)"
              />
            </div>
            <div>
              <Label htmlFor="registrationNumber" className="text-sm font-medium">Registration Number</Label>
              <Input
                id="registrationNumber"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                placeholder="Enter registration number (optional if business name is provided)"
              />
            </div>
            <Button
              onClick={handleSearch}
              disabled={loading || !country || (!businessName && !registrationNumber)}
            >
              {loading ? <LogoLoading /> : 'Search'}
            </Button>
          </div>
        </Card>
      )}

      {kybStep === 2 && (
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-4">Business Search Results</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Company ID</TableHead>
                <TableHead>Legal Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {searchResults.map((result, index) => (
                <TableRow key={index}>
                  <TableCell>{result.Name}</TableCell>
                  <TableCell>{result.Code}</TableCell>
                  <TableCell>{result.CompanyID}</TableCell>
                  <TableCell>{result.LegalStatus}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleSelectBusiness(result)}>Select</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}

      {kybStep === 3 && selectedBusiness && (
        <Card className="p-8">
        <h2 className="text-2xl font-bold mb-4">Available Reports for {selectedBusiness.Name}</h2>
        <div className="space-y-4">
          {availableReports.length === 0 ? (
            <div className="flex justify-center">
              <Button onClick={getAvailableReports} disabled={reportStatus === 'loading'}>
                {reportStatus === 'loading' ? 'Loading...' : 'Get Available Reports'}
              </Button>
            </div>
          ) : (
            availableReports.map((report, index) => (
              <div key={report.reportCode} className="border rounded-lg p-4 flex justify-between items-center">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{report.reportTitle}</h3>
                  <p className="text-sm text-primary/80 mr-4">Format: {report.availableFormats}, Provider: {report.provider}</p>
                </div>
                <div className="flex flex-col space-y-2">
                  {
                    report.ordered ? (
                      <Button onClick={() => handleDownloadReport(report)}>
                        Download Report
                      </Button>
                    ) : (
                      <Button
                        onClick={() => orderReport(report, index)}
                        disabled={reportStatus === 'loading'}
                        className="w-40"
                      >
                        Order Report
                      </Button>
                    )
                  }
                </div>
              </div>
            ))
          )}
        </div>
      </Card>
      )}
    </div>
  );
};