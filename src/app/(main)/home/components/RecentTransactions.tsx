// 'use client'

import { useState, useEffect } from "react"
import { storageAddress } from "@/lib/utils"
import { Coins, Settings, MoveUpRight, MoveDownLeft, ArrowLeftRight, ArrowUpRight, ChevronDown, Book } from "lucide-react"
import { Button } from "@/components/ui/button";

export function RecentTransactions() {
  return(
    <div className="border rounded-md px-4">
      <div className="flex justify-between items-center mt-4 mb-4">
        <span>Recent transactions</span>
        <span className="text-gray-400 text-sm cursor-pointer">See all</span>
      </div>

      <div className="border-t flex items-center justify-between py-4">
        <div className="border border-gray-400 rounded-full w-[32px] h-[32px] flex items-center justify-center">
          <MoveUpRight size={14} />
        </div>
        <div className="ml-2 w-[160px]">
          <p className="flex items-center">
            Send Funds
            <ChevronDown />
          </p>
          <p className="text-gray-500 text-xs">23/09/2023, 11:48</p>
        </div>
        <div className="rounded-full flex items-center bg-secondary px-2">
          <span>-</span>
          <Coins size={14} />
          <span className="ml-2 text-xs">2,132.430000</span>
        </div>
      </div>

      <div className="border-t flex items-center justify-between py-4">
        <div className="border border-gray-400 rounded-full w-[32px] h-[32px] flex items-center justify-center">
          <MoveUpRight size={14} />
        </div>
        <div className="ml-2 w-[160px]">
          <p className="flex items-center">
            Send Funds
            <ChevronDown />
          </p>
          <p className="text-gray-500 text-xs">23/09/2023, 11:48</p>
        </div>
        <div className="rounded-full flex items-center bg-secondary px-2">
          <span>-</span>
          <Coins size={14} />
          <span className="ml-2 text-xs">2,132.430000</span>
        </div>
      </div>

      <div className="border-t flex items-center justify-between py-4">
        <div className="bg-warm-flame rounded-full w-[32px] h-[32px] flex items-center justify-center mr-2">
          <MoveDownLeft size={14} color="#fff" />
        </div>
        <div className="ml-2 w-[160px]">
          <p className="flex items-center">
            Received Funds
            <ChevronDown />
          </p>
          <p className="text-gray-500 text-xs">23/09/2023, 11:48</p>
        </div>
        <div className="rounded-full flex items-center bg-warm px-2">
          <span className="text-warm-foreground">+</span>
          <Coins size={14} color="#dd687a" />
          <span className="ml-2 text-xs text-warm-foreground">2,132.430000</span>
        </div>
      </div>

      <div className="border-t flex items-center justify-between py-4">
        <div className="border border-gray-400 rounded-full w-[32px] h-[32px] flex items-center justify-center">
          <MoveUpRight size={14} />
        </div>
        <div className="ml-2 w-[160px]">
          <p className="flex items-center">
            Send Funds
            <ChevronDown />
          </p>
          <p className="text-gray-500 text-xs">23/09/2023, 11:48</p>
        </div>
        <div className="rounded-full flex items-center bg-secondary px-2">
          <span>-</span>
          <Coins size={14} />
          <span className="ml-2 text-xs">2,132.430000</span>
        </div>
      </div>

      <div className="border-t text-center p-4">
        <Button variant={"ghost"} className="border rounded-full w-full">
          <Book />
          <span>Address book</span>
        </Button>
      </div>
    </div>
  );
}

