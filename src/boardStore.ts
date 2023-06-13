import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import fetchBoard from "./lib/fetchBoard";
import { databases } from "../appwrite";
import updateTask from "./lib/updateTask";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoard: (board: Board) => void;
  setTask: (task: Task, newStatus: Status) => void;
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
  (set) => ({
    board: {
      lists: new Map<Status, List>(),
    },
    getBoard: async () => {
      const board = await fetchBoard();
      set({ board });
    },
    setBoard: (board) => set({ board }),
    setTask: async (task, newStatus) => {
      await updateTask(task, newStatus);
    },
  })
  /*  {
        name: "board-storage",
      }
    )
  ) */
);

export default useBoardStore;
