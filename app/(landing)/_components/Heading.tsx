"use client"; // this is how you declare a only client side component
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PlayIcon } from "@radix-ui/react-icons";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Heading = () => {
    const { isAuthenticated, isLoading} = useConvexAuth();

    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl">
                The Notion clone no one asked for but is still here, 
                <span className="underline font-bold">Notetaker</span><br/><span className="font-light text-sm sm:text-lg md:text-xl">or Botion for intimates</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl">
                the bad copy of Notion where <br/>
                you can do (almost) whathever Notion can do !
            </h3>
            {isAuthenticated &&  !isLoading && (
                <div className="w-full h-12">
                    <Button asChild>
                        <Link href="/documents">
                            Enter Notetaker
                            <ArrowRightIcon className="h-4 w-4 ml-2"/>
                        </Link>
                    </Button>
                </div>
            )}
            {!isAuthenticated && !isLoading &&(
                <div className="w-full h-12">
                    <SignInButton mode="modal">
                        <Button>
                            Try Notetaker
                            <ArrowRightIcon className="h-4 w-4 ml-2"/>
                        </Button>
                    </SignInButton>
                    <Button className="ml-4" variant="secondary">
                        Watch
                        <PlayIcon className="h-4 w-4 ml-2"/>
                    </Button>
                </div>
            )}
            {isLoading && (
                <div className="flex items-center justify-center w-full h-12">
                    <Spinner size="lg"/>
                </div>
            )}
        </div>
    )
}
