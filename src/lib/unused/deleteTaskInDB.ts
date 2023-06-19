import { databases, storage } from "../../../appwrite";

export async function deleteTaskInDB(task: Task) {
  await databases.deleteDocument(
    process.env.NEXT_PUBLIC_TRELLO_CLONE_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TASKS_COLLECTION_ID!,
    task.$id
  );
  if (task.image) {
    await storage.deleteFile(task.image.bucketId, task.image.fileId);
  }
}
