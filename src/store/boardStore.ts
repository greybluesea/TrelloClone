import callAddTask from "@/lib/callAddTask";
import { callDeleteTask } from "@/lib/callDeleteTask";
import { callGetBoard } from "@/lib/callGetBoard";
import { callPutTask } from "@/lib/callPutTask";
import uploadImage from "@/lib/uploadImage";
import getURL from "@/lib/getURL";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoard: (board: Board) => void;
  setTask: (task: Task) => void;
  searchText: string;
  setSearchText: (searchText: string) => void;
  deleteTask: (taskIndex: number, task: Task) => void;
  addTask: (newTaskInput: NewTaskInput) => void;
}

const useBoardStore = create<BoardState>()((set, get) => ({
  board: {
    lists: new Map<Status, List>(),
  },
  getBoard: async () => {
    const board = await callGetBoard();
    set({ board });
  },
  setBoard: (board) => set({ board }),
  setTask: async (task) => {
    await callPutTask(task);
  },
  searchText: "",
  setSearchText: (searchText) => set({ searchText }),
  deleteTask: (taskIndex: number, task: Task) => {
    const newLists = new Map(get().board.lists);
    if (
      !newLists.get(task.status) ||
      newLists.get(task.status)?.tasks.length === 0
    )
      return console.error("No list found");
    newLists.get(task.status)!.tasks.splice(taskIndex, 1);
    set({ board: { lists: newLists } });
    callDeleteTask(task);
    console.log(task);
  },
  addTask: async (newTaskInput: NewTaskInput) => {
    const getNewTask = async () => {
      let newTask: NewTask;
      if (newTaskInput.file) {
        const res = await uploadImage(newTaskInput.file);
        let uploadedImage: Image;
        if (res) {
          uploadedImage = {
            bucketId: res.bucketId,
            fileId: res.$id,
          };

          const url = await getURL(uploadedImage);

          return (newTask = {
            title: newTaskInput.title,
            status: newTaskInput.status,
            image: url,
          });
        }
      } else {
        return (newTask = {
          title: newTaskInput.title,
          status: newTaskInput.status,
        });
      }
    };

    const newTask = await getNewTask();

    if (newTask) {
      const uploadedTask = await callAddTask(newTask);

      const newLists = new Map(get().board.lists);
      if (
        !newLists.get(newTask.status) ||
        newLists.get(newTask.status)?.tasks.length === 0
      )
        return console.error("No newTask");
      newLists.get(newTask.status)!.tasks.push(uploadedTask);
      set({ board: { lists: newLists } });
    }

    /* else {
      const uploadedTask = await callAddTask({
        title: newTaskInput.title,
        status: newTaskInput.status,
      });
} */
  },
}));

export default useBoardStore;
