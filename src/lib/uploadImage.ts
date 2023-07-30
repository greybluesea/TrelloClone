import { ID, storage } from "../../appwrite";

const uploadImage = async (file: File) => {
  console.log(file);
  //if (!file) return;
  const res = await storage.createFile(
    process.env.NEXT_PUBLIC_TRELLO_CLONE_BUCKET_ID!,
    // "64851ddbc042ca20c1fb",
    //"64c62d68ba337db8dd44",
    ID.unique(),
    file
  );
  console.log(res);
  return res;
};

export default uploadImage;
