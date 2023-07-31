import { NextResponse } from "next/server";
import { databases, storage } from "../../../../../appwrite";

export async function POST(request: Request) {
  const task: Partial<Task> = await request.json();

  if (!task || !task.$id)
    return NextResponse.json({ message: "$id is required" });

  try {
    if (task.imageBucketId && task.imageFileId) {
      await storage.deleteFile(task.imageBucketId, task.imageFileId);
    }

    await databases.deleteDocument(
      process.env.TRELLO_CLONE_DATABASE_ID!,
      process.env.TASKS_COLLECTION_ID!,
      task.$id
    );

    return NextResponse.json(
      { message: "task deleted", task },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
}
