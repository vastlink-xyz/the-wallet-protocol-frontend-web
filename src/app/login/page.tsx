"use client";

import { FormEvent, useState } from "react";
import { usePassport } from "@/hooks/usePassport";

import axios from "axios";

import theWalletAuthenticaionService from "@/services/AuthenticationService";
import theWalletTransactionService from "@/services/TransactionService";
import theWalletPassportService from "@/services/PassportService";
import { log } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function LoginPage() {
  const { toast } = useToast();

  const [username, setUsername] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [authenticateSetup, setAuthenticateSetup] = useState(false);
  const [authenticatedHeader, setAuthenticatedHeader] = useState({});
  const [address, setAddress] = useState<string>();

  type UserInput = {
    username: string;
    userDisplayName: string;
  };

  const { passport } = usePassport(
    // "07907e39-63c6-4b0b-bca8-377d26445172" // original
    // "43ca2cb8-886e-417f-9e31-0c0c5b3acd1e" // localhost:4943
    // "4b8e66a2-bf1f-4d9d-8df8-7f7aa7502370" // localhost:3000
    process.env.NEXT_PUBLIC_SCOPE_ID!,
  );

  async function preRegister(userInput: any) {
    log('call register')
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

  async function register() {
    setRegistering(true)
    await preRegister({
      username,
      userDisplayName: username,
    });
    return;
  }

  async function authenticate() {
    log('call authenticate')
    setAuthenticating(true);
    try {
      await passport.setupEncryption();
      const [authenticatedHeader, address] = await passport.authenticate({
        username,
        userDisplayName: username,
      })!;
      setAuthenticatedHeader(authenticatedHeader);
      console.log(address);
      setAddress(address);
      setAuthenticated(true);
    } catch (error) {
      console.error("Error registering:", error);
    } finally {
      setAuthenticating(false);
    }
  }

  const processUserAccess = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (authenticateSetup) {
      await authenticate();
    } else {
      await register();
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

  return (
    <>
      <div className="flex flex-grow flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl">Register or Authenticate</h1>

        <Card className="w-[360px] py-4">
          <CardContent>
            <form onSubmit={(e) => processUserAccess(e)}>
              <div className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
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
                className="w-full"
                disabled={registering || authenticating}
              >
                { submitBtnText() }
              </Button>
            </form>
          </CardContent>

          <CardFooter>
            <p className="cursor-pointer" onClick={() => setAuthenticateSetup(!authenticateSetup)}>
              {
                authenticateSetup ? 'Register a Passkey?' : 'Already have a passkey?'
              }
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* <div className="flex flex-col items-center justify-center py-2">

        <div
          className={`text-2xl font-bold mb-8 ${
            authenticated ? "text-green-500" : "text-red-500"
          }`}
        >
          {authenticated ? "Authenticated" : "Not authenticated"}
        </div>

        <div className="text-center">
          <div className="flex flex-col mt-4 space-y-4">
            {authenticated ? (
              <>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="font-bold">Address</div>
                    <div>{address}</div>
                  </div>
                </div>
              </>
            ) : (
              <div className="mb-12 flex flex-col space-y-2 mt-8">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border border-1 rounded p-2 border-black mb-4 ml-2 text-center"
                  placeholder="Enter unique username"
                />
                <button
                  className="border border-1 rounded p-2 border-black mb-4 ml-2"
                  onClick={async () => {
                    if (authenticateSetup) {
                      await authenticate();
                    } else {
                      await register();
                    }
                  }}
                  disabled={registering || authenticating}
                >
                  {authenticateSetup
                    ? authenticating
                      ? "Authenticating..."
                      : "Authenticate"
                    : registering
                    ? "Registering..."
                    : authenticating
                    ? "Authenticating..."
                    : "Register"}
                </button>

                <span
                  onClick={() => setAuthenticateSetup(!authenticateSetup)}
                  className="cursor-pointer"
                >
                  {authenticateSetup
                    ? "Register a Passkey?"
                    : "Already have a passkey?"}
                </span>
              </div>
            )}
          </div>
        </div>
      </div> */}
    </>
  );
}
