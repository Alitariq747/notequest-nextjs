import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

const ProtectedNavbar = () => {
  return (
    <nav className="p-6">
      <div className="container flex items-center justify-between max-md:flex-col max-md:gap-3">
        {/* Logo */}
        <div className="text-white text-3xl font-extrabold">
          <Link href="/">NoteQuest</Link>
        </div>

        {/* Search Bar */}
        {/* <div className="flex-grow mx-8 text-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-[600px] max-md:w-[350px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-950"
          />
        </div> */}
        <div className="space-x-4 md:space-x-8 flex flex-row gap-1">
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/" className="text-white hover:text-gray-300 ">
            Home
          </Link>

          <UserButton afterSignOutUrl="/" />
        </div>

        {/* User Button */}
      </div>
    </nav>
  );
};

export default ProtectedNavbar;
