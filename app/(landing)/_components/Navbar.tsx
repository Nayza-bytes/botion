"use client";
import Link from "next/link";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";

export const Navbar = () => {
    const { isAuthenticated, isLoading} = useConvexAuth();
    const scrolled = useScrollTop();

    return(
        <div className={cn(
            "z-50 bg-background fixed top-0 flex items-center w-full p-6",
            scrolled && "border-b shadow-lg"
        )}>
            <Logo/>
            <div className="md:ml-auto justify-end w-full flex items-center gap-x-2">
                {isLoading && (
                    <Spinner />
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button variant="secondary" size="sm">
                                Log in
                            </Button>
                        </SignInButton>
                        <SignInButton mode="modal">
                            <Button size="sm">
                                Sign up for free
                            </Button>
                        </SignInButton>
                    </>
                )}
                {isAuthenticated && !isLoading && (
                    <>
                        <Button variant="secondary" size="sm" asChild>
                            <Link href="/documents">
                                Enter Notetaker
                            </Link>
                        </Button>
                        <UserButton 
                            afterSignOutUrl="/"
                        />
                    </>
                )}
                <ModeToggle/>
            </div>
        </div>
    );
}