import { Roboto_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { ActivityLogIcon, NotionLogoIcon } from "@radix-ui/react-icons";

const Font = Roboto_Mono({
    subsets:["latin"],
    weight:["400", "600"]
})

export const Logo = () => {
    return(
        <div className="flex items-center gap-x-2">
            <NotionLogoIcon className="h-[40px] w-[40px]"/>
            <p className={cn("font-semibold", Font.className)}>
                Notetaker
            </p>
        </div>
    );
}