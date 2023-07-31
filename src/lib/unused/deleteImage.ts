import { ID, storage } from "../../../appwrite";

const deleteImage = async (task: Task) => {
  if (!task.imageBucketId || !task.imageFileId) return;
  const res = await storage.deleteFile(task.imageBucketId, task.imageFileId);

  return res;
};

export default deleteImage;
