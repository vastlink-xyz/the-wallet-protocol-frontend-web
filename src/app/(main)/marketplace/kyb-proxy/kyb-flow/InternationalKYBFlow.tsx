'use client'

import React, { useState, useEffect } from 'react';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from 'react-toastify';
import { ProgressIndicator } from './ProgressIndicator';
import { SearchableSelect } from "@/components/SearchableSelect"

import api from '@/lib/api';
import { handleError, log } from '@/lib/utils';
import { countryCodes, handleDownload } from './helper';

import { mockAvailableReports, mockCountry, mockEntityId, mockKybStep, mockSearchResults, mockSelectedBusiness } from './mock';
import { RefreshCcw } from 'lucide-react';
import { LogoLoading } from '@/components/LogoLoading';

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
  scanMIME?: string;
  scanType: string;
  scanFilename: string;
}

interface IAvailableReport {
  availableFormats: string;
  provider: string;
  reportCode: string;
  reportTitle: string;
  priceTierCode: string;
  ordered?: boolean;
  doc?: ReportDoc;
  status: businessProfileStatus;
}

type businessProfileStatus = 'idle' | 'loading' | 'complete' | 'error';

export function InternationalKYBFlow({
  resetFlow,
}: {
  resetFlow: () => void
}) {
  const [loading, setLoading] = useState(false);
  const [kybStep, setKybStep] = useState(1);
  const [country, setCountry] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<SearchResult | null>(null);
  const [entityId, setEntityId] = useState<string | null>(null);

  const [businessName, setBusinessName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  const [availableReports, setAvailableReports] = useState<IAvailableReport[]>([] as IAvailableReport[]);

  const [availableReportListStatus, setAvailableReportListStatus] = useState<businessProfileStatus>('idle');

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
    if (result) {
      getAvailableReports(result);
    }
  };

  const getAvailableReports = async (business: SearchResult) => {
    try {
      setAvailableReportListStatus('loading');

      // get entityId
      const { data } = await api.post('/marketplace/product/frankieone/international-business-profile', {
        country: country,
        companyCode: business.Code,
        registrationAuthorityCode: business.RegistrationAuthorityCode,
      });
      log('data', data)
      const entityId = data.entityId
      setEntityId(entityId)

      // get available reports
      const response = await api.get(`/marketplace/product/frankieone/international-business-entity-list?entityId=${entityId}`);
      log('response', response)

      setAvailableReports(response.data.reports);
      setAvailableReportListStatus('idle');
    } catch (error) {
      const errorInfo = handleError(error);
      toast.error(errorInfo.message);
      setAvailableReportListStatus('error');
    }
  };

  const updateReportStatus = (index: number, status: businessProfileStatus) => {
    setAvailableReports(prevReports => {
      const updatedReports = [...prevReports];
      updatedReports[index] = { ...updatedReports[index], status: status };
      return updatedReports;
    });
  }

  const orderReport = async (report: IAvailableReport, index: number) => {
    // await pollForReportCompletion('01J8S3HT5ZEHXCQR42TESVTHYM', index)
    // return
    if (!selectedBusiness) return;

    try {
      // update the report status to loading
      updateReportStatus(index, 'loading')

      // order the report
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
      updateReportStatus(index, 'error')
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
            updateReportStatus(index, 'error')
            toast.error(`Timeout while generating report`);
          }
        } else if (data.reportStatus === 'Completed') {
          // Fetch the actual report data
          const response = await api.post('/marketplace/product/frankieone/retrieve-document-scan-data-by-url', {
            documentUrl: data.reportUrl,
          });
          const docScan = response.data?.document?.docScan
          log('docScan', docScan)
          if (docScan && docScan.length > 0) {
            const doc = docScan[docScan.length - 1] as ReportDoc
            const isValidPDF = doc.scanMIME && doc.scanType === 'PDF'
            // update the available reports
            setAvailableReports(prevReports => {
              return prevReports.map((report, i) => {
                if (i === index) {
                  return {
                    ...report,
                    ordered: true,
                    doc: doc,
                    status: isValidPDF ? 'complete' : 'error',
                  };
                }
                return report;
              });
            });
            if (isValidPDF) {
              // Report is ready
              toast.success(`Report is ready`);
            } else {
              toast.error(`Report is not a valid PDF`);
            }
          }
        }
      } catch (error) {
        const errorInfo = handleError(error);
        toast.error(errorInfo.message);
        updateReportStatus(index, 'error')
      }
    };

    // Start polling
    await poll();
  };

  const handleDownloadReport = (report: IAvailableReport) => {
    log('report', report)
    const doc = report.doc
    if (!doc) return
    handleDownload(doc.scanData, `business-profile-${report.reportTitle}.pdf`, doc.scanMIME || '')
  };

  return (
    <div>
      <ProgressIndicator steps={["Search Business", "Select Business", "Generate Reports"]} currentStep={kybStep} />

      {kybStep === 1 && (
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-4">Search for Business</h2>
          <p className="text-sm text-primary/80 mb-4">Select a country and enter the business details to start your search. You can use either the business name or registration number, or both for a more precise search.</p>
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
          <p className="text-sm text-primary/80 mb-4">Review the search results and select the correct business to proceed with report generation.</p>
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
          <div className="text-sm text-primary/80 mb-6 space-y-2">
            <p>Choose which reports you'd like to generate for the selected business. You can order one or multiple reports.</p>
            <p>After ordering, the reports will be generated and available for download. Please review them carefully for your KYB process.</p>
          </div>

          <div className="space-y-4">
            {availableReports.length === 0 ? (
              <div className="flex justify-center">
                {availableReportListStatus === 'loading' ? (
                  <div className="flex items-center space-x-2">
                    <LogoLoading />
                    <p>Loading available reports...</p>
                  </div>
                ) : (
                  'No reports available'
                )}
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
                        <>
                          {
                            report.status === 'complete' && (
                              <Button onClick={() => handleDownloadReport(report)}>
                                Download Report
                              </Button>
                            )
                          }
                          {
                            report.status === 'error' && (
                              <p className="text-red-500">Error generating report</p>
                            )
                          }
                        </>
                      ) : (
                        <Button
                          onClick={() => orderReport(report, index)}
                          disabled={report.status === 'loading'}
                          className="w-40"
                        >
                          {report.status === 'loading' ? <LogoLoading /> :
                            report.status === 'error' ? (
                              <>
                                <RefreshCcw className="mr-2 h-4 w-4" />
                                Retry
                              </>
                            ) : 'Order Report'}
                        </Button>
                      )
                    }
                  </div>
                </div>
              ))
            )}
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