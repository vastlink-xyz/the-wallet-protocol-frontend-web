import { Skeleton } from "@/components/ui/skeleton"

export function WalletCardSkeleton() {
  return (
    <div className="p-4 w-[343px] rounded-[12px] bg-[#f5f5f5]">
      {/* Header - Settings icon */}
      <div className="flex items-center justify-end">
        <Skeleton className="h-5 w-5 bg-gray-300" />
      </div>

      {/* Content area - matches h-[150px] from real card */}
      <div className="h-[150px] flex flex-col justify-center space-y-6">
        <Skeleton className="h-5 w-32 mx-auto bg-gray-300" />
        <Skeleton className="h-8 w-24 mx-auto bg-gray-300" />
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-[40px]">
        <Skeleton className="h-14 w-14 rounded-full bg-gray-300" />
        <Skeleton className="h-14 w-14 rounded-full bg-gray-300" />
      </div>

      {/* Footer - More button */}
      <div className="flex justify-end mt-4">
        <Skeleton className="h-6 w-6 bg-gray-300" />
      </div>
    </div>
  )
}