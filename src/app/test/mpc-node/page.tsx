'use client'

import { Button } from '@/components/ui/button'
import api from '@/lib/api'
import { auth } from '@/lib/utils'
import { useEffect } from 'react'
import bowser from "bowser";

export default function TestMPCNode() {
  useEffect(() => {
    
  }, [])

  return <div>
    <Button onClick={async () => {
      const res = await api.post('/keymanagement/test-mpc', {
        username: auth.all().username,
        idToken: auth.all().idToken,
      })
      return
    }}>Test MPC Node</Button>

    <Button onClick={async () => {
      const browserInfo = bowser.parse(navigator.userAgent);
      const browserName = `${browserInfo.browser.name}`;
      const browserData = {
        browserName,
        browserVersion: browserInfo.browser.version!,
        deviceName: browserInfo.os.name!,
      };
      const res = await api.post('/keymanagement/test-generate-device-factor-key', {
        username: auth.all().username,
        ...browserData,
      })
      return
    }}>generate device factor</Button>
  </div>
}
