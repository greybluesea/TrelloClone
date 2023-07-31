import React from "react";
import { storage } from "../../appwrite";

export default function getURL(image: Image) {
  const url = storage.getFileView(image.imageBucketId, image.imageFileId);
  return url;
}
