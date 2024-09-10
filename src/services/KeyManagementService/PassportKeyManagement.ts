import { KeyManagementServiceType } from '@/types/keymanagement';
import { KeyManagementService, KeyManagementServiceConfig } from './KeyManagement';
import { Network, Passport } from "@0xpass/passport";
import { auth, log } from '@/lib/utils';
import theWalletPassportService from '../PassportService';
import axios from 'axios';

type RegisterResponse = Awaited<ReturnType<Passport['register']>>;

class PassportKeyManagement extends KeyManagementService {
  constructor(passport: Passport) {
    super({
      serviceType: KeyManagementServiceType.PASSPORT,
      dependencies: {
        passport: passport,
      }
    });
  }

  async signUp({username}: {username: string}) {
    const passport = this.getDependencyInstance();
    await passport.setupEncryption();
    log('username is', username)
    const res = await passport.register({
      username: username,
      userDisplayName: username,
    });
    log(res);
    return res;
  }
  
  signUpSuccess(res: RegisterResponse): boolean {
    return Boolean(res.result.account_id);
  }
  
  async signIn({authUsername}: {authUsername: string}) {
    const passport = this.getDependencyInstance();
    await passport.setupEncryption();
      const [authenticatedHeader, address] = await passport.authenticate({
        username: authUsername,
        userDisplayName: authUsername,
      })!;

      const encryptedUsername = `${authenticatedHeader["X-Encrypted-User" as keyof typeof authenticatedHeader]}`
      const aesKey = passport.aesKey;
      const desUsername = await theWalletPassportService.aesDecrypt(encryptedUsername, aesKey);

      // save authentication data locally so that don't have to reauthenticate every time refresh the page
      auth.saveAuthDataByKey('authenticated', true)
      auth.saveAuthDataByKey('aeskey', aesKey)
      auth.saveAuthDataByKey('authenticatedHeader', authenticatedHeader)
      auth.saveAuthDataByKey('address', address)
      auth.saveAuthDataByKey('desUsername', JSON.parse(desUsername))

      if (auth.all()?.desUsername?.username && address) {
        await axios.post(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/address/bind`, {
          address,
        }, {
          headers: {
            "Content-Type": "application/json",
            "X-Encrypted-Key": `${authenticatedHeader["X-Encrypted-Key" as keyof typeof authenticatedHeader]}`,
            "X-Scope-Id": `${authenticatedHeader["X-Scope-Id" as keyof typeof authenticatedHeader]}`,
            "X-Encrypted-User": `${authenticatedHeader["X-Encrypted-User" as keyof typeof authenticatedHeader]}`,
            "X-Encrypted-Session": `${authenticatedHeader["X-Encrypted-Session" as keyof typeof authenticatedHeader]}`,
            "X-Passport-Username": `${auth.all().desUsername.username}`,
          },
        })
      }
  }

  async bindAddress() {

  }
}

export {
  PassportKeyManagement,
}
