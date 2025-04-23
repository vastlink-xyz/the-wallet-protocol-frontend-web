import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AuthMethod, IRelayPKP, SessionSigs } from "@lit-protocol/types";
import { log, getEmailFromGoogleToken } from "@/lib/utils";
import { litNodeClient } from "@/lib/lit";
import mfaLitActionCode from "@/app/dashboard/lit-action-code/mfa";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import axios from "axios";

const baseUrl = 'https://e5d6-1-168-164-238.ngrok-free.app'

interface MFAProps {
  currentPkp: IRelayPKP;
  sessionSigs: SessionSigs;
  authMethod: AuthMethod;
}

export function MFA({
  currentPkp,
  sessionSigs,
  authMethod,
}: MFAProps) {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const email = getEmailFromGoogleToken(authMethod.accessToken);

  // Mock API call to generate OTP
  const generateOtp = async () => {
    const res = await axios.post(`${baseUrl}/lit/generate-otp`, {
      email
    })
    return res.data
  };

  const handleGenerateOtp = async () => {
    try {
      setLoading(true);
      const response = await generateOtp();
      log('Generate OTP response:', response);
      setOtpSent(true);
    } catch (error) {
      console.error('Failed to generate OTP:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      setVerifying(true);
      
      // If OTP verification is successful, execute the Lit Action
      await litNodeClient.connect();
      const litActionResponse = await litNodeClient.executeJs({
        code: mfaLitActionCode,
        sessionSigs,
        jsParams: {
          otp,
          publicKey: currentPkp.publicKey,
          sigName: 'sig',
          email,
        }
      });
      log('MFA Lit Action response:', litActionResponse);
      setResult(litActionResponse);
    } catch (error) {
      console.error('Failed to verify OTP or execute Lit Action:', error);
    } finally {
      setVerifying(false);
    }
  };

  const handleReset = () => {
    setOtp('');
    setOtpSent(false);
    setResult(null);
  };

  return (
    <div className="bg-card p-4 rounded-lg border mb-6">
      <h2 className="text-lg font-semibold mb-2">MFA</h2>
      {email && (
        <p className="text-sm text-muted-foreground mb-4">
          Current Google Account: {email}
        </p>
      )}

      {!otpSent ? (
        <Button 
          onClick={handleGenerateOtp} 
          className="mb-4"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Sign'}
        </Button>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Please check your email for the OTP code
          </p>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="max-w-[200px]"
            />
            <Button 
              onClick={handleVerifyOtp}
              disabled={verifying || !otp}
            >
              {verifying ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                'Verify'
              )}
            </Button>
          </div>
        </div>
      )}

      {result && (
        <div className="space-y-4 mt-4">
          <div>
            <p className="font-medium">Result:</p>
            <pre className="text-sm break-all whitespace-pre-wrap bg-muted p-2 rounded">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
          <Button 
            onClick={handleReset}
            variant="outline"
          >
            Start Over
          </Button>
        </div>
      )}
    </div>
  );
}
