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

  interface SignUpCardProps {
    setState: (state: SignInFlow) => void;
  }

export const SignUpCard = ({setState}: SignUpCardProps) => {
    return (
        <div>
            <DialogTitle>sign in</DialogTitle>
        </div>
    )
}