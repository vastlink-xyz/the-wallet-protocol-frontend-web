"use client";

import axios from "axios";
import { authenticatedHeaderForRequest, log } from "@/lib/utils";
import { createContext, Dispatch, lazy, SetStateAction, Suspense, useEffect, useState } from "react";
import { Params, Flow, Settings, getDefaultSettings } from "react-chatbotify"
import { useRouter } from "next/navigation";
import Link from "next/link";

const ChatBot = lazy(() => import("react-chatbotify"));

// Mock async API function
const mockAsyncApi = (delay: number = 1000): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Mock API response");
    }, delay);
  });
};

interface SettingsContextType {
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
}

const defaultSettings = getDefaultSettings();

export const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  setSettings: () => {},
});

export default function ChatBotComponent() {
  const [settings, setSettings] = useState<Settings>({
    ...defaultSettings,
    voice: {
      disabled: true,
    },
    fileAttachment: {
      disabled: true,
    },
    emoji: {
      disabled: true,
    },
    chatHistory: {
      disabled: true,
    },
    header: {
      title: 'Chat bot',
    },
    notification: {
      disabled: true,
    },
    general: {
      showFooter: false,
    }
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [link, setLink] = useState('');
  const router = useRouter()
  const [transactionInfo, setTransactionInfo] = useState<any>({})
  
  useEffect(() => {
    setIsLoaded(true);
  }, [])

  const handleQuestion = async (params: Params) => {
    log('handleQuestion params', params)
    const response = await axios.post(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/ai/chat`, {
      question: params.userInput,
    }, {
      headers: authenticatedHeaderForRequest(),
    });

    const {
      action,
      coin,
      amount,
      to,
    } = response.data

    let toAddress = ''
    const { data: { success, address } } = await axios.get(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/address/`, {
      params: { email: to }
    })
    if (success) {
      toAddress = address
    }

    const link = `/home/transfer-confirmation?token=${coin}&amount=${amount}&toEmail=${to}&toAddress=${toAddress}`
    setLink(link)

    if (!action) {
      setTransactionInfo({
        action: 'other',
        answer: response.data,
      })
    } else {
      setTransactionInfo({
        action,
        toAddress,
        toEmail: to,
        token: coin,
        amount,
      })
    }
  }
  
  const flow: Flow = {
    start: {
      message: "Welcome! I can help you transfer cryptocurrencies. You can send ETH, MATIC, or TVWT to any email address. For example, you can say: 'Send 0.01 ETH to example@gmail.com'. How can I assist you today?",
      function: handleQuestion,
      path: "transfer",
    },
    transfer: {
      message: (params: Params) => {
        log('end', transactionInfo)
        if (transactionInfo.action === 'transfer') {
          return 'Your transfer request has been processed. Please confirm the details below.';
        } else if (transactionInfo.action === 'other') {
          return transactionInfo.answer
        }
      },
      function: handleQuestion,
      component: (params) => {
        if (transactionInfo.action === 'transfer') {
          return (
            <div className="pl-4">
              <Link 
                href={link}
                className="inline-block px-2 py-1 mt-4 text-blue-600 font-medium text-sm transition duration-300 ease-in-out hover:text-blue-800 hover:underline  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
              >
                Click here to confirm the transfer
              </Link>
            </div>
          )
        }
      },
      // chatDisabled: true,
      path: "transfer",
    },
  }

  return (
    <>
    {isLoaded && (
      <Suspense fallback={null}>
        <SettingsContext.Provider value={{settings: settings, setSettings: setSettings}}>
          <ChatBot settings={settings} flow={flow}/>
        </SettingsContext.Provider>
      </Suspense>
    )}
    </>
  );
}