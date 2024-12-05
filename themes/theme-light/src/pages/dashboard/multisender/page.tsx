import React, { useState } from 'react';
import Papa from 'papaparse';
import { emailRegex, log } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from 'react-toastify';
import { isAddress } from 'viem';
import api from '@/lib/api';

interface CsvData {
  to: string;
  amount: string;
  note: string;
}

export default function Page() {
  const [csvData, setCsvData] = useState<CsvData[]>([]);
  const [isValidating, setIsValidating] = useState(false);
  const [batchTransactions, setBatchTransactions] = useState<any[]>([]);

  const validateCsvData = (data: any[]): { isValid: boolean; error?: string } => {
    if (!data.length) {
      return { isValid: false, error: 'CSV file is empty' };
    }

    const requiredHeaders = ['to', 'amount', 'note'];
    const headers = Object.keys(data[0]);
    const missingHeaders = requiredHeaders.filter(h => !headers.includes(h));
    
    if (missingHeaders.length) {
      return { 
        isValid: false, 
        error: `Missing required columns: ${missingHeaders.join(', ')}` 
      };
    }

    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      
      if (!(isAddress(row.to) || emailRegex.test(row.to))) {
        return { 
          isValid: false, 
          error: `Invalid to format at row ${i + 1}` 
        };
      }

      if (!row.amount || isNaN(Number(row.amount)) || Number(row.amount) <= 0) {
        return { 
          isValid: false, 
          error: `Invalid amount at row ${i + 1}` 
        };
      }
    }

    return { isValid: true };
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      Papa.parse<CsvData>(file, {
        header: true,
        complete: (results: Papa.ParseResult<CsvData>) => {
          const validation = validateCsvData(results.data);
          
          if (!validation.isValid) {
            toast.error(validation.error);
            setCsvData([]);
            event.target.value = '';
            return;
          }

          setCsvData(results.data);
          toast.success('CSV file uploaded successfully');
        },
        error: (error: Error) => {
          toast.error(`Error parsing CSV: ${error.message}`);
        }
      });
    }
  };

  const logCsvData = () => {
    csvData.forEach((transaction) => {
      log('transaction', transaction);
    });
  };

  const handleSendTransactions = () => {
    log('send transactions', csvData);
  };

  // const validateTo = async (to: string, index: number) => {
  //   if (!isAddress(to)) {
  //     setIsValidating(true);
  //     try {
  //       const res = await api.get(`/address/`, {
  //         params: { email: to }
  //       });
  //       if (res.data.success) {
  //         // the email is registered
  //         setIsValidEmail(true);
  //         setFullAddress(res.data.address);
  //       } else {
  //         if (emailRegex.test(email)) {
  //           // email foramt
  //           setIsValidEmail(true);
  //           setFullAddress('');
  //           setError(t('/dashboard.[token].sendModal.unregisteredEmailNotice'));
  //         } else {
  //           setIsValidEmail(false);
  //           setFullAddress('');
  //           setError(t('/dashboard.[token].sendModal.invalidEmailFormat'));
  //         }
  //       }
  //     } catch (err) {
  //       // if (emailRegex.test(email)) {
  //       //   // email foramt
  //       //   setIsValidEmail(true);
  //       //   setFullAddress('');
  //       //   setError(t('unregisteredEmailNotice'));
  //       // } else {
  //       //   setIsValidEmail(false);
  //       //   setFullAddress('');
  //       //   setError(t('invalidEmailFormat'));
  //       // }
  //     } finally {
  //       setIsValidating(false);
  //     }
  //   } else {
  //     setIsValidEmail(true);
  //     setFullAddress('');
  //     setError('');
  //   }
  // };

  return (
    <div>
      <div>
        <Button
          variant="outline"
          onClick={() => {
            // Find and click the hidden input
            const input = document.querySelector('input[type="file"]');
            if (input) {
              (input as HTMLInputElement).click();
            }
          }}
        >
          <span>Import CSV</span>
        </Button>
        <input
          className="hidden"
          type="file"
          accept=".csv"
          onChange={handleFileChange}
        />
      </div>

      <div>
        <Button onClick={logCsvData}>Log CSV Data</Button>
      </div>

      <ul>
        {csvData.map((transaction, index) => (
          <li key={index}>
            {JSON.stringify(transaction)}
          </li>
        ))}
      </ul>

      <Button onClick={handleSendTransactions}>Send</Button>
    </div>
  );
}
