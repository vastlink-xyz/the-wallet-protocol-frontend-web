'use client'

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import api from '@/lib/api';
import { handleError, log } from '@/lib/utils';
import { toast } from 'react-toastify';
import { LogoLoading } from '@/components/LogoLoading';
import { ProgressIndicator } from './ProgressIndicator';
import { handleDownload } from './helper';
import { mockEntityId, mockKybStep, mockSelectedBusiness } from './mock';

interface SearchResult {
  name: string;
  abn: string;
  acn: string | null;
  state: string;
  postalCode: string;
  isActive: boolean;
  type: string | null;
}

interface ReportDoc {
  scanData: string;
  scanMIME: string;
}

interface ReportData {
  asicExtract: ReportDoc | null;
  uboReport: ReportDoc | null;
}

interface ReportStatus {
  asicExtract: 'idle' | 'loading' | 'complete' | 'error';
  uboReport: 'idle' | 'loading' | 'complete' | 'error';
}

export function AustralianKYBFlow({
  resetFlow,
}: {
  resetFlow: () => void
}) {
  const [loading, setLoading] = useState(false);
  const [kybStep, setKybStep] = useState(1);
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<SearchResult | null>(null);
  const [entityId, setEntityId] = useState<string | null>(null);

  const [reportStatus, setReportStatus] = useState<ReportStatus>({
    asicExtract: 'idle',
    uboReport: 'idle',
  });
  const [reportData, setReportData] = useState<ReportData>({
    asicExtract: null,
    uboReport: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await api.post('/marketplace/product/frankieone/get-token');
      const token = response.data;
      const { data } = await api.post('/marketplace/product/frankieone/business-lookup', {
        search: search,
        token: token,
      });
      log('data', data)
      setSearchResults(data);
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

  const fetchReportData = async (documentId: string, reportType: keyof ReportStatus) => {
    try {
      const response = await api.get(`/marketplace/product/frankieone/retrieve-document?documentId=${documentId}`);
      log('response data', response.data)
      const docScan = response.data?.document?.docScan
      if (docScan && docScan.length > 0) {
        const doc = docScan[docScan.length - 1] as ReportDoc
        setReportData(prev => ({ ...prev, [reportType]: doc }));
      }
      return

    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(`Failed to fetch ${reportType} data: ${errorInfo.message}`);
    }
  };

  const generateReport = async (reportType: keyof ReportStatus) => {
    // await pollForReportCompletion('01J8MAR6JXXWBY03S73MS7FXC8', reportType)
    // return
    if (!selectedBusiness) return;

    setReportStatus(prev => ({ ...prev, [reportType]: 'loading' }));

    try {
      let endpoint = '/marketplace/product/frankieone/business-ownership-query';
      let params: any = {
        abn: selectedBusiness.abn,
        acn: selectedBusiness.acn,
      };

      if (reportType === 'asicExtract') {
        endpoint = '/marketplace/product/frankieone/query-asic-report';
      } else if (reportType === 'uboReport') {
        endpoint = '/marketplace/product/frankieone/query-ubo-report';
      }

      const response = await api.post(endpoint, params);
      log('response', response)
      // 
      const { data } = response;
      log('data', data)
      setEntityId(data.entityId)
      toast.info(`${reportType} report generation initiated. This may take a few minutes.`);

      // Poll for report completion
      await pollForReportCompletion(data.requestId, reportType);

    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
      setReportStatus(prev => ({ ...prev, [reportType]: 'error' }));
    }
  };

  const pollForReportCompletion = async (requestId: string, reportType: keyof ReportStatus) => {
    const maxAttempts = 60; // 5 minutes maximum polling time
    let attempts = 0;

    const poll = async (): Promise<void> => {
      try {
        const response = await api.get(`/marketplace/product/frankieone/retrieve-response?requestId=${requestId}`);
        log('response', response.data);

        if (response.status === 202 || response.data.status === 'pending') {
          // Report is still processing, continue polling
          if (attempts < maxAttempts) {
            attempts++;
            setTimeout(poll, 5000); // Poll again after 5 seconds
          } else {
            // Exceeded maximum polling time
            setReportStatus(prev => ({ ...prev, [reportType]: 'error' }));
            toast.error(`Timeout while generating ${reportType} report`);
          }
        } else if (response.data.status === 'success') {
          // Report is ready
          setReportStatus(prev => ({ ...prev, [reportType]: 'complete' }));
          // Fetch the actual report data
          const payload = response.data.data.payload
          if (payload.reportResult && payload.reportResult.documentId) {
            await fetchReportData(payload.reportResult.documentId, reportType);
          } else {
            toast.error(`No document ID found for ${reportType} report`);
          }
          toast.success(`${reportType} report is ready`);
        } else {
          // Assume any other status is an error
          setReportStatus(prev => ({ ...prev, [reportType]: 'error' }));
          toast.error(`Failed to generate ${reportType} report: ${response.data.status}`);
        }
      } catch (error) {
        const errorInfo = handleError(error);
        toast.error(errorInfo.message);
        setReportStatus(prev => ({ ...prev, [reportType]: 'error' }));
      }
    };

    // Start polling
    await poll();
  };

  const handleDownloadReport = (reportType: keyof ReportStatus) => {
    const report = reportData[reportType]
    if (!report) {
      toast.error('Report data is not available');
      return
    }
    const doc = report as ReportDoc
    handleDownload(doc.scanData, `${reportType}-${selectedBusiness?.name}.pdf`, doc.scanMIME)
  };

  return (
    <div>
      <ProgressIndicator steps={["Search Business", "Select Business", "Generate Reports"]} currentStep={kybStep} />

      {kybStep === 1 && (
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-4">Search for Business</h2>
          <p className="text-sm text-primary/80 mb-4">Enter the business name, ABN, or ACN to search for the company you want to verify.</p>
          <div className="space-y-4">
            <Label htmlFor="search" className="text-sm font-medium">Enter Business Name or ABN / ACN</Label>
            <Input id="search" name="search" placeholder="Business name or ABN / ACN" onChange={handleInputChange} />
            <Button onClick={handleSearch} disabled={loading}>
              {loading ? <LogoLoading /> : 'Search'}
            </Button>
          </div>
        </Card>
      )}

      {kybStep === 2 && (
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-4">Business Search Results</h2>
          <p className="text-sm text-primary/80 mb-4">Select the correct business from the search results to proceed with report generation.</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>ABN</TableHead>
                <TableHead>ACN</TableHead>
                <TableHead>State</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {searchResults.map((result, index) => (
                <TableRow key={index}>
                  <TableCell>{result.name}</TableCell>
                  <TableCell>{result.abn}</TableCell>
                  <TableCell>{result.acn || 'N/A'}</TableCell>
                  <TableCell>{result.state}</TableCell>
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
          <h2 className="text-2xl font-bold mb-4">Generate Reports for {selectedBusiness.name}</h2>
          <div className="text-sm text-primary/80 mb-6 space-y-2">
            <p>Choose which reports you'd like to generate for the selected business. You can generate one or both reports.</p>
            <p>After generating the reports, download and review them carefully for your KYB process.</p>
          </div>
  
          <div className="space-y-4">
            <div className="border rounded-lg p-4 flex justify-between items-center">
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">ASIC Extract with AML Screening</h3>
                <p className="text-sm text-primary/80 mr-4">This report includes a single level business ownership check and AML screening (PEP, sanctions, and adverse media check) on the organisation.</p>
              </div>
              <div className="flex flex-col space-y-2">
                {
                  reportStatus.asicExtract !== 'complete' && (
                    <Button
                      onClick={() => generateReport('asicExtract')}
                      disabled={reportStatus.asicExtract === 'loading'}
                      className="w-40"
                    >
                      {reportStatus.asicExtract === 'loading' ? 'Generating...' : 'Generate Report'}
                    </Button>
                  )}

                {(reportStatus.asicExtract === 'complete' && reportData.asicExtract) && (
                  <Button onClick={() => handleDownloadReport('asicExtract')} className="w-40">
                    Download Report
                  </Button>
                )}
              </div>
            </div>

            <div className="border rounded-lg p-4 flex justify-between items-center">
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">UBO Report</h3>
                <p className="text-sm text-primary/80 mr-4">This report will identify the ultimate owner(s) of this company and help you understand what role (direct or indirect) individuals play within simple or complex corporate structures</p>
              </div>
              <div className="flex flex-col space-y-2">
                {reportStatus.uboReport !== 'complete' && (
                  <Button
                    onClick={() => generateReport('uboReport')}
                    className="w-40"
                    disabled={reportStatus.uboReport === 'loading'}
                  >
                    {reportStatus.uboReport === 'loading' ? 'Generating...' : 'Generate Report'}
                  </Button>
                )}

                {(reportStatus.uboReport === 'complete' && reportData.uboReport) && (
                  <Button onClick={() => handleDownloadReport('uboReport')} className="w-40">
                    Download Report
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button onClick={resetFlow}>Search Another Business</Button>
            <p className="text-sm text-primary/80 mt-2">Reset and start a new business search</p>
          </div>
        </Card>
      )}
    </div>
  );
};