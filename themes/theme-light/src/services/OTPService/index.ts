export type OTPVerifyMethod = 'email-by-nodemailer' | 'email-by-sendgrid';

class OTPService {
  private verifyMethod: OTPVerifyMethod = 'email-by-sendgrid';

  setVerifyMethod(method: OTPVerifyMethod) {
    this.verifyMethod = method;
  }

  getVerifyMethod(): OTPVerifyMethod {
    return this.verifyMethod;
  }

}

export const otpService = new OTPService();
Object.freeze(otpService);
