import { Navbar } from "./_components/Navbar";

const LandingLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full ">
            <Navbar/>
            <main className="h-full pt-40 dark:text-[#93E8D3]">
                {children}
            </main>
        </div>
    );
}

export default LandingLayout;