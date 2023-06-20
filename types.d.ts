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
  image?: Image;
}

interface Image {
  bucketId: string;
  fileId: string;
}

interface NewTaskInput {
  title: string;
  status: Status;
  image?: Image;
}
