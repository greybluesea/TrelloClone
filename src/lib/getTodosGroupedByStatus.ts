import { databases } from "../../appwrite";

const getTodosGroupedByStatus = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_TRELLO_CLONE_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
  );
  console.log(data);
};

export default getTodosGroupedByStatus;
