import { auth, formatDecimal, handleError, log } from "@/lib/utils";
import { createContext, Dispatch, lazy, SetStateAction, Suspense, useEffect, useState } from "react";
import { Params, Flow, Settings, getDefaultSettings, Styles } from "react-chatbotify"
import ChatBot from 'react-chatbotify'
import { Address } from "viem";
import { GasFeeSymbol, TokenType } from "@/types/tokens";
import { theTokenListingService } from "@/services/TokenListingService";
import '@/styles/react-chatbotify.css'
import api from "@/lib/api";
import { SendButton } from "@/pages/dashboard/token/components/SendButton";
import { SendModal } from "@/pages/dashboard/token/components/SendModal";
import { toast } from "react-toastify";

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
  setSettings: () => { },
});

export default function ChatBotComponent() {
  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState('')
  const [open, setOpen] = useState(false)
  const [displaySendButton, setDisplaySendButton] = useState(false)

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
      title: 'Vastlink Bot',
      avatar: '/imgs/logos/logo.svg',
      closeChatIcon: '/imgs/logos/chatbot_close.svg',
    },
    notification: {
      disabled: true,
    },
    tooltip: {
      mode: 'NEVER',
      text: 'Talk to me 🚀',
    },
    general: {
      showFooter: false,
    },
    chatButton: {
      icon: '/imgs/logos/chatbot.svg',
    },
    chatInput: {
      sendButtonIcon: '/imgs/logos/chatbot_send.svg',
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
  const [transactionInfo, setTransactionInfo] = useState<any>({})

  useEffect(() => {
    setIsLoaded(true);
  }, [])

  const initSendProps = async (tokenType: TokenType) => {
    // address
    const { address } = auth.all()
    setAddress(address)

    // balance
    const tokenInstance = theTokenListingService.getToken(tokenType)
    let b = await tokenInstance.getBalance(address)
    b = formatDecimal(b)
    setBalance(b)
  }

  const handleQuestion = async (params: Params) => {
    log('handleQuestion params', params)
    try {
      const response = await api.post('/ai/chat', {
        question: params.userInput,
      });
      log('handleQuestion response', response)
  
      const {
        action,
        coin,
        amount,
        to,
      } = response.data
  
      if (!action) {
        setTransactionInfo({
          action: 'other',
          answer: response.data,
        })
      } else {
        let tokenType = coin
        if (typeof coin === 'string') {
          const gasFeeSymbol = Object.values(GasFeeSymbol).find(
            symbol => symbol.toUpperCase() === coin
          );
  
          if (gasFeeSymbol) {
            tokenType = theTokenListingService.getNativeTokenTypeByGasSymbol(gasFeeSymbol);
          }
        }
        setTransactionInfo({
          action,
          toEmail: to,
          token: tokenType,
          amount,
        })
        await initSendProps(tokenType)
        setDisplaySendButton(true)
      }
    } catch (error) {
      log('handleQuestion error', error)
      const errorInfo = handleError(error)
      toast.error(errorInfo.message)
    }
  }

  const flow: Flow = {
    start: {
      message: "Welcome! I can help you transfer cryptocurrencies. You can send SepoliaETH, POL, TVWT or VAST to any email address. For example, you can say: 'Send 1 VAST to example@gmail.com'. How can I assist you today?",
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
          log(displaySendButton, address, balance, transactionInfo.token, transactionInfo.toEmail, transactionInfo.amount)
          return (
            <div className="pl-4 pt-2">
              {
                (displaySendButton && address && balance && transactionInfo.token && transactionInfo.toEmail && transactionInfo.amount) && (
                  <SendButton onClick={() => setOpen(true)} />
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
    botBubbleStyle: {
      backgroundColor: '#f6f6f6',
      color: '#000',
    },
    userBubbleStyle: {
      backgroundColor: '#f6f6f6',
      color: '#000',
      textAlign: 'left',
    },
    headerStyle: {
      // backgroundImage: 'linear-gradient(to right, #333, rgb(66, 176, 197))',
      background: '#fff',
    },
    chatButtonStyle: {
      background: '#fff',
      borderRadius: '50%',
      width: '44px',
      height: '44px',
    },
    chatIconStyle: {
      // backgroundImage: `url('/imgs/logos/chatbot.png')`,
      width: '44px',
      height: '44px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
    },
    tooltipStyle: {
      background: 'rgb(66, 176, 197)',
    },
    sendButtonStyle: {
      background: '#fff',
      boxShadow: 'none',
      alignItems: 'center',
    },
    sendButtonHoveredStyle: {
      background: 'rgb(255, 255, 255)',
    },
  }

  return (
    <>
      {isLoaded && (
        <Suspense fallback={null}>
          <div>
            <SettingsContext.Provider value={{ settings: settings, setSettings: setSettings }}>
              <ChatBot id="vastlink-chatbot" settings={settings} flow={flow} styles={styles} />
            </SettingsContext.Provider>

            <SendModal
              open={open}
              setOpen={setOpen}
              balance={balance}
              address={address as Address}
              tokenType={transactionInfo.token}
              defaultTo={transactionInfo.toEmail}
              defaultAmount={transactionInfo.amount}
              defaultNote={''}
              onClose={() => {
                // setAddress('')
                setBalance('')
              }}
            />
          </div>
        </Suspense>
      )}
    </>
  );
}
