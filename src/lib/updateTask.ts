import { databases } from "../../appwrite";

const updateTask = async (task: Task, newStatus: Status) => {
  await databases.updateDocument(
    process.env.NEXT_PUBLIC_TRELLO_CLONE_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TASKS_COLLECTION_ID!,
    task.$id,
    {
      title: task.title,
      status: newStatus,
      ...(task.image && { image: task.image }),
    }
  );
};

export default updateTask;
