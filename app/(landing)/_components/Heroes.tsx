import Image from "next/image";

export const Heroes = () => {
    return(
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center flex-col md:flex-row">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[500px] md:w-[500px]">
                    <Image
                        className="object-contain"
                        src="/documents.png"
                        fill
                        alt="documents.png"
                        className="dark:hidden"
                    />
                    <Image
                        className="object-contain"
                        src="/documents-dark.png"
                        fill
                        alt="documents.png"
                        className="hidden dark:block"
                    />
                </div>
                <p className="text-base md:hidden">
                    To be honest, this clone is just to learn Next.js, Responsive design
                    and the Login system with Clerk, so maybe, i'll be able to create a web app
                    without a tutorial !               
                </p>
                <div className="relative w-[400px] h-[400px]">
                    <Image
                        className="object-contain"
                        src="/reading.png"
                        fill
                        alt="documents.png"
                        className="dark:hidden"
                    />
                    <Image
                        className="object-contain"
                        src="/reading-dark.png"
                        fill
                        alt="documents.png"
                        className="hidden dark:block"
                    />
                </div>
            </div>
            <p className="text-base hidden md:block md:w-160">
                    To be honest, this clone is just to learn Next.js, Responsive design
                    and the Login system with Clerk, so maybe, i'll be able to create a web app
                    without a tutorial !               
                </p>
        </div>
    );
}