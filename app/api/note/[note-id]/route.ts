import { NextResponse, NextRequest } from "next/server";
import { client } from "@/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const path = req.nextUrl.pathname;

    const id = path.slice(10);

    const database = client.db("noteQuest");
    const notes = database.collection("notes");

    const requiredNote = await notes.findOne({
      _id: new ObjectId(id),
    });

    return NextResponse.json(requiredNote);
  } catch (error) {
    return NextResponse.error();
  }
}
