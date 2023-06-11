interface Board {
  columns: Map<Status, Column>;
}

type Status = "todo" | "doing" | "done";

interface Column {
  id: Status;
  todos: Todo[];
}

interface Todo {
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
