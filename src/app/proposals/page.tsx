"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useRef, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Loader2Icon, RefreshCcwIcon } from "lucide-react";
import { ProposalsList, ProposalStatus } from "./ProposalList";

export default function ProposalsPage() {
  const childRef = useRef<{ refresh: () => Promise<void> } | null>(null);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const [activeTab, setActiveTab] = useState<ProposalStatus>("pending");

  const tabs = [
    { id: "pending" as ProposalStatus, label: "Pending" },
    { id: "completed" as ProposalStatus, label: "Completed" },
    { id: "canceled" as ProposalStatus, label: "Cancelled" },
  ];

  const handleRefresh = useCallback(() => {
    if (childRef.current) {
      setIsRefreshing(true);
      childRef.current.refresh()
        .finally(() => {
          setIsRefreshing(false);
        });
    }
  }, [childRef]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Proposals</h1>
      
      {/* Tab Navigation */}
      <div className="flex flex-row justify-start items-center gap-2 mb-6">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'w-[110px] h-[36px] px-4 py-2.5 rounded-full font-medium transition-colors cursor-pointer',
              'flex justify-center items-center',
              activeTab === tab.id ? 'bg-black text-white' : 'text-black',
            )}
          >
            {tab.label}
          </div>
        ))}
        <div className="flex-1" />
        <Button variant="ghost" size="icon" onClick={handleRefresh}>
          {isRefreshing ? (
            <Loader2Icon className="w-4 h-4 animate-spin" />
          ) : (
            <RefreshCcwIcon className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Tab Content */}
      <div>
        <Suspense fallback={null}>
          <ProposalsList status={activeTab} ref={childRef} />
        </Suspense>
      </div>
    </div>
  );
}
