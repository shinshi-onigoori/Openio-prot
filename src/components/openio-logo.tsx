//Hooks and Client Packages.
import Image from "next/image"
import { Nunito, Roboto, Rubik } from "next/font/google"

//util and Server Package.
import { cn } from "@/lib/utils"

const font = Nunito({
    weight: ['800'],
    subsets: ["latin-ext"],
})

export const OpenioLogo = () => {
    return(
        <div className="hidden md:flex items-center gap-x-4 mr-14">
            <Image src={"/openio-logo-light.svg"} alt={"Logo"} height={30} width={30} className="dark:hidden"/>
            <Image src={"/openio-logo.svg"} alt={"Logo"} height={30} width={30} className="hidden dark:block"/>
            <div className={cn("font-extrabold text-xl text-black dark:text-white", font.className,)}>
                {/* Openio. */}
            </div>
        </div>
    )
} 