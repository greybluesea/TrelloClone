import fetchBoard from "@/lib/unused/fetchBoard";
import { NextRequest, NextResponse } from "next/server";
import { databases, storage } from "../../../../appwrite";

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

  try {
    await databases.updateDocument(
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
    return NextResponse.json(
      { message: "task updated", task },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
  /*  return NextResponse.json(task); */
}

export async function DELETE(request: Request) {
  const task: Partial<Task> = await request.json();

  if (!task || !task.$id)
    return NextResponse.json({ message: "$id is required" });

  try {
    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_TRELLO_CLONE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TASKS_COLLECTION_ID!,
      task.$id
    );
    if (task.image) {
      await storage.deleteFile(task.image.bucketId, task.image.fileId);
    }
    return NextResponse.json(
      { message: "task deleted", task },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
  /*  return NextResponse.json(task); */
}
