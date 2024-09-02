"use client";

import axios from "axios";
import { auth, authenticatedHeaderForRequest, formatDecimal, log } from "@/lib/utils";
import { createContext, Dispatch, lazy, SetStateAction, Suspense, useEffect, useState } from "react";
import { Params, Flow, Settings, getDefaultSettings, Styles, getDefaultStyles } from "react-chatbotify"
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Address, parseEther } from "viem";
import { Send } from "@/app/(main)/home/[token]/components/Send";
import { TokenType } from "@/types/tokens";
import { TokenFactory } from "@/services/TokenService";
import { ForcedLightThemeComponent } from "@/providers/ThemeProvider";
import '@/styles/react-chatbotify.css'

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
const defaultStyles = getDefaultStyles();

export const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  setSettings: () => {},
});

export default function ChatBotComponent() {
  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState('')
  const [open, setOpen] = useState(false)

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
    tooltip: {
      mode: 'START',
      text: 'Talk to me 🚀',
    },
    general: {
      showFooter: false,
    }
  });
  // const [styles, setStyles] = useState({
  //   ...defaultStyles,
  //   chatWindowStyle: {
  //     ...defaultStyles.chatWindowStyle,
  //     zIndex: 49,
  //   }
  // })

  const [isLoaded, setIsLoaded] = useState(false);
  const [link, setLink] = useState('');
  const router = useRouter()
  const [transactionInfo, setTransactionInfo] = useState<any>({})
  
  useEffect(() => {
    setIsLoaded(true);
  }, [])

  const initSendProps = async (tokenType: TokenType) => {
    // address
    const { address } = auth.all()
    setAddress(address)

    // balance
    const tokenInstance = TokenFactory.getInstance().createToken(tokenType)
    let b = await tokenInstance.getBalance(address)
    b = formatDecimal(b)
    setBalance(b)
  }

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

    // let toAddress = ''
    // const { data: { success, address } } = await axios.get(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/address/`, {
    //   params: { email: to }
    // })
    // if (success) {
    //   toAddress = address
    // }

    // const link = `/home/transfer-confirmation?token=${coin}&amount=${parseEther(amount)}&toEmail=${to}&toAddress=${toAddress}`
    // setLink(link)

    if (!action) {
      setTransactionInfo({
        action: 'other',
        answer: response.data,
      })
    } else {
      setTransactionInfo({
        action,
        toEmail: to,
        token: coin,
        amount,
      })
      setOpen(true)
      await initSendProps(coin)
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
          return 'Your transfer request has been processed. Click the button below to open the transfer confirmation dialog.';
        } else if (transactionInfo.action === 'other') {
          return transactionInfo.answer
        }
      },
      function: handleQuestion,
      component: (params) => {
        if (transactionInfo.action === 'transfer') {
          log('haha', open, address, balance, transactionInfo.token, transactionInfo.toEmail, transactionInfo.amount)
          return (
            <div className="pl-4 pt-2">
              {/* <Link 
                href={link}
                className="inline-block px-2 py-1 mt-4 text-blue-600 font-medium text-sm transition duration-300 ease-in-out hover:text-blue-800 hover:underline  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
              >
                Click here to confirm the transfer
              </Link> */}
              {
                (open && address && balance && transactionInfo.token && transactionInfo.toEmail && transactionInfo.amount) && (
                  <Send
                    address={address as Address}
                    balance={balance}
                    tokenType={transactionInfo.token}
                    defaultTo={transactionInfo.toEmail}
                    defaultAmount={transactionInfo.amount}
                    defaultNote={''}
                    onClose={() => {
                      setAddress('')
                      setBalance('')
                      setOpen(false)
                    }}
                  />
                )
              }
            </div>
          )
        }
      },
      // chatDisabled: true,
      path: "transfer",
    },
  }

  const styles: Styles = {
    chatWindowStyle: {
      zIndex: 49,
    },
    botBubbleStyle: {
      backgroundColor: '#333',
    },
    headerStyle: {
      backgroundImage: 'linear-gradient(to right, #333, rgb(66, 176, 197))',
    },
    chatButtonStyle: {
      background: '#fff',
    },
    chatIconStyle: {
      backgroundImage: `url('/logo-alone.png')`,
    },
    tooltipStyle: {
      background: 'rgb(66, 176, 197)',
    },
  }

  return (
    <>
    {isLoaded && (
      <Suspense fallback={null}>
          <SettingsContext.Provider value={{settings: settings, setSettings: setSettings}}>
            <ForcedLightThemeComponent>
              <ChatBot settings={settings} flow={flow} styles={styles} />
            </ForcedLightThemeComponent>
          </SettingsContext.Provider>
      </Suspense>
    )}
    </>
  );
}