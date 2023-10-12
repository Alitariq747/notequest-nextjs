"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useNote } from "@/hooks/useNote";
import { Button, Card, CardBody, Input, Spinner } from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NoteId() {
  const showToastMessage = (message: string) => {
    toast(message, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const router = useRouter();
  const params = useParams();
  const noteId = params["note-id"];

  const { data, isLoading, isError } = useNote(noteId);

  const [note, setNote] = useState({ title: "", body: "" });

  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = async (id: string | string[]) => {
    if (!id) {
      console.log("Note Id not found");
      return;
    }

    showToastMessage("Deleting Note In Progress");

    try {
      const response = await fetch(`/api/note/delete/${noteId}`, {
        method: "DELETE",
      });
      if (response.status === 200) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (id: string | string[]) => {
    if (!id) {
      console.log("Note Id not Found");
      return;
    }

    showToastMessage("Updating Your Note");

    try {
      const response = await fetch(`/api/note/update/${noteId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: note.title,
          body: note.body,
          id: id,
        }),
      });
      if (response.status === 200) {
        // alert ;
        router.push("/dashboard");
      } else {
        console.log("Error updating note");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isError) {
    return <p>Error Fetching notes</p>;
  }

  if (isLoading || !data) {
    return (
      <div className="pt-10 justify-center items-center flex flex-col gap-4">
        <div>
          <Card fullWidth={false} className="max-sm:hidden">
            <CardBody>
              <p className="font-montserrat text-lg font-semibold text-gray-400">
                Grabbing Your Desired Note; it wont be long...
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

  return (
    <>
      {isEdit ? (
        <form className="flex items-center justify-center pt-10">
          <div className="flex flex-col items-center font-montserrat">
            <Input
              isClearable
              label="Note-title"
              type="text"
              variant="bordered"
              placeholder="Enter your note title..."
              onClear={() => console.log("input cleared")}
              className="max-w-xs max-sm:w-[50%]"
              value={note.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNote({ ...note, title: e.target.value })
              }
            />

            <br />

            <textarea
              value={note.body}
              rows={20}
              cols={70}
              className="font-montserrat text-sm m-3 border-2 border-gray-300 rounded-xl hover:border-gray-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-950 text-slate-900 p-2 max-sm:w-[70%]"
              placeholder="Enter your note here..."
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setNote({ ...note, body: e.target.value })
              }
            ></textarea>

            <br />
            <div className="flex flex-row items-center justify-between gap-3">
              <Button
                color="secondary"
                type="button"
                onClick={() => handleUpdate(noteId)}
              >
                Done
              </Button>
              <Button
                color="secondary"
                type="button"
                onClick={() => setIsEdit(false)}
              >
                Discard
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <div className="items-center p-5 justify-center gap-3 flex flex-col">
          <h2 className="font-montserrat text-gray-300 text-xl font-bold ">
            {data.title}
          </h2>
          <p className="font-montserrat text-gray-300 text-sm font-normal leading-6 text-center">
            {data.body}
          </p>
          <div className="flex flex-row gap-4 items-center justify-between">
            <Button
              color="secondary"
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                setNote({ title: data.title, body: data.body });
                setIsEdit(true);
              }}
            >
              Edit
            </Button>
            <Button color="secondary" onClick={() => handleDelete(noteId)}>
              Delete
            </Button>
            <Button color="secondary" onClick={() => router.push("/dashboard")}>
              Back
            </Button>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default NoteId;
