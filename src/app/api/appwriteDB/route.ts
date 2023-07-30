import fetchBoard from "@/lib/unused/fetchBoard";
import { NextRequest, NextResponse } from "next/server";
import { databases, storage } from "../../../../appwrite";

export async function GET() {
  const data = await databases.listDocuments(
    process.env.TRELLO_CLONE_DATABASE_ID!,
    process.env.TASKS_COLLECTION_ID!
  );

  const tasks = data.documents;
  /* console.log(tasks); */

  return NextResponse.json(tasks);
}

export async function PUT(request: Request) {
  const task: Partial<Task> = await request.json();

  if (!task || !task.$id)
    return NextResponse.json({ message: "$id is required" });

  try {
    await databases.updateDocument(
      process.env.TRELLO_CLONE_DATABASE_ID!,
      process.env.TASKS_COLLECTION_ID!,
      task.$id,
      task
    );
    return NextResponse.json(
      { message: "task updated", task },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
  /*  return NextResponse.json(task); */
}
