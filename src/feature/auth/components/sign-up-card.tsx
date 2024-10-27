import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { SignInFlow } from "../types/sign-in-flow-type";
import { useState } from "react";
import { TriangleAlert } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  return (
    <>
      <DialogHeader>
        <DialogTitle>Sign up to continue</DialogTitle>
        <DialogDescription>
          Use your email or another service to continue
        </DialogDescription>
      </DialogHeader>
      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-y-2 gap-x-2 text-sm text-destructive mb-6">
          <TriangleAlert className="size-4" />
          <p>{error}</p>
        </div>
      )}
      <form className="flex flex-col gap-4">
        <Input
          disabled={pending}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          required
        />
        <Input
          disabled={pending}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          required
        />
        <Input
          disabled={pending}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          required
        />
        <Input
          disabled={pending}
          value={comfirmPassword}
          onChange={(e) => setComfirmPassword(e.target.value)}
          placeholder="Comfirm password"
          type="password"
          required
        />
        <Button type="submit" className="w-full" size="lg" disabled={pending}>
          Continue
        </Button>
      </form>
      <Separator />
      <div className="flex flex-col gap-4">
        <Button
          disabled={pending}
          onClick={() => {}}
          variant={"outline"}
          size={"lg"}
          className="relative"
        >
          <FcGoogle className="size-5" />
          Continue with Google
        </Button>
        <Button
          disabled={pending}
          onClick={() => {}}
          variant={"outline"}
          size={"lg"}
          className="w-full relative"
        >
          <FaGithub className="size-5" />
          Continue with Github
        </Button>
      </div>
      <Separator />
      <div className="text-center items-center flex flex-col gap-2">
        <p className="text-xs text-muted-foreground">
          Already have an account?
        </p>
        <Button
          onClick={() => setState("signIn")}
          className="w-full text-sky-700 cursor-pointer ml-1"
          variant={"ghost"}
          size={"sm"}
        >
          Sign in
        </Button>
      </div>
    </>
  );
};
