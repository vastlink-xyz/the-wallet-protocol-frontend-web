import { useRef } from "react";
import { WebauthnSigner } from "@0xpass/webauthn-signer";
import { Network, Passport } from "@0xpass/passport";
import { log } from "@/lib/utils";

export function usePassport(scopeId: string) {
  const signerRef = useRef<WebauthnSigner | null>(null);
  const passportRef = useRef<Passport | null>(null);

  if (!signerRef.current) {
    log('rpid is', window.location.hostname)
    signerRef.current = new WebauthnSigner({
      rpId: window.location.hostname!,
      rpName: "0xPass",
    });
  }

  if (!passportRef.current) {
    passportRef.current = new Passport({
      scopeId: scopeId,
      signer: signerRef.current,
      network: Network.TESTNET,
    });
  }

  return {
    passport: passportRef.current,
    signer: signerRef.current,
  };
}
