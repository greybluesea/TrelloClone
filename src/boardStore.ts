import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import fetchBoard from "./lib/fetchBoard";

interface BoardState {
  board: Board;
  getBoard: () => void;
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
  devtools(
    persist(
      (set) => ({
        board: {
          lists: new Map<Status, List>(),
        },
        getBoard: async () => {
          const board = await fetchBoard();
          set({ board });
        },
      }),
      {
        name: "board-storage",
      }
    )
  )
);

export default useBoardStore;
