import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { SignInFlow } from "../types/sign-in-flow-type";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";
import { useAuthModal } from "../store/use-auth-modal";

export const AuthModal = () => {
  const [state, setState] = useState<SignInFlow>("signIn");
  const [ open, setOpen ] = useAuthModal();

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        {state === "signIn" ? <SignInCard setState={setState}/> : <SignUpCard setState={setState}/>}
      </DialogContent>
    </Dialog>
  );
};
