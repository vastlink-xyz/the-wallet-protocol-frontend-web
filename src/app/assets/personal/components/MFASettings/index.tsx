import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MFASettingsContent } from './MFASettingsContent';

export function MFASettings() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Manage MFA Settings</Button>
      </DialogTrigger>


      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>MFA Settings</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>

        <MFASettingsContent isOpen={isOpen} />

        <DialogFooter className="sm:justify-start pt-4">
          <DialogClose asChild>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
