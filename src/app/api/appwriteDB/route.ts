import fetchBoard from "@/lib/fetchBoard";
import { NextResponse } from "next/server";
import { databases } from "../../../../appwrite";

export async function GET() {
  const data = await databases.listDocuments(
    process.env.TRELLO_CLONE_DATABASE_ID!,
    process.env.TASKS_COLLECTION_ID!
  );

  const tasks = data.documents;

  return NextResponse.json(tasks);
  /* return new Response("hello"); */
}
