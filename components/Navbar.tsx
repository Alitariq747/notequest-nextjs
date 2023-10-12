"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
const Navbar = () => {
  const pathname = usePathname();

  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <div className="text-white text-3xl font-extrabold max-sm:text-xl max-sm:font-bold ">
          <Link href="/">NoteQuest</Link>
        </div>

        <div className="gap-3 flex flex-row items-center">
          {pathname === "/" ? (
            <Link
              href="/about"
              className="text-white hover:text-gray-300 font-montserrat text-base font-bold max-sm:font-normal"
            >
              About
            </Link>
          ) : (
            <Link
              href="/"
              className="text-white hover:text-gray-300 font-montserrat text-base font-bold max-sm:font-normal"
            >
              Home
            </Link>
          )}
          {user ? (
            <div className="flex flex-row gap-4 items-center justify-between">
              <Link
                href="/dashboard"
                className="text-white hover:text-gray-300 font-montserrat text-base font-bold max-sm:font-normal"
              >
                Dashboard
              </Link>

              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="flex flex-row gap-3 items-center justify-between">
              <Link
                href="/sign-up"
                className="text-white hover:text-gray-300 font-montserrat text-base font-bold max-sm:font-normal"
              >
                Register
              </Link>
              <Link
                href="/sign-in"
                className="text-white hover:text-gray-300 font-montserrat text-base font-bold max-sm:font-normal"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
