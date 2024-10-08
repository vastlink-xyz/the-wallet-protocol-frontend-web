'use client'

import { log } from "@/lib/utils"
import { useCallback, useEffect, useState } from "react"
import '@/styles/frankieon-onesdk.css'
import api from "@/lib/api"
import { LogoLoading } from "@/components/LogoLoading"
import { useRouter } from "next/navigation"

export function KYC() {
  const router = useRouter()
  const [sdkInitialized, setSdkInitialized] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const loadScript = useCallback(() => {
    if (document.getElementById('frankieone-sdk')) {
      // Script already loaded
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = "https://assets.frankiefinancial.io/one-sdk/v1/oneSdk.umd.js";
    script.id = 'frankieone-sdk';
    script.async = true;
    script.onload = () => {
      setScriptLoaded(true);
    };
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    loadScript()
  }, [loadScript])

  useEffect(() => {
    if (scriptLoaded && typeof OneSdk !== 'undefined') {
      log("KYC", OneSdk)
      init()
    } else {
      log("OneSdk not found")
    }
  }, [scriptLoaded])

  const fetchSession = async () => {
    const response = await api.post('/marketplace/product/frankieone/get-session');
    const data = await response.data
    log("session", data)
    return data
  }

  const init = async () => {
    const sessionObject = await fetchSession()
    const oneSdk = await OneSdk({
      session: sessionObject,
      mode: 'development',
      recipe: {
        form: {
          provider: {
            name: 'react',
          },
        }
      }
    });

    log("oneSdk", oneSdk)
    setSdkInitialized(true)

    const individual = oneSdk.individual();
    individual.setProfileType("auto");

    const welcome = oneSdk.component("form", {
      name: "WELCOME",
      type: "manual",
    });
    const consent = oneSdk.component("form", { name: "CONSENT" });

    const personal = oneSdk.component("form", {
      name: "PERSONAL",
      type: "manual",
      personal: {
        countries: {
          default: {
            default: {
              fields: [
                {
                  fieldType: 'address',
                  name: 'address.fullAddress',
                  hide: true
                }
              ]
            }
          },
          AUS: {
            default: {
              fields: [
                {
                  fieldType: 'address',
                  name: 'address.fullAddress',
                  hide: true
                }
              ]
            }
          }
        }
      }
    });

    const document = oneSdk.component("form", {
      name: "DOCUMENT",
      type: "manual",
      numberOfIDs: 1,
    });

    const review = oneSdk.component("form", {
      name: "REVIEW",
      type: "manual",
      verify: true
    });

    const retry = oneSdk.component("form", {
      name: "RETRY",
      type: "manual",
    });

    const result_fail = oneSdk.component("form", {
      name: "RESULT",
      type: "manual",
      state: 'FAIL',
      title: { label: 'Max attempt reached' },
      descriptions: [{ label: 'You have reached all the attempts. Our officer will review your details and get in touch.' }, { label: 'Please close the browser' }],
      cta: { label: 'Close' }
    });

    welcome.mount("#form-container");
    welcome.on("form:welcome:ready", () => {
      consent.mount("#form-container");
    });
    welcome.on("form:welcome:failed", () => {
      // display error message
    });

    consent.on("form:consent:ready", async () => {
      personal.mount("#form-container");
    });

    personal.on("form:personal:ready", async () => {
      document.mount("#form-container");
    });

    document.on("form:document:ready", async ({ inputInfo }: any) => {
      review.mount("#form-container");
    });
    document.on("form:document:back", async ({ inputInfo }: any) => {
      personal.mount("#form-container");
    });

    let count = 0;
    review.on("form:result:partial", async () => {
      if (count < 2) {
        retry.mount("#form-container");
        count += 1;
      } else {
        result_fail.mount("#form-container");
      }
    });

    review.on("form:result:success", async () => {
      log("review success")
      const { getValue } = individual.access('entityId')
      const entityId = getValue()
      await api.post('/marketplace/product/frankieone/save-kyc-entity-id', {
        entityId,
      })
      router.push('/home')
    });
  }

  return (
    <div className="pt-4">
      {
        !sdkInitialized && (
          <div className="flex justify-center items-center h-screen">
            <LogoLoading type="breathe" />
          </div>
        )
      }
      <div id="form-container"></div>
    </div>
  )
}
