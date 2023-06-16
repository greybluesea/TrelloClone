import { callGetBoard } from "@/lib/callGetBoard";
import { create } from "zustand";
import updateTaskInDB from "../lib/unused/updateTaskInDB";
import { deleteTaskInDB } from "@/lib/deleteTaskInDB";
import { callPutTask } from "@/lib/callPutTask";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoard: (board: Board) => void;
  setTask: (task: Task) => void;
  searchText: string;
  setSearchText: (searchText: string) => void;
  deleteTask: (taskIndex: number, task: Task) => void;
}

const useBoardStore = create<BoardState>()((set, get) => ({
  board: {
    lists: new Map<Status, List>(),
  },
  getBoard: async () => {
    /* const board = await fetchBoard(); */
    const board = await callGetBoard();
    set({ board });
  },
  setBoard: (board) => set({ board }),
  setTask: async (task) => {
    /*  await updateTaskInDB(task); */
    await callPutTask(task);
  },
  searchText: "",
  setSearchText: (searchText) => set({ searchText }),
  deleteTask: (taskIndex: number, task: Task) => {
    const newLists = new Map(get().board.lists);
    if (
      !newLists.get(task?.status) ||
      newLists.get(task?.status)?.tasks.length === 0
    )
      return console.error("No list found");
    newLists.get(task?.status)!.tasks.splice(taskIndex, 1);
    set({ board: { lists: newLists } });
    deleteTaskInDB(task);
  },
}));

export default useBoardStore;
