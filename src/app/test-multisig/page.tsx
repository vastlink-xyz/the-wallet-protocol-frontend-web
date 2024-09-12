'use client'

import { usePassport } from "@/hooks/usePassport";
import { auth, log } from "@/lib/utils";
import theWalletAuthenticaionService from "@/services/AuthenticationService";
import { useEffect } from "react";
import { stringToHex, verifyMessage } from "viem";

export default function TestMultisig() {

  const { passport } = usePassport(
    // "07907e39-63c6-4b0b-bca8-377d26445172" // original
    // "43ca2cb8-886e-417f-9e31-0c0c5b3acd1e" // localhost:4943
    // "4b8e66a2-bf1f-4d9d-8df8-7f7aa7502370" // localhost:3000
    process.env.NEXT_PUBLIC_SCOPE_ID!,
  );

  // const config = {
  //   "authorization": {
  //     "type": "none"
  //   },
  //   triggers: [
  //     {
  //       type: 'hook',
  //     }
  //   ],
  //   "envs": [],
  //   "max_executions": 0,
  //   "verifications": {
  //     "count": 1
  //   },
  //   "conditions": [
  //     {
  //       "type": "fetch",
  //       "endpoint": `${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/multisig`,
  //       "headers": {
  //         "content-type": "application/json"
  //       },
  //       "protocol": "POST", //can be GET,POST
  //       "body": {
  //         "count": 1
  //       }, //pass whatever body content you need
  //       "substitution": false // whether to allow using of previous condition outputs
  //     }
  //   ],
  //   "actions": {
  //     "type": "personal_sign",
  //     "check": "",
  //     "data": "0x000000",
  //     "substitution": true
  //   },
  //   "postHook": []
  // }
  const transaction = {
    nonce: "0",
    maxPriorityFeePerGas: "0x9184E72A", 
    maxFeePerGas: "0x9184E72A",
    to: "0x265d1ee16ccfc8a4b8fd37a05c82c657d8b6f755",
    gas: "0x7530", 
    value: "0x2386F26FC10", 
    chainId: "0xaa36a7",
    type: "0x02"
  }


  const config = {
    "authorization": {
        "type": "none"
    },
    "verifications": {
        "count": 1
    },
    "triggers": [
       { "type": "hook"},
    ],
    "envs": [],
    "max_executions": 0,
    "conditions": [
        {
            "type": "fetch",
            "endpoint": "https://safe-hawk-87-1dcr3r830fn6.deno.dev",
            "headers": {
                "content-type": "application/json"
            },
            "protocol": "POST", //can be GET,POST
            "body": {
                "count": 1,
                "address": "0x16f063f43b17799310f472defa5e8a4a90c13bf2"
            }, //pass whatever body content you need
            "substitution": false // whether to allow using of previous condition outputs
        }
    ],
    // "actions": {
    //     "type": "personal_sign",
    //     "check": "",
    //     "data": stringToHex('hello'),
    //     "substitution": true
    // },
    "actions": {
      "type": "eth_signTransaction",
      "check": "",
      "data": JSON.stringify(transaction),
      "substitution": true
    },
    "postHook": []
}

  useEffect(() => {
  }, [])

  const handleCreate = async () => {
    // const result = await verifyMessage({
    //   address: '0x16f063f43b17799310f472defa5e8a4a90c13bf2',
    //   message: 'hello',
    //   // signature: '0xf5bc0d9794b8bf36948a5bb898b10348f3eb363e6b14f05b35cbb3d2d67da5c7636ed63d2e77bc8127f4b306af7b28285659a0bc70813e20b28b8d3f2355186f1b',
    //   signature: '0xaf921a0c83fe9de30a26ff5f463978ec0403779c28ef93ec7db1ed9b5d9b470151cd2e6b737a9935ee9083d99aa4c3c37d94552e9a33de32a37d684cf687f4c51b',
    // })
    // log('result', result)
    
    const { desUsername } = auth.all()
    const userInput = {
      username: desUsername.username,
      userDisplayName: desUsername.username,
    }
    // kkktodo
    await passport.setupEncryption();
    await passport.authenticate(userInput);
    
    const lambda_uuid = await passport.createLambda({ data: config } as any);
    log('uuid', lambda_uuid);
  }
  
  const handleList = async () => {
    const { desUsername } = auth.all()
    const userInput = {
      username: desUsername.username,
      userDisplayName: desUsername.username,
    }
    await passport.setupEncryption();
    await passport.authenticate(userInput);

    const lambdas = await passport.listLambda();
    log('list', lambdas);
  }
  
  const handleExec = async () => {
    const { desUsername, address } = auth.all()
    const userInput = {
      username: desUsername.username,
      userDisplayName: desUsername.username,
    }
    await passport.setupEncryption();
    // await passport.authenticate(userInput);

    // const uuid = '3b4756c8-7111-4520-963f-1c27e3fb0688'
    const uuid = 'b3ec648d-5f96-4029-9c92-615da79a7ccd'
    const response = await passport.executeLambda({
      data: {
        id: uuid,
        params: [],
      }
    } as any);
    log('res', response);
    return
    const signature = response.result
    const r = await verifyMessage({
      address: '0x16f063f43b17799310f472defa5e8a4a90c13bf2',
      message: 'hello',
      signature,
    })
    log('r', r)
  }


  return (
    <div>
      <button onClick={() => handleCreate()}>create</button>
      <hr />
      <button onClick={() => handleList()}>list</button>
      <hr />
      <button onClick={() => handleExec()}>exec</button>
    </div>
  )
}
