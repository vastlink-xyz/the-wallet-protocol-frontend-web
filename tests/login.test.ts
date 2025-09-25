import { describe, it, expect } from 'vitest';

import { sendVerificationCode, login, LoginMethod } from '@/services/loginService';

import { theUser, theUserA, theUserB, testConfig } from './fixtures';

const the_user_requests_a_verification_code = async () => {
    return await sendVerificationCode({ email: theUser.email}, LoginMethod.STYTCH_EMAIL_OTP);
};

const the_user_logs_in = async (input: any) => {
    return await login(input, LoginMethod.STYTCH_EMAIL_OTP);
};

describe('login tests', () => {
    it('the user logs in', async () => {
        // const res1 = await the_user_requests_a_verification_code();
        // console.debug("verification response:", res1);

        const input = { 
            email: theUser.email, 
            emailId: theUser.methodId, 
            otpCode: "681528",
        };

        const res2 = await the_user_logs_in(input);
        console.debug("login response:", res2);

        expect(res2.accessToken).toBeDefined();

      });
});