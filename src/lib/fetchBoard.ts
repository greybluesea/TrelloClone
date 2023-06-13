import { databases } from "../../appwrite";

const fetchBoard = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_TRELLO_CLONE_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TASKS_COLLECTION_ID!
  );

  const tasks = data.documents;

  const lists = tasks.reduce((acc, task) => {
    if (!acc.get(task.status)) {
      acc.set(task.status, {
        status: task.status,
        tasks: [],
      });
    }
    acc.get(task.status)!.tasks.push({
      title: task.title,
      $id: task.$id,
      status: task.status,
      $createdAt: task.$createdAt,
      ...(task.image && { image: task.image }),
    });
    return acc;
  }, new Map<Status, List>());

  const statusArray: Status[] = ["todo", "doing", "done"];

  statusArray.forEach((status) => {
    if (!lists.get(status)) {
      lists.set(status, {
        status,
        tasks: [],
      });
    }
  });

  const sortedLists = new Map(
    Array.from(lists.entries()).sort(
      (a, b) => statusArray.indexOf(a[0]) - statusArray.indexOf(b[0])
    )
  );

  const board: Board = {
    lists: sortedLists,
  };

  return board;
};

export default fetchBoard;
