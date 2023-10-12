"use client";

import Link from "next/link";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center justify-center gap-8 pt-20 p-10">
      <h1 className="font-montserrat font-bold text-gray-300 text-7xl text-center max-sm:text-5xl">
        Jot down
        <br />
        your thoughts
        <br /> as they come to <br />
        you!
      </h1>

      <p className="text-center font-montserrat font-light text-gray-300">
        Are you tired of scattered notes, lost ideas, and missed opportunities?
        <br />
        Look no further! NOTEQUEST is here to simplify your life
        {/* <br /> and enhance your productivity. */}
      </p>
      <Button radius="full" color="secondary">
        {user ? (
          <Link href="/dashboard">Dashboard</Link>
        ) : (
          <Link href="/sign-up">Try for free</Link>
        )}
      </Button>
    </div>
  );
}
