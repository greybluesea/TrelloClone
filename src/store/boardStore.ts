import { callGetBoard } from "@/lib/callGetBoard";
import { create } from "zustand";
import updateTask from "../lib/updateTask";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoard: (board: Board) => void;
  setTask: (task: Task) => void;
  searchText: string;
  setSearchText: (searchText: string) => void;
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
      /* const board = await fetchBoard(); */
      const board = await callGetBoard();
      set({ board });
    },
    setBoard: (board) => set({ board }),
    setTask: async (task) => {
      await updateTask(task);
    },
    searchText: "",
    setSearchText: (searchText) => set({ searchText }),
  })
  /*  {
        name: "board-storage",
      }
    )
  ) */
);

export default useBoardStore;
