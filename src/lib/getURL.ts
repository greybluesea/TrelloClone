import React from "react";
import { storage } from "../../appwrite";

export default function getURL(image: Image) {
  const url = storage.getFilePreview(image.bucketId, image.fileId);
  return url;
}
