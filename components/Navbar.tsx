import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 gap-4 h-16 bg-gray-100 shadow-md dark:bg-gray-800 dark:text-white">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">RemindMe</div>
        <div className="flex gap-4">
            <ThemeSwitcher />
            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    </nav>
  );
};

export default Navbar;
