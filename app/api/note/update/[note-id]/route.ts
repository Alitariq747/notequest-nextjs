import { client } from "@/mongodb";
import { ObjectId } from "mongodb";

import { NextResponse } from "next/server";

export async function PUT(req: Request, res: NextResponse) {
  try {
    const { title, body, id } = await req.json();

    const database = client.db("noteQuest");
    const notes = database.collection("notes");

    const response = await notes.findOneAndUpdate(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          title,
          body,
        },
      }
    );
    if (response) {
      return NextResponse.json({ response });
    } else {
      return NextResponse.error();
    }
  } catch (error) {
    return NextResponse.error();
  }
}
