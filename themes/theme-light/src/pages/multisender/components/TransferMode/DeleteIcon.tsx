import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
export function DeleteIcon({
  index,
  handleDeleteTransfer,
  sending,
}: {
  index: number
  handleDeleteTransfer: (index: number) => void
  sending: boolean;
}) {
  return (
    <Trash2
      className={cn(
        "w-[20px] h-[20px] text-[#979797] cursor-pointer",
        sending && "hidden"
      )}
      onClick={() => handleDeleteTransfer(index)}
    />
  )
}
