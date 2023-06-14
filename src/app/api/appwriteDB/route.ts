import fetchBoard from "@/lib/unused/fetchBoard";
import { NextResponse } from "next/server";
import { databases } from "../../../../appwrite";

export async function GET() {
  const data = await databases.listDocuments(
    process.env.TRELLO_CLONE_DATABASE_ID!,
    process.env.TASKS_COLLECTION_ID!
  );

  const tasks = data.documents;

  return NextResponse.json(tasks);
}

export async function PUT(request: Request) {
  const task: Task = await request.json();
  await databases.updateDocument(
    process.env.TRELLO_CLONE_DATABASE_ID!,
    process.env.TASKS_COLLECTION_ID!,
    task.$id,
    {
      title: task.title,
      status: task.status,
      ...(task.image && { image: task.image }),
    }
  );
}
