import fetchBoard from "@/lib/unused/fetchBoard";
import { NextRequest, NextResponse } from "next/server";
import { databases } from "../../../../appwrite";

export async function GET() {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_TRELLO_CLONE_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TASKS_COLLECTION_ID!
  );

  const tasks = data.documents;
  /* console.log(tasks); */

  return NextResponse.json(tasks);
}

export async function PUT(request: Request) {
  const task: Partial<Task> = await request.json();

  if (!task || !task.$id)
    return NextResponse.json({ message: "$id is required" });

  const res = await databases.updateDocument(
    process.env.NEXT_PUBLIC_TRELLO_CLONE_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TASKS_COLLECTION_ID!,
    task.$id,
    task
    /* {
      title: task.title,
      status: task.status,
      ...(task.image && { image: task.image }),
    } */
  );
  /*  return NextResponse.json(task); */

  console.log(res);
}
