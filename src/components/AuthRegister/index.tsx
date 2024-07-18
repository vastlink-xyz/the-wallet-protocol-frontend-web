"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

import { usePassport } from "@/hooks/usePassport";
import { log, storageAddress, storageAuthenticated, storageAuthenticatedHeader } from "@/lib/utils";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export type PageType = 'login' | 'verify-registration'

type UserInput = {
  username: string;
  userDisplayName: string;
};

export default function AuthRegister() {
  const { toast } = useToast();
  const params = useSearchParams();
  const router = useRouter();

  // const [pageType, setPageType] = useState<PageType>('login')
  const [username, setUsername] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [authenticateSetup, setAuthenticateSetup] = useState(false);
  const [authenticatedHeader, setAuthenticatedHeader] = useState({});
  const [address, setAddress] = useState<string>();

  const userInput = {
    username: '',
    userDisplayName: '',
  };

  const { passport } = usePassport(
    // "07907e39-63c6-4b0b-bca8-377d26445172" // original
    // "43ca2cb8-886e-417f-9e31-0c0c5b3acd1e" // localhost:4943
    // "4b8e66a2-bf1f-4d9d-8df8-7f7aa7502370" // localhost:3000
    process.env.NEXT_PUBLIC_SCOPE_ID!,
  );

  useEffect(() => {
    // set initial authenticated state
    // Calling the getItem method of localStorage outside the useEffect hook will cause an error.
    setAuthenticated(storageAuthenticated.getData() || false)
    setAddress(storageAddress.getData() || '')
    setAuthenticatedHeader(storageAuthenticatedHeader.getData() || {})
  }, [])

  // verify registration
  useEffect(() => {
    const email = params?.get('email')
    const otp = params?.get('otp')

    if (email && otp) {
      console.log(`verify-registration ${email} ${otp}`);
      // setPageType('verify-registration')
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
      toast({
        description: `Please check your email inbox. We've sent you a confirmation email. Click the link in the email to complete your registration.`,
      })
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
      toast({
        variant: 'destructive',
        description: (error as any).message,
      })
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
      log('authenticatedHeader', authenticatedHeader)
      log('address', address);
      storageAuthenticatedHeader.setData(authenticatedHeader)
      storageAddress.setData(address)
      storageAuthenticated.setData(true)
      router.push('/home')
      // setAuthenticatedHeader(authenticatedHeader);
      // setAddress(address);
      // setAuthenticated(true);
    } catch (error) {
      console.error("Error registering:", error);
    } finally {
      // setAuthenticating(false);
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
      return 'Authenticate'
    } else {
      if (registering) {
        return 'Registering...';
      } else if (authenticating) {
        return 'Authenticating...';
      }
      return 'Register';
    }
  }

  // if (authenticated) {
  //   return (
  //     <div className="flex flex-grow flex-col items-center justify-center">
  //       <h1 className="mb-4 text-2xl">Register or Authenticate</h1>

  //       <Card className="py-4">
  //         <CardContent>
  //           <div className="text-center">
  //             <h2 className="mb-4 text-xl">You are authenticated!</h2>
  //             <div className="font-bold mr-2">Your Address is:</div>
  //             <div>{address}</div>
  //           </div>
  //         </CardContent>
  //       </Card>
  //     </div>
  //   );
  // }
  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      <Card className="w-[360px] py-4 border-none shadow-none mb-12 text-warm-foreground">
        <CardHeader>
          <p className="mb-4 text-2xl m-0 p-0">Register or Authenticate</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => processUserAccess(e)}>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                className="focus-visible:ring-warm-foreground focus-visible:ring-1 focus-visible:text-primary"
                type="email"
                id="email"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Email Address"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-full bg-warm-flame"
              disabled={registering || authenticating}
            >
              { submitBtnText() }
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <p className="cursor-pointer select-none" onClick={() => setAuthenticateSetup(!authenticateSetup)}>
            {
              authenticateSetup ? 'Register a Passkey?' : 'Already have a passkey?'
            }
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
