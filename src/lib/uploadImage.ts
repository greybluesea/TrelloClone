import { ID, storage } from "../../appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;
  const res = await storage.createFile(
    process.env.NEXT_PUBLIC_TRELLO_CLONE_BUCKET_ID!,
    ID.unique(),
    file
  );

  return res;
};

export default uploadImage;
