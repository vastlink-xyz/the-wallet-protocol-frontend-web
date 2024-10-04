'use client'

import { log } from "@/lib/utils"
import { useEffect, useState } from "react"
import '@/styles/frankieon-onesdk.css'
import { verify } from "crypto"
import api from "@/lib/api"
import Script from "next/script"

const sessionObject = {
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7Im9yZ2FuaXNhdGlvbiI6eyJpZCI6MTE5OSwicGFyZW50SWQiOm51bGwsImN1c3RvbWVySWQiOiI0ZjBmMzg0Mi1lZGExLTVhZDctZGYzOC0wYzE5ODQzMTI3ZGYiLCJjdXN0b21lckNoaWxkSWQiOm51bGwsIm5hbWUiOiJtZWdhbGl0aCIsIm5pY2tOYW1lIjoibWVnYWxpdGgiLCJpc1Jvb3QiOnRydWUsInRpbWV6b25lIjoiQXVzdHJhbGlhL01lbGJvdXJuZSJ9LCJpc01hY2hpbmVUb2tlbiI6dHJ1ZSwicmVmZXJyZXIiOm51bGwsInBlcm1pc3Npb25zIjpbImNyZWF0ZTo6YXBwbGljYW50IiwidXBkYXRlOjphcHBsaWNhbnQ6cmVmZXJlbmNlOnRlc3QxIiwidmlldzo6YXBwbGljYW50OnJlZmVyZW5jZTp0ZXN0MSIsImxpc3Q6OmFwcGxpY2FudDpyZWZlcmVuY2U6dGVzdDEiLCJjcmVhdGU6Om9jcjpyZWZlcmVuY2U6dGVzdDEiLCJ1cGRhdGU6Om9jcjpyZWZlcmVuY2U6dGVzdDEiLCJ2aWV3OjpvY3J0b2tlbjpyZWZlcmVuY2U6dGVzdDEiLCJjcmVhdGU6OmlkdnByb2Nlc3M6cmVmZXJlbmNlOnRlc3QxIiwiZmZwb3J0YWxfdHJpZ2dlcl9leHRlcm5hbF9pZHYiLCJmZnBvcnRhbF9hcHBsaWNhbnRfbWlkdl91cGxvYWQiLCJmZnBvcnRhbF9hcHBsaWNhbnRfbWFudWFsX2t5Y191cGRhdGUiLCJjcmVhdGU6OmlkdnRva2VuIiwiY3JlYXRlOjpldmVudCJdLCJzZXNzaW9uSWQiOiJkOThjNjY5Yy04NmU4LTQ1YzQtOTVlZS03YjFlNDJkNDE4ODciLCJlbnZpcm9ubWVudCI6Imh0dHBzOi8vYmFja2VuZC5reWNhbWwudWF0LmZyYW5raWVmaW5hbmNpYWwuaW8iLCJyZWZlcmVuY2UiOiJ0ZXN0MSIsImV4dHJhRGF0YSI6bnVsbH0sImV4cCI6MTcyODAxNTY4OX0.vQ09xmOBVBCoIPWPhCXLYcyzgulq7emMy8SEoRpu-g0"
}

export function KYC() {
  const [sdkLoaded, setSdkLoaded] = useState(false);

  const handleScriptLoad = () => {
    setSdkLoaded(true);
  }

  useEffect(() => {
    if (sdkLoaded && typeof OneSdk !== 'undefined') {
      log("KYC", OneSdk)
      // fetchSession()
      // return
      init()
    } else {
      log("OneSdk not found")
    }
  }, [sdkLoaded])

  const fetchSession = async () => {
    const response = await api.post('/marketplace/product/frankieone/get-session');
    const data = await response.data
    log("session", data)
    return data
  }

  const init = async () => {
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

    const individual = oneSdk.individual();
    individual.setProfileType("auto");

    // individual.addConsent("general");
    // individual.addConsent("docs");
    // individual.addConsent("creditheader");

    const personal = oneSdk.component("form", {
      name: "PERSONAL",
      type: "manual",
      personal: {
        countries:{
          default:{
            default:{
              fields:[
                {
                  fieldType: 'address',
                  name: 'address.fullAddress',
                  hide: true
                }
              ]
            }
          },
          AUS:{ // 例如，对于澳大利亚
            default:{
              fields:[
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

    const result = oneSdk.component("form", {
      name: "RESULT",
      type: "manual",
    });

    const review = oneSdk.component("form", {
      name: "REVIEW",
      type: "manual",
      verify: true
    });

    personal.mount("#form-container");

    personal.on("form:personal:ready", async (a: any) => {
      log("personal ready", a)
      document.mount("#form-container");
    });

    document.on("form:document:ready", async ({inputInfo}: any) => {
      log("document input info", inputInfo)
      review.mount("#form-container");
    });

    review.on("form:result:partial", async (a: any) => {
      log("review partial", a)
    });

    review.on("form:result:success", async (a: any) => {
      log("review success", a)
    });

  }

  return (
    <div>
      <h1>KYC</h1>
      <div id="form-container"></div>
      <Script
        src="https://assets.frankiefinancial.io/one-sdk/v1/oneSdk.umd.js"
        onLoad={handleScriptLoad}
      />
    </div>
  )
}
