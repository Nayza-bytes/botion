import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import Link from "next/link";

export const Footer = () => {
    return(
        <div className="flex items-center w-full p-6 bg-gray-200 dark:bg-[#050d24] z-50 rounded-md">
            <Logo/>
            <div className="md:ml-auto w-full justify-end flex items-center gap-x-2 text-muted-foreground">
                <Button variant="ghost" size="sm" asChild>
                    <Link href="https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUJcmljayByb2xs" target="_blank">
                        Privacy Policy
                    </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                    <Link href="https://github.com/Nayza-bytes" target="_blank">
                        Nayza's Github
                    </Link>      
                </Button>
            </div>
        </div>
    );
}