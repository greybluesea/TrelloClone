import { callGetBoard } from "@/lib/callGetBoard";
import { create } from "zustand";
import updateTaskInDB from "../lib/updateTaskInDB";
import { deleteTaskInDB } from "@/lib/deleteTaskInDB";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoard: (board: Board) => void;
  setTask: (task: Task) => void;
  searchText: string;
  setSearchText: (searchText: string) => void;
  deleteTask: (taskIndex: number, task: Task) => void;
}

const useBoardStore = create<BoardState>()(
  /* (set) => ({
    board: {
      columns: new Map<Status, Column>(),
    },
    getBoard: async () => {
      const board = await getTodosGroupedByStatus();
      set({ board });
    },
  }) */
  /*  devtools(
    persist( */
  (set, get) => ({
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
      await updateTaskInDB(task);
      /* await callPutTask(task); */
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
  })
  /*  {
        name: "board-storage",
      }
    )
  ) */
);

export default useBoardStore;
