import { NextRequest, NextResponse } from "next/server";
import { ID, databases, storage } from "../../../../../appwrite";
import uploadImage from "@/lib/uploadImage";
import getURL from "@/lib/getURL";
//import { ID, databases, storage } from "../../../../appwrite";

export async function POST(request: Request) {
  const newTask: NewTask = await request.json();
  // const { title, image: file, status } = newTask;

  try {
    const uploadedTask = await databases.createDocument(
      process.env.TRELLO_CLONE_DATABASE_ID!,
      process.env.TASKS_COLLECTION_ID!,
      ID.unique(),
      newTask
      /* {
        title,
        status,
        ...(file && { image: url.toString() }),
      } */
    );

    // console.log(uploadedTask);
    return NextResponse.json(
      { message: "task updated", uploadedTask },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
}
