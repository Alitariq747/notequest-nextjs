import { type } from "os";

export interface Note {
  _id: string;
  userId: string;
  title: string;
  body: string;
}

export type NoteListType = Note[];
