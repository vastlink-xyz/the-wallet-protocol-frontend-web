"use client";

import axios from "axios";
import { authenticatedHeaderForRequest, log } from "@/lib/utils";
import { lazy, Suspense, useEffect, useState } from "react";
import { Params, Flow } from "react-chatbotify"

const ChatBot = lazy(() => import("react-chatbotify"));

// Mock async API function
const mockAsyncApi = (delay: number = 1000): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Mock API response");
    }, delay);
  });
};

const flow: Flow = {
  start: {
    message: "Welcome! I can help you transfer cryptocurrencies. You can send ETH, MATIC, or TVWT to any email address. For example, you can say: 'Send 0.01 ETH to example@gmail.com'. How can I assist you today?",
    function: async (params: Params) => {
      log(params)
      // const response = await mockAsyncApi(3000);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/ai/chat`, {
        question: params.userInput,
      }, {
        headers: authenticatedHeaderForRequest(),
      });
      log('resp', response.data)
      return response.data;
    },
    path: "end",
  },
  end: {
    message: (params: Params) => {
      log('end params', params)
      return `I see you are ${params.userInput}!`;
    },
    // chatDisabled: true,
    path: "start",
  },
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [])

  return (
    <>
    {isLoaded && (
      <Suspense fallback={null}>
        <ChatBot flow={flow} />
      </Suspense>
    )}
    </>
  );
}