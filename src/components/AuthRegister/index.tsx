"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

import { usePassport } from "@/hooks/usePassport";
import theWalletPassportService from "@/services/PassportService";
import { log, auth, cn } from "@/lib/utils";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

export type PageType = 'login' | 'verify-registration'

type UserInput = {
  username: string;
  userDisplayName: string;
};

export default function AuthRegister() {
  const params = useSearchParams();
  const router = useRouter();

  // const [pageType, setPageType] = useState<PageType>('login')
  const [username, setUsername] = useState("");
  const [authenticating, setAuthenticating] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [authenticateSetup, setAuthenticateSetup] = useState(false);

  const { passport } = usePassport(
    // "07907e39-63c6-4b0b-bca8-377d26445172" // original
    // "43ca2cb8-886e-417f-9e31-0c0c5b3acd1e" // localhost:4943
    // "4b8e66a2-bf1f-4d9d-8df8-7f7aa7502370" // localhost:3000
    process.env.NEXT_PUBLIC_SCOPE_ID!,
  );

  // verify registration
  useEffect(() => {
    const email = params?.get('email')
    const otp = params?.get('otp')

    if (email && otp) {
      console.log(`verify-registration ${email} ${otp}`);
      setUsername(email)
      register(email)
    }
  }, [params]);

  async function preRegister() {
    log('call register')
    setRegistering(true)
    const response = await axios.post(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/auth/generate-otp`, 
      {
        email: username,
      }
    );
    log('register res', response);
    if (response.status === 200) {
      toast.info(
        `Please check your email inbox. We've sent you a confirmation email. Click the link in the email to complete your registration.`,
        {
          autoClose: 10000,
        }
      )
      setRegistering(false);
    }
  }

  async function register(registerUsername: string) {
    log('call register')
    setRegistering(true);
    try {
      await passport.setupEncryption();
      log('username is', registerUsername)
      const res = await passport.register({
        username: registerUsername,
        userDisplayName: registerUsername,
      });
      log(res);
  
      if (res.result.account_id) {
        setRegistering(false);
        setAuthenticating(true);
        await authenticate(registerUsername);
        setAuthenticating(false);
      }
    } catch (error) {
      console.error("Error registering:", error);
      toast.error((error as any).message)
    } finally {
      log('set authenticating finally')
      setRegistering(false);
      setAuthenticating(false);
    }
  }

  async function authenticate(authUsername: string) {
    log('call authenticate', authUsername)
    setAuthenticating(true);
    try {
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

      router.push('/home')
    } catch (error: any) {
      console.error("Error registering:", error);
      toast.error(error.message)
    } finally {
      setAuthenticating(false);
    }
  }

  const processUserAccess = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (authenticateSetup) {
      await authenticate(username);
    } else {
      await preRegister();
    }
  }

  const submitBtnText = () => {
    if (authenticateSetup) {
      if (authenticating) {
        return 'Authenticating...';
      }
      return 'Sign In'
    } else {
      if (registering) {
        return 'Registering...';
      } else if (authenticating) {
        return 'Authenticating...';
      }
      return 'Sign Up';
    }
  }

  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      <Card className="sm:w-[360px] py-4 border-none shadow-none mb-12">
        <CardHeader>
          <p className="mb-4 text-lg md:text-2xl m-0 p-0">Sign Up or Sign In</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => processUserAccess(e)} className="group" noValidate>
            <div className="mb-4 relative">
              <Label htmlFor="email">Email</Label>
              <Input
                className="w-full mb-2 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                type="email"
                id="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Email Address"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <span className="absolute -bottom-5 hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Please enter a valid email address
              </span>
            </div>
            <Button
              type="submit"
              className="w-full mt-2 rounded-full bg-warm-flame group-invalid:pointer-events-none group-invalid:opacity-30"
              disabled={registering || authenticating}
            >
              { submitBtnText() }
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <p className="cursor-pointer select-none" onClick={() => setAuthenticateSetup(!authenticateSetup)}>
            {
              authenticateSetup ? 'Sign up?' : 'Already have an account?'
            }
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
