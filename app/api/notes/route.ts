import { client } from "@/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

import { getAuth } from "@clerk/nextjs/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json({ error: "UnAuthorized" });
    }

    const database = client.db("noteQuest");

    const notes = database.collection("notes");

    const data = await notes.find({ userId: userId }).toArray();

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.error();
  }
}
