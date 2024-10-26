import { ModeToggle } from "@/components/mode-toggle"

export const MainNavbar = () => {
    return (
        <nav className="z-50 bg-background fixed top-0 flex items-center w-full h-14 p-3 border-b">
            <ModeToggle />
        </nav>
    )
}