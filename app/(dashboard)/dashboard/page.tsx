"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";

import { useNotes } from "@/hooks/useNotes";

import { NoteListType } from "@/typings";
import NoteList from "@/components/NoteList";
import { Button, Card, CardBody, Skeleton, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";

function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  const { notes = [], isLoading, isError } = useNotes();

  const betterNotes: NoteListType = notes.data;

  const router = useRouter();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  if (isLoading || !betterNotes) {
    return (
      <div className="pt-10 justify-center items-center flex flex-col gap-4">
        <div className=" max-sm:w-[50%]">
          <Card fullWidth={false} className="max-sm:hidden">
            <CardBody>
              <p className="font-montserrat text-lg font-semibold text-gray-400">
                Grabbing Your Notes; it wont be long...
              </p>
            </CardBody>
          </Card>
        </div>
        <div>
          <Spinner color="secondary" />
        </div>
      </div>
    );
  }

  if (isError) {
    return <p>Error fetching Notes</p>;
  }

  return (
    <div className="pt-3 pr-5 pl-5 pb-3">
      <div className="ml-5 pt-4 pb-3 font-montserrat text-start font-bold text-xl text-gray-300 flex justify-between items-center pr-10 max-md:font-normal max-md:text-base max-md:flex max-md:flex-col max-md:gap-3">
        {user?.username ? (
          <h1>Hello {user?.username} welcome to NoteQuest</h1>
        ) : (
          <h1>Hello, {user?.emailAddresses[0].emailAddress}! </h1>
        )}

        <Button
          color="secondary"
          onClick={() => router.push("/dashboard/new-note")}
        >
          Create New
        </Button>
      </div>
      {betterNotes.length === 0 ? (
        <div className="pt-10 justify-center items-center flex flex-row">
          <Card fullWidth={false}>
            <CardBody>
              <p className="font-montserrat text-lg font-semibold text-gray-400">
                Oops! You dont have any notes. Click Create New to dd one.
              </p>
            </CardBody>
          </Card>
        </div>
      ) : (
        <NoteList list={betterNotes} />
      )}
    </div>
  );
}

export default DashboardPage;
