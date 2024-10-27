"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { OpenioLogo } from "@/components/openio-logo";
import { Button } from "@/components/ui/button";
import { useAuthModal } from "@/feature/auth/store/use-auth-modal";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";

export const MainNavbar = () => {
  const [_open, setOpen] = useAuthModal();

  const handleOpen = () => {
    setOpen(true);
  };

    return (
      <nav
        className={cn(
          "z-50 bg-background fixed top-0 flex items-center w-full md:h-14 h-12 p-4 border-b",
        )}
      >
        <OpenioLogo />
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
          <Button onClick={handleOpen} className="rounded-lg">
            Login
          </Button>
          <ModeToggle />
        </div>
      </nav>
    );
};
