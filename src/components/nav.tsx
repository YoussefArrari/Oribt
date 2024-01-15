import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Navbar: React.FC = () => {
    return (
        <div className="absolute  w-full flex justify-center h-fit top-0">
            <div className="w-[860px] h-16 bg-[#F7F7F9] flex justify-between m-4 items-center px-6 rounded-full ">
                <div className="font-extrabold text-3xl"> Orbit</div>
                <div className="flex gap-4">
                    {/* <div className="cursor-pointer  text-sm font-semibold px-8 py-2 hover:border-gray-400 border-2 border-transparent rounded-full">
                        SignUp
                    </div>
                    <div className="cursor-pointer text-sm font-semibold text-white bg-slate-950 rounded-full px-8 py-2">
                        Login
    </div>*/}
                    <SignedIn>
                        {/* Mount the UserButton component */}
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        {/* Signed out users get sign in button */}
                        <SignInButton afterSignInUrl="/today" />
                    </SignedOut>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
