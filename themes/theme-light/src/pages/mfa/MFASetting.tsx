import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { QRCodeSVG } from 'qrcode.react';
import api from '@/lib/api';
import { Button } from '@/components/ui/button';
import { auth0TokenManager } from '@/lib/utils/auth0TokenManager';

const MFASettings = () => {
  const { getAccessTokenSilently, loginWithRedirect } = useAuth0();
  const [authenticators, setAuthenticators] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totpEnrollment, setTotpEnrollment] = useState<any>(null);
  const [otpCode, setOtpCode] = useState('');

  const mfaAudience = `https://${import.meta.env.VITE_AUTH0_DOMAIN}/mfa/`;

  const loginWithMfaAudience = async () => {
    loginWithRedirect({
      authorizationParams: {
        audience: mfaAudience,
        scope: 'read:authenticators remove:authenticators enroll',
        redirect_uri: 'http://localhost:3000/mfa',
      }
    })
  }

  const getMfaToken = async () => {
    try {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: mfaAudience,
          scope: 'read:authenticators remove:authenticators enroll',
        }
      })
      return token
    } catch (err) {
      console.error(err)
      return null
    }
  };

  // fetch authenticators
  const fetchAuthenticators = async () => {
    try {
      setLoading(true);
      const mfaToken = await getMfaToken();
      const response = await api.post('/mfa-management/authenticators', {
        mfaToken,
      });
      setAuthenticators(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch authenticators');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // enroll totp
  const enrollTotp = async () => {
    try {
      setLoading(true);
      const mfaToken = await getMfaToken();
      const response = await api.post('/mfa-management/enroll-totp', {
        mfaToken,
      });
      setTotpEnrollment(response.data.result);
      setError(null);
    } catch (err) {
      setError('Failed to enroll TOTP authenticator');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  // confirm totp
  const confirmTotp = async () => {
    try {
      if (!otpCode) return;
      
      setLoading(true);
      const mfaToken = await getMfaToken();

      await api.post('/mfa-management/confirm-totp', {
        otp: otpCode,
        mfaToken,
        // binding_code: totpEnrollment.binding_code,
      });
      
      setTotpEnrollment(null);
      setOtpCode('');
      fetchAuthenticators();
      setError(null);
    } catch (err) {
      setError('Failed to confirm TOTP authenticator');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  // delete authenticator
  const removeAuthenticator = async (id: string) => {
    try {
      setLoading(true);
      const mfaToken = await getMfaToken();
      await api.post(`/mfa-management/delete-authenticator`, {
        authenticatorId: id,
        mfaToken,
      });
      fetchAuthenticators();
      setError(null);
    } catch (err) {
      setError('Failed to remove authenticator');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const challengeMfa = async () => {
    try {
      const mfaToken = await getMfaToken();
      const response = await api.post('/mfa-management/challenge', {
        mfaToken,
      });
      console.log(response.data);
    } catch (err) {
      setError('Failed to challenge MFA');
      console.error(err);
    }
  }
  
  return (
    <div className="mfa-settings">
      <h2>Multi-Factor Authentication Settings</h2>
      <Button onClick={loginWithMfaAudience}>Login with MFA Audience</Button>

      <Button onClick={fetchAuthenticators}>Get MFA Authenticators</Button>
      
      {error && <div className="error">{error}</div>}
      
      <>
        <h3>Your MFA Methods</h3>
        {authenticators.length === 0 ? (
          <p>You don't have any MFA methods set up yet.</p>
        ) : (
          <ul className="authenticator-list">
            {authenticators.map((auth: any) => (
              <li key={auth.id} className="authenticator-item">
                <div>
                  <strong>Type:</strong> {auth.authenticator_type}
                  {auth.name && <span> ({auth.name})</span>}
                </div>
                <Button 
                  onClick={() => removeAuthenticator(auth.id)}
                  className="remove-button"
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        )}
        
        <div className="add-mfa">
          <h3>Add MFA Method</h3>
          <Button onClick={enrollTotp} disabled={loading}>
            Add Google Authenticator
          </Button>
        </div>
      </>
      
      {totpEnrollment && (
        <div className="totp-enrollment">
          <h3>Set Up Google Authenticator</h3>
          <p>Scan this QR code with your Google Authenticator app:</p>
          <QRCodeSVG value={totpEnrollment.barcode_uri} size={200} />
          <p>Or enter this code manually: <code>{totpEnrollment.secret}</code></p>
          <div className="confirm-totp">
            <p>Enter the 6-digit code from your app:</p>
            <input
              type="text"
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value)}
              maxLength={6}
              placeholder="000000"
            />
            <Button onClick={confirmTotp} disabled={!otpCode || otpCode.length !== 6}>
              Verify
            </Button>
          </div>
        </div>
      )}

      <div>
        <h3>MFA Challenge</h3>
        <Button onClick={challengeMfa}>Challenge MFA</Button>
      </div>
    </div>
  );
};

export default MFASettings;
