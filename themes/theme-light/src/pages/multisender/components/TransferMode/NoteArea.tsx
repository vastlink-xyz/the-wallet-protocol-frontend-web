import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Transfer } from "./useMultisender";

export function NoteArea({
  index,
  transfer,
  handleNoteChange,
}: {
  index: number
  transfer: Transfer
  handleNoteChange: (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => void
}) {
  return <Textarea
    rows={1}
    value={transfer.note}
    onChange={(e) => handleNoteChange(e, index)}
    className={cn(
    "min-h-[40px] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border focus-visible:border-black placeholder:text-black/25",
    "desktop:w-[308px] laptop:w-[299px] tablet:w-[658px] w-[322px]",
  )}
  placeholder="Write a note to the recipient"
/>
}
