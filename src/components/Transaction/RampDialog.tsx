'use client';

import React, { useCallback, useState } from "react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { ArrowLeftRightIcon, Loader2Icon, ShoppingCartIcon } from "lucide-react";

import { loadMoonPay } from '@moonpay/moonpay-js';
import { useLocale, useTranslations } from "next-intl";

interface RampDialog {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  btcAddress: string
  ethAddress: string
}

async function showMoonPay(flow: "buy" | "sell", btcAddress: string, ethAddress: string, locale?: string) {
  const moonPay = await loadMoonPay();

  const widget = moonPay?.({
    flow,
    environment: process.env.NEXT_PUBLIC_ENV === "production" ? "production" : "sandbox",
    params: {
      apiKey: process.env.NEXT_PUBLIC_MOONPAY_API_KEY!,
      walletAddresses: JSON.stringify({
        btc: btcAddress,
        eth: ethAddress,
      }),
      language: locale,
    },
    variant: "overlay",
    handlers: {
      async onInitiateDeposit(props) {
        const prefix = process.env.NEXT_PUBLIC_ENV !== "production" ? "test" : "";
        return {
          depositId: `${prefix}_${props.depositWalletAddress}_${props.transactionId}`,
          cancelTransactionOnError: false,
        };
      },
      async onTransactionCompleted(props) {
        console.log("onTransactionCompleted", props);
      },
    },
  });

  widget?.show();
}

export function RampDialog({ open, onOpenChange, btcAddress, ethAddress }: RampDialog) {
  const locale = useLocale();
  
  const t = useTranslations("MoonPay");

  const [isBuyPending, setIsBuyPending] = useState(false);
  const [isSellPending, setIsSellPending] = useState(false);

  const handleOpenChange = useCallback((open: boolean) => {
    if (onOpenChange) {
      if (open) {
        onOpenChange(open)
        return;
      }

      setTimeout(() => {
        onOpenChange(open)
      }, 500)
    }
  }, [ onOpenChange ]);

  const handleBuyClcik = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    try {
      setIsBuyPending(true);
      await showMoonPay("buy", btcAddress, ethAddress, locale)

      setIsBuyPending(false);
      onOpenChange?.(false);
    } catch {
      setIsBuyPending(false);
    }
  }

  const handleSellClcik = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    try {
      setIsSellPending(true);
      await showMoonPay("sell", btcAddress, ethAddress, locale)

      setIsSellPending(false);
      onOpenChange?.(false);
    } catch {
      setIsSellPending(false);
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {t("title")}
            </DialogTitle>
          </DialogHeader>
          <div className="w-full h-32 p-8 flex flex-row justify-between items-center">
            <Button
              className="rounded-full"
              variant="default"
              size="lg"
              onClick={handleBuyClcik}
              disabled={isBuyPending || isSellPending}
            >
              {isBuyPending
                ? <Loader2Icon className="animate-spin" />
                : <ShoppingCartIcon />}
              {t("buy_button")}
            </Button>

            <Button
              className="rounded-full"
              variant="default"
              size="lg"
              onClick={handleSellClcik}
              disabled={isBuyPending || isSellPending}
            >
              {isSellPending
                ? <Loader2Icon className="animate-spin" />
                : <ArrowLeftRightIcon />}
              {t("sell_button")}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* {showBuyWidget && <MoonPayBuyWidget
        variant="overlay"
        baseCurrencyCode="usd"
        baseCurrencyAmount="100"
        defaultCurrencyCode="eth"
        visible={showBuyWidget}
        onClose={async () => { setShowBuyWidget(false) }}
      />}

      {showSellWidget && <MoonPaySellWidget
        variant="overlay"
        baseCurrencyCode="usd"
        baseCurrencyAmount="100"
        defaultCurrencyCode="eth"
        visible={showSellWidget}
        onClose={async () => { setShowSellWidget(false) }}
      />} */}
    </>
  )
}