import { databases } from "../../../appwrite";

const updateTask = async (task: Task) => {
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
};

export default updateTask;
