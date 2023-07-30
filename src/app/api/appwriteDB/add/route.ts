import { NextRequest, NextResponse } from "next/server";
import { ID, databases, storage } from "../../../../../appwrite";
import uploadImage from "@/lib/uploadImage";
//import { ID, databases, storage } from "../../../../appwrite";

export async function POST(request: Request) {
  const newTask: Partial<Task> = await request.json();
  console.log(newTask);
  const { title, image, status } = newTask;
  /* const newTaskInput: NewTaskInput = await request.json();
  const { title, image, status } = newTaskInput;

   const uploadImage = async (image: File) => {
    if (image!) return;
    const uploadedImage = await storage.createFile(
      process.env.TRELLO_CLONE_BUCKET_ID!,
      ID.unique(),
      image
    );
    return uploadedImage;
  }; */

  try {
    /*  let uploadedImage: Image;
    if (image) {
      const res = await uploadImage(image);
      if (res) {
        uploadedImage = {
          bucketId: res.bucketId,
          fileId: res.$id,
        };
      }
    } */

    const uploadedTask = await databases.createDocument(
      process.env.TRELLO_CLONE_DATABASE_ID!,
      process.env.TASKS_COLLECTION_ID!,
      ID.unique(),
      {
        title,
        status,
        ...(image! && { image: JSON.stringify(image) }),
      }
    );
    return NextResponse.json(
      { message: "task updated", uploadedTask },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
}
