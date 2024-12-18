import { Modal } from "@/components/Modal";
import { Button } from "@/components/ui/button";

export function ExitPromptModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (isQuit: boolean) => void;
}) {
  const footer = <div className="flex justify-end gap-4">
    <Button className="" variant={'outline'} onClick={() => onClose(true)}>Quit</Button>
    <Button className="" onClick={() => onClose(false)}>Stay</Button>
  </div>

  return <Modal
    isOpen={isOpen}
    onClose={() => onClose(false)}
    title="Are you sure you want to quit?"
    footer={footer}
  >
    <p className="text-sm leading-none my-3">Your progress may not be saved.</p>
  </Modal>
}
