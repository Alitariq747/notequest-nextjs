import { client } from "@/mongodb";

import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Invalid Request" });
  }

  try {
    const { title, body, userId } = await req.json();

    const database = client.db("noteQuest");

    const notes = database.collection("notes");

    const data = await notes.insertOne({
      title,
      body,
      userId,
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.error();
  }
}
