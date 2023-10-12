"use client";

import React, { useRef } from "react";
import { useAuth } from "@clerk/nextjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Input,
  Textarea,
  Button,
  InputProps,
  TextAreaProps,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

function NewNote() {
  const showToastMessage = (message: string) => {
    toast(message, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const titleRef = useRef<InputProps>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const router = useRouter();

  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const title = titleRef.current?.value;
    const body = bodyRef.current?.value;

    showToastMessage("Saving Note in Progress..");

    try {
      const response = await fetch("/api/new-note", {
        method: "POST",
        body: JSON.stringify({
          title,
          body,
          userId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        router.push("/dashboard");
      } else {
        console.log("Error adding note");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex items-center justify-center pt-10 pb-5">
      <div className="flex flex-col items-center font-montserrat">
        <Input
          isClearable
          label="Note-title"
          type="text"
          variant="bordered"
          placeholder="Enter your note title..."
          onClear={() => console.log("input cleared")}
          className="max-w-xs max-sm:w-[50%]"
          ref={titleRef}
        />

        <br />

        <textarea
          ref={bodyRef}
          rows={20}
          cols={70}
          className="font-montserrat text-sm m-3 border-2 border-gray-300 rounded-xl hover:border-gray-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-950 text-slate-900 p-2 max-sm:w-[70%]"
          placeholder="Enter your note here..."
        ></textarea>

        <br />
        <div className="flex flex-row items-center justify-between gap-3">
          <Button color="secondary" onClick={handleSubmit} type="submit">
            Save
          </Button>
          <Button
            color="secondary"
            onClick={() => router.push("/dashboard")}
            type="button"
          >
            Back
          </Button>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
}

export default NewNote;
