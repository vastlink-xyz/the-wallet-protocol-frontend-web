import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { Transfer } from "../page";

export function DeleteIcon({
  index,
  handleDeleteTransfer,
}: {
  index: number
  handleDeleteTransfer: (index: number) => void
}) {
  return (
    <Trash2
      className="w-[20px] h-[20px] text-[#979797] cursor-pointer"
      onClick={() => handleDeleteTransfer(index)}
    />
  )
}
