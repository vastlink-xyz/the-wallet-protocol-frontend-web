import axios from 'axios';

import { AuthProviderType } from '@/lib/lit/custom-auth';
import { BASE_URL } from '@/constants';

export enum LoginMethod {
    STYTCH_EMAIL_OTP = "Stytch Email OTP",
    STYTCH_PASSKEY = "Stytch Passkey",
    FIREBASE_GOOGLE_OAUTH = "Firebase Google OAuth"
};

export const sendVerificationCode = async (input: any, loginMethod: LoginMethod) => {
    if (loginMethod === LoginMethod.STYTCH_EMAIL_OTP) return await sendVerficationCodeWithStytchEmailOTP(input);

    throw Error(`Login method ${loginMethod} not implemented.`);
};

export const login = async (input: any, loginMethod: LoginMethod) => {
    if (loginMethod === LoginMethod.STYTCH_EMAIL_OTP) return await loginWithStytchEmailOTP(input);

    throw Error(`Login method ${loginMethod} not implemented.`);
};

export const sendVerficationCodeWithStytchEmailOTP = async (input: any) => {
    const { email } = input;
          
    // Call backend API to send OTP
    const { data } = await axios.post(`${BASE_URL}/api/stytch/send-otp`, { 
        email 
    });

    return data;
};

export const loginWithStytchEmailOTP = async (input: any) => {
    const { email, emailId, otpCode } = input;

    try {
        const { data } = await axios.post(`${BASE_URL}/api/stytch/verify-otp`, {
            methodId: emailId,
            code: otpCode,
          });
          
          if (!data?.session_jwt || !data?.user_id) {
            throw new Error('Invalid response from Stytch');
          }
          
          const authParams = {
            providerType: AuthProviderType.EMAIL_OTP,
            accessToken: data.session_jwt,
            userEmail: email,
            userId: data.user_id
          };
          
          return authParams;
    } catch (e) {
        throw e;
    }
};