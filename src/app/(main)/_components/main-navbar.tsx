import { ModeToggle } from "@/components/mode-toggle";
import { OpenioLogo } from "@/components/openio-logo";
import { Button } from "@/components/ui/button";

export const MainNavbar = () => {
  return (
    <nav className="z-50 bg-background fixed top-0 flex items-center w-full h-14 p-4 border-b">
      <OpenioLogo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <Button className="rounded-lg">
            Login
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};
