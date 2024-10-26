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

  interface SignInCardProps {
    setState: (state: SignInFlow) => void;
  }

export const SignInCard = ({setState}: SignInCardProps) => {
    return (
        <div>
            <DialogTitle>sign in</DialogTitle>
        </div>
    )
}