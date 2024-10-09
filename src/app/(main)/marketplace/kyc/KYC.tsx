'use client'

import { handleError, log } from "@/lib/utils"
import { useCallback, useEffect, useState, useRef } from "react"
import '@/styles/frankieon-onesdk.css'
import api from "@/lib/api"
import { LogoLoading } from "@/components/LogoLoading"
import { useRouter } from "next/navigation"
import { useFlowData } from "@/app/(main)/marketplace/kyb/components/useFlowData"
import { toast } from "react-toastify"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface EventListener {
  component: any;
  eventName: string;
  listener: (...args: any[]) => void;
}

export function KYC() {
  const router = useRouter()
  const sdkComponentRef = useRef<any>(null);
  const eventListenersRef = useRef<EventListener[]>([]);
  const { serviceEndingUrl, nextIndex } = useFlowData()

  const [sdkInitialized, setSdkInitialized] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [flowId, setFlowId] = useState<string | null>(null);
  const [flowIndex, setFlowIndex] = useState<string | null>(null);

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
    return () => {
      if (sdkComponentRef.current) {
        // unmount all components
        Object.values(sdkComponentRef.current).forEach((component: any) => {
          component.unmount();
          log('unmount', component)
        });
      }

      if (eventListenersRef.current) {
        // remove all event listeners
        eventListenersRef.current.forEach(({ component, eventName, listener }) => {
          component.off(eventName, listener);
        });
      }
    }
  }, [])

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
    // return {
    //   "token": "eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7Im9yZ2FuaXNhdGlvbiI6eyJpZCI6MTE5OSwicGFyZW50SWQiOm51bGwsImN1c3RvbWVySWQiOiI0ZjBmMzg0Mi1lZGExLTVhZDctZGYzOC0wYzE5ODQzMTI3ZGYiLCJjdXN0b21lckNoaWxkSWQiOm51bGwsIm5hbWUiOiJtZWdhbGl0aCIsIm5pY2tOYW1lIjoibWVnYWxpdGgiLCJpc1Jvb3QiOnRydWUsInRpbWV6b25lIjoiQXVzdHJhbGlhL01lbGJvdXJuZSJ9LCJpc01hY2hpbmVUb2tlbiI6dHJ1ZSwicmVmZXJyZXIiOm51bGwsInBlcm1pc3Npb25zIjpbImNyZWF0ZTo6YXBwbGljYW50IiwidXBkYXRlOjphcHBsaWNhbnQ6cmVmZXJlbmNlOnRlc3QxIiwidmlldzo6YXBwbGljYW50OnJlZmVyZW5jZTp0ZXN0MSIsImxpc3Q6OmFwcGxpY2FudDpyZWZlcmVuY2U6dGVzdDEiLCJjcmVhdGU6Om9jcjpyZWZlcmVuY2U6dGVzdDEiLCJ1cGRhdGU6Om9jcjpyZWZlcmVuY2U6dGVzdDEiLCJ2aWV3OjpvY3J0b2tlbjpyZWZlcmVuY2U6dGVzdDEiLCJjcmVhdGU6OmlkdnByb2Nlc3M6cmVmZXJlbmNlOnRlc3QxIiwiZmZwb3J0YWxfdHJpZ2dlcl9leHRlcm5hbF9pZHYiLCJmZnBvcnRhbF9hcHBsaWNhbnRfbWlkdl91cGxvYWQiLCJmZnBvcnRhbF9hcHBsaWNhbnRfbWFudWFsX2t5Y191cGRhdGUiLCJjcmVhdGU6OmlkdnRva2VuIiwiY3JlYXRlOjpldmVudCJdLCJzZXNzaW9uSWQiOiI0ZGRiY2Q2MC1lYmI2LTQwZjYtODE2NC1mODNmNjM5OWY0ODMiLCJlbnZpcm9ubWVudCI6Imh0dHBzOi8vYmFja2VuZC5reWNhbWwudWF0LmZyYW5raWVmaW5hbmNpYWwuaW8iLCJyZWZlcmVuY2UiOiJ0ZXN0MSIsImV4dHJhRGF0YSI6bnVsbH0sImV4cCI6MTcyODQ0NjcyNn0.pI6QzNKqo7iejK1e9Jkf04YgV2yZXI7oJON9wqHgNbM"
    // }
    const response = await api.post('/marketplace/product/frankieone/get-session');
    const data = await response.data
    log("session", data)
    return data
  }

  const addEventListenerWithCleanup = (component: any, eventName: string, listener: (...args: any[]) => void) => {
    component.on(eventName, listener);
    eventListenersRef.current.push({ component, eventName, listener });
  };

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

    sdkComponentRef.current = {
      welcome,
      consent,
      personal,
      document,
      review,
      retry,
      result_fail,
    }

    welcome.mount("#form-container");
    addEventListenerWithCleanup(welcome, "form:welcome:ready", () => {
      consent.mount("#form-container");
    });

    addEventListenerWithCleanup(consent, "form:consent:ready", () => {
      personal.mount("#form-container");
    });

    addEventListenerWithCleanup(personal, "form:personal:ready", () => {
      document.mount("#form-container");
    });

    addEventListenerWithCleanup(document, "form:document:ready", ({ inputInfo }: any) => {
      review.mount("#form-container");
    });
    addEventListenerWithCleanup(document, "form:document:back", ({ inputInfo }: any) => {
      personal.mount("#form-container");
    });

    let count = 0;
    addEventListenerWithCleanup(review, "form:result:partial", () => {
      if (count < 2) {
        retry.mount("#form-container");
        count += 1;
      } else {
        result_fail.mount("#form-container");
      }
    });

    addEventListenerWithCleanup(review, "form:result:success", async () => {
      log("review success")
      try {
        const { getValue } = individual.access('entityId')
        const entityId = getValue()
        await api.post('/marketplace/product/frankieone/save-kyc-entity-id', {
          entityId,
        })
        if (flowId && serviceEndingUrl) {
          router.push(`${serviceEndingUrl}?flowId=${flowId}&step=${nextIndex}`)
        } else {
          router.push(`/home`)
        }
      } catch (error) {
        const errorInfo = handleError(error)
        toast.error(errorInfo.message)
      }
    });
  }

  const openInNewTab = () => {
    window.open(window.location.href, '_blank');
  };

  return (
    <div className="pt-4 relative">
      {
        !sdkInitialized && (
          <div className="flex justify-center items-center h-screen">
            <LogoLoading type="breathe" />
          </div>
        )
      }

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-2"
        onClick={openInNewTab}
        title="Open in new window"
      >
        <ExternalLink className="h-4 w-4" />
      </Button>
      <div id="form-container"></div>
    </div>
  )
}
