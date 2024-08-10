'use client'

import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCards({
  cardNumber = 5,
}: {
  cardNumber?: number;
}) {
  return (
    <div className="grid grid-flow-row gap-8 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
      {Array(cardNumber).fill(0).map((_, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-sm">
          <Skeleton className="h-72 w-full mb-4" />
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-1/2 mb-4" />
          <Skeleton className="h-6 w-3/4 mb-4" />
          <div className="flex justify-between items-center space-x-2">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      ))}
    </div>
  )
}
