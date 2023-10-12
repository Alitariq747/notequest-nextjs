import { NextResponse, NextRequest } from "next/server";
import { client } from "@/mongodb";
import { ObjectId } from "mongodb";

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    const path = req.nextUrl.pathname;

    const id = path.slice(17);

    const database = client.db("noteQuest");
    const notes = database.collection("notes");

    const data = await notes.findOneAndDelete({
      _id: new ObjectId(id),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}
