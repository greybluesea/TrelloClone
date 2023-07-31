interface Board {
  lists: Map<Status, List>;
}

type Status = "todo" | "doing" | "done";

interface List {
  status: Status;
  tasks: Task[];
}

interface Task extends Models.Document {
  $id: string;
  $createdAt: string;
  title: string;
  status: Status;
  imageURL?: string;
  imageBucketId?: string;
  imageFileId?: string;
}

interface Image {
  imageBucketId: string;
  imageFileId: string;
}

interface NewTaskInput {
  title: string;
  status: Status;
  file?: File;
}

interface NewTask {
  title: string;
  status: Status;
  imageURL?: string;
  imageBucketId?: string;
  imageFileId?: string;
}
